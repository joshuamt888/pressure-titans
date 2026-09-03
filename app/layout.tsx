import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Script from "next/script";
import MobileCallBar from "@/components/MobileCallBar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Pressure Titans | Minneapolis Pressure Washing & Exterior Cleaning",
    template: "%s | Pressure Titans",
  },
  description:
    "Professional pressure washing, soft washing, ice dam removal, gutter cleaning, and holiday lighting in Minneapolis, MN. Free estimates. Licensed & insured.",
  keywords:
    "pressure washing Minneapolis, soft washing Minnesota, ice dam removal, gutter cleaning, holiday lighting, exterior cleaning Minneapolis",
  metadataBase: new URL("https://pressuretitans.com"),
  alternates: {
    canonical: "https://pressuretitans.com",
  },
  openGraph: {
    title: "Pressure Titans | Minneapolis Pressure Washing & Exterior Cleaning",
    description:
      "Professional pressure washing, soft washing, ice dam removal, gutter cleaning, and holiday lighting in Minneapolis, MN.",
    url: "https://pressuretitans.com",
    siteName: "Pressure Titans",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/logos/pressure-titans-icon.webp",
        width: 800,
        height: 800,
        alt: "Pressure Titans - Pressure Washing Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pressure Titans | Minneapolis Pressure Washing & Exterior Cleaning",
    description:
      "Professional pressure washing, soft washing, ice dam removal, gutter cleaning, and holiday lighting in Minneapolis, MN.",
    images: ["/images/logos/pressure-titans-icon.webp"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  verification: {
    google: "GdTCT-f-gstBTYuzcQzc9lI2RjYQU0-kYm_NB6MNNuY",
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://pressuretitans.com/#organization",
      "name": "Pressure Titans",
      "url": "https://pressuretitans.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://pressuretitans.com/images/logos/pressure-titans-icon.webp",
        "width": 800,
        "height": 800
      },
      "description": "Professional pressure washing, soft washing, ice dam removal, gutter cleaning, and holiday lighting in Minneapolis, MN.",
      "telephone": "(612) 554-8106",
      "email": "pressuretitans@gmail.com"
    },
    {
      "@type": "WebSite",
      "@id": "https://pressuretitans.com/#website",
      "url": "https://pressuretitans.com",
      "name": "Pressure Titans",
      "description": "Professional pressure washing and exterior cleaning services in Minneapolis, MN.",
      "publisher": { "@id": "https://pressuretitans.com/#organization" },
      "inLanguage": "en-US"
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://pressuretitans.com/#localbusiness",
      "name": "Pressure Titans",
      "image": "https://pressuretitans.com/images/logos/pressure-titans-icon.webp",
      "description": "Professional pressure washing, soft washing, ice dam removal, gutter cleaning, and holiday lighting in Minneapolis, MN. Licensed & insured. Free estimates.",
      "url": "https://pressuretitans.com",
      "telephone": "(612) 554-8106",
      "email": "pressuretitans@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Minneapolis",
        "addressRegion": "MN",
        "postalCode": "55401",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 44.9778,
        "longitude": -93.2650
      },
      "areaServed": [
        { "@type": "City", "name": "Minneapolis" },
        { "@type": "City", "name": "Eden Prairie" },
        { "@type": "City", "name": "Chanhassen" },
        { "@type": "City", "name": "Chaska" },
        { "@type": "City", "name": "Shakopee" },
        { "@type": "City", "name": "Prior Lake" },
        { "@type": "City", "name": "Savage" },
        { "@type": "City", "name": "Minnetonka" },
        { "@type": "City", "name": "Victoria" },
        { "@type": "City", "name": "Waconia" },
        { "@type": "City", "name": "Excelsior" },
        { "@type": "City", "name": "Shorewood" }
      ],
      "priceRange": "$$",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "07:00",
          "closes": "19:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Saturday"],
          "opens": "08:00",
          "closes": "17:00"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": 47,
        "bestRating": "5",
        "worstRating": "1"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Exterior Cleaning Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pressure Washing" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "House Washing" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Soft Washing" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Gutter Cleaning" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ice Dam Removal" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Holiday Lighting" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Holiday Lighting" } }
        ]
      },
      "paymentAccepted": "Cash, Credit Card, Check",
      "currenciesAccepted": "USD"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className={`${inter.variable} ${outfit.variable} antialiased`}>
        {children}
        <MobileCallBar />
        {/* Google Analytics GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1JTVC6NZT4"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-1JTVC6NZT4');`}
        </Script>
        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "vu8k1rzqjx");`}
        </Script>
      </body>
    </html>
  );
}
