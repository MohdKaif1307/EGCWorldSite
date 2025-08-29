import React from 'react';
import { Layout } from '@/components/layout/layout';
import { SEO } from '@/lib/seo';
import { Hero } from '@/components/sections/hero';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Reveal } from '@/components/ui/reveal';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Link } from 'wouter';
import { TrendingUp, GraduationCap, Shield, Search, Megaphone, CheckCircle } from 'lucide-react';
import { SectionBg } from '@/components/ui/section-bg';

export default function Services() {
  const services = [
    {
      id: 'consulting',
      icon: TrendingUp,
      title: 'Business & Management Consulting',
      description: 'Running a business today means facing complex challenges — from compliance issues to operational inefficiencies. At EGC World, our consulting services are designed to help organizations overcome these obstacles and unlock growth.',
      features: [
        'Analyze operations and identify bottlenecks',
        'Design strategies that improve efficiency and reduce risk',
        'Ensure compliance with regulatory requirements',
        'Support growth through financial planning, process improvements, and organizational restructuring',
      ],
      details: 'Whether you\'re a startup setting up your systems or an established enterprise seeking efficiency, our consulting team brings decades of combined experience to guide your success.',
      cta: 'Explore Consulting Services',
      color: 'bg-primary text-primary-foreground hover:bg-primary/90',
    },
    {
      id: 'training',
      icon: GraduationCap,
      title: 'Learning & Development Programs',
      description: 'Your people are your greatest asset. We design customized workshops and training programs to build stronger, future-ready teams.',
      features: [
        'Leadership Development – preparing managers for tomorrow\'s challenges',
        'Skill-Building Workshops – tailored for sales, communication, negotiation, and more',
        'Corporate Training – aligned with organizational goals to boost productivity',
        'Employee Engagement Programs – nurturing motivation and retention',
      ],
      details: 'Unlike generic training, our programs are hands-on, interactive, and industry-relevant. We measure outcomes, not just attendance — ensuring every session contributes to business impact.',
      cta: 'View Training Programs',
      color: 'bg-accent text-accent-foreground hover:bg-accent/90',
    },
    {
      id: 'compliance',
      icon: Shield,
      title: 'Corporate Compliance Solutions',
      description: 'Staying compliant with laws and regulations can be overwhelming. Non-compliance not only brings legal risks but also damages reputation.',
      features: [
        'Regulatory Monitoring – staying updated on changing laws',
        'Compliance Audits – identifying gaps before they become problems',
        'Documentation Support – preparing and maintaining required records',
        'Risk Management – ensuring smooth operations without legal hurdles',
      ],
      details: 'We help businesses in sectors like food, retail, manufacturing, and services stay fully compliant so they can focus on growth without worrying about penalties.',
      cta: 'Get Compliance Support',
      color: 'bg-green-600 text-white hover:bg-green-700',
    },
    {
      id: 'seo',
      icon: Search,
      title: 'SEO Optimization Services',
      description: 'Today, success isn\'t just about running a business — it\'s about being found online. Our SEO services help your brand rank higher, attract the right audience, and convert visitors into customers.',
      features: [
        'Keyword Research & Strategy – identifying the terms your customers are searching for',
        'On-Page Optimization – improving site structure, speed, and content',
        'Off-Page SEO & Link Building – building authority for your domain',
        'Local SEO – helping your business appear in maps and local searches',
      ],
      details: 'With a data-driven approach, we ensure measurable improvements in visibility, traffic, and conversions.',
      cta: 'Boost My SEO',
      color: 'bg-purple-600 text-white hover:bg-purple-700',
    },
    {
      id: 'marketing',
      icon: Megaphone,
      title: 'Marketing for Your Brand',
      description: 'Building a brand is more than advertising — it\'s about telling your story. Our marketing services help businesses connect with the right customers through the right channels.',
      features: [
        'Digital Marketing Campaigns – targeted campaigns that deliver ROI',
        'Social Media Marketing – building engagement and brand recognition',
        'Content Marketing – blogs, articles, and resources that establish authority',
        'Integrated Marketing Strategies – combining online and offline efforts for maximum reach',
      ],
      details: 'Whether you\'re launching a new product or scaling your business, we ensure your brand stands out in a competitive market.',
      cta: 'Grow My Brand',
      color: 'bg-orange-600 text-white hover:bg-orange-700',
    },
  ];

  const whyChooseUs = [
    'Over 10 years of consultancy experience',
    'Expertise across compliance, consulting, training, and marketing',
    'Customized solutions for every business need',
    'Trusted by 1000+ clients across India',
    'A one-stop partner for compliance and growth',
  ];

  const faqs = [
    {
      question: 'What industries do you serve?',
      answer: 'We work with businesses in food, retail, manufacturing, services, and startups — tailoring our services to each industry\'s unique needs.',
    },
    {
      question: 'Do you provide customized consulting packages?',
      answer: 'Yes, every client\'s challenges are different. We design packages that fit your business size, industry, and goals.',
    },
    {
      question: 'How do your training programs differ from others?',
      answer: 'Our training is interactive, measurable, and practical, ensuring real results instead of theoretical sessions.',
    },
    {
      question: 'How quickly can we see results from SEO services?',
      answer: 'SEO is a long-term investment. Typically, our clients see measurable improvements within 3–6 months.',
    },
  ];

  return (
    <Layout>
      <SEO 
        title="Services"
        description="Comprehensive services tailored to your business needs. From compliance to brand growth, our services simplify challenges and unlock opportunities."
        keywords="business consulting, corporate training, compliance solutions, SEO services, brand marketing"
      />
      
      <Hero
        title="Comprehensive Services Tailored to Your Business Needs"
        subtitle="From compliance to brand growth, our services are designed to simplify challenges and unlock new opportunities for businesses of all sizes."
        primaryCTA="Talk to Our Experts"
        variant="page"
        imageSrc="/images/Business_team_collaboration_meeting_4866817a.png"
      />

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-background relative">
        <SectionBg imageSrc="/images/Professional_consultancy_office_interior_f107f1d7.png" opacity={0.35} />
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className="scroll-mt-24">
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  <Reveal className={index % 2 === 1 ? 'lg:order-2' : ''} animation="fade-up" delayMs={60}>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                        <service.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                        {index + 1}. {service.title}
                      </h2>
                    </div>
                    
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-foreground mb-4">We work with businesses to:</h3>
                      <ul className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <p className="text-muted-foreground mb-8 leading-relaxed">
                      {service.details}
                    </p>

                    <Link href={`/services#${service.id}`}>
                      <Button 
                        className={service.color}
                        size="lg"
                        data-testid={`button-${service.id}`}
                      >
                        {service.cta}
                      </Button>
                    </Link>
                  </Reveal>

                  <Reveal className={index % 2 === 1 ? 'lg:order-1' : ''} animation="slide-left" delayMs={120}>
                    <Card className="shadow-lg overflow-hidden">
                      <div className="w-full h-64 relative">
                        <img 
                          src={
                            service.id === 'consulting' ? '/images/Professional_consultancy_office_interior_f107f1d7.png' :
                            service.id === 'training' ? '/images/Corporate_training_workshop_session_e6eb32c9.png' :
                            service.id === 'compliance' ? '/images/Business_compliance_documentation_4dc95b57.png' :
                            '/images/Digital_marketing_and_SEO_workspace_425d3019.png'
                          }
                          alt={`${service.title} - Professional business consulting services by EGC World`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-primary/30 flex items-center justify-center">
                          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <service.icon className="h-10 w-10 text-white" />
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Reveal>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose EGC World */}
      <section className="py-16 lg:py-24 bg-muted relative">
        <SectionBg imageSrc="/images/Business_team_collaboration_meeting_4866817a.png" opacity={0.35} />
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">Why Choose EGC World?</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {whyChooseUs.map((point, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-foreground font-medium">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 lg:py-24 bg-background relative">
        <SectionBg imageSrc="/images/Business_compliance_documentation_4dc95b57.png" opacity={0.30} />
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
              Frequently Asked Questions
            </h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="border border-border rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground">
                    Q{index + 1}. {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary relative">
        <SectionBg imageSrc="/images/Digital_marketing_and_SEO_workspace_425d3019.png" opacity={0.25} />
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
            Ready to simplify compliance and grow your business?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Let's discuss how our services can help transform your business.
          </p>
          <Link href="/contact">
            <Button 
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
              data-testid="button-schedule-consultation"
            >
              Schedule a Consultation Today
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
