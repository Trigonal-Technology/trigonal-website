'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Database, Layers, Globe, WifiOff, CheckCircle2, ArrowRight, 
  Server, Code2, Activity, CreditCard, GitMerge, Terminal,
  Zap, Eye, BarChart3, FileText, Smartphone, Shield, GitFork, Scan, Plug
} from 'lucide-react';

export default function NidanEHRPage() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const kafkaTopics = [
    'nidan.patient.registered',
    'nidan.visit.started',
    'nidan.order.placed',
    'nidan.payment.completed',
    'nidan.lab.result.received'
  ];

  return (
    <main className="bg-white min-h-screen">
      
      {/* 1. HERO: The Event-Driven OS Promise */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-slate-900 to-slate-800 text-white overflow-hidden border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="inline-block px-3 py-1 mb-6 border border-emerald-500 rounded-full bg-emerald-500/10">
            <span className="font-mono text-xs text-emerald-400 font-bold tracking-widest uppercase">
              PRODUCT: CLINICAL_OS
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
            The Event-Driven OS<br/>
            <span className="text-emerald-400">for Sovereign Hospitals.</span>
          </h1>
          
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed mb-12">
            Synchronizing Clinical Care, Finance, and Labs via a sovereign <strong>Event Bus</strong>.
          </p>

          {/* System Status Badges - Live Kernel Status Ticker */}
          <div className="mb-8">
            <div className="inline-block px-3 py-1 mb-4 bg-slate-800/50 border border-slate-700 rounded-full">
              <span className="font-mono text-xs text-slate-400 uppercase tracking-widest">Live Kernel Status</span>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              <StatusBadge label="KERNEL: OPENMRS 3.x" color="bg-blue-500" />
              <StatusBadge label="ERP: ODOO 19" color="bg-orange-500" />
              <StatusBadge label="BUS: KAFKA" color="bg-emerald-500" />
              <StatusBadge label="LIS: OPENELIS" color="bg-purple-500" />
              <StatusBadge label="PACS: ORTHANC" color="bg-pink-500" />
              <StatusBadge label="HIE: MEDIATOR" color="bg-indigo-500" />
              <StatusBadge label="IMIS: OPENIMIS" color="bg-teal-500" />
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-12">
            <Link href="/consult?source=nidan_core">
              <button className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg transition-colors flex items-center gap-3 shadow-lg shadow-emerald-500/20 group">
                <span className="font-mono uppercase tracking-wider">Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. MIDDLEWARE NERVOUS SYSTEM: 3-Column Grid */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="font-mono text-xs text-blue-600 font-bold uppercase tracking-widest">
              Full Topology
            </span>
            <h2 className="text-3xl font-bold text-slate-900 mt-2">The 7-Node Nervous System</h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              Event-driven synchronization mapping every kernel to the central bus. Circuit board topology where Kafka is the CPU.
            </p>
          </div>

          {/* 3-COLUMN LAYOUT: CARE | HUB | ADMIN */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
             
             {/* COLUMN 1: CARE DELIVERY (Left) */}
             <div className="space-y-4">
                <ServiceCard 
                    title="Clinical Core" 
                    subtitle="OpenMRS 3.x" 
                    icon={<Activity className="w-5 h-5 text-blue-600" />} 
                    port="8081" 
                    tech="FHIR R4"
                />
                <ServiceCard 
                    title="Diagnostic Core" 
                    subtitle="OpenELIS 2.0" 
                    icon={<Database className="w-5 h-5 text-purple-600" />} 
                    port="8083" 
                    tech="ASTM / HL7"
                />
                <ServiceCard 
                    title="Imaging Core" 
                    subtitle="Orthanc PACS" 
                    icon={<Scan className="w-5 h-5 text-pink-600" />} 
                    port="8042" 
                    tech="DICOM Web"
                />
             </div>

             {/* COLUMN 2: THE HUB (Center) */}
             <div className="space-y-4 relative z-10">
                {/* GATEWAY (Top) */}
                <div className="p-4 bg-indigo-50 border border-indigo-100 rounded-xl text-center mx-auto w-full md:w-11/12">
                    <div className="flex justify-center mb-1"><Globe className="w-5 h-5 text-indigo-600" /></div>
                    <div className="font-bold text-indigo-900 text-sm">OpenHIE Mediator</div>
                    <div className="text-[10px] text-indigo-600 font-mono">PORT: 5000 (NATIONAL GATEWAY)</div>
                </div>

                {/* KAFKA (Middle - The Heart) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  animate={{ 
                    boxShadow: [
                      '0 0 0px rgba(16, 185, 129, 0)',
                      '0 0 20px rgba(16, 185, 129, 0.5)',
                      '0 0 0px rgba(16, 185, 129, 0)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="p-8 bg-slate-900 text-white rounded-2xl shadow-2xl overflow-hidden text-center relative border-b-4 border-emerald-500 py-12"
                >
                    <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
                    <div className="relative">
                        <div className="inline-flex items-center gap-2 mb-4 text-emerald-400">
                            <GitMerge className="w-10 h-10" />
                        </div>
                        <h3 className="font-bold tracking-wider text-xl mb-1">APACHE KAFKA</h3>
                        <p className="text-xs text-slate-400 mb-6">Central Nervous System</p>
                        <div className="text-left bg-slate-950 p-3 rounded border border-slate-800 font-mono text-[10px] space-y-2">
                            <div className="flex justify-between"><span className="text-blue-400">IN:</span> <span>nidan.patient.*</span></div>
                            <div className="flex justify-between"><span className="text-orange-400">IN:</span> <span>nidan.invoice.*</span></div>
                            <div className="flex justify-between"><span className="text-purple-400">IN:</span> <span>nidan.lab.final</span></div>
                        </div>
                    </div>
                </motion.div>

                {/* INTELLIGENCE (Bottom) */}
                <div className="p-4 bg-slate-100 border border-slate-200 rounded-xl text-center mx-auto w-full md:w-11/12">
                    <div className="flex justify-center mb-1"><BarChart3 className="w-5 h-5 text-slate-600" /></div>
                    <div className="font-bold text-slate-900 text-sm">Superset Intelligence</div>
                    <div className="text-[10px] text-slate-500 font-mono">PORT: 8088 (ANALYTICS)</div>
                </div>
             </div>

             {/* COLUMN 3: OPERATIONS (Right) */}
             <div className="space-y-4">
                <Link href="/solutions/fiscal-integrity">
                    <ServiceCard 
                        title="Fiscal Core" 
                        subtitle="Odoo 19 ERP" 
                        icon={<CreditCard className="w-5 h-5 text-orange-600" />} 
                        port="8082" 
                        tech="JSON-RPC"
                    />
                </Link>
                <ServiceCard 
                    title="Insurance Core" 
                    subtitle="OpenIMIS" 
                    icon={<Shield className="w-5 h-5 text-emerald-600" />} 
                    port="8000" 
                    tech="Claims API"
                />
                <div className="group relative p-5 border border-dashed border-slate-300 rounded-xl flex flex-col items-center justify-center text-slate-400 text-xs font-mono bg-slate-50/50 hover:bg-slate-50 transition-all cursor-pointer overflow-hidden">
                    
                    {/* HOVER GLOW - Make it Green/Emerald to signal "Ready" instead of generic Blue */}
                    <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    {/* STATIC CONTENT */}
                    <div className="z-10 flex flex-col items-center gap-2 group-hover:translate-y-[-4px] transition-transform">
                        {/* SWAP "+" FOR PLUG ICON */}
                        <div className="p-2 rounded-full bg-slate-100 group-hover:bg-emerald-100 group-hover:text-emerald-600 transition-colors">
                            <Plug className="w-4 h-4" /> 
                        </div>
                        <span className="group-hover:text-emerald-700 transition-colors">[ EXPANSION_NODE ]</span>
                    </div>

                    {/* TOOLTIP - Make it clearer */}
                    <div className="absolute bottom-3 text-[10px] text-emerald-600 font-bold opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        INITIALIZE_CUSTOM_MODULE
                    </div>
                </div>
             </div>

          </div>
        </div>
      </section>

      {/* 3. THE MODULES GRID: The Ecosystem */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center">
            <span className="font-mono text-xs text-slate-400 uppercase tracking-widest">The Ecosystem</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-2">Seven Integrated Kernels</h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              Each kernel delivers specific business capabilities, synchronized via the event-driven architecture above.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Module 1: Clinical */}
            <ModuleCard
              icon={Activity}
              label="01_CLINICAL"
              title="OpenMRS 3.x"
              desc="Clinical efficiency designed for high-volume OPDs. Streamlined workflows reduce wait times and improve patient throughput."
              color="blue"
            />

            {/* Module 2: Diagnostic */}
            <ModuleCard
              icon={FileText}
              label="02_DIAGNOSTIC"
              title="OpenELIS 2.0"
              desc="End-to-end sample tracking from collection to results delivery. Automatic analyzer integration eliminates manual data entry errors."
              color="green"
            />

            {/* Module 3: Fiscal */}
            <ModuleCard
              icon={CreditCard}
              label="03_FISCAL"
              title="Odoo 19"
              desc="Unified revenue cycle management. Every clinical event automatically generates billing entries, ensuring 100% capture."
              color="orange"
            />

            {/* Module 4: Imaging */}
            <ModuleCard
              icon={Eye}
              label="04_IMAGING"
              title="Orthanc + OHIF"
              desc="Zero-footprint DICOM viewing integrated into patient charts. Radiologists access studies without separate PACS logins."
              color="purple"
            />

            {/* Module 5: Intelligence */}
            <ModuleCard
              icon={BarChart3}
              label="05_INTELLIGENCE"
              title="DHIS2 + Superset"
              desc="Real-time dashboards transform raw clinical data into actionable insights for operational and clinical decision-making."
              color="indigo"
            />

            {/* Module 6: Insurance */}
            <ModuleCard
              icon={Shield}
              label="06_INSURANCE"
              title="OpenIMIS"
              desc="Automated claims processing eliminates paperwork delays. Eligibility verification happens at point-of-care, not billing office."
              color="teal"
            />

            {/* Module 7: Interoperability */}
            <ModuleCard
              icon={GitFork}
              label="07_INTEROP"
              title="OpenHIE"
              desc="National health exchange connectivity ensures seamless data sharing with regional and national health registries."
              color="purple"
            />

          </div>
        </div>
      </section>

      {/* 4. THE PATIENT LOOP: PHR Section */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            
            {/* Left: Content */}
            <div className="flex-1">
              <div className="font-mono text-xs text-blue-600 mb-4 uppercase tracking-widest">
                Patient Health Record
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-slate-900">
                The System in<br/>
                <span className="text-blue-600">Their Pocket.</span>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl">
                NidanPHR extends the hospital into the community. Patients own their records. 
                View appointments, lab results, and medication history from any device.
              </p>
              
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <Smartphone className="w-6 h-6 text-blue-600" />
                  <div>
                    <div className="font-bold text-slate-900">Mobile App</div>
                    <div className="text-sm text-slate-600">iOS & Android</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Database className="w-6 h-6 text-blue-600" />
                  <div>
                    <div className="font-bold text-slate-900">Patient Portal</div>
                    <div className="text-sm text-slate-600">Web-based access</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-600" />
                  <div>
                    <div className="font-bold text-slate-900">Ownership</div>
                    <div className="text-sm text-slate-600">Data stays with patient</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Mobile Frame Mock */}
            <div className="flex-1 max-w-sm">
              <div className="relative">
                {/* Phone Frame */}
                <div className="p-2 bg-slate-900 rounded-3xl shadow-2xl">
                  <div className="bg-white rounded-2xl overflow-hidden">
                    {/* Status Bar */}
                    <div className="bg-blue-600 text-white text-xs font-mono px-4 py-2 flex justify-between">
                      <span>NidanPHR</span>
                      <span>9:41 AM</span>
                    </div>
                    
                    {/* App Content */}
                    <div className="p-4 space-y-4">
                      <div className="font-mono text-xs text-slate-400 mb-4 uppercase">PATIENT HEALTH RECORD</div>
                      
                      {/* Appointments */}
                      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <div className="font-bold text-slate-900 mb-2 text-sm">Upcoming Appointments</div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-xs">
                            <span className="text-slate-600">Dr. Sharma</span>
                            <span className="font-mono text-blue-600">Jan 22, 10:00 AM</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Lab Results */}
                      <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                        <div className="font-bold text-slate-900 mb-2 text-sm">Recent Lab Results</div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-xs">
                            <span className="text-slate-600">CBC - Complete Blood Count</span>
                            <span className="font-mono text-green-600">✓ Normal</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Medication History */}
                      <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                        <div className="font-bold text-slate-900 mb-2 text-sm">Active Medications</div>
                        <div className="text-xs text-slate-600">Amoxicillin 500mg</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. OFFLINE-FIRST PROMISE: Edge Architecture */}
      <section className="py-24 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            
            {/* Left: Content */}
            <div className="flex-1">
              <div className="font-mono text-xs text-emerald-400 mb-4 uppercase tracking-widest">
                Edge Architecture
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                Internet is optional.<br/>
                <span className="text-emerald-400">Care is mandatory.</span>
              </h2>
              <p className="text-xl text-slate-400 leading-relaxed mb-8 max-w-2xl">
                NidanEHR operates fully offline. Event Bus queues messages locally. 
                When connectivity returns, synchronization happens automatically.
              </p>
              
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <WifiOff className="w-6 h-6 text-emerald-400" />
                  <div>
                    <div className="font-bold text-white">Offline Mode</div>
                    <div className="text-sm text-slate-400">Full functionality without internet</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Database className="w-6 h-6 text-emerald-400" />
                  <div>
                    <div className="font-bold text-white">Local Event Queue</div>
                    <div className="text-sm text-slate-400">Messages stored on-premise</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="w-6 h-6 text-emerald-400" />
                  <div>
                    <div className="font-bold text-white">Auto-Sync</div>
                    <div className="text-sm text-slate-400">Background synchronization</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: System Status Terminal */}
            <div className="flex-1 max-w-md">
              <div className="p-8 bg-slate-800 border-2 border-slate-700 rounded-xl font-mono text-sm">
                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-slate-700">
                  <Terminal className="w-5 h-5 text-emerald-400" />
                  <span className="text-emerald-400 font-bold">SYSTEM STATUS</span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-slate-900 rounded-lg border border-slate-700">
                    <span className="text-slate-300">Connectivity:</span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                      <span className="text-red-400 font-bold">DISCONNECTED</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-slate-900 rounded-lg border border-slate-700">
                    <span className="text-slate-300">Local Core:</span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                      <span className="text-emerald-400 font-bold">RUNNING</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-slate-900 rounded-lg border border-slate-700">
                    <span className="text-slate-300">Event Queue:</span>
                    <span className="text-blue-400 font-bold">47 PENDING</span>
                  </div>
                  
                  <div className="p-4 bg-emerald-900/20 border border-emerald-500/30 rounded-lg">
                    <p className="text-xs text-emerald-300 font-mono">
                      All clinical operations continue normally.<br/>
                      Messages will sync when connection restored.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. CTA FOOTER: Terminal-Style */}
      <section className="py-20 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8 text-center">
            <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest">Initialize Nidan Stack</span>
            <h2 className="text-3xl font-black mb-6 mt-2 font-mono">Ready to Deploy?</h2>
          </div>

          {/* Terminal Command Box */}
          <div className="p-8 bg-slate-800 border-2 border-slate-700 rounded-xl font-mono mb-8">
            <div className="flex items-center gap-2 mb-4 pb-4 border-b border-slate-700">
              <Terminal className="w-5 h-5 text-emerald-400" />
              <span className="text-emerald-400 font-bold">nidan-cli</span>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-slate-400">$</span>
                <motion.code
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-emerald-400 font-mono text-sm"
                >
                  nidan-cli deploy --sovereign
                </motion.code>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-emerald-400"
                >
                  _
                </motion.span>
              </div>
              
              <div className="mt-6 pt-6 border-t border-slate-700 text-sm text-slate-400 space-y-2">
                <p className="text-green-400">✓ Validating architecture...</p>
                <p className="text-green-400">✓ Configuring Event Bus (Kafka)...</p>
                <p className="text-green-400">✓ Initializing Kernels (OpenMRS, Odoo, OpenELIS)...</p>
                <p className="text-slate-500">→ Ready to configure your instance?</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Link href="/consult?source=nidan_full_stack">
              <button className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg transition-colors flex items-center gap-3 mx-auto shadow-lg shadow-emerald-500/20 group">
                <span className="font-mono uppercase tracking-wider">Configure Your Instance</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

