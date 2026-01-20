import React from 'react';
import { cn } from '@/lib/utils';

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  variant?: 'white' | 'slate' | 'dark';
  border?: boolean;
};

export const Section = ({ children, className, variant = 'white', border = true }: SectionProps) => {
  const variants = {
    white: 'bg-white',
    slate: 'bg-slate-50',
    dark: 'bg-slate-900 text-white',
  };

  return (
    <section className={cn(
      "py-20 md:py-24", // Standardized vertical rhythm
      variants[variant],
      border && variant !== 'dark' ? "border-b border-slate-200" : "",
      border && variant === 'dark' ? "border-b border-slate-800" : "",
      className
    )}>
      <div className="max-w-7xl mx-auto px-6">
        {children}
      </div>
    </section>
  );
};
