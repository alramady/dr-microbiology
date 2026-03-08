import { NextResponse } from 'next/server';
import { readCollection, writeCollection } from '@/lib/store';
import { getAuthUser } from '@/lib/auth';
import { seedSiteSettings } from '@/lib/seed';
import type { SiteSettings } from '@/lib/types';

export async function GET() {
  try {
    const user = await getAuthUser();
    if (!user) {
      return NextResponse.json({ error: 'غير مصرح' }, { status: 401 });
    }

    seedSiteSettings();
    const settings = readCollection<SiteSettings>('settings');
    return NextResponse.json({ data: settings[0] || {} });
  } catch {
    return NextResponse.json({ error: 'حدث خطأ في الخادم' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const user = await getAuthUser();
    if (!user) {
      return NextResponse.json({ error: 'غير مصرح' }, { status: 401 });
    }

    const body = await request.json();
    const settings = readCollection<SiteSettings>('settings');
    
    if (settings.length > 0) {
      const updated = { ...settings[0], ...body, updatedAt: new Date().toISOString() };
      writeCollection('settings', [updated]);
      return NextResponse.json({ success: true, data: updated });
    } else {
      const newSettings = { ...body, id: '1', updatedAt: new Date().toISOString() };
      writeCollection('settings', [newSettings]);
      return NextResponse.json({ success: true, data: newSettings });
    }
  } catch {
    return NextResponse.json({ error: 'حدث خطأ في الخادم' }, { status: 500 });
  }
}
