import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Pams Chemical - Trusted Chemical Distributor & Industrial Raw Material Supplier",
    template: "%s | Pams Chemical"
  },
  description: "Pams Chemical adalah distributor, importir, supplier, dan reseller terpercaya untuk bahan baku kimia industri, surfactants, bahan deterjen, kosmetik, kimia anorganik, dan fine chemicals.",
  keywords: [
    "Pams Chemical",
    "Distributor Kimia Industri",
    "Bahan Baku Sabun Deterjen",
    "Bahan Kosmetik Skincare",
    "Kimia Anorganik",
    "Supplier SLES 70 LABSA Soda Ash",
    "Reseller Bahan Kimia Indonesia"
  ],
  metadataBase: new URL("https://pamschemical.com"),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Pams Chemical - Distributor Bahan Kimia Industri & Kosmetik",
    description: "Pams Chemical menyediakan produk kimia berkualitas tinggi bersertifikasi internasional dengan rantai pasok terpercaya dan harga kompetitif.",
    url: "https://pamschemical.com",
    siteName: "Pams Chemical",
    locale: "id_ID",
    type: "website"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors duration-200">
        <ThemeProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}

