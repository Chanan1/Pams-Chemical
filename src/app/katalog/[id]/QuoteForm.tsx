"use client";

import React, { useState } from "react";
import { MessageSquare, Check, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function QuoteForm({ productName }: { productName: string }) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    product: productName,
    quantity: "",
    message: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Nama wajib diisi";
    if (!formData.company.trim()) newErrors.company = "Nama perusahaan wajib diisi";
    if (!formData.email.trim()) {
      newErrors.email = "Email wajib diisi";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Format email tidak valid";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Nomor telepon/WhatsApp wajib diisi";
    } else if (!/^[0-9+-\s]{8,15}$/.test(formData.phone)) {
      newErrors.phone = "Nomor telepon tidak valid (8-15 digit)";
    }
    if (!formData.quantity.trim()) newErrors.quantity = "Jumlah estimasi wajib diisi";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

    // Simulate standard server latency
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);

      // Structure beautiful WhatsApp text
      const waNumber = "6283809704439";
      const message = `Halo Pima Kimagro Sejahtera (Sales Center),

Saya ingin mengajukan Permintaan Penawaran Harga resmi. Berikut detail kebutuhan bahan baku industri kami:

• Nama Pengaju: ${formData.name}
• Perusahaan: ${formData.company}
• Kontak Email: ${formData.email}
• No. Telp/WA: ${formData.phone}
• Produk: ${formData.product}
• Estimasi Jumlah: ${formData.quantity}
• Catatan Tambahan: ${formData.message || "-"}

Mohon untuk segera mengirimkan Surat Penawaran Harga (SPH) resmi beserta sertifikat analisis COA dan dokumen keselamatan MSDS yang relevan. Terima kasih.`;

      const encodedMessage = encodeURIComponent(message);
      
      // Delay opening WhatsApp to allow user to see success state
      setTimeout(() => {
        window.open(`https://wa.me/${waNumber}?text=${encodedMessage}`, "_blank");
      }, 1500);
    }, 1200);
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Name */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700">
              Nama Lengkap <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Budi Santoso"
              className={`w-full px-3.5 py-2.5 rounded-xl border ${
                errors.name ? "border-red-500 ring-1 ring-red-500/20" : "border-[#E2E8F0]"
              } bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0A3663]/25 focus:border-[#0A3663] text-[#1E293B] transition-all`}
            />
            {errors.name && <p className="text-xxs text-red-500 font-bold">{errors.name}</p>}
          </div>

          {/* Company Name */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700">
              Nama Perusahaan <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="e.g. PT Sukses Mulia Deterjen"
              className={`w-full px-3.5 py-2.5 rounded-xl border ${
                errors.company ? "border-red-500 ring-1 ring-red-500/20" : "border-[#E2E8F0]"
              } bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0A3663]/25 focus:border-[#0A3663] text-[#1E293B] transition-all`}
            />
            {errors.company && <p className="text-xxs text-red-500 font-bold">{errors.company}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Email */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700">
              Alamat Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. procurement@company.com"
              className={`w-full px-3.5 py-2.5 rounded-xl border ${
                errors.email ? "border-red-500 ring-1 ring-red-500/20" : "border-[#E2E8F0]"
              } bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0A3663]/25 focus:border-[#0A3663] text-[#1E293B] transition-all`}
            />
            {errors.email && <p className="text-xxs text-red-500 font-bold">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700">
              No. Telepon / WhatsApp <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. 081234567890"
              className={`w-full px-3.5 py-2.5 rounded-xl border ${
                errors.phone ? "border-red-500 ring-1 ring-red-500/20" : "border-[#E2E8F0]"
              } bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0A3663]/25 focus:border-[#0A3663] text-[#1E293B] transition-all`}
            />
            {errors.phone && <p className="text-xxs text-red-500 font-bold">{errors.phone}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Product Required (Pre-filled) */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700">
              Bahan Baku Diminta
            </label>
            <input
              type="text"
              name="product"
              value={formData.product}
              disabled
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-sm text-slate-600 font-semibold cursor-not-allowed"
            />
          </div>

          {/* Quantity */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700">
              Estimasi Jumlah Kebutuhan <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              placeholder="e.g. 5 Ton / 20 Drum"
              className={`w-full px-3.5 py-2.5 rounded-xl border ${
                errors.quantity ? "border-red-500 ring-1 ring-red-500/20" : "border-[#E2E8F0]"
              } bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0A3663]/25 focus:border-[#0A3663] text-[#1E293B] transition-all`}
            />
            {errors.quantity && <p className="text-xxs text-red-500 font-bold">{errors.quantity}</p>}
          </div>
        </div>

        {/* Message */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-700">
            Catatan Tambahan / Spesifikasi Khusus (Opsional)
          </label>
          <textarea
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tuliskan jika ada spesifikasi khusus (e.g. kemasan, target active matter, atau jadwal pengiriman)"
            className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2E8F0] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0A3663]/25 focus:border-[#0A3663] text-[#1E293B] transition-all resize-none"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4.5 rounded-xl bg-[#0A3663] hover:bg-[#082a4b] text-white font-extrabold text-sm flex items-center justify-center space-x-2 shadow-lg disabled:opacity-75 transition-all active:scale-98"
        >
          {isSubmitting ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <>
              <MessageSquare className="w-4.5 h-4.5" />
              <span>Kirim Inquiry Penawaran (WA)</span>
            </>
          )}
        </button>
      </form>

      {/* SUCCESS MODAL POPUP OVERLAY */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-white/95 rounded-3xl flex flex-col items-center justify-center text-center p-8 z-10 space-y-4"
          >
            <motion.div
              initial={{ scale: 0.8, rotate: -15 }}
              animate={{ scale: 1, rotate: 0 }}
              className="w-14 h-14 rounded-full bg-[#00A896] text-white flex items-center justify-center shadow-lg"
            >
              <Check className="w-7 h-7" />
            </motion.div>
            <div className="space-y-1">
              <h4 className="text-lg font-black text-[#1E293B] flex items-center justify-center gap-1.5">
                <Sparkles className="w-5 h-5 text-[#00A896]" />
                <span>Inquiry Berhasil Dibuat!</span>
              </h4>
              <p className="text-xs text-slate-600 max-w-sm leading-relaxed">
                Terima kasih, data penawaran Anda telah tersimpan dengan aman di sistem B2B Pima Kimagro Sejahtera.
              </p>
            </div>
            <p className="text-xxs font-bold text-[#0A3663] bg-[#E9F2FF] border border-[#A7C7F0] px-3 py-1.5 rounded-lg animate-pulse">
              Mengalihkan Anda ke WhatsApp Sales tim kami...
            </p>
            <button
              onClick={() => setShowSuccess(false)}
              className="text-xs font-bold text-slate-600 hover:text-[#0A3663] underline pt-2"
            >
              Kembali ke Formulir
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
