'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? 'py-2'
          : 'py-4'
      }`}
    >
      {/* Backdrop */}
      <div className={`absolute inset-0 transition-all duration-700 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.08)] border-b border-black/5'
          : 'bg-transparent'
      }`}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-lg ${
              scrolled 
                ? 'bg-gradient-to-br from-[#0a1628] to-[#1a3355]' 
                : 'glass'
            }`}>
              <Microscope className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className={`text-base font-black transition-colors duration-500 ${scrolled ? 'text-[#0a1628]' : 'text-white'}`}>
                د. الأحياء الدقيقة
              </h1>
              <p className={`text-[0.6rem] font-bold tracking-[0.2em] uppercase transition-colors duration-500 ${scrolled ? 'text-[#94a3b8]' : 'text-white/40'}`}>
                Microbiology Specialist
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2.5 rounded-xl text-[0.82rem] font-semibold transition-all duration-300 ${
                    scrolled
                      ? isActive
                        ? 'text-[#0d9488] bg-[#0d9488]/8'
                        : 'text-[#475569] hover:text-[#0a1628] hover:bg-[#0a1628]/5'
                      : isActive
                        ? 'text-white bg-white/15'
                        : 'text-white/55 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-3 rounded-xl transition-all duration-300 ${
              scrolled 
                ? 'text-[#0a1628] hover:bg-[#0a1628]/5' 
                : 'text-white hover:bg-white/10'
            }`}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 bg-white rounded-3xl shadow-2xl border border-black/5 p-4 animate-fadeIn">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-5 py-3.5 rounded-2xl text-sm font-semibold transition-all ${
                    isActive
                      ? 'text-[#0d9488] bg-[#0d9488]/8'
                      : 'text-[#475569] hover:text-[#0a1628] hover:bg-[#f8f6f1]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}
