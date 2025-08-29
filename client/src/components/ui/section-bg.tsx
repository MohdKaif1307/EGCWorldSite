import React from 'react';

interface SectionBgProps {
  imageSrc: string;
  opacity?: number;
}

export function SectionBg({ imageSrc, opacity = 0.35 }: SectionBgProps) {
  return (
    <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
      <img src={imageSrc} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40" style={{ opacity }} />
    </div>
  );
}


