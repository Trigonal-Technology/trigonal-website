'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, Terminal, Loader2 } from 'lucide-react';

// DOMAIN MATRIX: Maps high-level domains to specific technical deliverables
const DOMAIN_MATRIX = {
  EMR_IMPLEMENTATION: {
    label: "EMR / EHR CORE",
    sub_options: ["Bahmni Standard", "OpenMRS 3.x", "NidanEHR (Sovereign)", "Data Migration", "Custom Module Dev"]
  },
  RIS_PACS: {
    label: "RADIOLOGY (RIS/PACS)",
    sub_options: ["Orthanc Setup", "Dcm4chee Replacement", "Modality Integration", "OHIF Viewer", "Billing Linkage"]
  },
  LIS_MIDDLEWARE: {
    label: "LABORATORY (LIS)",
    sub_options: ["Lab-Bridge Middleware", "OpenELIS Setup", "Analyzer Interfacing (ASTM)", "Bi-Directional Flow"]
  },
  DATA_AI: {
    label: "DATA & INTELLIGENCE",
    sub_options: ["DHIS2 Integration", "Predictive Analytics", "Superset Dashboards", "ETL Pipelines"]
  },
  ERP_BILLING: {
    label: "ODOO ERP / BILLING",
    sub_options: ["Revenue Cycle Mgmt", "Inventory & Stock", "Pharmacy Billing", "Insurance Claims"]
  },
  COMMUNITY_HEALTH: {
    label: "COMMUNITY (CHT)",
    sub_options: ["Offline-First Apps", "Medic Mobile (CHT)", "Geo-Tagging", "Household Registration"]
  },
  TELEMEDICINE: {
    label: "TELEHEALTH",
    sub_options: ["WebRTC Video", "Remote Consultation", "Patient Portal", "SMS Notifications"]
  },
  INFRASTRUCTURE: {
    label: "DEVOPS & INFRA",
    sub_options: ["Docker/K8s", "On-Premise Server", "Cloud Migration", "Security Audit"]
  }
} as const;

type DomainKey = keyof typeof DOMAIN_MATRIX;

const PROJECT_SCALES = [
  { value: 'SINGLE_FACILITY', label: 'Single Facility', desc: 'One hospital/clinic' },
  { value: 'MULTI_HOSPITAL', label: 'Multi-Hospital', desc: 'Regional network' },
  { value: 'NATIONAL_SCALE', label: 'National Scale', desc: 'Country-wide deployment' }
] as const;

