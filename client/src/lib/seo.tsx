interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
}

export function SEO({ title, description, keywords, canonical }: SEOProps) {
  const defaultTitle = "Emmanuel Global Consultancies - Simplifying Compliance, Empowering Businesses";
  const defaultDescription = "Comprehensive consultancy services including compliance, corporate training, brand development, and regulatory project implementation. Trusted by 1000+ businesses.";
  
  const pageTitle = title ? `${title} | EGC World` : defaultTitle;
  
  React.useEffect(() => {
    document.title = pageTitle;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description || defaultDescription);
    }
    
    // Update meta keywords
    if (keywords) {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      }
    }
    
    // Update canonical URL
    if (canonical) {
      let canonicalElement = document.querySelector('link[rel="canonical"]');
      if (!canonicalElement) {
        canonicalElement = document.createElement('link');
        canonicalElement.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalElement);
      }
      canonicalElement.setAttribute('href', canonical);
    }
  }, [pageTitle, description, keywords, canonical]);

  return null;
}

import React from 'react';
