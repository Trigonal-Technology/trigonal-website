import React from 'react';
import { cn } from '@/lib/utils';

interface StatusBadgeProps {
  label: string;
  color?: 'blue' | 'orange' | 'emerald' | 'purple' | 'pink' | 'indigo' | 'teal';
}

export const StatusBadge = ({ label, color = 'blue' }: StatusBadgeProps) => {
  // Map background colors to corresponding text colors
  const colorMap: Record<string, { bg: string; text: string }> = {
    blue: { bg: 'bg-blue-500', text: 'text-blue-400' },
    orange: { bg: 'bg-orange-500', text: 'text-orange-400' },
    emerald: { bg: 'bg-emerald-500', text: 'text-emerald-400' },
    purple: { bg: 'bg-purple-500', text: 'text-purple-400' },
    pink: { bg: 'bg-pink-500', text: 'text-pink-400' },
    indigo: { bg: 'bg-indigo-500', text: 'text-indigo-400' },
    teal: { bg: 'bg-teal-500', text: 'text-teal-400' },
  };
  
  const theme = colorMap[color] || colorMap.blue;
  
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/50 border border-slate-700 backdrop-blur-sm">
      <div className={cn("w-2 h-2 rounded-full animate-pulse", theme.bg)} />
      <span className={cn("font-mono text-xs font-bold tracking-wider", theme.text)}>
        {label}
      </span>
    </div>
  );
};
