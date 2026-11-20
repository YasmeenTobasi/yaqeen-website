import React from 'react';

interface LogoProps {
  size?: number;
  className?: string;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size = 80, className = '', showText = true }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="sunGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#00A9A5' }} />
          <stop offset="100%" style={{ stopColor: '#007A77' }} />
        </linearGradient>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#C9A227' }} />
          <stop offset="50%" style={{ stopColor: '#E8C547' }} />
          <stop offset="100%" style={{ stopColor: '#C9A227' }} />
        </linearGradient>
      </defs>

      {/* Sun rays */}
      <g transform="translate(100, 85)">
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
          <line
            key={i}
            x1="0"
            y1="-55"
            x2="0"
            y2="-70"
            stroke="#00A9A5"
            strokeWidth={i % 2 === 0 ? "3" : "2"}
            strokeLinecap="round"
            transform={`rotate(${angle})`}
            opacity={i % 2 === 0 ? "1" : "0.6"}
          />
        ))}
      </g>

      {/* Main sun circle */}
      <circle cx="100" cy="85" r="45" fill="url(#sunGradient)" />

      {/* Inner gold circle */}
      <circle cx="100" cy="85" r="30" fill="url(#goldGradient)" opacity="0.9" />

      {/* Youth figures (line art) */}
      <g transform="translate(100, 85)" stroke="#FFFFFF" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* Person 1 (left) */}
        <circle cx="-12" cy="-10" r="5" />
        <line x1="-12" y1="-5" x2="-12" y2="8" />
        <line x1="-12" y1="8" x2="-16" y2="16" />
        <line x1="-12" y1="8" x2="-8" y2="16" />
        <line x1="-12" y1="0" x2="-18" y2="6" />
        <line x1="-12" y1="0" x2="-7" y2="5" />

        {/* Person 2 (center) */}
        <circle cx="0" cy="-12" r="6" />
        <line x1="0" y1="-6" x2="0" y2="10" />
        <line x1="0" y1="10" x2="-5" y2="18" />
        <line x1="0" y1="10" x2="5" y2="18" />
        <line x1="0" y1="-2" x2="-6" y2="4" />
        <line x1="0" y1="-2" x2="6" y2="4" />

        {/* Person 3 (right) */}
        <circle cx="12" cy="-10" r="5" />
        <line x1="12" y1="-5" x2="12" y2="8" />
        <line x1="12" y1="8" x2="8" y2="16" />
        <line x1="12" y1="8" x2="16" y2="16" />
        <line x1="12" y1="0" x2="18" y2="6" />
        <line x1="12" y1="0" x2="7" y2="5" />
      </g>

      {/* Text "يقين" */}
      {showText && (
        <text
          x="100"
          y="175"
          textAnchor="middle"
          fontFamily="Amiri, serif"
          fontSize="36"
          fontWeight="700"
          fill="url(#goldGradient)"
        >
          يقين
        </text>
      )}
    </svg>
  );
};

export default Logo;
