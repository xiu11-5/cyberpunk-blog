'use client';

import { useLanguage } from '../lib/i18n';

export default function Trans({ k }: { k: string }) {
  const { t } = useLanguage();
  return <>{t(k)}</>;
}
