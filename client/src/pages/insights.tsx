import React from 'react';
import { Layout } from '@/components/layout/layout';
import { SEO } from '@/lib/seo';
import { Hero } from '@/components/sections/hero';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'wouter';
import { Calendar, User, ArrowRight, BookOpen, Target, TrendingUp } from 'lucide-react';

const blogPosts = [
  {
    id: 'legal-metrology-guide',
    title: 'Legal Metrology in India: A Complete Guide for Businesses in 2025',
    excerpt: 'Running a business in India means following certain rules and regulations to ensure fairness, trust, and customer satisfaction. One of the most important yet often overlooked areas is Legal Metrology.',
    category: 'COMPLIANCE',
    author: 'EGC World Expert',
    date: 'January 15, 2025',
    readTime: '8 min read',
    content: `
      <h2>Introduction</h2>
      <p>Running a business in India means following certain rules and regulations to ensure fairness, trust, and customer satisfaction. One of the most important yet often overlooked areas is Legal Metrology.</p>
      <p>In simple words, Legal Metrology deals with weights, measures, packaging, and labeling. It makes sure that products are packed and sold in a way that is accurate, transparent, and fair to consumers. For businesses, understanding these rules is not just about avoiding penalties — it's about building credibility and winning customer trust.</p>

      <h2>What is Legal Metrology?</h2>
      <p>Legal Metrology is a law in India that sets rules for:</p>
      <ul>
        <li>The weights and measures used in trade.</li>
        <li>Packaging requirements for goods.</li>
        <li>Labeling details such as price, quantity, manufacturer, and expiry date.</li>
      </ul>
      <p>For example, when a customer buys a 1kg packet of rice, they should actually get 1kg — not 950g or 1050g. Similarly, packaged food must display clear information about net weight, manufacturing date, expiry date, and MRP.</p>

      <h2>Why is Legal Metrology Important for Businesses?</h2>
      <ul>
        <li><strong>Consumer Trust</strong> – Transparent packaging and labeling build credibility. Customers are more likely to choose a brand that they feel is honest.</li>
        <li><strong>Avoiding Penalties</strong> – Non-compliance can lead to fines, product seizures, or even cancellation of licenses.</li>
        <li><strong>Brand Reputation</strong> – Companies that follow regulations are seen as reliable and professional.</li>
        <li><strong>Fair Trade Practices</strong> – It creates a level playing field for all businesses by ensuring no one gains unfair advantage.</li>
      </ul>

      <h2>Who Needs to Follow Legal Metrology?</h2>
      <p>Almost every business that deals with packaged goods or measurement-based trade comes under this law. This includes:</p>
      <ul>
        <li>FMCG companies (food, beverages, personal care, household goods).</li>
        <li>Retailers & wholesalers.</li>
        <li>E-commerce platforms selling packaged products.</li>
        <li>Manufacturers, packers, and importers of goods.</li>
      </ul>

      <h2>Key Requirements Under Legal Metrology</h2>
      <p>Businesses must ensure that their packaged products clearly display:</p>
      <ul>
        <li>✅ Net quantity / weight</li>
        <li>✅ MRP (Maximum Retail Price)</li>
        <li>✅ Manufacturer / Importer details</li>
        <li>✅ Date of manufacture & expiry (where applicable)</li>
        <li>✅ Customer care contact details</li>
      </ul>
      <p>Failing to provide accurate information can lead to strict action from authorities.</p>

      <h2>Common Mistakes Businesses Make</h2>
      <ul>
        <li>Using incorrect or tampered weights and measures.</li>
        <li>Missing details on product labels.</li>
        <li>Selling goods above the declared MRP.</li>
        <li>Not registering as a packer or importer under Legal Metrology.</li>
      </ul>
      <p>These mistakes may seem small but can cause serious legal and financial consequences.</p>

      <h2>How EGC World Helps Businesses</h2>
      <p>At Emmanuel Global Consultancies (EGC World), we help businesses simplify Legal Metrology compliance by offering:</p>
      <ul>
        <li><strong>Advisory & Guidance</strong> – Understanding the law in simple terms.</li>
        <li><strong>Audit & Review</strong> – Checking your packaging, labeling, and trade practices.</li>
        <li><strong>Documentation Support</strong> – Assistance in registrations, amendments, and renewals.</li>
        <li><strong>Training & Awareness</strong> – Educating your team on compliance practices.</li>
      </ul>
      <p>Our goal is to make sure your business stays compliant, avoids penalties, and builds long-term consumer trust.</p>

      <h2>Frequently Asked Questions (FAQs)</h2>
      <p><strong>Q1. What happens if a business doesn't follow Legal Metrology rules?</strong><br>
      👉 Penalties can include fines, product seizures, and even cancellation of licenses.</p>
      
      <p><strong>Q2. Do small businesses and startups also need to comply?</strong><br>
      👉 Yes, all businesses dealing with packaged goods must comply, regardless of size.</p>
      
      <p><strong>Q3. How can I ensure my packaging is compliant?</strong><br>
      👉 Work with consultants like EGC World who review your packaging and labeling, and guide you through the registration process.</p>

      <h2>Conclusion</h2>
      <p>Legal Metrology is not just about rules — it's about building a business based on trust, fairness, and transparency. By staying compliant, you protect your brand and strengthen your customer relationships.</p>
      <p>👉 Need help with Legal Metrology compliance? Contact EGC World today at +91 85272 73997 or support@egcworld.in and let our experts simplify the process for you.</p>
    `,
    tags: ['Legal Metrology', 'Compliance', 'Business Law', 'Packaging'],
  },
  {
    id: 'eat-right-india-guide',
    title: 'Eat Right India Initiative: What Businesses Need to Know',
    excerpt: 'The way we eat is changing, and so are the expectations from businesses in the food industry. The Eat Right India Initiative, launched by FSSAI, is one such movement that aims to make food safe, healthy, and sustainable for everyone.',
    category: 'REGULATORY',
    author: 'EGC World Expert',
    date: 'January 10, 2025',
    readTime: '6 min read',
    content: `
      <h2>Introduction</h2>
      <p>The way we eat is changing, and so are the expectations from businesses in the food industry. The Eat Right India Initiative, launched by FSSAI, is one such movement that aims to make food safe, healthy, and sustainable for everyone.</p>
      <p>For businesses, this initiative is not just a government program — it's an opportunity to build consumer trust, improve quality, and stand out in a competitive market.</p>

      <h2>What is the Eat Right India Initiative?</h2>
      <p>Eat Right India is a nationwide program that focuses on three main goals:</p>
      <ul>
        <li><strong>Safe Food</strong> – ensuring food is hygienic and free from contamination.</li>
        <li><strong>Healthy Diets</strong> – promoting balanced, nutritious meals for better public health.</li>
        <li><strong>Sustainable Practices</strong> – reducing food waste, conserving resources, and encouraging eco-friendly packaging.</li>
      </ul>
      <p>It is about creating a culture where businesses, regulators, and consumers work together to improve the food ecosystem in India.</p>

      <h2>Why Does It Matter for Businesses?</h2>
      <ul>
        <li><strong>Stronger Consumer Confidence</strong> - Customers are more likely to trust and buy from businesses that follow hygiene and healthy food practices.</li>
        <li><strong>Compliance with Regulations</strong> - Aligning with this initiative helps businesses stay on the right side of food safety laws.</li>
        <li><strong>Brand Advantage</strong> - Being part of a national mission adds credibility and improves your brand image.</li>
        <li><strong>Sustainability Benefits</strong> - Using eco-friendly packaging and reducing waste lowers costs in the long run and appeals to conscious consumers.</li>
      </ul>

      <h2>Who Can Participate?</h2>
      <p>The initiative is open to all stakeholders in the food ecosystem, including:</p>
      <ul>
        <li>Food manufacturers</li>
        <li>Restaurants & hotels</li>
        <li>Street food vendors</li>
        <li>Retailers & supermarkets</li>
        <li>Schools, colleges, and workplaces with canteens</li>
      </ul>

      <h2>Steps Businesses Can Take</h2>
      <ul>
        <li>✅ Follow proper hygiene and cleanliness standards in kitchens and outlets.</li>
        <li>✅ Train staff on safe food handling and healthy practices.</li>
        <li>✅ Display nutritional information clearly for consumers.</li>
        <li>✅ Switch to eco-friendly packaging and reduce plastic usage.</li>
        <li>✅ Partner with awareness programs to show your commitment.</li>
      </ul>
      <p>By taking small steps, businesses can make a big difference — both for customers and their own brand reputation.</p>

      <h2>How EGC World Supports Businesses</h2>
      <p>At Emmanuel Global Consultancies (EGC World), we help businesses become part of the Eat Right India movement by offering:</p>
      <ul>
        <li><strong>Awareness Workshops</strong> – educating staff and management on safe food practices.</li>
        <li><strong>Compliance Guidance</strong> – ensuring your business meets safety and hygiene standards.</li>
        <li><strong>Implementation Support</strong> – helping adopt sustainable practices in packaging and operations.</li>
        <li><strong>Recognition Assistance</strong> – guiding businesses to get certified and acknowledged under the initiative.</li>
      </ul>

      <h2>Frequently Asked Questions (FAQs)</h2>
      <p><strong>Q1. Is participation in Eat Right India mandatory for all businesses?</strong><br>
      👉 No, it's not mandatory. But adopting its principles helps businesses stay compliant and build consumer trust.</p>
      
      <p><strong>Q2. Do small businesses and street vendors also benefit?</strong><br>
      👉 Yes, even small vendors gain recognition and customer confidence when they align with the initiative.</p>
      
      <p><strong>Q3. How can I start implementing these practices?</strong><br>
      👉 Begin with hygiene, staff training, and eco-friendly packaging. For complete guidance, consult experts like EGC World.</p>

      <h2>Conclusion</h2>
      <p>The Eat Right India Initiative is more than a campaign — it's a chance for businesses to show responsibility, improve quality, and connect better with customers.</p>
      <p>👉 Want to be part of India's food safety movement? Contact EGC World today at +91 85272 73997 or support@egcworld.in for guidance on implementation and compliance.</p>
    `,
    tags: ['Eat Right India', 'FSSAI', 'Food Safety', 'Sustainability'],
  },
  {
    id: 'corporate-training-business-growth',
    title: 'The Role of Training in Building Future-Ready Teams',
    excerpt: 'Your people are your greatest asset. In today\'s rapidly evolving business landscape, the success of any organization depends largely on how well-equipped its workforce is to handle challenges, adapt to changes, and drive growth.',
    category: 'TRAINING',
    author: 'EGC World Expert',
    date: 'January 5, 2025',
    readTime: '7 min read',
    content: `
      <h2>Introduction</h2>
      <p>Your people are your greatest asset. In today's rapidly evolving business landscape, the success of any organization depends largely on how well-equipped its workforce is to handle challenges, adapt to changes, and drive growth.</p>
      <p>Corporate training isn't just about skill development — it's about building future-ready teams that can navigate uncertainty, embrace innovation, and deliver consistent results.</p>

      <h2>Why Corporate Training Matters More Than Ever</h2>
      <p>The business world is changing faster than ever before. Technology advances, market dynamics shift, and customer expectations evolve continuously. In this environment, businesses that invest in their people's development gain a significant competitive advantage.</p>

      <h3>Key Benefits of Strategic Training Programs:</h3>
      <ul>
        <li><strong>Enhanced Productivity</strong> – Well-trained employees work more efficiently and make fewer mistakes.</li>
        <li><strong>Higher Employee Retention</strong> – People stay longer with companies that invest in their growth.</li>
        <li><strong>Improved Customer Satisfaction</strong> – Skilled teams deliver better service and solutions.</li>
        <li><strong>Innovation Culture</strong> – Training encourages creative thinking and problem-solving.</li>
        <li><strong>Compliance & Risk Management</strong> – Proper training reduces legal and operational risks.</li>
      </ul>

      <h2>Essential Training Areas for Modern Businesses</h2>

      <h3>1. Leadership Development</h3>
      <p>Building strong leaders at every level is crucial for organizational success. Leadership training should focus on:</p>
      <ul>
        <li>Decision-making and strategic thinking</li>
        <li>Team management and motivation</li>
        <li>Communication and conflict resolution</li>
        <li>Change management and adaptability</li>
      </ul>

      <h3>2. Digital Skills & Technology</h3>
      <p>As businesses become increasingly digital, employees need to stay current with:</p>
      <ul>
        <li>New software and digital tools</li>
        <li>Data analysis and interpretation</li>
        <li>Cybersecurity awareness</li>
        <li>Digital communication and collaboration</li>
      </ul>

      <h3>3. Soft Skills Development</h3>
      <p>Technical skills alone aren't enough. Modern employees need:</p>
      <ul>
        <li>Effective communication skills</li>
        <li>Emotional intelligence</li>
        <li>Critical thinking and problem-solving</li>
        <li>Adaptability and resilience</li>
      </ul>

      <h3>4. Compliance & Regulatory Training</h3>
      <p>Keeping teams updated on laws, regulations, and industry standards is essential for:</p>
      <ul>
        <li>Legal compliance and risk mitigation</li>
        <li>Quality assurance and standards</li>
        <li>Safety protocols and procedures</li>
        <li>Ethical business practices</li>
      </ul>

      <h2>Designing Effective Training Programs</h2>

      <h3>1. Assess Current Needs</h3>
      <p>Before designing any training program, conduct a thorough assessment to identify:</p>
      <ul>
        <li>Skill gaps in your organization</li>
        <li>Business objectives and challenges</li>
        <li>Employee career aspirations</li>
        <li>Industry trends and requirements</li>
      </ul>

      <h3>2. Choose the Right Format</h3>
      <p>Different training formats work better for different objectives:</p>
      <ul>
        <li><strong>Workshops & Seminars</strong> – Interactive learning and networking</li>
        <li><strong>Online Training</strong> – Flexible, self-paced learning</li>
        <li><strong>On-the-job Training</strong> – Practical, hands-on experience</li>
        <li><strong>Mentoring Programs</strong> – Personalized guidance and development</li>
        <li><strong>Cross-functional Projects</strong> – Learning through collaboration</li>
      </ul>

      <h3>3. Measure and Optimize</h3>
      <p>Effective training programs include:</p>
      <ul>
        <li>Clear learning objectives and outcomes</li>
        <li>Regular progress assessments</li>
        <li>Feedback collection from participants</li>
        <li>ROI measurement and impact analysis</li>
        <li>Continuous improvement based on results</li>
      </ul>

      <h2>How EGC World Transforms Teams Through Training</h2>
      <p>At Emmanuel Global Consultancies (EGC World), we understand that every organization has unique training needs. Our approach focuses on:</p>

      <ul>
        <li><strong>Customized Programs</strong> – Tailored to your industry, business goals, and team requirements</li>
        <li><strong>Expert Trainers</strong> – Industry professionals with real-world experience</li>
        <li><strong>Interactive Methods</strong> – Engaging workshops, case studies, and practical exercises</li>
        <li><strong>Measurable Outcomes</strong> – Clear KPIs and progress tracking</li>
        <li><strong>Ongoing Support</strong> – Continuous guidance and follow-up sessions</li>
      </ul>

      <h2>The ROI of Training Investment</h2>
      <p>Organizations that invest in comprehensive training programs typically see:</p>
      <ul>
        <li>15-25% improvement in productivity</li>
        <li>30-50% reduction in employee turnover</li>
        <li>20-30% increase in customer satisfaction scores</li>
        <li>Significant reduction in compliance-related issues</li>
        <li>Higher employee engagement and morale</li>
      </ul>

      <h2>Getting Started with Your Training Initiative</h2>
      <p>To build a successful training program:</p>
      <ol>
        <li>Identify your organization's specific needs and goals</li>
        <li>Allocate appropriate budget and resources</li>
        <li>Choose the right training partner or consultant</li>
        <li>Develop a comprehensive training calendar</li>
        <li>Communicate the value and importance to all stakeholders</li>
        <li>Implement, monitor, and continuously improve</li>
      </ol>

      <h2>Conclusion</h2>
      <p>In an era of constant change, the organizations that thrive are those that invest in building future-ready teams. Training isn't just a cost — it's a strategic investment that drives productivity, innovation, and sustainable growth.</p>
      <p>By developing your people, you're not just improving skills — you're building a culture of excellence that will serve your organization for years to come.</p>
      
      <p>👉 Ready to transform your team through strategic training? Contact EGC World today at +91 85272 73997 or support@egcworld.in to discuss customized training solutions for your organization.</p>
    `,
    tags: ['Corporate Training', 'Team Development', 'Leadership', 'Business Growth'],
  },
];

