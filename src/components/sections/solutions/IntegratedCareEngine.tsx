'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { Database, Activity, Beaker, Smartphone, Brain, Shield, Server, Cpu, Globe, Lock, Code2, BadgeCheck, ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

// --- DATA: The 5 Functional Domains ---
const domains = [
    {
        id: 'infrastructure',
        label: 'Infrastructure',
        gearLabel: 'INFRA',
        pos: { x: 0, y: -240 }, // Top
        color: '#1E4E9B', // Precision Blue
        icon: Database,
        h2: 'National Health Interoperability',
        story: 'Building the data highways. We architect National Data Highways and Health Information Mediators (HIM) using OpenHIE standards and FHIR-native resource mapping.',
        tech: ['OpenHIE Architecture', 'FHIR R4 Resource Mapping', 'Health Info Mediators'],
        protocol: 'TLS 1.3 • AES-256',
        compliance: 'Nepal MoHP 2081',
        detail: 'Our Infrastructure layer ensures that every clinical event is recorded exactly once across the national grid. We prioritize Health Information Exchange (HIE) to allow data to travel with the patient, bridging the gap between urban centers and rural clinics.'
    },
    {
        id: 'operations',
        label: 'Operations',
        gearLabel: 'OPS',
        pos: { x: 230, y: -80 }, // Top Right
        color: '#D97706', // Execution Orange
        icon: Activity,
        h2: 'Integrated Hospital OS',
        story: 'Closing the revenue gap. We synchronize OpenMRS clinical events with Odoo 18 ERP to ensure 100% revenue capture and supply chain visibility.',
        tech: ['OpenMRS + Odoo Sync', 'Bahmni Clinical', 'Inventory Logic'],
        protocol: 'REST API • PostgreSQL',
        compliance: 'IRD Compliant',
        detail: 'Leveraging 12+ years of Odoo engineering, we close the loop between clinical diagnosis and financial billing. Every drug dispensed and every test ordered is automatically synchronized with the hospital’s revenue management system.'
    },
    {
        id: 'intelligence',
        label: 'Intelligence',
        gearLabel: 'INTEL',
        pos: { x: 150, y: 190 }, // Bottom Right
        color: '#7C3AED', // Violet
        icon: Brain,
        h2: 'AI & Predictive Analytics',
        story: 'The Digital Brain. We deploy AI-powered diagnostics and predictive Metabase dashboards for clinical and policy-level intelligence.',
        tech: ['Predictive Metabase', 'Radiology AI', 'NLP Claim Automation'],
        protocol: 'Python ML • TensorFlow',
        compliance: 'Data Sovereignty',
        detail: 'Data without insight is overhead. Our Intelligence layer turns raw clinical data into smarter decisions through Radiology AI for diagnostics and Metabase dashboards for population health policy.'
    },
    {
        id: 'laboratory',
        label: 'Laboratory',
        gearLabel: 'LAB',
        pos: { x: -150, y: 190 }, // Bottom Left
        color: '#EF4444', // Red
        icon: Beaker,
        h2: 'LabBridge Automation',
        story: 'Zero-error diagnostics. Our HL7/ASTM middleware connects analyzers directly to the LIS (OpenELIS/SENAITE), ensuring 100% data accuracy.',
        tech: ['HL7/ASTM Middleware', 'OpenELIS / SENAITE', 'Analyzer Drivers'],
        protocol: 'HL7 v2.x • ASTM 1394',
        compliance: 'ISO 15189',
        detail: 'Manual transcriptions lead to diagnostic failure. LabBridge bridges the hardware-software gap, allowing lab analyzers to transmit results directly to patient records via robust middleware protocols.'
    },
    {
        id: 'outreach',
        label: 'Outreach',
        gearLabel: 'REACH',
        pos: { x: -230, y: -80 }, // Top Left
        color: '#10B981', // Emerald
        icon: Smartphone,
        h2: 'mHealth & Telemedicine',
        story: 'Extending care to the last mile. 11+ years of mobile expertise delivering offline-first data capture (Muzima) and specialist access (Intelehealth).',
        tech: ['Offline-First Sync', 'Muzima Mobile', 'Intelehealth Platform'],
        protocol: 'Android Native • PWA',
        compliance: 'HIPAA',
        detail: 'Sovereign health must reach the periphery. We engineer mobile solutions that function in zero-connectivity environments, ensuring that remote community health workers remain part of the Digital Nervous System.'
    },
];

