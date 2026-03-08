'use client';

import AdminCRUD from '@/components/AdminCRUD';
import type { FieldConfig } from '@/components/AdminCRUD';

const fields: FieldConfig[] = [
  { name: 'title', label: 'العنوان (عربي)', type: 'text', required: true, placeholder: 'عنوان المنشور بالعربية' },
  { name: 'titleEn', label: 'العنوان (إنجليزي)', type: 'text', placeholder: 'Publication title in English', dir: 'ltr' },
  { name: 'authors', label: 'المؤلفون', type: 'text', required: true, placeholder: 'أسماء المؤلفين' },
  { name: 'journal', label: 'المجلة', type: 'text', required: true, placeholder: 'اسم المجلة العلمية' },
  { name: 'year', label: 'السنة', type: 'text', required: true, placeholder: '2024' },
  { name: 'volume', label: 'المجلد', type: 'text', placeholder: 'رقم المجلد' },
  { name: 'pages', label: 'الصفحات', type: 'text', placeholder: '1-15' },
  { name: 'doi', label: 'DOI', type: 'text', placeholder: '10.xxxx/xxxxx', dir: 'ltr' },
  { name: 'abstract', label: 'الملخص (عربي)', type: 'textarea', placeholder: 'ملخص البحث بالعربية' },
  { name: 'abstractEn', label: 'الملخص (إنجليزي)', type: 'textarea', placeholder: 'Abstract in English', dir: 'ltr' },
  { name: 'category', label: 'التصنيف', type: 'select', options: [
    { value: 'بحث أصيل', label: 'بحث أصيل' },
    { value: 'مراجعة علمية', label: 'مراجعة علمية' },
    { value: 'دراسة حالة', label: 'دراسة حالة' },
    { value: 'فصل كتاب', label: 'فصل كتاب' },
    { value: 'مقال مؤتمر', label: 'مقال مؤتمر' },
  ]},
  { name: 'pdfUrl', label: 'رابط PDF', type: 'url', placeholder: 'https://...', dir: 'ltr' },
  { name: 'isPublished', label: 'منشور', type: 'checkbox', placeholder: 'نشر على الموقع' },
];

export default function PublicationsAdmin() {
  return (
    <AdminCRUD
      collection="publications"
      title="إدارة المنشورات العلمية"
      fields={fields}
      displayFields={['title', 'journal', 'year', 'category', 'isPublished']}
    />
  );
}
