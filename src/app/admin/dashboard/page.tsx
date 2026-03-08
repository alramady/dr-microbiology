'use client';

import { useState, useEffect } from 'react';
import { BookOpen, FlaskConical, GraduationCap, Mail, Newspaper, Award, Image, Users, Settings, ArrowLeft } from 'lucide-react';

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
    { label: 'المنشورات العلمية', value: stats.publications, icon: BookOpen, gradient: 'from-sky-500/10 to-sky-500/5', iconColor: 'text-sky-600' },
    { label: 'المشاريع البحثية', value: stats.research, icon: FlaskConical, gradient: 'from-emerald-500/10 to-emerald-500/5', iconColor: 'text-emerald-600' },
    { label: 'المقررات الدراسية', value: stats.courses, icon: GraduationCap, gradient: 'from-violet-500/10 to-violet-500/5', iconColor: 'text-violet-600' },
    { label: 'الرسائل', value: stats.messages, icon: Mail, gradient: 'from-rose-500/10 to-rose-500/5', iconColor: 'text-rose-600' },
    { label: 'الأخبار', value: stats.news, icon: Newspaper, gradient: 'from-amber-500/10 to-amber-500/5', iconColor: 'text-amber-600' },
    { label: 'الجوائز', value: stats.achievements, icon: Award, gradient: 'from-yellow-500/10 to-yellow-500/5', iconColor: 'text-yellow-600' },
    { label: 'معرض الصور', value: stats.gallery, icon: Image, gradient: 'from-teal-500/10 to-teal-500/5', iconColor: 'text-teal-600' },
    { label: 'فريق البحث', value: stats.team, icon: Users, gradient: 'from-indigo-500/10 to-indigo-500/5', iconColor: 'text-indigo-600' },
  ];

  return (
    <div>
      <div className="mb-10">
        <h1 className="text-2xl font-bold text-[#0c1b2a]">لوحة التحكم</h1>
        <p className="text-[#8b93a7] text-sm mt-2 font-light">مرحباً بك في لوحة إدارة المحتوى</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {statCards.map((stat, index) => (
          <div key={index} className="bg-white rounded-2xl p-6 border border-[#0000000a] hover:shadow-md transition-all duration-300 group cursor-default">
            <div className="flex items-center justify-between mb-5">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className={`w-5 h-5 ${stat.iconColor}`} />
              </div>
              <span className="text-3xl font-bold text-[#0c1b2a] tracking-tight">{stat.value}</span>
            </div>
            <h3 className="text-[#8b93a7] text-sm font-light">{stat.label}</h3>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl p-8 border border-[#0000000a]">
        <h2 className="text-lg font-bold text-[#0c1b2a] mb-6">إجراءات سريعة</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'إضافة منشور', href: '/admin/dashboard/publications', icon: BookOpen, iconColor: 'text-sky-600' },
            { label: 'إضافة بحث', href: '/admin/dashboard/research', icon: FlaskConical, iconColor: 'text-emerald-600' },
            { label: 'إضافة خبر', href: '/admin/dashboard/news', icon: Newspaper, iconColor: 'text-amber-600' },
            { label: 'إعدادات الموقع', href: '/admin/dashboard/settings', icon: Settings, iconColor: 'text-[#8b93a7]' },
          ].map((action, index) => (
            <a
              key={index}
              href={action.href}
              className="flex flex-col items-center gap-3 p-5 bg-[#faf8f5] rounded-xl hover:bg-[#0c1b2a]/5 transition-all duration-300 group"
            >
              <action.icon className={`w-6 h-6 ${action.iconColor}`} />
              <span className="text-sm text-[#5a6275] font-medium">{action.label}</span>
              <ArrowLeft className="w-3.5 h-3.5 text-[#8b93a7] opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
