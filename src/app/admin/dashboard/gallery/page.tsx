'use client';

import AdminCRUD from '@/components/AdminCRUD';
import type { FieldConfig } from '@/components/AdminCRUD';

const fields: FieldConfig[] = [
  { name: 'title', label: 'العنوان', type: 'text', required: true, placeholder: 'عنوان الصورة' },
  { name: 'description', label: 'الوصف', type: 'textarea', placeholder: 'وصف الصورة' },
  { name: 'imageUrl', label: 'رابط الصورة', type: 'url', required: true, placeholder: 'https://...', dir: 'ltr' },
  { name: 'category', label: 'التصنيف', type: 'select', options: [
    { value: 'مختبر', label: 'مختبر' },
    { value: 'مؤتمرات', label: 'مؤتمرات' },
    { value: 'فعاليات', label: 'فعاليات' },
    { value: 'تكريمات', label: 'تكريمات' },
    { value: 'أخرى', label: 'أخرى' },
  ]},
  { name: 'isPublished', label: 'منشور', type: 'checkbox', placeholder: 'نشر على الموقع' },
];

export default function GalleryAdmin() {
  return (
    <AdminCRUD
      collection="gallery"
      title="إدارة معرض الصور"
      fields={fields}
      displayFields={['title', 'category', 'isPublished']}
    />
  );
}
