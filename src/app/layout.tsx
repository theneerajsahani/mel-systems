import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mel Systems",
  description: "Your trusted systems partner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="preload" 
          href="/hero-optimized.mp4" 
          as="video" 
          type="video/mp4"
        />
        <link 
          rel="preload" 
          href="/hero-mobile.mp4" 
          as="video" 
          type="video/mp4"
          media="(max-width: 767px)"
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        <main className="pt-16 md:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}