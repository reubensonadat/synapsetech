'use client';

import { useState } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface PortfolioItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  category: string;
  tech: string[];
  link?: string;
  details?: string;
}

interface PortfolioModalProps {
  item: PortfolioItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function PortfolioModal({ item, isOpen, onClose }: PortfolioModalProps) {
  if (!item) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground mb-2">
            {item.title}
          </DialogTitle>
          <DialogDescription className="text-lg text-muted-foreground">
            {item.subtitle}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Image */}
          <div className="aspect-video bg-muted rounded-lg overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
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
          
          {/* Description */}
          {item.details && (
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Project Details</h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.details}
              </p>
            </div>
          )}
          
          {/* Description from JSON */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Overview</h3>
            <p className="text-muted-foreground leading-relaxed">
              {item.description}
            </p>
          </div>
          
          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {item.tech.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {/* Category */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Category</h3>
            <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm font-medium">
              {item.category}
            </span>
          </div>
          
          {/* Action Button */}
          {item.link && (
            <div className="pt-4 border-t">
              <Button asChild className="w-full sm:w-auto button-vibrant">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  Visit Website
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}