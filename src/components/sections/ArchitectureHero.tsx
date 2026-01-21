'use client';

import React from 'react';
import { Hero } from '@/components/ui/trigonal';

export function ArchitectureHero() {
  return (
    <Hero
      badge="SYSTEM_BLUEPRINT_V1"
      badgeColor="blue"
      title="The Sovereign Stack."
      subtitle="A technical deep-dive into the Trigonal Health OS. From the HL7 FHIR spine to the Odoo fiscal engine."
    >
      <div className="mt-8 flex flex-wrap gap-3">
        <div className="px-3 py-1 bg-slate-800 border border-slate-700 rounded text-[10px] font-mono text-blue-400 uppercase tracking-wider">
           Interoperability: FHIR R4
        </div>
        <div className="px-3 py-1 bg-slate-800 border border-slate-700 rounded text-[10px] font-mono text-orange-400 uppercase tracking-wider">
           Fiscal: Odoo 19
        </div>
        <div className="px-3 py-1 bg-slate-800 border border-slate-700 rounded text-[10px] font-mono text-emerald-400 uppercase tracking-wider">
           Clinical: OpenMRS 3
        </div>
      </div>
    </Hero>
  );
}
