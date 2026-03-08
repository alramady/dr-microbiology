'use client';

import AdminCRUD from '@/components/AdminCRUD';
import type { FieldConfig } from '@/components/AdminCRUD';

const fields: FieldConfig[] = [
  { name: 'name', label: 'الاسم (عربي)', type: 'text', required: true, placeholder: 'اسم عضو الفريق' },
  { name: 'nameEn', label: 'الاسم (إنجليزي)', type: 'text', placeholder: 'Member name', dir: 'ltr' },
  { name: 'title', label: 'المسمى الوظيفي (عربي)', type: 'text', required: true, placeholder: 'باحث / طالب دراسات عليا' },
  { name: 'titleEn', label: 'المسمى الوظيفي (إنجليزي)', type: 'text', placeholder: 'Job title', dir: 'ltr' },
  { name: 'bio', label: 'نبذة (عربي)', type: 'textarea', placeholder: 'نبذة مختصرة عن العضو' },
  { name: 'bioEn', label: 'نبذة (إنجليزي)', type: 'textarea', placeholder: 'Short bio', dir: 'ltr' },
  { name: 'email', label: 'البريد الإلكتروني', type: 'text', placeholder: 'email@example.com', dir: 'ltr' },
  { name: 'role', label: 'الدور', type: 'select', options: [
    { value: 'باحث', label: 'باحث' },
    { value: 'طالب ماجستير', label: 'طالب ماجستير' },
    { value: 'طالب دكتوراه', label: 'طالب دكتوراه' },
    { value: 'فني مختبر', label: 'فني مختبر' },
    { value: 'باحث ما بعد الدكتوراه', label: 'باحث ما بعد الدكتوراه' },
  ]},
  { name: 'image', label: 'رابط الصورة', type: 'url', placeholder: 'https://...', dir: 'ltr' },
  { name: 'isPublished', label: 'منشور', type: 'checkbox', placeholder: 'نشر على الموقع' },
];

export default function TeamAdmin() {
  return (
    <AdminCRUD
      collection="team"
      title="إدارة فريق البحث"
      fields={fields}
      displayFields={['name', 'title', 'role', 'isPublished']}
    />
  );
}
