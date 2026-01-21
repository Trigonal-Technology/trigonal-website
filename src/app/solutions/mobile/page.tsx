'use client';
import React from 'react';
import Link from 'next/link';
import {
  QrCode, Signal, CalendarCheck, Smartphone, Lock,
  ArrowRight,
  type LucideIcon
} from 'lucide-react';

// Import UI Kit Components
import { Hero, Section, ServiceCard } from '@/components/ui/trigonal';
// Import Content Config
import { MOBILE_CONTENT } from '@/config/pages';

// Icon mapping helper
const iconMap: Record<string, LucideIcon> = {
  QrCode,
  Signal,
  CalendarCheck,
  Smartphone,
  Lock,
};

export default function MobilePage() {
  const { hero, features } = MOBILE_CONTENT;

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
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-colors flex items-center gap-3 shadow-lg shadow-blue-500/20 group">
                <span className="font-mono uppercase tracking-wider">{hero.buttons[0].text}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
           </Link>
        </div>
      </Hero>

      {/* MOCKUP SECTION */}
      <Section variant="slate" className="border-b border-slate-200">
         <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-5xl mx-auto">
            <div className="w-64 h-[500px] bg-slate-900 rounded-[2.5rem] p-4 border-4 border-slate-300 shadow-2xl relative overflow-hidden">
                {/* Simple CSS Phone Mockup Content */}
                <div className="h-full w-full bg-white rounded-[1.5rem] overflow-hidden flex flex-col">
                    <div className="bg-blue-600 h-16 flex items-center justify-center text-white font-bold">NidanPHR</div>
                    <div className="p-4 space-y-4">
                        <div className="h-24 bg-blue-50 rounded-lg border border-blue-100 p-3">
                            <div className="w-12 h-12 bg-blue-200 rounded-full mb-2"></div>
                            <div className="h-2 w-20 bg-blue-200 rounded"></div>
                        </div>
                        <div className="h-12 bg-slate-50 rounded-lg border border-slate-100"></div>
                        <div className="h-12 bg-slate-50 rounded-lg border border-slate-100"></div>
                    </div>
                </div>
            </div>
            <div className="max-w-md">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Empower your Patients.</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                    Long queues kill patient satisfaction. NidanPHR puts registration, billing, and results in their pocket.
                    Full <strong>Offline-First</strong> architecture ensures it works even with spotty connectivity.
                </p>
                <div className="mt-6 flex items-center gap-2 text-sm font-bold text-blue-600">
                    <Smartphone className="w-4 h-4" /> Available on iOS & Android
                </div>
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
    </main>
  );
}
