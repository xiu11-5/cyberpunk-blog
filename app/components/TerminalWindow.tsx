interface TerminalWindowProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'dark';
}

export default function TerminalWindow({
  title = 'terminal',
  children,
  className = '',
  variant = 'default',
}: TerminalWindowProps) {
  const bgClass = variant === 'dark' ? 'bg-[#0d0d12]' : 'bg-[#1a1a24]';

  return (
    <div className={`border border-[#333] rounded-lg overflow-hidden ${className}`}>
      {/* Header */}
      <div className={`${bgClass} px-4 py-2 border-b border-[#333] flex items-center gap-2`}>
        {/* Traffic Lights */}
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27ca40]" />
        </div>
        {/* Title */}
        <span className="ml-4 text-xs text-[#666] terminal-text tracking-wider">
          {title}
        </span>
      </div>
      {/* Content */}
      <div className={`${bgClass} p-4`}>
        {children}
      </div>
    </div>
  );
}
