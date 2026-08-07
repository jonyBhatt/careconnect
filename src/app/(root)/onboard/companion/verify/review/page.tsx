"use client";

import { useMemo, useState } from "react";
import { useOnboardingStore } from "@/store/onboardingStore";
import { ExploreCard } from "@/components/onboarding/ExploreCard";
import { StatusCard } from "@/components/onboarding/StatusCard";
import { VerifyHeader } from "@/components/onboarding/VerifyHeader";
import { Check, LayoutGrid } from "lucide-react";
import { toast } from "react-hot-toast";

export default function ReviewStepPage() {
  const {
    idFront,
    idBack,
    selfie,
    medicalLicense,
    cprCertificate,
    clearOnboardingDocuments,
  } = useOnboardingStore();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  const documentList = useMemo(
    () => [
      { label: "ID Front", doc: idFront },
      { label: "ID Back", doc: idBack },
      { label: "Selfie", doc: selfie },
      { label: "Medical License", doc: medicalLicense },
      { label: "CPR Certificate", doc: cprCertificate },
    ],
    [idFront, idBack, selfie, medicalLicense, cprCertificate],
  );

  const isComplete =
    !!idFront?.url &&
    !!idBack?.url &&
    !!selfie?.url &&
    !!medicalLicense?.url &&
    !!cprCertificate?.url;

  const handleSubmit = async () => {
    if (!isComplete) {
      setSubmissionError(
        "Please complete all uploads before submitting your application.",
      );
      return;
    }

    setIsSubmitting(true);
    setSubmissionError(null);

    try {
      const response = await fetch("/api/onboarding/submit-documents", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idFront,
          idBack,
          selfie,
          medicalLicense,
          cprCertificate,
        }),
      });

      const result = await response.json();

      if (!response.ok || result.error) {
        throw new Error(result.error ?? "Failed to submit documents.");
      }

      setSubmissionSuccess(true);
      clearOnboardingDocuments();
      toast.success("Your verification documents were submitted successfully.");
    } catch (error) {
      setSubmissionError(
        error instanceof Error ? error.message : "Unable to submit application.",
      );
      toast.error("Unable to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground flex flex-col">
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

        <section className="space-y-4 rounded-3xl border border-border bg-card p-6 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold text-foreground">
                Review your uploaded documents
              </h2>
              <p className="text-sm text-muted-foreground">
                All uploaded files will be stored and submitted when you press
                Submit Application.
              </p>
            </div>
            <div className="rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">
              {isComplete ? "All files ready" : "Uploads missing"}
            </div>
          </div>

          <div className="grid gap-3">
            {documentList.map(({ label, doc }) => (
              <div
                key={label}
                className="rounded-2xl border border-border bg-background p-4"
              >
                <p className="text-sm text-muted-foreground">{label}</p>
                <p className="font-medium text-foreground mt-1">
                  {doc?.fileName ?? "No file uploaded"}
                </p>
                {doc?.url ? (
                  <a
                    href={doc.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-block text-sm text-primary hover:underline"
                  >
                    View file
                  </a>
                ) : null}
              </div>
            ))}
          </div>
        </section>

        {submissionError ? (
          <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive">
            {submissionError}
          </div>
        ) : null}

        <button
          disabled={!isComplete || isSubmitting || submissionSuccess}
          onClick={handleSubmit}
          className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-medium flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Submitting..." : submissionSuccess ? "Submitted" : "Submit Application"}
        </button>

        <ExploreCard />

        <section className="flex flex-col items-center gap-3 pt-4 pb-8 mt-auto">
          <button
            disabled={!submissionSuccess}
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
