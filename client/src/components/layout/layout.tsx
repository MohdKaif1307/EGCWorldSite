import React from 'react';
import { Header } from './header';
import { Footer } from './footer';
import { ScrollToTop } from '@/components/ui/scroll-to-top';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
