'use client';

import { motion } from 'framer-motion';

export const ManifestoHero = () => {
  return (
    <section className="relative w-full h-[90vh] bg-slate-50 flex flex-col items-center justify-center overflow-hidden border-b border-slate-200">
      {/* BLUEPRINT GRID BACKGROUND */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{ 
          backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }} 
      />

      {/* THE DUAL PYRAMID VISUALIZATION */}
      <div className="relative z-10 flex flex-col items-center">
        
        {/* 3D ISO-FRAME (The Heavy CAD Model - Square-Based Pyramid) */}
        <div className="relative w-64 h-64 mb-12 flex items-center justify-center" style={{ perspective: '1200px' }}>
          
          {/* ROTATING VOLUME */}
          <motion.div
            className="relative w-48 h-48 transform-style-3d"
            animate={{ rotateY: 360 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* GEOMETRY: SQUARE PYRAMID (4 Triangles meeting at a peak)
               This is mathematically stable and won't look "flat."
            */}

            {/* FRONT FACE */}
            <div className="absolute inset-0 border-2 border-slate-300 bg-blue-50/5"
                 style={{ 
                   transform: 'rotateY(0deg) translateZ(24px) rotateX(30deg)', 
                   transformOrigin: 'bottom',
                   clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                   height: '100%'
                 }} />

            {/* RIGHT FACE */}
            <div className="absolute inset-0 border-2 border-slate-300 bg-blue-50/5"
                 style={{ 
                   transform: 'rotateY(90deg) translateZ(24px) rotateX(30deg)', 
                   transformOrigin: 'bottom',
                   clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                   height: '100%'
                 }} />

            {/* BACK FACE */}
            <div className="absolute inset-0 border-2 border-slate-300 bg-blue-50/5"
                 style={{ 
                   transform: 'rotateY(180deg) translateZ(24px) rotateX(30deg)', 
                   transformOrigin: 'bottom',
                   clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                   height: '100%'
                 }} />

            {/* LEFT FACE */}
            <div className="absolute inset-0 border-2 border-slate-300 bg-blue-50/5"
                 style={{ 
                   transform: 'rotateY(270deg) translateZ(24px) rotateX(30deg)', 
                   transformOrigin: 'bottom',
                   clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                   height: '100%'
                 }} />

            {/* CENTRAL AXIS BEAM (The "Spine") */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-blue-600/30 -translate-x-1/2" 
                 style={{ transform: 'rotateY(45deg)' }} />

          </motion.div>

          {/* STATIC LABEL (Floating on top) */}
          <div className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none">
              <div className="bg-white px-3 py-1 border border-slate-200 shadow-sm z-50">
                <span className="font-mono text-[10px] font-black text-slate-900 tracking-[0.2em] uppercase">
                  SYS_ARCH: F.I.R.E.
                </span>
              </div>
          </div>
        </div>

        {/* THE VERTEX: INTEGRITY */}
        <div className="relative z-20 px-4 py-1 bg-white border border-slate-900 shadow-xl flex items-center gap-2">
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
          <span className="font-mono text-[10px] font-black tracking-widest text-slate-900">INTEGRITY_VERTEX</span>
        </div>

        {/* BOTTOM: BUILD (The Character - Solid) */}
        <div 
          className="w-40 h-40 bg-slate-900 mt-1 flex items-center justify-center relative shadow-2xl"
          style={{ clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)' }}
        >
          <span className="font-mono text-xs text-white/50 font-bold tracking-widest mb-8">B.U.I.L.D.</span>
        </div>
      </div>

      {/* HEADLINE */}
      <div className="relative z-10 mt-16 text-center max-w-3xl px-6">
        <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6">
          The Code We Live By.
        </h1>
        <p className="text-lg text-slate-600 font-medium leading-relaxed">
          We fuse Engineering Precision (FIRE) with Human Character (BUILD) to solve the integrity gap in digital health.
          <br />
          Anchored by <span className="text-slate-900 font-bold border-b-2 border-slate-900">Character (BUILD)</span>. Driven by <span className="text-blue-600 font-bold border-b-2 border-blue-600">Precision (FIRE)</span>.
        </p>
      </div>
    </section>
  );
};
