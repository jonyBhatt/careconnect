import { ExploreCard } from "@/components/onboarding/ExploreCard";
import { StatusCard } from "@/components/onboarding/StatusCard";

import { VerifyHeader } from "@/components/onboarding/VerifyHeader";

import { Check, LayoutGrid } from "lucide-react";

export default function ReviewStepPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground flex flex-col">
      {/* Hide back button on the success page to prevent re-submission errors */}
      <VerifyHeader showBack={false} />

      <main
        className="flex-1 w-full max-w-2xl mx-auto px-4 py-8 flex flex-col gap-8"
        aria-live="polite"
      >
        {/* Completed Progress Bar */}
        <div className="flex gap-2 w-full" aria-label="Progress: Completed">
          <div className="h-2 flex-1 bg-primary rounded-full" />
          <div className="h-2 flex-1 bg-primary rounded-full" />
          <div className="h-2 flex-1 bg-primary rounded-full" />
        </div>

        <section className="flex flex-col items-center text-center space-y-4">
          <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-md mb-2">
            <Check
              className="w-10 h-10 text-primary-foreground"
              aria-hidden="true"
              strokeWidth={3}
            />
          </div>
          <h1 className="text-3xl font-bold text-foreground tracking-tight">
            Application Under Review
          </h1>
          <p className="text-base text-muted-foreground max-w-md mx-auto">
            Thank you for applying. Our team will verify your documents and get
            back to you within 24-48 hours.
          </p>
        </section>

        <section className="space-y-4">
          <StatusCard
            title="Identity Verification"
            description="Government ID and background check processing."
            iconType="identity"
          />
          <StatusCard
            title="Professional Certifications"
            description="Medical credentials and liability insurance review."
            iconType="certifications"
          />
        </section>

        <ExploreCard />

        <section className="flex flex-col items-center gap-3 pt-4 pb-8 mt-auto">
          <button
            disabled
            className="w-full py-4 rounded-xl bg-muted text-muted-foreground font-medium flex items-center justify-center gap-2 cursor-not-allowed border border-border"
          >
            <LayoutGrid className="w-5 h-5" aria-hidden="true" />
            Go to Dashboard
          </button>
          <p className="text-sm italic text-muted-foreground text-center">
            Dashboard will unlock once verification is complete.
          </p>
        </section>
      </main>
    </div>
  );
}
