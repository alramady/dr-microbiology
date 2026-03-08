'use client';

import AdminCRUD from '@/components/AdminCRUD';
import type { FieldConfig } from '@/components/AdminCRUD';

const fields: FieldConfig[] = [
  { name: 'title', label: 'العنوان (عربي)', type: 'text', required: true, placeholder: 'عنوان المشروع البحثي' },
  { name: 'titleEn', label: 'العنوان (إنجليزي)', type: 'text', placeholder: 'Research project title', dir: 'ltr' },
  { name: 'description', label: 'الوصف (عربي)', type: 'textarea', required: true, placeholder: 'وصف المشروع البحثي' },
  { name: 'descriptionEn', label: 'الوصف (إنجليزي)', type: 'textarea', placeholder: 'Project description', dir: 'ltr' },
  { name: 'status', label: 'الحالة', type: 'select', required: true, options: [
    { value: 'ongoing', label: 'جاري' },
    { value: 'completed', label: 'مكتمل' },
    { value: 'planned', label: 'مخطط' },
  ]},
  { name: 'startDate', label: 'تاريخ البدء', type: 'date' },
  { name: 'endDate', label: 'تاريخ الانتهاء', type: 'date' },
  { name: 'fundingSource', label: 'مصدر التمويل', type: 'text', placeholder: 'الجهة الممولة' },
  { name: 'collaborators', label: 'المتعاونون', type: 'text', placeholder: 'الجهات المتعاونة' },
  { name: 'image', label: 'رابط الصورة', type: 'url', placeholder: 'https://...', dir: 'ltr' },
  { name: 'isPublished', label: 'منشور', type: 'checkbox', placeholder: 'نشر على الموقع' },
];

export default function ResearchAdmin() {
  return (
    <AdminCRUD
      collection="research"
      title="إدارة المشاريع البحثية"
      fields={fields}
      displayFields={['title', 'status', 'fundingSource', 'isPublished']}
    />
  );
}
