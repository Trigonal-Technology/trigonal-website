'use client';
import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, CheckCircle2, XCircle, 
  FileText, Activity, Server, Database,
  Cpu, Network, AlertTriangle
} from 'lucide-react';
import { Hero, Section } from '@/components/ui/trigonal';

export default function ParbatCaseStudy() {
  return (
    <main className="bg-white min-h-screen">
      
      {/* 1. MISSION HEADER */}
      <Hero
        badge="MISSION: DEBRIEF"
        badgeColor="purple"
        title="Operation: Parbat Connect"
        subtitle="How we eliminated manual data entry for a high-volume government hospital in Gandaki Province."
      >
        <div className="mt-8 flex flex-wrap gap-4">
          <div className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded text-xs font-mono text-slate-300">
            <span className="text-slate-500">TARGET:</span> PARBAT DISTRICT HOSPITAL
          </div>
          <div className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded text-xs font-mono text-slate-300">
             <span className="text-slate-500">STATUS:</span> <span className="text-emerald-400">MISSION SUCCESS</span>
          </div>
          <div className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded text-xs font-mono text-slate-300">
             <span className="text-slate-500">DURATION:</span> 8 WEEKS
          </div>
        </div>
      </Hero>

      {/* 2. SITUATION REPORT (THE PROBLEM) */}
      <Section variant="white" className="border-b border-slate-200">
        <div className="flex flex-col md:flex-row gap-12 items-start">
           <div className="md:w-1/3">
              <span className="font-mono text-xs text-red-600 font-bold uppercase tracking-widest">
                The Hostile Environment
              </span>
              <h2 className="text-3xl font-bold text-slate-900 mt-2 mb-6">
                The "Paper Gap" was killing efficiency.
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Parbat District Hospital had a modern LIS (OpenELIS) and modern Analyzers. 
                But they were disconnected. 
                <br/><br/>
                Lab technicians were manually typing results from the machine screen into the computer. 
                This introduced a <strong>15% error rate</strong> and created massive queues during OPD hours.
              </p>
           </div>

           <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* PAIN POINT 1 */}
              <div className="p-6 bg-red-50 border border-red-100 rounded-xl">
                 <div className="flex items-center gap-3 mb-3">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                    <h3 className="font-bold text-red-900">Data Integrity Failure</h3>
                 </div>
                 <p className="text-sm text-red-800/80">
                    Typing "10.5" instead of "105" for Glucose levels. Critical diagnostic errors due to human fatigue.
                 </p>
              </div>

              {/* PAIN POINT 2 */}
              <div className="p-6 bg-red-50 border border-red-100 rounded-xl">
                 <div className="flex items-center gap-3 mb-3">
                    <XCircle className="w-5 h-5 text-red-600" />
                    <h3 className="font-bold text-red-900">Revenue Leakage</h3>
                 </div>
                 <p className="text-sm text-red-800/80">
                    Tests were performed but sometimes never entered into the billing system. Estimated 12% revenue loss.
                 </p>
              </div>
           </div>
        </div>
      </Section>

      {/* 3. TACTICAL EXECUTION (BEFORE / AFTER) */}
      <Section variant="slate">
         <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">The Protocol Switch</h2>
         </div>

         <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 relative">
            
            {/* LEFT: LEGACY */}
            <div className="relative p-8 bg-white border border-slate-200 rounded-2xl opacity-70 grayscale hover:grayscale-0 transition-all">
               <div className="absolute -top-4 left-6 bg-slate-200 text-slate-600 px-3 py-1 rounded text-xs font-bold font-mono">
                  LEGACY PROTOCOL
               </div>
               <div className="space-y-6">
                  <div className="flex items-center justify-between">
                     <div className="text-center">
                        <Cpu className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                        <div className="text-xs font-bold">Analyzer</div>
                     </div>
                     <ArrowRight className="text-slate-300" />
                     <div className="text-center">
                        <FileText className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                        <div className="text-xs font-bold">Paper Note</div>
                     </div>
                     <ArrowRight className="text-slate-300" />
                     <div className="text-center">
                        <Database className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                        <div className="text-xs font-bold">OpenELIS</div>
                     </div>
                  </div>
                  <div className="pt-6 border-t border-slate-100 text-center text-xs text-red-500 font-mono">
                     STATUS: SLOW / ERROR_PRONE
                  </div>
               </div>
            </div>

            {/* CENTER VS BADGE */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold text-xs z-10 hidden md:flex">
               VS
            </div>

            {/* RIGHT: SOVEREIGN */}
            <div className="relative p-8 bg-white border-2 border-purple-500 shadow-2xl shadow-purple-200/50 rounded-2xl scale-105 z-0">
               <div className="absolute -top-4 left-6 bg-purple-600 text-white px-3 py-1 rounded text-xs font-bold font-mono">
                  SOVEREIGN PROTOCOL
               </div>
               <div className="space-y-6">
                  <div className="flex items-center justify-between">
                     <div className="text-center">
                        <Cpu className="w-8 h-8 text-slate-800 mx-auto mb-2" />
                        <div className="text-xs font-bold">Analyzer</div>
                     </div>
                     <div className="flex flex-col items-center">
                        <Activity className="w-6 h-6 text-purple-600 animate-pulse" />
                        <div className="h-[2px] w-24 bg-purple-200 mt-[-12px] -z-10"></div>
                     </div>
                     <div className="text-center">
                        <Database className="w-8 h-8 text-slate-800 mx-auto mb-2" />
                        <div className="text-xs font-bold">OpenELIS</div>
                     </div>
                  </div>
                  <div className="pt-6 border-t border-slate-100 text-center">
                     <div className="text-xs text-purple-600 font-mono font-bold mb-1">
                        STATUS: AUTOMATED / REAL_TIME
                     </div>
                     <p className="text-[10px] text-slate-400">
                        Via Trigonal Lab-Bridge Middleware
                     </p>
                  </div>
               </div>
            </div>

         </div>
      </Section>

      {/* 4. FIELD EVIDENCE (THE STACK) */}
      <Section variant="white">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* TEXT */}
            <div>
               <h2 className="text-3xl font-bold text-slate-900 mb-6">Battle-Tested Integration</h2>
               <p className="text-slate-600 mb-6">
                  We didn't just install software. We re-engineered the physical workflow of the laboratory.
               </p>
               <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                     <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1" />
                     <div>
                        <strong className="text-slate-900">Multi-Vendor Support:</strong>
                        <p className="text-sm text-slate-500">Connected Mindray (Hematology) and Nitin (Biochem) simultaneously.</p>
                     </div>
                  </li>
                  <li className="flex items-start gap-3">
                     <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1" />
                     <div>
                        <strong className="text-slate-900">Resilient Queuing:</strong>
                        <p className="text-sm text-slate-500">Implemented local buffering. If the server goes down, the middleware holds the data until connection is restored.</p>
                     </div>
                  </li>
                  <li className="flex items-start gap-3">
                     <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1" />
                     <div>
                        <strong className="text-slate-900">Barcode Workflow:</strong>
                        <p className="text-sm text-slate-500">Samples are now barcoded at collection. Analyzers auto-fetch patient details. Zero manual lookup.</p>
                     </div>
                  </li>
               </ul>
            </div>

            {/* TERMINAL VISUAL */}
            <div className="p-6 bg-slate-900 rounded-xl font-mono text-xs text-slate-300 shadow-2xl">
               <div className="flex gap-2 mb-4 border-b border-slate-700 pb-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
               </div>
               <div className="space-y-2">
                  <div className="flex justify-between">
                     <span className="text-blue-400">root@lab-bridge:~#</span>
                     <span>./status.sh</span>
                  </div>
                  <div className="text-emerald-400">✓ Service: RUNNING</div>
                  <div className="text-emerald-400">✓ Interface: RS232 (COM1) CONNECTED</div>
                  <div className="text-emerald-400">✓ LIS Link: 192.168.1.10:8080 (ACTIVE)</div>
                  <br/>
                  <div className="border-t border-slate-700 pt-2">
                     <div className="flex justify-between text-slate-500">
                        <span>[10:42:05] ASTM_FRAME_RECEIVED</span>
                        <span>MINDRAY_BC5300</span>
                     </div>
                     <div className="flex justify-between text-slate-500">
                        <span>[10:42:06] PARSING_RESULT</span>
                        <span>PID: 100942</span>
                     </div>
                     <div className="flex justify-between text-purple-400">
                        <span>[10:42:06] POST_SUCCESS</span>
                        <span>OpenELIS_v2</span>
                     </div>
                  </div>
               </div>
            </div>

         </div>
      </Section>

      {/* 5. CTA */}
      <Section variant="dark" className="text-center">
         <h2 className="text-3xl font-bold mb-6">Need this kind of rigour?</h2>
         <Link href="/consult?source=case_study_parbat">
            <button className="px-8 py-4 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-500 transition-colors flex items-center gap-2 mx-auto shadow-lg shadow-purple-600/25">
               Deploy Lab-Bridge
            </button>
         </Link>
      </Section>

    </main>
  );
}
