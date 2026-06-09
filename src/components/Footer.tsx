"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  MessageSquare,
  Shield,
  Clock,
  Award,
  Globe,
  Camera,
  Link2,
  Share2,
  Video,
  Music,
} from "lucide-react";

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
              <span className="text-xl font-bold text-[#1E293B] tracking-tight">Pima Kimagro</span>
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
                  Sidotopo, Menanggal, Kec. Mojosari, Kabupaten Mojokerto, Jawa Timur 61382
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#0A3663] shrink-0" />
                <span>+62 896-1520-5771</span>
              </li>
              <li className="flex items-center space-x-3">
                <MessageSquare className="w-4 h-4 text-[#00A896] shrink-0" />
                <a href="https://wa.me/6283809704439" target="_blank" rel="noopener noreferrer" className="hover:text-[#0A3663] text-[#00A896] font-semibold transition-colors duration-150">
                  +62 838-0970-4439 (WA Sales)
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#0A3663] shrink-0" />
                <a href="mailto:pimakimagrosejahtera@gmail.com" className="hover:text-[#0A3663] transition-colors duration-150">
                  pimakimagrosejahtera@gmail.com
                </a>
              </li>
            </ul>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="pt-4 border-t border-[#E2E8F0] text-sm"
            >
              <div className="text-xs font-bold uppercase tracking-wider text-[#0A3663] mb-3">Sosial Media</div>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://www.tiktok.com/@pimakimagro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-2xl border border-[#E2E8F0] px-3 py-2 text-xs font-semibold text-slate-700 hover:border-[#0A3663] hover:bg-[#E9F2FF] transition-all duration-200"
                >
                  <Music className="w-4 h-4 text-[#0A3663]" />
                  TikTok
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61590702000622"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-2xl border border-[#E2E8F0] px-3 py-2 text-xs font-semibold text-slate-700 hover:border-[#0A3663] hover:bg-[#E9F2FF] transition-all duration-200"
                >
                  <Share2 className="w-4 h-4 text-[#1877F2]" />
                  Facebook
                </a>
                <a
                  href="https://www.linkedin.com/in/pima-kimagro-411372415/?skipRedirect=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-2xl border border-[#E2E8F0] px-3 py-2 text-xs font-semibold text-slate-700 hover:border-[#0A3663] hover:bg-[#E9F2FF] transition-all duration-200"
                >
                  <Link2 className="w-4 h-4 text-[#0A66C2]" />
                  LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/pimakimagro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-2xl border border-[#E2E8F0] px-3 py-2 text-xs font-semibold text-slate-700 hover:border-[#0A3663] hover:bg-[#E9F2FF] transition-all duration-200"
                >
                  <Camera className="w-4 h-4 text-[#E1306C]" />
                  Instagram
                </a>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-2xl border border-[#E2E8F0] px-3 py-2 text-xs font-semibold text-slate-700 hover:border-[#0A3663] hover:bg-[#E9F2FF] transition-all duration-200"
                >
                  <Video className="w-4 h-4 text-[#FF0000]" />
                  YouTube
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Lower Footer: Certifications & Copyright */}
      <div className="bg-white text-[#475569] py-8 border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-center md:text-left">
            <p>&copy; {currentYear} Pima Kimagro Sejahtera. Seluruh hak cipta dilindungi undang-undang.</p>
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
