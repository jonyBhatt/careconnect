"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, Menu, X, ArrowRight, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 ease-in-out",
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/70 py-3"
          : "bg-white/80 backdrop-blur-sm border-b border-slate-100 py-4.5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-2xl bg-[#00a884] flex items-center justify-center shadow-md shadow-teal-500/20 group-hover:scale-105 group-hover:bg-[#008f70] transition-all duration-300">
            <Heart className="w-5 h-5 text-white fill-white/20 group-hover:scale-110 transition-transform" />
          </div>
          <span className="text-2xl font-bold text-[#0a2540] tracking-tight">
            Care<span className="text-[#00a884]">Connect</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5 bg-slate-100/70 p-1.5 rounded-full border border-slate-200/60 shadow-2xs">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "relative px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300 flex items-center justify-center",
                  isActive
                    ? "text-[#006654] shadow-xs"
                    : "text-slate-600 hover:text-[#0a2540] hover:bg-white/60"
                )}
              >
                {/* Active Indicator Background Pill */}
                {isActive && (
                  <span className="absolute inset-0 bg-white rounded-full border border-[#00a884]/30 shadow-xs -z-10 animate-fade-in" />
                )}
                <span>{item.name}</span>

                {/* Active Underline Glow */}
                {isActive && (
                  <span className="absolute -bottom-1 left-4 right-4 h-[2px] bg-[#00a884] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/sign-in">
            <button className="px-5 py-2.5 rounded-full border-2 border-slate-200 hover:border-[#00a884] text-[#0a2540] hover:text-[#006654] font-semibold text-sm transition-all duration-200 active:scale-95 cursor-pointer">
              Sign In
            </button>
          </Link>

          <Link href="/book-service">
            <button className="px-6 py-2.5 rounded-full bg-[#00a884] hover:bg-[#008f70] text-white font-semibold text-sm flex items-center gap-2 shadow-md shadow-teal-600/20 hover:shadow-lg transition-all duration-200 active:scale-95 cursor-pointer">
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-slate-100 text-[#0a2540] hover:bg-slate-200 transition-colors focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 shadow-xl animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-2xl text-base font-semibold transition-all flex items-center justify-between",
                    isActive
                      ? "bg-[#6bead7]/20 text-[#006654] border border-[#6bead7]/40"
                      : "text-slate-600 hover:bg-slate-50 hover:text-[#0a2540]"
                  )}
                >
                  <span>{item.name}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-[#00a884]" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            <Link href="/sign-in" onClick={() => setMobileMenuOpen(false)}>
              <button className="w-full py-3 rounded-xl border border-slate-300 text-[#0a2540] font-bold text-base">
                Sign In
              </button>
            </Link>

            <Link href="/book-service" onClick={() => setMobileMenuOpen(false)}>
              <button className="w-full py-3 rounded-xl bg-[#00a884] text-white font-bold text-base flex items-center justify-center gap-2">
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
