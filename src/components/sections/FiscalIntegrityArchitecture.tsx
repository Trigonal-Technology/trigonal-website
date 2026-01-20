'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Receipt, Database, Building2, Activity, ShoppingCart } from 'lucide-react';

export const FiscalIntegrityArchitecture = () => {
  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-slate-500 uppercase tracking-widest font-bold">
            Data Flow Architecture
          </span>
          <h2 className="text-4xl font-black text-slate-900 mt-2">
            Clinical/POS → Ledger → IRD
          </h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Every transaction flows through Odoo 19's audit-ready ledger before reaching 
            the tax authority. Real-time synchronization. Zero manual intervention.
          </p>
        </div>

        {/* ARCHITECTURE DIAGRAM */}
        <div className="relative bg-white rounded-xl border-2 border-slate-200 p-8 md:p-12 overflow-hidden">
          
          {/* MOBILE: VERTICAL STACK */}
          <div className="flex flex-col md:hidden gap-8">
            
            {/* SOURCE: CLINICAL/POS */}
            <div className="relative">
              <div className="bg-slate-900 text-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Activity className="w-6 h-6 text-orange-400" />
                  <h3 className="text-lg font-bold font-mono">CLINICAL/POS</h3>
                </div>
                <p className="text-slate-300 text-sm">OpenMRS • OpenELIS • Orthanc • POS Systems</p>
              </div>
              {/* Arrow Down */}
              <div className="absolute bottom-[-2rem] left-1/2 -translate-x-1/2 text-slate-400 text-2xl">↓</div>
            </div>

            {/* CORE: ODOO LEDGER */}
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-600 to-orange-700 text-white p-8 rounded-lg shadow-2xl border-4 border-orange-400">
                <div className="flex items-center gap-3 mb-4">
                  <Database className="w-8 h-8 text-white" />
                  <h3 className="text-xl font-black font-mono">ODOO 19 LEDGER</h3>
                </div>
                <p className="text-orange-100 text-sm mb-2">Real-time Financial Kernel</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-2 py-1 bg-white/20 rounded text-xs font-mono">AUDIT_TRAIL</span>
                  <span className="px-2 py-1 bg-white/20 rounded text-xs font-mono">TAX_CALC</span>
                  <span className="px-2 py-1 bg-white/20 rounded text-xs font-mono">RECONCILE</span>
                </div>
              </div>
              {/* Arrow Down */}
              <div className="absolute bottom-[-2rem] left-1/2 -translate-x-1/2 text-slate-400 text-2xl">↓</div>
            </div>

            {/* DESTINATION: IRD */}
            <div className="relative">
              <div className="bg-slate-800 text-white p-6 rounded-lg shadow-lg border-2 border-slate-600">
                <div className="flex items-center gap-3 mb-3">
                  <Building2 className="w-6 h-6 text-orange-400" />
                  <h3 className="text-lg font-bold font-mono">IRD (TAX AUTHORITY)</h3>
                </div>
                <p className="text-slate-300 text-sm">Compliant Reporting • Automated Submission</p>
              </div>
            </div>

          </div>

          {/* DESKTOP: HORIZONTAL FLOW */}
          <div className="hidden md:flex items-center justify-between gap-8">
            
            {/* SOURCE: CLINICAL/POS */}
            <div className="flex-1 relative">
              <div className="bg-slate-900 text-white p-8 rounded-xl shadow-xl">
                <div className="flex flex-col items-center gap-4 mb-6">
                  <div className="p-4 bg-slate-800 rounded-lg">
                    <Activity className="w-8 h-8 text-orange-400" />
                  </div>
                  <h3 className="text-xl font-black font-mono text-center">CLINICAL/POS</h3>
                  <p className="text-slate-300 text-sm text-center">OpenMRS • OpenELIS • Orthanc</p>
                </div>
                
                {/* ANIMATED DATA PACKETS */}
                <div className="space-y-2">
                  <motion.div
                    className="bg-slate-800 text-xs font-mono px-2 py-1 rounded text-orange-400"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    [CLINICAL_EVENT]
                  </motion.div>
                  <motion.div
                    className="bg-slate-800 text-xs font-mono px-2 py-1 rounded text-orange-400"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  >
                    [POS_TRANSACTION]
                  </motion.div>
                </div>
              </div>
              
              {/* ANIMATED CONDUIT */}
              <div className="absolute top-1/2 right-[-2rem] w-16 h-1 bg-slate-300 rounded-full">
                <motion.div
                  className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-orange-500 rounded-full shadow-lg"
                  animate={{ x: [0, 64] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </div>

            {/* CORE: ODOO LEDGER */}
            <div className="relative z-10 flex-shrink-0">
              <div className="bg-gradient-to-br from-orange-600 to-orange-700 text-white p-10 rounded-xl shadow-2xl border-4 border-orange-400 min-w-[280px]">
                <div className="flex flex-col items-center gap-4 mb-6">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="p-4 bg-white/20 rounded-full"
                  >
                    <Database className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-black font-mono text-center">ODOO 19</h3>
                  <p className="text-orange-100 text-sm text-center font-bold">AUDIT-READY LEDGER</p>
                </div>
                
                <div className="space-y-2">
                  <div className="bg-white/20 px-3 py-2 rounded text-xs font-mono text-center">
                    REAL-TIME SYNC
                  </div>
                  <div className="bg-white/20 px-3 py-2 rounded text-xs font-mono text-center">
                    IRD-COMPLIANT
                  </div>
                  <div className="bg-white/20 px-3 py-2 rounded text-xs font-mono text-center">
                    IMMUTABLE LOGS
                  </div>
                </div>
              </div>
              
              {/* ANIMATED CONDUIT */}
              <div className="absolute top-1/2 left-[-2rem] w-16 h-1 bg-slate-300 rounded-full">
                <motion.div
                  className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-orange-500 rounded-full shadow-lg"
                  animate={{ x: [0, 64] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
                />
              </div>
              <div className="absolute top-1/2 right-[-2rem] w-16 h-1 bg-slate-300 rounded-full">
                <motion.div
                  className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-orange-500 rounded-full shadow-lg"
                  animate={{ x: [0, 64] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1.5 }}
                />
              </div>
            </div>

            {/* DESTINATION: IRD */}
            <div className="flex-1 relative">
              <div className="bg-slate-800 text-white p-8 rounded-xl shadow-xl border-2 border-slate-600">
                <div className="flex flex-col items-center gap-4 mb-6">
                  <div className="p-4 bg-slate-700 rounded-lg">
                    <Building2 className="w-8 h-8 text-orange-400" />
                  </div>
                  <h3 className="text-xl font-black font-mono text-center">IRD</h3>
                  <p className="text-slate-300 text-sm text-center">TAX AUTHORITY</p>
                </div>
                
                {/* ANIMATED DATA PACKETS */}
                <div className="space-y-2">
                  <motion.div
                    className="bg-slate-700 text-xs font-mono px-2 py-1 rounded text-green-400"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  >
                    [COMPLIANT_REPORT]
                  </motion.div>
                  <motion.div
                    className="bg-slate-700 text-xs font-mono px-2 py-1 rounded text-green-400"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
                  >
                    [AUDIT_TRAIL]
                  </motion.div>
                </div>
              </div>
              
              {/* ANIMATED CONDUIT */}
              <div className="absolute top-1/2 left-[-2rem] w-16 h-1 bg-slate-300 rounded-full">
                <motion.div
                  className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-orange-500 rounded-full shadow-lg"
                  animate={{ x: [0, 64] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 2 }}
                />
              </div>
            </div>

          </div>

        </div>

        {/* LEGEND */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <span className="text-slate-600 font-mono text-xs">Real-time Data Flow</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-slate-900 rounded-full"></div>
            <span className="text-slate-600 font-mono text-xs">Clinical/POS Source</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
            <span className="text-slate-600 font-mono text-xs">Odoo 19 Kernel</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-slate-800 rounded-full"></div>
            <span className="text-slate-600 font-mono text-xs">IRD Compliance</span>
          </div>
        </div>

      </div>
    </section>
  );
};
