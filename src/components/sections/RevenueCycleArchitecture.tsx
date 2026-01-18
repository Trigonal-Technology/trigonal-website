'use client';
import { motion } from 'framer-motion';
import { CreditCard, Database, Eye, FileText, Settings, CheckCircle2 } from 'lucide-react';

export const RevenueCycleArchitecture = () => {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="font-mono text-xs text-emerald-600 font-bold uppercase tracking-widest">
            Revenue Cycle Architecture
          </span>
          <h2 className="text-4xl font-bold text-slate-900 mt-2">
            The "Order-to-Cash" Imaging Loop
          </h2>
        </div>

        {/* THE PIPELINE CONTAINER */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0">

          {/* ------------------------------------------------------- */}
          {/* NODE 1: BAHMNI ORDERING (The Trigger)                   */}
          {/* ------------------------------------------------------- */}
          <div className="relative z-10 w-72 p-6 bg-white border border-slate-200 rounded-xl shadow-sm text-center group hover:border-emerald-500 transition-colors">
            <div className="font-mono text-[10px] text-slate-400 mb-4 uppercase tracking-widest">Step 01: Input</div>
            <FileText className="w-8 h-8 text-slate-400 mx-auto mb-4 group-hover:text-emerald-500 transition-colors" />
            <h3 className="text-lg font-bold text-slate-900">Bahmni Clinical</h3>
            <p className="text-xs text-slate-500 mt-2">Physician orders "Chest X-Ray"</p>
            <div className="mt-4 inline-block px-2 py-1 bg-slate-100 text-[10px] font-mono rounded">
              ORDER_ID: #8842
            </div>
          </div>

          {/* CONDUIT 1: ORDER -> BILLING */}
          <AnimatedConduit delay={0} color="bg-slate-300" />

          {/* ------------------------------------------------------- */}
          {/* NODE 2: BILLING GATEKEEPER (The Validator)             */}
          {/* ------------------------------------------------------- */}
          <div className="relative z-10 w-72 p-6 bg-white border-2 border-emerald-100 rounded-xl shadow-sm text-center">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide">
              Gatekeeper
            </div>
            <div className="font-mono text-[10px] text-slate-400 mb-4 uppercase tracking-widest">Step 02: Payment</div>
            <div className="relative inline-block">
              <CreditCard className="w-8 h-8 text-emerald-600 mx-auto mb-4" />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
                className="absolute -top-1 -right-1 bg-green-500 rounded-full p-1 border-2 border-white"
              >
                <CheckCircle2 className="w-3 h-3 text-white" />
              </motion.div>
            </div>
            <h3 className="text-lg font-bold text-slate-900">Cashier / ERP</h3>
            <p className="text-xs text-slate-500 mt-2">Invoice Generated & Paid</p>
          </div>

          {/* CONDUIT 2: BILLING -> ORTHANC (Changes Color to Green) */}
          <AnimatedConduit delay={1.5} color="bg-emerald-500" particleColor="bg-emerald-600" />

          {/* ------------------------------------------------------- */}
          {/* NODE 3: ORTHANC CORE (The Engine)                       */}
          {/* ------------------------------------------------------- */}
          <div className="relative z-10 w-80 p-8 bg-slate-900 text-white rounded-xl shadow-2xl">
            <div className="absolute top-4 right-4 opacity-30">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}>
                <Settings className="w-10 h-10" />
              </motion.div>
            </div>
            <div className="font-mono text-[10px] text-emerald-400 mb-4 uppercase tracking-widest">Step 03: Processing</div>
            <h3 className="text-2xl font-bold mb-2">Orthanc PACS</h3>
            <p className="text-xs text-slate-400 mb-4">Modality Worklist (MWL)</p>

            <div className="space-y-2 font-mono text-[10px] text-slate-300">
              <div className="flex justify-between border-b border-slate-700 pb-1">
                <span>&gt; RECEIVE_ORDER</span>
                <span className="text-emerald-400">OK</span>
              </div>
              <div className="flex justify-between border-b border-slate-700 pb-1">
                <span>&gt; CREATE_MWL_ENTRY</span>
                <span className="text-emerald-400">DONE</span>
              </div>
              <div className="flex justify-between">
                <span>&gt; STORE_DICOM</span>
                <span className="text-emerald-400">14MB</span>
              </div>
            </div>
          </div>

          {/* CONDUIT 3: ORTHANC -> OHIF */}
          <AnimatedConduit delay={3} color="bg-emerald-500" particleColor="bg-blue-500" />

          {/* ------------------------------------------------------- */}
          {/* NODE 4: OHIF VIEWER (The Consumption)                   */}
          {/* ------------------------------------------------------- */}
          <div className="relative z-10 w-72 p-6 bg-white border border-slate-200 rounded-xl shadow-sm text-center">
            <div className="font-mono text-[10px] text-slate-400 mb-4 uppercase tracking-widest">Step 04: View</div>
            <Eye className="w-8 h-8 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-slate-900">OHIF Viewer</h3>
            <p className="text-xs text-slate-500 mt-2">Embedded in Patient Dashboard</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="mt-4 px-4 py-2 bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-wider rounded border border-blue-200"
            >
              Launch Study
            </motion.button>
          </div>

        </div>
      </div>
    </section>
  );
};

// SUB-COMPONENT: ANIMATED CONNECTION LINE
const AnimatedConduit = ({ delay, color, particleColor = "bg-slate-800" }: { delay: number, color: string, particleColor?: string }) => {
  return (
    <div className="relative w-12 h-12 lg:w-24 lg:h-auto flex items-center justify-center rotate-90 lg:rotate-0 my-4 lg:my-0">
      {/* The Track */}
      <div className={`absolute lg:inset-x-0 h-1 ${color} rounded-full w-1 h-12 lg:w-full lg:h-1 opacity-20`} />

      {/* The Moving Packet */}
      <motion.div
        className={`absolute w-3 h-3 ${particleColor} rounded-full shadow-sm z-20`}
        animate={{
          x: ['-40px', '40px'], // Move horizontally
          opacity: [0, 1, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay
        }}
      />
      {/* Arrow Head */}
      <div className="absolute right-0 text-slate-300 text-lg hidden lg:block">→</div>
      <div className="absolute bottom-0 text-slate-300 text-lg block lg:hidden">↓</div>
    </div>
  );
};
