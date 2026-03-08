'use client';

import Link from 'next/link';
import { Microscope, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0a3554] to-[#071e2f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <Microscope className="w-6 h-6 text-[#bbe1fa]" />
              </div>
              <div>
                <h3 className="text-lg font-bold">د. الأحياء الدقيقة</h3>
                <p className="text-xs text-white/60">Microbiology Specialist</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              متخصصة في مجال الأحياء الدقيقة مع خبرة واسعة في البحث العلمي والتدريس الأكاديمي.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#bbe1fa]">روابط سريعة</h4>
            <ul className="space-y-3">
              {[
                { href: '/about', label: 'السيرة الذاتية' },
                { href: '/research', label: 'الأبحاث' },
                { href: '/publications', label: 'المنشورات العلمية' },
                { href: '/courses', label: 'المقررات الدراسية' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#bbe1fa]">معلومات التواصل</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#c9a84c]" />
                <span className="text-white/70 text-sm">contact@drmicrobiology.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#c9a84c]" />
                <span className="text-white/70 text-sm" dir="ltr">+966 XX XXX XXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#c9a84c]" />
                <span className="text-white/70 text-sm">قسم الأحياء الدقيقة، كلية العلوم</span>
              </li>
            </ul>
          </div>

          {/* Academic Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#bbe1fa]">الملفات الأكاديمية</h4>
            <ul className="space-y-3">
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
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} جميع الحقوق محفوظة | د. الأحياء الدقيقة
          </p>
        </div>
      </div>
    </footer>
  );
}
