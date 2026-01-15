'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';
import { TrigonalLoader } from '@/components/layout/TrigonalLoader';

const domainOptions = [
    'National HIE Spine',
    'Hospital OS',
    'Diagnostic Middleware'
];

const infrastructureGaps = [
    'LIS Sync',
    'Billing Automation',
    'Registry Connectivity',
    'Offline Outreach'
];

const standards = [
    'FHIR',
    'HL7',
    'OpenHIE',
    'ASTM'
];

const projectScales = [
    'Single Facility',
    'Regional',
    'National'
];

export function ConsultCTA() {
    const [domain, setDomain] = useState(domainOptions[0]);
    const [selectedGaps, setSelectedGaps] = useState<string[]>([]);
    const [selectedStandards, setSelectedStandards] = useState<string[]>([]);
    const [projectScale, setProjectScale] = useState(projectScales[0]);
    const [isProcessing, setIsProcessing] = useState(false);
    const [isComplete, setIsComplete] = useState(false);

    const toggleItem = (value: string, setState: React.Dispatch<React.SetStateAction<string[]>>) => {
        setState(prev => prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]);
    };

    const requiredMiddleware = selectedGaps.includes('LIS Sync') ? ['LabBridge'] : [];

    const handleSubmit = () => {
        setIsProcessing(true);
        setIsComplete(false);
        setTimeout(() => {
            setIsProcessing(false);
            setIsComplete(true);
        }, 1500);
    };

    return (
        <section className="relative py-24 bg-white overflow-hidden">
            {/* Blueprint Grid Background */}
            <div 
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, #E2E8F0 1px, transparent 1px),
                        linear-gradient(to bottom, #E2E8F0 1px, transparent 1px)
                    `,
                    backgroundSize: '24px 24px'
                }}
            />

            {isProcessing && (
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-white/95">
                    <TrigonalLoader durationMs={1500} forceShow persistInSession={false} />
                    <div className="mt-6 font-mono text-xs text-precision-blue uppercase tracking-wider animate-pulse">
                        [ANALYZING_INFRASTRUCTURE_GAP...]
                    </div>
                </div>
            )}

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 rounded-2xl p-10 lg:p-14 shadow-sm">
                    <div className="grid lg:grid-cols-2 gap-10 items-start">
                        {/* Left: Interactive Inquiry */}
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full mb-6">
                                    <Terminal className="w-4 h-4 text-precision-blue" />
                                    <span className="text-xs font-mono uppercase tracking-wider text-slate-600">
                                        TECHNICAL_INQUIRY_CONSOLE
                                    </span>
                                </div>

                                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3">
                                    Consult an <span className="text-precision-blue">Architect</span>
                                </h2>

                                <p className="text-base text-slate-600 mb-6 leading-relaxed">
                                    Define your infrastructure gap and standards stack. The YAML brief on the right updates in real time.
                                </p>

                                {/* Domain Selection */}
                                <div className="mb-6">
                                    <p className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2">DOMAIN</p>
                                    <div className="grid sm:grid-cols-3 gap-2">
                                        {domainOptions.map(option => (
                                            <button
                                                key={option}
                                                type="button"
                                                onClick={() => setDomain(option)}
                                                className={`px-3 py-2 rounded-md border text-xs font-mono uppercase tracking-wider transition-colors ${
                                                    domain === option
                                                        ? 'bg-precision-blue text-white border-precision-blue'
                                                        : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                                                }`}
                                            >
                                                {option}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Infrastructure Gaps */}
                                <div className="mb-6">
                                    <p className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2">INFRASTRUCTURE_GAPS</p>
                                    <div className="flex flex-wrap gap-2">
                                        {infrastructureGaps.map(gap => (
                                            <button
                                                key={gap}
                                                type="button"
                                                onClick={() => toggleItem(gap, setSelectedGaps)}
                                                className={`px-3 py-1.5 rounded-md border text-xs font-mono uppercase tracking-wider transition-colors ${
                                                    selectedGaps.includes(gap)
                                                        ? 'bg-slate-900 text-slate-50 border-slate-900'
                                                        : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                                                }`}
                                            >
                                                {gap}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Standards */}
                                <div className="mb-6">
                                    <p className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2">STANDARDS</p>
                                    <div className="flex flex-wrap gap-2">
                                        {standards.map(standard => (
                                            <button
                                                key={standard}
                                                type="button"
                                                onClick={() => toggleItem(standard, setSelectedStandards)}
                                                className={`px-3 py-1.5 rounded-md border text-xs font-mono uppercase tracking-wider transition-colors ${
                                                    selectedStandards.includes(standard)
                                                        ? 'bg-precision-blue text-white border-precision-blue'
                                                        : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                                                }`}
                                            >
                                                {standard}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Project Scale */}
                                <div className="mb-8">
                                    <p className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2">PROJECT_SCALE</p>
                                    <div className="flex flex-wrap gap-2">
                                        {projectScales.map(scale => (
                                            <button
                                                key={scale}
                                                type="button"
                                                onClick={() => setProjectScale(scale)}
                                                className={`px-3 py-1.5 rounded-md border text-xs font-mono uppercase tracking-wider transition-colors ${
                                                    projectScale === scale
                                                        ? 'bg-slate-900 text-slate-50 border-slate-900'
                                                        : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                                                }`}
                                            >
                                                {scale}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={handleSubmit}
                                    className="w-full lg:w-auto px-8 py-4 bg-precision-blue text-white rounded-lg font-mono text-sm font-bold uppercase tracking-wider hover:bg-blue-700 transition-colors flex items-center justify-center gap-3 group shadow-lg shadow-blue-500/20"
                                >
                                    Consult an Architect
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </motion.button>

                                <p className="text-xs text-slate-500 mt-4 font-mono">
                                    Response Time: 24-48 hours · Architect Seniority: 12+ Years
                                </p>
                            </motion.div>
                        </div>

                        {/* Right: YAML Console */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-slate-950 border-2 border-precision-blue rounded-lg p-6 shadow-xl"
                        >
                            {/* Terminal Header */}
                            <div className="flex items-center gap-2 mb-4 pb-4 border-b border-slate-700">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                                <span className="font-mono text-xs text-slate-400 ml-4">
                                    trigonal-consultation-brief.yaml
                                </span>
                            </div>

                            {/* Terminal Content */}
                            <div className="font-mono text-xs space-y-2 text-green-400">
                                <p className="text-slate-400"># CONSULTATION_BRIEF:</p>
                                <p className="text-white ml-4">domain: <span className="text-green-400">{domain.replace(/\s+/g, '_')}</span></p>

                                <p className="text-slate-400 mt-4"># INFRASTRUCTURE_GAPS:</p>
                                {selectedGaps.length > 0 ? (
                                    selectedGaps.map(gap => (
                                        <p key={gap} className="text-green-400 ml-4">- {gap.replace(/\s+/g, '_')}</p>
                                    ))
                                ) : (
                                    <p className="text-slate-500 ml-4">- NONE_SELECTED</p>
                                )}

                                {requiredMiddleware.length > 0 && (
                                    <>
                                        <p className="text-slate-400 mt-4"># REQUIRED_MIDDLEWARE:</p>
                                        {requiredMiddleware.map(item => (
                                            <p key={item} className="text-green-400 ml-4">- {item}</p>
                                        ))}
                                    </>
                                )}

                                <p className="text-slate-400 mt-4"># STANDARDS:</p>
                                {selectedStandards.length > 0 ? (
                                    selectedStandards.map(standard => (
                                        <p key={standard} className="text-green-400 ml-4">- {standard}</p>
                                    ))
                                ) : (
                                    <p className="text-slate-500 ml-4">- NONE_SELECTED</p>
                                )}

                                <p className="text-slate-400 mt-4"># PROJECT_SCALE:</p>
                                <p className="text-green-400 ml-4">- {projectScale.replace(/\s+/g, '_')}</p>

                                <div className="mt-4 pt-4 border-t border-slate-700">
                                    <p className="text-slate-400">$ status</p>
                                    {!isComplete && (
                                        <p className="text-green-400 animate-pulse">● System ready for architectural brief...</p>
                                    )}
                                    {isComplete && (
                                        <p className="text-green-400">✓ Architect assigned (12+ years seniority)</p>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
