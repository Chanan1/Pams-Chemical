import React from "react";
import { products, Product } from "@/data/products";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  FileText,
  Download,
  ShieldAlert,
  CheckCircle2,
  Table,
  Layers,
  FlaskConical,
  PhoneCall
} from "lucide-react";
import QuoteForm from "./QuoteForm";

// Define the async props for Next.js 15
interface PageProps {
  params: Promise<{ id: string }>;
}

// Generate static params for Next.js to pre-render dynamic paths
export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

// A helper to generate metadata for this product
export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const product = products.find((p) => p.id === resolvedParams.id);
  
  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} | CAS ${product.casNumber} - Pams Chemical`,
    description: `Beli ${product.name} (CAS ${product.casNumber}) berkualitas tinggi dari Pams Chemical. Spesifikasi teknis: ${product.shortDescription}`,
    keywords: [
      product.name,
      `CAS ${product.casNumber}`,
      product.category,
      "Distributor Kimia",
      "Supplier Bahan Baku Industri"
    ]
  };
}

export default async function ProductDetail({ params }: PageProps) {
  const resolvedParams = await params;
  const product = products.find((p) => p.id === resolvedParams.id);

  if (!product) {
    notFound();
  }

  // Abstract molecular icon based on category
  const getSymbol = (cat: string) => {
    if (cat.includes("Surfactants")) return "🧬";
    if (cat.includes("Petroleum")) return "💧";
    if (cat.includes("Inorganic")) return "💎";
    if (cat.includes("Pigments")) return "🎨";
    return "🧪";
  };

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen py-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link
          href="/katalog"
          className="inline-flex items-center space-x-2 text-sm font-bold text-gray-500 hover:text-blue-650 dark:hover:text-blue-400 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Katalog</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT COLUMN: Visual & Technical Document Downloads */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Visual Card / Product Photo */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-900/60 rounded-3xl border border-gray-150/40 dark:border-gray-800 flex flex-col items-center justify-center text-center relative overflow-hidden aspect-square max-w-md mx-auto shadow-sm">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <>
                  <span className="text-7xl mb-6 filter saturate-75 drop-shadow-md select-none">
                    {getSymbol(product.category)}
                  </span>
                  <h2 className="text-xl font-black text-gray-900 dark:text-white uppercase tracking-wider font-mono">
                    {product.chemicalFormula || "SPECIALTY"}
                  </h2>
                  <span className="mt-2 text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 px-3.5 py-1.5 rounded-full border border-blue-500/10">
                    CAS No: {product.casNumber}
                  </span>
                  
                  {/* Dynamic molecular background wires */}
                  <div className="absolute inset-0 opacity-5 dark:opacity-10 text-gray-400 grid grid-cols-5 gap-4 p-8 pointer-events-none">
                    {Array.from({ length: 15 }).map((_, i) => (
                      <span key={i} className="border border-current rounded-lg" />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* TDS & MSDS Interactive Document Trigger Card */}
            <div className="bg-gray-50 dark:bg-gray-900 p-6.5 rounded-3xl border border-gray-150/40 dark:border-gray-800 space-y-4.5 max-w-md mx-auto">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                <FileText className="w-4.5 h-4.5 text-blue-500" />
                <span>Dokumen Teknis & Unduhan</span>
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                Kami menyediakan lembar data keselamatan (MSDS/SDS) dan lembar data teknis (TDS) untuk pemenuhan kepatuhan HSE industri Anda.
              </p>
              <div className="grid grid-cols-1 gap-3 pt-2">
                {/* Simulated dynamic datasheet viewer links */}
                <a
                  href={`https://wa.me/6281234567890?text=Halo%20Pams%20Chemical%2C%20saya%2520ingin%2520meminta%2520dokumen%2520TDS%2520untuk%2520${encodeURIComponent(product.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white dark:bg-gray-950 border border-gray-200/50 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-400 font-semibold text-xs text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shadow-sm group"
                >
                  <div className="flex items-center space-x-2.5">
                    <FlaskConical className="w-4.5 h-4.5 text-blue-500" />
                    <span>Technical Data Sheet (TDS)</span>
                  </div>
                  <Download className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors shrink-0" />
                </a>

                <a
                  href={`https://wa.me/6281234567890?text=Halo%20Pams%20Chemical%2C%20saya%2520ingin%2520meminta%2520dokumen%2520MSDS%2520untuk%2520${encodeURIComponent(product.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white dark:bg-gray-950 border border-gray-200/50 dark:border-gray-800 hover:border-red-500 dark:hover:border-red-400 font-semibold text-xs text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-colors shadow-sm group"
                >
                  <div className="flex items-center space-x-2.5">
                    <ShieldAlert className="w-4.5 h-4.5 text-red-500" />
                    <span>Material Safety Data Sheet (MSDS)</span>
                  </div>
                  <Download className="w-4 h-4 text-gray-400 group-hover:text-red-500 transition-colors shrink-0" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Product specs, description and dynamic Quote form */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Header Product Info */}
            <div className="space-y-4 pb-6 border-b border-gray-100 dark:border-gray-800">
              <span className="inline-block bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider border border-blue-500/10">
                {product.category}
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-none">
                {product.name}
              </h1>
              <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed font-semibold">
                Chemical Formula: <span className="font-mono text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-900 px-2 py-0.5 rounded border border-gray-200/40 dark:border-gray-800">{product.chemicalFormula || "N/A"}</span>
              </p>
            </div>

            {/* Description Section */}
            <div className="space-y-3.5">
              <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                Deskripsi Produk
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                {product.description}
              </p>
            </div>

            {/* Technical Specifications Section */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide flex items-center gap-2">
                <Table className="w-4 h-4 text-blue-500" />
                <span>Spesifikasi Teknis & Sifat Fisika</span>
              </h3>
              
              <div className="overflow-x-auto rounded-2xl border border-gray-150/40 dark:border-gray-800 shadow-sm">
                <table className="min-w-full divide-y divide-gray-100 dark:divide-gray-800 text-sm">
                  <tbody className="divide-y divide-gray-105 dark:divide-gray-800 bg-gray-50/20 dark:bg-gray-900/10">
                    <tr className="grid grid-cols-12">
                      <td className="col-span-4 px-4 py-3 bg-gray-50 dark:bg-gray-900 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Purity (Kemurnian)</td>
                      <td className="col-span-8 px-4 py-3 text-gray-850 dark:text-gray-200 font-semibold">{product.techSpecs.purity || "Sesuai COA Standar"}</td>
                    </tr>
                    <tr className="grid grid-cols-12">
                      <td className="col-span-4 px-4 py-3 bg-gray-50 dark:bg-gray-900 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Appearance (Bentuk)</td>
                      <td className="col-span-8 px-4 py-3 text-gray-850 dark:text-gray-200 font-semibold">{product.techSpecs.appearance || "Cairan/Flakes"}</td>
                    </tr>
                    {product.techSpecs.activeMatter && (
                      <tr className="grid grid-cols-12">
                        <td className="col-span-4 px-4 py-3 bg-gray-50 dark:bg-gray-900 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Active Matter</td>
                        <td className="col-span-8 px-4 py-3 text-gray-850 dark:text-gray-200 font-semibold">{product.techSpecs.activeMatter}</td>
                      </tr>
                    )}
                    <tr className="grid grid-cols-12">
                      <td className="col-span-4 px-4 py-3 bg-gray-50 dark:bg-gray-900 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Density (Kerapatan)</td>
                      <td className="col-span-8 px-4 py-3 text-gray-850 dark:text-gray-200 font-semibold">{product.techSpecs.density || "N/A"}</td>
                    </tr>
                    <tr className="grid grid-cols-12">
                      <td className="col-span-4 px-4 py-3 bg-gray-50 dark:bg-gray-900 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">pH (Derajat Asam)</td>
                      <td className="col-span-8 px-4 py-3 text-gray-850 dark:text-gray-200 font-semibold">{product.techSpecs.pH || "N/A"}</td>
                    </tr>
                    <tr className="grid grid-cols-12">
                      <td className="col-span-4 px-4 py-3 bg-gray-50 dark:bg-gray-900 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Packaging (Kemasan)</td>
                      <td className="col-span-8 px-4 py-3 text-gray-850 dark:text-gray-200 font-semibold">{product.techSpecs.packaging || "Bag / Drum / IBC"}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Industrial Applications Section */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide flex items-center gap-2">
                <Layers className="w-4 h-4 text-blue-500" />
                <span>Aplikasi & Penggunaan Industri</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.applications.map((app, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5 p-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-150/40 dark:border-gray-800">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <span className="text-xs text-gray-700 dark:text-gray-300 leading-snug">{app}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* REQUEST QUOTATION FORM MODULE */}
            <div className="pt-6 border-t border-gray-100 dark:border-gray-800">
              <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-3xl border border-gray-150/40 dark:border-gray-800 space-y-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center space-x-1.5 text-xs text-blue-600 dark:text-blue-400 font-bold bg-blue-50 dark:bg-blue-950/30 px-3 py-1 rounded-full">
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Respon Penawaran Cepat</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Minta Penawaran Harga {product.name}
                  </h3>
                  <p className="text-xs text-gray-550 dark:text-gray-405 leading-relaxed">
                    Kirim form inquiries ini langsung ke tim marketing dan logistics kami. Penawaran resmi PDF akan dikirimkan ke email atau kontak WhatsApp Anda dalam waktu 1 jam kerja.
                  </p>
                </div>

                {/* Interactive Client-side Form */}
                <QuoteForm productName={product.name} />
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
