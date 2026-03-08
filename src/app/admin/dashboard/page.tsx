'use client';

import { useState, useEffect } from 'react';
import { BookOpen, FlaskConical, GraduationCap, Mail, Newspaper, Award, Image, Users, Settings } from 'lucide-react';

interface Stats {
  publications: number;
  research: number;
  courses: number;
  messages: number;
  news: number;
  achievements: number;
  gallery: number;
  team: number;
  unreadMessages: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({
    publications: 0, research: 0, courses: 0, messages: 0,
    news: 0, achievements: 0, gallery: 0, team: 0, unreadMessages: 0,
  });

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    const collections = ['publications', 'research', 'courses', 'contact_messages', 'news', 'achievements', 'gallery', 'team'];
    const results: Record<string, number> = {};

    for (const col of collections) {
      try {
        const res = await fetch(`/api/admin/${col}`);
        if (res.ok) {
          const data = await res.json();
          results[col] = data.data?.length || 0;
        }
      } catch {
        results[col] = 0;
      }
    }

    setStats({
      publications: results.publications || 0,
      research: results.research || 0,
      courses: results.courses || 0,
      messages: results.contact_messages || 0,
      news: results.news || 0,
      achievements: results.achievements || 0,
      gallery: results.gallery || 0,
      team: results.team || 0,
      unreadMessages: 0,
    });
  };

  const statCards = [
    { label: 'المنشورات العلمية', value: stats.publications, icon: BookOpen, color: 'bg-blue-500', bgColor: 'bg-blue-50' },
    { label: 'المشاريع البحثية', value: stats.research, icon: FlaskConical, color: 'bg-green-500', bgColor: 'bg-green-50' },
    { label: 'المقررات الدراسية', value: stats.courses, icon: GraduationCap, color: 'bg-purple-500', bgColor: 'bg-purple-50' },
    { label: 'الرسائل', value: stats.messages, icon: Mail, color: 'bg-red-500', bgColor: 'bg-red-50' },
    { label: 'الأخبار', value: stats.news, icon: Newspaper, color: 'bg-amber-500', bgColor: 'bg-amber-50' },
    { label: 'الجوائز', value: stats.achievements, icon: Award, color: 'bg-yellow-500', bgColor: 'bg-yellow-50' },
    { label: 'معرض الصور', value: stats.gallery, icon: Image, color: 'bg-teal-500', bgColor: 'bg-teal-50' },
    { label: 'فريق البحث', value: stats.team, icon: Users, color: 'bg-indigo-500', bgColor: 'bg-indigo-50' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#0f4c75]">لوحة التحكم</h1>
        <p className="text-gray-500 text-sm mt-1">مرحباً بك في لوحة إدارة المحتوى</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-sm card-hover">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 ${stat.bgColor} rounded-xl flex items-center justify-center`}>
                <stat.icon className={`w-6 h-6 ${stat.color.replace('bg-', 'text-')}`} />
              </div>
              <span className="text-3xl font-bold text-[#0f4c75]">{stat.value}</span>
            </div>
            <h3 className="text-gray-600 text-sm font-medium">{stat.label}</h3>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-lg font-bold text-[#0f4c75] mb-4">إجراءات سريعة</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'إضافة منشور', href: '/admin/dashboard/publications', icon: BookOpen, color: 'text-blue-500' },
            { label: 'إضافة بحث', href: '/admin/dashboard/research', icon: FlaskConical, color: 'text-green-500' },
            { label: 'إضافة خبر', href: '/admin/dashboard/news', icon: Newspaper, color: 'text-amber-500' },
            { label: 'إعدادات الموقع', href: '/admin/dashboard/settings', icon: Settings, color: 'text-gray-500' },
          ].map((action, index) => (
            <a
              key={index}
              href={action.href}
              className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <action.icon className={`w-6 h-6 ${action.color}`} />
              <span className="text-sm text-gray-700 font-medium">{action.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