// Service Card Component (3-Column Grid)
const ServiceCard = ({ title, subtitle, icon, port, tech }: { 
  title: string, 
  subtitle: string, 
  icon: React.ReactNode, 
  port: string, 
  tech: string 
}) => (
  <div className="p-5 bg-white border border-slate-200 rounded-xl shadow-sm flex items-start gap-4 hover:border-blue-500 transition-all">
    <div className="p-2 bg-slate-50 rounded-lg shrink-0">{icon}</div>
    <div className="w-full">
        <div className="flex justify-between items-center mb-1">
            <h3 className="font-bold text-slate-900 text-sm">{title}</h3>
            <span className="font-mono text-[10px] text-slate-400">:{port}</span>
        </div>
        <p className="text-xs text-slate-500 mb-2">{subtitle}</p>
        <span className="inline-block px-2 py-0.5 bg-slate-100 text-[10px] font-mono rounded text-slate-600">
            {tech}
        </span>
    </div>
  </div>
);

// Status Badge Component (Hero Ticker)
const StatusBadge = ({ label, color }: { label: string, color: string }) => {
  // Map background colors to corresponding text colors
  const colorMap: Record<string, string> = {
    'bg-blue-500': 'text-blue-400',
    'bg-orange-500': 'text-orange-400',
    'bg-emerald-500': 'text-emerald-400',
    'bg-purple-500': 'text-purple-400',
    'bg-pink-500': 'text-pink-400',
    'bg-indigo-500': 'text-indigo-400',
    'bg-teal-500': 'text-teal-400'
  };
  
  const textColor = colorMap[color] || 'text-slate-400';
  
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/50 border border-slate-700 backdrop-blur-sm">
      <div className={`w-2 h-2 rounded-full ${color} animate-pulse`} />
      <span className={`font-mono text-xs font-bold ${textColor} tracking-wider`}>
        {label}
      </span>
    </div>
  );
};

