import React from 'react';
import { Layout } from '@/components/layout/layout';
import { SEO } from '@/lib/seo';
import { Hero } from '@/components/sections/hero';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Link } from 'wouter';
import { Search, Megaphone, TrendingUp, Users, Target, BarChart3, CheckCircle } from 'lucide-react';

export default function BrandMarketing() {
  const services = [
    {
      id: 'seo',
      icon: Search,
      title: 'SEO Optimization Services',
      description: 'Having a website isn\'t enough — your customers must be able to find it. Our SEO experts use proven strategies to boost your search engine rankings and increase traffic.',
      process: [
        'Keyword Research & Strategy – finding what your audience is searching for',
        'On-Page SEO – optimizing website structure, meta tags, headings, and content',
        'Technical SEO – improving site speed, mobile responsiveness, and crawlability',
        'Off-Page SEO & Link Building – creating high-quality backlinks to build authority',
        'Local SEO – helping your business rank in city-level searches and Google Maps',
      ],
      benefits: [
        'Increase website traffic',
        'Generate qualified leads',
        'Build credibility with higher rankings',
        'Stay ahead of competitors',
      ],
      cta: 'Boost My SEO Today',
      color: 'bg-purple-600 text-white hover:bg-purple-700',
    },
    {
      id: 'marketing',
      icon: Megaphone,
      title: 'Marketing for Your Brand',
      description: 'Marketing is about telling your story in a way that connects with your customers. We craft tailored strategies to make your brand memorable and impactful.',
      process: [
        'Digital Marketing Campaigns – social media, email, and paid ads',
        'Social Media Marketing – creating engaging content for platforms like LinkedIn, Instagram, and Facebook',
        'Content Marketing – blogs, articles, and guides to establish thought leadership',
        'Brand Positioning – building your unique identity in a crowded marketplace',
        'Integrated Campaigns – combining online and offline methods for maximum reach',
      ],
      benefits: [
        'Stronger brand recognition',
        'Higher customer engagement',
        'Measurable ROI from campaigns',
        'Long-term brand loyalty',
      ],
      cta: 'Start My Marketing Campaign',
      color: 'bg-orange-600 text-white hover:bg-orange-700',
    },
  ];

  const approach = [
    {
      step: 1,
      title: 'Understand your business goals',
      description: 'We start by learning about your objectives, target audience, and challenges.',
    },
    {
      step: 2,
      title: 'Research your target audience & competitors',
      description: 'Deep dive into market analysis to identify opportunities and positioning.',
    },
    {
      step: 3,
      title: 'Create a tailored SEO + Marketing strategy',
      description: 'Develop a comprehensive plan that aligns with your business objectives.',
    },
    {
      step: 4,
      title: 'Execute campaigns with measurable KPIs',
      description: 'Implement strategies with clear metrics and performance indicators.',
    },
    {
      step: 5,
      title: 'Track, analyze, and optimize for continuous growth',
      description: 'Monitor results and continuously improve for maximum impact.',
    },
  ];

  const faqs = [
    {
      question: 'How long does SEO take to show results?',
      answer: 'Typically, clients see measurable improvements in 3–6 months. SEO is a long-term investment with lasting benefits.',
    },
    {
      question: 'Do you handle both SEO and digital marketing?',
      answer: 'Yes, we offer end-to-end solutions that include SEO, content, social media, and brand campaigns.',
    },
    {
      question: 'Can you create a custom marketing plan for my business?',
      answer: 'Absolutely. We design campaigns based on your goals, audience, and budget.',
    },
    {
      question: 'Do you serve startups as well as established companies?',
      answer: 'Yes. From new businesses seeking visibility to corporates expanding reach, our services are scalable.',
    },
  ];

  return (
    <Layout>
      <SEO 
        title="Brand & Marketing"
        description="Result-driven SEO and marketing solutions that enhance your brand visibility, attract customers, and deliver measurable business growth."
        keywords="SEO optimization, digital marketing, brand marketing, social media marketing, content marketing"
      />
      
      <Hero
        title="Helping Your Brand Grow and Stand Out"
        subtitle="We provide result-driven SEO and marketing solutions that enhance your brand visibility, attract customers, and deliver measurable business growth."
        primaryCTA="Grow My Brand"
        variant="page"
      />

      {/* Our Services */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className="scroll-mt-24">
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                        <service.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                        {index + 1}. {service.title}
                      </h2>
                    </div>
                    
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-foreground mb-4">
                        Our {service.title.split(' ')[0]} Process Includes:
                      </h3>
                      <ul className="space-y-3">
                        {service.process.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-foreground mb-4">
                        Why Choose Our {service.title.split(' ')[0]} Services?
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="text-sm text-muted-foreground">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button 
                      className={service.color}
                      size="lg"
                      data-testid={`button-${service.id}`}
                    >
                      {service.cta}
                    </Button>
                  </div>

                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <Card className="shadow-lg">
                      <CardContent className="p-8">
                        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                          <service.icon className="h-24 w-24 text-primary" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Our Approach to Brand Growth
              </h2>
              <p className="text-xl text-muted-foreground">
                We don't believe in "one-size-fits-all." Every brand has a unique voice, and we make sure it's heard.
              </p>
            </div>

            <div className="space-y-8">
              {approach.map((step, index) => (
                <Card key={index} className="shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-6">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-primary-foreground font-bold">{step.step}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          Step {step.step}: {step.title}
                        </h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
              Case Study
            </h2>
            
            <Card className="shadow-xl bg-gradient-to-r from-primary/5 to-accent/5">
              <CardContent className="p-12">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">200%</div>
                    <p className="text-muted-foreground">Increase in Organic Traffic</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent mb-2">2x</div>
                    <p className="text-muted-foreground">Customer Inquiries</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">6</div>
                    <p className="text-muted-foreground">Months to Results</p>
                  </div>
                </div>
                
                <blockquote className="text-lg italic text-foreground mb-4">
                  "Within 6 months of SEO & digital marketing with EGC World, a local food brand achieved a 200% increase in organic website traffic and doubled customer inquiries."
                </blockquote>
                
                <div className="flex items-center justify-center space-x-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                  <span className="text-muted-foreground">Real results from our integrated approach</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
              FAQs (SEO-Friendly)
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
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
            Ready to take your brand to the next level?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Let's create a marketing strategy that drives real results for your business.
          </p>
          <Link href="/contact">
            <Button 
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
              data-testid="button-schedule-consultation"
            >
              Schedule a Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
