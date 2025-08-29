import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Globe, ChevronDown } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/insights', label: 'Insights' },
    { href: '/contact', label: 'Contact' },
  ];

  const serviceItems = [
    { href: '/services#consulting', label: 'Business & Management Consulting' },
    { href: '/services#training', label: 'Learning & Development' },
    { href: '/services#compliance', label: 'Corporate Compliance' },
    { href: '/services#seo', label: 'SEO Optimization' },
    { href: '/services#marketing', label: 'Brand Marketing' },
  ];

  const projectItems = [
    { href: '/regulatory-projects#eat-right', label: 'Eat Right India Initiative' },
    { href: '/regulatory-projects#legal-metrology', label: 'Legal Metrology Affairs' },
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'nav-active' : ''}`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" data-testid="logo-link">
            <div className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Globe className="text-primary-foreground text-xl" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">EGC World</h1>
                <p className="text-xs text-muted-foreground">Global Consultancies</p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.href}>
                    <Link href={item.href}>
                      <NavigationMenuLink 
                        className={`text-foreground hover:text-primary transition-colors duration-200 px-4 py-2 ${
                          location === item.href ? 'text-primary font-medium' : ''
                        }`}
                        data-testid={`nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {item.label}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
                
                {/* Services Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className="text-foreground hover:text-primary"
                    data-testid="nav-services-dropdown"
                  >
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-64 p-2">
                      {serviceItems.map((item) => (
                        <Link key={item.href} href={item.href}>
                          <NavigationMenuLink 
                            className="block px-4 py-2 text-sm text-foreground hover:bg-muted rounded-md transition-colors"
                            data-testid={`service-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                          >
                            {item.label}
                          </NavigationMenuLink>
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Projects Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className="text-foreground hover:text-primary"
                    data-testid="nav-projects-dropdown"
                  >
                    Projects
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-56 p-2">
                      {projectItems.map((item) => (
                        <Link key={item.href} href={item.href}>
                          <NavigationMenuLink 
                            className="block px-4 py-2 text-sm text-foreground hover:bg-muted rounded-md transition-colors"
                            data-testid={`project-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                          >
                            {item.label}
                          </NavigationMenuLink>
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/contact">
              <Button 
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                data-testid="button-talk-to-experts"
              >
                Talk to Our Experts
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" data-testid="button-mobile-menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <div className="text-foreground hover:text-primary transition-colors py-2 border-b border-border">
                      {item.label}
                    </div>
                  </Link>
                ))}
                <div className="py-2 border-b border-border">
                  <div className="font-medium text-foreground mb-2">Services</div>
                  <div className="space-y-2 ml-4">
                    {serviceItems.map((item) => (
                      <Link key={item.href} href={item.href}>
                        <div className="text-sm text-muted-foreground hover:text-primary transition-colors py-1">
                          {item.label}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="py-2 border-b border-border">
                  <div className="font-medium text-foreground mb-2">Projects</div>
                  <div className="space-y-2 ml-4">
                    {projectItems.map((item) => (
                      <Link key={item.href} href={item.href}>
                        <div className="text-sm text-muted-foreground hover:text-primary transition-colors py-1">
                          {item.label}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
                <Link href="/contact">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Talk to Our Experts
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
