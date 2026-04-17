'use client';

import { useState, useEffect } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  color?: 'cyan' | 'pink' | 'purple' | 'green' | 'yellow';
  trigger?: 'hover' | 'always';
}

const sizeClasses = {
  sm: 'text-2xl',
  md: 'text-4xl',
  lg: 'text-6xl',
  xl: 'text-7xl',
  '2xl': 'text-8xl',
};

const colorClasses = {
  cyan: 'text-[#00f0ff]',
  pink: 'text-[#ff00ff]',
  purple: 'text-[#9d00ff]',
  green: 'text-[#00ff9d]',
  yellow: 'text-[#f0ff00]',
};

export default function GlitchText({ 
  text, 
  className = '', 
  size = 'lg',
  color = 'cyan',
  trigger = 'always'
}: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(trigger === 'always');

  useEffect(() => {
    if (trigger === 'always') {
      const interval = setInterval(() => {
        setIsGlitching(false);
        setTimeout(() => setIsGlitching(true), 50);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [trigger]);

  return (
    <span
      className={`
        relative inline-block font-bold tracking-wider uppercase
        ${sizeClasses[size]}
        ${colorClasses[color]}
        ${className}
      `}
      onMouseEnter={() => trigger === 'hover' && setIsGlitching(true)}
      onMouseLeave={() => trigger === 'hover' && setIsGlitching(false)}
      style={{
        textShadow: isGlitching 
          ? '2px 0 #ff00ff, -2px 0 #00f0ff'
          : `0 0 10px currentColor, 0 0 20px currentColor, 0 0 40px currentColor`,
        animation: isGlitching ? 'rgbShift 0.3s infinite' : 'flicker 4s infinite',
      }}
      data-text={text}
    >
      {text}
      {isGlitching && (
        <>
          <span 
            className="absolute top-0 left-0 -z-10 opacity-70"
            style={{
              color: '#ff00ff',
              transform: 'translate(2px, 0)',
              clipPath: 'inset(20% 0 60% 0)',
            }}
          >
            {text}
          </span>
          <span 
            className="absolute top-0 left-0 -z-10 opacity-70"
            style={{
              color: '#00f0ff',
              transform: 'translate(-2px, 0)',
              clipPath: 'inset(60% 0 20% 0)',
            }}
          >
            {text}
          </span>
        </>
      )}
    </span>
  );
}
