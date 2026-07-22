"use client";

import { useEffect, useRef, useState } from "react";
import {
  ShieldCheck,
  Lock,
  Award,
  Users,
  UserPlus,
  Headphones,
} from "lucide-react";
import Link from "next/link";

export const WhyChooseSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: "10,000+", label: "Families trusting us daily" },
    { value: "4.9/5", label: "Average care rating" },
    { value: "2,500+", label: "Certified Companions" },
    { value: "15 Min", label: "Average matching time" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Subtle Background Mesh Glows */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Header Title */}
      <div
        className={`text-center transition-all duration-700 ease-out transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#0a2540] tracking-tight">
          Why Choose CareConnect?
        </h2>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-6xl mx-auto mt-12 sm:mt-16">
        {/* Top Left Card: Uncompromising Safety (Cols 1-7 or 1-8) */}
        <div
          className={`lg:col-span-7 group relative bg-[#f8fafc] hover:bg-white border border-slate-200/80 rounded-[32px] p-8 sm:p-10 shadow-xs hover:shadow-2xl hover:shadow-teal-900/5 hover:border-teal-200 transition-all duration-500 ease-out transform ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "150ms" }}
        >
          {/* Top Line Accent */}
          <div className="absolute top-0 left-12 right-12 h-[2px] bg-gradient-to-r from-transparent via-[#00a884]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="flex flex-col h-full justify-between">
            <div>
              {/* Icon */}
              <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#00a884]/15 group-hover:border-[#00a884]/30 transition-all duration-300">
                <ShieldCheck className="w-6 h-6 text-[#00a884] group-hover:text-[#008f70] transition-colors" />
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0a2540] tracking-tight mb-3">
                Uncompromising Safety
              </h3>

              {/* Description */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
                Every companion undergoes a rigorous 5-step background check,
                including clinical certification verification and behavioral
                interviews.
              </p>
            </div>

            {/* Tags Row */}
            <div className="flex flex-wrap gap-2.5 pt-8">
              {["Background Checks", "ID Verified", "Clinical Review"].map(
                (tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs sm:text-sm font-medium text-slate-600 bg-slate-100/90 border border-slate-200/70 px-3.5 py-1.5 rounded-full transition-all duration-200 group-hover:bg-teal-50 group-hover:text-teal-700 group-hover:border-teal-200/80"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        {/* Top Right Card: Transparency (Cols 8-12 / Dark Card) */}
        <div
          className={`lg:col-span-5 group relative bg-[#041943] rounded-[32px] p-8 sm:p-10 shadow-xl shadow-blue-950/20 border border-[#082766] hover:border-[#103e9c] transition-all duration-500 ease-out transform hover:-translate-y-1.5 flex flex-col justify-between ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          {/* Subtle Ambient Radial Glow inside card */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />

          <div>
            {/* Icon */}
            <div className="w-12 h-12 rounded-2xl bg-[#092b70] border border-[#143e94] flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-[#3edbdf]/20 group-hover:border-[#3edbdf]/40 transition-all duration-300">
              <Lock className="w-6 h-6 text-[#3edbdf] group-hover:text-[#60eff3] transition-colors" />
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
              Transparency
            </h3>

            {/* Description */}
            <p className="text-blue-100/80 text-sm sm:text-base leading-relaxed font-normal">
              Honest 60/40 revenue split with secure Escrow payments for every
              session.
            </p>
          </div>
        </div>

        {/* Bottom Left Card: Professionalism (Cols 1-5) */}
        <div
          className={`lg:col-span-5 group relative bg-[#f8fafc] hover:bg-white border border-slate-200/80 rounded-[32px] p-8 sm:p-10 shadow-xs hover:shadow-2xl hover:shadow-teal-900/5 hover:border-teal-200 transition-all duration-500 ease-out transform ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "450ms" }}
        >
          <div className="flex flex-col h-full justify-between">
            <div>
              {/* Icon */}
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-100 transition-all duration-300">
                <Award className="w-6 h-6 text-[#0a2540] group-hover:text-[#006654] transition-colors" />
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0a2540] tracking-tight mb-3">
                Professionalism
              </h3>

              {/* Description */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                Built upon strict clinical protocols and ethical care guidelines.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Right Card: A Growing Care Community (Cols 6-12) */}
        <div
          className={`lg:col-span-7 group relative bg-[#f8fafc] hover:bg-white border border-slate-200/80 rounded-[32px] p-8 sm:p-10 shadow-xs hover:shadow-2xl hover:shadow-teal-900/5 hover:border-teal-200 transition-all duration-500 ease-out transform ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
            {/* Content Left */}
            <div className="sm:col-span-7 space-y-3">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0a2540] tracking-tight">
                A Growing Care Community
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                Connecting families with specialized local talent who truly
                understand their specific health needs.
              </p>
            </div>

            {/* Visual Graphic Right: 2x2 colored square tile matrix */}
            <div className="sm:col-span-5 flex justify-center sm:justify-end">
              <div className="grid grid-cols-2 gap-3 w-full max-w-[200px]">
                <div className="h-16 rounded-2xl bg-[#8898ba] group-hover:scale-105 group-hover:-rotate-2 transition-all duration-300 shadow-xs" />
                <div className="h-16 rounded-2xl bg-[#b6f9ee] group-hover:scale-105 group-hover:rotate-2 transition-all duration-300 shadow-xs" />
                <div className="h-16 rounded-2xl bg-[#8d9297] group-hover:scale-105 group-hover:rotate-2 transition-all duration-300 shadow-xs" />
                <div className="h-16 rounded-2xl bg-[#e2e4ed] group-hover:scale-105 group-hover:-rotate-2 transition-all duration-300 shadow-xs" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Counter Bar */}
      <div
        className={`mt-20 sm:mt-24 max-w-6xl mx-auto transition-all duration-700 ease-out transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{ transitionDelay: "750ms" }}
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 text-left sm:text-left py-6 border-t border-b border-slate-100">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0a2540] tracking-tight">
                {stat.value}
              </div>
              <div className="text-slate-500 text-xs sm:text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call To Action Banner */}
      <div
        className={`mt-20 sm:mt-28 max-w-6xl mx-auto transition-all duration-700 ease-out transform ${
          isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
        }`}
        style={{ transitionDelay: "900ms" }}
      >
        <div className="relative rounded-[36px] bg-[#041943] text-white p-8 sm:p-14 lg:p-16 overflow-hidden shadow-2xl border border-[#092d7a] text-center">
          {/* Ambient Background Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-teal-500/15 via-blue-500/10 to-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

          {/* Banner Content */}
          <div className="relative z-10 max-w-3xl mx-auto space-y-5">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-white leading-tight">
              Ready to experience better care?
            </h2>

            <p className="text-blue-100/80 text-sm sm:text-base lg:text-lg font-normal leading-relaxed max-w-2xl mx-auto">
              Whether you&apos;re looking for help for a loved one or want to offer
              your services, joining the CareConnect family only takes a few
              minutes.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link href="/sign-up">
                <button className="px-8 py-3.5 rounded-full bg-white hover:bg-slate-100 text-[#041943] font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 cursor-pointer">
                  <span>Sign Up Now</span>
                  <UserPlus className="w-4 h-4 text-[#041943]" />
                </button>
              </Link>

              <Link href="/contact">
                <button className="px-8 py-3.5 rounded-full bg-[#08296a]/80 hover:bg-[#0c3587] border border-blue-400/30 text-white font-medium text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all duration-200 active:scale-95 cursor-pointer backdrop-blur-xs">
                  <span>Talk to an Expert</span>
                  <Headphones className="w-4 h-4 text-blue-200" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
