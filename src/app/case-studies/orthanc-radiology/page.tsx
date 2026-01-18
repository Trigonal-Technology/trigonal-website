'use client';

import React from 'react';
import Link from 'next/link';

export default function OrthancCaseStudy() {
  return (
    <main className="bg-white min-h-screen">
      
      {/* 1. HERO: The Infrastructure Shift */}
      <section className="relative pt-32 pb-20 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/grid-pattern.svg')]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="inline-block px-3 py-1 mb-6 border border-emerald-500 rounded-full bg-emerald-500/10">
            <span className="font-mono text-xs text-emerald-400 font-bold tracking-widest uppercase">
              CASE_STUDY: RADIOLOGY_INFRASTRUCTURE
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8">
            From Legacy Bloat to <br/>
            <span className="text-emerald-500">Lightweight Speed.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed mb-12">
            We replaced heavy legacy PACS (Dcm4chee) with <strong>Orthanc</strong>—integrating 
            Imaging directly with the <strong>Bahmni Billing Engine</strong> to ensure zero revenue leakage.
          </p>
          
          {/* STATS GRID */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-800 pt-8">
            <div>
              <div className="text-4xl font-black text-white mb-1">100%</div>
              <div className="font-mono text-xs text-slate-500 uppercase">Billing Capture</div>
            </div>
            <div>
              <div className="text-4xl font-black text-white mb-1">20x</div>
              <div className="font-mono text-xs text-slate-500 uppercase">Lighter Footprint</div>
            </div>
            <div>
              <div className="text-4xl font-black text-white mb-1">REST</div>
              <div className="font-mono text-xs text-slate-500 uppercase">API Native</div>
            </div>
            <div>
              <div className="text-4xl font-black text-white mb-1">DICOM</div>
              <div className="font-mono text-xs text-slate-500 uppercase">Web Viewer</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE CHALLENGE: "The Disconnected X-Ray" */}
      <section className="py-24 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">The Problem: Clinical & Financial Disconnect.</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            In many deployments, the PACS (Imaging) and the HIS (Billing/Records) operate as islands.
            Doctors can see the X-ray, but the Finance team doesn't know it happened. Or worse—the heavy Java-based 
            legacy PACS crashes the server during peak hours.
          </p>
          <div className="p-6 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg">
            <h4 className="font-bold text-amber-900 mb-2">The Scope of Work:</h4>
            <ul className="list-disc list-inside text-amber-800 space-y-1 font-mono text-sm">
              <li>Validate existing Orthanc instance for DICOM storage.</li>
              <li>Define modality connection parameters (AE Titles, Ports).</li>
              <li><strong>CRITICAL:</strong> Map imaging procedures to Billable Services.</li>
              <li>Validate Cashier → Receipt → Imaging Order workflow.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. THE SOLUTION: Workflow Visualization */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
           <div className="mb-16 text-center">
              <span className="font-mono text-xs text-emerald-600 font-bold uppercase tracking-widest">Revenue Cycle Architecture</span>
              <h2 className="text-4xl font-bold text-slate-900 mt-2">The "Order-to-Cash" Imaging Loop</h2>
           </div>
           
           {/* DIAGRAM */}
           <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center text-center">
              
              {/* STEP 1: BILLING */}
              <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm">
                 <div className="font-mono text-xs text-slate-400 mb-2">01. HIS / BILLING</div>
                 <div className="font-bold text-slate-900">Patient Invoice</div>
                 <p className="text-xs text-slate-500 mt-2">"Chest X-Ray PA"</p>
                 <div className="mt-2 text-[10px] bg-green-100 text-green-700 px-2 py-1 rounded inline-block">Payment Verified</div>
              </div>

              {/* ARROW */}
              <div className="text-slate-300 text-xl">→</div>

              {/* STEP 2: ORTHANC */}
              <div className="p-6 bg-slate-900 text-white rounded-xl shadow-xl">
                 <div className="font-mono text-xs text-emerald-400 mb-2">02. ORTHANC CORE</div>
                 <div className="font-bold">Modality Worklist</div>
                 <p className="text-xs text-slate-400 mt-2">DICOM Study Created</p>
                 <div className="mt-2 text-[10px] bg-slate-700 px-2 py-1 rounded inline-block">AE_TITLE: ORTHANC</div>
              </div>

              {/* ARROW */}
              <div className="text-slate-300 text-xl">→</div>

              {/* STEP 3: PATIENT RECORD */}
              <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm">
                 <div className="font-mono text-xs text-slate-400 mb-2">03. CLINICAL DASHBOARD</div>
                 <div className="font-bold text-slate-900">Study Linked</div>
                 <p className="text-xs text-slate-500 mt-2">Embedded OHIF Viewer</p>
                 <div className="mt-2 text-[10px] bg-blue-100 text-blue-700 px-2 py-1 rounded inline-block">Bahmni PACS Integration</div>
              </div>

           </div>
        </div>
      </section>

      {/* 4. ACCEPTANCE CRITERIA: The Proof */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Engineering Acceptance Criteria</h2>
          
          <div className="space-y-6">
            <div className="flex gap-4 items-start border-b border-slate-100 pb-6">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold shrink-0">✓</div>
              <div>
                <h4 className="font-bold text-slate-900">Full Round-Trip Demonstrated</h4>
                <p className="text-slate-600 text-sm mt-1">
                  Imaging order created in HIS → DICOM study stored in Orthanc → Study linked in patient record.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start border-b border-slate-100 pb-6">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold shrink-0">✓</div>
              <div>
                <h4 className="font-bold text-slate-900">Fiscal Integrity Check</h4>
                <p className="text-slate-600 text-sm mt-1">
                  Imaging order generates invoice → Payment recorded → Receipt references specific imaging line item.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold shrink-0">✓</div>
              <div>
                <h4 className="font-bold text-slate-900">Security Baseline</h4>
                <p className="text-slate-600 text-sm mt-1">
                  Access to Orthanc Explorer restricted; Authenticated API access only; No critical errors in logs.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 bg-slate-50 rounded-lg border border-slate-200 font-mono text-xs text-slate-600">
            <div className="uppercase font-bold text-slate-400 mb-2">Deliverable Manifest</div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
               <li>- Orthanc Config Export (orthanc.json)</li>
               <li>- Imaging Service Catalog Mapping</li>
               <li>- Procedure-to-Price List Mapping</li>
               <li>- Retention & Backup Strategy Doc</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. FOOTER CTA */}
      <section className="py-20 bg-slate-900 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Need to Fix Your Imaging Workflow?</h2>
        <p className="text-slate-400 mb-8">We deploy lightweight, integrated PACS that keep finance and clinical teams in sync.</p>
        <Link href="/consult?domain=infrastructure_gap&source=orthanc">
          <button className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg transition-colors">
            Consult on Radiology Infrastructure
          </button>
        </Link>
      </section>

    </main>
  );
}
