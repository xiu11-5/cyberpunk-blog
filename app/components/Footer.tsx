'use client';

import Link from 'next/link';
import { GitBranch as GithubIcon, MessageCircle as TwitterIcon, Mail, Zap } from 'lucide-react';
import { useLanguage } from '../lib/i18n';

const navLinkKeys = [
  { key: 'nav.home', href: '/' },
  { key: 'nav.blog', href: '/blog' },
  { key: 'nav.trends', href: '/trends' },
  { key: 'nav.about', href: '/about' },
];

const categoryKeys = [
  { key: 'footer.cat.ai', href: '/trends' },
  { key: 'footer.cat.cloud', href: '/trends' },
  { key: 'footer.cat.security', href: '/trends' },
  { key: 'footer.cat.devops', href: '/trends' },
];

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com', icon: GithubIcon },
  { label: 'Twitter', href: 'https://twitter.com', icon: TwitterIcon },
  { label: 'Email', href: 'mailto:hello@example.com', icon: Mail },
];

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#0d0d12] border-t border-[#00f0ff]/20 circuit-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Zap className="w-6 h-6 text-[#00f0ff]" />
              <span className="text-xl font-bold tracking-wider text-[#00f0ff]">
                NEON<span className="text-[#ff00ff]">NEXUS</span>
              </span>
            </Link>
            <p className="text-[#666] text-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-[#00f0ff] font-medium mb-4 tracking-wider text-sm uppercase">
              {t('footer.navigation')}
            </h3>
            <ul className="space-y-2">
              {navLinkKeys.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-[#888] hover:text-[#00f0ff] transition-colors text-sm"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-[#ff00ff] font-medium mb-4 tracking-wider text-sm uppercase">
              {t('footer.categories')}
            </h3>
            <ul className="space-y-2">
              {categoryKeys.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-[#888] hover:text-[#ff00ff] transition-colors text-sm"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-[#00ff9d] font-medium mb-4 tracking-wider text-sm uppercase">
              {t('footer.connect')}
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#888] hover:text-[#00f0ff] transition-colors"
                    aria-label={link.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#333] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#555] text-sm terminal-text">
            &gt; System.ready() &copy; {new Date().getFullYear()} Neon Nexus
          </p>
          <p className="text-[#555] text-xs">
            {t('footer.designedWith')}
          </p>
        </div>
      </div>
    </footer>
  );
}
