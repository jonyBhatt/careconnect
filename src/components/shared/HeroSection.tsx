"use client";

import Link from "next/link";
import { CheckCircle2, ArrowRight, Heart } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50/50 to-white py-12 lg:py-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column - Content */}
        <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6bead7]/25 text-[#006654] border border-[#6bead7]/40 shadow-xs backdrop-blur-xs">
            <CheckCircle2 className="w-4 h-4 text-[#006654] shrink-0" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide">
              Trusted Medical Network
            </span>
          </div>

          {/* Headline */}
          <div className="space-y-1 sm:space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl  tracking-tight text-[#0a2540] leading-[1.15] font-medium">
              Healthcare at Your{" "}
              <span className="block text-primary">Doorstep.</span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl font-normal font-serif">
            Connecting elderly patients with compassionate, professional
            caregivers for medication management, physical support, and reliable
            transport. Professional clinical standards met with human empathy.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2 ">
            <Link href="/book-service" className="group">
              <button className="px-7 py-3.5 rounded-full bg-primary hover:bg-[#001f4d] text-white font-medium text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg transition-all duration-200 active:scale-98 cursor-pointer">
                <span>Book a Service</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-all duration-200" />
              </button>
            </Link>

            <Link href="/join-companion">
              <button className="px-7 py-3.5 rounded-full bg-white hover:bg-slate-50 border-2 border-[#006654] text-[#006654] font-medium text-sm sm:text-base transition-all duration-200 active:scale-98 cursor-pointer shadow-2xs">
                Join as a Companion
              </button>
            </Link>
          </div>

          {/* Social Proof */}
          <div className="flex items-center gap-3.5 pt-4">
            <div className="flex -space-x-3 overflow-hidden">
              <img
                className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover shadow-xs"
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=150&q=80"
                alt="Caregiver Professional"
              />
              <img
                className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover shadow-xs"
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=150&q=80"
                alt="Doctor Professional"
              />
              <img
                className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover shadow-xs"
                src="https://images.unsplash.com/photo-1594824813571-2b53351a774f?auto=format&fit=crop&w=150&q=80"
                alt="Medical Specialist"
              />
            </div>
            <div className="text-sm">
              <span className="font-bold text-[#0a2540] text-base">500+</span>{" "}
              <span className="text-slate-600 font-normal">
                Professionals near you
              </span>
            </div>
          </div>
        </div>

        {/* Right Column - Hero Image with Floating Badge */}
        <div className="lg:col-span-6 relative flex justify-center lg:justify-end mt-4 lg:mt-0">
          <div className="relative w-full max-w-lg lg:max-w-xl group">
            {/* Main Hero Card Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-100 border border-slate-200/60 group-hover:rotate-3 transition-all duration-200">
              <img
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=80"
                alt="Nurse caregiver supporting senior elderly patient in warm home"
                className="w-full h-[400px] sm:h-[480px] lg:h-[530px] object-cover object-center "
              />
            </div>

            {/* Floating Badge Card at Bottom Left */}
            <div className="absolute -bottom-6 left-4 sm:-left-6 z-20 bg-white/95 backdrop-blur-md p-4 sm:p-4.5 rounded-2xl shadow-[0_12px_35px_rgba(0,0,0,0.12)] border border-slate-100/90 flex items-center gap-3.5 max-w-[280px] sm:max-w-xs transition-transform duration-300 hover:scale-[1.02]">
              <div className="w-11 h-11 rounded-full bg-[#6bead7]/40 flex items-center justify-center shrink-0">
                <Heart className="w-5 h-5 text-[#006654] fill-[#006654]/20" />
              </div>
              <div>
                <h4 className="font-bold text-[#0a2540] text-sm sm:text-base leading-tight">
                  Personalized Care
                </h4>
                <p className="text-slate-500 text-xs mt-0.5 font-normal">
                  Tailored schedules for every need.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
