'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  Microscope, LayoutDashboard, BookOpen, FlaskConical, GraduationCap,
  Award, Newspaper, Image, Users, Settings, Mail, LogOut, Menu, X,
  ChevronLeft, Lock, ExternalLink
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
      <div className="min-h-screen flex items-center justify-center" style={{ background: '#faf8f5' }}>
        <div className="text-center">
          <div className="w-12 h-12 border-3 border-[#0c1b2a] border-t-transparent rounded-full animate-spin mx-auto mb-5"></div>
          <p className="text-[#8b93a7] text-sm font-light">جاري التحميل...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: '#f7f5f2' }} dir="rtl">
      {/* Sidebar */}
      <aside className={`fixed top-0 right-0 h-full w-[270px] z-40 transition-transform duration-500 ease-out ${
        sidebarOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'
      }`} style={{
        background: 'linear-gradient(180deg, #0c1b2a 0%, #132d46 50%, #0c1b2a 100%)'
      }}>
        {/* Logo */}
        <div className="p-6 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#1b8a7a]/20 to-[#c8a45e]/20 rounded-xl flex items-center justify-center border border-white/5">
              <Microscope className="w-5 h-5 text-[#c8a45e]" />
            </div>
            <div>
              <h2 className="text-white font-bold text-sm">لوحة التحكم</h2>
              <p className="text-white/30 text-[0.65rem] font-medium tracking-[0.1em] uppercase">Content Management</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-1 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 200px)' }}>
          {sidebarLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-[0.82rem] transition-all duration-300 ${
                  isActive
                    ? 'bg-white/10 text-white font-semibold border border-white/5'
                    : 'text-white/40 hover:bg-white/5 hover:text-white/70'
                }`}
              >
                <link.icon className={`w-[18px] h-[18px] ${isActive ? 'text-[#c8a45e]' : ''}`} />
                <span>{link.label}</span>
                {isActive && <ChevronLeft className="w-3.5 h-3.5 mr-auto text-[#c8a45e]" />}
              </Link>
            );
          })}
        </nav>

        {/* User Info */}
        <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-white/5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 bg-gradient-to-br from-[#c8a45e] to-[#dfc07f] rounded-xl flex items-center justify-center">
              <span className="text-[#0c1b2a] text-sm font-bold">{user?.name?.charAt(0) || 'م'}</span>
            </div>
            <div>
              <p className="text-white text-sm font-semibold">{user?.name || 'مدير'}</p>
              <p className="text-white/25 text-[0.65rem] font-light">{user?.role || 'admin'}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-white/30 hover:text-red-400 text-xs transition-colors duration-300 w-full px-1 font-light"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>تسجيل الخروج</span>
          </button>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="lg:mr-[270px]">
        {/* Top Bar */}
        <header className="bg-white/80 backdrop-blur-xl sticky top-0 z-20 border-b border-[#0000000a]">
          <div className="flex items-center justify-between px-6 py-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2.5 text-[#0c1b2a] hover:bg-[#0c1b2a]/5 rounded-xl transition-colors"
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <div className="flex items-center gap-4">
              <Link href="/" target="_blank" className="text-sm text-[#1b8a7a] hover:text-[#0c1b2a] transition-colors font-medium flex items-center gap-1.5">
                <ExternalLink className="w-3.5 h-3.5" />
                عرض الموقع
              </Link>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
