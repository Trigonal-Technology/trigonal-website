'use client';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const ProjectLaunchBand = () => {
  return (
    <section className="py-20 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left: The Hook */}
        <div className="text-left">
          <span className="font-mono text-xs text-blue-500 font-bold uppercase tracking-widest">
            Ready to Initialize?
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-2">
            Stop patching legacy systems. <br/>
            <span className="text-slate-400">Start architecting sovereign ones.</span>
          </h2>
        </div>

        {/* Right: The Button (Bridge to /consult) */}
        <Link href="/consult?source=homepage_footer">
          <button className="group relative px-8 py-5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all flex items-center gap-4 shadow-lg hover:shadow-blue-500/25">
            <span className="font-mono uppercase tracking-wider">Launch Configurator</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            
            {/* Subtle Glow Effect */}
            <div className="absolute inset-0 rounded-lg ring-2 ring-white/20 group-hover:ring-white/40 transition-all" />
          </button>
        </Link>

      </div>
    </section>
  );
};
