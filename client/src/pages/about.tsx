import React from 'react';
import { Layout } from '@/components/layout/layout';
import { SEO } from '@/lib/seo';
import { Hero } from '@/components/sections/hero';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Target, Eye, Heart, Lightbulb, Users, Award, CheckCircle } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We act with honesty, transparency, and fairness.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive to deliver outstanding results in every project.',
    },
    {
      icon: Users,
      title: 'Client-Centricity',
      description: 'We put clients at the heart of everything we do.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We embrace new ideas, technologies, and solutions.',
    },
  ];

  const achievements = [
    { number: '10+', label: 'Years of Consultancy Experience' },
    { number: '1000+', label: 'Projects Successfully Delivered' },
    { number: '100%', label: 'Client Satisfaction Rate' },
    { number: '24/7', label: 'Support Availability' },
  ];

  const reasons = [
    'One-stop consultancy covering compliance, projects, training & branding.',
    'Proven expertise in regulatory projects like Eat Right India & Legal Metrology.',
    'End-to-end support — from documentation to execution to promotion.',
    'Commitment to measurable results and long-term partnerships.',
  ];

  return (
    <Layout>
      <SEO 
        title="About Us"
        description="Learn about Emmanuel Global Consultancies - over 10 years of expertise in regulatory project implementation, corporate consultancy, training, and brand development."
        keywords="about EGC World, Emmanuel Global Consultancies, business consultancy company, corporate training experts"
      />
      
      <Hero
        title="Who We Are"
        subtitle="Empowering businesses through compliance, consultancy, and brand growth for over a decade."
        primaryCTA="Meet Our Team"
        variant="page"
      />

      {/* Our Story */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
              <p className="text-lg mb-6">
                At Emmanuel Global Consultancies (EGC World), we believe that every business deserves a partner who can simplify compliance and fuel growth. Founded over 10 years ago, we started with a single mission: to help businesses navigate complex regulations and thrive in competitive markets.
              </p>
              <p className="text-lg mb-6">
                From supporting regulatory initiatives like the Eat Right India movement to delivering corporate training, compliance audits, and brand marketing, we have grown into a multi-dimensional consultancy trusted by entrepreneurs, SMEs, and large corporates across India.
              </p>
              <p className="text-lg">
                Today, we are more than just consultants — we are strategic partners committed to building sustainable, future-ready organizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            {/* Mission */}
            <Card className="shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide end-to-end consultancy solutions that empower businesses to achieve compliance, enhance capabilities, and grow with confidence.
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be recognized as a leading consultancy firm in India known for excellence in regulatory projects, compliance solutions, and brand development.
                </p>
              </CardContent>
            </Card>

            {/* Impact */}
            <Card className="shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Impact</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We aim to create meaningful contributions for businesses and society through our consultancy services and regulatory initiatives.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Core Values */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Core Values</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">{value.title}</h4>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">Our Team</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Behind EGC World is a team of industry experts, trainers, consultants, and marketing professionals who bring deep knowledge and hands-on experience.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Multi-disciplinary Expertise</h3>
                <p className="text-muted-foreground">Across compliance, consulting, training & marketing</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Collaborative Approach</h3>
                <p className="text-muted-foreground">Ensuring tailored solutions for every client</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Continuous Learning</h3>
                <p className="text-muted-foreground">Commitment to innovation and excellence</p>
              </div>
            </div>

            <p className="text-muted-foreground italic">
              (You can later add profiles/photos of key leadership here for stronger trust-building.)
            </p>
          </div>
        </div>
      </section>

      {/* Our Achievements */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">Our Achievements</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Over the past decade, we've proudly achieved:
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{achievement.number}</div>
                <p className="text-muted-foreground">{achievement.label}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Partnerships with Government Initiatives & Industry Bodies
            </h3>
            <p className="text-muted-foreground text-center leading-relaxed">
              We work closely with government organizations and industry bodies to implement regulatory projects and promote compliance awareness across various sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Why Clients Choose Us */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
              Why Clients Choose Us
            </h2>
            
            <div className="space-y-6 mb-12">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-lg text-muted-foreground">{reason}</p>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <Card className="bg-muted border-l-4 border-l-primary">
              <CardContent className="p-8">
                <blockquote className="text-lg italic text-foreground mb-4">
                  "EGC World not only helped us with compliance but also guided us in building our team and growing our brand. Truly a holistic partner."
                </blockquote>
                <cite className="text-muted-foreground">— Anjali Mehra, Business Owner</cite>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
            At EGC World, we don't just provide consultancy — we build partnerships that last.
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Ready to transform your business with our expertise?
          </p>
          <Link href="/contact">
            <Button 
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
              data-testid="button-work-with-us"
            >
              Work With Us Today
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
