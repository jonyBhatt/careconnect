"use client";

import { useEffect, useRef, useState } from "react";
import {
  MousePointerClick,
  Sparkles,
  BriefcaseMedical,
  ArrowRight,
  Pill,
  Home,
  Car,
} from "lucide-react";

export const HowItWorksSection = () => {
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

  const steps = [
    {
      icon: MousePointerClick,
      title: "Select Service",
      description:
        "Choose from Meds Pickup, In-Home Support, or Hospital Transport.",
      delay: "150ms",
    },
    {
      icon: Sparkles,
      title: "Get Matched",
      description:
        "Our algorithm finds the best companion based on location and clinical needs.",
      delay: "300ms",
    },
    {
      icon: BriefcaseMedical,
      title: "Care Delivered",
      description:
        "Receive professional care right at your doorstep with full reporting.",
      delay: "450ms",
    },
  ];

  const servicePills = [
    {
      icon: Pill,
      label: "Meds Pickup",
      href: "#meds-pickup",
    },
    {
      icon: Home,
      label: "In-Home Support",
      href: "#in-home-support",
    },
    {
      icon: Car,
      label: "Transport",
      href: "#transport",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-blue-100/40 blur-3xl rounded-full pointer-events-none -z-10" />

      {/* Section Title */}
      <div
        className={`text-center transition-all duration-700 ease-out transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#0a2540] tracking-tight">
          How Users Get Helped
        </h2>
      </div>

      {/* Process Steps Row */}
      <div className="relative mt-12 sm:mt-16 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 items-start relative z-10">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative flex flex-col items-center">
                {/* Step Card / Container */}
                <div
                  className={`group flex flex-col items-center text-center transition-all duration-700 ease-out transform ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: step.delay }}
                >
                  {/* Circular Icon Wrapper */}
                  <div className="relative mb-5">
                    {/* Outer animated ring */}
                    <div className="absolute -inset-2 rounded-full border border-dashed border-blue-200 group-hover:border-blue-400 group-hover:scale-110 transition-all duration-500 animate-spin-slow opacity-80" />

                    {/* Inner Circle Container */}
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#edf4ff] border border-blue-100 flex items-center justify-center shadow-xs group-hover:bg-[#00a884]/10 group-hover:border-[#00a884]/30 group-hover:scale-105 transition-all duration-300">
                      <Icon className="w-8 h-8 sm:w-9 sm:h-9 text-[#0a2540] group-hover:text-[#008f70] group-hover:rotate-6 transition-all duration-300" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0a2540] mb-2 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-[260px] font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Connecting Arrow for Desktop (Between steps 1 & 2, and steps 2 & 3) */}
                {index < steps.length - 1 && (
                  <div
                    className={`hidden md:block absolute top-9 -right-4 lg:-right-6 text-slate-300 transition-all duration-700 ${
                      isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
                    }`}
                    style={{ transitionDelay: `${250 + index * 150}ms` }}
                  >
                    <ArrowRight className="w-6 h-6 animate-pulse text-slate-300" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Pills / Cards Row */}
      <div
        className={`mt-16 sm:mt-20 max-w-4xl mx-auto transition-all duration-700 ease-out transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{ transitionDelay: "600ms" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {servicePills.map((pill, idx) => {
            const PillIcon = pill.icon;
            return (
              <div
                key={idx}
                className="group relative bg-[#f7fafc] hover:bg-white border border-slate-200/80 rounded-2xl p-4 sm:p-5 flex items-center justify-start gap-4 shadow-2xs hover:shadow-xl hover:shadow-teal-900/5 hover:-translate-y-1 hover:border-[#6bead7]/80 transition-all duration-300 cursor-pointer"
              >
                {/* Ambient Subtle Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-500/0 via-teal-500/5 to-teal-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Icon Container */}
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#6bead7]/30 border border-[#6bead7]/50 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#00a884] transition-all duration-300">
                  <PillIcon className="w-5 h-5 text-[#006654] group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Label */}
                <span className="font-bold text-[#0a2540] text-base sm:text-lg tracking-tight group-hover:text-[#006654] transition-colors duration-200">
                  {pill.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
