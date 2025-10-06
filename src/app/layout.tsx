import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import siteData from "@/data/site.json";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: siteData.name,
  description: siteData.tagline,
  keywords: ["web development", "digital solutions", "website design", "content creation", "graphic design", "Ghana", "Synap Tech"],
  authors: [{ name: siteData.name }],
  openGraph: {
    title: siteData.name,
    description: siteData.tagline,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteData.name,
    description: siteData.tagline,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased bg-background text-foreground`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
