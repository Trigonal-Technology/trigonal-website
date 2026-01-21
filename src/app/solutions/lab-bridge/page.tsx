'use client';
import React from 'react';
import Link from 'next/link';
import {
  Activity, ArrowLeftRight, CheckCircle2, Database, GitMerge, 
  Settings, Zap, RefreshCw, Microscope, ArrowRight, Check,
  type LucideIcon
} from 'lucide-react';
import { LabBridgeArchitecture } from '@/components/sections/LabBridgeArchitecture';

// Import UI Kit Components
import { Hero, Section, ServiceCard } from '@/components/ui/trigonal';
// Import Content Config
import { LAB_BRIDGE_CONTENT } from '@/config/pages';

// Icon mapping helper
const iconMap: Record<string, LucideIcon> = {
  Activity,
  Database,
  Microscope,
  ArrowLeftRight,
  CheckCircle2,
  GitMerge,
  Settings,
  Zap,
  RefreshCw,
};

export default function LabBridgePage() {
  const { hero, supportedDevices, features } = LAB_BRIDGE_CONTENT;

  return (
    <main className="bg-white min-h-screen">
      
      {/* 1. HERO */}
      <Hero 
        badge={hero.badge}
        badgeColor={hero.badgeColor}
        title={hero.title}
        subtitle={hero.subtitle}
      >
        <div className="mt-8">
           <Link href={hero.buttons[0].href}>
              <button className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-lg transition-colors flex items-center gap-3 shadow-lg shadow-purple-500/20 group">
                <span className="font-mono uppercase tracking-wider">{hero.buttons[0].text}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
           </Link>
        </div>
      </Hero>

      {/* 2. SUPPORTED DEVICES (Social Proof) */}
      <Section variant="slate" className="border-b border-slate-200">
         <div className="text-center mb-10">
            <span className="font-mono text-xs text-purple-600 font-bold uppercase tracking-widest">Validated Integrations</span>
            <h2 className="text-2xl font-bold text-slate-900 mt-2">Plug & Play Analyzers</h2>
         </div>
         <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {supportedDevices.map((device, idx) => (
               <div key={idx} className="flex items-center gap-2 px-5 py-3 bg-white border border-slate-200 rounded-full shadow-sm text-sm font-medium text-slate-700 hover:border-purple-300 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  {device}
               </div>
            ))}
         </div>
      </Section>

      {/* 3. ARCHITECTURE */}
      <LabBridgeArchitecture showDualDestinations={true} />

      {/* 4. ACHIEVEMENTS GRID */}
      <Section variant="white">
         <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900">{features.title}</h2>
            <p className="text-slate-500 mt-4">Real-world results from the Parbat District Hospital deployment.</p>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.items.map((item, idx) => {
              const Icon = iconMap[item.iconName];
              if (!Icon) {
                console.warn(`Icon not found: ${item.iconName}`);
                return null;
              }
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

      {/* 5. FOOTER CTA */}
      <Section variant="dark" className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to connect your Lab?</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            We have the drivers for Sysmex, Finecare, and Mindray ready to deploy. 
            Stop manual entry today.
          </p>
          <Link href="/consult?source=lab_bridge">
            <button className="px-8 py-4 bg-white text-purple-900 font-bold rounded-lg hover:bg-slate-100 transition-colors flex items-center gap-2 mx-auto">
               <Check className="w-4 h-4" /> Initialize Lab Interface
            </button>
          </Link>
      </Section>

    </main>
  );
}
