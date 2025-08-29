import React from 'react';

export function BackgroundEffect() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-48 -left-32 h-[36rem] w-[36rem] rounded-full blur-3xl animated-gradient opacity-30" />
      <div className="absolute top-1/3 -right-40 h-[32rem] w-[32rem] rounded-full blur-3xl animated-gradient-2 opacity-30" />
      <div className="absolute bottom-0 left-1/4 h-96 w-[36rem] rounded-full blur-3xl animated-gradient-3 opacity-25" />
      <div className="absolute inset-0 bg-noise mix-blend-soft-light opacity-[0.06]" />
    </div>
  );
}


