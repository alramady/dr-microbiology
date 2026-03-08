'use client';

import Link from 'next/link';
import { Microscope, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden noise-overlay" style={{
      background: 'linear-gradient(180deg, #0c1b2a 0%, #070f18 100%)'
    }}>
      {/* Decorative top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#c8a45e]/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-7">
              <div className="w-11 h-11 bg-gradient-to-br from-[#1b8a7a]/20 to-[#c8a45e]/20 rounded-xl flex items-center justify-center border border-white/5">
                <Microscope className="w-5 h-5 text-[#c8a45e]" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">د. الأحياء الدقيقة</h3>
                <p className="text-[0.65rem] text-white/30 font-medium tracking-[0.15em] uppercase">Microbiology Specialist</p>
              </div>
            </div>
            <p className="text-white/35 text-sm leading-[1.9] font-light">
              متخصصة في مجال الأحياء الدقيقة مع خبرة واسعة في البحث العلمي والتدريس الأكاديمي.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold mb-7 text-[#c8a45e] tracking-wide">روابط سريعة</h4>
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
                    className="text-white/35 hover:text-white/70 text-sm transition-colors duration-300 font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold mb-7 text-[#c8a45e] tracking-wide">معلومات التواصل</h4>
            <ul className="space-y-5">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-[#1b8a7a]" />
                </div>
                <span className="text-white/35 text-sm font-light">contact@drmicrobiology.com</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-[#1b8a7a]" />
                </div>
                <span className="text-white/35 text-sm font-light" dir="ltr">+966 XX XXX XXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-[#1b8a7a]" />
                </div>
                <span className="text-white/35 text-sm font-light">قسم الأحياء الدقيقة، كلية العلوم</span>
              </li>
            </ul>
          </div>

          {/* Academic Links */}
          <div>
            <h4 className="text-sm font-bold mb-7 text-[#c8a45e] tracking-wide">الملفات الأكاديمية</h4>
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
                    className="text-white/35 hover:text-white/70 text-sm transition-colors duration-300 font-light inline-flex items-center gap-2"
                  >
                    {link.label}
                    <ExternalLink className="w-3 h-3 opacity-50" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs font-light tracking-wide">
            &copy; {new Date().getFullYear()} جميع الحقوق محفوظة | د. الأحياء الدقيقة
          </p>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-[#1b8a7a]/50"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#c8a45e]/50"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