export function IntegratedCareEngine() {
    const [activeDomainId, setActiveDomainId] = useState<string | null>(null);
    const activeDomain = domains.find(d => d.id === activeDomainId);

    // Hub Rotation logic
    const [hubRotation, setHubRotation] = useState(0);

    useEffect(() => {
        if (activeDomainId) {
            setHubRotation(prev => prev + 72); // Rotate Hub on each interaction
        }
    }, [activeDomainId]);

    const svgFilters = (
        <defs>
            <filter id="gear-shadow">
                <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.2" />
            </filter>
            <filter id="glow">
                <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
                <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>
    );

    return (
        <div className="flex flex-col">
            {/* --- KINETIC ENGINE SECTION --- */}
            <section id="gearbox-section" className="relative min-h-[95vh] bg-slate-50 overflow-hidden flex flex-col lg:flex-row">
                {/* --- LEFT: The Kinetic Engine --- */}
                <div className="w-full lg:w-3/5 h-[65vh] lg:h-auto flex items-center justify-center relative z-10 p-8">
                    <div className="absolute inset-0 bg-blueprint-grid opacity-[0.05]" />

                    <svg viewBox="-400 -400 800 800" className="w-full h-full max-w-[800px] select-none">
                        {svgFilters}

                        {/* --- NEURAL NERVES (Connection Lines) --- */}
                        {domains.map((d) => {
                            const isActive = activeDomainId === d.id;
                            const angle = Math.atan2(d.pos.y, d.pos.x);
                            const gearDist = isActive ? 195 : Math.sqrt(d.pos.x ** 2 + d.pos.y ** 2);
                            const x2 = Math.cos(angle) * gearDist;
                            const y2 = Math.sin(angle) * gearDist;

                            return (
                                <motion.g key={`nerve-${d.id}`}>
                                    <line
                                        x1="0" y1="0" x2={x2} y2={y2}
                                        stroke={isActive ? d.color : "#cbd5e1"}
                                        strokeWidth={isActive ? "3" : "1"}
                                        strokeDasharray={isActive ? "none" : "4 4"}
                                        opacity={isActive ? 1 : 0.2}
                                        className="transition-all duration-500"
                                    />
                                    {isActive && (
                                        <motion.circle
                                            r="4"
                                            fill={d.color}
                                            filter="url(#glow)"
                                            initial={{ offsetDistance: "0%" }}
                                            animate={{
                                                cx: [0, x2],
                                                cy: [0, y2],
                                                opacity: [0, 1, 0]
                                            }}
                                            transition={{
                                                duration: 1.5,
                                                repeat: Infinity,
                                                ease: "linear"
                                            }}
                                        />
                                    )}
                                </motion.g>
                            );
                        })}

                        {/* --- CENTRAL HUB (SYNC HUB) --- */}
                        <motion.g animate={{ rotate: hubRotation }} transition={{ type: "spring", stiffness: 40, damping: 10 }}>
                            <circle r="130" fill="white" stroke="#1E4E9B" strokeWidth="3" filter="url(#gear-shadow)" />
                            {/* Static Teeth Ring */}
                            <circle r="145" fill="none" stroke="#1E4E9B" strokeWidth="6" strokeDasharray="8 8" opacity="0.15" />

                            {/* Hub Core */}
                            <circle r="60" fill="#f8fafc" stroke="#1E4E9B" strokeWidth="1" />

                            <foreignObject x="-80" y="-80" width="160" height="160">
                                <motion.div
                                    style={{ rotate: -hubRotation }} // Counter-rotate text so it stays upright
                                    className="w-full h-full flex flex-col items-center justify-center p-4"
                                >
                                    <img src="/favicon.svg" className="w-12 h-12 mb-3 object-contain opacity-90" alt="Trigonal" />
                                    <span className="text-[10px] font-mono font-bold text-slate-900 tracking-widest text-center uppercase leading-tight">SYNC<br />HUB</span>
                                </motion.div>
                            </foreignObject>
                        </motion.g>

                        {/* --- SATELLITE GEARS --- */}
                        {domains.map((d) => {
                            const isActive = activeDomainId === d.id;
                            const angle = Math.atan2(d.pos.y, d.pos.x);
                            const idleDist = Math.sqrt(d.pos.x ** 2 + d.pos.y ** 2);
                            const meshDist = 195;

                            const currentDist = isActive ? meshDist : idleDist;
                            const x = Math.cos(angle) * currentDist;
                            const y = Math.sin(angle) * currentDist;

                            return (
                                <motion.g
                                    key={d.id}
                                    animate={{ x, y }}
                                    transition={{ type: "spring", stiffness: 60, damping: 15 }}
                                    onMouseEnter={() => setActiveDomainId(d.id)}
                                    className="cursor-pointer group"
                                >
                                    {/* Gear Body */}
                                    <circle
                                        r="60"
                                        fill="white"
                                        stroke={isActive ? d.color : d.color}
                                        strokeWidth={isActive ? 6 : 2}
                                        filter="url(#gear-shadow)"
                                        className="transition-all duration-300"
                                    />

                                    {/* Teeth */}
                                    <motion.circle
                                        r="72"
                                        fill="none"
                                        stroke={isActive ? d.color : d.color}
                                        strokeWidth="5"
                                        strokeDasharray="6 6"
                                        opacity={isActive ? 0.6 : 0.2}
                                        animate={{ rotate: isActive ? 360 : 0 }}
                                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                    />

                                    {/* Icon & Label */}
                                    <foreignObject x="-40" y="-40" width="80" height="80">
                                        <div className="w-full h-full flex flex-col items-center justify-center text-center">
                                            <d.icon
                                                className={cn("w-6 h-6 mb-1 transition-all duration-300", isActive ? "scale-110" : "text-slate-500 opacity-60")}
                                                style={{ color: isActive ? d.color : d.color }}
                                            />
                                            <span className={cn("text-[10px] font-mono font-bold tracking-tighter uppercase transition-all", isActive ? "text-slate-900" : "text-slate-400")}>
                                                {d.gearLabel}
                                            </span>
                                        </div>
                                    </foreignObject>
                                </motion.g>
                            );
                        })}
                    </svg>

                    {/* Instructional Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                        <div className="w-[600px] h-[600px] border-[0.5px] border-slate-300 rounded-full border-dashed animate-spin-slow" />
                    </div>
                </div>

                {/* --- RIGHT: Architecture Console --- */}
                <div className="w-full lg:w-2/5 bg-[#0A192F] text-slate-300 p-8 lg:p-12 border-l border-slate-800 relative shadow-2xl flex flex-col overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/blueprint-grid.svg')] opacity-5 pointer-events-none" />

                    <div className="relative z-10 flex flex-col h-full">
                        <h3 className="text-xs font-mono font-bold text-precision-blue uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
                            <Activity className="w-4 h-4" />
                            Architecture Console v1.0
                        </h3>

                        <AnimatePresence mode="wait">
                            {activeDomain ? (
                                <motion.div
                                    key={activeDomain.id}
                                    initial={{ opacity: 0, scale: 0.98, x: 20 }}
                                    animate={{ opacity: 1, scale: 1, x: 0 }}
                                    exit={{ opacity: 0, scale: 0.98, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex-grow flex flex-col"
                                >
                                    <div className="mb-6">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/10 mb-4">
                                            <activeDomain.icon className="w-4 h-4" style={{ color: activeDomain.color }} />
                                            <span className="text-xs font-mono font-bold text-white uppercase">{activeDomain.label} Domain</span>
                                        </div>
                                        <h2 className="text-3xl font-bold text-white mb-4 leading-tight">{activeDomain.h2}</h2>
                                        <p className="text-slate-400 leading-relaxed text-sm font-light border-l-2 border-slate-700 pl-4 py-1 italic">
                                            "{activeDomain.story}"
                                        </p>
                                    </div>

                                    <div className="mb-8 p-4 bg-white/5 border border-white/5 rounded backdrop-blur-sm flex-grow">
                                        <h4 className="text-[10px] font-mono uppercase text-slate-500 mb-4 tracking-wider flex items-center gap-2">
                                            <Cpu className="w-3 h-3" /> Technical DNA
                                        </h4>
                                        <ul className="space-y-3">
                                            {activeDomain.tech.map(item => (
                                                <li key={item} className="flex items-center gap-3 text-sm font-mono text-slate-300">
                                                    <BadgeCheck className="w-4 h-4 text-emerald-500" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                        <p className="mt-6 text-xs text-slate-500 leading-relaxed font-inter">
                                            {activeDomain.detail}
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 pt-6 mt-auto border-t border-slate-800/50">
                                        <div>
                                            <h4 className="text-[10px] font-mono uppercase text-slate-500 mb-2 tracking-wider">Protocol Security</h4>
                                            <p className="text-xs font-mono text-precision-blue">{activeDomain.protocol}</p>
                                        </div>
                                        <div>
                                            <h4 className="text-[10px] font-mono uppercase text-slate-500 mb-2 tracking-wider">Audit Compliance</h4>
                                            <div className="flex items-center gap-2">
                                                <Shield className="w-4 h-4 text-green-500" />
                                                <span className="text-xs font-bold text-white">{activeDomain.compliance}</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="default"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="h-full flex flex-col justify-center"
                                >
                                    <div className="mb-8">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/10 mb-4">
                                            <Server className="w-4 h-4 text-emerald-400" />
                                            <span className="text-xs font-mono font-bold text-white uppercase">System Manifest</span>
                                        </div>
                                        <h2 className="text-2xl font-bold text-white mb-4 leading-tight">Universal Health Mesh</h2>
                                        <p className="text-slate-400 leading-relaxed text-sm font-light">
                                            Trigonal engineers the integrated infrastructure for Sovereign Health. Interact with the system map to inspect standard compliance and stack integrity.
                                        </p>
                                    </div>

                                    <div className="space-y-3">
                                        {[
                                            { label: 'Core Standards', val: 'HL7 FHIR R4 • OpenHIE', icon: Globe },
                                            { label: 'Engineering', val: 'Java / Python / Odoo 18', icon: Code2 },
                                            { label: 'Security', val: 'AES-256 • TLS 1.3', icon: Lock },
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center justify-between p-3 rounded bg-white/5 border border-white/5">
                                                <div className="flex items-center gap-3">
                                                    <item.icon className="w-4 h-4 text-slate-500" />
                                                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-tighter">{item.label}</span>
                                                </div>
                                                <span className="text-xs font-bold text-white font-mono">{item.val}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-12 text-center">
                                        <ArrowDown className="w-5 h-5 mx-auto text-slate-600 animate-bounce" />
                                        <p className="text-[10px] font-mono text-slate-600 uppercase mt-4 tracking-widest">Scroll for Detailed Domain Analysis</p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* --- DETAILED DOMAIN STORY (Full Scroll) --- */}
            <div className="bg-white">
                {domains.map((d, i) => (
                    <section
                        key={`${d.id}-story`}
                        id={d.id}
                        className={cn(
                            "py-24 px-4 border-b border-slate-100",
                            i % 2 === 1 ? "bg-slate-50" : "bg-white"
                        )}
                    >
                        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                            <div className={cn(i % 2 === 1 ? "lg:order-2" : "")}>
                                <div className="inline-flex items-center gap-2 mb-6">
                                    <div className="w-12 h-12 rounded bg-slate-100 flex items-center justify-center">
                                        <d.icon className="w-6 h-6" style={{ color: d.color }} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">Functional Domain 0{i + 1}</p>
                                        <h4 className="text-sm font-mono font-bold text-slate-900 uppercase">{d.label}</h4>
                                    </div>
                                </div>
                                <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
                                    {d.h2}
                                </h2>
                                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                    {d.detail}
                                </p>

                                <div className="grid grid-cols-2 gap-8">
                                    <div>
                                        <h5 className="text-[10px] font-mono font-bold text-slate-400 uppercase mb-3">Key Performance Proof</h5>
                                        <p className="text-sm font-medium text-slate-900">{d.tech[0]}</p>
                                        <p className="text-sm text-slate-500 mt-1">Full-stack deployment verified.</p>
                                    </div>
                                    <div>
                                        <h5 className="text-[10px] font-mono font-bold text-slate-400 uppercase mb-3">Compliance Standard</h5>
                                        <div className="flex items-center gap-2">
                                            <Shield className="w-4 h-4 text-emerald-500" />
                                            <p className="text-sm font-bold text-slate-900">{d.compliance}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={cn(
                                "relative rounded-lg overflow-hidden aspect-video bg-slate-900 group shadow-2xl transition-transform hover:scale-[1.02]",
                                i % 2 === 1 ? "lg:order-1" : ""
                            )}>
                                {/* Placeholder for Architectural Diagrams */}
                                <div className="absolute inset-0 bg-blueprint-grid opacity-20" />
                                <div className="absolute inset-0 flex items-center justify-center flex-col p-8 text-center">
                                    <d.icon className="w-16 h-16 mb-4 opacity-50 text-white" />
                                    <p className="text-xs font-mono text-white/40 uppercase tracking-widest">System Diagram: {d.label}</p>
                                    <div className="mt-8 space-y-2 w-full max-w-xs">
                                        <div className="h-1 bg-white/10 rounded w-full overflow-hidden">
                                            <motion.div
                                                className="h-full bg-execution-orange"
                                                animate={{ width: ["0%", "100%", "0%"] }}
                                                transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                                            />
                                        </div>
                                        <div className="h-1 bg-white/10 rounded w-2/3 overflow-hidden">
                                            <motion.div
                                                className="h-full bg-precision-blue"
                                                animate={{ width: ["0%", "100%", "0%"] }}
                                                transition={{ duration: 3, repeat: Infinity, delay: i * 0.8 }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                ))}
            </div>

            {/* --- CTA SECTION --- */}
            <section className="py-24 bg-slate-950 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-blueprint-grid opacity-5" />
                <div className="max-w-4xl mx-auto px-4 relative z-10">
                    <h2 className="text-4xl font-bold text-white mb-8">Ready to Architect Your Infrastructure?</h2>
                    <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Join the global grid of sovereign health systems. Our elite engineering team is ready to map your national data flow.
                    </p>
                    <button className="px-12 py-5 bg-precision-blue text-white font-mono font-bold rounded-sm hover:bg-precision-blue/90 transition-all tracking-widest uppercase text-sm">
                        Start System Audit
                    </button>
                </div>
            </section>
        </div>
    );
}
