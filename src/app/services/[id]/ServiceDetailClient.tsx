'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle, Clock, Users, Zap } from 'lucide-react';
import contactData from '@/data/contact.json';

interface Service {
  id: string;
  title: string;
  short: string;
  details: string;
}

interface ServiceDetailClientProps {
  service: Service;
}

export default function ServiceDetailClient({ service }: ServiceDetailClientProps) {
  const handleContactClick = () => {
    const message = `Hello Synap Tech, I am interested in your ${service.title} services. Can you provide more details and a quote?`;
    const whatsappUrl = `${contactData.whatsappLinkTemplate}${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Service-specific features based on service type
  const getServiceFeatures = (serviceId: string) => {
    switch (serviceId) {
      case 'webdev':
        return [
          'Custom responsive design',
          'SEO optimization',
          'Fast loading performance',
          'Mobile-first approach',
          'Cross-browser compatibility',
          'Content management system'
        ];
      case 'content':
        return [
          'Brand-focused content strategy',
          'Professional photography',
          'Short-form video production',
          'Social media assets',
          'Content calendar planning',
          'Performance analytics'
        ];
      case 'design':
        return [
          'Brand identity design',
          'Marketing materials',
          'Social media graphics',
          'Print-ready designs',
          'Multiple format delivery',
          'Source files included'
        ];
      case 'ppt':
        return [
          'Professional slide design',
          'Brand consistency',
          'Visual storytelling',
          'Animation & transitions',
          'Speaker notes support',
          'Multiple format export'
        ];
      case 'maintenance':
        return [
          'Regular updates',
          'Security monitoring',
          'Performance optimization',
          'Backup management',
          'Technical support',
          'Content updates'
        ];
      default:
        return [];
    }
  };

  const getServiceProcess = (serviceId: string) => {
    switch (serviceId) {
      case 'webdev':
        return [
          { step: 'Discovery', description: 'Understanding your requirements and goals' },
          { step: 'Design', description: 'Creating wireframes and visual designs' },
          { step: 'Development', description: 'Building the website with modern technologies' },
          { step: 'Testing', description: 'Ensuring quality and performance' },
          { step: 'Launch', description: 'Deploying and going live' }
        ];
      case 'content':
        return [
          { step: 'Strategy', description: 'Planning content themes and schedule' },
          { step: 'Creation', description: 'Producing photos and videos' },
          { step: 'Editing', description: 'Post-production and refinement' },
          { step: 'Delivery', description: 'Providing final assets' },
          { step: 'Analysis', description: 'Measuring performance and engagement' }
        ];
      default:
        return [
          { step: 'Consultation', description: 'Understanding your needs' },
          { step: 'Planning', description: 'Creating a detailed plan' },
          { step: 'Execution', description: 'Implementing the solution' },
          { step: 'Review', description: 'Quality assurance and feedback' },
          { step: 'Delivery', description: 'Final delivery and support' }
        ];
    }
  };

  const features = getServiceFeatures(service.id);
  const process = getServiceProcess(service.id);

  return (
    <div className="min-h-screen light-page-bg">
      {/* Hero Section */}
      <section className="relative py-20 header-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link href="/services" className="inline-flex items-center text-primary hover:text-primary/80 mb-6 transition-colors hover-black">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Services
            </Link>
            
            <h1 className="text-4xl md:text-6xl font-bold vibrant-text mb-6 font-poppins">
              {service.title}
            </h1>
            <p className="text-lg md:text-xl light-mode-dark-text mb-8 leading-relaxed">
              {service.short}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="button-vibrant px-8 py-6 text-lg"
                onClick={handleContactClick}
              >
                Get Quote
              </Button>
              <Link href="/portfolio">
                <Button 
                  variant="outline"
                  size="lg"
                  className="button-vibrant-no-hover px-8 py-6 text-lg font-semibold rounded-lg"
                >
                  View Examples
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-card border-y-2 border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold vibrant-text mb-8 font-poppins">
              About This Service
            </h2>
            <p className="text-lg light-mode-dark-text mb-12 leading-relaxed">
              {service.details}
            </p>

            {/* Features */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold vibrant-text mb-6 font-poppins">
                What's Included
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="light-mode-dark-text">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold vibrant-text mb-6 font-poppins">
                Our Process
              </h3>
              <div className="space-y-6">
                {process.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold vibrant-text mb-1">{item.step}</h4>
                      <p className="light-mode-dark-text">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold vibrant-text mb-2">Fast Delivery</h4>
                <p className="light-mode-dark-text text-sm">
                  Quick turnaround times without compromising quality
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold vibrant-text mb-2">Expert Team</h4>
                <p className="light-mode-dark-text text-sm">
                  Skilled professionals with years of experience
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold vibrant-text mb-2">Ongoing Support</h4>
                <p className="light-mode-dark-text text-sm">
                  Continued assistance even after project completion
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card border-y-2 border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-poppins vibrant-text">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 light-mode-dark-text max-w-2xl mx-auto">
            Let's discuss your project requirements and create a solution that exceeds your expectations.
          </p>
          <Button
            size="lg"
            className="button-vibrant px-8 py-6 text-lg"
            onClick={handleContactClick}
          >
            Start Your Project
          </Button>
        </div>
      </section>
    </div>
  );
}