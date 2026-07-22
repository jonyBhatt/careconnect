"use client";

import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";

export const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background Subtle Mesh Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Header Section */}
      <div
        className={`text-center space-y-4 max-w-3xl mx-auto transition-all duration-700 ease-out transform ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#061e47] tracking-tight leading-tight">
          About CareConnect
        </h2>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
          We bridge the gap between those who need care and those who love to
          provide it. A dual-sided ecosystem designed for safety, transparency, and
          clinical excellence.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12 sm:mt-16">
        {/* Left Card: For Patients & Families */}
        <div
          className={`group relative bg-[#f6f8fe] border border-slate-200/80 rounded-[28px] p-8 sm:p-10 shadow-lg shadow-slate-100 transition-all duration-700 ease-out transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-900/10 hover:border-teal-200/80 ${
            isVisible
              ? "opacity-100 translate-y-0 translate-x-0"
              : "opacity-0 translate-y-12 -translate-x-4"
          }`}
          style={{ transitionDelay: "150ms" }}
        >
          {/* Ambient card top border glow */}
          <div className="absolute top-0 left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-[#00a884]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Top Left Icon */}
          <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200/60 shadow-xs flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-[#00a884]/10 group-hover:border-[#00a884]/30 transition-all duration-300">
            <svg
              className="w-7 h-7 text-[#00a884] group-hover:text-[#008f70] transition-colors duration-300"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 19a6 6 0 0 0-12 0" />
              <circle cx="8" cy="9" r="4" />
              <line x1="16" y1="8" x2="22" y2="8" />
              <line x1="16" y1="12" x2="22" y2="12" />
              <line x1="16" y1="16" x2="20" y2="16" />
            </svg>
          </div>

          {/* Title */}
          <h3 className="text-2xl sm:text-[26px] font-bold text-[#061e47] tracking-tight mb-4">
            For Patients & Families
          </h3>

          {/* Description */}
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 font-normal">
            Access high-quality care without the stress of navigating complex
            hospital systems. Book verified companions for everything from hospital
            discharges to daily companionship.
          </p>

          {/* Bullet List */}
          <ul className="space-y-3.5 pt-2">
            {[
              "Vetted professionals",
              "Real-time tracking",
              "Clinical standards",
            ].map((item, idx) => (
              <li
                key={idx}
                className={`flex items-center gap-3 group/item transition-all duration-500 transform ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${300 + idx * 100}ms` }}
              >
                <div className="w-5 h-5 rounded-full bg-white border border-[#00a884] flex items-center justify-center shrink-0 group-hover/item:scale-110 group-hover/item:bg-[#00a884] transition-all duration-200">
                  <Check
                    className="w-3 h-3 text-[#00a884] group-hover/item:text-white transition-colors duration-200"
                    strokeWidth={3}
                  />
                </div>
                <span className="text-[#061e47] font-semibold text-sm sm:text-base group-hover/item:translate-x-1.5 transition-transform duration-200">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Card: For Care Companions */}
        <div
          className={`group relative bg-[#051c48] rounded-[28px] p-8 sm:p-10 shadow-xl shadow-slate-900/20 border border-[#092965] transition-all duration-700 ease-out transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/40 hover:border-[#103b8c] ${
            isVisible
              ? "opacity-100 translate-y-0 translate-x-0"
              : "opacity-0 translate-y-12 translate-x-4"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          {/* Ambient card top border glow */}
          <div className="absolute top-0 left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-[#3edbdf]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Top Left Icon */}
          <div className="w-14 h-14 rounded-2xl bg-[#092965] border border-[#143b85] shadow-xs flex items-center justify-center mb-8 group-hover:scale-110 group-hover:-rotate-3 group-hover:bg-[#3edbdf]/15 group-hover:border-[#3edbdf]/40 transition-all duration-300">
            <svg
              className="w-7 h-7 text-[#3edbdf] group-hover:text-[#60eff3] transition-colors duration-300"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <line x1="19" y1="8" x2="19" y2="14" />
              <line x1="16" y1="11" x2="22" y2="11" />
            </svg>
          </div>

          {/* Title */}
          <h3 className="text-2xl sm:text-[26px] font-bold text-white tracking-tight mb-4">
            For Care Companions
          </h3>

          {/* Description */}
          <p className="text-blue-100/80 text-sm sm:text-base leading-relaxed mb-8 font-normal">
            Turn your passion for care into a rewarding career. Set your own
            schedule, build meaningful relationships, and earn industry-leading
            compensation with a transparent fee structure.
          </p>

          {/* Bullet List */}
          <ul className="space-y-3.5 pt-2">
            {[
              "60/40 Revenue split",
              "Weekly escrow payouts",
              "Flexible hour selection",
            ].map((item, idx) => (
              <li
                key={idx}
                className={`flex items-center gap-3 group/item transition-all duration-500 transform ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${450 + idx * 100}ms` }}
              >
                <div className="w-5 h-5 rounded-full bg-[#092965] border border-[#3edbdf] flex items-center justify-center shrink-0 group-hover/item:scale-110 group-hover/item:bg-[#3edbdf] transition-all duration-200">
                  <Check
                    className="w-3 h-3 text-[#3edbdf] group-hover/item:text-[#051c48] transition-colors duration-200"
                    strokeWidth={3}
                  />
                </div>
                <span className="text-white font-semibold text-sm sm:text-base group-hover/item:translate-x-1.5 transition-transform duration-200">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
