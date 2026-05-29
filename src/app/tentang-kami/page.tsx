"use client";

import React from "react";
import {
  ShieldCheck,
  Eye,
  Rocket,
  Heart,
  Globe2,
  Users,
  Calendar,
  Layers,
  Sparkles,
  Zap,
  TrendingUp,
  FileCheck
} from "lucide-react";
import { motion } from "framer-motion";

export default function AboutUs() {
  const coreValues = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-blue-500" />,
      title: "Integrity (Integritas)",
      description: "Kami mengutamakan transparansi dan kejujuran dalam setiap transaksi B2B, mulai dari penentuan harga hingga keselarasan spesifikasi teknis COA."
    },
    {
      icon: <Sparkles className="w-5 h-5 text-indigo-500" />,
      title: "Quality (Kualitas Mutu)",
      description: "Hanya bahan baku berkualitas premium yang lolos pengujian standar laboratorium internasional yang kami distribusikan kepada mitra manufaktur."
    },
    {
      icon: <Zap className="w-5 h-5 text-blue-500" />,
      title: "Reliability (Keandalan)",
      description: "Kami menjamin stabilitas suplai bahan baku sepanjang tahun, meminimalisir risiko keterlambatan pengiriman yang dapat menghentikan lini produksi pabrik."
    },
    {
      icon: <Rocket className="w-5 h-5 text-indigo-500" />,
      title: "Innovation (Inovasi)",
      description: "Terus memperluas portofolio produk kimia ramah lingkungan (eco-friendly) serta memperbarui infrastruktur rantai pasok digital untuk kemudahan transaksi."
    },
    {
      icon: <Heart className="w-5 h-5 text-blue-500" />,
      title: "Customer Focus (Fokus Pelanggan)",
      description: "Memberikan layanan konsultasi teknis formulasi gratis dan pendampingan pasca penjualan untuk mengoptimalkan proses produksi pelanggan kami."
    }
  ];

  const valueProps = [
    {
      icon: <Layers className="w-6 h-6 text-blue-500" />,
      title: "Wide Product Range",
      desc: "Menyediakan portofolio bahan baku kimia yang masif, memudahkan pengadaan multi-produk satu pintu."
    },
    {
      icon: <Globe2 className="w-6 h-6 text-indigo-500" />,
      title: "Stable Supply Chain",
      desc: "Kemitraan impor global menjamin suplai bahan aktif Anda tetap aman meskipun fluktuasi pasar terjadi."
    },
    {
      icon: <Zap className="w-6 h-6 text-blue-500" />,
      title: "Fast Response",
      desc: "Dukungan sales engineering responsif untuk pembuatan surat penawaran resmi dalam waktu kurang dari 1 jam."
    },
    {
      icon: <FileCheck className="w-6 h-6 text-indigo-500" />,
      title: "Technical Expertise",
      desc: "Tim ahli kimia kami siap membimbing pencocokan dokumen keselamatan MSDS dan formulasi produk."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-blue-500" />,
      title: "Competitive Pricing",
      desc: "Struktur harga distributor langsung dari importir utama untuk efisiensi margin keuntungan industri Anda."
    }
  ];

  return (
    <div className="font-sans text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-950">
      
      {/* 1. HEADER HERO BANNER */}
      <section className="bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 text-white py-20 border-b border-gray-800 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-600 blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 border border-blue-500/30 px-3.5 py-1.5 rounded-full">
            Tentang Pams Chemical
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Kredibilitas, Stabilitas & Integritas Suplai
          </h1>
          <p className="text-base text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
            Menyelaraskan solusi pengadaan bahan baku kimia industri murni standar internasional dengan keunggulan teknis terbaik.
          </p>
        </div>
      </section>

      {/* 2. COMPANY OVERVIEW */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Pionir Distribusi Bahan Kimia Industri & Kosmetik
            </h2>
            <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
              <strong className="text-gray-900 dark:text-white font-bold">Pams Chemical</strong> (Divisi Distribusi FOOD & CHEMICAL) adalah distributor, importir, supplier, dan reseller terpercaya untuk bahan baku kimia industri berskala nasional. Kami bangga melayani berbagai sektor manufaktur penting, termasuk produsen deterjen pembersih, industri kosmetik kecantikan, pengolahan makanan, farmasi obat-obatan, hingga pengolahan air bersih perkotaan.
            </p>
            <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
              Dengan gudang penyimpanan modern berstandar keamanan tinggi dan sistem logistik mandiri, kami menjamin kemurnian bahan kimia murni (fine chemicals), surfaktan, senyawa anorganik, serta aditif petroleum tetap terjaga sempurna hingga sampai di fasilitas produksi Anda.
            </p>
            
            {/* Short Stats Grid */}
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-gray-100 dark:border-gray-800">
              <div>
                <h4 className="text-2xl font-black text-blue-600 dark:text-blue-400 leading-none">10+</h4>
                <p className="text-xxs font-bold text-gray-500 uppercase tracking-wider mt-1.5">Tahun Pengalaman</p>
              </div>
              <div>
                <h4 className="text-2xl font-black text-indigo-600 dark:text-indigo-400 leading-none">100%</h4>
                <p className="text-xxs font-bold text-gray-500 uppercase tracking-wider mt-1.5">Standar COA Murni</p>
              </div>
              <div>
                <h4 className="text-2xl font-black text-blue-600 dark:text-blue-400 leading-none">500+</h4>
                <p className="text-xxs font-bold text-gray-500 uppercase tracking-wider mt-1.5">Portofolio Produk</p>
              </div>
            </div>
          </div>

          {/* Right Visual Box */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="bg-gradient-to-tr from-gray-55 to-gray-100 dark:from-gray-900 dark:to-gray-900/60 p-8.5 rounded-3xl border border-gray-200/50 dark:border-gray-800 shadow-inner max-w-sm w-full space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-blue-600/10 border border-blue-500/20 text-blue-600 flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <div className="space-y-3">
                <h3 className="font-extrabold text-gray-900 dark:text-white text-base">Rantai Distribusi Kokoh</h3>
                <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400">
                  Melalui jaringan manufaktur produsen kimia global di Asia dan Eropa, kami menjaga kesinambungan rantai pengadaan bagi seluruh pelanggan dari skala retail hingga bulk kontainer.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-950 p-4 rounded-xl border border-gray-150/40 dark:border-gray-800 text-xs font-bold flex items-center space-x-2 text-emerald-500">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>Terakreditasi ISO & Kepatuhan HSE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VISION & MISSION */}
      <section className="py-24 bg-gray-55/30 dark:bg-gray-900/30 border-t border-b border-gray-200/40 dark:border-gray-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Vision Card */}
            <div className="bg-white dark:bg-gray-900 p-10 rounded-3xl border border-gray-150/40 dark:border-gray-800 space-y-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-blue-600/10 border border-blue-500/20 text-blue-600 flex items-center justify-center shadow-inner">
                <Eye className="w-6 h-6" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Visi Perusahaan</h3>
                <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-450">
                  Menjadi distributor kimia terkemuka yang menyediakan solusi bahan baku kimia yang andal, berkelanjutan, dan berskala internasional guna memajukan industri manufaktur Indonesia.
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-white dark:bg-gray-900 p-10 rounded-3xl border border-gray-150/40 dark:border-gray-800 space-y-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-indigo-600/10 border border-indigo-500/20 text-indigo-600 flex items-center justify-center shadow-inner">
                <Rocket className="w-6 h-6" />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Misi Perusahaan</h3>
                <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-450 font-medium">
                  <li className="flex items-start space-x-2.5">
                    <span className="w-5 h-5 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <span>Menyediakan produk bahan baku kimia berkualitas murni tinggi secara konsisten.</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <span className="w-5 h-5 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <span>Menjamin kepuasan maksimal pelanggan melalui respon dan pelayanan sales terbaik.</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <span className="w-5 h-5 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <span>Membangun kemitraan strategis jangka panjang yang saling menguntungkan dengan pelaku industri.</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <span className="w-5 h-5 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <span>Menyediakan dukungan teknis spesifik formulasi serta kelengkapan dokumen HSE (TDS & MSDS).</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <span className="w-5 h-5 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">5</span>
                    <span>Mempertahankan struktur harga bersaing untuk efisiensi modal produksi pelanggan.</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. CORE VALUES */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-18">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 px-3.5 py-1.5 rounded-full">
            Nilai Perusahaan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Nilai Inti (Core Values) Pams Chemical
          </h2>
          <p className="text-sm text-gray-550 dark:text-gray-400">
            Nilai-nilai dasar yang dipegang teguh oleh seluruh tim sales expert, chemist, dan logistics kami dalam melayani Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreValues.map((val, idx) => (
            <div
              key={idx}
              className="bg-gray-50 dark:bg-gray-900 p-8 rounded-3xl border border-gray-150/40 dark:border-gray-800 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-white dark:bg-gray-950 border border-gray-200/50 dark:border-gray-800 shadow-sm flex items-center justify-center mb-6">
                {val.icon}
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2.5">
                {val.title}
              </h3>
              <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-450">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. WHY WORK WITH US ADVANTAGES */}
      <section className="py-24 bg-gray-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-550 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Header */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3.5 py-1.5 rounded-full">
                Keunggulan Layanan B2B
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Mengapa Bekerja Sama Dengan Kami?
              </h2>
              <p className="text-sm leading-relaxed text-gray-400">
                Kami memahami kompleksitas pengadaan bahan baku kimia manufaktur. Itulah sebabnya kami merancang ekosistem kerja sama yang berorientasi pada kelancaran operasional pabrik Anda.
              </p>
              <div className="pt-4">
                <span className="text-xs text-gray-400 italic">
                  Pams Chemical - Partner Tepercaya Rantai Pasok Anda.
                </span>
              </div>
            </div>

            {/* Right Advantage List */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {valueProps.map((prop, idx) => (
                <div
                  key={idx}
                  className="bg-gray-900/60 p-6 rounded-2xl border border-gray-800 space-y-4 hover:bg-gray-900 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-gray-950/80 border border-gray-800 flex items-center justify-center">
                    {prop.icon}
                  </div>
                  <h3 className="font-bold text-white text-sm">{prop.title}</h3>
                  <p className="text-xxs text-gray-400 leading-relaxed font-semibold">{prop.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
