'use client';

import { Button } from '@/components/ui/button';
import { CheckCircle, Target, Users, Lightbulb } from 'lucide-react';
import siteData from '@/data/site.json';
import contactData from '@/data/contact.json';

export default function About() {
  const handleContactClick = () => {
    const message = 'Hello Synap Tech, I would like to learn more about your company and services.';
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
              Building Connections Through Digital Innovation
            </h1>
            <p className="text-lg md:text-xl light-mode-dark-text mb-8 leading-relaxed">
              Synap Tech began with a simple idea — that technology should empower creativity, not complicate it. 
              Founded by young innovators with a passion for design, communication, and digital problem-solving, 
              we help brands grow through thoughtful design and purposeful execution.
            </p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-card border-y-2 border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="mb-6">
                <Target className="h-12 w-12 text-primary mx-auto" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold vibrant-text mb-4 font-poppins">
                Our Mission
              </h2>
              <p className="light-mode-dark-text leading-relaxed">
                To simplify digital experiences while helping individuals and businesses communicate their value 
                through technology. We believe in creating solutions that are not just functional, but also 
                intuitive and delightful to use.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-6">
                <Lightbulb className="h-12 w-12 text-primary mx-auto" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold vibrant-text mb-4 font-poppins">
                Our Vision
              </h2>
              <p className="light-mode-dark-text leading-relaxed">
                To become Ghana's leading provider of creative, AI-powered digital solutions for small businesses 
                and entrepreneurs. We envision a future where every business, regardless of size, has access to 
                world-class digital tools and expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 light-page-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold vibrant-text mb-4 font-poppins">
              Our Process
            </h2>
            <p className="text-lg light-mode-dark-text max-w-2xl mx-auto">
              We begin every project by understanding your goals. From concept to launch, we design, build, 
              and refine — ensuring every pixel serves a purpose.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your needs and goals' },
              { step: '02', title: 'Design', description: 'Creating intuitive and beautiful designs' },
              { step: '03', title: 'Development', description: 'Building robust and scalable solutions' },
              { step: '04', title: 'Launch', description: 'Deploying and supporting your success' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-4 font-poppins">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold vibrant-text mb-2 font-poppins">
                  {item.title}
                </h3>
                <p className="light-mode-dark-text">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-card border-y-2 border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold vibrant-text mb-4 font-poppins">
              Core Values
            </h2>
            <p className="text-lg light-mode-dark-text max-w-2xl mx-auto">
              These principles guide everything we do, from how we work with clients to the solutions we create.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Lightbulb className="h-6 w-6" />,
                title: 'Innovation and Creativity',
                description: 'We push boundaries and think outside the box to deliver unique solutions.'
              },
              {
                icon: <CheckCircle className="h-6 w-6" />,
                title: 'Integrity and Transparency',
                description: 'We believe in honest communication and ethical business practices.'
              },
              {
                icon: <Users className="h-6 w-6" />,
                title: 'Client Success Above All',
                description: 'Your success is our success. We go above and beyond to exceed expectations.'
              },
              {
                icon: <Target className="h-6 w-6" />,
                title: 'Continuous Learning and Growth',
                description: 'We stay updated with the latest technologies and industry trends.'
              }
            ].map((value, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="flex justify-center text-primary">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold vibrant-text font-poppins">
                  {value.title}
                </h3>
                <p className="light-mode-dark-text text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 light-page-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold vibrant-text mb-4 font-poppins">
              Meet Our Team
            </h2>
            <p className="text-lg light-mode-dark-text max-w-2xl mx-auto">
              A passionate group of innovators, designers, and developers committed to excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold vibrant-text mb-2 font-poppins">
                Creative Minds
              </h3>
              <p className="light-mode-dark-text">
                Our designers and content creators bring ideas to life with stunning visuals and compelling narratives.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Target className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold vibrant-text mb-2 font-poppins">
                Technical Experts
              </h3>
              <p className="light-mode-dark-text">
                Our developers build robust, scalable solutions using the latest technologies and best practices.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Lightbulb className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold vibrant-text mb-2 font-poppins">
                Strategic Thinkers
              </h3>
              <p className="light-mode-dark-text">
                Our strategists ensure every solution aligns with your business goals and delivers measurable results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card border-y-2 border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-poppins vibrant-text">
            Ready to Work With Us?
          </h2>
          <p className="text-xl mb-8 light-mode-dark-text max-w-2xl mx-auto">
            Let's discuss how we can help bring your digital vision to life and drive your business forward.
          </p>
          <Button
            size="lg"
            className="button-vibrant px-8 py-6 text-lg"
            onClick={handleContactClick}
          >
            Get In Touch
          </Button>
        </div>
      </section>
    </div>
  );
}