import { VerifyHeader } from "@/components/onboarding/VerifyHeader";
import { NavigationFooter } from "@/components/onboarding/NavigationFooter";
import { ProgressStepper } from "@/components/onboarding/ProgressStepper";
import { DocumentUploadCard } from "@/components/onboarding/DocumentUploadCard";
import { SelfieVerificationCard } from "@/components/onboarding/SelfieVerificationCard";

export default function IdentityStepPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground flex flex-col">
      <VerifyHeader />

      <main className="flex-1 w-full max-w-2xl mx-auto p-4 md:p-8 flex flex-col gap-8">
        <section aria-labelledby="page-title">
          <h1
            id="page-title"
            className="text-3xl md:text-4xl font-bold text-foreground mb-3"
          >
            Identity Verification
          </h1>
          <p className="text-base text-muted-foreground">
            To ensure the safety of our patients, we require all companions to
            verify their identity with a government-issued document.
          </p>
        </section>

        <ProgressStepper currentStep={1} />

        <section className="space-y-6">
          <DocumentUploadCard
            title="National ID Card (Front)"
            description="Ensure all details are clearly legible."
            iconType="id-front"
            documentKey="idFront"
          />
          <DocumentUploadCard
            title="National ID Card (Back)"
            description="Capture the back containing security features."
            iconType="id-back"
            documentKey="idBack"
          />
          <SelfieVerificationCard />
        </section>
      </main>

      {/* Routes to Step 2 */}
      <NavigationFooter nextRoute="/onboard/companion/verify/certs" />
    </div>
  );
}
