'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Home, Search, ArrowLeft } from 'lucide-react';
import contactData from '@/data/contact.json';

export default function NotFound() {
  const handleContactClick = () => {
    const message = 'Hello Synap Tech, I was trying to find something on your website but couldn\'t locate it. Can you help me?';
    const whatsappUrl = `${contactData.whatsappLinkTemplate}${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-primary/10 to-brand-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-bold text-brand-primary font-poppins">
              404
            </h1>
          </div>

          {/* Error Message */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-secondary mb-4 font-poppins">
              Page Not Found
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Oops! The page you're looking for seems to have vanished into the digital void. 
              Don't worry though, our best developers are on the case (probably just taking a coffee break).
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/">
              <Button 
                size="lg"
                className="bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Home className="h-5 w-5 mr-2" />
                Back to Home
              </Button>
            </Link>
            
            <Button
              variant="outline"
              size="lg"
              className="button-vibrant-no-hover px-8 py-6 text-lg font-semibold rounded-lg"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Go Back
            </Button>
          </div>

          {/* Help Section */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-xl font-bold text-brand-secondary mb-4 font-poppins">
              Looking for Something Specific?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Here are some quick links to help you find what you need:
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              <Link href="/" className="text-brand-primary hover:text-brand-primary/80 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-brand-primary hover:text-brand-primary/80 transition-colors">
                About Us
              </Link>
              <Link href="/services" className="text-brand-primary hover:text-brand-primary/80 transition-colors">
                Services
              </Link>
              <Link href="/portfolio" className="text-brand-primary hover:text-brand-primary/80 transition-colors">
                Portfolio
              </Link>
              <Link href="/pricing" className="text-brand-primary hover:text-brand-primary/80 transition-colors">
                Pricing
              </Link>
              <Link href="/contact" className="text-brand-primary hover:text-brand-primary/80 transition-colors">
                Contact
              </Link>
            </div>

            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Still can't find what you're looking for?
              </p>
              <Button
                variant="outline"
                className="button-vibrant"
                onClick={handleContactClick}
              >
                <Search className="h-4 w-4 mr-2" />
                Get Help
              </Button>
            </div>
          </div>

          {/* Fun Message */}
          <div className="text-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm italic">
              While you're here, did you know that 404 errors are just the internet's way of saying 
              "I need a coffee break"? ☕
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}