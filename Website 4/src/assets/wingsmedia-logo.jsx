import React from 'react';

// Updated with Website 2's warm color palette (copper-gold to metallic-rose)
const WingsMediaLogo = ({ className = "h-10" }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 200 60" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#A46B45" /> {/* Copper Gold */}
          <stop offset="100%" stopColor="#D79F83" /> {/* Metallic Rose */}
        </linearGradient>
      </defs>
      <text x="10" y="40" fontFamily="Montserrat, sans-serif" fontSize="28" fontWeight="700">
        <tspan fill="url(#logoGradient)">Wings</tspan>
        <tspan fill="#5C3D2E">Media</tspan> {/* Warm Brown */}
      </text>
    </svg>
  );
};

export default WingsMediaLogo;
