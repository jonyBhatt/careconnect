"use client";

import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function VerifyHeader({ showBack = true }: { showBack?: boolean }) {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-10 w-full bg-background border-b border-border shadow-2xs">
      <div className="max-w-2xl mx-auto flex items-center h-16 px-4 gap-4">
        {showBack && (
          <button
            onClick={() => router.back()}
            className="p-2 -ml-2 rounded-full hover:bg-muted text-primary transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring"
            aria-label="Go back to the previous step"
          >
            <ArrowLeft className="w-6 h-6" aria-hidden="true" />
          </button>
        )}
        <div className="text-xl font-bold text-primary tracking-tight" aria-hidden="true">
          CareConnect
        </div>
      </div>
    </header>
  );
}