'use client';

import Link from 'next/link';

const proofs = [
  { 
    id: 'lab', 
    title: 'Lab-Bridge', 
    tag: 'INTEGRATION_MIDDLEWARE', 
    desc: 'Stop the manual data shuffle. We connect ASTM analyzers directly to OpenELIS and FHIR servers for automated, error-free reporting.' 
  },
  { 
    id: 'nidan', 
    title: 'NidanEHR', 
    tag: 'HOSPITAL_OS', 
    desc: 'A sovereign EMR running in 50+ rural clinics. Offline-first architecture designed for low-connectivity environments.' 
  },
  { 
    id: 'spine', 
    title: 'OpenHIE Spine',
    tag: 'NATIONAL_INFRASTRUCTURE', 
    desc: 'The central nervous system for national health. A high-concurrency interoperability layer connecting Labs, EMRs, and Insurance registries.' 
  },
];

// Extracted Sub-component for cleanliness
const ProjectCard = ({ proof }: { proof: any }) => (
  <div className="group relative p-8 bg-slate-800 border border-slate-700 hover:border-blue-500 transition-all rounded-lg h-full">
    <div className="font-mono text-xs text-blue-400 mb-4 tracking-widest">{proof.tag}</div>
    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-200 text-white transition-colors">{proof.title}</h3>
    <p className="text-slate-400 text-sm">{proof.desc}</p>
    <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0">
      <span className="text-blue-400 text-xl">→</span>
    </div>
  </div>
);

export const ProofDeck = () => {
  return (
    <section className="py-32 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
                <h2 className="text-3xl font-bold mb-4">Principles are theory.<br/><span className="text-blue-400">Production is truth.</span></h2>
                <p className="text-slate-400 max-w-lg">We don't just write manifestos. We ship code that saves lives.</p>
            </div>
            {/* OPTIONAL: Add View All Button here */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {proofs.map((proof) => 
                proof.id === 'lab' ? (
                    <Link href="/case-studies/lab-bridge" key={proof.id} className="block h-full">
                        <ProjectCard proof={proof} />
                    </Link>
                ) : (
                    <div key={proof.id} className="block h-full cursor-not-allowed opacity-70">
                        <ProjectCard proof={proof} />
                    </div>
                )
            )}
        </div>
      </div>
    </section>
  );
};
