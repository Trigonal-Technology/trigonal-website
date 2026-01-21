'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, Terminal, Loader2 } from 'lucide-react';

// DOMAIN MATRIX: Maps every service to specific clickable tags
const DOMAIN_MATRIX = {
  EMR_CORE: {
    id: 'EMR_CORE',
    label: 'EMR / EHR CORE',
    description: 'Clinical Records & Workflows',
    sub_options: [
      { id: 'bahmni', label: 'Bahmni Standard' },
      { id: 'openmrs', label: 'OpenMRS 3.x' },
      { id: 'nidan', label: 'NidanEHR (Sovereign)' },
      { id: 'migration', label: 'Data Migration' }
    ]
  },
  RIS_PACS: {
    id: 'RIS_PACS',
    label: 'RADIOLOGY (RIS/PACS)',
    description: 'Imaging & DICOM Infrastructure',
    sub_options: [
      { id: 'orthanc', label: 'Orthanc Setup' },
      { id: 'orthanc_setup', label: 'Orthanc VNA Archive' },
      { id: 'dcm4chee', label: 'Dcm4chee Replacement' },
      { id: 'viewer', label: 'OHIF Viewer Integration' },
      { id: 'ohif_viewer', label: 'OHIF Zero-Footprint Viewer' },
      { id: 'dicom_routing', label: 'DICOM Auto-Forwarding' },
      { id: 'teleradiology', label: 'Teleradiology / Remote Access' },
      { id: 'billing_link', label: 'Billing Linkage' }
    ]
  },
  LIS_MIDDLEWARE: {
    id: 'LIS_MIDDLEWARE',
    label: 'LABORATORY (LIS)',
    description: 'Analyzer Automation & Middleware',
    sub_options: [
      { id: 'lab_bridge', label: 'Lab-Bridge Middleware' },
      { id: 'astm', label: 'Analyzer Interfacing (ASTM)' },
      { id: 'openelis', label: 'OpenELIS Setup' }
    ]
  },
  ODOO_ERP: {
    id: 'ODOO_ERP',
    label: 'ODOO ERP / BILLING',
    description: 'Hospital Finance & Operations',
    sub_options: [
      { id: 'billing', label: 'Revenue Cycle Mgmt' },
      { id: 'inventory', label: 'Inventory & Stock' },
      { id: 'crm', label: 'CRM & Patient Outreach' }
    ]
  },
  DATA_AI: {
    id: 'DATA_AI',
    label: 'DATA & INTELLIGENCE',
    description: 'Analytics, Warehousing & AI',
    sub_options: [
      { id: 'dhis2', label: 'DHIS2 Integration' },
      { id: 'dhis2_reporting', label: 'DHIS2 National Reporting' },
      { id: 'superset', label: 'Superset Dashboards' },
      { id: 'superset_bi', label: 'Superset Operational BI' },
      { id: 'predictive', label: 'Predictive Models' },
      { id: 'ai_forecasting', label: 'AI Forecasting Models' }
    ]
  },
  COMMUNITY: {
    id: 'COMMUNITY',
    label: 'COMMUNITY HEALTH',
    description: 'Offline-First Field Tools',
    sub_options: [
      { id: 'cht', label: 'Medic Mobile (CHT)' },
      { id: 'kobo', label: 'KoboToolbox Surveys' },
      { id: 'geotag', label: 'Geo-Tagging & Mapping' }
    ]
  },
  TELEHEALTH: {
    id: 'TELEHEALTH',
    label: 'TELEMEDICINE',
    description: 'Remote Care Systems',
    sub_options: [
      { id: 'webrtc', label: 'WebRTC Video Core' },
      { id: 'portal', label: 'Patient Portals' },
      { id: 'patient_app', label: 'Patient Mobile App' },
      { id: 'appointment_booking', label: 'Appointment Booking' },
      { id: 'teleconsultation', label: 'Teleconsultation' }
    ]
  },
  PHARMACY: {
    id: 'PHARMACY',
    label: 'PHARMACY SYSTEMS',
    description: 'Dispensing & Supply Chain',
    sub_options: [
      { id: 'dispensing', label: 'Dispensing Modules' },
      { id: 'supply_chain', label: 'Supply Chain Integration' }
    ]
  },
  INFRASTRUCTURE: {
    id: 'INFRASTRUCTURE',
    label: 'DEVOPS & INFRASTRUCTURE',
    description: 'Deployment & Security',
    sub_options: [
      { id: 'docker_k8s', label: 'Docker/K8s' },
      { id: 'cloud_migration', label: 'Cloud Migration' },
      { id: 'security_audit', label: 'Security Audit' },
      { id: 'on_premise', label: 'On-Premise Server' }
    ]
  }
} as const;

