'use client';

const fireSpecs = [
  { id: '01', title: 'FOCUS', spec: 'PRECISION_FIRST', desc: 'We reject feature bloat. We solve only the irreducible problems of digital health.' },
  { id: '02', title: 'INTEGRITY', spec: 'NO_VENDOR_LOCK', desc: 'Open Source by default. If it isn\'t transparent, it isn\'t Trigonal.' },
  { id: '03', title: 'RESPECT', spec: 'DATA_SOVEREIGNTY', desc: 'We build systems we cannot control. Your data stays on your soil.' },
  { id: '04', title: 'EXECUTION', spec: 'PRODUCTION_GRADE', desc: 'Uptime over PowerPoints. We measure success by nodes deployed, not deals signed.' },
];

export const FireProcess = () => {
  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
            <span className="font-mono text-xs text-blue-600 uppercase tracking-widest font-bold">The Process</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-2">We Engineer with FIRE.</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {fireSpecs.map((item) => (
            <div key={item.id} className="border-l-2 border-slate-200 pl-8 py-2 hover:border-blue-600 transition-colors group">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono text-xs text-slate-400 group-hover:text-blue-600 transition-colors">[{item.spec}]</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600 font-medium max-w-md">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
