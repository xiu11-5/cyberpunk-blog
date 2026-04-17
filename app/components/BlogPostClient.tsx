'use client';

import { useLanguage } from '../lib/i18n';

interface BlogPostClientProps {
  slug: string;
  originalTitle: string;
  date?: string;
}

export default function BlogPostClient({ slug, originalTitle, date }: BlogPostClientProps) {
  const { language, t } = useLanguage();

  if (date) {
    return (
      <>
        {new Date(date).toLocaleDateString(language === 'zh' ? 'zh-CN' : 'en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </>
    );
  }

  const translatedTitle = t(`post.${slug}.title`);
  const title = translatedTitle !== `post.${slug}.title` ? translatedTitle : originalTitle;

  return <>{title}</>;
}
