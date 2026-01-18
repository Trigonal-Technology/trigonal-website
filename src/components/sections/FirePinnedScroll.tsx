'use client';

import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
// Import your 3D component (ensure path is correct)
import { RotatingTetrahedron } from './RotatingTetrahedron';

const firePrinciples = [
    {
        id: 'focus',
        letter: 'F',
        title: 'Focus',
        subtitle: 'PRECISION_OVER_NOISE',
        description: 'We reject feature bloat to solve the irreducible problems of digital health. Our engineering focus is singular: building optimized, low-latency, and high-reliability infrastructure that performs when lives are on the line.',
        tags: ['Zero Technical Debt', 'Optimized Core', 'Clinical Logic']
    },
    {
        id: 'integrity',
        letter: 'I',
        title: 'Integrity',
        subtitle: 'CODE_WITHOUT_COMPROMISE',
        description: 'Trust is built on transparency, not contracts. We maintain a strict Open Source policy to ensure zero vendor lock-in. We speak difficult truths about security and compliance because in healthcare, "cutting corners" is not an option.',
        tags: ['100% Open Source', 'Audit-Ready', 'No Lock-In']
    },
    {
        id: 'respect',
        letter: 'R',
        title: 'Respect',
        subtitle: 'SOVEREIGNTY_BY_DESIGN',
        description: 'True respect means handing over the keys. We architect systems that strictly adhere to national data residency laws and empower local engineering teams. We build technology that belongs to the people it serves, not the vendor.',
        tags: ['Data Residency', 'Local Ownership', 'Patient Dignity']
    },
    {
        id: 'execution',
        letter: 'E',
        title: 'Execution',
        subtitle: 'MISSION_CRITICAL_DELIVERY',
        description: 'In critical infrastructure, ideas are cheap. We measure success by uptime, not PowerPoint slides. We move beyond "Proof of Concept" to deliver hardened, national-scale platforms that run reliably in the harshest real-world conditions.',
        tags: ['99.99% Uptime', 'National Scale', 'Production Grade']
    }
];

export const FireCultureSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="relative bg-slate-50">
      
      {/* THE PINNED FRAME 
         - Height is strictly controlled to contain the scroll.
      */}
      <div className="sticky top-0 h-screen flex flex-row overflow-hidden">
        
        {/* LEFT COLUMN: 3D PYRAMID (Fixed) */}
        <div className="w-1/2 h-full flex items-center justify-center bg-white/50 backdrop-blur-sm border-r border-slate-200">
          <div className="relative w-[300px] h-[300px]">
            {/* Pass raw scroll progress to rotate the pyramid */}
            <RotatingTetrahedron scrollProgress={scrollYProgress} />
          </div>
        </div>

        {/* RIGHT COLUMN: SCROLLING CONTENT (Fluid) */}
        <div className="w-1/2 h-full relative">
          {firePrinciples.map((card, index) => {
            // Logic to fade cards in/out based on scroll position
            // Each card owns a 25% slice of the total scroll container
            const start = index * 0.25;
            const end = start + 0.25;
            
            return (
              <PrincipleCard 
                key={card.id} 
                card={card} 
                range={[start, end]} 
                progress={scrollYProgress} 
              />
            );
          })}
        </div>
      </div>
      
      {/* SCROLL TRACK
         - 400vh ensures we have enough room to scroll through 4 cards comfortably.
      */}
      <div className="h-[400vh]" />
    </div>
  );
};

// Export alias for backward compatibility
export const FirePinnedScroll = FireCultureSection;

// SUB-COMPONENT: Individual Card rendering with 'Clean' transitions
const PrincipleCard = ({ card, range, progress }: { card: any, range: number[], progress: any }) => {
  const opacity = useTransform(progress, [range[0], range[0] + 0.1, range[1] - 0.1, range[1]], [0, 1, 1, 0]);
  const y = useTransform(progress, [range[0], range[0] + 0.1, range[1] - 0.1, range[1]], [50, 0, 0, -50]);

  return (
    <motion.div 
      style={{ opacity, y }}
      className="absolute inset-0 flex items-center justify-center p-16"
    >
      <div className="max-w-xl">
        {/* LETTER HEADER */}
        <div className="flex items-baseline gap-4 mb-6 border-b-2 border-slate-900 pb-4">
            <span className="text-8xl font-black text-slate-900 tracking-tighter">
                {card.letter}
            </span>
            <div className="flex flex-col">
                <h3 className="text-3xl font-bold text-slate-800 tracking-tight">
                    {card.title}
                </h3>
                <span className="font-mono text-sm text-blue-600 font-bold tracking-wider uppercase">
                    {card.subtitle}
                </span>
            </div>
        </div>

        {/* DESCRIPTION */}
        <p className="text-lg text-slate-600 leading-relaxed mb-8 font-medium">
            {card.description}
        </p>

        {/* TAGS (Clean Engineering Chips) */}
        <div className="flex flex-wrap gap-3">
            {card.tags.map((tag: string) => (
                <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-mono font-bold uppercase tracking-wide border border-slate-200 rounded">
                    {tag}
                </span>
            ))}
        </div>
      </div>
    </motion.div>
  );
};