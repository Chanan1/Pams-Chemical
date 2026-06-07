"use client";

import React from "react";
import Link from "next/link";
import { Mail, MapPin, Phone, MessageSquare, Shield, Clock, Award, Globe } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F8FAFC] text-[#1E293B] border-t border-[#CBD5E1] font-sans">
      {/* Upper Footer: Quick Links & SEO Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Company Profile & Core trust */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-9 h-9 rounded-lg bg-[#0A3663] flex items-center justify-center text-white">
                <Globe className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-[#1E293B] tracking-tight">Pams Chemical</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-500">
              Distributor, Importir, Supplier, dan Reseller terpercaya bahan baku kimia industri berkualitas tinggi. Melayani rantai pasok industri sabun, kosmetik, pangan, farmasi, dan pengolahan air berskala nasional.
            </p>
            <div className="flex flex-col space-y-2 pt-2 text-xs">
              <div className="flex items-center space-x-2 text-[#0A3663]">
                <Shield className="w-4 h-4" />
                <span className="font-semibold">Sertifikasi Standar Internasional</span>
              </div>
              <div className="flex items-center space-x-2 text-[#00A896]">
                <Award className="w-4 h-4" />
                <span className="font-semibold">Jaminan Mutu & Kemurnian Produk</span>
              </div>
            </div>
          </div>

          {/* Column 2: Product Categories (Highly optimized for SEO search engines) */}
          <div>
            <h3 className="text-sm font-bold text-[#1E293B] uppercase tracking-wider mb-6">
              Kategori Produk
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li>
                <Link href="/katalog?category=Surfactants+%26+Detergent+Raw+Materials" className="hover:text-[#0A3663] transition-colors duration-150">
                  Surfactan & Bahan Deterjen
                </Link>
              </li>
              <li>
                <Link href="/katalog?category=Petroleum+%26+Cosmetic+Additives" className="hover:text-[#0A3663] transition-colors duration-150">
                  Petroleum & Kosmetik Aditif
                </Link>
              </li>
              <li>
                <Link href="/katalog?category=Inorganic+Chemicals" className="hover:text-[#0A3663] transition-colors duration-150">
                  Bahan Kimia Anorganik
                </Link>
              </li>
              <li>
                <Link href="/katalog?category=Pigments+%26+Fillers" className="hover:text-[#0A3663] transition-colors duration-150">
                  Pigmen & Bahan Pengisi
                </Link>
              </li>
              <li>
                <Link href="/katalog?category=Fine+Chemicals" className="hover:text-[#0A3663] transition-colors duration-150">
                  Bahan Kimia Murni (Fine)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Corporate Info & Sitemap */}
          <div>
            <h3 className="text-sm font-bold text-[#1E293B] uppercase tracking-wider mb-6">
              Informasi Perusahaan
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li>
                <Link href="/" className="hover:text-[#0A3663] transition-colors duration-150">
                  Halaman Utama
                </Link>
              </li>
              <li>
                <Link href="/katalog" className="hover:text-[#0A3663] transition-colors duration-150">
                  Katalog Bahan Kimia
                </Link>
              </li>
              <li>
                <Link href="/tentang-kami" className="hover:text-[#0A3663] transition-colors duration-150">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="hover:text-[#0A3663] transition-colors duration-150">
                  Hubungi Kontak
                </Link>
              </li>
              <li className="pt-2 flex items-center space-x-2 text-xs">
                <Clock className="w-3.5 h-3.5 text-[#00A896]" />
                <span className="text-slate-500">Senin - Jumat | 08.00 - 17.00 WIB</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Points */}
          <div>
            <h3 className="text-sm font-bold text-[#1E293B] uppercase tracking-wider mb-6">
              Kantor Pusat & Kontak
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#0A3663] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Grand Slipi Tower Lt. 36, Kav. 22-24, Jl. Letjen S. Parman, Slipi, Jakarta Barat, 11480, Indonesia
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#0A3663] shrink-0" />
                <span>+62 21 5366 1234</span>
              </li>
              <li className="flex items-center space-x-3">
                <MessageSquare className="w-4 h-4 text-[#00A896] shrink-0" />
                <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="hover:text-[#0A3663] text-[#00A896] font-semibold transition-colors duration-150">
                  +62 812-3456-7890 (WA Sales)
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#0A3663] shrink-0" />
                <a href="mailto:info@pamschemical.com" className="hover:text-[#0A3663] transition-colors duration-150">
                  info@pamschemical.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Lower Footer: Certifications & Copyright */}
      <div className="bg-white text-[#475569] py-8 border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-center md:text-left">
            <p>&copy; {currentYear} Pams Chemical. Seluruh hak cipta dilindungi undang-undang.</p>
            <p className="mt-1 text-slate-500">
              Distributor Resmi Bahan Kimia Industri & Kosmetik Terakreditasi Nasional.
            </p>
          </div>
          <div className="flex space-x-6 text-xs font-semibold">
            <Link href="/kontak" className="hover:text-[#0A3663]">
              Syarat & Ketentuan
            </Link>
            <Link href="/kontak" className="hover:text-[#0A3663]">
              Kebijakan Privasi
            </Link>
            <Link href="/sitemap.xml" className="hover:text-[#0A3663] text-[#0A3663]/80">
              Sitemap XML
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
