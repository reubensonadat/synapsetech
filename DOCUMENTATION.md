# Synap Tech Website - Complete Guide

## 📋 Table of Contents
1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [Local Development](#local-development)
5. [Updating Content](#updating-content)
6. [Hosting on Hostinger](#hosting-on-hostinger)
7. [Hosting on Cloudflare Pages](#hosting-on-cloudflare-pages)
8. [Adding a Backend](#adding-a-backend)
9. [Scaling the Application](#scaling-the-application)
10. [Troubleshooting](#troubleshooting)

---

## 🎯 Project Overview

This is a professional Next.js 15 website for Synap Tech, a digital services company based in Ghana. The website showcases services, portfolio, pricing, and contact information with modern design and responsive layout.

### Key Features
- 🎨 Modern, responsive design with Tailwind CSS
- 🌙 Dark/Light mode support
- 📱 Mobile-optimized navigation
- 🚀 Fast performance with Next.js 15
- 🔍 SEO optimized
- 💬 WhatsApp integration
- 📧 Contact forms
- 🎭 Professional animations and transitions

---

## 🛠 Technology Stack

### Core Framework
- **Next.js 15** with App Router
- **TypeScript 5** for type safety
- **React 18** for UI components

### Styling & UI
- **Tailwind CSS 4** for styling
- **shadcn/ui** component library
- **Lucide React** for icons
- **Framer Motion** for animations

### Data Management
- **JSON files** for static content
- **Prisma ORM** (configured for future database use)

### Development Tools
- **ESLint** for code quality
- **TypeScript** for type checking
- **Next.js dev server** for development

---

## 📁 Project Structure

```
my-project/
├── src/
│   ├── app/                    # Next.js app router pages
│   │   ├── about/             # About page
│   │   ├── contact/           # Contact page
│   │   ├── portfolio/         # Portfolio page
│   │   ├── pricing/           # Pricing page
│   │   ├── services/          # Services page
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/
│   │   ├── ui/                # shadcn/ui components
│   │   ├── common/            # Shared components
│   │   └── layout/            # Header and Footer
│   ├── data/                  # JSON data files
│   │   ├── about.json
│   │   ├── contact.json
│   │   ├── faq.json
│   │   ├── headerFooter.json
│   │   ├── portfolio.json
│   │   ├── pricing.json
│   │   ├── services.json
│   │   └── site.json
│   ├── lib/                   # Utility functions
│   └── hooks/                 # Custom React hooks
├── public/                    # Static assets
├── prisma/                    # Database schema
└── docs/                      # Documentation
```

---

## 💻 Local Development

### Prerequisites
- Node.js 18+ installed
- Git installed
- Code editor (VS Code recommended)

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd my-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:3000`
   - The site will automatically reload when you make changes

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Check code quality

---

## ✏️ Updating Content

### Easy Content Updates (No Coding Required)

#### 1. Company Information
Edit `src/data/site.json`:
```json
{
  "companyName": "Synap Tech",
  "tagline": "Digital Innovation for Modern Businesses",
  "description": "Your company description here"
}
```

#### 2. Contact Information
Edit `src/data/contact.json`:
```json
{
  "email": "contact@synaptech.com",
  "phoneDisplay": "+233 54 813 5853",
  "whatsappLinkTemplate": "https://wa.me/233548135853?text="
}
```

#### 3. Services
Edit `src/data/services.json`:
```json
[
  {
    "id": "web-dev",
    "title": "Website Development",
    "short": "Custom websites that convert visitors into customers",
    "details": "Detailed description of your web development services"
  }
]
```

#### 4. Pricing
Edit `src/data/pricing.json`:
```json
{
  "website": {
    "basic": {
      "title": "Basic Website",
      "priceMin": 1500,
      "priceMax": 2500,
      "features": ["Feature 1", "Feature 2"]
    }
  }
}
```

#### 5. Portfolio
Edit `src/data/portfolio.json`:
```json
{
  "items": [
    {
      "id": "project-1",
      "title": "Project Title",
      "subtitle": "Project subtitle",
      "description": "Project description",
      "category": "Website"
    }
  ]
}
```

### Adding New Pages

1. **Create new page folder** in `src/app/`
2. **Add page.tsx file** with your content
3. **Update navigation** in `src/data/headerFooter.json`

Example - Adding a "Blog" page:
```bash
mkdir src/app/blog
```

Create `src/app/blog/page.tsx`:
```tsx
export default function Blog() {
  return (
    <div className="min-h-screen">
      <h1>Our Blog</h1>
      <p>Coming soon...</p>
    </div>
  );
}
```

Update `src/data/headerFooter.json`:
```json
{
  "headerNav": ["Home", "About", "Services", "Portfolio", "Pricing", "Contact", "Blog"]
}
```

---

## 🌐 Hosting on Hostinger

### Step 1: Prepare for Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Test production build**
   ```bash
   npm run start
   ```

### Step 2: Hostinger Setup

1. **Log in to Hostinger control panel**
2. **Go to Hosting → Manage**
3. **File Manager → Upload Files**
4. **Upload the `.next` folder and `package.json`**

### Step 3: Configure Node.js

1. **Go to Hosting → Setup**
2. **Select Node.js version 18+**
3. **Set startup command**: `npm start`
4. **Set project root**: Your website folder

### Step 4: Environment Variables

Add these in Hostinger hosting settings:
```
NODE_ENV=production
```

### Step 5: Domain Configuration

1. **Go to Domains → Manage**
2. **Point your domain to Hostinger nameservers**
3. **Wait for propagation (up to 24 hours)**

---

## ☁️ Hosting on Cloudflare Pages

### Step 1: Connect to GitHub

1. **Sign up/login to Cloudflare Dashboard**
2. **Go to Workers & Pages → Create application**
3. **Connect to Git → Select your repository**

### Step 2: Build Configuration

Set these build settings:
- **Framework preset**: Next.js
- **Build command**: `npm run build`
- **Build output directory**: `.next`
- **Node.js version**: 18

### Step 3: Environment Variables

Add these variables:
```
NODE_ENV=production
```

### Step 4: Deploy

1. **Save and deploy**
2. **Wait for build to complete**
3. **Get your Cloudflare Pages URL**

### Step 5: Custom Domain

1. **Go to Custom domains**
2. **Add your domain**
3. **Update DNS records as instructed**

---

## 🔧 Adding a Backend

### Option 1: Next.js API Routes (Simple)

Create API routes in `src/app/api/`:

```tsx
// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Process contact form data
    console.log('Contact form submission:', body);
    
    // Send email, save to database, etc.
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to process' }, { status: 500 });
  }
}
```

### Option 2: External Backend Service

#### Using Vercel Functions
1. **Create separate backend repository**
2. **Deploy to Vercel**
3. **Connect from frontend**

#### Using Node.js + Express
```bash
mkdir backend
cd backend
npm init -y
npm install express cors dotenv
```

Create `server.js`:
```javascript
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/contact', (req, res) => {
  // Handle contact form
  res.json({ success: true });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

### Option 3: Database Integration

#### Using Prisma with PostgreSQL
1. **Install Prisma**
   ```bash
   npm install prisma @prisma/client
   ```

2. **Initialize Prisma**
   ```bash
   npx prisma init
   ```

3. **Update schema.prisma**
   ```prisma
   datasource db {
     provider = "postgresql"
     url      = env("DATABASE_URL")
   }
   
   model Contact {
     id        Int      @id @default(autoincrement())
     name      String
     email     String
     message   String
     createdAt DateTime @default(now())
   }
   ```

4. **Run migrations**
   ```bash
   npx prisma migrate dev
   ```

---

## 📈 Scaling the Application

### Performance Optimization

1. **Image Optimization**
   - Use Next.js Image component
   - Compress images before upload
   - Use WebP format when possible

2. **Code Splitting**
   - Next.js does this automatically
   - Use dynamic imports for large components:
   ```tsx
   const HeavyComponent = dynamic(() => import('./HeavyComponent'));
   ```

3. **Caching Strategy**
   - Implement Redis for session storage
   - Use CDN for static assets
   - Enable browser caching

### Database Scaling

1. **Read Replicas**
   - Separate read and write operations
   - Use connection pooling

2. **Indexing**
   - Add database indexes for frequent queries
   - Monitor query performance

### Monitoring and Analytics

1. **Error Tracking**
   ```bash
   npm install @sentry/nextjs
   ```

2. **Performance Monitoring**
   - Use Vercel Analytics
   - Google PageSpeed Insights

3. **User Analytics**
   - Google Analytics
   - Hotjar for heatmaps

### Security Enhancements

1. **Environment Variables**
   - Never commit secrets to Git
   - Use different keys for development/production

2. **Rate Limiting**
   ```tsx
   // API route with rate limiting
   import rateLimit from 'express-rate-limit';
   
   const limiter = rateLimit({
     windowMs: 15 * 60 * 1000, // 15 minutes
     max: 100 // limit each IP to 100 requests
   });
   ```

3. **HTTPS and Security Headers**
   - Enable HTTPS on all domains
   - Set security headers in next.config.js

---

## 🚨 Troubleshooting

### Common Issues

#### Build Errors
```bash
# Clear Next.js cache
rm -rf .next

# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### Styling Issues
- Check Tailwind configuration
- Ensure CSS imports are correct
- Verify responsive breakpoints

#### Navigation Not Working
- Check `src/data/headerFooter.json` for correct paths
- Verify page files exist in `src/app/`
- Check for TypeScript errors

#### Contact Form Not Working
- Verify API route exists
- Check network requests in browser dev tools
- Ensure CORS is configured

#### Performance Issues
- Run Lighthouse audit
- Check bundle size with `npm run build`
- Optimize images and assets

### Getting Help

1. **Check the console** for error messages
2. **Review the logs** in your hosting platform
3. **Test locally** before deploying
4. **Check this documentation** for common solutions

### Emergency Recovery

If your site goes down:
1. **Check recent changes** in Git
2. **Roll back to previous commit**
   ```bash
   git log --oneline
   git revert <commit-hash>
   ```
3. **Redeploy** to your hosting platform

---

## 📞 Support

For additional help:
- Check the [Next.js documentation](https://nextjs.org/docs)
- Review [Tailwind CSS docs](https://tailwindcss.com/docs)
- Contact your development team

---

## 🎉 Conclusion

This website is built with modern, scalable technologies. Regular updates and monitoring will ensure it continues to perform well. Don't hesitate to reach out if you need assistance with any aspect of the website.

*Last updated: November 2024*