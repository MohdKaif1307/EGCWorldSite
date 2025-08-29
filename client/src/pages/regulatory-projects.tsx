import React from 'react';
import { Layout } from '@/components/layout/layout';
import { SEO } from '@/lib/seo';
import { Hero } from '@/components/sections/hero';
import { Reveal } from '@/components/ui/reveal';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Link } from 'wouter';
import { Leaf, Scale, CheckCircle, Users, Award, Globe } from 'lucide-react';
import { SectionBg } from '@/components/ui/section-bg';

export default function RegulatoryProjects() {
  const projects = [
    {
      id: 'eat-right',
      icon: Leaf,
      title: 'Eat Right India Initiative',
      description: 'The Eat Right India Initiative, launched by FSSAI, is a movement to ensure safe, healthy, and sustainable food for all. At EGC World, we proudly support this initiative by working with businesses, food establishments, and organizations to implement best practices in food safety and nutrition.',
      contributions: [
        'Workshops & Training – educating stakeholders on food safety and healthy eating',
        'Awareness Campaigns – engaging communities in understanding safe food practices',
        'Compliance Support – helping businesses align with initiative guidelines',
        'Partnerships – collaborating with government and industry bodies for wider outreach',
      ],
      goal: 'Our goal is to make "safe food for all" a business reality — not just a policy dream.',
      cta: 'Learn More About Eat Right India',
      color: 'text-green-500',
      bgColor: 'bg-green-50',
    },
    {
      id: 'legal-metrology',
      icon: Scale,
      title: 'Legal Metrology Affairs',
      description: 'Legal Metrology governs weights, measures, packaging, and labeling — ensuring fairness in trade and consumer protection. Many businesses struggle with compliance due to complex rules and frequent updates.',
      contributions: [
        'Compliance Advisory – guiding businesses on packaging & labeling laws',
        'Audit & Review – ensuring accurate weights and measures in trade practices',
        'Documentation & Approvals – assistance with registration, amendments, and renewals',
        'Training & Awareness – educating staff and management on legal requirements',
      ],
      goal: 'By working with us, businesses avoid costly penalties while building trust and transparency with consumers.',
      cta: 'Get Legal Metrology Support',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
    },
  ];

  const whyMatters = [
    'Promote consumer trust and safety',
    'Ensure fair trade practices',
    'Align businesses with national initiatives',
    'Prevent penalties and improve brand reputation',
    'Strengthen India\'s journey towards sustainability & responsibility',
  ];

  const faqs = [
    {
      question: 'Why should businesses participate in regulatory projects?',
      answer: 'Because they not only ensure compliance but also boost reputation, consumer trust, and long-term growth opportunities.',
    },
    {
      question: 'Do you only work with large organizations?',
      answer: 'No. We support startups, SMEs, and corporates alike — tailoring solutions to their scale and requirements.',
    },
    {
      question: 'What industries benefit from Legal Metrology support?',
      answer: 'Almost all — particularly FMCG, retail, manufacturing, and packaged food industries.',
    },
    {
      question: 'How does "Eat Right India" benefit a business?',
      answer: 'Businesses gain recognition for promoting safe, sustainable, and healthy practices, which attracts consumers and strengthens brand trust.',
    },
  ];

  return (
    <Layout>
      <SEO 
        title="Regulatory Projects"
        description="Driving compliance through regulatory initiatives. We participate in projects that create awareness, strengthen compliance, and support India's vision for a healthier marketplace."
        keywords="regulatory projects, Eat Right India, Legal Metrology, compliance initiatives, FSSAI, government projects"
      />
      
      <Hero
        title="Driving Compliance Through Regulatory Initiatives"
        subtitle="We actively participate in projects that create awareness, strengthen compliance, and support India's vision for a healthier, fairer marketplace."
        primaryCTA="Talk to Our Experts"
        variant="page"
        imageSrc="/images/Business_compliance_documentation_4dc95b57.png"
      />

      {/* Our Regulatory Projects */}
      <section className="py-16 lg:py-24 bg-background relative">
        <SectionBg imageSrc="/images/Business_compliance_documentation_4dc95b57.png" opacity={0.35} />
        <div className="container mx-auto px-6">
          <div className="space-y-20">
            {projects.map((project, index) => (
              <div key={project.id} id={project.id} className="scroll-mt-24">
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  <Reveal className={index % 2 === 1 ? 'lg:order-2' : ''} animation="fade-up" delayMs={60}>
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 ${project.bgColor} rounded-xl flex items-center justify-center mr-4`}>
                        <project.icon className={`h-8 w-8 ${project.color}`} />
                      </div>
                      <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                        {index + 1}. {project.title}
                      </h2>
                    </div>
                    
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-foreground mb-4">How We Contribute:</h3>
                      <ul className="space-y-3">
                        {project.contributions.map((contribution, contributionIndex) => (
                          <li key={contributionIndex} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{contribution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className={`${project.bgColor} p-6 rounded-lg mb-8`}>
                      <p className="text-foreground font-medium leading-relaxed">
                        {project.goal}
                      </p>
                    </div>

                    <Button 
                      size="lg"
                      className="bg-primary text-primary-foreground hover:bg-primary/90"
                      data-testid={`button-${project.id}`}
                    >
                      {project.cta}
                    </Button>
                  </Reveal>

                  <Reveal className={index % 2 === 1 ? 'lg:order-1' : ''} animation="slide-left" delayMs={120}>
                    <Card className="shadow-lg overflow-hidden">
                      <div className="h-64 w-full">
                        <img 
                          src={project.id === 'eat-right' ? '/images/Business_team_collaboration_meeting_4866817a.png' : '/images/Business_compliance_documentation_4dc95b57.png'}
                          alt={`${project.title} visual`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-center space-x-4">
                          <div className="text-center">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                              <Globe className="h-6 w-6 text-primary" />
                            </div>
                            <p className="text-sm font-medium text-foreground">National Impact</p>
                          </div>
                          <div className="text-center">
                            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-2">
                              <Users className="h-6 w-6 text-accent" />
                            </div>
                            <p className="text-sm font-medium text-foreground">Community Focus</p>
                          </div>
                          <div className="text-center">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                              <Award className="h-6 w-6 text-green-600" />
                            </div>
                            <p className="text-sm font-medium text-foreground">Quality Assured</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Reveal>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Regulatory Projects Matter */}
      <section className="py-16 lg:py-24 bg-muted relative">
        <SectionBg imageSrc="/images/Business_team_collaboration_meeting_4866817a.png" opacity={0.35} />
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12">
              Why Regulatory Projects Matter
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {whyMatters.map((matter, index) => (
                <Card key={index} className="shadow-lg">
                  <CardContent className="p-6 text-center">
                    <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-4" />
                    <p className="text-foreground font-medium">{matter}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Our Commitment</h3>
              <p className="text-muted-foreground leading-relaxed">
                We believe that regulatory projects are not just about compliance — they're about creating a better business environment for everyone. By participating in these initiatives, we help build a foundation of trust, safety, and fairness that benefits businesses, consumers, and society as a whole.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 lg:py-24 bg-background relative">
        <SectionBg imageSrc="/images/Professional_consultancy_office_interior_f107f1d7.png" opacity={0.30} />
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
            Be a part of initiatives that shape a safer, healthier, and more compliant India.
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Join us in creating positive change through regulatory compliance and community impact.
          </p>
          <Link href="/contact">
            <Button 
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
              data-testid="button-partner-with-us"
            >
              Partner With Us Today
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
