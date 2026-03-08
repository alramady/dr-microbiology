'use client';

import { useState, useEffect } from 'react';
import { Save, Settings } from 'lucide-react';

export default function SettingsAdmin() {
  const [settings, setSettings] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      const res = await fetch('/api/admin/settings');
      if (res.ok) {
        const data = await res.json();
        setSettings(data.data || {});
      }
    } catch (err) {
      console.error('Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    setMessage('');
    try {
      const res = await fetch('/api/admin/settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings),
      });
      if (res.ok) {
        setMessage('تم حفظ الإعدادات بنجاح');
        setTimeout(() => setMessage(''), 3000);
      }
    } catch (err) {
      console.error('Error:', err);
      setMessage('حدث خطأ أثناء الحفظ');
    } finally {
      setIsSaving(false);
    }
  };

  const updateField = (key: string, value: string) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const sections = [
    {
      title: 'معلومات الموقع',
      fields: [
        { key: 'siteName', label: 'اسم الموقع (عربي)', type: 'text' },
        { key: 'siteNameEn', label: 'اسم الموقع (إنجليزي)', type: 'text', dir: 'ltr' },
        { key: 'metaDescription', label: 'وصف الموقع (SEO)', type: 'textarea' },
        { key: 'metaKeywords', label: 'الكلمات المفتاحية (SEO)', type: 'text' },
      ],
    },
    {
      title: 'معلومات الدكتورة',
      fields: [
        { key: 'doctorName', label: 'الاسم (عربي)', type: 'text' },
        { key: 'doctorNameEn', label: 'الاسم (إنجليزي)', type: 'text', dir: 'ltr' },
        { key: 'doctorTitle', label: 'اللقب الأكاديمي (عربي)', type: 'text' },
        { key: 'doctorTitleEn', label: 'اللقب الأكاديمي (إنجليزي)', type: 'text', dir: 'ltr' },
        { key: 'specialization', label: 'التخصص (عربي)', type: 'text' },
        { key: 'specializationEn', label: 'التخصص (إنجليزي)', type: 'text', dir: 'ltr' },
      ],
    },
    {
      title: 'الصفحة الرئيسية',
      fields: [
        { key: 'heroTitle', label: 'عنوان الصفحة الرئيسية', type: 'text' },
        { key: 'heroSubtitle', label: 'العنوان الفرعي', type: 'text' },
        { key: 'heroImage', label: 'رابط صورة الغلاف', type: 'text', dir: 'ltr' },
        { key: 'profileImage', label: 'رابط الصورة الشخصية', type: 'text', dir: 'ltr' },
      ],
    },
    {
      title: 'نبذة عني',
      fields: [
        { key: 'aboutText', label: 'النبذة (عربي)', type: 'textarea' },
        { key: 'aboutTextEn', label: 'النبذة (إنجليزي)', type: 'textarea', dir: 'ltr' },
      ],
    },
    {
      title: 'معلومات التواصل',
      fields: [
        { key: 'email', label: 'البريد الإلكتروني', type: 'text', dir: 'ltr' },
        { key: 'phone', label: 'رقم الهاتف', type: 'text', dir: 'ltr' },
        { key: 'address', label: 'العنوان', type: 'text' },
      ],
    },
    {
      title: 'الروابط الأكاديمية',
      fields: [
        { key: 'googleScholarUrl', label: 'Google Scholar', type: 'text', dir: 'ltr' },
        { key: 'researchGateUrl', label: 'ResearchGate', type: 'text', dir: 'ltr' },
        { key: 'orcidUrl', label: 'ORCID', type: 'text', dir: 'ltr' },
        { key: 'linkedinUrl', label: 'LinkedIn', type: 'text', dir: 'ltr' },
        { key: 'twitterUrl', label: 'Twitter / X', type: 'text', dir: 'ltr' },
      ],
    },
  ];

  if (isLoading) {
    return (
      <div className="text-center py-12">
        <div className="w-8 h-8 border-4 border-[#0f4c75] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-[#0f4c75] flex items-center gap-2">
            <Settings className="w-7 h-7" />
            إعدادات الموقع
          </h1>
          <p className="text-gray-500 text-sm mt-1">تعديل المعلومات الأساسية للموقع</p>
        </div>
        <button onClick={handleSave} disabled={isSaving} className="btn-primary disabled:opacity-50">
          <Save className="w-5 h-5" />
          {isSaving ? 'جاري الحفظ...' : 'حفظ الإعدادات'}
        </button>
      </div>

      {message && (
        <div className={`p-4 rounded-xl mb-6 text-sm ${
          message.includes('خطأ') ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'
        }`}>
          {message}
        </div>
      )}

      <div className="space-y-6">
        {sections.map((section, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-[#0f4c75] mb-4 pb-3 border-b">{section.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {section.fields.map((field) => (
                <div key={field.key} className={field.type === 'textarea' ? 'md:col-span-2' : ''}>
                  <label className="form-label">{field.label}</label>
                  {field.type === 'textarea' ? (
                    <textarea
                      rows={4}
                      className="form-input"
                      value={settings[field.key] || ''}
                      onChange={(e) => updateField(field.key, e.target.value)}
                      dir={field.dir}
                    />
                  ) : (
                    <input
                      type="text"
                      className="form-input"
                      value={settings[field.key] || ''}
                      onChange={(e) => updateField(field.key, e.target.value)}
                      dir={field.dir}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
