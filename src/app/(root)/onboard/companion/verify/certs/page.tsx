
import { VerifyHeader } from '@/components/onboarding/VerifyHeader';
import { NavigationFooter } from '@/components/onboarding/NavigationFooter';
import { ProgressStepper } from '@/components/onboarding/ProgressStepper';
import { DocumentUploadCard } from '@/components/onboarding/DocumentUploadCard';

export default function CertsStepPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground flex flex-col">
      <VerifyHeader />

      <main className="flex-1 w-full max-w-2xl mx-auto p-4 md:p-8 flex flex-col gap-8">
        <section aria-labelledby="page-title">
          <h1 id="page-title" className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Professional Certifications
          </h1>
          <p className="text-base text-muted-foreground">
            Upload your medical credentials, CPR certification, and liability insurance to build trust with families.
          </p>
        </section>

        <ProgressStepper currentStep={2} />

        <section className="space-y-6">
          <DocumentUploadCard 
            title="Medical License / Degree" 
            description="Upload your primary healthcare certification." 
            iconType="id-front" 
          />
          <DocumentUploadCard 
            title="CPR / First Aid Certificate" 
            description="Must be valid for at least the next 6 months." 
            iconType="id-back" 
          />
        </section>
      </main>

      {/* Routes to Final Review Page */}
      <NavigationFooter 
        nextRoute="/onboard/companion/verify/review" 
        backRoute="/onboard/companion/verify/identity"
        nextLabel="Submit Application" 
      />
    </div>
  );
}