// Star Topology Node Component
const StarTopologyNode = ({ 
  icon: Icon, 
  label, 
  title, 
  desc, 
  port,
  color,
  position,
  tag
}: { 
  icon: React.ElementType, 
  label: string, 
  title: string, 
  desc: string,
  port: string,
  color: string,
  position: string,
  tag?: string
}) => {
  const colorMap = {
    blue: { border: 'border-blue-500', text: 'text-blue-600', bg: 'bg-blue-50' },
    green: { border: 'border-green-500', text: 'text-green-600', bg: 'bg-green-50' },
    orange: { border: 'border-orange-500', text: 'text-orange-600', bg: 'bg-orange-50' },
    purple: { border: 'border-purple-500', text: 'text-purple-600', bg: 'bg-purple-50' },
    indigo: { border: 'border-indigo-500', text: 'text-indigo-600', bg: 'bg-indigo-50' },
    teal: { border: 'border-teal-500', text: 'text-teal-600', bg: 'bg-teal-50' }
  };

  const colors = colorMap[color as keyof typeof colorMap] || colorMap.blue;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={`relative p-6 bg-white border-2 ${colors.border} rounded-xl shadow-xl hover:shadow-2xl transition-all w-full`}
    >
      {tag && (
        <div className="absolute -top-2 -right-2 bg-purple-500 text-white text-[10px] font-mono px-2 py-1 rounded-full font-bold">
          {tag}
        </div>
      )}
      {React.createElement(Icon, { className: `w-8 h-8 ${colors.text} mb-3` })}
      <div className={`font-mono text-xs ${colors.text} mb-2 uppercase tracking-widest`}>{label}</div>
      <h3 className="text-lg font-bold text-slate-900 mb-1">{title}</h3>
      <p className="text-xs text-slate-600 mb-3">{desc}</p>
      <div className="font-mono text-xs text-slate-500">
        <span className="text-slate-400">Port:</span> {port}
      </div>
    </motion.div>
  );
};

