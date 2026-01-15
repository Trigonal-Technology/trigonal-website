'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { RotatingTetrahedron } from './RotatingTetrahedron';

const firePrinciples = [
    {
        id: 'focus',
        title: 'Focus',
        subtitle: 'PRECISION_FIRST',
        description: 'We prioritize technical excellence over feature bloat. Our architecture is designed for the high-stakes reality of critical infrastructure.',
        metrics: ['Zero Technical Debt', '99.9% Uptime', 'Optimized Core']
    },
    {
        id: 'integrity',
        title: 'Integrity',
        subtitle: 'DATA_SOVEREIGNTY',
        description: 'Systems built on unshakeable standards. We ensure data remains accurate, accessible, and owned by the communities they serve.',
        metrics: ['FHIR R4 Native', 'Encrypted at Rest', 'Audit-Ready']
    },
    {
        id: 'respect',
        title: 'Respect',
        subtitle: 'LOCAL_EMPOWERMENT',
        description: 'Technology that honors local expertise. Our tools are designed to amplify frontline capacity, not replace it with rigid workflows.',
        metrics: ['Offline-First', 'Localized UI', 'Community-Led']
    },
    {
        id: 'execution',
        title: 'Execution',
        subtitle: 'MISSION_CRITICAL',
        description: 'Proven deployment at scale. We translate complex architectural requirements into functional, field-hardened health systems.',
        metrics: ['10M+ Events/Year', '50+ Deployments', 'Global Support']
    }
];

const statusLabels = [
    '[01_FOCUS: CORE_PILLARS]',
    '[02_INTEGRITY: STANDARDS_SYNC]',
    '[03_RESPECT: GLOBAL_SOVEREIGNTY]',
    '[04_EXECUTION: DEPLOY_SYSTEM]'
];

export function FirePinnedScroll() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    });

    const textY = useTransform(scrollYProgress, [0, 1], ['0vh', '-240vh']);
    const statusIndex = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 1, 2, 3, 3]);

    return (
        <section ref={containerRef} className="relative bg-slate-50 z-10" style={{ height: '300vh' }}>
            <div className="sticky top-0 h-screen flex flex-col md:flex-row overflow-hidden">
                <div className="w-full md:w-1/2 h-full flex items-center justify-center bg-slate-50/50">
                    <div className="relative flex items-center justify-center w-full max-w-[500px] aspect-square">
                        <ScrollBoundTetrahedron progress={scrollYProgress} />

                        <div className="absolute top-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 w-full">
                            <motion.div
                                className="px-4 py-2 bg-white border border-slate-200 rounded-full shadow-sm z-20"
                                initial={{ opacity: 0, y: -10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                            >
                                <p className="font-mono text-xs uppercase tracking-wider text-precision-blue font-bold">
                                    BUILD_WITH_FIRE
                                </p>
                            </motion.div>

                            <StatusLine labels={statusLabels} index={statusIndex} />
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-1/2 h-full relative z-10">
                    <motion.div style={{ y: textY }} className="flex flex-col">
                        {firePrinciples.map((principle, index) => (
                            <div key={principle.id} className="h-[80vh] flex flex-col justify-center px-8 sm:px-12 lg:px-20 shrink-0">
                                <div className="text-6xl font-black text-slate-200 mb-4 font-mono">
                                    {String(index + 1).padStart(2, '0')}
                                </div>
                                <h3 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">{principle.title}</h3>
                                <div className="font-mono text-xs uppercase tracking-wider text-precision-blue font-bold mb-6">{principle.subtitle}</div>
                                <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-md">{principle.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {principle.metrics.map((metric, i) => (
                                        <span key={i} className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg font-mono text-xs text-slate-700 font-bold shadow-sm">{metric}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function StatusLine({ labels, index }: { labels: string[], index: any }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        return index.onChange((v: number) => setCurrentIndex(Math.floor(v)));
    }, [index]);

    return (
        <motion.div
            className="font-mono text-[10px] text-slate-400 uppercase tracking-widest animate-pulse"
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            {labels[currentIndex]}
        </motion.div>
    );
}

function ScrollBoundTetrahedron({ progress }: { progress: any }) {
    const [val, setVal] = React.useState(0);
    useEffect(() => {
        return progress.onChange((v: number) => setVal(v));
    }, [progress]);
    return <RotatingTetrahedron scrollProgress={val} />;
}
