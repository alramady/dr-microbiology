import { NextResponse } from 'next/server';
import { readCollection, addItem, updateItem, deleteItem, generateId } from '@/lib/store';
import { getAuthUser } from '@/lib/auth';

const ALLOWED_COLLECTIONS = [
  'publications', 'research', 'courses', 'achievements', 'news',
  'gallery', 'team', 'settings', 'contact_messages'
];

export async function GET(
  request: Request,
  { params }: { params: Promise<{ collection: string }> }
) {
  try {
    const user = await getAuthUser();
    if (!user) {
      return NextResponse.json({ error: 'غير مصرح' }, { status: 401 });
    }

    const { collection } = await params;
    if (!ALLOWED_COLLECTIONS.includes(collection)) {
      return NextResponse.json({ error: 'مجموعة غير صالحة' }, { status: 400 });
    }

    const data = readCollection(collection);
    return NextResponse.json({ data });
  } catch {
    return NextResponse.json({ error: 'حدث خطأ في الخادم' }, { status: 500 });
  }
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ collection: string }> }
) {
  try {
    const user = await getAuthUser();
    if (!user) {
      return NextResponse.json({ error: 'غير مصرح' }, { status: 401 });
    }

    const { collection } = await params;
    if (!ALLOWED_COLLECTIONS.includes(collection)) {
      return NextResponse.json({ error: 'مجموعة غير صالحة' }, { status: 400 });
    }

    const body = await request.json();
    const item = {
      ...body,
      id: generateId(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    addItem(collection, item);
    return NextResponse.json({ success: true, data: item }, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'حدث خطأ في الخادم' }, { status: 500 });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ collection: string }> }
) {
  try {
    const user = await getAuthUser();
    if (!user) {
      return NextResponse.json({ error: 'غير مصرح' }, { status: 401 });
    }

    const { collection } = await params;
    if (!ALLOWED_COLLECTIONS.includes(collection)) {
      return NextResponse.json({ error: 'مجموعة غير صالحة' }, { status: 400 });
    }

    const body = await request.json();
    const { id, ...updates } = body;

    if (!id) {
      return NextResponse.json({ error: 'معرف العنصر مطلوب' }, { status: 400 });
    }

    const updated = updateItem(collection, id, { ...updates, updatedAt: new Date().toISOString() });
    if (!updated) {
      return NextResponse.json({ error: 'العنصر غير موجود' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: updated });
  } catch {
    return NextResponse.json({ error: 'حدث خطأ في الخادم' }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ collection: string }> }
) {
  try {
    const user = await getAuthUser();
    if (!user) {
      return NextResponse.json({ error: 'غير مصرح' }, { status: 401 });
    }

    const { collection } = await params;
    if (!ALLOWED_COLLECTIONS.includes(collection)) {
      return NextResponse.json({ error: 'مجموعة غير صالحة' }, { status: 400 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'معرف العنصر مطلوب' }, { status: 400 });
    }

    const deleted = deleteItem(collection, id);
    if (!deleted) {
      return NextResponse.json({ error: 'العنصر غير موجود' }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'حدث خطأ في الخادم' }, { status: 500 });
  }
}
