"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { UserCircle, HeartHandshake } from "lucide-react";

type Role = "patient" | "caregiver" | null;

export function RoleSelectionForm() {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<Role>(null);
  const [isNavigating, setIsNavigating] = useState(false);

  const handleContinue = () => {
    if (!selectedRole) return;
    setIsNavigating(true);

    if (selectedRole === "patient") {
      router.push("/dashboard/patient");
      return;
    }

    router.push("/onboard/companion/verify/identity");
  };

  return (
    <div className="flex flex-col space-y-8">
      {/* Accessible Radio Group */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
        role="radiogroup"
        aria-label="Select your role"
      >
        {/* Patient Card */}
        <button
          type="button"
          role="radio"
          aria-checked={selectedRole === "patient"}
          onClick={() => setSelectedRole("patient")}
          className={`
            relative flex flex-col items-center p-6 md:p-8 rounded-xl border-2 transition-all duration-200 text-left
            focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring
            ${
              selectedRole === "patient"
                ? "border-primary bg-accent/20 shadow-md"
                : "border-border bg-background hover:border-primary hover:shadow-sm"
            }
          `}
        >
          <UserCircle
            className={`w-12 h-12 mb-4 ${selectedRole === "patient" ? "text-primary" : "text-muted-foreground"}`}
            aria-hidden="true"
          />
          <h2 className="text-xl font-bold text-foreground mb-2">
            I am a Patient
          </h2>
          <p className="text-muted-foreground text-center text-base">
            I want to manage my own health, appointments, and medications.
          </p>
        </button>

        {/* Caregiver Card */}
        <button
          type="button"
          role="radio"
          aria-checked={selectedRole === "caregiver"}
          onClick={() => setSelectedRole("caregiver")}
          className={`
            relative flex flex-col items-center p-6 md:p-8 rounded-xl border-2 transition-all duration-200 text-left
            focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring
            ${
              selectedRole === "caregiver"
                ? "border-primary bg-accent/20 shadow-md"
                : "border-border bg-background hover:border-primary hover:shadow-sm"
            }
          `}
        >
          <HeartHandshake
            className={`w-12 h-12 mb-4 ${selectedRole === "caregiver" ? "text-primary" : "text-muted-foreground"}`}
            aria-hidden="true"
          />
          <h2 className="text-xl font-bold text-foreground mb-2">
            I am a Caregiver
          </h2>
          <p className="text-muted-foreground text-center text-base">
            I am managing care, appointments, and records for someone else.
          </p>
        </button>
      </div>

      {/* Action Area */}
      <div className="pt-4 border-t border-border flex justify-end">
        <button
          onClick={handleContinue}
          disabled={!selectedRole || isNavigating}
          aria-disabled={!selectedRole || isNavigating}
          className="w-full md:w-auto px-8 py-4 bg-primary text-primary-foreground text-lg font-bold rounded-xl shadow-sm transition-all hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isNavigating ? "Loading..." : "Continue to Setup"}
        </button>
      </div>
    </div>
  );
}
