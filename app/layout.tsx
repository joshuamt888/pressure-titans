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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
