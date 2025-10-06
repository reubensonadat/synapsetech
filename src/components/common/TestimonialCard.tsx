import { Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="h-full bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 border-0 shadow-md">
      <CardContent className="p-6 flex flex-col h-full">
        <Quote className="h-8 w-8 text-brand-primary mb-4" />
        
        <blockquote className="text-gray-700 dark:text-gray-300 mb-6 flex-grow italic leading-relaxed">
          "{testimonial.quote}"
        </blockquote>
        
        <div className="text-right">
          <div className="font-semibold text-brand-secondary font-poppins">
            {testimonial.author}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {testimonial.role}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}