import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const viewport: Viewport = {
  themeColor: "#6366F1",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "H-One WebZen | Website Design & Development Company in India",
  description: "H-One WebZen is a leading website design and development company in India offering responsive websites, e-commerce development, dashboards, AI systems, and SEO optimization services.",
  keywords: "website design company India, web development company India, e-commerce website development, SEO services India, AI web development, dashboard development, responsive website design, business website solutions",
  alternates: {
    canonical: "https://honewebzen.com", // Replace with actual domain
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "H-One WebZen | Website Design & Development Company in India",
    description: "H-One WebZen is a leading website design and development company in India offering responsive websites, e-commerce development, dashboards, AI systems, and SEO optimization services.",
    type: "website",
    locale: "en_US",
    url: "https://honewebzen.com",
    siteName: "H-One WebZen",
  },
  twitter: {
    card: "summary_large_image",
    title: "H-One WebZen | Website Design & Development Company in India",
    description: "Leading web design and development company in India. High-performance e-commerce, AI tools, and SEO optimization.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "H-One WebZen",
              "alternateName": "H1 WebZen",
              "url": "https://honewebzen.com",
              "logo": "https://honewebzen.com/favicon.svg",
              "sameAs": [
                "https://www.linkedin.com/company/honewebzen", // Replace with actual links
                "https://twitter.com/honewebzen"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "",
                "contactType": "customer service",
                "areaServed": "IN",
                "availableLanguage": "en"
              }
            }),
          }}
        />
        {/* Professional Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "H-One WebZen",
              "url": "https://honewebzen.com",
              "image": "https://honewebzen.com/favicon.svg",
              "description": "Professional Website Design and Development Company in India specializing in high-performance digital solutions, AI systems, and technical SEO.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN"
              },
              "priceRange": "$$",
              "areaServed": "India",
              "serviceType": [
                "Website Design",
                "Web Development",
                "SEO Optimization",
                "E-commerce Development",
                "AI Integration",
                "Dashboard Development"
              ]
            }),
          }}
        />
        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How much does a website cost in India?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Website cost depends on features and complexity. H-One WebZen provides scalable solutions for businesses."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you provide SEO services with development?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, all websites are built with SEO-ready structure including fast performance and optimized code."
                  }
                }
              ]
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-[#F8FAFC] text-[#0F172A] selection:bg-indigo-100`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
