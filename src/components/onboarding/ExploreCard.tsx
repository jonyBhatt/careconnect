// components/review/ExploreCard.tsx
import Image from 'next/image';

export function ExploreCard() {
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm flex flex-col mt-4">
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2">Almost there!</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          While you wait, you can explore the dashboard tutorials and complete your companion bio to stand out to families.
        </p>
      </div>
      
      {/* 
        Image placeholder container. 
        In production, replace with Next.js <Image /> pointing to your actual asset.
      */}
      <div className="w-full h-48 bg-muted relative border-t border-border">
        {/* Example production implementation:
        <Image 
          src="/images/dashboard-tutorial-preview.jpg" 
          alt="Preview of the companion dashboard interface" 
          fill 
          className="object-cover"
        /> 
        */}
        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm">
          [ Dashboard Tutorial Image ]
        </div>
      </div>
    </div>
  );
}