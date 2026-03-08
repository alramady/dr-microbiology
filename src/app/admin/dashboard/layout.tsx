'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  Microscope, LayoutDashboard, BookOpen, FlaskConical, GraduationCap,
  Award, Newspaper, Image, Users, Settings, Mail, LogOut, Menu, X,
  ChevronLeft, Lock
} from 'lucide-react';

const sidebarLinks = [
  { href: '/admin/dashboard', label: 'لوحة التحكم', icon: LayoutDashboard },
  { href: '/admin/dashboard/publications', label: 'المنشورات العلمية', icon: BookOpen },
  { href: '/admin/dashboard/research', label: 'المشاريع البحثية', icon: FlaskConical },
  { href: '/admin/dashboard/courses', label: 'المقررات الدراسية', icon: GraduationCap },
  { href: '/admin/dashboard/achievements', label: 'الجوائز والتكريمات', icon: Award },
  { href: '/admin/dashboard/news', label: 'الأخبار', icon: Newspaper },
  { href: '/admin/dashboard/gallery', label: 'معرض الصور', icon: Image },
  { href: '/admin/dashboard/team', label: 'فريق البحث', icon: Users },
  { href: '/admin/dashboard/messages', label: 'الرسائل', icon: Mail },
  { href: '/admin/dashboard/settings', label: 'إعدادات الموقع', icon: Settings },
  { href: '/admin/dashboard/password', label: 'تغيير كلمة المرور', icon: Lock },
];

export default function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState<{ name: string; role: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const res = await fetch('/api/auth/me');
      if (res.ok) {
        const data = await res.json();
        setUser(data.user);
      } else {
        router.push('/admin/login');
      }
    } catch {
      router.push('/admin/login');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/admin/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[#0f4c75] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-500">جاري التحميل...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f0f2f5]" dir="rtl">
      {/* Sidebar */}
      <aside className={`fixed top-0 right-0 h-full w-64 z-40 transition-transform duration-300 ${
        sidebarOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'
      }`} style={{
        background: 'linear-gradient(180deg, #0a3554 0%, #0f4c75 100%)'
      }}>
        {/* Logo */}
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
              <Microscope className="w-6 h-6 text-[#bbe1fa]" />
            </div>
            <div>
              <h2 className="text-white font-bold text-sm">لوحة التحكم</h2>
              <p className="text-white/50 text-xs">إدارة المحتوى</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-1 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 180px)' }}>
          {sidebarLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-all ${
                  isActive
                    ? 'bg-white/15 text-white font-medium'
                    : 'text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                <link.icon className="w-5 h-5" />
                <span>{link.label}</span>
                {isActive && <ChevronLeft className="w-4 h-4 mr-auto" />}
              </Link>
            );
          })}
        </nav>

        {/* User Info */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-[#c9a84c] rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">{user?.name?.charAt(0) || 'م'}</span>
            </div>
            <div>
              <p className="text-white text-sm font-medium">{user?.name || 'مدير'}</p>
              <p className="text-white/50 text-xs">{user?.role || 'admin'}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-white/60 hover:text-red-400 text-sm transition-colors w-full px-2"
          >
            <LogOut className="w-4 h-4" />
            <span>تسجيل الخروج</span>
          </button>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="lg:mr-64">
        {/* Top Bar */}
        <header className="bg-white shadow-sm sticky top-0 z-20">
          <div className="flex items-center justify-between px-6 py-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <div className="flex items-center gap-4">
              <Link href="/" target="_blank" className="text-sm text-[#3282b8] hover:underline">
                عرض الموقع
              </Link>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
