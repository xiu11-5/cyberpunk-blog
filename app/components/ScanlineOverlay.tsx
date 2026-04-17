'use client';

export default function ScanlineOverlay() {
  return (
    <div 
      className="fixed inset-0 pointer-events-none z-[9999]"
      style={{
        background: 'linear-gradient(to bottom, transparent 50%, rgba(0, 240, 255, 0.02) 50%)',
        backgroundSize: '100% 4px',
      }}
    />
  );
}
