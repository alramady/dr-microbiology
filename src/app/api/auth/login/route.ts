import { NextResponse } from 'next/server';
import { readCollection } from '@/lib/store';
import { verifyPassword, createToken, initializeAdmin } from '@/lib/auth';
import type { AdminUser } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    await initializeAdmin();
    
    const body = await request.json();
    const { username, password } = body;

    if (!username || !password) {
      return NextResponse.json({ error: 'يرجى إدخال اسم المستخدم وكلمة المرور' }, { status: 400 });
    }

    const users = readCollection<AdminUser>('admin_users');
    const user = users.find(u => u.username === username);

    if (!user) {
      return NextResponse.json({ error: 'اسم المستخدم أو كلمة المرور غير صحيحة' }, { status: 401 });
    }

    const isValid = await verifyPassword(password, user.password);
    if (!isValid) {
      return NextResponse.json({ error: 'اسم المستخدم أو كلمة المرور غير صحيحة' }, { status: 401 });
    }

    const token = await createToken(user.id, user.role);

    const response = NextResponse.json({
      success: true,
      user: { id: user.id, name: user.name, username: user.username, role: user.role },
    });

    response.cookies.set('auth-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60,
      path: '/',
    });

    return response;
  } catch {
    return NextResponse.json({ error: 'حدث خطأ في الخادم' }, { status: 500 });
  }
}