const TIMELINES = [
  { value: 'IMMEDIATE', label: 'IMMEDIATE', desc: 'Urgent - This month' },
  { value: 'THIS_QUARTER', label: 'THIS_QUARTER', desc: 'Next 3 months' },
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

  // URL Parameter Logic: Auto-select based on source
  useEffect(() => {
    const source = searchParams.get('source');
    
    if (source === 'lab_bridge') {
      setSelectedDomains(['LIS_MIDDLEWARE']);
      setSelectedFeatures(['Lab-Bridge Middleware']);
    } else if (source === 'orthanc') {
      setSelectedDomains(['RIS_PACS']);
      setSelectedFeatures(['Orthanc Setup']);
    } else if (source === 'nidan') {
      setSelectedDomains(['EMR_IMPLEMENTATION']);
      setSelectedFeatures(['NidanEHR (Sovereign)']);
    } else if (searchParams.get('domain') === 'diagnostic_middleware') {
      setSelectedDomains(['LIS_MIDDLEWARE']);
      setSelectedFeatures(['Lab-Bridge Middleware', 'Analyzer Interfacing (ASTM)']);
    } else if (searchParams.get('domain') === 'infrastructure_gap') {
      setSelectedDomains(['RIS_PACS', 'INFRASTRUCTURE']);
      setSelectedFeatures(['Orthanc Setup', 'Docker/K8s']);
    }
  }, [searchParams]);

  // Derived: Get all available features from selected domains
  const availableFeatures = selectedDomains.flatMap(domain => 
    DOMAIN_MATRIX[domain].sub_options
  );

  // Toggle domain selection
  const toggleDomain = (domain: DomainKey) => {
    setSelectedDomains(prev => {
      if (prev.includes(domain)) {
        // Remove domain and its features
        const domainFeatures = DOMAIN_MATRIX[domain].sub_options;
        setSelectedFeatures(feats => feats.filter(f => !domainFeatures.includes(f)));
        return prev.filter(d => d !== domain);
      } else {
        return [...prev, domain];
      }
    });
  };

  // Toggle feature selection
  const toggleFeature = (feature: string) => {
    setSelectedFeatures(prev => 
      prev.includes(feature) 
        ? prev.filter(f => f !== feature)
        : [...prev, feature]
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
          BRIEF TRANSMITTED
        </h3>
        <p className="text-slate-400 mb-6 font-mono text-sm">
          An architect with 12+ years seniority has been assigned.
        </p>
        <p className="text-emerald-400 text-sm font-mono">
          Response SLA: 24-48 hours
        </p>
      </motion.div>
    );
  }

  return (
    <div className="bg-slate-900 border-2 border-slate-700 rounded-xl p-8 md:p-12 text-white overflow-hidden relative">
      {/* CLI Header with Blinking Cursor */}
      <div className="flex items-center gap-3 mb-8 pb-6 border-b border-slate-700">
        <Terminal className="w-6 h-6 text-emerald-500" />
        <div className="flex items-center gap-2 font-mono text-sm uppercase tracking-widest">
          <span>INITIALIZE PROJECT PARAMETERS</span>
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
        
        {/* SECTION 1: Target Systems (Domain Matrix) */}
        <section>
          <h2 className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
            <span className="text-emerald-500">[01]</span>
            TARGET SYSTEMS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(DOMAIN_MATRIX).map(([key, domain]) => {
              const isSelected = selectedDomains.includes(key as DomainKey);
              return (
                <motion.button
                  key={key}
                  type="button"
                  onClick={() => toggleDomain(key as DomainKey)}
                  className={`relative p-4 border-2 rounded-lg text-left transition-all ${
                    isSelected
                      ? 'border-emerald-500 bg-emerald-500/10 shadow-lg shadow-emerald-500/20'
                      : 'border-slate-700 hover:border-slate-600'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] text-slate-400 uppercase">
                      {domain.label.split(' ')[0]}
                    </span>
                    {isSelected && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      </motion.div>
                    )}
                  </div>
                  <h3 className="text-sm font-bold text-white font-mono uppercase">
                    {domain.label.split('(')[0].trim()}
                  </h3>
                </motion.button>
              );
            })}
          </div>
        </section>

        {/* SECTION 2: Technical Specifics (Dynamic Render) */}
        <AnimatePresence>
          {selectedDomains.length > 0 && (
            <motion.section
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
                <span className="text-emerald-500">[02]</span>
                TECHNICAL SPECIFICS
              </h2>
              <div className="flex flex-wrap gap-3">
                {availableFeatures.map((feature) => {
                  const isSelected = selectedFeatures.includes(feature);
                  return (
                    <motion.button
                      key={feature}
                      type="button"
                      onClick={() => toggleFeature(feature)}
                      className={`px-4 py-2 rounded-full border-2 text-xs font-mono uppercase transition-all ${
                        isSelected
                          ? 'border-emerald-500 bg-emerald-500/20 text-emerald-300'
                          : 'border-slate-700 text-slate-400 hover:border-slate-600 hover:text-slate-300'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {feature}
                    </motion.button>
                  );
                })}
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* SECTION 3: Operational Context */}
        <section>
          <h2 className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
            <span className="text-emerald-500">[03]</span>
            OPERATIONAL CONTEXT
          </h2>
          
          {/* Scale Selection */}
          <div className="mb-8">
            <label className="block font-mono text-[10px] uppercase text-slate-400 mb-4">
              PROJECT SCALE
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {PROJECT_SCALES.map((scale) => (
                <motion.button
                  key={scale.value}
                  type="button"
                  onClick={() => setProjectScale(scale.value)}
                  className={`p-4 border-2 rounded-lg text-left transition-all ${
                    projectScale === scale.value
                      ? 'border-blue-500 bg-blue-500/10'
                      : 'border-slate-700 hover:border-slate-600'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="font-mono text-xs font-bold text-white mb-1">
                    {scale.label.replace('_', ' ')}
                  </div>
                  <div className="text-xs text-slate-400">{scale.desc}</div>
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
                      ? 'border-blue-500 bg-blue-500/10'
                      : 'border-slate-700 hover:border-slate-600'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="font-mono text-xs font-bold text-white mb-1">
                    {tl.label.replace('_', ' ')}
                  </div>
                  <div className="text-xs text-slate-400">{tl.desc}</div>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: Identity Handshake */}
        <section>
          <h2 className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
            <span className="text-emerald-500">[04]</span>
            IDENTITY HANDSHAKE
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
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
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
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
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
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
              placeholder="architect@organization.org"
            />
          </div>
        </section>

        {/* Submit Button */}
        <div className="pt-6 border-t border-slate-700">
          <motion.button
            type="submit"
            disabled={isSubmitting || !identity.name || !identity.organization || !identity.email}
            className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-700 disabled:cursor-not-allowed text-white font-mono text-sm font-bold uppercase tracking-widest rounded-lg transition-colors flex items-center justify-center gap-3 group"
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>TRANSMITTING...</span>
              </>
            ) : (
              <>
                <span>TRANSMIT BRIEF</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </motion.button>
        </div>

      </form>
    </div>
  );
};
