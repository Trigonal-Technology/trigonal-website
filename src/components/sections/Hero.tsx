'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { SovereignDataFlow } from './SovereignDataFlow';
import { Briefcase, Globe } from 'lucide-react';

export function Hero() {
    return (
        <section className="relative bg-white overflow-hidden">
            {/* Blueprint Grid Background */}
            <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(226, 232, 240, 0.3) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(226, 232, 240, 0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: '24px 24px'
                }}
            />

            {/* Decorative radial gradients */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-precision-blue/5 rounded-full blur-3xl" />
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-execution-orange/5 rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
                            A Digital Health
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-precision-blue via-execution-orange to-emerald-500">
                                Engineering Firm
                            </span>
                        </h1>

                        {/* Primary Tagline */}
                        <p className="text-xl font-mono text-precision-blue mb-6">
                            AI-Powered. Precision-Built. Health-Engineered.
                        </p>

                        <p className="text-lg text-slate-600 max-w-xl mb-8">
                            We architect sovereign digital health ecosystems for hospitals, national health programs, and global development organizations. From OpenHIE interoperability to offline-first mobile health engineered for scale, compliance, and zero vendor lock-in.
                        </p>

                        {/* Key Credentials */}
                        <div className="flex flex-wrap gap-4 mb-8">
                            <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg">
                                <Briefcase className="w-4 h-4 text-precision-blue" />
                                <span className="text-sm font-mono text-slate-700">
                                    Health Solution Architects
                                </span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg">
                                <Globe className="w-4 h-4 text-execution-orange" />
                                <span className="text-sm font-mono text-slate-700">
                                    Venevital • LafiaHMS
                                </span>
                            </div>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-4">
                            <Link href="/architecture" className="btn-primary">
                                View System Architecture
                            </Link>
                            <Link href="/#consult-console" className="btn-secondary">
                                Consult an Architect
                            </Link>
                        </div>

                    </motion.div>

                    {/* Right Content - Live Sovereign Data Flow */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <SovereignDataFlow />

                        {/* Caption */}
                        <div className="mt-6 text-center">
                            <p className="text-sm font-mono text-slate-600">
                                Live Sovereign Data Flow Visualization
                            </p>
                            <p className="text-xs text-slate-500 mt-1">
                                OpenHIE-compliant architecture for national health exchanges
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
