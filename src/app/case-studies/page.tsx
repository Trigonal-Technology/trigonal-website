import Link from 'next/link';

const caseStudies = [
  {
    id: 'orthanc-radiology',
    year: '2026',
    client: 'National Hospital',
    title: 'Radiology Pipeline Replacement',
    stack: ['Orthanc', 'Bahmni', 'Docker'],
    desc: 'Replacing heavy Dcm4chee architecture with lightweight Orthanc instances to enable end-to-end DICOM flow on edge hardware.',
    category: 'INFRASTRUCTURE',
    link: '/case-studies/orthanc-radiology'
  },
  {
    id: 'lafia-hms',
    year: '2025',
    client: 'LafiaHMS (SaaS)',
    title: 'Multi-Tenant Hospital OS',
    stack: ['OpenMRS 3.0', 'OpenELIS 2.0', 'Odoo'],
    desc: 'Architecting a unified SaaS platform combining clinical care (OpenMRS) with ERP (Odoo) for scalable private practice management.',
    category: 'PLATFORM_ENGINEERING'
  },
  {
    id: 'life-rhythm',
    year: '2025',
    client: 'LifeRythem',
    title: 'Cardiac Care EMR',
    stack: ['Bahmni', 'IoT Integration'],
    desc: 'Customizing Bahmni for specialized cardiac workflows, integrating wearable IoT data directly into patient longitudinal records.',
    category: 'CLINICAL_SYSTEMS'
  },
  {
    id: 'venevital',
    year: '2024',
    client: 'Venevital',
    title: 'Telehealth Core',
    stack: ['WebRTC', 'React', 'Node.js'],
    desc: 'Building the secure backbone for a remote-first consultation platform serving rural populations.',
    category: 'TELEMEDICINE'
  },
  {
    id: 'lab-bridge',
    year: '2023',
    client: 'Parbat District Hospital',
    title: 'Lab-Bridge Middleware',
    stack: ['Python', 'FastAPI', 'ASTM'],
    desc: 'Automating 5 diagnostic analyzers to close the "Last Mile" gap between hardware and OpenELIS EMR.',
    category: 'INTEROPERABILITY',
    link: '/case-studies/lab-bridge'
  }
];

export default function CaseStudiesHub() {
  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="mb-20">
          <h1 className="text-5xl font-black text-slate-900 mb-6">Engineering Logs.</h1>
          <p className="text-xl text-slate-600 max-w-2xl">
            A chronological record of sovereign systems architected, deployed, and maintained by Trigonal.
          </p>
        </div>

        {/* THE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study) => (
            <Link 
              href={study.link || '#'} 
              key={study.id}
              className={`group block p-8 bg-white border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-xl transition-all ${!study.link ? 'cursor-default' : 'cursor-pointer'}`}
            >
              {/* TOP META */}
              <div className="flex justify-between items-start mb-6">
                <span className="font-mono text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                  {study.year}
                </span>
                <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">
                  {study.category}
                </span>
              </div>

              {/* TITLE */}
              <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                {study.title}
              </h3>
              <div className="text-sm font-medium text-slate-400 mb-4">{study.client}</div>

              {/* DESC */}
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {study.desc}
              </p>

              {/* STACK TAGS */}
              <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-100">
                {study.stack.map((tech) => (
                  <span key={tech} className="text-[10px] font-mono font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}
