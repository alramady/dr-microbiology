'use client';

import AdminCRUD from '@/components/AdminCRUD';
import type { FieldConfig } from '@/components/AdminCRUD';

const fields: FieldConfig[] = [
  { name: 'title', label: 'العنوان (عربي)', type: 'text', required: true, placeholder: 'عنوان الجائزة أو التكريم' },
  { name: 'titleEn', label: 'العنوان (إنجليزي)', type: 'text', placeholder: 'Award title', dir: 'ltr' },
  { name: 'description', label: 'الوصف (عربي)', type: 'textarea', placeholder: 'وصف الجائزة' },
  { name: 'descriptionEn', label: 'الوصف (إنجليزي)', type: 'textarea', placeholder: 'Award description', dir: 'ltr' },
  { name: 'year', label: 'السنة', type: 'text', required: true, placeholder: '2024' },
  { name: 'category', label: 'التصنيف', type: 'select', options: [
    { value: 'جائزة بحثية', label: 'جائزة بحثية' },
    { value: 'تكريم أكاديمي', label: 'تكريم أكاديمي' },
    { value: 'منحة', label: 'منحة' },
    { value: 'شهادة تقدير', label: 'شهادة تقدير' },
    { value: 'عضوية شرفية', label: 'عضوية شرفية' },
  ]},
  { name: 'image', label: 'رابط الصورة', type: 'url', placeholder: 'https://...', dir: 'ltr' },
  { name: 'isPublished', label: 'منشور', type: 'checkbox', placeholder: 'نشر على الموقع' },
];

export default function AchievementsAdmin() {
  return (
    <AdminCRUD
      collection="achievements"
      title="إدارة الجوائز والتكريمات"
      fields={fields}
      displayFields={['title', 'year', 'category', 'isPublished']}
    />
  );
}
