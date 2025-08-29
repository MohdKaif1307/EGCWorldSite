import React from 'react';
import { Layout } from '@/components/layout/layout';
import { SEO } from '@/lib/seo';
import { Hero } from '@/components/sections/hero';
import { ServicesGrid } from '@/components/sections/services-grid';
import { Testimonials } from '@/components/sections/testimonials';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Leaf, Scale, CheckCircle, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <Layout>
      <SEO 
        title="Home"
        description="Comprehensive consultancy services including compliance, corporate training, brand development, and regulatory project implementation. Trusted by 1000+ businesses."
        keywords="business consultancy, corporate compliance, training, brand development, regulatory projects"
      />
      
      {/* Hero Section */}
      <Hero
        title="Simplifying Compliance, Empowering Businesses"
        subtitle="From regulatory projects to corporate training and brand development — we provide end-to-end consultancy that helps your business stay future-ready."
        supportingText="Trusted by entrepreneurs, startups, and enterprises for over 10 years."
        imageSrc="/images/Professional_consultancy_office_interior_f107f1d7.png"
      />

      {/* Core Services */}
      <ServicesGrid />

      {/* Regulatory Projects Section */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Driving Change Through Regulatory Projects
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We actively participate in government-backed and industry-driven initiatives to promote compliance and awareness.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Eat Right India */}
            <Card className="shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-r from-green-100 to-green-200 flex items-center justify-center">
                <Leaf className="h-24 w-24 text-green-600" />
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                  <Leaf className="text-green-500 mr-3 h-6 w-6" />
                  Eat Right India Initiative
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Supporting India's vision for safe, healthy, and sustainable food practices.
                </p>
                <Link href="/regulatory-projects#eat-right">
                  <Button 
                    variant="link" 
                    className="text-primary font-semibold p-0 h-auto"
                    data-testid="link-eat-right-india"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Legal Metrology */}
            <Card className="shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center">
                <Scale className="h-24 w-24 text-blue-600" />
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                  <Scale className="text-blue-500 mr-3 h-6 w-6" />
                  Legal Metrology Affairs
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Advisory and compliance support for weights, measures, and labeling regulations.
                </p>
                <Link href="/regulatory-projects#legal-metrology">
                  <Button 
                    variant="link" 
                    className="text-primary font-semibold p-0 h-auto"
                    data-testid="link-legal-metrology"
                  >
                    Get Support <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Why Choose Emmanuel Global Consultancies?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                At EGC World, we specialize in regulatory project implementation, corporate consultancy, training, and brand development. With over a decade of expertise, we help businesses simplify compliance, achieve growth, and stay future-ready.
              </p>

              {/* Achievement Stats */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">10+</div>
                  <p className="text-muted-foreground">Years of Experience</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                  <p className="text-muted-foreground">Projects Delivered</p>
                </div>
              </div>

              {/* Key Points */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500 h-6 w-6" />
                  <span className="text-foreground">10+ Years of Consultancy Experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500 h-6 w-6" />
                  <span className="text-foreground">1000+ Projects Delivered Successfully</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500 h-6 w-6" />
                  <span className="text-foreground">Dedicated Experts for Every Client</span>
                </div>
              </div>

              <Link href="/about">
                <Button 
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                  data-testid="button-know-more-about-us"
                >
                  Know More About Us
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 h-56 rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="/images/Business_team_collaboration_meeting_4866817a.png" 
                    alt="Professional business team collaboration"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-40 rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="/images/Professional_consultancy_office_interior_f107f1d7.png" 
                    alt="Consultancy office interior"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-40 rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="/images/Corporate_training_workshop_session_e6eb32c9.png" 
                    alt="Corporate training workshop"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="col-span-2 h-40 rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="/images/Digital_marketing_and_SEO_workspace_425d3019.png" 
                    alt="Digital marketing and SEO workspace"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-background/80 backdrop-blur-md border border-border rounded-lg p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Trusted by</div>
                    <div className="text-foreground font-semibold">1000+ Businesses</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Insights Section */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Insights & Resources</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Stay updated with the latest in compliance, corporate training, and business growth.
            </p>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-8">
              Future blog posts will appear here — excellent for SEO & thought leadership.
            </p>
            <Link href="/insights">
              <Button 
                variant="outline"
                size="lg"
                data-testid="button-explore-insights"
              >
                Explore Insights
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
