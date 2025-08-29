import React from 'react';
import { Layout } from '@/components/layout/layout';
import { SEO } from '@/lib/seo';
import { Hero } from '@/components/sections/hero';
import { ContactForm } from '@/components/sections/contact-form';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Clock, Phone, Mail, MapPin, Users } from 'lucide-react';

export default function Contact() {
  const whyContact = [
    'Direct access to industry experts',
    'Fast and reliable support within 24 hours',
    'Guidance tailored to your business needs',
    'A trusted partner with 10+ years of experience',
  ];

  const additionalContacts = [
    {
      purpose: 'Support & Queries',
      email: 'support@egcworld.in',
      description: 'General inquiries and customer support',
    },
    {
      purpose: 'Partnerships/Projects',
      email: 'partnerships@egcworld.in',
      description: 'Business partnerships and project collaborations',
    },
    {
      purpose: 'Careers',
      email: 'careers@egcworld.in',
      description: 'Career opportunities and job applications',
    },
  ];

  return (
    <Layout>
      <SEO 
        title="Contact Us"
        description="Have a project in mind? Need expert consultancy or compliance support? Reach out to EGC World today and let's make it happen."
        keywords="contact EGC World, business consultancy contact, compliance support, expert guidance"
      />
      
      <Hero
        title="Let's Work Together"
        subtitle="Have a project in mind? Need expert consultancy or compliance support? Reach out to us today and let's make it happen."
        primaryCTA="Request a Callback"
        variant="page"
      />

      {/* Why Contact EGC World */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
              Why Contact EGC World?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We're more than just consultants — we're your partners in compliance, training, and brand growth. By contacting us, you gain:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {whyContact.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 text-left">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
              Contact Information
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {/* Phone */}
              <Card className="shadow-lg text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Phone className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Phone</h3>
                  <p className="text-lg font-semibold text-primary mb-2">+91 85272 73997</p>
                  <p className="text-sm text-muted-foreground">Available during business hours</p>
                </CardContent>
              </Card>

              {/* Email */}
              <Card className="shadow-lg text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Mail className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Email</h3>
                  <p className="text-lg font-semibold text-primary mb-2">support@egcworld.in</p>
                  <p className="text-sm text-muted-foreground">24/7 email support</p>
                </CardContent>
              </Card>

              {/* Office */}
              <Card className="shadow-lg text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <MapPin className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Office</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    614, 6th Floor, Eros City Square Mall,<br />
                    Rose Wood City, Gurugram,<br />
                    Haryana, 122018
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Business Hours */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center justify-center space-x-3 mb-6">
                  <Clock className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">Office Hours</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <p className="font-semibold text-foreground mb-2">Monday - Saturday</p>
                    <p className="text-primary font-semibold">9:30 AM - 6:30 PM</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2">Sunday</p>
                    <p className="text-muted-foreground font-semibold">Closed</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2">Response Time</p>
                    <p className="text-green-600 font-semibold">Within 24 Hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />

      {/* Additional Contact Options */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
              Additional Contact Options
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {additionalContacts.map((contact, index) => (
                <Card key={index} className="shadow-lg">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {contact.purpose}
                    </h3>
                    <p className="text-primary font-semibold mb-2">{contact.email}</p>
                    <p className="text-sm text-muted-foreground">{contact.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Assurance */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
              We're Here to Help
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Every query is important to us. Whether you're looking for consultancy, compliance solutions, training, or marketing services — our team will provide clear, actionable guidance.
            </p>
            
            <Card className="bg-muted border-l-4 border-l-primary">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <blockquote className="text-lg italic text-foreground mb-4">
                      "The EGC World team responded to my inquiry within hours and guided me step by step. Truly professional service!"
                    </blockquote>
                    <cite className="text-muted-foreground">— Client Testimonial</cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Google Map Placeholder */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
              Find Our Office
            </h2>
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="h-64 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Interactive Map Coming Soon
                    </h3>
                    <p className="text-muted-foreground">
                      614, 6th Floor, Eros City Square Mall, Rose Wood City, Gurugram
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
            Your business deserves the right guidance. Let's connect today.
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Ready to simplify compliance and accelerate growth?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+918527273997"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition-colors duration-200"
              data-testid="button-call-now"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now: +91 85272 73997
            </a>
            <a 
              href="mailto:support@egcworld.in"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors duration-200"
              data-testid="button-email-us"
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
