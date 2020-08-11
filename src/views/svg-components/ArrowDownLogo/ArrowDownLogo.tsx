import React from 'react';

interface ArrowDownLogoProps {}

const ArrowDownLogo: React.FC<ArrowDownLogoProps> = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <g fill="none" fillRule="evenodd">
        <path d="M0 0L32 0 32 32 0 32z"/>
        <path stroke="#FFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12L16 20 24 12"/>
      </g>
    </svg>
  );
}

export default ArrowDownLogo;
