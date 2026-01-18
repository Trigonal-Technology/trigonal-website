'use client';

const visionPillars = [
  {
    title: 'FHIR-Native',
    description: 'Built on global interoperability standards, not proprietary locks.'
  },
  {
    title: 'AI-Powered',
    description: 'Enabling smarter diagnostics, not just data entry.'
  },
  {
    title: 'Interoperable',
    description: 'Connecting EMRs, LIS, and National Systems by default.'
  },
  {
    title: 'Patient-Centric',
    description: 'Improving care delivery across hospitals, clinics, and public health.'
  }
];

export const VisionPillars = () => {
  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="font-mono text-xs text-slate-500 uppercase tracking-widest font-bold">The Vision</span>
          <h2 className="text-4xl font-bold text-slate-900 mt-2">Architectural Pillars</h2>
        </div>

        {/* Blueprint Style 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200">
          {visionPillars.map((pillar, index) => (
            <div 
              key={pillar.title} 
              className="bg-white p-8 hover:bg-slate-50 transition-colors relative"
            >
              {/* Blueprint Column Number */}
              <div className="absolute top-4 right-4 font-mono text-xs text-slate-300 font-bold">
                {String(index + 1).padStart(2, '0')}
              </div>
              
              {/* Vertical Line Indicator (Blueprint Style) */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <h3 className="text-xl font-bold text-slate-900 mb-4 font-mono uppercase tracking-wider">
                {pillar.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm font-medium">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
