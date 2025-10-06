'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import headerFooterData from '@/data/headerFooter.json';
import contactData from '@/data/contact.json';

export default function Footer() {
  const footerData = headerFooterData.footer;
  const contact = contactData;

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get('email') as string;
    
    // Client-side only - show success message
    alert(`Thank you for subscribing with email: ${email}`);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-poppins">Synap Tech</h3>
            <p className="text-gray-300 text-sm">
              Creating digital experiences that drive growth and help businesses establish a strong online presence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-poppins">Quick Links</h4>
            <ul className="space-y-2">
              {footerData.quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link === 'Home' ? '/' : `/${link.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-poppins">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-brand-primary" />
                <a 
                  href={`tel:${contact.phoneDisplay.replace(/\s/g, '')}`}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {contact.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-brand-primary" />
                <a 
                  href={`mailto:${contact.email}`}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {contact.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-brand-primary" />
                <span className="text-gray-300 text-sm">Ghana</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-poppins">Newsletter</h4>
            <p className="text-gray-300 text-sm">
              {footerData.newsletterText}
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-brand-primary"
              />
              <Button 
                type="submit" 
                className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            {footerData.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}