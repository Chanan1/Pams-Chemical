"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  MapPin,
  Phone,
  MessageSquare,
  Mail,
  Clock,
  Send,
  Check,
  Building,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function ContactFormContent() {
  const searchParams = useSearchParams();

  // Read query parameters
  const initialType = searchParams.get("type") || "general";
  const initialProduct = searchParams.get("product") || "";

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    inquiryType: initialType,
    product: initialProduct,
    message: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Sync state with query parameters on load
  useEffect(() => {
    const type = searchParams.get("type");
    const prod = searchParams.get("product");
    if (type) setFormData((prev) => ({ ...prev, inquiryType: type }));
    if (prod) setFormData((prev) => ({ ...prev, product: prod }));
  }, [searchParams]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Nama lengkap wajib diisi";
    if (!formData.company.trim()) newErrors.company = "Nama perusahaan wajib diisi";
    if (!formData.email.trim()) {
      newErrors.email = "Alamat email wajib diisi";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Format email tidak valid";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Nomor telepon/WhatsApp wajib diisi";
    } else if (!/^[0-9+-\s]{8,15}$/.test(formData.phone)) {
      newErrors.phone = "Nomor telepon tidak valid (8-15 digit)";
    }
    if (formData.inquiryType === "quote" && !formData.product.trim()) {
      newErrors.product = "Nama produk yang dibutuhkan wajib diisi";
    }
    if (!formData.message.trim()) newErrors.message = "Pesan inquiry wajib diisi";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);

      // Structure beautiful WhatsApp text
      const waNumber = "6281234567890";
      const typeLabels: Record<string, string> = {
        general: "Pertanyaan Umum",
        quote: "Minta Penawaran Harga",
        partnership: "Kerja Sama Kemitraan",
        technical: "Konsultasi Teknis & Sampel"
      };

      const message = `Halo Pams Chemical (Sales Center),

Saya ingin mengirimkan Inquiry Hubungi Kontak. Berikut rinciannya:

• Nama Pengirim: ${formData.name}
• Perusahaan: ${formData.company}
• Kontak Email: ${formData.email}
• No. Telp/WA: ${formData.phone}
• Jenis Kebutuhan: ${typeLabels[formData.inquiryType] || formData.inquiryType}
${formData.inquiryType === "quote" ? `• Produk Kimia: ${formData.product}\n` : ""}• Detail Pesan: ${formData.message}

Mohon dapat dihubungi kembali via email atau WhatsApp sesegera mungkin. Terima kasih.`;

      const encodedMessage = encodeURIComponent(message);
      
      // Redirect with slight delay
      setTimeout(() => {
        window.open(`https://wa.me/${waNumber}?text=${encodedMessage}`, "_blank");
      }, 1500);
    }, 1200);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 font-sans">
      
      {/* Header Info */}
      <div className="space-y-4 max-w-3xl mb-16 text-center lg:text-left">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          Hubungi Tim Kami
        </h1>
        <p className="text-base text-gray-550 dark:text-gray-400 leading-relaxed">
          Kami siap melayani kebutuhan bahan baku kimia industri Anda. Hubungi kami melalui telepon, surat elektronik, atau isi formulir di bawah ini untuk konsultasi fast respon.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* LEFT COLUMN: Contact Points & Google Map */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white pb-3 border-b border-gray-100 dark:border-gray-800">
              Informasi Kontak Kantor Pusat
            </h2>
            
            <div className="grid grid-cols-1 gap-4">
              {/* Address */}
              <div className="flex items-start space-x-3.5 p-5 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-150/40 dark:border-gray-800">
                <MapPin className="w-5.5 h-5.5 text-blue-500 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="font-bold text-sm text-gray-900 dark:text-white">Alamat Kantor</h4>
                  <p className="text-xs leading-relaxed text-gray-550 dark:text-gray-400">
                    Grand Slipi Tower Lt. 36, Kav. 22-24, Jl. Letjen S. Parman, Slipi, Jakarta Barat, 11480, Indonesia
                  </p>
                </div>
              </div>

              {/* Phone & WA */}
              <div className="flex items-start space-x-3.5 p-5 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-150/40 dark:border-gray-800">
                <Phone className="w-5.5 h-5.5 text-blue-500 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="font-bold text-sm text-gray-900 dark:text-white">Telepon Kantor</h4>
                  <p className="text-xs text-gray-550 dark:text-gray-400">
                    +62 21 5366 1234
                  </p>
                  <p className="text-xs text-emerald-500 font-bold flex items-center space-x-1 mt-1">
                    <MessageSquare className="w-3.5 h-3.5" />
                    <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      +62 812-3456-7890 (WhatsApp Sales)
                    </a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3.5 p-5 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-150/40 dark:border-gray-800">
                <Mail className="w-5.5 h-5.5 text-blue-500 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="font-bold text-sm text-gray-900 dark:text-white">Email Procurement</h4>
                  <p className="text-xs text-gray-550 dark:text-gray-400">
                    <a href="mailto:info@pamschemical.com" className="hover:text-blue-500 hover:underline">
                      info@pamschemical.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start space-x-3.5 p-5 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-150/40 dark:border-gray-800">
                <Clock className="w-5.5 h-5.5 text-blue-500 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="font-bold text-sm text-gray-900 dark:text-white">Jam Operasional</h4>
                  <p className="text-xs text-gray-550 dark:text-gray-400">
                    Senin - Jumat | 08.00 - 17.00 WIB
                  </p>
                  <p className="text-xxs font-bold text-gray-450 dark:text-gray-500">
                    *Tutup pada hari Sabtu, Minggu, dan Libur Nasional.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Styled Google Maps iframe integration */}
          <div className="rounded-3xl border border-gray-150/40 dark:border-gray-800 overflow-hidden shadow-inner aspect-video relative max-w-md bg-gray-100">
            <iframe
              title="Pams Chemical Office Location Grand Slipi Tower"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4526367375217!2d106.79708977587786!3d-6.203867660769931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1m3!1d0!2d-6.20386766!3d106.7970898!2m2!1f0!2f0!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale dark:invert dark:opacity-75"
            />
          </div>
        </div>

        {/* RIGHT COLUMN: Multi-purpose Interactive Form */}
        <div className="lg:col-span-7 bg-gray-50 dark:bg-gray-900 p-8.5 rounded-3xl border border-gray-150/40 dark:border-gray-800 shadow-sm relative">
          <div className="space-y-2 mb-6">
            <div className="inline-flex items-center space-x-1.5 text-xs text-blue-600 dark:text-blue-400 font-bold bg-blue-50 dark:bg-blue-950/30 px-3 py-1 rounded-full">
              <Building className="w-3.5 h-3.5" />
              <span>Inquiry Portal Resmi</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Formulir Kontak B2B</h3>
            <p className="text-xs text-gray-550 dark:text-gray-400">
              Silakan isi formulir di bawah ini untuk mengirimkan surat permintaan penawaran harga atau pertanyaan kemitraan.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Nama Lengkap *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Hermawan Wijaya"
                  className={`w-full px-3.5 py-2.5 rounded-xl border ${
                    errors.name ? "border-red-500 ring-1 ring-red-500/20" : "border-gray-200 dark:border-gray-700"
                  } bg-white dark:bg-gray-950 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/25 focus:border-blue-500 text-gray-900 dark:text-white transition-all`}
                />
                {errors.name && <p className="text-xxs text-red-500 font-bold">{errors.name}</p>}
              </div>

              {/* Company */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Nama Perusahaan *</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="e.g. PT Kosmetik Nusantara Abadi"
                  className={`w-full px-3.5 py-2.5 rounded-xl border ${
                    errors.company ? "border-red-500 ring-1 ring-red-500/20" : "border-gray-200 dark:border-gray-700"
                  } bg-white dark:bg-gray-950 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/25 focus:border-blue-500 text-gray-900 dark:text-white transition-all`}
                />
                {errors.company && <p className="text-xxs text-red-500 font-bold">{errors.company}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Email */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Alamat Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. purchasing@kreatifindo.com"
                  className={`w-full px-3.5 py-2.5 rounded-xl border ${
                    errors.email ? "border-red-500 ring-1 ring-red-500/20" : "border-gray-200 dark:border-gray-700"
                  } bg-white dark:bg-gray-950 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/25 focus:border-blue-500 text-gray-900 dark:text-white transition-all`}
                />
                {errors.email && <p className="text-xxs text-red-500 font-bold">{errors.email}</p>}
              </div>

              {/* Phone */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700 dark:text-gray-300">No. WhatsApp / Telepon *</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. 081298765432"
                  className={`w-full px-3.5 py-2.5 rounded-xl border ${
                    errors.phone ? "border-red-500 ring-1 ring-red-500/20" : "border-gray-200 dark:border-gray-700"
                  } bg-white dark:bg-gray-950 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/25 focus:border-blue-500 text-gray-900 dark:text-white transition-all`}
                />
                {errors.phone && <p className="text-xxs text-red-500 font-bold">{errors.phone}</p>}
              </div>
            </div>

            {/* Inquiry Type & Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700 dark:text-gray-300 font-sans">Kebutuhan Utama *</label>
                <select
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/25 focus:border-blue-500 text-gray-950 dark:text-white transition-all"
                >
                  <option value="general">Pertanyaan Umum / Info</option>
                  <option value="quote">Minta Penawaran Harga</option>
                  <option value="partnership">Kerja Sama / Distributor</option>
                  <option value="technical">Dukungan Teknis / Sampel</option>
                </select>
              </div>

              {formData.inquiryType === "quote" && (
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Nama Produk yang Diminta *</label>
                  <input
                    type="text"
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    placeholder="e.g. SLES 70% / Soda Ash"
                    className={`w-full px-3.5 py-2.5 rounded-xl border ${
                      errors.product ? "border-red-500 ring-1 ring-red-500/20" : "border-gray-200 dark:border-gray-700"
                    } bg-white dark:bg-gray-950 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/25 focus:border-blue-500 text-gray-900 dark:text-white transition-all`}
                  />
                  {errors.product && <p className="text-xxs text-red-500 font-bold">{errors.product}</p>}
                </div>
              )}
            </div>

            {/* Message */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Pesan Inquiry *</label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tulis rincian pesan pengadaan bahan baku kimia industri Anda..."
                className={`w-full px-3.5 py-2.5 rounded-xl border ${
                  errors.message ? "border-red-500 ring-1 ring-red-500/20" : "border-gray-200 dark:border-gray-700"
                } bg-white dark:bg-gray-950 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/25 focus:border-blue-500 text-gray-900 dark:text-white transition-all resize-none`}
              />
              {errors.message && <p className="text-xxs text-red-500 font-bold">{errors.message}</p>}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4.5 rounded-xl bg-gradient-to-r from-blue-650 to-indigo-650 hover:from-blue-700 hover:to-indigo-700 text-white font-extrabold text-sm flex items-center justify-center space-x-2 shadow-lg shadow-blue-500/15 disabled:opacity-75 transition-all active:scale-98"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Kirim Pesan Inquiry (WA)</span>
                </>
              )}
            </button>
          </form>

          {/* Success Overlay Modal */}
          <AnimatePresence>
            {showSuccess && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-white/95 dark:bg-gray-900/95 rounded-3xl flex flex-col items-center justify-center text-center p-8 z-10 space-y-4"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30">
                  <Check className="w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-lg font-black text-gray-900 dark:text-white flex items-center justify-center gap-1.5">
                    <Sparkles className="w-5 h-5 text-amber-500" />
                    <span>Inquiry Terkirim!</span>
                  </h4>
                  <p className="text-xs text-gray-650 dark:text-gray-400 max-w-sm leading-relaxed">
                    Pesan Anda telah berhasil kami enkripsi dan simpan di sistem sales. Kami akan merespon segera!
                  </p>
                </div>
                <p className="text-xxs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 border border-blue-500/10 px-3 py-1.5 rounded-lg animate-pulse">
                  Membuka obrolan WhatsApp sales tim kami...
                </p>
                <button
                  onClick={() => setShowSuccess(false)}
                  className="text-xs font-bold text-gray-400 hover:text-gray-650 dark:hover:text-gray-300 underline pt-2"
                >
                  Tutup dan Kembali
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <Suspense fallback={
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="w-12 h-12 border-4 border-blue-650 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-gray-550 dark:text-gray-400 font-semibold font-sans">Memuat portal kontak...</p>
      </div>
    }>
      <ContactFormContent />
    </Suspense>
  );
}
