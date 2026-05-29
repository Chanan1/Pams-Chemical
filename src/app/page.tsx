"use client";

import React from "react";
import Link from "next/link";
import {
  Beaker,
  ShieldCheck,
  Globe2,
  TrendingDown,
  Truck,
  Wrench,
  Layers,
  ChevronRight,
  TrendingUp,
  Users,
  Award,
  Calendar,
  MessageSquare
} from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const highlights = [
    {
      icon: <Layers className="w-6 h-6 text-blue-500" />,
      title: "Wide Product Portfolio",
      description: "Lebih dari 500 produk kimia tersedia dari surfactants, additives, anorganik, hingga specialty chemicals.",
    },
    {
      icon: <Globe2 className="w-6 h-6 text-indigo-500" />,
      title: "Global Supply Network",
      description: "Kemitraan langsung dengan produsen kimia terkemuka di Asia, Eropa, dan Amerika untuk suplai stabil.",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-blue-500" />,
      title: "Competitive Pricing",
      description: "Harga B2B yang sangat bersaing dengan skema pembayaran fleksibel bagi pelanggan retail maupun bulk.",
    },
    {
      icon: <Truck className="w-6 h-6 text-indigo-500" />,
      title: "Fast Delivery",
      description: "Dukungan armada tangki dan logistik mandiri menjamin pengiriman cepat dan aman ke seluruh Indonesia.",
    },
    {
      icon: <Wrench className="w-6 h-6 text-blue-500" />,
      title: "Technical Support",
      description: "Konsultasi formulasi, spesifikasi TDS, penyediaan COA, serta dokumen keselamatan MSDS lengkap.",
    },
  ];

  const categories = [
    {
      id: "surfactants",
      name: "Surfactants & Detergent Raw Materials",
      short: "Bahan Aktif Sabun & Deterjen",
      description: "SLES, LABSA, LAS, AOS, CAPB, SLS, MES, HPMC untuk formulasi pembersih rumah tangga dan industri.",
      image: "bg-blue-600/10 border-blue-500/20 text-blue-600 dark:text-blue-400",
      query: "Surfactants & Detergent Raw Materials"
    },
    {
      id: "petroleum",
      name: "Petroleum & Cosmetic Additives",
      short: "Aditif Kosmetik & Petroleum",
      description: "White Oil, Petrolatum / Vaseline, Paraffin Wax, dan Propylene Glycol tingkat kemurnian tinggi.",
      image: "bg-indigo-600/10 border-indigo-500/20 text-indigo-600 dark:text-indigo-400",
      query: "Petroleum & Cosmetic Additives"
    },
    {
      id: "inorganic",
      name: "Inorganic Chemicals",
      short: "Bahan Kimia Anorganik",
      description: "Soda Ash, Baking Soda, STPP, Sodium Citrate, Caustic Soda Flakes, Zeolite 4A, dan TSPP.",
      image: "bg-emerald-600/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400",
      query: "Inorganic Chemicals"
    },
    {
      id: "pigments",
      name: "Pigments & Fillers",
      short: "Pigmen & Bahan Pengisi",
      description: "Titanium Dioxide, Kalsium Karbonat, Talc Powder premium, dan Bentonite untuk cat, plastik & karet.",
      image: "bg-amber-600/10 border-amber-500/20 text-amber-600 dark:text-amber-400",
      query: "Pigments & Fillers"
    },
    {
      id: "fine",
      name: "Fine Chemicals",
      short: "Bahan Kimia Murni / Halus",
      description: "Acrylic Emulsion water-based, PTSA Catalyst, Industrial Defoamer, Cardanol, dan EDS biodegradable.",
      image: "bg-rose-600/10 border-rose-500/20 text-rose-600 dark:text-rose-400",
      query: "Fine Chemicals"
    },
  ];

  const stats = [
    { value: "500+", label: "Pilihan Produk", icon: <Beaker className="w-5 h-5 text-blue-500" /> },
    { value: "100+", label: "Mitra Pabrik Industri", icon: <Users className="w-5 h-5 text-indigo-500" /> },
    { value: "10+", label: "Tahun Pengalaman", icon: <Calendar className="w-5 h-5 text-blue-500" /> },
    { value: "100%", label: "Jangkauan Nasional", icon: <Globe2 className="w-5 h-5 text-indigo-500" /> },
  ];

  return (
    <div className="font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 text-white py-24 sm:py-32 border-b border-gray-800">
        {/* Abstract background shapes */}
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-blue-600 blur-3xl" />
          <div className="absolute top-1/2 -right-40 w-96 h-96 rounded-full bg-indigo-600 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/30 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider text-blue-400 uppercase"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Distributor & Supplier Kimia Terakreditasi</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-blue-400"
              >
                Trusted Chemical Distributor & Industrial Raw Material Supplier
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 font-medium"
              >
                Pams Chemical menyediakan pasokan bahan baku kimia industri murni standar internasional untuk pabrik deterjen, manufaktur kosmetik, pangan, farmasi, dan pengolahan air di seluruh Indonesia.
              </motion.p>

              {/* Call to Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
              >
                <Link
                  href="/kontak?type=quote"
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-extrabold rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-102 active:scale-98 transition-all text-center flex items-center justify-center space-x-2"
                >
                  <span>Minta Penawaran Harga</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/katalog"
                  className="w-full sm:w-auto px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-extrabold rounded-xl border border-gray-700 hover:border-gray-600 active:scale-98 transition-all text-center flex items-center justify-center"
                >
                  Lihat Katalog Produk
                </Link>
              </motion.div>
            </div>

            {/* Right Industrial Graphic Card */}
            <div className="lg:col-span-5 relative flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, rotateY: 15 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="w-full max-w-md bg-gradient-to-tr from-gray-900 to-gray-850 p-8 rounded-3xl border border-gray-800 shadow-2xl relative"
              >
                {/* Decorative dots grid */}
                <div className="absolute top-4 right-4 text-blue-500/10 grid grid-cols-5 gap-1.5 pointer-events-none">
                  {Array.from({ length: 25 }).map((_, i) => (
                    <span key={i} className="w-1.5 h-1.5 rounded-full bg-current" />
                  ))}
                </div>

                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-gray-800">
                    <div className="flex items-center space-x-3">
                      <div className="w-11 h-11 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                        <Beaker className="w-5.5 h-5.5" />
                      </div>
                      <div>
                        <h4 className="font-extrabold text-white text-base">Quick Inquiry</h4>
                        <p className="text-xxs text-gray-400 font-semibold tracking-wider uppercase">Pams Chemical Center</p>
                      </div>
                    </div>
                    <span className="text-xs bg-emerald-500/15 text-emerald-400 font-bold px-2.5 py-1 rounded-full flex items-center space-x-1.5 animate-pulse">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>Sistem Aktif</span>
                    </span>
                  </div>

                  <div className="space-y-4">
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Kami berkomitmen mempermudah pemesanan B2B Anda. Beritahu kami spesifikasi bahan kimia yang Anda butuhkan untuk kalkulasi harga dan estimasi pengiriman instan.
                    </p>
                    <div className="bg-gray-950 p-4.5 rounded-2xl border border-gray-805 space-y-3.5">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-400">Dukungan Teknis</span>
                        <span className="text-white font-bold">Tersedia (TDS/MSDS/COA)</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-400">Minimal Order</span>
                        <span className="text-white font-bold">Eceran (Drum) & Grosir (IBC/Bulk)</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-400">Status Suplai</span>
                        <span className="text-emerald-400 font-bold flex items-center">
                          Ready Stock Terjamin
                        </span>
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/kontak"
                    className="w-full py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-center font-bold text-sm block transition-all shadow-md shadow-blue-500/15"
                  >
                    Mulai Konsultasi Teknis
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200/50 dark:border-gray-800/50 py-10 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row items-center text-center sm:text-left space-y-2 sm:space-y-0 sm:space-x-4 bg-white dark:bg-gray-800/40 p-5 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-750 flex items-center justify-center shadow-inner">
                  {stat.icon}
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white leading-tight">
                    {stat.value}
                  </h3>
                  <p className="text-xs font-bold text-gray-500 dark:text-gray-400 tracking-wide uppercase mt-0.5">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US HIGHLIGHTS */}
      <section className="py-24 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-18">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 px-3.5 py-1.5 rounded-full">
              Kelebihan Pams Chemical
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Mengapa Memilih Kami Sebagai Mitra Bisnis Anda?
            </h2>
            <p className="text-base text-gray-550 dark:text-gray-400 leading-relaxed">
              Sebagai distributor kimia B2B profesional, kami tidak hanya menjual produk, melainkan mengamankan pasokan rantai produksi Anda dengan komitmen kualitas terbaik.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-50 dark:bg-gray-900 p-8 rounded-3xl border border-gray-150/40 dark:border-gray-800 hover:shadow-xl hover:border-blue-500/20 dark:hover:border-blue-500/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-gray-950 border border-gray-200/50 dark:border-gray-800 shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}

            {/* Extra Card to CTA */}
            <div className="bg-gradient-to-tr from-blue-650 to-indigo-650 p-8 rounded-3xl text-white flex flex-col justify-between shadow-lg shadow-blue-500/10">
              <div className="space-y-4">
                <div className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center text-white">
                  <Award className="w-5.5 h-5.5" />
                </div>
                <h3 className="text-xl font-extrabold leading-snug">
                  Mencari Konsultasi Formula Khusus?
                </h3>
                <p className="text-xs text-blue-100 leading-relaxed">
                  Tim ahli kami siap membantu mencocokkan spesifikasi bahan aktif (active matter) yang Anda targetkan untuk produk jadi Anda.
                </p>
              </div>
              <Link
                href="/kontak"
                className="mt-6 py-3 px-4 bg-white text-blue-700 font-bold rounded-xl text-xs hover:bg-blue-50 transition-colors text-center shadow-md flex items-center justify-center space-x-1.5"
              >
                <span>Konsultasikan Spesifikasi</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Facility Showcase Grid */}
          <div className="mt-20 space-y-8">
            <div className="border-t border-gray-100 dark:border-gray-800/80 pt-16 text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 px-3.5 py-1.5 rounded-full">
                Fasilitas & Operasional Kami
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                Infrastruktur Riil & Kontrol Kualitas Terjamin
              </h3>
              <p className="text-sm text-gray-550 dark:text-gray-400 leading-relaxed">
                Kami berinvestasi pada fasilitas modern dan rantai logistik mandiri untuk menjamin mutu produk serta keandalan suplai industri Anda.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Armada Distribusi Tangki Mandiri",
                  desc: "Armada tangki pengiriman terdedikasi menjamin ketepatan waktu pengiriman bahan kimia curah (bulk) dengan kepatuhan standar safety yang ketat.",
                  img: "/images/delivery_tanks.png"
                },
                {
                  title: "Laboratorium QC Presisi Tinggi",
                  desc: "Setiap batch produk melalui inspeksi laboratorium QC untuk memastikan parameter purity, active matter, dan kesesuaian spesifikasi COA.",
                  img: "/images/quality_lab.png"
                },
                {
                  title: "Gudang Drum & IBC Berstandar HSE",
                  desc: "Sistem penyimpanan drum kimia dan tangki IBC yang rapi, bersih, dan berstandar safety tinggi untuk menjaga kestabilan kualitas material baku.",
                  img: "/images/drum_warehouse.png"
                }
              ].map((fac, idx) => (
                <div key={idx} className="bg-gray-55 dark:bg-gray-905 rounded-3xl border border-gray-150/40 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                  <div className="h-52 w-full overflow-hidden relative">
                    <img
                      src={fac.img}
                      alt={fac.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 to-transparent opacity-60" />
                  </div>
                  <div className="p-6.5 space-y-3">
                    <h4 className="text-base font-extrabold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {fac.title}
                    </h4>
                    <p className="text-xs leading-relaxed text-gray-550 dark:text-gray-400">
                      {fac.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRODUCT CATEGORIES GRID */}
      <section className="py-24 bg-gray-55/40 dark:bg-gray-900/30 border-t border-b border-gray-250/20 dark:border-gray-850/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-4 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 px-3.5 py-1.5 rounded-full">
                Sektor Industri Utama
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Kategori Bahan Baku Kimia Kami
              </h2>
              <p className="text-sm text-gray-550 dark:text-gray-400">
                Jelajahi portofolio produk kimia kami berdasarkan spesialisasi kategori industri Anda.
              </p>
            </div>
            <Link
              href="/katalog"
              className="text-sm font-bold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 flex items-center space-x-1 shrink-0"
            >
              <span>Semua Katalog Produk</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-150/40 dark:border-gray-750 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="space-y-5">
                  <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center shadow-inner ${cat.image}`}>
                    <Beaker className="w-5.5 h-5.5" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-500">
                      {cat.name}
                    </h3>
                    <p className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                      {cat.short}
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-450">
                    {cat.description}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-gray-100 dark:border-gray-700/60">
                  <Link
                    href={`/katalog?category=${encodeURIComponent(cat.query)}`}
                    className="text-xs font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 flex items-center space-x-1"
                  >
                    <span>Cari Produk Kategori</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. DYNAMIC CALL-TO-ACTION (CTA) SECTION */}
      <section className="py-24 bg-gray-950 text-white relative overflow-hidden">
        {/* Background graphic */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-blue-500/25 blur-3xl rotate-45" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Need Chemical Raw Materials?
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Dapatkan respon cepat penawaran harga (quotation), penyediaan dokumen sertifikasi keselamatan MSDS, Certificate of Analysis (COA), dan contoh sampel bahan baku dari tim sales teknis kami.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4.5 pt-4">
            <Link
              href="/kontak?type=quote"
              className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 hover:bg-gray-100 font-extrabold rounded-xl text-center shadow-lg active:scale-98 transition-all"
            >
              Request Quotation Form
            </Link>
            <a
              href="https://wa.me/6281234567890?text=Halo%20Pams%20Chemical%2C%20saya%20ingin%20konsultasi%20harga%20dan%20stok%20bahan%20kimia%20industri."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold rounded-xl text-center flex items-center justify-center space-x-2.5 active:scale-98 transition-all shadow-md shadow-emerald-500/20"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Hubungi Tim Sales WA</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
