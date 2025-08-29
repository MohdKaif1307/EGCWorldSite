import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Phone, Search, Star } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  primaryCTA?: string;
  secondaryCTA?: string;
  supportingText?: string;
  variant?: 'default' | 'page';
}

export function Hero({ 
  title, 
  subtitle, 
  primaryCTA = "Talk to Our Experts",
  secondaryCTA = "Explore Services",
  supportingText,
  variant = 'default'
}: HeroProps) {
  const isDefault = variant === 'default';
  
  return (
    <section className={`${isDefault ? 'hero-gradient' : 'bg-muted'} py-16 lg:py-24`}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className={`text-4xl lg:text-6xl font-bold mb-6 ${
            isDefault ? 'text-primary-foreground' : 'text-foreground'
          }`}>
            {title}
          </h1>
          <p className={`text-xl lg:text-2xl mb-8 leading-relaxed ${
            isDefault ? 'text-primary-foreground/90' : 'text-muted-foreground'
          }`}>
            {subtitle}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/contact">
              <Button 
                size="lg"
                className={`${
                  isDefault 
                    ? 'bg-accent text-accent-foreground hover:bg-accent/90' 
                    : 'bg-primary text-primary-foreground hover:bg-primary/90'
                } shadow-lg hover:shadow-xl transition-all duration-200`}
                data-testid="button-primary-cta"
              >
                <Phone className="mr-2 h-5 w-5" />
                {primaryCTA}
              </Button>
            </Link>
            {isDefault && (
              <Link href="/services">
                <Button 
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-200"
                  data-testid="button-secondary-cta"
                >
                  <Search className="mr-2 h-5 w-5" />
                  {secondaryCTA}
                </Button>
              </Link>
            )}
          </div>

          {supportingText && (
            <p className={`text-lg ${
              isDefault ? 'text-primary-foreground/80' : 'text-muted-foreground'
            }`}>
              <Star className="inline w-5 h-5 text-yellow-400 mr-2" />
              {supportingText}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
