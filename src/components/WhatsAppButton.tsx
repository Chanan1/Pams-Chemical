"use client";

import React, { useState, useEffect } from "react";
import { MessageSquare, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);

    // Show tooltip after 4 seconds
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);

    // Auto-dismiss tooltip after 10 seconds
    const dismissTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 14000);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      clearTimeout(tooltipTimer);
      clearTimeout(dismissTimer);
    };
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = "6281234567890";
    const text = encodeURIComponent(
      "Halo Pams Chemical, saya tertarik untuk meminta penawaran harga bahan baku kimia industri. Mohon info pricelist dan katalog terbaru. Terima kasih."
    );
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Dynamic Slide-out Tooltip */}
      <AnimatePresence>
        {isVisible && showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="mb-3 mr-1 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-150 p-4.5 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 max-w-64 md:max-w-72 flex flex-col gap-1.5 relative"
          >
            {/* Close Button */}
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 dark:hover:text-white transition-colors"
              aria-label="Dismiss message"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold text-emerald-500 uppercase tracking-wider">
                Sales Online
              </span>
            </div>
            <p className="text-sm font-semibold text-gray-800 dark:text-gray-100 leading-snug">
              Ada kebutuhan bahan baku kimia? Dapatkan penawaran cepat langsung dari tim sales kami via WhatsApp.
            </p>
            <button
              onClick={() => {
                setShowTooltip(false);
                handleWhatsAppClick();
              }}
              className="mt-1.5 py-1.5 px-3 rounded-lg text-xs font-bold text-white bg-emerald-500 hover:bg-emerald-600 transition-colors text-center w-full shadow-sm shadow-emerald-500/25"
            >
              Chat Sekarang
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Main Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 45 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleWhatsAppClick}
            className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-xl shadow-emerald-500/30 hover:bg-emerald-600 transition-colors duration-200 relative group"
            aria-label="Chat on WhatsApp"
          >
            {/* Pulse Indicator Rings */}
            <span className="absolute inset-0 rounded-full bg-emerald-500/20 animate-ping duration-1000 pointer-events-none" />
            <MessageSquare className="w-6.5 h-6.5" />
            
            {/* Quick Badge */}
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-red-500 border-2 border-white dark:border-gray-950 flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
