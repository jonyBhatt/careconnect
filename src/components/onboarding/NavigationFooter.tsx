// components/onboarding/NavigationFooter.tsx
"use client";

import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface NavigationFooterProps {
  nextRoute: string;
  backRoute?: string; // Optional: If omitted, uses router.back()
  nextLabel?: string;
}

export function NavigationFooter({ nextRoute, backRoute, nextLabel = "Continue" }: NavigationFooterProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNext = () => {
    setIsSubmitting(true);
    // In a real app, you would validate form state here before pushing
    router.push(nextRoute);
  };

  const handleBack = () => {
    if (backRoute) {
      router.push(backRoute);
    } else {
      router.back();
    }
  };

  return (
    <footer className="sticky bottom-0 z-10 w-full bg-background border-t border-border pb-safe mt-auto">
      <div className="max-w-2xl mx-auto p-4 md:p-6 flex flex-col gap-4">
        <button
          type="button"
          onClick={handleBack}
          disabled={isSubmitting}
          className="w-full py-4 rounded-xl border border-border bg-background text-foreground font-medium hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring disabled:opacity-50"
        >
          Back
        </button>

        <button
          type="button"
          onClick={handleNext}
          disabled={isSubmitting}
          className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-medium flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring disabled:opacity-50"
        >
          {isSubmitting ? 'Loading...' : nextLabel}
          {!isSubmitting && <ArrowRight className="w-5 h-5" aria-hidden="true" />}
        </button>
      </div>
    </footer>
  );
}