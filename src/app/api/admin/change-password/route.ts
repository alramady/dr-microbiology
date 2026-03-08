import { NextResponse } from 'next/server';
import { readCollection, writeCollection } from '@/lib/store';
import { getAuthUser, verifyPassword, hashPassword } from '@/lib/auth';
import type { AdminUser } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const user = await getAuthUser();
    if (!user) {
      return NextResponse.json({ error: 'غير مصرح' }, { status: 401 });
    }

    const body = await request.json();
    const { currentPassword, newPassword } = body;

    if (!currentPassword || !newPassword) {
      return NextResponse.json({ error: 'جميع الحقول مطلوبة' }, { status: 400 });
    }

    if (newPassword.length < 6) {
      return NextResponse.json({ error: 'كلمة المرور يجب أن تكون 6 أحرف على الأقل' }, { status: 400 });
    }

    const isValid = await verifyPassword(currentPassword, user.password);
    if (!isValid) {
      return NextResponse.json({ error: 'كلمة المرور الحالية غير صحيحة' }, { status: 401 });
    }

    const hashedPassword = await hashPassword(newPassword);
    const users = readCollection<AdminUser>('admin_users');
    const updatedUsers = users.map(u => 
      u.id === user.id ? { ...u, password: hashedPassword } : u
    );
    writeCollection('admin_users', updatedUsers);

    return NextResponse.json({ success: true, message: 'تم تغيير كلمة المرور بنجاح' });
  } catch {
    return NextResponse.json({ error: 'حدث خطأ في الخادم' }, { status: 500 });
  }
}
