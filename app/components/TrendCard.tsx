'use client';

import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { useLanguage } from '../lib/i18n';

interface Trend {
  id: string;
  title: string;
  category: 'AI' | 'Cloud' | 'Security' | 'Web3' | 'DevOps';
  description: string;
  trendDirection: 'up' | 'down' | 'stable';
  percentage?: number;
}

interface TrendCardProps {
  trend: Trend;
}

const categoryColors = {
  AI: { bg: 'bg-[#00f0ff]/10', border: 'border-[#00f0ff]', text: 'text-[#00f0ff]', glow: 'shadow-[#00f0ff]' },
  Cloud: { bg: 'bg-[#9d00ff]/10', border: 'border-[#9d00ff]', text: 'text-[#9d00ff]', glow: 'shadow-[#9d00ff]' },
  Security: { bg: 'bg-[#ff0040]/10', border: 'border-[#ff0040]', text: 'text-[#ff0040]', glow: 'shadow-[#ff0040]' },
  Web3: { bg: 'bg-[#f0ff00]/10', border: 'border-[#f0ff00]', text: 'text-[#f0ff00]', glow: 'shadow-[#f0ff00]' },
  DevOps: { bg: 'bg-[#00ff9d]/10', border: 'border-[#00ff9d]', text: 'text-[#00ff9d]', glow: 'shadow-[#00ff9d]' },
};

const directionIcons = {
  up: TrendingUp,
  down: TrendingDown,
  stable: Minus,
};

const directionColors = {
  up: 'text-[#00ff9d]',
  down: 'text-[#ff0040]',
  stable: 'text-[#888]',
};

export default function TrendCard({ trend }: TrendCardProps) {
  const { t } = useLanguage();
  const colors = categoryColors[trend.category];
  const DirectionIcon = directionIcons[trend.trendDirection];

  const translatedTitle = t(`trend.${trend.id}.title`);
  const translatedDesc = t(`trend.${trend.id}.desc`);
  const title = translatedTitle !== `trend.${trend.id}.title` ? translatedTitle : trend.title;
  const desc = translatedDesc !== `trend.${trend.id}.desc` ? translatedDesc : trend.description;

  return (
    <div
      className={`
        relative p-6 rounded-lg border ${colors.border} ${colors.bg}
        transition-all duration-300 hover:scale-[1.02]
        hover:shadow-[0_0_30px_rgba(0,240,255,0.2)]
        overflow-hidden group
      `}
    >
      {/* Holographic effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, transparent 40%, rgba(0,240,255,0.05) 50%, transparent 60%)',
        }}
      />

      {/* Category Badge */}
      <div className="flex items-center justify-between mb-4">
        <span className={`text-xs font-medium px-3 py-1 rounded-full border ${colors.border} ${colors.text}`}>
          {trend.category}
        </span>
        <div className={`flex items-center gap-1 ${directionColors[trend.trendDirection]}`}>
          <DirectionIcon className="w-4 h-4" />
          {trend.percentage && (
            <span className="text-sm font-mono">{trend.percentage}%</span>
          )}
        </div>
      </div>

      {/* Title */}
      <h3 className={`text-lg font-bold mb-2 ${colors.text}`}>
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-[#888] leading-relaxed">
        {desc}
      </p>

      {/* Corner accent */}
      <div
        className={`absolute -bottom-4 -right-4 w-16 h-16 ${colors.bg} rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500`}
      />
    </div>
  );
}
