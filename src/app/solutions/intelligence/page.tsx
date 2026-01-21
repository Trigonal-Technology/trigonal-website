'use client';
import React from 'react';
import Link from 'next/link';
import {
  BarChart3, BrainCircuit, TrendingUp, Globe, Database,
  ArrowRight, Network
} from 'lucide-react';

// Import UI Kit Components
import { Hero, Section, ServiceCard } from '@/components/ui/trigonal';
// Import Content Config
import { INTELLIGENCE_CONTENT } from '@/config/pages';

// Icon mapping helper
const iconMap: Record<string, React.ComponentType<any>> = {
  BarChart3,
  BrainCircuit,
  TrendingUp,
  Network,
  Globe,
  Database,
};

export default function IntelligencePage() {
  const { hero, features } = INTELLIGENCE_CONTENT;

  return (
    <main className="bg-white min-h-screen">
      <Hero 
        badge={hero.badge}
        badgeColor={hero.badgeColor}
        title={hero.title}
        subtitle={hero.subtitle}
      >
        <div className="mt-8">
           <Link href={hero.buttons[0].href}>
              <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-lg transition-colors flex items-center gap-3 shadow-lg shadow-indigo-500/20 group">
                <span className="font-mono uppercase tracking-wider">{hero.buttons[0].text}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
           </Link>
        </div>
      </Hero>

      {/* VISUAL DATA FLOW PIPELINE */}
      <Section variant="slate" className="border-b border-slate-200">
         <div className="text-center mb-12">
            <span className="font-mono text-xs text-indigo-600 font-bold uppercase tracking-widest">The Data Pipeline</span>
            <h2 className="text-2xl font-bold text-slate-900 mt-2">From Record to Insight</h2>
         </div>
         
         <div className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-6xl mx-auto relative">
             
             {/* NODE 1: DATA LAKE */}
             <div className="flex-1 w-full p-6 bg-white border border-slate-200 rounded-xl text-center relative group hover:border-blue-400 transition-all">
                 <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                    <Database className="w-6 h-6 text-slate-500" />
                 </div>
                 <h3 className="font-bold text-slate-900">1. Data Lake</h3>
                 <div className="mt-2 text-xs font-mono text-slate-500 bg-slate-50 py-1 px-2 rounded inline-block">
                    SOURCE: EMR / AGGREGATE
                 </div>
                 <p className="text-xs text-slate-400 mt-2">Raw Ingestion Layer</p>
             </div>

             {/* CONNECTOR 1 */}
             <div className="hidden md:flex flex-col items-center justify-center text-slate-300 w-12">
                <div className="h-[2px] w-full bg-slate-300"></div>
                <ArrowRight className="w-4 h-4 -mt-[9px] ml-auto" />
             </div>

             {/* NODE 2: INTELLIGENCE ENGINE */}
             <div className="flex-1 w-full p-6 bg-white border border-indigo-200 ring-2 ring-indigo-50 rounded-xl text-center relative shadow-lg">
                 <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    PROCESSING
                 </div>
                 <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 text-indigo-600">
                    <BrainCircuit className="w-6 h-6" />
                 </div>
                 <h3 className="font-bold text-slate-900">2. Intelligence Core</h3>
                 <div className="mt-2 text-xs font-mono text-indigo-600 bg-indigo-50 py-1 px-2 rounded inline-block">
                    SUPERSET + AI MODELS
                 </div>
                 <p className="text-xs text-slate-400 mt-2">Normalization & Prediction</p>
             </div>

             {/* CONNECTOR 2 */}
             <div className="hidden md:flex flex-col items-center justify-center text-slate-300 w-12">
                <div className="h-[2px] w-full bg-slate-300"></div>
                <ArrowRight className="w-4 h-4 -mt-[9px] ml-auto" />
             </div>

             {/* NODE 3: DASHBOARD */}
             <div className="flex-1 w-full p-6 bg-white border border-slate-200 rounded-xl text-center relative group hover:border-emerald-400 transition-all">
                 <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
                    <BarChart3 className="w-6 h-6 text-slate-500" />
                 </div>
                 <h3 className="font-bold text-slate-900">3. Visualization</h3>
                 <div className="mt-2 text-xs font-mono text-slate-500 bg-slate-50 py-1 px-2 rounded inline-block">
                    DHIS2 / DASHBOARDS
                 </div>
                 <p className="text-xs text-slate-400 mt-2">Actionable Insights</p>
             </div>

         </div>
      </Section>

      <Section variant="white">
         <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900">{features.title}</h2>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.items.map((item, idx) => {
              const Icon = iconMap[item.iconName];
              return (
                <ServiceCard 
                  key={idx}
                  title={item.title}
                  subtitle={item.subtitle}
                  icon={Icon}
                  color={item.color as any}
                />
              );
            })}
         </div>
      </Section>
    </main>
  );
}
