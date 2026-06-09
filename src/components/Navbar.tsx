"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon, Menu, X, PhoneCall, Beaker } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Katalog Produk", href: "/katalog" },
    { name: "Tentang Kami", href: "/tentang-kami" },
    { name: "Kontak", href: "/kontak" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-lg border-b border-[#E2E8F0]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <img
              src="/Logo/Logo.png"
              alt="Pima Kimagro Logo"
              className="w-10 h-10 rounded-lg object-cover shadow-md shadow-[#0A3663]/20 group-hover:scale-105 transition-transform duration-200"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-[#1E293B] leading-none">
                Pima Kimagro
              </span>
              <span className="text-xxs text-[#0A3663] font-semibold tracking-wider uppercase mt-1">
                Pima Kimagro Sejahtera
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors duration-200 relative py-2 ${
                    isActive
                      ? "text-[#0A3663]"
                      : "text-slate-600 hover:text-[#0A3663]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavBorder"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0A3663] rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-lg text-slate-600 hover:text-[#0A3663] hover:bg-[#F1F8FF] transition-colors duration-200 shadow-sm border border-transparent"
              aria-label="Toggle dark/light mode"
            >
              {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>

            {/* CTA button */}
            <Link
              href="/kontak?type=quote"
              className="flex items-center space-x-1.5 px-4.5 py-2.5 rounded-lg text-sm font-bold text-white bg-[#0A3663] hover:bg-[#082a4b] shadow-md transition-all duration-200"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Minta Penawaran</span>
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-slate-600 hover:text-[#0A3663] hover:bg-[#F1F8FF] transition-colors duration-200"
              aria-label="Toggle dark/light mode"
            >
              {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-[#0A3663] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
            <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-b border-[#E2E8F0] bg-white overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2.5 rounded-lg text-base font-bold transition-all ${
                        isActive
                          ? "bg-[#E9F2FF] text-[#0A3663]"
                          : "text-slate-700 hover:bg-[#F8FAFC] hover:text-[#0A3663]"
                      }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-3 border-t border-[#E2E8F0]">
                <Link
                  href="/kontak?type=quote"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center space-x-2 py-3 rounded-lg font-bold text-white bg-[#0A3663] hover:bg-[#082a4b] transition-colors shadow-md"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Minta Penawaran</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
