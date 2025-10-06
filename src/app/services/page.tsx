'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ServiceCard from '@/components/common/ServiceCard';
import servicesData from '@/data/services.json';
import contactData from '@/data/contact.json';

export default function Services() {
  const handleContactClick = (serviceName?: string) => {
    const message = serviceName 
      ? `Hello Synap Tech, I am interested in your ${serviceName} services.`
      : 'Hello Synap Tech, I am interested in your services.';
    
    const whatsappUrl = `${contactData.whatsappLinkTemplate}${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen light-page-bg">
      {/* Hero Section */}
      <section className="relative py-20 header-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold vibrant-text mb-6 font-poppins">
              Our Services — Designed to Elevate Your Digital Presence
            </h1>
            <p className="text-lg md:text-xl light-mode-dark-text mb-8 leading-relaxed">
              We provide a full range of creative and technical services tailored to meet your brand's goals.
            </p>
            <Button
              size="lg"
              className="button-vibrant px-8 py-6 text-lg"
              onClick={() => handleContactClick()}
            >
              Request a Quote
            </Button>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-card border-y-2 border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="py-20 light-page-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {servicesData.map((service, index) => (
              <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold vibrant-text mb-4 font-poppins">
                    {service.title}
                  </h2>
                  <p className="text-lg light-mode-dark-text mb-6 leading-relaxed">
                    {service.short}
                  </p>
                  <p className="light-mode-dark-text mb-8 leading-relaxed">
                    {service.details}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href={`/services/${service.id}`}>
                      <Button 
                        variant="outline"
                        className="button-vibrant-no-hover px-6 py-3 font-semibold rounded-lg"
                      >
                        Learn More
                      </Button>
                    </Link>
                    <Button
                      className="button-vibrant px-6 py-3"
                      onClick={() => handleContactClick(service.title)}
                    >
                      Get Quote
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                    <div className="text-center p-8">
                      <h3 className="text-2xl font-bold vibrant-text mb-2 font-poppins">
                        {service.title}
                      </h3>
                      <p className="light-mode-dark-text">
                        Professional solutions tailored to your needs
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
            Every business is unique. Let's discuss your specific requirements and create a solution that perfectly fits your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="button-vibrant px-8 py-6 text-lg"
              onClick={() => handleContactClick()}
            >
              Contact Us Today
            </Button>
            <Link href="/portfolio">
              <Button 
                variant="outline"
                size="lg"
                className="button-vibrant-no-hover px-8 py-6 text-lg font-semibold rounded-lg"
              >
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}