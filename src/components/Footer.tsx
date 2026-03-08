'use client';

import Link from 'next/link';
import { Microscope, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden noise-overlay bg-mesh-dark">
      {/* Top decorative line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-gold/40 to-transparent"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="ring-decoration w-[300px] h-[300px] bottom-[-100px] right-[-100px] border-white/3 animate-rotate-slow"></div>
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500/20 to-gold/20 rounded-2xl flex items-center justify-center border border-white/5 shadow-lg">
                <Microscope className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h3 className="text-base font-black text-white">د. الأحياء الدقيقة</h3>
                <p className="text-[0.6rem] text-white/25 font-bold tracking-[0.2em] uppercase">Microbiology Specialist</p>
              </div>
            </div>
            <p className="text-white/30 text-sm leading-[2]">
              متخصصة في مجال الأحياء الدقيقة مع خبرة واسعة في البحث العلمي والتدريس الأكاديمي.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-black mb-8 text-gold tracking-wider">روابط سريعة</h4>
            <ul className="space-y-4">
              {[
                { href: '/about', label: 'السيرة الذاتية' },
                { href: '/research', label: 'الأبحاث' },
                { href: '/publications', label: 'المنشورات العلمية' },
                { href: '/courses', label: 'المقررات الدراسية' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/30 hover:text-white/70 text-sm transition-all duration-300 font-medium hover:translate-x-[-4px] inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-black mb-8 text-gold tracking-wider">معلومات التواصل</h4>
            <ul className="space-y-5">
              <li className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-500/15 to-teal-500/5 flex items-center justify-center group-hover:from-teal-500/25 group-hover:to-teal-500/10 transition-all duration-300">
                  <Mail className="w-4 h-4 text-teal-400" />
                </div>
                <span className="text-white/30 text-sm font-medium group-hover:text-white/50 transition-colors">contact@drmicrobiology.com</span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-500/15 to-teal-500/5 flex items-center justify-center group-hover:from-teal-500/25 group-hover:to-teal-500/10 transition-all duration-300">
                  <Phone className="w-4 h-4 text-teal-400" />
                </div>
                <span className="text-white/30 text-sm font-medium group-hover:text-white/50 transition-colors" dir="ltr">+966 XX XXX XXXX</span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-500/15 to-teal-500/5 flex items-center justify-center group-hover:from-teal-500/25 group-hover:to-teal-500/10 transition-all duration-300">
                  <MapPin className="w-4 h-4 text-teal-400" />
                </div>
                <span className="text-white/30 text-sm font-medium group-hover:text-white/50 transition-colors">قسم الأحياء الدقيقة، كلية العلوم</span>
              </li>
            </ul>
          </div>

          {/* Academic Links */}
          <div>
            <h4 className="text-sm font-black mb-8 text-gold tracking-wider">الملفات الأكاديمية</h4>
            <ul className="space-y-4">
              {[
                { label: 'Google Scholar', href: '#' },
                { label: 'ResearchGate', href: '#' },
                { label: 'ORCID', href: '#' },
                { label: 'LinkedIn', href: '#' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/30 hover:text-white/70 text-sm transition-all duration-300 font-medium inline-flex items-center gap-2 hover:translate-x-[-4px]"
                  >
                    {link.label}
                    <ExternalLink className="w-3 h-3 opacity-40" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/20 text-xs font-medium tracking-wider">
              &copy; {new Date().getFullYear()} جميع الحقوق محفوظة | د. الأحياء الدقيقة
            </p>
            <div className="flex items-center gap-2">
              <div className="w-8 h-1 rounded-full bg-gradient-to-r from-teal-500/40 to-teal-500/10"></div>
              <div className="w-4 h-1 rounded-full bg-gold/30"></div>
              <div className="w-2 h-1 rounded-full bg-white/15"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
