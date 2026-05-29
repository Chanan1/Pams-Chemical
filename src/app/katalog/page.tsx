"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { products, CATEGORIES, Product } from "@/data/products";
import { Search, Filter, Hash, Eye, MessageSquare, Clipboard, Check, RotateCcw } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

function CatalogContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Read initial filter from URL
  const initialCategory = searchParams.get("category") || "All";
  const initialSearch = searchParams.get("search") || "";

  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [casQuery, setCasQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [currentPage, setCurrentPage] = useState(1);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const itemsPerPage = 9;

  // Sync category state if query param changes
  useEffect(() => {
    setSelectedCategory(searchParams.get("category") || "All");
  }, [searchParams]);

  // Handle category change
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    
    // Update URL query params
    const params = new URLSearchParams(window.location.search);
    if (category === "All") {
      params.delete("category");
    } else {
      params.set("category", category);
    }
    router.push(`/katalog?${params.toString()}`, { scroll: false });
  };

  // Reset all filters
  const handleResetFilters = () => {
    setSearchQuery("");
    setCasQuery("");
    setSelectedCategory("All");
    setCurrentPage(1);
    router.push("/katalog", { scroll: false });
  };

  // Copy CAS Number to clipboard
  const handleCopyCas = (id: string, cas: string) => {
    navigator.clipboard.writeText(cas);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Filter logic
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (product.chemicalFormula && product.chemicalFormula.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCas = product.casNumber.toLowerCase().includes(casQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;

    return matchesSearch && matchesCas && matchesCategory;
  });

  // Pagination calculations
  const totalItems = filteredProducts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 250, behavior: "smooth" });
  };

  // Color mapping based on chemical category
  const getCategoryTheme = (cat: string) => {
    switch (cat) {
      case CATEGORIES.DETERGENT:
        return "bg-blue-500/10 text-blue-600 dark:text-blue-450 border-blue-500/20";
      case CATEGORIES.PETROLEUM:
        return "bg-indigo-500/10 text-indigo-600 dark:text-indigo-455 border-indigo-500/20";
      case CATEGORIES.INORGANIC:
        return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-450 border-emerald-500/20";
      case CATEGORIES.PIGMENTS:
        return "bg-amber-500/10 text-amber-600 dark:text-amber-450 border-amber-500/20";
      case CATEGORIES.FINE:
        return "bg-rose-500/10 text-rose-600 dark:text-rose-450 border-rose-500/20";
      default:
        return "bg-gray-500/10 text-gray-600 dark:text-gray-400 border-gray-500/20";
    }
  };

  const getAbstractSymbol = (cat: string) => {
    switch (cat) {
      case CATEGORIES.DETERGENT:
        return "🧬";
      case CATEGORIES.PETROLEUM:
        return "💧";
      case CATEGORIES.INORGANIC:
        return "💎";
      case CATEGORIES.PIGMENTS:
        return "🎨";
      case CATEGORIES.FINE:
        return "🧪";
      default:
        return "⚗️";
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 font-sans">
      {/* Title Header */}
      <div className="space-y-4 max-w-3xl mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          Katalog Bahan Kimia Industri
        </h1>
        <p className="text-base text-gray-550 dark:text-gray-400 leading-relaxed">
          Temukan bahan baku kimia bermutu tinggi untuk kebutuhan manufaktur Anda. Cari produk dengan spesifikasi detail, unduh lembar data teknis, dan minta penawaran langsung.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* SIDEBAR FILTERS (DESKTOP) */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-gray-50 dark:bg-gray-900 p-6.5 rounded-3xl border border-gray-150/40 dark:border-gray-800 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-gray-200/50 dark:border-gray-800">
              <span className="font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <Filter className="w-4.5 h-4.5 text-blue-500" />
                <span>Filter Pencarian</span>
              </span>
              <button
                onClick={handleResetFilters}
                className="text-xs font-semibold text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1 transition-colors"
                title="Reset semua filter"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            </div>

            {/* Keyword Search */}
            <div className="space-y-2">
              <label className="text-xs font-extrabold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                Nama / Rumus Kimia
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Cari SLES, Soda Ash..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-gray-900 dark:text-white placeholder-gray-400"
                />
                <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
              </div>
            </div>

            {/* CAS Number Search */}
            <div className="space-y-2">
              <label className="text-xs font-extrabold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                Nomor CAS
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Cari CAS (misal: 497-19-8)..."
                  value={casQuery}
                  onChange={(e) => {
                    setCasQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-gray-900 dark:text-white placeholder-gray-400"
                />
                <Hash className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
              </div>
            </div>

            {/* Category selection list */}
            <div className="space-y-3">
              <label className="text-xs font-extrabold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                Kategori Industri
              </label>
              <div className="flex flex-col gap-1.5">
                <button
                  onClick={() => handleCategoryChange("All")}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    selectedCategory === "All"
                      ? "bg-blue-600 text-white shadow-md shadow-blue-500/10"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-150/50 dark:hover:bg-gray-800"
                  }`}
                >
                  Semua Produk ({products.length})
                </button>
                {Object.values(CATEGORIES).map((cat) => {
                  const count = products.filter((p) => p.category === cat).length;
                  return (
                    <button
                      key={cat}
                      onClick={() => handleCategoryChange(cat)}
                      className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all leading-snug ${
                        selectedCategory === cat
                          ? "bg-blue-600 text-white shadow-md shadow-blue-500/10"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-150/50 dark:hover:bg-gray-800"
                      }`}
                    >
                      {cat} ({count})
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* PRODUCT CARDS LIST GRID */}
        <div className="lg:col-span-3 space-y-10">
          {/* Active status & result count */}
          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-450 border-b border-gray-100 dark:border-gray-850 pb-4">
            <span className="font-semibold">
              Menampilkan {filteredProducts.length} dari {products.length} Bahan Kimia
            </span>
            {selectedCategory !== "All" && (
              <span className="hidden sm:inline-block bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 text-xs px-3 py-1 rounded-full font-bold">
                Kategori: {selectedCategory}
              </span>
            )}
          </div>

          {/* Cards Grid */}
          {paginatedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {paginatedProducts.map((product) => (
                  <motion.div
                    layout
                    key={product.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-150/40 dark:border-gray-800 shadow-sm flex flex-col justify-between overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    {/* Upper decorative banner card */}
                    <div className="p-6 pb-0">
                      {/* Stylized Chemical Visual or Product Photo */}
                      <div className="h-32 w-full rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900 border border-gray-100 dark:border-gray-800/80 flex items-center justify-center relative overflow-hidden group-hover:bg-gradient-to-br group-hover:from-blue-50 group-hover:to-indigo-50 dark:group-hover:from-blue-955 dark:group-hover:to-indigo-955 transition-all">
                        {product.image ? (
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                        ) : (
                          <>
                            {/* Category Symbol floating */}
                            <span className="text-4xl filter saturate-75 select-none z-10 group-hover:scale-110 transition-transform">
                              {getAbstractSymbol(product.category)}
                            </span>
                            {/* Abstract grid wires */}
                            <div className="absolute inset-0 opacity-5 dark:opacity-10 text-gray-500 dark:text-gray-300 grid grid-cols-6 gap-2 p-3 pointer-events-none">
                              {Array.from({ length: 24 }).map((_, i) => (
                                <span key={i} className="border border-current rounded-full" />
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="p-6 space-y-4.5 flex-grow flex flex-col justify-between">
                      <div className="space-y-3">
                        {/* Category Tag */}
                        <div className="flex flex-wrap gap-1.5">
                          <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${getCategoryTheme(product.category)}`}>
                            {product.category.split(" ")[0]}
                          </span>
                          {product.chemicalFormula && (
                            <span className="bg-gray-100 dark:bg-gray-800 text-gray-650 dark:text-gray-300 text-[10px] font-bold font-mono px-2 py-1 rounded-full border border-gray-200/40 dark:border-gray-700/50">
                              {product.chemicalFormula}
                            </span>
                          )}
                        </div>

                        {/* Product Title */}
                        <h3 className="text-base font-extrabold text-gray-900 dark:text-white leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {product.name}
                        </h3>

                        {/* CAS Number Copyable badge */}
                        <div className="flex items-center space-x-1.5">
                          <span className="text-xxs font-bold text-gray-400 uppercase">CAS No:</span>
                          <button
                            onClick={() => handleCopyCas(product.id, product.casNumber)}
                            className="inline-flex items-center space-x-1 bg-gray-55 hover:bg-gray-100 dark:bg-gray-800/80 dark:hover:bg-gray-750 px-2 py-1 rounded-lg border border-gray-150/40 dark:border-gray-700/60 text-xxs font-bold text-gray-650 dark:text-gray-300 active:scale-95 transition-all"
                            title="Salin Nomor CAS ke papan klip"
                          >
                            <span>{product.casNumber}</span>
                            {copiedId === product.id ? (
                              <Check className="w-3 h-3 text-emerald-500 shrink-0" />
                            ) : (
                              <Clipboard className="w-3 h-3 text-gray-400 shrink-0" />
                            )}
                          </button>
                        </div>

                        {/* Short description */}
                        <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-450 line-clamp-3">
                          {product.shortDescription}
                        </p>
                      </div>

                      {/* CTA Buttons */}
                      <div className="grid grid-cols-2 gap-3.5 pt-4 border-t border-gray-105 dark:border-gray-800/60 mt-auto">
                        <Link
                          href={`/katalog/${product.id}`}
                          className="px-3 py-2.5 rounded-xl text-xs font-extrabold border border-gray-200 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800 text-center flex items-center justify-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-gray-950 dark:hover:text-white transition-all active:scale-98"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Spesifikasi</span>
                        </Link>
                        <Link
                          href={`/kontak?type=quote&product=${encodeURIComponent(product.name)}`}
                          className="px-3 py-2.5 rounded-xl text-xs font-extrabold text-white bg-blue-600 hover:bg-blue-700 text-center flex items-center justify-center space-x-1 shadow-md shadow-blue-500/10 active:scale-98 transition-all"
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                          <span>Minta Harga</span>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          ) : (
            /* Empty State */
            <div className="bg-gray-50 dark:bg-gray-900 border border-dashed border-gray-200 dark:border-gray-800 p-16 rounded-3xl text-center flex flex-col items-center justify-center space-y-4">
              <span className="text-4xl">🔍</span>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Bahan Kimia Tidak Ditemukan
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 max-w-sm">
                Maaf, tidak ada produk kimia yang cocok dengan filter pencarian atau nomor CAS Anda. Harap periksa ejaan atau reset filter.
              </p>
              <button
                onClick={handleResetFilters}
                className="py-2.5 px-5 bg-blue-650 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md transition-colors"
              >
                Reset Semua Pencarian
              </button>
            </div>
          )}

          {/* PAGINATION CONTROLS */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center space-x-2 pt-6">
              <button
                onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                disabled={currentPage === 1}
                className="px-3.5 py-2 rounded-xl text-xs font-extrabold border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-850 disabled:opacity-40 disabled:pointer-events-none transition-colors"
              >
                Sebelumnya
              </button>
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => handlePageChange(i + 1)}
                  className={`w-9.5 h-9.5 rounded-xl text-xs font-bold transition-all ${
                    currentPage === i + 1
                      ? "bg-blue-650 text-white font-extrabold shadow-md shadow-blue-500/10"
                      : "border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-850"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-3.5 py-2 rounded-xl text-xs font-extrabold border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-850 disabled:opacity-40 disabled:pointer-events-none transition-colors"
              >
                Selanjutnya
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Catalog() {
  return (
    <Suspense fallback={
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="w-12 h-12 border-4 border-blue-650 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-gray-550 dark:text-gray-400 font-semibold">Memuat katalog produk kimia...</p>
      </div>
    }>
      <CatalogContent />
    </Suspense>
  );
}
