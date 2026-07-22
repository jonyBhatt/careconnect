"use client";

import Link from "next/link";
import {
  Heart,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Award,
  CheckCircle2,
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#031538] text-white relative overflow-hidden pt-16 pb-12 border-t border-[#092965]">
      {/* Background Soft Mesh Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Top Newsletter / Highlight Banner */}
        <div className="bg-[#062157] border border-[#0d3685] rounded-3xl p-6 sm:p-10 mb-16 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6bead7]/20 text-[#3edbdf] text-xs font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Stay Informed</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Subscribe for Care Updates & News
            </h3>
            <p className="text-blue-100/70 text-sm sm:text-base font-normal">
              Get clinical health tips, caregiver insights, and service updates
              delivered straight to your inbox.
            </p>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto min-w-[320px] sm:min-w-[420px]"
          >
            <input
              type="email"
              placeholder="Enter your email address..."
              className="px-5 py-3.5 rounded-full bg-[#031538] border border-[#14429e] text-white placeholder:text-blue-200/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#3edbdf] w-full"
              required
            />
            <button
              type="submit"
              className="px-6 py-3.5 rounded-full bg-[#00a884] hover:bg-[#008f70] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all duration-200 active:scale-95 shrink-0 cursor-pointer"
            >
              <span>Subscribe</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#0a2f77]">
          {/* Brand Info (Cols 1-2) */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-2xl bg-[#00a884] flex items-center justify-center shadow-lg shadow-teal-500/20 group-hover:scale-105 transition-transform">
                <Heart className="w-5 h-5 text-white fill-white/20" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                Care<span className="text-[#3edbdf]">Connect</span>
              </span>
            </Link>

            <p className="text-blue-100/75 text-sm sm:text-base leading-relaxed max-w-sm font-normal">
              Connecting patients and families with verified, compassionate care
              companions for medication pickup, in-home support, and reliable
              transportation.
            </p>

            {/* Emergency Line Badge */}
            <div className="p-4 rounded-2xl bg-[#062157] border border-[#0d3685] inline-flex items-center gap-3.5 max-w-xs">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-[#3edbdf]" />
              </div>
              <div>
                <span className="text-xs text-blue-200/70 block uppercase font-medium tracking-wider">
                  24/7 Care Helpline
                </span>
                <span className="text-base font-bold text-white tracking-wide">
                  +1 (800) 555-CARE
                </span>
              </div>
            </div>
          </div>

          {/* Column 1: Services */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white tracking-wide uppercase text-xs text-[#3edbdf]">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-sm text-blue-100/80 font-normal">
              <li>
                <Link
                  href="/services/meds-pickup"
                  className="hover:text-white transition-colors"
                >
                  Meds Pickup & Delivery
                </Link>
              </li>
              <li>
                <Link
                  href="/services/in-home-support"
                  className="hover:text-white transition-colors"
                >
                  In-Home Companion Support
                </Link>
              </li>
              <li>
                <Link
                  href="/services/transport"
                  className="hover:text-white transition-colors"
                >
                  Medical Transport
                </Link>
              </li>
              <li>
                <Link
                  href="/services/post-surgery"
                  className="hover:text-white transition-colors"
                >
                  Post-Surgery Care
                </Link>
              </li>
              <li>
                <Link
                  href="/services/respite-care"
                  className="hover:text-white transition-colors"
                >
                  Respite Family Care
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: For Companions */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white tracking-wide uppercase text-xs text-[#3edbdf]">
              For Companions
            </h4>
            <ul className="space-y-2.5 text-sm text-blue-100/80 font-normal">
              <li>
                <Link
                  href="/join-companion"
                  className="hover:text-white transition-colors"
                >
                  Become a Caregiver
                </Link>
              </li>
              <li>
                <Link
                  href="/payout-structure"
                  className="hover:text-white transition-colors"
                >
                  60/40 Revenue Payouts
                </Link>
              </li>
              <li>
                <Link
                  href="/verification-process"
                  className="hover:text-white transition-colors"
                >
                  Verification Guidelines
                </Link>
              </li>
              <li>
                <Link
                  href="/safety-protocols"
                  className="hover:text-white transition-colors"
                >
                  Clinical Safety Protocols
                </Link>
              </li>
              <li>
                <Link
                  href="/companion-app"
                  className="hover:text-white transition-colors"
                >
                  Companion Mobile App
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white tracking-wide uppercase text-xs text-[#3edbdf]">
              Company & Safety
            </h4>
            <ul className="space-y-2.5 text-sm text-blue-100/80 font-normal">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About CareConnect
                </Link>
              </li>
              <li>
                <Link
                  href="/clinical-board"
                  className="hover:text-white transition-colors"
                >
                  Clinical Advisory Board
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="hover:text-white transition-colors"
                >
                  Careers & Hiring
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance Badges */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-200/60 font-normal">
          <p>© {new Date().getFullYear()} CareConnect Inc. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 text-blue-200/80">
              <ShieldCheck className="w-4 h-4 text-[#3edbdf]" />
              <span>HIPAA Compliant</span>
            </div>
            <div className="flex items-center gap-1.5 text-blue-200/80">
              <Award className="w-4 h-4 text-[#00a884]" />
              <span>Verified Clinical Network</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
