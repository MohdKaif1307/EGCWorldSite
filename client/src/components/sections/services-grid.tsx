import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, GraduationCap, Shield, Search, Megaphone } from 'lucide-react';

const services = [
  {
    id: 'consulting',
    icon: TrendingUp,
    title: 'Business & Management Consulting',
    description: 'Expert guidance to streamline operations, compliance, and growth strategies.',
    cta: 'Explore Consulting',
    color: 'bg-primary text-primary-foreground hover:bg-primary/90',
  },
  {
    id: 'training',
    icon: GraduationCap,
    title: 'Learning & Development Programs',
    description: 'Customized workshops and corporate training designed to build skills and performance.',
    cta: 'View Programs',
    color: 'bg-accent text-accent-foreground hover:bg-accent/90',
  },
  {
    id: 'compliance',
    icon: Shield,
    title: 'Corporate Compliance Solutions',
    description: 'Ensure your business stays aligned with government regulations and industry standards.',
    cta: 'Get Compliance Support',
    color: 'bg-green-600 text-white hover:bg-green-700',
  },
  {
    id: 'seo',
    icon: Search,
    title: 'SEO Optimization Services',
    description: 'Boost your online presence with data-driven SEO strategies to rank higher on search engines.',
    cta: 'Boost My SEO',
    color: 'bg-purple-600 text-white hover:bg-purple-700',
  },
  {
    id: 'marketing',
    icon: Megaphone,
    title: 'Marketing for Your Brand',
    description: 'End-to-end brand promotion and digital marketing solutions to grow visibility and reach.',
    cta: 'Grow My Brand',
    color: 'bg-orange-600 text-white hover:bg-orange-700',
  },
];

export function ServicesGrid() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">What We Do</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Comprehensive consultancy designed to simplify compliance and strengthen your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.id}
              className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Button 
                  className={service.color}
                  data-testid={`button-${service.id}`}
                >
                  {service.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
