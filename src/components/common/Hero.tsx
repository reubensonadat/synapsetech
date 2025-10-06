import { Button } from '@/components/ui/button';
import siteData from '@/data/site.json';

interface HeroProps {
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export default function Hero({ onPrimaryClick, onSecondaryClick }: HeroProps) {
  const hero = siteData.hero;

  return (
    <section className="relative min-h-screen flex items-center justify-center header-gradient pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Fade in animation */}
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold vibrant-text mb-6 font-poppins leading-tight">
              {hero.headline}
            </h1>
            
            <p className="text-lg md:text-xl light-mode-dark-text mb-8 max-w-3xl mx-auto leading-relaxed">
              {hero.subheadline}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="button-vibrant px-8 py-6 text-lg"
                onClick={onPrimaryClick}
              >
                {hero.ctaPrimary}
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="button-vibrant-no-hover px-8 py-6 text-lg font-semibold rounded-lg transform hover:scale-105"
                onClick={onSecondaryClick}
              >
                {hero.ctaSecondary}
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}