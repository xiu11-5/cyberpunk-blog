'use client';

import Link from 'next/link';

interface NeonButtonProps {
  children: React.ReactNode;
  variant?: 'default' | 'secondary' | 'ghost' | 'glitch';
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
}

const variants = {
  default: `
    bg-[#00f0ff]/10 border-[#00f0ff] text-[#00f0ff]
    hover:bg-[#00f0ff] hover:text-[#0a0a0f]
    hover:shadow-[0_0_20px_#00f0ff,0_0_40px_#00f0ff]
  `,
  secondary: `
    bg-[#ff00ff]/10 border-[#ff00ff] text-[#ff00ff]
    hover:bg-[#ff00ff] hover:text-[#0a0a0f]
    hover:shadow-[0_0_20px_#ff00ff,0_0_40px_#ff00ff]
  `,
  ghost: `
    bg-transparent border-[#888] text-[#888]
    hover:border-[#00f0ff] hover:text-[#00f0ff]
    hover:shadow-[0_0_10px_#00f0ff]
  `,
  glitch: `
    bg-[#0a0a0f] border-[#00f0ff] text-[#00f0ff]
    hover:animate-pulse
    shadow-[0_0_10px_#00f0ff,inset_0_0_10px_#00f0ff]
    hover:shadow-[0_0_20px_#ff00ff,inset_0_0_20px_#ff00ff]
    hover:border-[#ff00ff] hover:text-[#ff00ff]
  `,
};

export default function NeonButton({
  children,
  variant = 'default',
  href,
  onClick,
  className = '',
  type = 'button',
}: NeonButtonProps) {
  const baseClasses = `
    relative px-6 py-3 font-medium tracking-wider uppercase
    border-2 cyber-chamfer-sm
    transition-all duration-300 ease-out
    ${variants[variant]}
    ${className}
  `;

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClasses}>
      {children}
    </button>
  );
}
