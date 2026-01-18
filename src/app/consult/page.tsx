'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';
import { ConsultationConsole } from '@/components/consultation/ConsultationConsole';


export default function ConsultPage() {
    return (
        <div className="min-h-screen bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, #475569 1px, transparent 1px),
                        linear-gradient(to bottom, #475569 1px, transparent 1px)
                    `,
                    backgroundSize: '24px 24px'
                }}
            />

            <div className="relative max-w-6xl mx-auto">
                {/* Header */}
                <Suspense fallback={<div className="h-screen flex items-center justify-center"><div className="text-white font-mono">Loading...</div></div>}>
                    <ConsultPageContent />
                </Suspense>
            </div>
        </div>
    );
}

function ConsultPageContent() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
            >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 border border-slate-700 rounded-full mb-6">
                    <Terminal className="w-4 h-4 text-emerald-500" />
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                        INITIALIZATION SEQUENCE
                    </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-white mt-4 mb-6 font-mono uppercase tracking-tight">
                    Engage an Architect.
                </h1>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                    Direct line to our Principal Engineers. No sales teams. No fluff.
                    Define your infrastructure gap, and we will respond with a technical brief within 24 hours.
                </p>
            </motion.div>

            {/* The Console with Auto-Fill Logic */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                <ConsultationConsole />
            </motion.div>
        </>
    );
}