const categories = [
  { id: 'all', label: 'All Categories', icon: BookOpen },
  { id: 'compliance', label: 'Compliance & Regulatory Updates', icon: Target },
  { id: 'training', label: 'Training & Development', icon: TrendingUp },
  { id: 'regulatory', label: 'Case Studies & Success Stories', icon: BookOpen },
];

export default function Insights() {
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const [selectedPost, setSelectedPost] = React.useState<string | null>(null);

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category.toLowerCase() === selectedCategory);

  const selectedPostData = selectedPost ? blogPosts.find(post => post.id === selectedPost) : null;

  if (selectedPostData) {
    return (
      <Layout>
        <SEO 
          title={selectedPostData.title}
          description={selectedPostData.excerpt}
          keywords={selectedPostData.tags.join(', ')}
        />
        
        {/* Article Header */}
        <section className="pt-24 pb-16 bg-muted">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <Button 
                variant="ghost" 
                onClick={() => setSelectedPost(null)}
                className="mb-8"
                data-testid="button-back-to-insights"
              >
                ← Back to Insights
              </Button>
              
              <Badge className="mb-4" variant="secondary">
                {selectedPostData.category}
              </Badge>
              
              <h1 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
                {selectedPostData.title}
              </h1>
              
              <div className="flex items-center space-x-6 text-muted-foreground mb-8">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>{selectedPostData.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{selectedPostData.date}</span>
                </div>
                <span>{selectedPostData.readTime}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: selectedPostData.content }}
              />
              
              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedPostData.tags.map((tag) => (
                    <Badge key={tag} variant="outline">{tag}</Badge>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <Card className="mt-12 bg-primary">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                    Need Expert Guidance?
                  </h3>
                  <p className="text-primary-foreground/90 mb-6">
                    Our team of consultants is ready to help you implement these strategies in your business.
                  </p>
                  <Link href="/contact">
                    <Button 
                      variant="secondary"
                      size="lg"
                      className="bg-white text-primary hover:bg-white/90"
                      data-testid="button-contact-experts"
                    >
                      Contact Our Experts
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO 
        title="Insights & Resources"
        description="Stay informed with expert updates on compliance, training, regulatory projects, and brand growth. Our blog is your go-to resource for practical business knowledge."
        keywords="business insights, compliance updates, corporate training tips, regulatory news, brand marketing strategies"
      />
      
      <Hero
        title="Insights & Resources"
        subtitle="Stay informed with expert updates on compliance, training, regulatory projects, and brand growth. Our blog is your go-to resource for practical business knowledge."
        primaryCTA="Read the Latest Articles"
        variant="page"
      />

      {/* Introduction Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At EGC World, we believe that knowledge empowers businesses. That's why we regularly share insights, updates, and guides that help organizations stay compliant, competitive, and future-ready.
            </p>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Compliance & Regulations</h3>
                <p className="text-sm text-muted-foreground">Updates on legal frameworks and industry projects</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Training & Development</h3>
                <p className="text-sm text-muted-foreground">Tips for building skills and leadership</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Megaphone className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Brand & Marketing</h3>
                <p className="text-sm text-muted-foreground">Digital marketing trends and branding advice</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Case Studies</h3>
                <p className="text-sm text-muted-foreground">Real-world examples of business growth</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="py-8 bg-muted">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="flex items-center space-x-2"
                data-testid={`filter-${category.id}`}
              >
                <category.icon className="h-4 w-4" />
                <span>{category.label}</span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                <CardHeader>
                  <Badge className="w-fit mb-2" variant="secondary">
                    {post.category}
                  </Badge>
                  <CardTitle className="text-xl text-foreground hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <Button 
                    variant="link" 
                    className="text-primary font-semibold p-0 h-auto"
                    onClick={() => setSelectedPost(post.id)}
                    data-testid={`button-read-${post.id}`}
                  >
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Read Our Insights */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
              Why Read Our Insights?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Expert Knowledge</h3>
                  <p className="text-muted-foreground">Get insights directly from consultants and trainers with real-world experience.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Stay Updated</h3>
                  <p className="text-muted-foreground">Keep pace with regulatory changes and industry developments.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="h-6 w-6 text-green-600" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Practical Tips</h3>
                  <p className="text-muted-foreground">Access actionable advice you can apply immediately to your business.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen className="h-6 w-6 text-orange-600" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Real Case Studies</h3>
                  <p className="text-muted-foreground">Learn from real case studies of businesses like yours.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
            Want insights tailored to your business?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Subscribe to our newsletter for regular updates and exclusive content.
          </p>
          <Link href="/contact">
            <Button 
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
              data-testid="button-subscribe-newsletter"
            >
              Subscribe to Our Newsletter
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
