'use client';
import React from 'react';
import Link from 'next/link';
import { 
  CreditCard, BarChart3, ShoppingCart, 
  ShieldCheck, ArrowRight, CheckCircle2, 
  Building2, Utensils,
  type LucideIcon
} from 'lucide-react';

// Import UI Kit Components
import { Hero, Section, FeatureCard } from '@/components/ui/trigonal';
// Import Content Config
import { FISCAL_INTEGRITY_CONTENT } from '@/config/pages';

// Icon mapping helper
const iconMap: Record<string, LucideIcon> = {
  CreditCard,
  ShoppingCart,
  BarChart3,
  Utensils,
  Building2,
};

export default function FiscalIntegrityPage() {
  const content = FISCAL_INTEGRITY_CONTENT;
  const CtaIcon = iconMap[content.hero.cta.iconName] || CreditCard;

  return (
    <main className="bg-white min-h-screen">
      
      {/* 1. HERO: THE FINANCIAL OS */}
      <Hero
        badge={content.hero.badge}
        badgeColor={content.hero.badgeColor}
        title={
          <span>
            {content.hero.title.split('.')[0]}. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
              {content.hero.title.split('.')[1]}
            </span>
          </span>
        }
        subtitle={content.hero.subtitle}
        className="text-center"
      >
        <div className="flex justify-center">
          <Link href={content.hero.cta.href}>
            <button className="px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-lg transition-all shadow-lg shadow-orange-600/25 flex items-center gap-2">
              {CtaIcon && <CtaIcon className="w-4 h-4" />} {content.hero.cta.text}
            </button>
          </Link>
        </div>
      </Hero>

      {/* 2. THE ENGINE: ODOO 19 */}
      <Section variant="slate">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-mono text-xs text-orange-600 font-bold uppercase tracking-widest">
              {content.kernel.label}
            </span>
            <h2 className="text-3xl font-bold text-slate-900 mt-2">{content.kernel.title}</h2>
            <p className="text-slate-500 mt-2 max-w-2xl mx-auto">
              {content.kernel.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.features.map((feature, index) => {
              const Icon = iconMap[feature.iconName];
              if (!Icon) {
                console.warn(`Icon not found: ${feature.iconName}`);
                return null;
              }
              return (
                <FeatureCard
                  key={index}
                  icon={Icon}
                  title={feature.title}
                  description={feature.description}
                  features={feature.features}
                  color={feature.color}
                />
              );
            })}
          </div>
        </div>
      </Section>

      {/* 3. CROSS-INDUSTRY PROOF (THE FLEX) */}
      <Section variant="white">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold mb-6">
              <ShieldCheck className="w-4 h-4" /> {content.crossIndustry.badge}
            </div>
            <h2 className="text-4xl font-black text-slate-900 mb-6 whitespace-pre-line">
              {content.crossIndustry.title}
            </h2>
            {content.crossIndustry.description.map((para, index) => (
              <p key={index} className="text-lg text-slate-600 leading-relaxed mb-6">
                {para.split(/\*\*(.*?)\*\*/).map((part, i) => 
                  i % 2 === 1 ? <strong key={i}>{part}</strong> : part
                )}
              </p>
            ))}
            
            <div className="flex gap-4">
              {content.crossIndustry.industries.map((industry, index) => {
                const IndustryIcon = iconMap[industry.iconName];
                return (
                  <div key={index} className="p-4 bg-slate-50 border border-slate-100 rounded-lg flex items-center gap-3">
                    <IndustryIcon className="w-5 h-5 text-slate-400" />
                    <div>
                      <div className="font-bold text-slate-900 text-sm">{industry.label}</div>
                      <div className="text-[10px] text-slate-500 uppercase">{industry.tag}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="p-8 bg-slate-900 text-white rounded-2xl shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
              <div className="relative z-10">
                <div className="font-mono text-xs text-orange-400 mb-4">LIVE_TRANSACTION_LOG</div>
                <div className="space-y-3 font-mono text-xs">
                  {content.crossIndustry.transactionLog.map((log, index) => {
                    const statusColorClass = log.statusColor === 'emerald' ? 'text-emerald-400' : 'text-blue-400';
                    return (
                      <div 
                        key={index} 
                        className={`flex justify-between ${index < content.crossIndustry.transactionLog.length - 1 ? 'border-b border-slate-800 pb-2' : ''}`}
                      >
                        <span>{log.time} {log.action}</span>
                        <span className={statusColorClass}>{log.status}</span>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-8 pt-6 border-t border-slate-800 flex items-center gap-2 text-slate-400 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Unified Ledger Architecture</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 4. CUSTOM FOOTER (REPLACES GLOBAL BAND) */}
      <Section variant="dark" className="py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-left">
            <span className="font-mono text-xs text-orange-500 font-bold uppercase tracking-widest">
              {content.footer.badge}
            </span>
            <h2 className="text-3xl font-black text-white mt-2">
              {content.footer.title} <br/>
              <span className="text-slate-400">{content.footer.subtitle}</span>
            </h2>
          </div>
          
          <Link href={content.footer.cta.href}>
            <button className="px-8 py-5 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-100 transition-all flex items-center gap-4 shadow-xl">
              <span className="font-mono uppercase tracking-wider">{content.footer.cta.text}</span>
              <ArrowRight className="w-5 h-5 text-orange-600" />
            </button>
          </Link>
        </div>
      </Section>

    </main>
  );
}
