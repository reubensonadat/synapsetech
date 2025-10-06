# 🚀 Synap Tech - Digital Solutions Website

A modern, production-ready website for Synap Tech, a Ghana-based digital solutions company. This React application showcases web development, content creation, graphic design, and presentation services with a focus on quality and client success.

## 🌟 Project Overview

**Synap Tech** is a comprehensive digital solutions provider specializing in:
- Website Development & Design
- Content Creation & Management  
- Graphic Design & Branding
- PowerPoint Presentations
- Website Maintenance & Support

## ✨ Technology Stack

### 🎯 Core Framework
- **⚡ Next.js 15** - React framework with App Router for production
- **📘 TypeScript 5** - Type-safe development experience
- **🎨 Tailwind CSS 4** - Utility-first CSS framework with custom brand colors

### 🧩 UI Components & Styling
- **🧩 shadcn/ui** - High-quality, accessible components built on Radix UI
- **🎯 Lucide React** - Beautiful & consistent icon library
- **🌈 Custom Animations** - Smooth fade, slide, and scale animations

### 📁 Content Management
- **📄 JSON-driven** - All content managed through JSON files in `src/data/`
- **🔄 No Backend Required** - Pure front-end application
- **📱 Responsive Design** - Mobile-first approach with Tailwind CSS

