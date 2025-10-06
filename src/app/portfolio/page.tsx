'use client';

import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Globe, Camera, Palette, BarChart3, FileText, Wrench } from 'lucide-react';
import portfolioData from '@/data/portfolio.json';
import contactData from '@/data/contact.json';
import PortfolioModal from '@/components/common/PortfolioModal';

interface PortfolioItem {
  id: string;
  title: string;
  subtitle: string;
  tech: string[];
  image: string;
  link: string;
  category: string;
}

export default function Portfolio() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [itemsPerPage, setItemsPerPage] = useState(portfolioData.itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPortfolioItem, setSelectedPortfolioItem] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredItems = useMemo(() => {
    if (selectedFilter === 'All') {
      return portfolioData.items;
    }
    return portfolioData.items.filter(item => item.category === selectedFilter);
  }, [selectedFilter]);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredItems.slice(startIndex, endIndex);

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
    setCurrentPage(1);
  };

  const handleLoadMore = () => {
    setCurrentPage(prev => prev + 1);
  };

  const handleContactClick = () => {
    const message = 'Hello Synap Tech, I viewed your portfolio and I am interested in discussing a project.';
    const whatsappUrl = `${contactData.whatsappLinkTemplate}${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleItemClick = (item: PortfolioItem) => {
    setSelectedPortfolioItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPortfolioItem(null);
  };

  return (
    <div className="min-h-screen light-page-bg">
      {/* Hero Section */}
      <section className="relative py-20 header-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold vibrant-text mb-6 font-poppins">
              Discover Our Work
            </h1>
            <p className="text-lg md:text-xl light-mode-dark-text mb-8 leading-relaxed">
              Explore the range of digital solutions we've delivered for clients across industries.
            </p>
            <Button
              size="lg"
              className="button-vibrant px-8 py-6 text-lg"
              onClick={handleContactClick}
            >
              Start Your Project
            </Button>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-card border-y-2 border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {portfolioData.filters.map((filter) => (
              <Button
                key={filter}
                variant={selectedFilter === filter ? "default" : "outline"}
                className={
                  selectedFilter === filter
                    ? "button-vibrant-no-hover px-6 py-2"
                    : "button-vibrant-no-hover px-6 py-2"
                }
                onClick={() => handleFilterChange(filter)}
              >
                {filter}
              </Button>
            ))}
          </div>
          
          {/* Results count */}
          <div className="text-center mt-6">
            <p className="light-mode-dark-text">
              Showing {currentItems.length} of {filteredItems.length} projects
              {selectedFilter !== 'All' && ` in ${selectedFilter}`}
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 light-page-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {currentItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentItems.map((item) => (
                <div
                  key={item.id}
                  className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => handleItemClick(item)}
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
                      <p className="text-sm mb-3">{item.subtitle}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-3">
                        {item.tech.map((tech, index) => (
                          <Badge key={index} variant="secondary" className="text-xs bg-white/20 text-white hover:bg-white/30">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      
                      <Badge className="text-xs bg-primary text-white">
                        {item.category}
                      </Badge>
                    </div>
                  </div>
                  
                  {/* Quick info overlay (always visible) */}
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary/90 text-white text-xs">
                      {item.category}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <h3 className="text-2xl font-bold vibrant-text mb-4 font-poppins">
                  No projects found
                </h3>
                <p className="light-mode-dark-text mb-6">
                  {selectedFilter === 'All' 
                    ? "We haven't added any projects to our portfolio yet. Check back soon!"
                    : `No projects found in the ${selectedFilter} category. Try selecting a different filter.`
                  }
                </p>
                {selectedFilter !== 'All' && (
                  <Button
                    variant="outline"
                    className="button-vibrant font-semibold rounded-lg transition-all duration-300"
                    onClick={() => handleFilterChange('All')}
                  >
                    View All Projects
                  </Button>
                )}
              </div>
            </div>
          )}

          {/* Load More Button */}
          {currentItems.length > 0 && currentPage < totalPages && (
            <div className="text-center mt-12">
              <Button
                variant="outline"
                size="lg"
                className="button-vibrant-no-hover px-8 py-6 text-lg font-semibold rounded-lg"
                onClick={handleLoadMore}
              >
                Load More Projects
              </Button>
            </div>
          )}

          {/* Pagination info */}
          {currentItems.length > 0 && (
            <div className="text-center mt-8">
              <p className="light-mode-dark-text">
                Page {currentPage} of {totalPages} • {filteredItems.length} total projects
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Category Descriptions */}
      <section className="py-20 bg-card border-y-2 border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold vibrant-text mb-4 font-poppins">
              What We Create
            </h2>
            <p className="text-lg light-mode-dark-text max-w-2xl mx-auto">
              Each project represents our commitment to quality, innovation, and client success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: 'Websites',
                description: 'Fully responsive, fast, and functional sites for individuals and businesses.',
                icon: <Globe className="h-8 w-8" />,
                buttonText: 'View Websites'
              },
              {
                category: 'Content Creation',
                description: 'Social posts, marketing visuals, and digital storytelling campaigns.',
                icon: <Camera className="h-8 w-8" />,
                buttonText: 'View Content'
              },
              {
                category: 'Graphic Design',
                description: 'Brand visuals, posters, and creative assets designed for impact.',
                icon: <Palette className="h-8 w-8" />,
                buttonText: 'View Designs'
              },
              {
                category: 'Presentations',
                description: 'PowerPoint decks and academic slides that captivate and inform.',
                icon: <BarChart3 className="h-8 w-8" />,
                buttonText: 'View Presentations'
              },
              {
                category: 'PowerPoint',
                description: 'Professional presentations with compelling visual narratives.',
                icon: <FileText className="h-8 w-8" />,
                buttonText: 'View PowerPoint'
              },
              {
                category: 'Maintenance',
                description: 'Ongoing support and optimization for existing digital assets.',
                icon: <Wrench className="h-8 w-8" />,
                buttonText: 'Learn More'
              }
            ].map((item, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-primary/20 to-brand-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-primary">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold vibrant-text font-poppins">
                  {item.category}
                </h3>
                <p className="light-mode-dark-text text-sm leading-relaxed">
                  {item.description}
                </p>
                <Button
                  variant="outline"
                  className="button-vibrant font-semibold rounded-lg transition-all duration-300"
                  onClick={() => handleFilterChange(item.category)}
                >
                  {item.buttonText}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card border-y-2 border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-poppins vibrant-text">
            Have a Project in Mind?
          </h2>
          <p className="text-xl mb-8 light-mode-dark-text max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life with our expertise and creativity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="button-vibrant px-8 py-6 text-lg"
              onClick={handleContactClick}
            >
              Start Your Project
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="button-vibrant-no-hover px-8 py-6 text-lg font-semibold rounded-lg"
              onClick={() => handleFilterChange('All')}
            >
              View All Work
            </Button>
          </div>
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