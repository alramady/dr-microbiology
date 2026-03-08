'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Microscope, Lock, User, Eye, EyeOff } from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok) {
        router.push('/admin/dashboard');
      } else {
        setError(data.error || 'حدث خطأ في تسجيل الدخول');
      }
    } catch {
      setError('حدث خطأ في الاتصال بالخادم');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden noise-overlay" style={{
      background: 'linear-gradient(160deg, #050d18 0%, #0c1b2a 25%, #132d46 50%, #1a3a5c 75%, #0c1b2a 100%)'
    }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1b8a7a]/6 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#c8a45e]/5 rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="relative w-full max-w-md mx-4 animate-fadeInUp">
        <div className="bg-white rounded-3xl shadow-2xl p-10 border border-[#0000000a]">
          {/* Logo */}
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-gradient-to-br from-[#0c1b2a] to-[#1a3a5c] rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg">
              <Microscope className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-[#0c1b2a]">لوحة التحكم</h1>
            <p className="text-[#8b93a7] text-sm mt-2 font-light">تسجيل الدخول للوحة إدارة المحتوى</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="form-label">اسم المستخدم</label>
              <div className="relative">
                <User className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8b93a7]" />
                <input
                  type="text"
                  required
                  className="form-input pr-11"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="أدخل اسم المستخدم"
                />
              </div>
            </div>

            <div>
              <label className="form-label">كلمة المرور</label>
              <div className="relative">
                <Lock className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8b93a7]" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  className="form-input pr-11 pl-11"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="أدخل كلمة المرور"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8b93a7] hover:text-[#0c1b2a] transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {error && (
              <div className="p-4 bg-red-50 text-red-700 rounded-xl text-sm text-center border border-red-100">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full btn-primary justify-center text-base py-4 disabled:opacity-50"
            >
              <span>{isLoading ? 'جاري تسجيل الدخول...' : 'تسجيل الدخول'}</span>
            </button>
          </form>

          <div className="mt-8 p-4 bg-[#faf8f5] rounded-xl border border-[#0000000a]">
            <p className="text-xs text-[#8b93a7] text-center font-light">
              بيانات الدخول الافتراضية: admin / admin123
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
