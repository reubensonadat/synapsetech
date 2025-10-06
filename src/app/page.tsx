'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Hero from '@/components/common/Hero';
import Stats from '@/components/common/Stats';
import ServiceCard from '@/components/common/ServiceCard';
import TestimonialCard from '@/components/common/TestimonialCard';
import PortfolioModal from '@/components/common/PortfolioModal';
import servicesData from '@/data/services.json';
import testimonialsData from '@/data/testimonials.json';
import portfolioData from '@/data/portfolio.json';
import contactData from '@/data/contact.json';

export default function Home() {
  const [selectedService, setSelectedService] = useState('');
  const [selectedPortfolioItem, setSelectedPortfolioItem] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleContactClick = () => {
    const message = selectedService 
      ? `Hello Synap Tech, I am interested in your ${selectedService} services.`
      : 'Hello Synap Tech, I am interested in your services.';
    
    const whatsappUrl = `${contactData.whatsappLinkTemplate}${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handlePortfolioClick = () => {
    window.scrollTo({
      top: document.getElementById('portfolio-preview')?.offsetTop || 0,
      behavior: 'smooth'
    });
  };

  const handlePortfolioItemClick = (item: any) => {
    setSelectedPortfolioItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPortfolioItem(null);
  };

  // Get first 3 services for preview
  const featuredServices = servicesData.slice(0, 3);
  
  // Get first 2 portfolio items for preview
  const featuredPortfolio = portfolioData.items.slice(0, 2);

  return (
    <div className="min-h-screen">
      <Hero 
        onPrimaryClick={handleContactClick}
        onSecondaryClick={handlePortfolioClick}
      />
      
      <Stats />
      
      {/* Services Preview Section */}
      <section className="py-20 light-page-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold vibrant-text mb-4 font-poppins">
              Our Core Services
            </h2>
            <p className="text-lg light-mode-dark-text max-w-2xl mx-auto">
              We provide comprehensive digital solutions to help your business thrive in the modern world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/services">
              <Button 
                size="lg"
                className="button-vibrant px-8 py-6 text-lg"
              >
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section id="portfolio-preview" className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold vibrant-text mb-4 font-poppins">
              Featured Work
            </h2>
            <p className="text-lg light-mode-dark-text max-w-2xl mx-auto">
              Explore our recent projects and see how we've helped businesses transform their digital presence.
            </p>
          </div>
          
          {featuredPortfolio.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {featuredPortfolio.map((item) => (
                <div 
                  key={item.id} 
                  className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => handlePortfolioItemClick(item)}
                >
                  <div className="aspect-video bg-muted relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.parentElement!.innerHTML = `
                          <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
                            <div class="text-center p-4">
                              <h3 class="text-xl font-bold text-foreground">${item.title}</h3>
                              <p class="text-muted-foreground">${item.subtitle}</p>
                            </div>
                          </div>
                        `;
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-sm mb-2">{item.subtitle}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {item.tech.map((tech, index) => (
                          <span key={index} className="text-xs bg-white/20 px-2 py-1 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <span className="text-xs bg-primary px-2 py-1 rounded">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                Portfolio items will be added soon. Check back later!
              </p>
            </div>
          )}
          
          <div className="text-center">
            <Link href="/portfolio">
              <Button 
                variant="outline"
                size="lg"
                className="button-vibrant-no-hover px-8 py-6 text-lg font-semibold rounded-lg transform hover:scale-105"
              >
                Browse Full Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 light-page-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold vibrant-text mb-4 font-poppins">
              What Our Clients Say
            </h2>
            <p className="text-lg light-mode-dark-text max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
            </p>
          </div>
          
          {testimonialsData.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonialsData.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                Client testimonials will be added soon.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card border-y-2 border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-poppins vibrant-text">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl mb-8 light-mode-dark-text max-w-2xl mx-auto">
            Ready to start your project? Get in touch with us today and let's discuss how we can help bring your vision to life.
          </p>
          <Button
            size="lg"
            className="button-vibrant px-8 py-6 text-lg"
            onClick={handleContactClick}
          >
            Contact Us Today
          </Button>
        </div>
      </section>

      {/* Portfolio Modal */}
      <PortfolioModal
        item={selectedPortfolioItem}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}