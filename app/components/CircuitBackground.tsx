interface CircuitBackgroundProps {
  className?: string;
}

export default function CircuitBackground({ className = '' }: CircuitBackgroundProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg
        className="w-full h-full opacity-10"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="circuit-grid"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            {/* Grid Lines */}
            <path
              d="M 20 0 L 0 0 0 20"
              fill="none"
              stroke="#00f0ff"
              strokeWidth="0.5"
            />
            {/* Circuit Nodes */}
            <circle cx="0" cy="0" r="1" fill="#00f0ff" />
            <circle cx="20" cy="0" r="1" fill="#00f0ff" />
            <circle cx="0" cy="20" r="1" fill="#00f0ff" />
            <circle cx="20" cy="20" r="1" fill="#00f0ff" />
            {/* Circuit Traces */}
            <path
              d="M 5 0 L 5 5 L 10 5 L 10 10"
              fill="none"
              stroke="#00f0ff"
              strokeWidth="0.3"
            />
            <path
              d="M 15 20 L 15 15 L 10 15 L 10 10"
              fill="none"
              stroke="#00f0ff"
              strokeWidth="0.3"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit-grid)" />
      </svg>
      {/* Animated gradient overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, #0a0a0f 70%)',
        }}
      />
    </div>
  );
}
