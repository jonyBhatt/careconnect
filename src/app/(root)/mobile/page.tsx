"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";

const slides = [
  {
    title: "Care, wherever you are",
    description:
      "Stay connected to trusted companions and get the support you need without leaving home.",
    image:
      "https://images.unsplash.com/photo-1731514836024-614e2bab04c2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    badge: "Companion care",
  },
  {
    title: "Simple scheduling, zero stress",
    description:
      "Book visits, manage care plans, and keep every step of the day feeling calm and clear.",
    image:
      "https://images.unsplash.com/photo-1758988765049-8fa5f6e7d593?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    badge: "Flexible support",
  },
  {
    title: "Your care journey starts here",
    description:
      "Create your account and step into a safer, more connected care experience in minutes.",
    image:
      "https://images.pexels.com/photos/37092473/pexels-photo-37092473.jpeg",
    badge: "Secure sign-in",
  },
] as const;

export default function MobilePage() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (activeIndex === slides.length - 1) {
      const redirectTimer = window.setTimeout(() => {
        // router.push("/auth/sign-in");
      }, 3500);

      return () => window.clearTimeout(redirectTimer);
    }

    const timer = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 4500);

    return () => window.clearTimeout(timer);
  }, [activeIndex, router]);

  const currentSlide = slides[activeIndex];

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.2),_transparent_45%),linear-gradient(135deg,_#06131f_0%,_#0f172a_55%,_#111827_100%)]  text-white sm:px-4">
      <div className="mx-auto flex min-h-dvh max-w-md flex-col overflow-hidden  border border-white/15 bg-slate-950/70 shadow-[0_30px_90px_rgba(2,6,23,0.55)] backdrop-blur-xl">
        <section className="relative flex-1 overflow-hidden">
          <img
            src={currentSlide.image}
            alt={currentSlide.title}
            className="absolute inset-0 h-full w-full object-cover transition-all duration-700"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-950/60 to-slate-950/10" />
          <div className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-slate-950/70 to-transparent" />

          {/* <div className="relative z-10 p-5 sm:p-6">
            
          </div> */}
          <div className="absolute inset-x-0 bottom-10 px-5 sm:px-6">
              <div className="rounded-[1.6rem] border border-white/15 bg-transparent p-5 shadow-2xl backdrop-blur-xl">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-200">
                  <Sparkles size={14} />
                  {currentSlide.badge}
                </div>
                <h1 className="text-2xl font-semibold leading-tight text-white sm:text-[28px]">
                  {currentSlide.title}
                </h1>
                <p className="mt-3 text-sm leading-6 text-slate-200/90 sm:text-base">
                  {currentSlide.description}
                </p>

                <button
                  type="button"
                  onClick={() => {
                    if (activeIndex === slides.length - 1) {
                      router.push("/auth/sign-in");
                    } else {
                      setActiveIndex((current) => current + 1);
                    }
                  }}
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:scale-[1.01]"
                >
                  {activeIndex === slides.length - 1
                    ? "Continue to sign in"
                    : "Next"}
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
        </section>
      </div>
    </main>
  );
}
