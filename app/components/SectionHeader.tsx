'use client';

import { useLanguage } from '../lib/i18n';
import GlitchText from './GlitchText';

interface SectionHeaderProps {
  titleKey: string;
  descKey: string;
  color?: 'cyan' | 'pink' | 'purple';
  size?: 'md' | 'lg';
}

export default function SectionHeader({ titleKey, descKey, color = 'cyan', size = 'md' }: SectionHeaderProps) {
  const { t } = useLanguage();

  return (
    <div className="text-center mb-12">
      <GlitchText text={t(titleKey)} size={size} color={color} />
      <p className="mt-4 text-[#888] max-w-2xl mx-auto">
        {t(descKey)}
      </p>
    </div>
  );
}
