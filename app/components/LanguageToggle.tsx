'use client';

import { useState } from 'react';
import { useLanguage } from '../lib/i18n';
import { Languages, Loader2 } from 'lucide-react';

export default function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage();
  const [isPending, setIsPending] = useState(false);

  const handleLanguageChange = () => {
    setIsPending(true);
    const newLang = language === 'en' ? 'zh' : 'en';
    setLanguage(newLang);
    // 移除加载状态
    setTimeout(() => setIsPending(false), 300);
  };

  return (
    <button
      onClick={handleLanguageChange}
      disabled={isPending}
      className={`flex items-center gap-1.5 px-3 py-1.5 rounded border text-xs tracking-wider terminal-text transition-all duration-300 ${
        isPending 
          ? 'border-[#666] text-[#666] cursor-wait' 
          : 'border-[#00f0ff]/30 text-[#00f0ff] hover:border-[#ff00ff] hover:text-[#ff00ff] hover:shadow-[0_0_10px_rgba(255,0,255,0.3)]'
      }`}
      title={t('lang.switchTo')}
    >
      {isPending ? (
        <Loader2 className="w-3.5 h-3.5 animate-spin" />
      ) : (
        <Languages className="w-3.5 h-3.5" />
      )}
      <span>{t('lang.label')}</span>
    </button>
  );
}