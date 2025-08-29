import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Reveal } from '@/components/ui/reveal';
import { User } from 'lucide-react';

const testimonials = [
  {
    quote: "EGC World made our compliance journey smooth and stress-free. Excellent guidance throughout.",
    author: "Ramesh Gupta",
    role: "Food Entrepreneur",
    color: "bg-primary/10 text-primary",
  },
  {
    quote: "They supported us with compliance and brand promotion — a one-stop solution!",
    author: "Neha Sharma",
    role: "Startup Founder",
    color: "bg-accent/10 text-accent",
  },
];

export function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-6">
        <Reveal className="max-w-3xl mx-auto text-center mb-16" animation="fade-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground">Hear from the businesses we've helped grow and succeed.</p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Reveal key={index} animation="fade-up" delayMs={index * 120}>
            <Card className="bg-white shadow-lg overflow-hidden">
              <div className={`h-20 w-full ${index % 2 ? 'bg-accent/10' : 'bg-primary/10'}`} />
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 ${testimonial.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <User className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-4 italic leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