### 🎨 Design Features
- **🌙 Dark Mode** - Toggle between light and dark themes
- **🎨 Brand Colors** - Custom purple (#7C3AED) and dark (#0f172a) color scheme
- **📝 Typography** - Inter for body text, Poppins for headings
- **🎭 Animations** - Subtle micro-interactions and page transitions

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation & Development

```bash
# Clone the repository
git clone <repository-url>
cd synap-tech-website

# Install dependencies
npm install

# Start development server
npm run dev

# Open your browser
# Navigate to http://localhost:3000
```

### Build & Production

```bash
# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 📁 Project Structure

```
synap-tech-website/
├── public/
│   ├── assets/
│   │   ├── logo.png          # Company logo
│   │   ├── favicon.png       # Site favicon
│   │   └── portfolio/        # Portfolio images
│   └── favicon.png
├── src/
│   ├── app/                  # Next.js App Router pages
│   │   ├── about/            # About page
│   │   ├── contact/          # Contact page with form & FAQ
│   │   ├── portfolio/        # Portfolio with filtering
│   │   ├── pricing/          # Pricing tables
│   │   ├── services/         # Services listing & detail pages
│   │   ├── privacy/          # Privacy policy
│   │   ├── terms/            # Terms of service
│   │   ├── globals.css       # Global styles & animations
│   │   ├── layout.tsx        # Root layout with header/footer
│   │   ├── page.tsx          # Home page
│   │   └── not-found.tsx     # Custom 404 page
│   ├── components/
│   │   ├── common/           # Reusable components (Hero, Stats, etc.)
│   │   ├── layout/           # Header, Footer, SEO components
│   │   └── ui/               # shadcn/ui components
│   ├── data/                 # JSON content files
│   │   ├── site.json         # Site info, hero, stats
│   │   ├── branding.json     # Logo, colors, fonts
│   │   ├── services.json     # Services data
│   │   ├── pricing.json      # Pricing packages
│   │   ├── portfolio.json    # Portfolio items & filters
│   │   ├── testimonials.json # Client testimonials
│   │   ├── faq.json          # FAQ items
│   │   ├── contact.json      # Contact information
│   │   └── headerFooter.json # Navigation & footer content
│   └── lib/                  # Utilities & configurations
├── tailwind.config.ts        # Tailwind configuration with brand colors
└── package.json
```

## 📝 Content Management

### Editing Website Content

All website content is managed through JSON files in the `src/data/` directory:

#### **Site Information** (`src/data/site.json`)
```json
{
  "name": "Synap Tech",
  "tagline": "Creating Digital Experiences That Drive Growth",
  "hero": {
    "headline": "Web Development Experts",
    "subheadline": "We build custom websites...",
    "ctaPrimary": "Contact Us",
    "ctaSecondary": "View Our Work"
  },
  "stats": {
    "projectsCompleted": "10+ Websites Built",
    "clientSatisfaction": "98% Happy Clients",
    "experience": "1+ Years in Business"
  }
}
```

#### **Services** (`src/data/services.json`)
```json
[
  {
    "id": "webdev",
    "title": "Website Development",
    "short": "Custom websites built with modern technologies...",
    "details": "We build fast, responsive websites..."
  }
]
```

#### **Portfolio** (`src/data/portfolio.json`)
```json
{
  "filters": ["All", "Website", "Content Creation", "Graphic Design"],
  "itemsPerPage": 6,
  "items": [
    {
      "id": "resto-001",
      "title": "Restaurant Website",
      "subtitle": "Modern website with online menu...",
      "image": "/assets/portfolio/restaurant.png",
      "category": "Website"
    }
  ]
}
```

### 📸 Managing Assets

#### **Logo & Favicon**
- **Logo**: `public/assets/logo.png` (1024x1024px recommended)
- **Favicon**: `public/favicon.png` (32x32px or 64x64px)

#### **Portfolio Images**
- **Location**: `public/assets/portfolio/`
- **Format**: PNG or JPG
- **Recommended Size**: 1440x720px (2:1 aspect ratio)
- **Naming**: Use descriptive names like `restaurant.png`, `business.png`

### 🎨 Customizing Brand Colors

1. **Edit Brand Colors** (`src/data/branding.json`):
```json
{
  "colors": {
    "primary": "#7C3AED",
    "secondary": "#0f172a",
    "accent": "#ffffff",
    "black": "#000000"
  }
}
```

2. **Update Tailwind Config** (`tailwind.config.ts`):
```typescript
colors: {
  'brand-primary': '#7C3AED',
  'brand-secondary': '#0f172a',
  'brand-accent': '#ffffff',
  'brand-black': '#000000',
}
```

### 📞 Updating Contact Information

Edit `src/data/contact.json`:
```json
{
  "phoneDisplay": "+233 54 813 5853",
  "whatsappRaw": "233548135853",
  "email": "synaptech25@gmail.com",
  "mailtoForComplaints": "mailto:synaptech25@gmail.com?subject=Complaint...",
  "whatsappLinkTemplate": "https://wa.me/233548135853?text=Hello..."
}
```

## 🌐 Deployment

### 🚀 Cloudflare Pages Deployment

1. **Prepare Your Repository**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Cloudflare Pages**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Navigate to "Pages" section
   - Click "Create a project"
   - Connect your GitHub repository

3. **Configure Build Settings**
   ```
   Build command: npm run build
   Build output directory: .next
   Root directory: /
   Node.js version: 18
   ```

4. **Environment Variables** (if needed)
   - No environment variables required for this static site

5. **Deploy**
   - Click "Save and Deploy"
   - Wait for build completion (2-3 minutes)

### 🔧 Custom Domain Setup

1. **DNS Configuration**
   - In Cloudflare DNS, add an A record:
   ```
   Type: A
   Name: @ (or your subdomain)
   Content: 192.0.2.1 (Cloudflare's IP)
   TTL: Auto
   ```

2. **SSL Certificate**
   - Cloudflare automatically provides free SSL certificates
   - Enable "Always HTTPS" in SSL/TLS settings

### 🌍 Alternative Deployment Options

#### **Vercel**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

#### **Netlify**
```bash
# Build
npm run build

# Deploy .next folder to Netlify
```

## 📊 Adding Analytics

### Google Analytics
1. **Get GA4 Measurement ID** from [Google Analytics](https://analytics.google.com/)
2. **Add to Layout** (`src/app/layout.tsx`):
```tsx
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
```

### Google Tag Manager
```tsx
<Script
  id="gtm-script"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM_ID');
    `,
  }}
/>
```

## 🎨 Features & Functionality

### ✅ Implemented Features
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Dark Mode** - Toggle with localStorage persistence
- **Interactive Navigation** - Sticky header with mobile menu
- **Contact Forms** - WhatsApp integration with pre-filled messages
- **Portfolio Filtering** - Category-based filtering with pagination
- **Service Pages** - Dynamic service detail pages
- **Pricing Tables** - Interactive pricing with popular badges
- **FAQ Accordion** - Expandable FAQ sections
- **Testimonials** - Client review showcase
- **Newsletter Signup** - Client-side form handling
- **Smooth Animations** - Fade, slide, and scale effects
- **Custom 404 Page** - Friendly error page with navigation
- **SEO Optimization** - Meta tags and structured data

### 🎯 User Experience
- **Fast Loading** - Optimized images and lazy loading
- **Accessibility** - Semantic HTML and ARIA labels
- **Keyboard Navigation** - Full keyboard accessibility
- **Touch Friendly** - Mobile-optimized interactions
- **Error Handling** - Graceful fallbacks for missing images

## 🔧 Customization Guide

### Adding New Services
1. **Update Services JSON** (`src/data/services.json`):
```json
{
  "id": "new-service",
  "title": "New Service",
  "short": "Brief description...",
  "details": "Detailed description..."
}
```

2. **Add Service Features** in service detail page component

### Adding Portfolio Items
1. **Add Image** to `public/assets/portfolio/`
2. **Update Portfolio JSON** (`src/data/portfolio.json`):
```json
{
  "id": "project-001",
  "title": "Project Title",
  "subtitle": "Project description",
  "image": "/assets/portfolio/project-image.png",
  "category": "Website",
  "tech": ["React", "Node.js", "MongoDB"]
}
```

### Updating Navigation
Edit `src/data/headerFooter.json`:
```json
{
  "headerNav": ["Home", "About", "Services", "Portfolio", "Pricing", "Contact"]
}
```

## 🐛 Troubleshooting

### Common Issues

#### **Images Not Loading**
- Check file paths in JSON files
- Ensure images exist in `public/assets/`
- Verify image formats (PNG, JPG, WebP)

#### **Dark Mode Not Working**
- Check localStorage for theme preference
- Verify Tailwind dark mode configuration
- Ensure `'use client'` directive in components

#### **Build Errors**
- Run `npm run lint` to check for syntax errors
- Verify all imports are correct
- Check TypeScript configuration

#### **WhatsApp Links Not Working**
- Verify phone number format in `contact.json`
- Check WhatsApp URL encoding
- Test on mobile device

### Performance Optimization
- Use `loading="lazy"` for images
- Optimize image sizes before upload
- Minimize JSON file sizes
- Use Next.js Image component when possible

## 📞 Support & Contact

For technical support or questions about this website:

- **Email**: synaptech25@gmail.com
- **Phone**: +233 54 813 5853
- **WhatsApp**: [Click to chat](https://wa.me/233548135853)

## 📄 License

This project is proprietary to Synap Tech. All rights reserved.

---

**Built with ❤️ by Synap Tech**  
*Creating Digital Experiences That Drive Growth*
