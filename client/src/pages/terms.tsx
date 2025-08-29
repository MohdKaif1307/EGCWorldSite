import React from 'react';
import { Layout } from '@/components/layout/layout';
import { SEO } from '@/lib/seo';

export default function Terms() {
  return (
    <Layout>
      <SEO title="Terms of Service" description="EGC World Terms of Service" />
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Terms of Service</h1>
          <div className="space-y-6 text-foreground/90 leading-relaxed">
            <p>By using this website, you agree to these terms. Please read them carefully.</p>
            <div>
              <h2 className="text-xl font-semibold mb-2">Use of Site</h2>
              <p>Do not misuse our website. Follow applicable laws and respect intellectual property.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Disclaimer</h2>
              <p>Content is provided for general information; it is not legal advice.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}


