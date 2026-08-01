import { RoleSelectionForm } from "@/components/form/RoleSelectionForm";


export default function OnboardingRolePage() {
  return (
    <div className="relative min-h-dvh overflow-hidden bg-background p-4 md:p-8">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animated-gradient-orb animated-gradient-orb-one" />
        <div className="animated-gradient-orb animated-gradient-orb-two" />
        <div className="animated-gradient-orb animated-gradient-orb-three" />
      </div>

      <main 
        className="relative z-10 mx-auto flex min-h-dvh w-full max-w-3xl flex-col items-center justify-center space-y-8"
        aria-labelledby="onboarding-title"
      >
        <div className="text-center space-y-4">
          <h1 
            id="onboarding-title"
            className="text-3xl md:text-5xl font-serif font-bold text-foreground tracking-tight"
          >
            Welcome to CareConnect
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
            To give you the best experience, please tell us how you will be using the application.
          </p>
        </div>

        <div className="w-full bg-card p-6 md:p-10 rounded-2xl shadow-lg border border-border">
          <RoleSelectionForm />
        </div>
      </main>
    </div>
  );
}