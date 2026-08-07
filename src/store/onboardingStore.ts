import { create } from "zustand";

export type DocumentUploadData = {
  url: string;
  fileName?: string;
  uploadedAt?: string;
};

export type DocumentKey =
  | "idFront"
  | "idBack"
  | "selfie"
  | "medicalLicense"
  | "cprCertificate";

export interface OnboardingDocumentsState {
  idFront?: DocumentUploadData;
  idBack?: DocumentUploadData;
  selfie?: DocumentUploadData;
  medicalLicense?: DocumentUploadData;
  cprCertificate?: DocumentUploadData;
  setIdFront: (payload: DocumentUploadData) => void;
  setIdBack: (payload: DocumentUploadData) => void;
  setSelfie: (payload: DocumentUploadData) => void;
  setMedicalLicense: (payload: DocumentUploadData) => void;
  setCprCertificate: (payload: DocumentUploadData) => void;
  clearOnboardingDocuments: () => void;
}

export const useOnboardingStore = create<OnboardingDocumentsState>((set) => ({
  idFront: undefined,
  idBack: undefined,
  selfie: undefined,
  medicalLicense: undefined,
  cprCertificate: undefined,
  setIdFront: (payload) => set({ idFront: { ...payload } }),
  setIdBack: (payload) => set({ idBack: { ...payload } }),
  setSelfie: (payload) => set({ selfie: { ...payload } }),
  setMedicalLicense: (payload) => set({ medicalLicense: { ...payload } }),
  setCprCertificate: (payload) => set({ cprCertificate: { ...payload } }),
  clearOnboardingDocuments: () =>
    set({
      idFront: undefined,
      idBack: undefined,
      selfie: undefined,
      medicalLicense: undefined,
      cprCertificate: undefined,
    }),
}));
