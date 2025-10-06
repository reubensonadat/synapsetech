import Head from 'next/head';
import siteData from '@/data/site.json';
import brandingData from '@/data/branding.json';

interface SEOProps {
  title?: string;
  description?: string;
  ogImage?: string;
  ogUrl?: string;
  keywords?: string;
}

export default function SEO({ 
  title, 
  description, 
  ogImage, 
  ogUrl, 
  keywords 
}: SEOProps) {
  const siteTitle = title || siteData.name;
  const siteDescription = description || siteData.tagline;
  const siteImage = ogImage || brandingData.logo;
  const siteUrl = ogUrl || (typeof window !== 'undefined' ? window.location.href : '');
  const siteKeywords = keywords || 'web development, digital solutions, website design, content creation, graphic design, Ghana';

  return (
    <Head>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content={siteKeywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Open Graph */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={siteImage} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={siteImage} />
      
      {/* Favicon */}
      <link rel="icon" href={brandingData.favicon} />
      <link rel="apple-touch-icon" href={brandingData.favicon} />
      
      {/* Additional meta tags */}
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="author" content={siteData.name} />
    </Head>
  );
}