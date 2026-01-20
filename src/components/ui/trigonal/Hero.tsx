import React from 'react';
import { cn } from '@/lib/utils';

interface HeroProps {
  badge?: string;
  badgeColor?: 'emerald' | 'orange' | 'blue' | 'purple' | 'pink' | 'indigo';
  title: React.ReactNode;
  subtitle: string;
  children?: React.ReactNode; // For buttons/tickers
  className?: string;
}

export const Hero = ({ badge, badgeColor = 'blue', title, subtitle, children, className }: HeroProps) => {
  // Map for dynamic colors (Tailwind needs full classes to purge correctly)
  const colors: Record<string, { badgeBorder: string; badgeBg: string; text: string }> = {
    emerald: { badgeBorder: 'border-emerald-500', badgeBg: 'bg-emerald-500/10', text: 'text-emerald-400' },
    orange: { badgeBorder: 'border-orange-500', badgeBg: 'bg-orange-500/10', text: 'text-orange-400' },
    blue: { badgeBorder: 'border-blue-500', badgeBg: 'bg-blue-500/10', text: 'text-blue-400' },
    purple: { badgeBorder: 'border-purple-500', badgeBg: 'bg-purple-500/10', text: 'text-purple-400' },
    pink: { badgeBorder: 'border-pink-500', badgeBg: 'bg-pink-500/10', text: 'text-pink-400' },
    indigo: { badgeBorder: 'border-indigo-500', badgeBg: 'bg-indigo-500/10', text: 'text-indigo-400' },
  };
  const theme = colors[badgeColor] || colors.blue;

  return (
    <section className={cn(
      "relative pt-32 pb-20 bg-gradient-to-b from-slate-900 to-slate-800 text-white overflow-hidden border-b border-slate-700",
      className
    )}>
       {/* Standard Grid Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('/grid-pattern.svg')]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {badge && (
          <div className={cn("inline-block px-3 py-1 mb-6 border rounded-full", theme.badgeBorder, theme.badgeBg)}>
            <span className={cn("font-mono text-xs font-bold tracking-widest uppercase", theme.text)}>
              {badge}
            </span>
          </div>
        )}
        
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
          {title}
        </h1>
        
        <p className="text-xl text-slate-300 max-w-3xl leading-relaxed mb-12">
          {subtitle}
        </p>

        {children}
      </div>
    </section>
  );
};
