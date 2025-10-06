import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Service {
  id: string;
  title: string;
  short: string;
  details: string;
  icon?: string;
}

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:shadow-xl hover:-translate-y-1">
      <CardHeader>
        <div className="flex items-center space-x-3 mb-2">
          <div className="service-icon">
            <Icon 
              name={service.icon || 'globe'} 
              size={32} 
              className="text-primary"
            />
          </div>
          <CardTitle className="text-xl font-poppins vibrant-text group-hover:text-primary transition-colors">
            {service.title}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="light-mode-dark-text mb-4 leading-relaxed">
          {service.short}
        </CardDescription>
        <Link 
          href={`/services/${service.id}`}
          className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors hover-black"
        >
          Learn More
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </CardContent>
    </Card>
  );
}