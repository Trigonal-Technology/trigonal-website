'use client';

import React, { useState } from 'react';
import { Section } from '@/components/ui/trigonal';
import { Database, Server, Shield, Activity, Share2, CreditCard } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const tabs = [
  { id: 'clinical', label: 'Clinical Core', icon: Activity, color: 'text-blue-500' },
  { id: 'fiscal', label: 'Fiscal Engine', icon: CreditCard, color: 'text-orange-500' },
  { id: 'interop', label: 'Interoperability', icon: Share2, color: 'text-purple-500' },
  { id: 'security', label: 'Data Sovereignty', icon: Shield, color: 'text-emerald-500' },
];

export function ArchitectureTabs() {
  const [activeTab, setActiveTab] = useState('clinical');

  return (
    <Section variant="slate">
      <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
        
        {/* LEFT: Tab Navigation */}
        <div className="lg:w-1/3 space-y-2">
           {tabs.map((tab) => (
             <button
               key={tab.id}
               onClick={() => setActiveTab(tab.id)}
               className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center gap-3 ${
                 activeTab === tab.id 
                   ? 'bg-white border-blue-200 shadow-lg scale-105' 
                   : 'bg-transparent border-transparent hover:bg-slate-200/50'
               }`}
             >
               <div className={`p-2 rounded-lg bg-slate-100 ${activeTab === tab.id ? 'bg-blue-50' : ''}`}>
                 <tab.icon className={`w-5 h-5 ${tab.color}`} />
               </div>
               <span className={`font-bold ${activeTab === tab.id ? 'text-slate-900' : 'text-slate-500'}`}>
                 {tab.label}
               </span>
             </button>
           ))}
        </div>

        {/* RIGHT: Content Area */}
        <div className="lg:w-2/3 bg-white border border-slate-200 rounded-2xl p-8 min-h-[400px] shadow-sm relative overflow-hidden">
           <AnimatePresence mode='wait'>
             <motion.div
               key={activeTab}
               initial={{ opacity: 0, x: 10 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: -10 }}
               transition={{ duration: 0.2 }}
             >
               {activeTab === 'clinical' && <ClinicalContent />}
               {activeTab === 'fiscal' && <FiscalContent />}
               {activeTab === 'interop' && <InteropContent />}
               {activeTab === 'security' && <SecurityContent />}
             </motion.div>
           </AnimatePresence>
        </div>

      </div>
    </Section>
  );
}

// --- SUB-COMPONENTS FOR CONTENT ---

function ClinicalContent() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
         <Activity className="w-8 h-8 text-blue-600" />
         <h3 className="text-2xl font-bold text-slate-900">OpenMRS 3 + Bahmni</h3>
      </div>
      <p className="text-slate-600 leading-relaxed">
        The clinical kernel is built on the <strong>OpenMRS 3.0</strong> microfrontend framework. 
        It decouples the UI from the backend API, allowing for rapid customization of forms and workflows 
        without forking the core codebase.
      </p>
      <div className="grid grid-cols-2 gap-4 mt-8">
         <TechBadge label="React.js / Carbon Design" />
         <TechBadge label="Java Spring Boot API" />
         <TechBadge label="MySQL / PostgreSQL" />
         <TechBadge label="Microfrontend Architecture" />
      </div>
    </div>
  );
}

function FiscalContent() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
         <CreditCard className="w-8 h-8 text-orange-600" />
         <h3 className="text-2xl font-bold text-slate-900">Odoo 19 Revenue Cycle</h3>
      </div>
      <p className="text-slate-600 leading-relaxed">
        We do not use simple billing scripts. We deploy a full <strong>Double-Entry ERP (Odoo)</strong>. 
        Every clinical order (Lab, Pharmacy) triggers a corresponding draft invoice in the ledger, 
        ensuring zero revenue leakage.
      </p>
      <div className="grid grid-cols-2 gap-4 mt-8">
         <TechBadge label="Python / ORM" />
         <TechBadge label="Double-Entry Ledger" />
         <TechBadge label="Stock Valuation (FIFO)" />
         <TechBadge label="IRD Compliant (Nepal)" />
      </div>
    </div>
  );
}

function InteropContent() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
         <Share2 className="w-8 h-8 text-purple-600" />
         <h3 className="text-2xl font-bold text-slate-900">The Integration Spine</h3>
      </div>
      <p className="text-slate-600 leading-relaxed">
        Trigonal uses <strong>Apache Camel</strong> and <strong>OpenHIM</strong> to route messages between systems. 
        We enforce HL7 FHIR R4 standards for all patient data exchanges, ensuring your hospital 
        can talk to national health exchanges.
      </p>
      <div className="grid grid-cols-2 gap-4 mt-8">
         <TechBadge label="HL7 FHIR R4" />
         <TechBadge label="Apache Camel Routes" />
         <TechBadge label="OpenHIM Gateway" />
         <TechBadge label="Debezium (CDC)" />
      </div>
    </div>
  );
}

function SecurityContent() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
         <Shield className="w-8 h-8 text-emerald-600" />
         <h3 className="text-2xl font-bold text-slate-900">Sovereignty & Security</h3>
      </div>
      <p className="text-slate-600 leading-relaxed">
        Our architecture assumes a "Zero Trust" environment. All data at rest is encrypted (AES-256). 
        Identity is managed via <strong>Keycloak</strong>, providing Single Sign-On (SSO) 
        across Clinical, Lab, and ERP modules.
      </p>
      <div className="grid grid-cols-2 gap-4 mt-8">
         <TechBadge label="Keycloak SSO" />
         <TechBadge label="Role-Based Access (RBAC)" />
         <TechBadge label="Audit Trails" />
         <TechBadge label="On-Prem / Hybrid" />
      </div>
    </div>
  );
}

function TechBadge({ label }: { label: string }) {
  return (
    <div className="p-3 bg-slate-50 border border-slate-100 rounded-lg text-xs font-bold text-slate-600 flex items-center gap-2">
      <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
      {label}
    </div>
  );
}
