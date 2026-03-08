'use client';

import AdminCRUD from '@/components/AdminCRUD';
import type { FieldConfig } from '@/components/AdminCRUD';

const fields: FieldConfig[] = [
  { name: 'title', label: 'اسم المقرر (عربي)', type: 'text', required: true, placeholder: 'اسم المقرر الدراسي' },
  { name: 'titleEn', label: 'اسم المقرر (إنجليزي)', type: 'text', placeholder: 'Course name', dir: 'ltr' },
  { name: 'code', label: 'رمز المقرر', type: 'text', required: true, placeholder: 'MICRO 101' },
  { name: 'description', label: 'الوصف (عربي)', type: 'textarea', required: true, placeholder: 'وصف المقرر' },
  { name: 'descriptionEn', label: 'الوصف (إنجليزي)', type: 'textarea', placeholder: 'Course description', dir: 'ltr' },
  { name: 'level', label: 'المستوى', type: 'select', required: true, options: [
    { value: 'بكالوريوس', label: 'بكالوريوس' },
    { value: 'ماجستير', label: 'ماجستير' },
    { value: 'دكتوراه', label: 'دكتوراه' },
  ]},
  { name: 'semester', label: 'الفصل الدراسي', type: 'select', options: [
    { value: 'الأول', label: 'الأول' },
    { value: 'الثاني', label: 'الثاني' },
    { value: 'الصيفي', label: 'الصيفي' },
  ]},
  { name: 'year', label: 'السنة الأكاديمية', type: 'text', placeholder: '2024' },
  { name: 'syllabus', label: 'رابط الخطة الدراسية', type: 'url', placeholder: 'https://...', dir: 'ltr' },
  { name: 'isPublished', label: 'منشور', type: 'checkbox', placeholder: 'نشر على الموقع' },
];

export default function CoursesAdmin() {
  return (
    <AdminCRUD
      collection="courses"
      title="إدارة المقررات الدراسية"
      fields={fields}
      displayFields={['title', 'code', 'level', 'semester', 'isPublished']}
    />
  );
}
