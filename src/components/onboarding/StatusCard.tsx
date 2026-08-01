
import { Clock, IdCard, Award } from 'lucide-react';

interface StatusCardProps {
  title: string;
  description: string;
  iconType: 'identity' | 'certifications';
}

export function StatusCard({ title, description, iconType }: StatusCardProps) {
  return (
    <div className="bg-secondary/30 border border-border rounded-xl p-5 flex flex-col gap-3">
      <div className="flex justify-between items-start">
        <div className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center shadow-sm">
          {iconType === 'identity' ? (
            <IdCard className="w-5 h-5 text-primary" aria-hidden="true" />
          ) : (
            <Award className="w-5 h-5 text-primary" aria-hidden="true" />
          )}
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1 bg-background border border-border rounded-full text-sm text-muted-foreground shadow-sm">
          <Clock className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Pending</span>
        </div>
      </div>
      
      <div>
        <h3 className="text-base font-semibold text-foreground mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}