'use client';

import { useState } from 'react';
import { useLanguage } from '../lib/i18n';

interface CyberInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onSubmit?: (value: string) => void;
  className?: string;
}

export default function CyberInput({
  placeholder,
  value: controlledValue,
  onChange,
  onSubmit,
  className = '',
}: CyberInputProps) {
  const { t } = useLanguage();
  const [internalValue, setInternalValue] = useState('');
  const value = controlledValue !== undefined ? controlledValue : internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (controlledValue === undefined) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onSubmit) {
      onSubmit(value);
      if (controlledValue === undefined) {
        setInternalValue('');
      }
    }
  };

  return (
    <div className={`
      flex items-center gap-2 px-4 py-3 
      bg-[#0d0d12] border border-[#333]
      focus-within:border-[#00f0ff] focus-within:shadow-[0_0_10px_rgba(0,240,255,0.3)]
      transition-all duration-300
      ${className}
    `}>
      <span className="text-[#00f0ff] terminal-text select-none">&gt;</span>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder || t('input.placeholder')}
        className="
          flex-1 bg-transparent border-none outline-none
          text-[#e0e0e0] placeholder-[#555]
          terminal-text text-sm
        "
      />
      <span className="terminal-cursor" />
    </div>
  );
}
