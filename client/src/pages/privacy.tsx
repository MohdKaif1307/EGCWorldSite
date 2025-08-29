import React from 'react';
import { Layout } from '@/components/layout/layout';
import { SEO } from '@/lib/seo';

export default function Privacy() {
  return (
    <Layout>
      <SEO title="Privacy Policy" description="EGC World Privacy Policy" />
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Privacy Policy</h1>
          <p className="text-muted-foreground mb-4">
            We respect your privacy. This policy explains what data we collect, how we use it, and your rights.
          </p>
          <div className="space-y-6 text-foreground/90 leading-relaxed">
            <div>
              <h2 className="text-xl font-semibold mb-2">Information We Collect</h2>
              <p>Contact details you provide, usage data from our website, and communication records.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">How We Use Information</h2>
              <p>To deliver and improve services, respond to inquiries, and maintain security.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Contact</h2>
              <p>For privacy questions, contact us via the form on the Contact page.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}


