'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Zap } from 'lucide-react';
import { useLanguage } from '../lib/i18n';
import LanguageToggle from './LanguageToggle';

const navLinkKeys = [
  { href: '/', key: 'nav.home' },
  { href: '/blog', key: 'nav.blog' },
  { href: '/trends', key: 'nav.trends' },
  { href: '/about', key: 'nav.about' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/90 backdrop-blur-md border-b border-[#00f0ff]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Zap className="w-6 h-6 text-[#00f0ff] group-hover:text-[#ff00ff] transition-colors" />
            <span className="text-xl font-bold tracking-wider text-[#00f0ff] group-hover:text-[#ff00ff] transition-colors">
              NEON<span className="text-[#ff00ff]">NEXUS</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinkKeys.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm tracking-wider text-[#888] hover:text-[#00f0ff] transition-colors relative group"
              >
                {t(link.key)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00f0ff] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <LanguageToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <LanguageToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#00f0ff] hover:text-[#ff00ff] transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-[#00f0ff]/20">
            {navLinkKeys.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-sm tracking-wider text-[#888] hover:text-[#00f0ff] transition-colors"
              >
                {t(link.key)}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
