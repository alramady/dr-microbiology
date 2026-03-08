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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-[0_1px_20px_rgba(0,0,0,0.06)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-500 ${
              scrolled 
                ? 'bg-gradient-to-br from-[#0c1b2a] to-[#1a3a5c] shadow-md' 
                : 'bg-white/10 backdrop-blur-sm border border-white/10'
            }`}>
              <Microscope className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className={`text-base font-bold transition-colors duration-500 ${scrolled ? 'text-[#0c1b2a]' : 'text-white'}`}>
                د. الأحياء الدقيقة
              </h1>
              <p className={`text-[0.65rem] font-medium tracking-[0.15em] uppercase transition-colors duration-500 ${scrolled ? 'text-[#8b93a7]' : 'text-white/50'}`}>
                Microbiology Specialist
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-[0.82rem] font-medium transition-all duration-300 ${
                  scrolled
                    ? 'text-[#5a6275] hover:text-[#0c1b2a] hover:bg-[#0c1b2a]/5'
                    : 'text-white/60 hover:text-white hover:bg-white/8'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2.5 rounded-xl transition-all duration-300 ${
              scrolled 
                ? 'text-[#0c1b2a] hover:bg-[#0c1b2a]/5' 
                : 'text-white hover:bg-white/10'
            }`}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 bg-white rounded-2xl shadow-xl border border-[#0000000a] p-3 animate-fadeIn">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-[#5a6275] hover:text-[#0c1b2a] hover:bg-[#faf8f5] rounded-xl text-sm font-medium transition-all"
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
