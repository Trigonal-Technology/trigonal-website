'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Database, Activity, Beaker, Smartphone, Brain, Shield, Server, Cpu, BadgeCheck, Terminal } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AnimatedSyncHub } from './AnimatedSyncHub';
import {
    LabBridgeBlueprint,
    DigitalBrainBlueprint,
    InteroperableSpineBlueprint,
    OperationsSyncBlueprint,
    OutreachBlueprint
} from './TechnicalBlueprints';

// --- ARCHITECTURAL LAYERS (formerly domains) ---
const layers = [
    {
        id: 'layer-01',
        layerNum: '01',
        label: 'The Interoperable Spine',
        icon: Database,
        color: '#1E4E9B',
        mechanicalStory: 'The Data Highway. We architect National Health Information Exchanges (HIE) using OpenHIE standards and FHIR R4 resource mapping-ensuring every clinical event is recorded exactly once across the sovereign grid.',
        techDNA: ['OpenHIE Architecture', 'FHIR R4 Native Mapping', 'Health Info Mediators (HIM)', 'TLS 1.3 Transport Security'],
        protocol: 'FHIR R4 • OpenHIE • IHE',
        compliance: 'Nepal MoHP Directive 2081',
        realImplementation: 'LafiaHMS (Nigeria) • National Patient Registry Integration • 500K+ patient records synchronized',
        proofStatement: 'We built the National Interoperability Layer for LafiaHMS, connecting 12+ disparate clinical systems into a unified FHIR-compliant data spine.',
        BlueprintComponent: InteroperableSpineBlueprint
    },
    {
        id: 'layer-02',
        layerNum: '02',
        label: 'Integrated Hospital OS',
        icon: Activity,
        color: '#D97706',
        mechanicalStory: 'Closing the Revenue Gap. Our 12+ years of Odoo engineering prevent revenue leaks through real-time EHR synchronization. Every drug dispensed, every test ordered, every procedure performed-automatically captured in the financial layer with zero manual entry.',
        techDNA: ['OpenMRS Clinical Events', 'Odoo 18 ERP Integration', 'Bahmni Clinical Workflows', 'PostgreSQL Replication'],
        protocol: 'REST API • OAuth 2.0',
        compliance: 'IRD Tax Compliant (Nepal)',
        realImplementation: 'Deployed in 50+ hospitals • 10M+ clinical-financial transactions/year • 100% billing capture rate',
        proofStatement: 'Our Odoo-OpenMRS sync engine has processed over 10 million clinical events, ensuring zero revenue leakage across hospital billing cycles.',
        BlueprintComponent: OperationsSyncBlueprint
    },
    {
        id: 'layer-03',
        layerNum: '03',
        label: 'LabBridge Automation',
        icon: Beaker,
        color: '#1E4E9B',
        mechanicalStory: 'Zero-Error Diagnostics. Manual lab transcription is the silent killer of diagnostic accuracy. Our HL7/ASTM middleware connects analyzers (CBC, Chemistry, PCR) directly to the LIS (OpenELIS/SENAITE), achieving 0% transcription error and ISO 15189 compliance.',
        techDNA: ['HL7 v2.x / ASTM 1394 Parsers', 'Serial/TCP Analyzer Drivers', 'OpenELIS / SENAITE Integration', 'Real-time Result Validation'],
        protocol: 'HL7 v2.x • ASTM 1394',
        compliance: 'ISO 15189 (Medical Labs)',
        realImplementation: 'LafiaHMS Laboratory • 50K+ automated results/month • 0% manual transcription error',
        proofStatement: 'LabBridge processes 50,000+ analyzer results per month at LafiaHMS with zero manual intervention, cutting result turnaround time by 70%.',
        BlueprintComponent: LabBridgeBlueprint
    },
    {
        id: 'layer-04',
        layerNum: '04',
        label: 'Digital Brain (AI Intelligence)',
        icon: Brain,
        color: '#7C3AED',
        mechanicalStory: 'The Intelligence Layer. Data without insight is overhead. We deploy AI-powered radiology diagnostics (fracture detection at 94% accuracy), predictive Metabase dashboards for outbreak alerts, and NLP engines for automated ICD claim coding.',
        techDNA: ['CNN Radiology Models (TensorFlow)', 'Predictive Analytics (Metabase ML)', 'NLP Claim Processing', 'Python ML Pipelines'],
        protocol: 'TensorFlow • CUDA • REST',
        compliance: 'Data Sovereignty (On-Prem)',
        realImplementation: 'Radiology AI in pilot deployment • Metabase dashboards serving 200+ policy analysts',
        proofStatement: 'Our AI radiology module achieved 94% fracture detection accuracy in clinical trials, reducing radiologist workload by 40%.',
        BlueprintComponent: DigitalBrainBlueprint
    },
    {
        id: 'layer-05',
        layerNum: '05',
        label: 'mHealth & Last-Mile Reach',
        icon: Smartphone,
        color: '#10B981',
        mechanicalStory: 'Extending the Nervous System to the Periphery. 11+ years of mobile expertise delivering offline-first data capture (Muzima) and telemedicine (Intelehealth). Sovereign health must reach the last mile, functioning in zero-connectivity environments.',
        techDNA: ['Offline-First Architecture', 'Muzima Mobile Forms', 'Intelehealth Telemedicine', 'Android Native + PWA'],
        protocol: 'Android SDK • REST Sync',
        compliance: 'HIPAA Encryption',
        realImplementation: 'Deployed in 300+ rural health posts • 50K+ CHW encounters captured offline',
        proofStatement: 'Muzima mobile deployments have captured 50,000+ community health encounters in offline mode, syncing seamlessly upon reconnection.',
        BlueprintComponent: OutreachBlueprint
    }
];

