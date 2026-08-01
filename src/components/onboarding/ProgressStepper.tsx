export function ProgressStepper({ currentStep }: { currentStep: number }) {
  const steps = [
    { num: 1, label: 'Identity' },
    { num: 2, label: 'Certs' },
    { num: 3, label: 'Final' },
  ];

  return (
    <div className="flex items-center justify-center w-full py-4" aria-label="Progress">
      {steps.map((step, index) => (
        <div key={step.num} className="flex items-center">
          <div className="flex flex-col items-center gap-2">
            <div 
              className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm border-2 transition-colors
                ${currentStep === step.num 
                  ? 'bg-primary border-primary text-primary-foreground' 
                  : currentStep > step.num 
                    ? 'bg-primary border-primary text-primary-foreground' 
                    : 'bg-background border-border text-muted-foreground'
                }`}
              aria-current={currentStep === step.num ? "step" : undefined}
            >
              {step.num}
            </div>
            <span className={`text-xs font-medium ${currentStep === step.num ? 'text-primary' : 'text-muted-foreground'}`}>
              {step.label}
            </span>
          </div>
          
          {/* Connector Line */}
          {index < steps.length - 1 && (
            <div className={`w-16 md:w-32 h-0.5 mx-2 -mt-6 ${currentStep > step.num ? 'bg-primary' : 'bg-border'}`} aria-hidden="true" />
          )}
        </div>
      ))}
    </div>
  );
}