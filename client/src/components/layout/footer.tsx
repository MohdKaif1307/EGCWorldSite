import React from 'react';
import { Link } from 'wouter';
import { Globe, Linkedin, Facebook, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/regulatory-projects', label: 'Regulatory Projects' },
    { href: '/insights', label: 'Insights' },
    { href: '/contact', label: 'Contact Us' },
  ];

  const services = [
    { href: '/services#consulting', label: 'Business Consulting' },
    { href: '/services#training', label: 'Learning & Development' },
    { href: '/services#compliance', label: 'Corporate Compliance' },
    { href: '/services#seo', label: 'SEO Optimization' },
    { href: '/brand-marketing', label: 'Brand Marketing' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-foreground text-primary-foreground py-12 lg:py-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Globe className="text-primary-foreground text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold">EGC World</h3>
                <p className="text-sm text-primary-foreground/80">Emmanuel Global Consultancies</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Simplifying compliance, empowering businesses. With over 10 years of expertise in consultancy, training, and regulatory project implementation.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.label}
                  href={social.href} 
                  className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-colors duration-200"
                  data-testid={`social-${social.label.toLowerCase()}`}
                  aria-label={social.label}
                >
                  <social.icon className="text-primary-foreground w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <div 
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 cursor-pointer"
                    data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.label}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <div className="space-y-3">
              {services.map((service) => (
                <Link key={service.href} href={service.href}>
                  <div 
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 cursor-pointer"
                    data-testid={`footer-service-${service.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {service.label}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <p className="text-primary-foreground/80 text-sm">
              © 2025 Emmanuel Global Consultancies. All Rights Reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy">
                <div className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 cursor-pointer">
                  Privacy Policy
                </div>
              </Link>
              <Link href="/terms">
                <div className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 cursor-pointer">
                  Terms of Service
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