interface VerticalNervousSystemProps {
    onOpenConsult?: () => void;
}

export function VerticalNervousSystem({ onOpenConsult }: VerticalNervousSystemProps = {}) {
    const [activeLayerId, setActiveLayerId] = useState<string | null>(null);
    const [consoleExpanded, setConsoleExpanded] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const spineRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const activeLayer = layers.find(l => l.id === activeLayerId) || layers[0];

    // Detect which layer is in view
    useEffect(() => {
        const handleScroll = () => {
            const sections = layers.map(l => document.getElementById(l.id));
            const scrollPos = window.scrollY + window.innerHeight / 2;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section && section.offsetTop <= scrollPos) {
                    setActiveLayerId(layers[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div ref={containerRef} className="relative bg-white">
            {/* === THE SPINE === */}
            <div className="absolute left-1/2 w-1 z-10 pointer-events-none hidden lg:block" ref={spineRef} style={{ top: '100vh', height: 'calc(100% - 100vh - 600px)' }}>
                {/* The Glowing Spine Line */}
                <motion.div
                    className="absolute left-0 w-full bg-gradient-to-b from-execution-orange via-precision-blue to-execution-orange"
                    style={{
                        height: useTransform(scrollYProgress, [0, 1], ['0%', '100%']),
                        boxShadow: '0 0 20px rgba(217, 119, 6, 0.6)'
                    }}
                />

                {/* Data Pulses */}
                {[0, 1, 2].map((i) => (
                    <motion.div
                        key={i}
                        className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-execution-orange"
                        style={{
                            filter: 'blur(2px)',
                            boxShadow: '0 0 10px rgba(217, 119, 6, 0.8)'
                        }}
                        animate={{
                            top: ['0%', '100%'],
                            opacity: [0, 1, 1, 0]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "linear",
                            delay: i * 1.3
                        }}
                    />
                ))}
            </div>

            {/* === ANIMATED SYNC HUB (Hero) === */}
            <AnimatedSyncHub onOpenConsult={onOpenConsult} />

            {/* Floating Console Trigger */}
            <button
                onClick={() => setConsoleExpanded(!consoleExpanded)}
                className="fixed top-24 right-8 z-50 bg-slate-900 text-white p-3 rounded-lg shadow-2xl border border-precision-blue hover:bg-slate-800 transition-all"
            >
                <Terminal className="w-5 h-5" />
            </button>

            {/* === PERSISTENT ARCHITECTURE CONSOLE === */}
            <AnimatePresence>
                {consoleExpanded && (
                    <motion.div
                        initial={{ x: 400, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 400, opacity: 0 }}
                        transition={{ type: "spring", damping: 25 }}
                        className="fixed top-24 right-8 z-40 w-[450px] max-h-[80vh] bg-[#0A192F] text-slate-300 rounded-lg shadow-2xl border border-precision-blue overflow-hidden"
                    >
                        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Activity className="w-5 h-5 text-precision-blue" />
                                <div>
                                    <h3 className="text-sm font-mono font-bold text-white uppercase tracking-wider">Architecture Console</h3>
                                    <p className="text-xs text-slate-500">v2.0 • Real-time Layer Analysis</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setConsoleExpanded(false)}
                                className="text-slate-500 hover:text-white transition-colors"
                            >
                                ✕
                            </button>
                        </div>

                        <div className="p-6 overflow-y-auto max-h-[calc(80vh-100px)]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeLayer.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {/* Layer Badge */}
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/10 mb-4">
                                        <activeLayer.icon className="w-4 h-4" style={{ color: activeLayer.color }} />
                                        <span className="text-xs font-mono font-bold text-white uppercase">
                                            Layer {activeLayer.layerNum}
                                        </span>
                                    </div>

                                    <h2 className="text-2xl font-bold text-white mb-3 leading-tight">{activeLayer.label}</h2>

                                    {/* Mechanical Story */}
                                    <div className="mb-6 p-4 bg-white/5 border-l-2 border-execution-orange rounded-r">
                                        <p className="text-sm text-slate-400 leading-relaxed italic">
                                            "{activeLayer.mechanicalStory}"
                                        </p>
                                    </div>

                                    {/* Technical DNA */}
                                    <div className="mb-6">
                                        <h4 className="text-xs font-mono uppercase text-slate-500 mb-3 tracking-wider flex items-center gap-2">
                                            <Cpu className="w-3 h-3" /> Technical DNA
                                        </h4>
                                        <ul className="space-y-2">
                                            {activeLayer.techDNA.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2 text-xs font-mono text-slate-300">
                                                    <BadgeCheck className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Real Implementation */}
                                    <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded">
                                        <h4 className="text-xs font-mono uppercase text-emerald-500 mb-2 tracking-wider">
                                            Deployment Proof
                                        </h4>
                                        <p className="text-xs text-slate-300 leading-relaxed">{activeLayer.realImplementation}</p>
                                    </div>

                                    {/* Protocol & Compliance */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <h4 className="text-[10px] font-mono uppercase text-slate-500 mb-2 tracking-wider">Protocol</h4>
                                            <p className="text-xs font-mono text-precision-blue font-bold">{activeLayer.protocol}</p>
                                        </div>
                                        <div>
                                            <h4 className="text-[10px] font-mono uppercase text-slate-500 mb-2 tracking-wider">Compliance</h4>
                                            <div className="flex items-center gap-2">
                                                <Shield className="w-4 h-4 text-green-500" />
                                                <span className="text-xs font-bold text-white">{activeLayer.compliance}</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* === ARCHITECTURAL LAYERS === */}
            {layers.map((layer, index) => (
                <section
                    key={layer.id}
                    id={layer.id}
                    className={cn(
                        "relative min-h-screen py-32 px-4",
                        index % 2 === 0 ? "bg-white" : "bg-slate-50"
                    )}
                >
                    {/* Spine Connection Node */}
                    <div className="absolute left-1/2 top-32 -translate-x-1/2 w-12 h-12 rounded-full border-4 border-white shadow-xl z-20 hidden lg:flex items-center justify-center"
                        style={{ backgroundColor: layer.color }}
                    >
                        <layer.icon className="w-6 h-6 text-white" />
                    </div>

                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            {/* Content Side */}
                            <div className={cn(index % 2 === 1 ? "lg:order-2" : "")}>
                                {/* Layer Header */}
                                <div className="mb-8">
                                    <div className="inline-flex items-center gap-3 mb-4">
                                        <div className="w-14 h-14 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${layer.color}20`, border: `2px solid ${layer.color}` }}>
                                            <layer.icon className="w-7 h-7" style={{ color: layer.color }} />
                                        </div>
                                        <div>
                                            <p className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
                                                Layer {layer.layerNum}
                                            </p>
                                            <h3 className="text-lg font-mono font-bold text-slate-900 uppercase tracking-tight">
                                                {layer.label}
                                            </h3>
                                        </div>
                                    </div>

                                    <h2 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
                                        {layer.label}
                                    </h2>
                                </div>

                                {/* Mechanical Story */}
                                <div className="mb-8 p-6 bg-slate-900 text-slate-300 rounded-lg border-l-4 border-execution-orange">
                                    <p className="text-sm leading-relaxed italic">
                                        {layer.mechanicalStory}
                                    </p>
                                </div>

                                {/* Proof Statement */}
                                <div className="mb-8 p-5 bg-emerald-50 border-l-4 border-emerald-500 rounded-r">
                                    <h4 className="text-xs font-mono font-bold text-emerald-700 uppercase mb-2 tracking-wider">
                                        Engineering Proof
                                    </h4>
                                    <p className="text-sm text-slate-700 leading-relaxed font-medium">
                                        {layer.proofStatement}
                                    </p>
                                </div>

                                {/* Tech DNA Grid */}
                                <div className="grid grid-cols-2 gap-6 mb-8">
                                    <div>
                                        <h5 className="text-xs font-mono font-bold text-slate-400 uppercase mb-3 tracking-wider">
                                            Protocol Stack
                                        </h5>
                                        <p className="text-sm font-mono text-slate-900 font-bold">{layer.protocol}</p>
                                    </div>
                                    <div>
                                        <h5 className="text-xs font-mono font-bold text-slate-400 uppercase mb-3 tracking-wider">
                                            Compliance
                                        </h5>
                                        <div className="flex items-center gap-2">
                                            <Shield className="w-4 h-4 text-emerald-500" />
                                            <span className="text-sm font-bold text-slate-900">{layer.compliance}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Technical Blueprint Side */}
                            <div className={cn(
                                "relative rounded-xl overflow-hidden shadow-2xl bg-slate-900 border-2 hover:scale-[1.02] transition-transform",
                                index % 2 === 1 ? "lg:order-1" : ""
                            )}
                                style={{ borderColor: layer.color }}
                            >
                                <div className="aspect-video">
                                    <layer.BlueprintComponent />
                                </div>

                                {/* Blueprint Label */}
                                <div className="absolute top-4 left-4 px-3 py-1 bg-slate-900/90 backdrop-blur-sm border border-white/20 rounded">
                                    <p className="text-xs font-mono text-white uppercase tracking-wider">
                                        Technical Schematic: Layer {layer.layerNum}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            {/* === FINAL CTA === */}
            <section className="relative py-32 bg-slate-950 text-center overflow-hidden">
                <div className="absolute inset-0 bg-blueprint-grid opacity-5" />

                <div className="relative z-10 max-w-4xl mx-auto px-4">
                    <img src="/favicon.svg" className="w-16 h-16 mx-auto mb-6 opacity-80" alt="Trigonal" />
                    <h2 className="text-5xl font-bold text-white mb-8 leading-tight">
                        Ready to Architect Your<br />Sovereign Health Infrastructure?
                    </h2>
                    <p className="text-xl text-slate-400 font-mono mb-12 max-w-3xl mx-auto leading-relaxed">
                        Synthesized insights from over a decade of architecting global health infrastructure across four continents.
                    </p>
                    <button
                        onClick={onOpenConsult}
                        className="px-12 py-5 bg-precision-blue text-white font-mono font-bold rounded-sm hover:bg-precision-blue/90 transition-all tracking-widest uppercase text-sm shadow-lg hover:shadow-precision-blue/50"
                    >
                        Initiate System Audit
                    </button>

                    {/* Stats Bar */}
                    <div className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
                        {[
                            { label: 'Combined Engineering Years', value: '60+' },
                            { label: 'Architectural Layers', value: '05' },
                            { label: 'Standards Compliance', value: '100%' }
                        ].map((stat, i) => (
                            <div key={i} className="text-center">
                                <p className="text-4xl font-bold text-execution-orange mb-2">{stat.value}</p>
                                <p className="text-xs text-slate-500 font-mono uppercase tracking-wider">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
