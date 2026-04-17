'use client';

import GlitchText from './GlitchText';
import TypeWriter from './TypeWriter';
import NeonButton from './NeonButton';
import CircuitBackground from './CircuitBackground';
import { useLanguage } from '../lib/i18n';

export default function HeroSection() {
  const { t } = useLanguage();

  const subtitles = [
    t('hero.subtitle1'),
    t('hero.subtitle2'),
    t('hero.subtitle3'),
    t('hero.subtitle4'),
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Circuit Background */}
      <CircuitBackground />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Glitch Title */}
        <div className="mb-6">
          <GlitchText
            text="NEON NEXUS"
            size="xl"
            color="cyan"
            trigger="always"
          />
        </div>

        {/* TypeWriter Subtitle */}
        <div className="mb-8 h-8 flex items-center justify-center">
          <TypeWriter
            texts={subtitles}
            speed={60}
            delay={2500}
            className="text-lg md:text-xl"
          />
        </div>

        {/* Description */}
        <p className="text-[#888] text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
          {t('hero.description')}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <NeonButton variant="glitch" href="/blog">
            {t('hero.cta.blog')}
          </NeonButton>
          <NeonButton variant="ghost" href="/trends">
            {t('hero.cta.trends')}
          </NeonButton>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '10+', label: t('hero.stat.articles') },
            { value: '5', label: t('hero.stat.categories') },
            { value: '\u221E', label: t('hero.stat.possibilities') },
            { value: '24/7', label: t('hero.stat.uptime') },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#00f0ff] terminal-text mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-[#666] uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, #0a0a0f, transparent)',
        }}
      />
    </section>
  );
}
