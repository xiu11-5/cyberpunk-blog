'use client';

import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import TerminalWindow from './TerminalWindow';
import { useLanguage } from '../lib/i18n';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  tags: string[];
}

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const { t } = useLanguage();

  return (
    <TerminalWindow
      title={`${post.slug}.md`}
      className="group h-full transition-all duration-300 hover:border-[#00f0ff]/50"
    >
      <Link href={`/blog/${post.slug}`} className="block">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/30 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-[#e0e0e0] mb-2 group-hover:text-[#00f0ff] transition-colors line-clamp-2">
          {t(`post.${post.slug}.title`) !== `post.${post.slug}.title`
            ? t(`post.${post.slug}.title`)
            : post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-[#888] mb-4 line-clamp-3 leading-relaxed">
          {t(`post.${post.slug}.excerpt`) !== `post.${post.slug}.excerpt`
            ? t(`post.${post.slug}.excerpt`)
            : post.excerpt}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-4 text-xs text-[#666] terminal-text">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {post.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {post.readingTime}
          </span>
        </div>

        {/* Read More */}
        <div className="mt-4 flex items-center gap-2 text-sm text-[#00f0ff] group-hover:text-[#ff00ff] transition-colors">
          <span className="terminal-text">{t('blog.readMore')}</span>
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </Link>
    </TerminalWindow>
  );
}
