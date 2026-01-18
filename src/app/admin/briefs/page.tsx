'use client';
import React, { useState } from 'react';
import { 
  Clock, Building, AlertTriangle, CheckCircle2, 
  Terminal, Mail, Archive, ArrowRight 
} from 'lucide-react';

type ProjectBrief = {
  id: string;
  timestamp: string; // ISO Date
  identity: {
    name: string;
    org: string;
    email: string;
  };
  scope: {
    domains: string[]; // e.g., ["RIS_PACS", "DATA_AI"]
    features: string[]; // e.g., ["orthanc", "billing_link"]
  };
  logistics: {
    scale: 'SINGLE' | 'MULTI' | 'NATIONAL';
    timeline: 'ASAP' | 'Q1_2026' | 'PLANNING';
  };
  status: 'NEW' | 'REVIEWING' | 'ARCHIVED';
};

// MOCK DATA (Simulating DB Response)
const MOCK_BRIEFS: ProjectBrief[] = [
  {
    id: 'req_001',
    timestamp: '2026-01-19T08:30:00Z',
    identity: { name: 'Dr. Arju', org: 'Gandaki Province Hospital', email: 'director@gph.gov.np' },
    scope: { 
      domains: ['RIS_PACS', 'ODOO_ERP'], 
      features: ['orthanc', 'billing_link', 'inventory', 'revenue_cycle'] 
    },
    logistics: { scale: 'MULTI', timeline: 'ASAP' },
    status: 'NEW'
  },
  {
    id: 'req_002',
    timestamp: '2026-01-18T14:15:00Z',
    identity: { name: 'Sarah K.', org: 'Lumbini Zone Lab', email: 'sarah.k@lumbini.lab' },
    scope: { 
      domains: ['LIS_MIDDLEWARE'], 
      features: ['lab_bridge', 'astm', 'openelis'] 
    },
    logistics: { scale: 'SINGLE', timeline: 'Q1_2026' },
    status: 'REVIEWING'
  },
  {
    id: 'req_003',
    timestamp: '2026-01-17T10:00:00Z',
    identity: { name: 'Rajesh M.', org: 'Ministry of Health', email: 'rajesh.m@moh.gov.np' },
    scope: { 
      domains: ['EMR_CORE', 'DATA_AI', 'INFRASTRUCTURE'], 
      features: ['nidan', 'migration', 'dhis2', 'security_audit'] 
    },
    logistics: { scale: 'NATIONAL', timeline: 'ASAP' },
    status: 'NEW'
  }
];

