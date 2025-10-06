'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from '@/components/ui/sheet';
import headerFooterData from '@/data/headerFooter.json';
import brandingData from '@/data/branding.json';

export default function Header() {
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navItems = headerFooterData.headerNav;

  const getNavItemPath = (item: string) => {
    return item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`;
  };

  const isActive = (item: string) => {
    const itemPath = getNavItemPath(item);
    return pathname === itemPath;
  };

  return (
    <header className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md shadow-lg border-border/50' 
        : 'bg-gradient-to-r from-background via-background to-background/95 backdrop-blur-sm border-border/30'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img
                src="/logo.svg"
                alt="Synap Tech Logo"
                className="h-9 w-auto transition-transform duration-300 group-hover:scale-110"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/assets/logo.png';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/20 to-brand-secondary/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span className="font-bold text-xl font-poppins bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              Synap Tech
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={getNavItemPath(item)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg hover:bg-accent/50 group ${
                  isActive(item) 
                    ? 'text-brand-primary bg-accent/30' 
                    : 'text-foreground hover:text-brand-primary'
                }`}
              >
                {item}
                <span className={`absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-brand-primary to-brand-secondary transition-all duration-300 ${
                  isActive(item) ? 'w-8 left-1/4' : 'w-0 group-hover:w-8 group-hover:left-1/4'
                }`}></span>
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="h-10 w-10 rounded-lg hover:bg-accent/50 transition-all duration-200 hover:scale-110"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-slate-600" />
              )}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="button-vibrant-no-hover px-6 py-2 rounded-lg hover:scale-105"
              onClick={() => window.open('https://wa.me/233548135853?text=Hello%20Synap%20Tech,%20I%20would%20like%20to%20learn%20more%20about%20your%20services.', '_blank')}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="h-10 w-10 rounded-lg hover:bg-accent/50 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-slate-600" />
              )}
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-10 w-10 rounded-lg hover:bg-accent/50 transition-all duration-200 hover:scale-110"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[320px] bg-black text-white border-l border-gray-800">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="py-6 border-b border-gray-800">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-lg">S</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white font-poppins">Synap Tech</h3>
                        <p className="text-gray-400 text-sm">Navigation Menu</p>
                      </div>
                    </div>
                  </div>

                  {/* Navigation Items */}
                  <div className="flex-1 py-6 space-y-2">
                    {navItems.map((item, index) => (
                      <SheetClose asChild key={index}>
                        <Link
                          href={getNavItemPath(item)}
                          className={`flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 ${
                            isActive(item)
                              ? 'bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-lg'
                              : 'text-gray-300 hover:text-white hover:bg-gray-800'
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <span className={`w-2 h-2 rounded-full ${
                              isActive(item) ? 'bg-white' : 'bg-gray-500'
                            }`}></span>
                            <span className="font-medium">{item}</span>
                          </div>
                          {isActive(item) && (
                            <span className="text-white text-sm">✓</span>
                          )}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>

                  {/* Footer Actions */}
                  <div className="py-4 border-t border-gray-800 space-y-3">
                    <Button
                      className="w-full bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-primary/90 hover:to-brand-secondary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                      onClick={() => window.open('https://wa.me/233548135853?text=Hello%20Synap%20Tech,%20I%20would%20like%20to%20learn%20more%20about%20your%20services.', '_blank')}
                    >
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      Chat on WhatsApp
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}