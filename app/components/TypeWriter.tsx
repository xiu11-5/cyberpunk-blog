'use client';

import { useState, useEffect } from 'react';

interface TypeWriterProps {
  texts: string[];
  speed?: number;
  delay?: number;
  className?: string;
  onComplete?: () => void;
}

export default function TypeWriter({
  texts,
  speed = 80,
  delay = 2000,
  className = '',
  onComplete,
}: TypeWriterProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    
    if (isPaused) {
      const timeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, delay);
      return () => clearTimeout(timeout);
    }

    if (isDeleting) {
      if (currentIndex === 0) {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        return;
      }
      
      const timeout = setTimeout(() => {
        setCurrentIndex((prev) => prev - 1);
        setDisplayText(currentText.slice(0, currentIndex - 1));
      }, speed / 2);
      return () => clearTimeout(timeout);
    }

    if (currentIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
        setDisplayText(currentText.slice(0, currentIndex + 1));
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      setIsPaused(true);
      if (onComplete) onComplete();
    }
  }, [currentIndex, isDeleting, isPaused, currentTextIndex, texts, speed, delay, onComplete]);

  return (
    <span className={`terminal-text ${className}`}>
      <span className="text-[#00f0ff]">&gt;</span>{' '}
      {displayText}
      <span className="terminal-cursor" />
    </span>
  );
}
