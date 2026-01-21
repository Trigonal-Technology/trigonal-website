'use client';
import React from 'react';
import Link from 'next/link';
import { 
  MapPin, Activity, Server, CreditCard, 
  ChevronRight, Loader2, CheckCircle2, 
  DraftingCompass, AlertCircle 
} from 'lucide-react';
import { Hero, Section } from '@/components/ui/trigonal';
import caseStudies from '@/mocks/case-studies.json';

export default function CaseStudiesIndex() {
  return (
    <main className="bg-white min-h-screen">
      <Hero
        badge="RESOURCE: MISSION_LOGS"
        badgeColor="slate"
        title="Engineering Evidence."
        subtitle="Real-world deployments. From completed missions to active operations currently in the field."
      />

      <Section variant="slate">
        <div className="grid gap-8">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>
      </Section>
    </main>
  );
}

function CaseStudyCard({ study }: { study: any }) {
  // 1. Status Logic
  const statusConfig: any = {
    'MISSION_SUCCESS': { 
      icon: <CheckCircle2 className="w-3 h-3" />, 
      text: 'MISSION SUCCESS', 
      color: 'bg-emerald-100 text-emerald-700 border-emerald-200' 
    },
    'DEPLOYMENT_PHASE': { 
      icon: <Loader2 className="w-3 h-3 animate-spin" />, 
      text: 'DEPLOYING NOW', 
      color: 'bg-amber-100 text-amber-700 border-amber-200' 
    },
    'INCEPTION_PHASE': { 
      icon: <DraftingCompass className="w-3 h-3" />, 
      text: 'INCEPTION / DESIGN', 
      color: 'bg-blue-50 text-blue-600 border-blue-200' 
    }
  };
  
  const status = statusConfig[study.status] || statusConfig['MISSION_SUCCESS'];

  // 2. Icon Logic
  const iconMap: any = {
    'Lab-Bridge Middleware': <Activity className="w-5 h-5 text-purple-600" />,
    'OpenMRS 3 + Odoo 16': <Server className="w-5 h-5 text-orange-600" />,
    'NidanEHR Full Stack': <Server className="w-5 h-5 text-blue-600" />,
    'Trauma & Emergency Core': <AlertCircle className="w-5 h-5 text-emerald-600" />,
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-8 transition-all shadow-sm hover:shadow-xl hover:border-slate-300 relative overflow-hidden group">
        
        {/* STATUS BADGE */}
        <div className={`absolute top-0 right-0 px-4 py-2 text-[10px] font-bold font-mono uppercase border-b border-l rounded-bl-xl flex items-center gap-2 ${status.color}`}>
            {status.icon} {status.text}
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          
          {/* LEFT: Meta Data */}
          <div className="md:w-1/3 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-widest mt-2">
               <MapPin className="w-4 h-4" /> {study.location}
            </div>
            
            <div className="space-y-1">
              <div className="text-xs font-bold text-slate-500 uppercase">CLIENT</div>
              <div className="text-lg font-bold text-slate-900">{study.client}</div>
            </div>

            <div className="space-y-1">
              <div className="text-xs font-bold text-slate-500 uppercase">SYSTEM</div>
              <div className="flex items-center gap-2 font-medium text-slate-700">
                {iconMap[study.product] || <Server className="w-5 h-5 text-slate-400"/>} {study.product}
              </div>
            </div>

            {/* KEY STATS */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-100">
              {study.stats.map((stat: any, i: number) => (
                <div key={i}>
                  <div className="text-lg font-black text-slate-900 leading-tight">{stat.value}</div>
                  <div className="text-[10px] text-slate-500 font-mono uppercase mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Narrative */}
          <div className="md:w-2/3 border-l border-slate-100 md:pl-8 flex flex-col justify-center">
             <div className="flex flex-wrap gap-2 mb-4 mt-6 md:mt-0">
                {study.tags.map((tag: string) => (
                   <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded font-mono">
                      #{tag}
                   </span>
                ))}
             </div>
             
             <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                {study.title}
             </h3>
             <p className="text-slate-600 leading-relaxed mb-6">
                {study.summary}
             </p>

             {/* Link Logic: Only link if we have a page (Parbat) */}
             {study.slug === 'lab-bridge' ? (
                 <Link href={`/case-studies/${study.slug}`} className="flex items-center gap-2 text-sm font-bold text-blue-600 group-hover:translate-x-2 transition-transform">
                    Read Mission Debrief <ChevronRight className="w-4 h-4" />
                 </Link>
             ) : (
                 <div className="flex items-center gap-2 text-xs font-bold text-slate-400 cursor-not-allowed select-none">
                    {study.status === 'MISSION_SUCCESS' ? 'CASE STUDY ARCHIVED (EXTERNAL)' : 'DATA CLASSIFIED (MISSION ACTIVE)'}
                 </div>
             )}
          </div>
        </div>
    </div>
  );
}
