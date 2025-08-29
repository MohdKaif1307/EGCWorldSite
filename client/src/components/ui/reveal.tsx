import React, { useEffect, useRef, useState } from 'react';

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right';
  delayMs?: number;
}

export function Reveal({ children, className = '', animation = 'fade-up', delayMs = 0, ...rest }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          } else {
            setInView(false);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const delayStyle = { transitionDelay: `${delayMs}ms` } as React.CSSProperties;

  return (
    <div
      ref={ref}
      className={`reveal ${animation} ${inView ? 'in-view' : ''} ${className}`}
      style={delayStyle}
      {...rest}
    >
      {children}
    </div>
  );
}