export default function IncomingBriefsPage() {
  const [selectedBrief, setSelectedBrief] = useState<ProjectBrief>(MOCK_BRIEFS[0]);

  // Helper function to calculate relative time
  const getRelativeTime = (timestamp: string): string => {
    const now = new Date();
    const briefTime = new Date(timestamp);
    const diffMs = now.getTime() - briefTime.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffHours / 24);

    if (diffHours < 1) {
      const diffMins = Math.floor(diffMs / (1000 * 60));
      return `${diffMins} mins ago`;
    } else if (diffHours < 24) {
      return `${diffHours}h ago`;
    } else {
      return `${diffDays} days ago`;
    }
  };

  return (
    <div className="flex h-screen bg-slate-50 text-slate-900 font-sans">
      
      {/* ------------------------------------------------ */}
      {/* LEFT COLUMN: THE RADAR (List)                    */}
      {/* ------------------------------------------------ */}
      <div className="w-1/3 border-r border-slate-200 flex flex-col">
        <div className="p-6 border-b border-slate-200 bg-white">
          <h1 className="text-xl font-bold flex items-center gap-2">
            <Terminal className="w-5 h-5 text-blue-600" />
            Incoming Signals
          </h1>
          <p className="text-xs text-slate-500 mt-1">Live feed from Console.</p>
        </div>
        
        <div className="flex-1 overflow-y-auto bg-slate-50">
          {MOCK_BRIEFS.map((brief) => {
            const isUrgent = brief.logistics.timeline === 'ASAP';
            const isNational = brief.logistics.scale === 'NATIONAL';
            const borderColor = isUrgent ? 'border-l-red-600' : 'border-l-blue-600';
            
            return (
              <div 
                key={brief.id}
                onClick={() => setSelectedBrief(brief)}
                className={`p-5 border-b border-slate-200 cursor-pointer hover:bg-white transition-all ${
                  selectedBrief.id === brief.id 
                    ? `bg-white border-l-4 ${borderColor} shadow-sm` 
                    : 'border-l-4 border-l-transparent'
                }`}
              >
                <div className="flex justify-between items-start mb-1">
                  <span className="font-bold text-sm text-slate-800 truncate">{brief.identity.org}</span>
                  {isUrgent && (
                    <span className="bg-red-100 text-red-700 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shrink-0">
                      <AlertTriangle className="w-3 h-3" /> URGENT
                    </span>
                  )}
                </div>
                <div className="text-xs text-slate-500 mb-2">
                  {brief.identity.name} · {getRelativeTime(brief.timestamp)}
                </div>
                
                {/* Tech Tags Mini */}
                <div className="flex flex-wrap gap-1 mb-2">
                  {brief.scope.domains.map(d => (
                    <span key={d} className="text-[10px] bg-slate-200 text-slate-600 px-1.5 py-0.5 rounded font-mono">
                      {d.split('_')[0]}
                    </span>
                  ))}
                </div>
                
                {/* Status Badge */}
                {brief.status === 'NEW' && (
                  <span className="inline-block text-[9px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-bold">
                    NEW
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ------------------------------------------------ */}
      {/* RIGHT COLUMN: MISSION PROFILE (Detail)           */}
      {/* ------------------------------------------------ */}
      <div className="w-2/3 flex flex-col bg-white">
        
        {/* HEADER */}
        <div className="p-8 border-b border-slate-100 pb-8">
            <div className="flex justify-between items-start">
                <div>
                    <span className="font-mono text-xs text-blue-500 uppercase tracking-widest">
                        BRIEF_ID: {selectedBrief.id}
                    </span>
                    <h2 className="text-3xl font-black text-slate-900 mt-2 mb-1">
                        {selectedBrief.identity.org}
                    </h2>
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                        <span className="flex items-center gap-1"><Mail className="w-4 h-4" /> {selectedBrief.identity.email}</span>
                        <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {new Date(selectedBrief.timestamp).toLocaleDateString()}</span>
                    </div>
                </div>
                
                {/* Logistics Warning Bar */}
                <div className="flex gap-2">
                    <div className={`px-4 py-2 rounded-lg text-center ${
                      selectedBrief.logistics.scale === 'NATIONAL' ? 'bg-yellow-50 border-2 border-yellow-300' : 'bg-slate-100'
                    }`}>
                        <div className={`text-[10px] uppercase font-bold ${
                          selectedBrief.logistics.scale === 'NATIONAL' ? 'text-yellow-700' : 'text-slate-500'
                        }`}>Scale</div>
                        <div className={`font-bold ${
                          selectedBrief.logistics.scale === 'NATIONAL' ? 'text-yellow-900' : 'text-slate-900'
                        }`}>
                          {selectedBrief.logistics.scale === 'NATIONAL' && '⚠️ '}
                          {selectedBrief.logistics.scale}
                        </div>
                    </div>
                    <div className={`px-4 py-2 rounded-lg text-center ${
                      selectedBrief.logistics.timeline === 'ASAP' ? 'bg-red-50 border-2 border-red-300' : 'bg-slate-100'
                    }`}>
                        <div className={`text-[10px] uppercase font-bold ${
                          selectedBrief.logistics.timeline === 'ASAP' ? 'text-red-500' : 'text-slate-500'
                        }`}>Timeline</div>
                        <div className={`font-bold ${
                          selectedBrief.logistics.timeline === 'ASAP' ? 'text-red-700' : 'text-slate-900'
                        }`}>
                          {selectedBrief.logistics.timeline === 'ASAP' && '⚡ '}
                          {selectedBrief.logistics.timeline}
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Warning Banner for National/Urgent */}
            {(selectedBrief.logistics.scale === 'NATIONAL' || selectedBrief.logistics.timeline === 'ASAP') && (
              <div className={`mt-4 p-4 rounded-lg border-2 ${
                selectedBrief.logistics.scale === 'NATIONAL' && selectedBrief.logistics.timeline === 'ASAP'
                  ? 'bg-red-50 border-red-300'
                  : selectedBrief.logistics.scale === 'NATIONAL'
                  ? 'bg-yellow-50 border-yellow-300'
                  : 'bg-red-50 border-red-300'
              }`}>
                <div className={`font-bold text-sm ${
                  selectedBrief.logistics.scale === 'NATIONAL' && selectedBrief.logistics.timeline === 'ASAP'
                    ? 'text-red-900'
                    : selectedBrief.logistics.scale === 'NATIONAL'
                    ? 'text-yellow-900'
                    : 'text-red-900'
                }`}>
                  {selectedBrief.logistics.scale === 'NATIONAL' && '⚠️ HIGH IMPACT: NATIONAL SCALE'}
                  {selectedBrief.logistics.scale === 'NATIONAL' && selectedBrief.logistics.timeline === 'ASAP' && ' · '}
                  {selectedBrief.logistics.timeline === 'ASAP' && '⚡ TIMELINE: URGENT'}
                </div>
              </div>
            )}
        </div>

        {/* SCROLLABLE CONTENT */}
        <div className="flex-1 overflow-y-auto p-8">
            
            <h3 className="font-mono text-xs text-slate-400 uppercase font-bold mb-6 border-b border-slate-100 pb-2">REQUESTED ARCHITECTURE</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {selectedBrief.scope.domains.map((domain) => (
                    <div key={domain} className="p-6 bg-slate-900 text-white rounded-xl shadow-lg">
                        <div className="font-mono text-xs text-blue-400 mb-4 tracking-widest">{domain}</div>
                        <div className="space-y-3">
                            {selectedBrief.scope.features
                                .map((feat, idx) => (
                                    <div key={`${domain}-${feat}-${idx}`} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                                        <span className="text-sm font-medium text-slate-300 capitalize">
                                            {feat.replace(/_/g, ' ')}
                                        </span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 p-6 bg-blue-50 border border-blue-100 rounded-lg">
                <h4 className="text-blue-900 font-bold mb-2">AI Response Recommendation:</h4>
                <p className="text-blue-700 text-sm leading-relaxed">
                    Based on the request for <strong>{selectedBrief.scope.domains.join(' + ')}</strong> at a <strong>{selectedBrief.logistics.scale}</strong> scale, 
                    we should propose the 'Sovereign Stack' approach. Since the timeline is <strong>{selectedBrief.logistics.timeline}</strong>, 
                    recommend starting with a Phase 1 Architecture Audit immediately.
                </p>
            </div>

        </div>

        {/* ACTION FOOTER */}
        <div className="p-6 border-t border-slate-200 bg-slate-50 flex justify-end gap-4">
            <button className="px-6 py-3 bg-white border border-slate-300 text-slate-600 font-bold rounded-lg flex items-center gap-2 hover:bg-slate-100 transition-colors">
                <Archive className="w-4 h-4" /> Archive
            </button>
            <button className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg flex items-center gap-2 hover:bg-blue-500 shadow-lg shadow-blue-500/20 transition-colors">
                Generate Proposal Draft <ArrowRight className="w-4 h-4" />
            </button>
        </div>

      </div>
    </div>
  );
}
