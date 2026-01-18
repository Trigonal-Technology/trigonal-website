'use client';
import { motion } from 'framer-motion';
import { Settings, Server, Activity } from 'lucide-react';

export const LabBridgeArchitecture = () => {
  return (
    <div className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-blue-600 font-bold uppercase tracking-widest">System Architecture</span>
          <h2 className="text-4xl font-bold text-slate-900 mt-2">The Lab-Bridge Middleware Engine</h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
          
          {/* 1. SOURCE: ANALYZERS */}
          <div className="relative z-10 w-64 p-8 bg-white border border-slate-200 rounded-xl shadow-sm text-center">
            <div className="font-mono text-xs text-slate-400 mb-4">INPUT LAYER</div>
            <Activity className="w-8 h-8 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">Diagnostic Analyzers</h3>
            <p className="text-sm text-slate-500">Hematology, Biochem</p>
            <div className="mt-4 inline-block px-2 py-1 bg-slate-100 text-xs font-mono rounded">ASTM / RS232</div>
          </div>

          {/* 2. ANIMATED CONDUIT (Left) */}
          <div className="relative w-full md:w-48 h-24 flex items-center justify-center">
             {/* The Track */}
             <div className="absolute inset-x-0 h-1 bg-slate-200 rounded-full" />
             
             {/* The Moving Packet (ASTM) */}
             <motion.div
               className="absolute top-1/2 -translate-y-1/2 bg-slate-900 text-white text-[10px] font-mono font-bold px-2 py-1 rounded shadow-lg z-20"
               animate={{ x: [-80, 80], opacity: [0, 1, 0] }} // Move from Left to Right
               transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
             >
               [RAW_ASTM]
             </motion.div>
             
             {/* Directional Arrow Head */}
             <div className="absolute right-0 text-slate-300 text-2xl">→</div>
          </div>

          {/* 3. CORE: LAB-BRIDGE ENGINE */}
          <div className="relative z-10 w-72 p-8 bg-slate-900 text-white rounded-xl shadow-2xl overflow-hidden">
            {/* The Spinning Gear (Processing) */}
            <div className="absolute top-4 right-4 opacity-20">
               <motion.div
                 animate={{ rotate: 360 }}
                 transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
               >
                 <Settings className="w-12 h-12" />
               </motion.div>
            </div>

            <div className="font-mono text-xs text-blue-400 mb-4">CORE PROCESSING</div>
            <h3 className="text-2xl font-bold mb-2">Lab-Bridge</h3>
            <p className="text-sm text-slate-400 mb-4">RPi 4 / Docker</p>
            
            {/* Processing Steps */}
            <ul className="space-y-2 font-mono text-xs text-slate-300">
               <li className="flex items-center gap-2">
                 <span className="text-green-400">✓</span> DECODE ASTM
               </li>
               <li className="flex items-center gap-2">
                 <span className="text-green-400">✓</span> MAP TO LOINC
               </li>
               <li className="flex items-center gap-2">
                 <span className="text-green-400">✓</span> NORMALIZE
               </li>
            </ul>
          </div>

          {/* 4. ANIMATED CONDUIT (Right) */}
          <div className="relative w-full md:w-48 h-24 flex items-center justify-center">
             {/* The Track */}
             <div className="absolute inset-x-0 h-1 bg-slate-200 rounded-full" />
             
             {/* The Moving Packet (FHIR) - Slight delay to simulate processing */}
             <motion.div
               className="absolute top-1/2 -translate-y-1/2 bg-blue-600 text-white text-[10px] font-mono font-bold px-2 py-1 rounded shadow-lg z-20"
               animate={{ x: [-80, 80], opacity: [0, 1, 0] }} 
               transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1.5 }}
             >
               [FHIR_R4]
             </motion.div>

             {/* Directional Arrow Head */}
             <div className="absolute right-0 text-slate-300 text-2xl">→</div>
          </div>

          {/* 5. DESTINATION: OPENELIS */}
          <div className="relative z-10 w-64 p-8 bg-white border border-slate-200 rounded-xl shadow-sm text-center">
            <div className="font-mono text-xs text-slate-400 mb-4">DESTINATION</div>
            <Server className="w-8 h-8 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">OpenELIS EMR</h3>
            <p className="text-sm text-slate-500">Hospital LIS</p>
            <div className="mt-4 inline-block px-2 py-1 bg-blue-50 text-blue-700 text-xs font-mono rounded">FHIR Store</div>
          </div>

        </div>
      </div>
    </div>
  );
};
