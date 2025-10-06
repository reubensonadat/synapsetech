'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Star, Zap } from 'lucide-react';
import pricingData from '@/data/pricing.json';
import contactData from '@/data/contact.json';

export default function Pricing() {
  const handleContactClick = (serviceType?: string, packageType?: string) => {
    let message = 'Hello Synap Tech, I am interested in your services.';
    
    if (serviceType && packageType) {
      message = `Hello Synap Tech, I am interested in your ${packageType} ${serviceType} package. Can you provide more details?`;
    } else if (serviceType) {
      message = `Hello Synap Tech, I am interested in your ${serviceType} services. Can you provide a quote?`;
    }
    
    const whatsappUrl = `${contactData.whatsappLinkTemplate}${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const websitePackages = [
    {
      title: 'Basic',
      price: `GH₵ ${pricingData.website.basic.priceMin.toLocaleString()} - ${pricingData.website.basic.priceMax.toLocaleString()}`,
      description: 'Perfect for small businesses and personal websites',
      features: [
        'Single-page website',
        'Responsive design',
        'Basic SEO setup',
        'Contact form',
        'Social media integration',
        '1 revision round',
        '2-week delivery'
      ],
      popular: false
    },
    {
      title: 'Standard',
      price: `GH₵ ${pricingData.website.standard.priceMin.toLocaleString()} - ${pricingData.website.standard.priceMax.toLocaleString()}`,
      description: 'Ideal for growing businesses needing more functionality',
      features: [
        'Multi-page website (5-10 pages)',
        'Advanced responsive design',
        'Full SEO optimization',
        'Contact forms & booking system',
        'Blog/portfolio functionality',
        'Social media integration',
        '2 revision rounds',
        '3-4 week delivery'
      ],
      popular: true
    },
    {
      title: 'Premium',
      price: `GH₵ ${pricingData.website.premium.priceMin.toLocaleString()}+`,
      description: 'Comprehensive solution for established businesses',
      features: [
        'Custom website design',
        'Unlimited pages',
        'Advanced SEO & analytics',
        'E-commerce functionality',
        'Content management system',
        'Advanced features & integrations',
        'Unlimited revisions',
        '6-8 week delivery',
        '6 months maintenance included'
      ],
      popular: false
    }
  ];

  const contentPackages = [
    {
      title: pricingData.content.basic.title,
      price: `GH₵ ${pricingData.content.basic.priceMin.toLocaleString()} - ${pricingData.content.basic.priceMax.toLocaleString()}`,
      description: 'Great for startups and small businesses',
      features: pricingData.content.basic.features,
      popular: false
    },
    {
      title: pricingData.content.standard.title,
      price: `GH₵ ${pricingData.content.standard.priceMin.toLocaleString()} - ${pricingData.content.standard.priceMax.toLocaleString()}`,
      description: 'Perfect for businesses ready to scale',
      features: pricingData.content.standard.features,
      popular: true
    },
    {
      title: pricingData.content.premium.title,
      price: `GH₵ ${pricingData.content.premium.priceMin.toLocaleString()} - ${pricingData.content.premium.priceMax.toLocaleString()}`,
      description: 'Comprehensive content solution for brands',
      features: pricingData.content.premium.features,
      popular: false
    }
  ];

  return (
    <div className="min-h-screen light-page-bg">
      {/* Hero Section */}
      <section className="relative py-20 header-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold vibrant-text mb-6 font-poppins">
              Transparent Pricing
            </h1>
            <p className="text-lg md:text-xl light-mode-dark-text mb-8 leading-relaxed">
              Choose the perfect package for your needs. All prices are competitive and include exceptional quality and support.
            </p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Website Packages */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-secondary mb-4 font-poppins">
              Website Development Packages
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Professional websites that help your business grow and succeed online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {websitePackages.map((pkg, index) => (
              <Card key={index} className={`relative transition-all duration-300 ${
                pkg.popular 
                  ? 'border-2 border-brand-primary shadow-xl scale-105 shadow-brand-primary/20 dark:shadow-white/20' 
                  : 'border-0 shadow-md'
              }`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-brand-primary text-white px-4 py-2 text-sm font-semibold flex items-center gap-2">
                      <Star className="h-4 w-4" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-brand-secondary font-poppins">
                    {pkg.title}
                  </CardTitle>
                  <div className="text-3xl font-bold text-brand-primary mb-2">
                    {pkg.price}
                  </div>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    {pkg.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button
                    className="w-full button-vibrant py-6 text-lg font-semibold rounded-lg transition-all duration-300"
                    onClick={() => handleContactClick('Website Development', pkg.title)}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Content Creation Packages */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-secondary mb-4 font-poppins">
              Content Creation Packages
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Professional content that tells your brand story and engages your audience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {contentPackages.map((pkg, index) => (
              <Card key={index} className={`relative transition-all duration-300 ${
                pkg.popular 
                  ? 'border-2 border-brand-primary shadow-xl scale-105 shadow-brand-primary/20 dark:shadow-white/20' 
                  : 'border-0 shadow-md'
              }`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-brand-primary text-white px-4 py-2 text-sm font-semibold flex items-center gap-2">
                      <Star className="h-4 w-4" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-brand-secondary font-poppins">
                    {pkg.title}
                  </CardTitle>
                  <div className="text-3xl font-bold text-brand-primary mb-2">
                    {pkg.price}
                  </div>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    {pkg.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button
                    className="w-full button-vibrant py-6 text-lg font-semibold rounded-lg transition-all duration-300"
                    onClick={() => handleContactClick('Content Creation', pkg.title)}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bundle Discounts */}
          <div className="mt-12 text-center">
            <div className="bg-card border-2 border-border rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold vibrant-text mb-3 font-poppins">
                Bundle & Save
              </h3>
              <p className="light-mode-dark-text mb-4">
                Combine website development with content creation and save on your package!
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <button className="button-vibrant-no-hover px-4 py-2 rounded-full font-semibold">
                  Basic Bundle: Save GH₵ {pricingData.content.bundleDiscounts.basicBundleDiscount}
                </button>
                <button className="button-vibrant-no-hover px-4 py-2 rounded-full font-semibold">
                  Standard Bundle: Save GH₵ {pricingData.content.bundleDiscounts.standardBundleDiscount}
                </button>
                <button className="button-vibrant-no-hover px-4 py-2 rounded-full font-semibold">
                  Premium Bundle: Save GH₵ {pricingData.content.bundleDiscounts.premiumBundleDiscount}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-secondary mb-4 font-poppins">
              Additional Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Flexible pricing for specialized services tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center border-0 shadow-md">
              <CardHeader>
                <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-brand-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-brand-secondary font-poppins">
                  Graphic Design
                </CardTitle>
                <div className="text-2xl font-bold text-brand-primary">
                  GH₵ {pricingData.content.graphicDesignPerUnit}
                </div>
                <CardDescription>Per design</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  Logos, banners, social posts, ad creatives, and more. Perfect for individual design needs.
                </p>
                <Button
                  className="w-full button-vibrant py-6 text-lg font-semibold rounded-lg transition-all duration-300"
                  onClick={() => handleContactClick('Graphic Design')}
                >
                  Get Quote
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-md">
              <CardHeader>
                <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-brand-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-brand-secondary font-poppins">
                  PowerPoint Presentations
                </CardTitle>
                <div className="text-2xl font-bold text-brand-primary">
                  Quote-based
                </div>
                <CardDescription>Custom pricing</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  Professional slide design, pitch decks, and presentations. Pricing depends on complexity and scope.
                </p>
                <Button
                  className="w-full button-vibrant py-6 text-lg font-semibold rounded-lg transition-all duration-300"
                  onClick={() => handleContactClick('PowerPoint Presentations')}
                >
                  Get Quote
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-md">
              <CardHeader>
                <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-brand-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-brand-secondary font-poppins">
                  Website Maintenance
                </CardTitle>
                <div className="text-2xl font-bold text-brand-primary">
                  Quote-based
                </div>
                <CardDescription>Custom pricing</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  Ongoing support, updates, security, and performance optimization. Tailored to your needs.
                </p>
                <Button
                  className="w-full button-vibrant py-6 text-lg font-semibold rounded-lg transition-all duration-300"
                  onClick={() => handleContactClick('Website Maintenance')}
                >
                  Get Quote
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-300 italic">
              {pricingData.content.pptNote}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card border-y-2 border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-poppins vibrant-text">
            Need a Custom Solution?
          </h2>
          <p className="text-xl mb-8 light-mode-dark-text max-w-2xl mx-auto">
            Every business is unique. Let's discuss your specific requirements and create a package that perfectly fits your needs and budget.
          </p>
          <Button
            size="lg"
            className="button-vibrant px-8 py-6 text-lg"
            onClick={() => handleContactClick()}
          >
            Get Custom Quote
          </Button>
        </div>
      </section>
    </div>
  );
}