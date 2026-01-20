import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  color?: 'blue' | 'orange' | 'emerald' | 'purple' | 'indigo' | 'pink';
  className?: string;
}

export const FeatureCard = ({
  icon: Icon,
  title,
  description,
  features,
  color = 'blue',
  className
}: FeatureCardProps) => {
  const colorMap = {
    blue: { 
      iconBg: 'bg-blue-50', 
      iconText: 'text-blue-600', 
      border: 'hover:border-blue-500' 
    },
    orange: { 
      iconBg: 'bg-orange-50', 
      iconText: 'text-orange-600', 
      border: 'hover:border-orange-500' 
    },
    emerald: { 
      iconBg: 'bg-emerald-50', 
      iconText: 'text-emerald-600', 
      border: 'hover:border-emerald-500' 
    },
    purple: { 
      iconBg: 'bg-purple-50', 
      iconText: 'text-purple-600', 
      border: 'hover:border-purple-500' 
    },
    indigo: { 
      iconBg: 'bg-indigo-50', 
      iconText: 'text-indigo-600', 
      border: 'hover:border-indigo-500' 
    },
    pink: { 
      iconBg: 'bg-pink-50', 
      iconText: 'text-pink-600', 
      border: 'hover:border-pink-500' 
    },
  };

  const theme = colorMap[color] || colorMap.blue;

  return (
    <div className={cn(
      "p-8 bg-white border border-slate-200 rounded-xl shadow-sm transition-all group",
      theme.border,
      className
    )}>
      <div className={cn(
        "w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform",
        theme.iconBg
      )}>
        <Icon className={cn("w-6 h-6", theme.iconText)} />
      </div>
      
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-sm text-slate-600 mb-4">{description}</p>
      
      <ul className="text-xs text-slate-500 space-y-2 font-mono">
        {features.map((feature, index) => (
          <li key={index}>+ {feature}</li>
        ))}
      </ul>
    </div>
  );
};