// Star Topology Connections (Animated Lines)
const StarTopologyConnections = () => {
  return (
    <div className="absolute inset-0 pointer-events-none hidden md:block">
      {/* Lines will be rendered via SVG or CSS, simplified for mobile */}
      {/* In production, use SVG paths for proper circuit board feel */}
    </div>
  );
};

// Module Card Component
const ModuleCard = ({ 
  icon: Icon, 
  label, 
  title, 
  desc, 
  color 
}: { 
  icon: React.ElementType, 
  label: string, 
  title: string, 
  desc: string, 
  color: string 
}) => {
  const colorMap = {
    blue: { border: 'border-blue-500', text: 'text-blue-600', bg: 'bg-blue-50' },
    green: { border: 'border-green-500', text: 'text-green-600', bg: 'bg-green-50' },
    orange: { border: 'border-orange-500', text: 'text-orange-600', bg: 'bg-orange-50' },
    purple: { border: 'border-purple-500', text: 'text-purple-600', bg: 'bg-purple-50' },
    indigo: { border: 'border-indigo-500', text: 'text-indigo-600', bg: 'bg-indigo-50' },
    teal: { border: 'border-teal-500', text: 'text-teal-600', bg: 'bg-teal-50' }
  };

  const colors = colorMap[color as keyof typeof colorMap] || colorMap.blue;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`p-6 bg-white border-2 ${colors.border} rounded-xl shadow-sm hover:shadow-lg transition-all group`}
    >
      {React.createElement(Icon, { className: `w-8 h-8 ${colors.text} mb-4` })}
      <div className={`font-mono text-xs ${colors.text} mb-2 uppercase tracking-widest`}>{label}</div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
    </motion.div>
  );
};
