"use client";

import { CreditCard, ScanFace, UploadCloud } from 'lucide-react';
import { useState } from 'react';

interface DocumentUploadCardProps {
  title: string;
  description: string;
  iconType: 'id-front' | 'id-back';
}

export function DocumentUploadCard({ title, description, iconType }: DocumentUploadCardProps) {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
      <div className="flex items-start gap-4 mb-6">
        <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
          {iconType === 'id-front' ? (
             <CreditCard className="w-6 h-6 text-secondary-foreground" aria-hidden="true" />
          ) : (
             <ScanFace className="w-6 h-6 text-secondary-foreground" aria-hidden="true" />
          )}
        </div>
        <div>
          <h2 className="text-lg font-semibold text-foreground">{title}</h2>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>

      <div 
        className={`relative w-full rounded-xl border-2 border-dashed transition-colors p-8 flex flex-col items-center justify-center text-center cursor-pointer
          ${isDragging ? 'border-primary bg-primary/5' : 'border-border bg-muted/20 hover:bg-muted/40'}
        `}
        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(e) => { e.preventDefault(); setIsDragging(false); /* Handle file drop */ }}
        role="button"
        tabIndex={0}
        aria-label={`Upload ${title}`}
      >
        <div className="w-12 h-12 bg-background border border-border rounded-lg shadow-sm flex items-center justify-center mb-3">
           <UploadCloud className="w-6 h-6 text-muted-foreground" aria-hidden="true" />
        </div>
        <span className="text-foreground font-medium mb-1">Click or drag to upload</span>
        <span className="text-xs text-muted-foreground">PNG, JPG or PDF up to 10MB</span>
        
        {/* Hidden file input for a11y and standard click behavior */}
        <input 
          type="file" 
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
          accept=".png,.jpg,.jpeg,.pdf"
          aria-hidden="true"
          tabIndex={-1}
        />
      </div>
    </div>
  );
}