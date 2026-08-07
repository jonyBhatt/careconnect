"use client";

import { UploadButton } from "@/utils/uploadthing";
import { CreditCard, ScanFace, GraduationCap } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { ClientUploadedFileData } from "uploadthing/types";
import { useOnboardingStore } from "@/store/onboardingStore";
import type { DocumentKey } from "@/store/onboardingStore";

interface DocumentUploadCardProps {
  title: string;
  description: string;
  iconType: "id-front" | "id-back" | "certificate";
  documentKey: DocumentKey;
}

export function DocumentUploadCard({
  title,
  description,
  iconType,
  documentKey,
}: DocumentUploadCardProps) {
  const existingDocument = useOnboardingStore((state) => {
    switch (documentKey) {
      case "idFront":
        return state.idFront;
      case "idBack":
        return state.idBack;
      case "medicalLicense":
        return state.medicalLicense;
      case "cprCertificate":
        return state.cprCertificate;
      default:
        return undefined;
    }
  });

  const [uploadedFileUrl, setUploadedFileUrl] = useState<string | null>(
    existingDocument?.url ?? null,
  );
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(
    existingDocument?.fileName ?? null,
  );

  const setIdFront = useOnboardingStore((state) => state.setIdFront);
  const setIdBack = useOnboardingStore((state) => state.setIdBack);
  const setMedicalLicense = useOnboardingStore((state) => state.setMedicalLicense);
  const setCprCertificate = useOnboardingStore((state) => state.setCprCertificate);

  const handleUploadComplete = (
    res: ClientUploadedFileData<{
      uploadedBy: string | undefined;
    }>[],
  ) => {
    const result = Array.isArray(res) ? res[0] : res;
    const url = result?.ufsUrl;
    const fileName = result?.name;

    if (!url) {
      toast.error("Upload failed. Please try again.");
      return;
    }

    const payload = {
      url,
      fileName: fileName ?? "Uploaded document",
      uploadedAt: new Date().toISOString(),
    };

    switch (documentKey) {
      case "idFront":
        setIdFront(payload);
        break;
      case "idBack":
        setIdBack(payload);
        break;
      case "medicalLicense":
        setMedicalLicense(payload);
        break;
      case "cprCertificate":
        setCprCertificate(payload);
        break;
      default:
        break;
    }

    setUploadedFileUrl(url);
    setUploadedFileName(payload.fileName);
  };

  const renderIcon = () => {
    if (iconType === "id-front") {
      return (
        <CreditCard
          className="w-6 h-6 text-secondary-foreground"
          aria-hidden="true"
        />
      );
    }

    if (iconType === "id-back") {
      return (
        <ScanFace
          className="w-6 h-6 text-secondary-foreground"
          aria-hidden="true"
        />
      );
    }

    return (
      <GraduationCap
        className="w-6 h-6 text-secondary-foreground"
        aria-hidden="true"
      />
    );
  };

  return (
    <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
      <div className="flex items-start gap-4 mb-6">
        <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
          {renderIcon()}
        </div>
        <div>
          <h2 className="text-lg font-semibold text-foreground">{title}</h2>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>

      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          handleUploadComplete(res);
        }}
        onUploadError={(error: Error) => {
          toast.error(`ERROR! ${error.message}`);
        }}
      />

      {uploadedFileUrl ? (
        <div className="mt-6 rounded-2xl border border-border bg-muted p-4">
          <p className="text-sm font-medium text-foreground mb-3">Preview</p>
          <div className="overflow-hidden rounded-2xl border border-border bg-black/5">
            <Image
              src={uploadedFileUrl}
              alt={`${title} preview`}
              width={700}
              height={200}
              className="object-contain"
              sizes="100vw"
            />
          </div>
          {uploadedFileName ? (
            <p className="mt-3 text-xs text-muted-foreground">
              {uploadedFileName}
            </p>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

// <div
//   className={`relative w-full rounded-xl border-2 border-dashed transition-colors p-8 flex flex-col items-center justify-center text-center cursor-pointer
//     ${isDragging ? 'border-primary bg-primary/5' : 'border-border bg-muted/20 hover:bg-muted/40'}
//   `}
//   onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
//   onDragLeave={() => setIsDragging(false)}
//   onDrop={(e) => { e.preventDefault(); setIsDragging(false); /* Handle file drop */ }}
//   role="button"
//   tabIndex={0}
//   aria-label={`Upload ${title}`}
// >
//   <div className="w-12 h-12 bg-background border border-border rounded-lg shadow-sm flex items-center justify-center mb-3">
//      <UploadCloud className="w-6 h-6 text-muted-foreground" aria-hidden="true" />
//   </div>
//   <span className="text-foreground font-medium mb-1">Click or drag to upload</span>
//   <span className="text-xs text-muted-foreground">PNG, JPG or PDF up to 10MB</span>

//   {/* Hidden file input for a11y and standard click behavior */}
//   <input
//     type="file"
//     className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//     accept=".png,.jpg,.jpeg,.pdf"
//     aria-hidden="true"
//     tabIndex={-1}
//   />
// </div>


//0cvynnbti3.ufs.sh