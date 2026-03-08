'use client';

import AdminCRUD from '@/components/AdminCRUD';
import type { FieldConfig } from '@/components/AdminCRUD';

const fields: FieldConfig[] = [
  { name: 'title', label: 'العنوان (عربي)', type: 'text', required: true, placeholder: 'عنوان الخبر' },
  { name: 'titleEn', label: 'العنوان (إنجليزي)', type: 'text', placeholder: 'News title', dir: 'ltr' },
  { name: 'excerpt', label: 'المقتطف (عربي)', type: 'textarea', placeholder: 'مقتطف قصير من الخبر' },
  { name: 'content', label: 'المحتوى (عربي)', type: 'textarea', required: true, placeholder: 'المحتوى الكامل للخبر' },
  { name: 'contentEn', label: 'المحتوى (إنجليزي)', type: 'textarea', placeholder: 'Full content in English', dir: 'ltr' },
  { name: 'category', label: 'التصنيف', type: 'select', options: [
    { value: 'أخبار عامة', label: 'أخبار عامة' },
    { value: 'مؤتمرات', label: 'مؤتمرات' },
    { value: 'إنجازات', label: 'إنجازات' },
    { value: 'فعاليات', label: 'فعاليات' },
    { value: 'تعاون بحثي', label: 'تعاون بحثي' },
  ]},
  { name: 'image', label: 'رابط الصورة', type: 'url', placeholder: 'https://...', dir: 'ltr' },
  { name: 'isFeatured', label: 'مميز', type: 'checkbox', placeholder: 'عرض كخبر مميز' },
  { name: 'isPublished', label: 'منشور', type: 'checkbox', placeholder: 'نشر على الموقع' },
];

export default function NewsAdmin() {
  return (
    <AdminCRUD
      collection="news"
      title="إدارة الأخبار"
      fields={fields}
      displayFields={['title', 'category', 'isFeatured', 'isPublished']}
    />
  );
}
