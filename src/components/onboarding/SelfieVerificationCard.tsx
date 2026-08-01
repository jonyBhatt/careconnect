"use client";

import { Smile, Sun, Glasses, SmileIcon, UserRound } from 'lucide-react';

export function SelfieVerificationCard() {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
      <div className="flex items-start gap-4 mb-8">
        <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
          <SmileIcon className="w-6 h-6 text-secondary-foreground" aria-hidden="true" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-foreground">Live Selfie Verification</h2>
          <p className="text-sm text-muted-foreground">Used to match your face with the ID document.</p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mb-8">
        <div className="relative w-64 h-64 rounded-full border-4 border-dashed border-border bg-muted/10 flex flex-col items-center justify-center p-6">
          <UserRound className="w-16 h-16 text-muted-foreground mb-4" aria-hidden="true" />
          <button 
            type="button"
            className="px-6 py-2.5 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring"
          >
            Open Camera
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-medium text-foreground">Tips for a fast approval:</h3>
        <ul className="space-y-3" aria-label="Selfie tips">
          <li className="flex items-center gap-3 text-sm text-muted-foreground">
            <Sun className="w-5 h-5 text-secondary-foreground shrink-0" aria-hidden="true" />
            Good lighting (natural light is best)
          </li>
          <li className="flex items-center gap-3 text-sm text-muted-foreground">
            <Glasses className="w-5 h-5 text-secondary-foreground shrink-0" aria-hidden="true" />
            No hats or sunglasses
          </li>
          <li className="flex items-center gap-3 text-sm text-muted-foreground">
            {/* Note: FaceSmile might not be standard in all lucide versions, Smile is a safe fallback */}
            <Smile className="w-5 h-5 text-secondary-foreground shrink-0" aria-hidden="true" />
            Neutral expression
          </li>
        </ul>
      </div>
    </div>
  );
}