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
    title: `${product.name} | CAS ${product.casNumber} - Pima Kimagro`,
    description: `Beli ${product.name} (CAS ${product.casNumber}) berkualitas tinggi dari Pima Kimagro Sejahtera. Spesifikasi teknis: ${product.shortDescription}`,
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
    <div className="bg-white min-h-screen py-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link
          href="/katalog"
          className="inline-flex items-center space-x-2 text-sm font-bold text-slate-600 hover:text-[#0A3663] mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Katalog</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT COLUMN: Visual & Technical Document Downloads */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Visual Card / Product Photo */}
            <div className="rounded-3xl border border-[#E2E8F0] bg-[#F8FAFC] flex flex-col items-center justify-center text-center relative overflow-hidden aspect-square max-w-md mx-auto shadow-sm">
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
                  <h2 className="text-xl font-black text-[#1E293B] uppercase tracking-wider font-mono">
                    {product.chemicalFormula || "SPECIALTY"}
                  </h2>
                  <span className="mt-2 text-xs font-bold text-[#0A3663] bg-[#E9F2FF] px-3.5 py-1.5 rounded-full border border-[#A7C7F0]">
                    CAS No: {product.casNumber}
                  </span>
                  
                  {/* Dynamic molecular background wires */}
                  <div className="absolute inset-0 opacity-5 text-[#0A3663]/20 grid grid-cols-5 gap-4 p-8 pointer-events-none">
                    {Array.from({ length: 15 }).map((_, i) => (
                      <span key={i} className="border border-current rounded-lg" />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* TDS & MSDS Interactive Document Trigger Card */}
            <div className="p-6.5 rounded-3xl border border-[#E2E8F0] bg-white space-y-4.5 max-w-md mx-auto">
              <h3 className="text-sm font-bold text-[#1E293B] uppercase tracking-wider flex items-center gap-2">
                <FileText className="w-4.5 h-4.5 text-[#0A3663]" />
                <span>Dokumen Teknis & Unduhan</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Kami menyediakan lembar data keselamatan (MSDS/SDS) dan lembar data teknis (TDS) untuk pemenuhan kepatuhan HSE industri Anda.
              </p>
              <div className="grid grid-cols-1 gap-3 pt-2">
                {/* Simulated dynamic datasheet viewer links */}
                <a
                  href={`https://wa.me/6283809704439?text=Halo%20Pima%20Kimagro%20Sejahtera%2C%20saya%2520ingin%2520meminta%2520dokumen%2520TDS%2520untuk%2520${encodeURIComponent(product.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-[#E2E8F0] hover:border-[#0A3663] font-semibold text-xs text-slate-700 hover:text-[#0A3663] transition-colors shadow-sm group"
                >
                  <div className="flex items-center space-x-2.5">
                    <FlaskConical className="w-4.5 h-4.5 text-[#0A3663]" />
                    <span>Technical Data Sheet (TDS)</span>
                  </div>
                  <Download className="w-4 h-4 text-slate-400 group-hover:text-[#0A3663] transition-colors shrink-0" />
                </a>
                
                <a
                  href={`https://wa.me/6283809704439?text=Halo%20Pima%20Kimagro%20Sejahtera%2C%20saya%2520ingin%2520meminta%2520dokumen%2520MSDS%2520untuk%2520${encodeURIComponent(product.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-[#E2E8F0] hover:border-red-500 font-semibold text-xs text-slate-700 hover:text-red-500 transition-colors shadow-sm group"
                >
                  <div className="flex items-center space-x-2.5">
                    <ShieldAlert className="w-4.5 h-4.5 text-red-500" />
                    <span>Material Safety Data Sheet (MSDS)</span>
                  </div>
                  <Download className="w-4 h-4 text-slate-400 group-hover:text-red-500 transition-colors shrink-0" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Product specs, description and dynamic Quote form */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Header Product Info */}
            <div className="space-y-4 pb-6 border-b border-[#E2E8F0]">
              <span className="inline-block bg-[#E9F2FF] text-[#0A3663] text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider border border-[#A7C7F0]">
                {product.category}
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1E293B] leading-none">
                {product.name}
              </h1>
              <p className="text-base text-slate-600 leading-relaxed font-semibold">
                Chemical Formula: <span className="font-mono text-[#1E293B] bg-[#F8FAFC] px-2 py-0.5 rounded border border-[#E2E8F0]">{product.chemicalFormula || "N/A"}</span>
              </p>
            </div>

            {/* Description Section */}
            <div className="space-y-3.5">
              <h3 className="text-sm font-bold text-slate-600 uppercase tracking-wide">
                Deskripsi Produk
              </h3>
              <p className="text-sm leading-relaxed text-slate-700">
                {product.description}
              </p>
            </div>

            {/* Technical Specifications Section */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-slate-600 uppercase tracking-wide flex items-center gap-2">
                <Table className="w-4 h-4 text-[#0A3663]" />
                <span>Spesifikasi Teknis & Sifat Fisika</span>
              </h3>
              
              <div className="overflow-x-auto rounded-2xl border border-[#E2E8F0] shadow-sm">
                <table className="min-w-full divide-y divide-gray-100 text-sm">
                  <tbody className="divide-y divide-gray-100 bg-white">
                    <tr className="grid grid-cols-12">
                      <td className="col-span-4 px-4 py-3 bg-[#F8FAFC] text-xs font-bold text-slate-600 uppercase tracking-wider">Purity (Kemurnian)</td>
                      <td className="col-span-8 px-4 py-3 text-[#1E293B] font-semibold">{product.techSpecs.purity || "Sesuai COA Standar"}</td>
                    </tr>
                    <tr className="grid grid-cols-12">
                      <td className="col-span-4 px-4 py-3 bg-[#F8FAFC] text-xs font-bold text-slate-600 uppercase tracking-wider">Appearance (Bentuk)</td>
                      <td className="col-span-8 px-4 py-3 text-[#1E293B] font-semibold">{product.techSpecs.appearance || "Cairan/Flakes"}</td>
                    </tr>
                    {product.techSpecs.activeMatter && (
                      <tr className="grid grid-cols-12">
                        <td className="col-span-4 px-4 py-3 bg-[#F8FAFC] text-xs font-bold text-slate-600 uppercase tracking-wider">Active Matter</td>
                        <td className="col-span-8 px-4 py-3 text-[#1E293B] font-semibold">{product.techSpecs.activeMatter}</td>
                      </tr>
                    )}
                    <tr className="grid grid-cols-12">
                      <td className="col-span-4 px-4 py-3 bg-[#F8FAFC] text-xs font-bold text-slate-600 uppercase tracking-wider">Density (Kerapatan)</td>
                      <td className="col-span-8 px-4 py-3 text-[#1E293B] font-semibold">{product.techSpecs.density || "N/A"}</td>
                    </tr>
                    <tr className="grid grid-cols-12">
                      <td className="col-span-4 px-4 py-3 bg-[#F8FAFC] text-xs font-bold text-slate-600 uppercase tracking-wider">pH (Derajat Asam)</td>
                      <td className="col-span-8 px-4 py-3 text-[#1E293B] font-semibold">{product.techSpecs.pH || "N/A"}</td>
                    </tr>
                    <tr className="grid grid-cols-12">
                      <td className="col-span-4 px-4 py-3 bg-[#F8FAFC] text-xs font-bold text-slate-600 uppercase tracking-wider">Packaging (Kemasan)</td>
                      <td className="col-span-8 px-4 py-3 text-[#1E293B] font-semibold">{product.techSpecs.packaging || "Bag / Drum / IBC"}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Industrial Applications Section */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-slate-600 uppercase tracking-wide flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#0A3663]" />
                <span>Aplikasi & Penggunaan Industri</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.applications.map((app, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5 p-3 rounded-xl bg-white border border-[#E2E8F0]">
                    <CheckCircle2 className="w-4 h-4 text-[#0A3663] shrink-0 mt-0.5" />
                    <span className="text-xs text-[#1E293B] leading-snug">{app}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* REQUEST QUOTATION FORM MODULE */}
            <div className="pt-6 border-t border-[#E2E8F0]">
              <div className="p-8 rounded-3xl border border-[#E2E8F0] bg-white space-y-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center space-x-1.5 text-xs text-[#0A3663] font-bold bg-[#E9F2FF] px-3 py-1 rounded-full">
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Respon Penawaran Cepat</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1E293B]">
                    Minta Penawaran Harga {product.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
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