type DomainKey = keyof typeof DOMAIN_MATRIX;

const PROJECT_SCALES = [
  { value: 'SINGLE_FACILITY', label: 'SINGLE_FACILITY' },
  { value: 'MULTI_HOSPITAL', label: 'MULTI_HOSPITAL' },
  { value: 'NATIONAL_GOVT', label: 'NATIONAL_GOVT' }
] as const;

const TIMELINES = [
  { value: 'ASAP', label: 'ASAP (CRITICAL)', desc: 'Urgent - This month' },
  { value: 'Q1_2026', label: 'Q1_2026', desc: 'Next 3 months' },
  { value: 'PLANNING_PHASE', label: 'PLANNING_PHASE', desc: 'Research/Planning stage' }
] as const;

export const ConsultationConsole = () => {
  const searchParams = useSearchParams();
  
  // State Machine
  const [selectedDomains, setSelectedDomains] = useState<DomainKey[]>([]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [projectScale, setProjectScale] = useState<string>('SINGLE_FACILITY');
  const [timeline, setTimeline] = useState<string>('PLANNING_PHASE');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  // Identity fields
  const [identity, setIdentity] = useState({
    name: '',
    organization: '',
    email: ''
  });

  // Auto-Magic Logic: URL Parameter Parsing
  useEffect(() => {
    const source = searchParams.get('source');
    
    if (source === 'orthanc') {
      setSelectedDomains(['RIS_PACS']);
      setSelectedFeatures(['orthanc', 'billing_link']);
    } else if (source === 'lab_bridge' || source === 'case_study_parbat') {
      setSelectedDomains(['LIS_MIDDLEWARE']);
      setSelectedFeatures(['lab_bridge', 'astm']);
    } else if (source === 'nidan') {
      setSelectedDomains(['EMR_CORE']);
      setSelectedFeatures(['nidan']);
    } else if (source === 'manifesto') {
      setSelectedDomains(['INFRASTRUCTURE']);
      setSelectedFeatures(['security_audit']);
    } else if (source === 'telehealth') {
      setSelectedDomains(['TELEHEALTH']);
      setSelectedFeatures(['webrtc']);
    } else if (source === 'nidan_full_stack') {
      // SELECT THE ENTIRE ECOSYSTEM
      setSelectedDomains([
        'EMR_CORE', 
        'RIS_PACS', 
        'LIS_MIDDLEWARE', 
        'ODOO_ERP', 
        'DATA_AI'
      ]);
      // PRE-SELECT KEY FEATURES
      setSelectedFeatures([
        'bahmni', 'openmrs',          // EMR
        'orthanc', 'viewer',          // PACS
        'lab_bridge', 'openelis',     // LIS
        'billing', 'inventory',       // Odoo
        'superset', 'dhis2'           // Data
      ]);
      // SET SCALE & TIMELINE
      setProjectScale('MULTI_HOSPITAL');
      setTimeline('Q1_2026');
    } else if (source === 'fiscal_core') {
      // 1. Select the relevant Domains
      setSelectedDomains(['ODOO_ERP', 'PHARMACY']);
      
      // 2. Select the specific Features the user wants
      setSelectedFeatures([
        'billing',      // Covers Accounts/Revenue Cycle
        'inventory',    // Covers Stock
        'crm',          // Customer/Patient Relationship
        'dispensing',   // Pharmacy POS
        'supply_chain'  // Procurement
      ]);

      // 3. Set Context
      setProjectScale('MULTI_HOSPITAL'); // Usually implies high volume
      setTimeline('Q1_2026');
    } else if (source === 'imaging_core') {
      // 1. Select the Radiology Domain
      setSelectedDomains(['RIS_PACS']); 

      // 2. Auto-select relevant features
      setSelectedFeatures([
        'orthanc_setup', // VNA Archive
        'ohif_viewer',   // Zero Footprint Viewer
        'dicom_routing', // Auto-forwarding
        'teleradiology'  // Remote Access
      ]);

      // 3. Set Context
      setProjectScale('SINGLE_HOSPITAL'); // Default starting point
      setTimeline('Q1_2026');
    } else if (source === 'intelligence_core') {
      // 1. Select the Analytics Domain
      setSelectedDomains(['DATA_AI']); 
      
      // 2. Auto-select relevant features
      setSelectedFeatures([
        'dhis2_reporting',  // National Reporting
        'superset_bi',      // Operational BI
        'ai_forecasting'    // AI Forecasting
      ]);
      
      // 3. Set Context
      setProjectScale('MULTI_HOSPITAL'); // Usually regional/network level
      setTimeline('Q1_2026');
    } else if (source === 'nidan_phr') {
      // 1. Select the Telemedicine Domain
      setSelectedDomains(['TELEHEALTH']); 
      
      // 2. Auto-select relevant features
      setSelectedFeatures([
        'patient_app',        // Patient Mobile App
        'appointment_booking', // Appointment Booking
        'teleconsultation'    // Teleconsultation
      ]);
      
      // 3. Set Context
      setProjectScale('SINGLE_HOSPITAL'); 
      setTimeline('Q1_2026');
    } else if (source === 'codebase_review') {
      // 1. Select Technical Domains
      setSelectedDomains(['INFRASTRUCTURE']); 
      
      // 2. Pre-select "Architecture Review" features
      setSelectedFeatures([
        'security_audit',      // Security Audit
        'docker_k8s',          // Infrastructure Setup
        'on_premise'           // Deployment Architecture
      ]);

      // 3. Set the Tone (Technical buyer context)
      setProjectScale('MULTI_HOSPITAL'); // Usually implies complex architecture
      setTimeline('PLANNING_PHASE'); // Code reviews are typically planning phase
    }
    // If source=homepage or no source, no pre-selection (user chooses)
  }, [searchParams]);

  // Toggle domain selection
  const toggleDomain = (domain: DomainKey) => {
    setSelectedDomains(prev => {
      if (prev.includes(domain)) {
        // Remove domain and its features
        const domainFeatures = DOMAIN_MATRIX[domain].sub_options.map(opt => opt.id);
        setSelectedFeatures(feats => feats.filter(f => !domainFeatures.includes(f as any)));
        return prev.filter(d => d !== domain);
      } else {
        return [...prev, domain];
      }
    });
  };

  // Toggle feature selection
  const toggleFeature = (featureId: string) => {
    setSelectedFeatures(prev => 
      prev.includes(featureId) 
        ? prev.filter(f => f !== featureId)
        : [...prev, featureId]
    );
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!identity.name || !identity.organization || !identity.email) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Log the brief (replace with actual API call)
    console.log('=== CONSULTATION BRIEF ===');
    console.log('Domains:', selectedDomains);
    console.log('Features:', selectedFeatures);
    console.log('Scale:', projectScale);
    console.log('Timeline:', timeline);
    console.log('Identity:', identity);
    console.log('========================');

    setIsSubmitting(false);
    setShowSuccess(true);
  };

  if (showSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-slate-900 border-2 border-emerald-500 rounded-xl p-12 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
        >
          <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-6" />
        </motion.div>
        <h3 className="text-2xl font-bold text-white mb-4 font-mono uppercase tracking-widest">
          PROTOCOL INITIALIZED
        </h3>
        <p className="text-slate-400 mb-6 font-mono text-sm">
          An architect with 12+ years seniority has been assigned.
        </p>
        <p className="text-emerald-400 text-sm font-mono">
          Response Time: 24-48 hours
        </p>
      </motion.div>
    );
  }

  return (
    <div className="bg-slate-950 border-2 border-slate-800 rounded-xl p-8 md:p-12 text-white overflow-hidden relative">
      {/* CLI Header with Blinking Cursor */}
      <div className="flex items-center gap-3 mb-8 pb-6 border-b border-slate-800">
        <Terminal className="w-6 h-6 text-emerald-500" />
        <div className="flex items-center gap-2 font-mono text-sm uppercase tracking-widest">
          <span>PROJECT CONFIGURATOR</span>
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            className="text-emerald-500"
          >
            _
          </motion.span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-12">
        
        {/* STEP 1: Domain Selection (Grid) */}
        <section>
          <h2 className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
            <span className="text-blue-500">[01]</span>
            SELECT TARGET DOMAINS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(DOMAIN_MATRIX).map(([key, domain]) => {
              const isSelected = selectedDomains.includes(key as DomainKey);
              return (
                <motion.button
                  key={key}
                  type="button"
                  onClick={() => toggleDomain(key as DomainKey)}
                  className={`relative p-6 border-2 rounded-lg text-left transition-all ${
                    isSelected
                      ? 'border-blue-500 bg-blue-900/50 shadow-lg shadow-blue-500/20'
                      : 'border-slate-800 hover:border-blue-500/50 bg-slate-900'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSelected && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-3 right-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    </motion.div>
                  )}
                  <div className="font-mono text-[10px] text-slate-400 uppercase mb-2">
                    {domain.id}
                  </div>
                  <h3 className="text-base font-bold text-white font-mono uppercase mb-2">
                    {domain.label}
                  </h3>
                  <p className="text-xs text-slate-400 font-sans">
                    {domain.description}
                  </p>
                </motion.button>
              );
            })}
          </div>
        </section>

        {/* STEP 2: Scope Refinement (Dynamic Chips) */}
        <AnimatePresence>
          {selectedDomains.length > 0 && (
            <motion.section
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
                <span className="text-blue-500">[02]</span>
                REFINE SCOPE
              </h2>
              <div className="flex flex-wrap gap-3">
                {selectedDomains.map(domainKey => {
                  const domain = DOMAIN_MATRIX[domainKey];
                  return domain.sub_options.map((feature) => {
                    const isSelected = selectedFeatures.includes(feature.id);
                    return (
                      <motion.button
                        key={feature.id}
                        type="button"
                        onClick={() => toggleFeature(feature.id)}
                        className={`px-4 py-2 rounded-full border-2 text-xs font-mono uppercase transition-all ${
                          isSelected
                            ? 'border-emerald-500 bg-emerald-500/20 text-emerald-300'
                            : 'border-slate-700 text-slate-400 hover:border-slate-600 hover:text-slate-300 bg-slate-900'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {feature.label}
                      </motion.button>
                    );
                  });
                })}
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* STEP 3: Logistics (Toggles) */}
        <section>
          <h2 className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
            <span className="text-blue-500">[03]</span>
            OPERATIONAL LOGISTICS
          </h2>
          
          {/* Scale Selection */}
          <div className="mb-8">
            <label className="block font-mono text-[10px] uppercase text-slate-400 mb-4">
              PROJECT SCALE
            </label>
            <div className="flex gap-4">
              {PROJECT_SCALES.map((scale) => (
                <motion.button
                  key={scale.value}
                  type="button"
                  onClick={() => setProjectScale(scale.value)}
                  className={`px-6 py-3 border-2 rounded-lg font-mono text-xs font-bold transition-all ${
                    projectScale === scale.value
                      ? 'border-blue-500 bg-blue-500/20 text-blue-300'
                      : 'border-slate-800 text-slate-400 hover:border-slate-700 bg-slate-900'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  [{scale.label}]
                </motion.button>
              ))}
            </div>
          </div>

          {/* Timeline Selection */}
          <div>
            <label className="block font-mono text-[10px] uppercase text-slate-400 mb-4">
              TIMELINE
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {TIMELINES.map((tl) => (
                <motion.button
                  key={tl.value}
                  type="button"
                  onClick={() => setTimeline(tl.value)}
                  className={`p-4 border-2 rounded-lg text-left transition-all ${
                    timeline === tl.value
                      ? 'border-blue-500 bg-blue-500/20'
                      : 'border-slate-800 hover:border-slate-700 bg-slate-900'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="font-mono text-xs font-bold text-white mb-1">
                    [{tl.label}]
                  </div>
                  <div className="text-xs text-slate-400 font-sans">{tl.desc}</div>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* STEP 4: Identification (The Handshake) */}
        <section>
          <h2 className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
            <span className="text-blue-500">[04]</span>
            IDENTIFICATION HANDSHAKE
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block font-mono text-[10px] uppercase text-slate-400 mb-2">
                NAME *
              </label>
              <input
                type="text"
                required
                value={identity.name}
                onChange={(e) => setIdentity(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg text-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Dr. Jane Doe"
              />
            </div>
            <div>
              <label className="block font-mono text-[10px] uppercase text-slate-400 mb-2">
                ORGANIZATION *
              </label>
              <input
                type="text"
                required
                value={identity.organization}
                onChange={(e) => setIdentity(prev => ({ ...prev, organization: e.target.value }))}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg text-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Ministry of Health / Hospital"
              />
            </div>
          </div>
          <div className="mt-6">
            <label className="block font-mono text-[10px] uppercase text-slate-400 mb-2">
              EMAIL *
            </label>
            <input
              type="email"
              required
              value={identity.email}
              onChange={(e) => setIdentity(prev => ({ ...prev, email: e.target.value }))}
              className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg text-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="architect@organization.org"
            />
          </div>
        </section>

        {/* Submit Button */}
        <div className="pt-6 border-t border-slate-800">
          <motion.button
            type="submit"
            disabled={isSubmitting || !identity.name || !identity.organization || !identity.email}
            className="w-full py-4 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-800 disabled:cursor-not-allowed text-white font-mono text-sm font-bold uppercase tracking-widest rounded-lg transition-colors flex items-center justify-center gap-3 group"
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>INITIALIZING...</span>
              </>
            ) : (
              <>
                <span>INITIALIZE_PROTOCOL</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </motion.button>
        </div>

      </form>
    </div>
  );
};
