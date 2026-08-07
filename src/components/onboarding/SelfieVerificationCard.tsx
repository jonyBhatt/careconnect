"use client";

import { useState } from "react";
import { Smile, Sun, Glasses, SmileIcon, UserRound } from "lucide-react";
import { UploadButton } from "@/utils/uploadthing";
import Image from "next/image";
import { ClientUploadedFileData } from "uploadthing/types";
import { useOnboardingStore, type OnboardingDocumentsState } from "@/store/onboardingStore";

export function SelfieVerificationCard() {
  const [selfieUrl, setSelfieUrl] = useState<string | null>(null);
  const setSelfie = useOnboardingStore(
    (state: OnboardingDocumentsState) => state.setSelfie,
  );

  const handleUploadComplete = (res: ClientUploadedFileData<{
      uploadedBy: string | undefined;
    }>[]) => {
    const result = Array.isArray(res) ? res[0] : res;
    const url = result?.ufsUrl;
    const fileName = result?.name;

    if (!url) {
      return;
    }

    const payload = {
      url,
      fileName: fileName ?? "Uploaded selfie",
      uploadedAt: new Date().toISOString(),
    };

    setSelfie(payload);
    setSelfieUrl(url);
  };

  return (
    <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
      <div className="flex items-start gap-4 mb-8">
        <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
          <SmileIcon
            className="w-6 h-6 text-secondary-foreground"
            aria-hidden="true"
          />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-foreground">
            Upload your profile image 
          </h2>
          <p className="text-sm text-muted-foreground">
            Used to match your face with the ID document.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center mb-8">
        <div className="relative w-72 h-72 rounded-full border-4 border-dashed border-border bg-muted/10  flex  justify-center overflow-hidden">
          {selfieUrl ? (
            <Image
              src={selfieUrl}
              alt="Uploaded selfie preview"
              fill
              className="rounded-full object-cover"
              sizes="100vw"
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-center gap-4">
              <UserRound
                className="w-16 h-16 text-muted-foreground"
                aria-hidden="true"
              />
            </div>
          )}

          <div className="absolute inset-x-0 bottom-6 flex justify-center">
            <UploadButton
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                handleUploadComplete(res);
              }}
              onUploadError={(error: Error) => {
                alert(`ERROR! ${error.message}`);
              }}
            ></UploadButton>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-medium text-foreground">
          Tips for a fast approval:
        </h3>
        <ul className="space-y-3" aria-label="Selfie tips">
          <li className="flex items-center gap-3 text-sm text-muted-foreground">
            <Sun
              className="w-5 h-5 text-secondary-foreground shrink-0"
              aria-hidden="true"
            />
            Good lighting (natural light is best)
          </li>
          <li className="flex items-center gap-3 text-sm text-muted-foreground">
            <Glasses
              className="w-5 h-5 text-secondary-foreground shrink-0"
              aria-hidden="true"
            />
            No hats or sunglasses
          </li>
          <li className="flex items-center gap-3 text-sm text-muted-foreground">
            <Smile
              className="w-5 h-5 text-secondary-foreground shrink-0"
              aria-hidden="true"
            />
            Neutral expression
          </li>
        </ul>
      </div>
    </div>
  );
}
