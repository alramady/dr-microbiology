import { NextResponse } from 'next/server';
import { addItem, generateId } from '@/lib/store';
import type { ContactMessage } from '@/lib/types';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'جميع الحقول المطلوبة يجب ملؤها' }, { status: 400 });
    }

    const contactMessage: ContactMessage = {
      id: generateId(),
      name,
      email,
      phone: phone || '',
      subject,
      message,
      isRead: false,
      isReplied: false,
      createdAt: new Date().toISOString(),
    };

    addItem('contact_messages', contactMessage);

    return NextResponse.json({ success: true, message: 'تم إرسال الرسالة بنجاح' });
  } catch {
    return NextResponse.json({ error: 'حدث خطأ في الخادم' }, { status: 500 });
  }
}
