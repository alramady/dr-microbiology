'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Microscope } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'الرئيسية' },
  { href: '/about', label: 'السيرة الذاتية' },
  { href: '/research', label: 'الأبحاث' },
  { href: '/publications', label: 'المنشورات العلمية' },
  { href: '/courses', label: 'المقررات الدراسية' },
  { href: '/news', label: 'الأخبار' },
  { href: '/contact', label: 'تواصل معنا' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
              scrolled ? 'bg-[#0f4c75]' : 'bg-white/20 backdrop-blur-sm'
            }`}>
              <Microscope className={`w-6 h-6 ${scrolled ? 'text-white' : 'text-white'}`} />
            </div>
            <div>
              <h1 className={`text-lg font-bold ${scrolled ? 'text-[#0f4c75]' : 'text-white'}`}>
                د. الأحياء الدقيقة
              </h1>
              <p className={`text-xs ${scrolled ? 'text-gray-500' : 'text-white/70'}`}>
                Microbiology Specialist
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  scrolled
                    ? 'text-gray-700 hover:text-[#0f4c75] hover:bg-blue-50'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg ${
              scrolled ? 'text-[#0f4c75]' : 'text-white'
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 bg-white rounded-xl shadow-xl p-4 animate-fadeIn">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:text-[#0f4c75] hover:bg-blue-50 rounded-lg text-sm font-medium transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
