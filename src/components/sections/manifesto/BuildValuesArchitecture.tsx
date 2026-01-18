'use client';

const buildValues = [
  { 
    letter: 'B', 
    title: 'Bravery', 
    desc: 'Courage to tackle complex health challenges where others failed. We deploy where the infrastructure is hostile, not just where it is easy.' 
  },
  { 
    letter: 'U', 
    title: 'Unity', 
    desc: 'Collaborative, cross-functional teams. We break the silos between Developers, Doctors, and Policymakers. One mission, one codebase.' 
  },
  { 
    letter: 'I', 
    title: 'Integrity', 
    desc: 'The vertex of our existence. Honest communication, clean work, no shortcuts. If it isn\'t true, we don\'t say it. If it isn\'t secure, we don\'t ship it.' 
  },
  { 
    letter: 'L', 
    title: 'Leadership', 
    desc: 'Taking ownership of outcomes. Every engineer is a leader of their domain. We do not wait for permission to solve a problem.' 
  },
  { 
    letter: 'D', 
    title: 'Discipline', 
    desc: 'Consistent, reliable delivery. We reject the chaos of "move fast and break things". In health, we move deliberately and fix things.' 
  },
];

export const BuildValuesArchitecture = () => {
  return (
    <section className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="font-mono text-xs text-slate-500 uppercase tracking-widest font-bold">The Foundation</span>
          <h2 className="text-4xl font-bold text-slate-900 mt-2">We BUILD.</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
          {buildValues.map((item) => (
            <div key={item.letter} className="bg-white p-12 hover:bg-slate-50 transition-colors group">
              <div className="text-6xl font-black text-slate-100 group-hover:text-blue-50 transition-colors mb-6 font-mono">
                {item.letter}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm font-medium">
                {item.desc}
              </p>
            </div>
          ))}
          
          {/* FILLER BLOCK FOR GRID SYMMETRY */}
          <div className="bg-slate-900 p-12 flex flex-col justify-between">
            <div className="font-mono text-xs text-white/50 uppercase tracking-widest">Cultural Output</div>
            <div className="text-2xl font-bold text-white leading-tight">
              &quot;This cultural code differentiates us externally and anchors our leadership internally.&quot;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
