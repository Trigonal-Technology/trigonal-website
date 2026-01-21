'use client';
import { motion } from 'framer-motion';
import { Settings, Server, Activity } from 'lucide-react';

export const LabBridgeArchitecture = ({
  destinationTitle = "OpenMRS 3.x",
  destinationSubtitle = "EMR Kernel",
  destinationTech = "FHIR R4",
  showDualDestinations = false
}: {
  destinationTitle?: string;
  destinationSubtitle?: string;
  destinationTech?: string;
  showDualDestinations?: boolean;
}) => {
  return (
    <div className="py-24 bg-slate-50 overflow-hidden text-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-blue-600 font-bold uppercase tracking-widest">System Architecture</span>
          <h2 className="text-4xl font-bold mt-2">The Lab-Bridge Middleware Engine</h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">

          {/* 1. SOURCE: ANALYZERS */}
          <SourceNode />

          {/* 2. ANIMATED CONDUIT (Left) */}
          <Conduit
            packets={[
              { label: "[RAW_ASTM]", delay: 0, color: "bg-slate-900" },
              { label: "[RAW_HL7v2]", delay: 3, color: "bg-slate-800" }
            ]}
          />

          {/* 3. CORE: LAB-BRIDGE ENGINE */}
          <div className={`relative z-10 w-72 bg-slate-900 text-white rounded-xl shadow-2xl overflow-hidden flex flex-col justify-center ${showDualDestinations ? 'p-10 min-h-[440px]' : 'p-8'}`}>
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
                <span className="text-green-400">✓</span> DECODE ASTM / HL7v2
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span> MAP TO LOINC
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span> NORMALIZE
              </li>
            </ul>
          </div>

          {showDualDestinations ? (
            <div className="flex flex-col gap-4">
              {/* Destination 1: EMR */}
              <div className="flex flex-col md:flex-row items-center">
                <Conduit
                  packets={[{ label: "[FHIR_R4]", delay: 1.5, color: "bg-blue-600" }]}
                />
                <DestinationNode
                  title="OpenMRS 3.x"
                  subtitle="EMR Kernel"
                  tech="FHIR R4"
                  compact={true}
                />
              </div>
              {/* Destination 2: LIS */}
              <div className="flex flex-col md:flex-row items-center">
                <Conduit
                  packets={[{ label: "[HL7/FHIR]", delay: 2.5, color: "bg-emerald-600" }]}
                />
                <DestinationNode
                  title="OpenELIS LIS"
                  subtitle="Laboratory System"
                  tech="HL7v2 / FHIR"
                  compact={true}
                />
              </div>
            </div>
          ) : (
            <>
              {/* 4. ANIMATED CONDUIT (Right) */}
              <Conduit
                packets={[{ label: `[${destinationTech}]`, delay: 1.5, color: "bg-blue-600" }]}
              />

              {/* 5. DESTINATION: MODULAR */}
              <DestinationNode
                title={destinationTitle}
                subtitle={destinationSubtitle}
                tech={destinationTech}
              />
            </>
          )}

        </div>
      </div>
    </div>
  );
};

const SourceNode = () => (
  <div className="relative z-10 w-64 p-8 bg-white border border-slate-200 rounded-xl shadow-sm text-center">
    <div className="font-mono text-xs text-slate-400 mb-4">INPUT LAYER</div>
    <Activity className="w-8 h-8 text-blue-600 mx-auto mb-4" />
    <h3 className="text-xl font-bold text-slate-900 mb-2">Diagnostic Analyzers</h3>
    <p className="text-sm text-slate-500">Hematology, Biochem</p>
    <div className="mt-4 flex flex-col gap-2 items-center">
      <span className="inline-block px-2 py-1 bg-slate-100 text-xs font-mono rounded">ASTM / RS232</span>
      <span className="inline-block px-2 py-1 bg-slate-100 text-xs font-mono rounded">HL7v2 / TCP</span>
    </div>
  </div>
);

const Conduit = ({ packets }: { packets: { label: string, delay: number, color: string }[] }) => (
  <div className="relative w-full md:w-48 h-24 flex items-center justify-center">
    {/* The Track */}
    <div className="absolute inset-x-0 h-1 bg-slate-200 rounded-full" />
    {packets.map((packet, i) => (
      <motion.div
        key={i}
        className={`absolute top-1/2 -translate-y-1/2 ${packet.color} text-white text-[10px] font-mono font-bold px-2 py-1 rounded shadow-lg z-20`}
        animate={{ x: [-80, 80], opacity: [0, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: packet.delay, ...(packet.delay === 0 || packet.delay === 3 ? { repeatDelay: 6 } : {}) }}
      >
        {packet.label}
      </motion.div>
    ))}
    {/* Directional Arrow Head */}
    <div className="absolute right-0 text-slate-300 text-2xl">→</div>
  </div>
);

const DestinationNode = ({ title, subtitle, tech, compact = false }: { title: string, subtitle: string, tech: string, compact?: boolean }) => (
  <div className={`relative z-10 w-64 bg-white border border-slate-200 rounded-xl shadow-sm text-center ${compact ? 'p-6' : 'p-8'}`}>
    <div className="font-mono text-xs text-slate-400 mb-4">DESTINATION</div>
    <Server className="w-8 h-8 text-blue-600 mx-auto mb-4" />
    <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-sm text-slate-500">{subtitle}</p>
    <div className="mt-4 inline-block px-2 py-1 bg-blue-50 text-blue-700 text-xs font-mono rounded">{tech}</div>
  </div>
);
