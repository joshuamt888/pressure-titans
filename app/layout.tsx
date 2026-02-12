import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
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
      </body>
    </html>
  );
}
