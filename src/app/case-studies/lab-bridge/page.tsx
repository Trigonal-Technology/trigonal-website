'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { LabBridgeArchitecture } from '@/components/sections/LabBridgeArchitecture';

export default function LabBridgeCaseStudy() {
  return (
    <main className="bg-white min-h-screen">
      
      {/* 1. HERO: The Metric of Success */}
      <section className="relative pt-32 pb-20 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/grid-pattern.svg')]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="inline-block px-3 py-1 mb-6 border border-blue-500 rounded-full bg-blue-500/10">
            <span className="font-mono text-xs text-blue-400 font-bold tracking-widest uppercase">
              CASE_STUDY: PARBAT_DISTRICT_HOSPITAL
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8">
            Closing the <span className="text-blue-500">Last Mile</span> of <br/> Diagnostic Data.
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed mb-12">
            Manual transcription errors are a patient safety hazard. We deployed 
            <strong> Lab-Bridge</strong>-an edge-native middleware-to connect 5 analyzers directly to 
            <strong> OpenELIS</strong>, creating a real-time, error-free diagnostic loop.
          </p>
          
          {/* STATS GRID */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-800 pt-8">
            <div>
              <div className="text-4xl font-black text-white mb-1">100%</div>
              <div className="font-mono text-xs text-slate-500 uppercase">Automation</div>
            </div>
            <div>
              <div className="text-4xl font-black text-white mb-1">6 WKS</div>
              <div className="font-mono text-xs text-slate-500 uppercase">Deployment Time</div>
            </div>
            <div>
              <div className="text-4xl font-black text-white mb-1">5+</div>
              <div className="font-mono text-xs text-slate-500 uppercase">Analyzers Integrated</div>
            </div>
            <div>
              <div className="text-4xl font-black text-white mb-1">ASTM/HL7</div>
              <div className="font-mono text-xs text-slate-500 uppercase">Protocols Unified</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE CHALLENGE: The "Manual Shuffle" */}
      <section className="py-24 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">The Problem: Data Latency kills efficiency.</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            Before Lab-Bridge, Parbat District Hospital relied on a manual transcription loop. 
            Lab technicians read results from analyzer screens and hand-typed them into the EMR.
            This introduced <strong>transcription errors</strong>, delayed critical reporting, and trapped valuable data in offline silos.
          </p>
          <div className="p-6 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
            <h4 className="font-bold text-red-900 mb-2">The Risk Profile:</h4>
            <ul className="list-disc list-inside text-red-800 space-y-1">
              <li>High probability of manual entry errors (typos in CBC/Biochem values).</li>
              <li>Significant time lost in "Data Entry" vs "Patient Care."</li>
              <li>Zero real-time visibility for ward doctors.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. THE SOLUTION: Architecture Visualization */}
      <LabBridgeArchitecture />

      {/* 4. TECHNICAL SPECS: The "How" */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Technical Implementation Details</h2>
          
          <div className="space-y-12">
            {/* Spec 1: Protocols */}
            <div className="flex gap-6">
              <div className="w-12 h-12 shrink-0 bg-blue-100 flex items-center justify-center rounded-lg font-bold text-blue-600">01</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Protocol Agnostic Parsing</h3>
                <p className="text-slate-600 mt-2">
                  We built a custom parser in <strong>Python 3.x</strong> that handles the notorious vagueness of ASTM E1381 implementation across different vendors (Mindray, Erba, etc.). It normalizes the data stream before it ever touches the database.
                </p>
              </div>
            </div>

            {/* Spec 2: Config */}
            <div className="flex gap-6">
              <div className="w-12 h-12 shrink-0 bg-blue-100 flex items-center justify-center rounded-lg font-bold text-blue-600">02</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">YAML-Based Configuration</h3>
                <p className="text-slate-600 mt-2 mb-4">
                  No hardcoded drivers. New analyzers are added by simply uploading a YAML definition file that maps device-specific test codes to OpenELIS Loinc/Test IDs.
                </p>
                {/* CODE BLOCK */}
                <div className="bg-slate-900 p-4 rounded-lg font-mono text-xs text-slate-300 overflow-x-auto">
<pre>{`analyzers:
  - id: "mindray_bc30"
    protocol: "ASTM"
    connection: "/dev/ttyUSB0"
    mappings:
      - device_code: "WBC"
        emr_test_id: "26464-8"
        unit: "10^9/L"
      - device_code: "RBC"
        emr_test_id: "789-8"
        unit: "10^12/L"`}</pre>
                </div>
              </div>
            </div>

            {/* Spec 3: Edge */}
            <div className="flex gap-6">
              <div className="w-12 h-12 shrink-0 bg-blue-100 flex items-center justify-center rounded-lg font-bold text-blue-600">03</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Edge-Native Deployment</h3>
                <p className="text-slate-600 mt-2">
                  Deployed on <strong>Raspberry Pi 4</strong> devices running Docker. This ensures the middleware runs physically close to the analyzers, mitigating network latency and allowing for "Store & Forward" capabilities during internet outages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FOOTER CTA */}
      <section className="py-20 bg-slate-900 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Need Interoperability?</h2>
        <p className="text-slate-400 mb-8">We architect sovereign middleware for hospitals that refuse to be locked in.</p>
        <Link 
          href="/consult?domain=diagnostic_middleware&source=lab_bridge"
          className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-colors"
        >
          Consult on Lab Integration
        </Link>
      </section>

    </main>
  );
}
