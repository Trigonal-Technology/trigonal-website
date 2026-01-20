import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  subtitle: string;
  icon: LucideIcon | React.ReactNode;
  color?: 'blue' | 'orange' | 'emerald' | 'purple' | 'indigo' | 'pink';
  port?: string;
  tech?: string;
  href?: string;
  className?: string;
}

export const ServiceCard = ({ 
  title, 
  subtitle, 
  icon: Icon, 
  color = 'blue', 
  port, 
  tech, 
  href,
  className 
}: ServiceCardProps) => {
  // Simplified Color Mapping
  const colorMap = {
    blue: { text: 'text-blue-600', border: 'hover:border-blue-500', bg: 'bg-blue-50' },
    orange: { text: 'text-orange-600', border: 'hover:border-orange-500', bg: 'bg-orange-50' },
    emerald: { text: 'text-emerald-600', border: 'hover:border-emerald-500', bg: 'bg-emerald-50' },
    purple: { text: 'text-purple-600', border: 'hover:border-purple-500', bg: 'bg-purple-50' },
    indigo: { text: 'text-indigo-600', border: 'hover:border-indigo-500', bg: 'bg-indigo-50' },
    pink: { text: 'text-pink-600', border: 'hover:border-pink-500', bg: 'bg-pink-50' },
  };
  const theme = colorMap[color] || colorMap.blue;

  // Handle both ReactNode (JSX) and LucideIcon
  // If Icon is already a React element, use it directly
  // Otherwise, treat it as a component and render it with props
  const IconElement = React.isValidElement(Icon) 
    ? Icon 
    : React.createElement(Icon as React.ComponentType<{ className?: string }>, { className: cn("w-5 h-5", theme.text) });

  const Content = () => (
    <div className={cn(
      "h-full p-5 bg-white border border-slate-200 rounded-xl shadow-sm flex items-start gap-4 transition-all group",
      theme.border,
      className
    )}>
      <div className={cn("p-2 bg-slate-50 rounded-lg shrink-0", href && "group-hover:bg-opacity-80")}>
        {IconElement}
      </div>
      <div className="w-full">
        <div className="flex justify-between items-center mb-1">
          <h3 className="font-bold text-slate-900 text-sm">{title}</h3>
          {port && <span className="font-mono text-[10px] text-slate-400">:{port}</span>}
        </div>
        <p className="text-xs text-slate-500 mb-2">{subtitle}</p>
        <div className="flex items-center justify-between mt-auto">
          {tech && (
            <span className="inline-block px-2 py-0.5 bg-slate-100 text-[10px] font-mono rounded text-slate-600">
              {tech}
            </span>
          )}
          {href && <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-slate-600 transition-colors" />}
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full">
        <Content />
      </Link>
    );
  }
  return <Content />;
};
