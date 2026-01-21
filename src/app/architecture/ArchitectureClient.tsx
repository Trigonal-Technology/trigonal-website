'use client';

import React from 'react';
import { ArchitectureHero } from '@/components/sections/ArchitectureHero';
import { ArchitectureTabs } from '@/components/sections/ArchitectureTabs';
import { Section } from '@/components/ui/trigonal';
import Link from 'next/link';
import { Code, Github } from 'lucide-react';

export function ArchitectureClient() {
  return (
    <main className="bg-white min-h-screen">
      
      {/* 1. The Blueprint Header */}
      <ArchitectureHero />

      {/* 2. The Deep Dive Tabs (The Core Engineering Content) */}
      <ArchitectureTabs />

      {/* 3. Final Engineering Call to Action */}
      <Section variant="dark" className="text-center">
        <h2 className="text-3xl font-bold mb-6">Built for the 50-Year Horizon.</h2>
        <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
          We don't chase trends. We build infrastructure on open standards (FHIR, ISO 20022) 
          that will outlast any single vendor.
        </p>
        <div className="flex justify-center gap-4">
           {/* PRIMARY: The "Lead Gen" Button */}
           <Link href="/consult?source=codebase_review">
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-colors flex items-center gap-3 shadow-lg shadow-blue-500/20">
                <Code className="w-5 h-5" /> Request Code Walkthrough
              </button>
           </Link>

           {/* SECONDARY: The "Trust" Button (Optional, if you have a GitHub) */}
           <Link href="https://github.com/trigonal-technology" target="_blank">
              <button className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-3">
                <Github className="w-5 h-5" /> View Open Source
              </button>
           </Link>
        </div>
      </Section>

    </main>
  );
}
