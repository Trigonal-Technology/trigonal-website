'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FileText, Wrench, Shield, MapPin, ArrowRight, Download, Terminal } from 'lucide-react';

const resourceDomains = [
    {
        id: 'case-studies',
        title: 'Case Studies',
        subtitle: 'Architectural Post-Mortems',
        dnaTag: '[PDF | ARCHITECTURE]',
        updatedAt: 'JAN 2026',
        icon: FileText,
        color: 'text-blue-400',
        bgColor: 'bg-blue-500/20',
        borderColor: 'border-blue-500/50',
        description: 'Deep-dive technical analyses of our flagship implementations across Nigeria, Venezuela, and Nepal.',
        features: ['LafiaHMS (Nigeria)', 'Venevital (Venezuela)', 'Exploded Stack Diagrams', 'Integration Architectures'],
        href: '/resources/case-studies',
        count: '12 Projects'
    },
    {
        id: 'blueprints',
        title: 'Technical Blueprints',
        subtitle: 'The Sovereign Library',
        dnaTag: '[ARCH | SCHEMATICS]',
        updatedAt: 'JAN 2026',
        icon: Wrench,
        color: 'text-orange-400',
        bgColor: 'bg-orange-500/20',
        borderColor: 'border-orange-500/50',
        description: 'White papers and technical documentation on FHIR R4 mapping, Odoo 18 ERP, and OpenHIE architecture.',
        features: ['FHIR R4 Mapping Protocols', 'Odoo 18 Healthcare ERP', 'OpenHIE Spine Architecture', 'HL7 v2.x Integration'],
        href: '/resources/blueprints',
        count: '8 Documents'
    },
    {
        id: 'compliance',
        title: 'Compliance & Standards',
        subtitle: 'The Trust Node',
        dnaTag: '[REGULATORY | SECURITY]',
        updatedAt: 'JAN 2026',
        icon: Shield,
        color: 'text-green-400',
        bgColor: 'bg-green-500/20',
        borderColor: 'border-green-500/50',
        description: 'Frameworks for data sovereignty, regional compliance (Nepal 2081), and international standards (HIPAA, GDPR).',
        features: ['Data Sovereignty Framework', 'Nepal MoHP 2081 Checklist', 'HIPAA Data Residency', 'GDPR Compliance'],
        href: '/resources/compliance',
        count: '6 Frameworks'
    },
    {
        id: 'field-reports',
        title: 'Field Reports',
        subtitle: 'Frontline Insights',
        dnaTag: '[LOG | FIELD REPORT]',
        updatedAt: 'JAN 2026',
        icon: MapPin,
        color: 'text-purple-400',
        bgColor: 'bg-purple-500/20',
        borderColor: 'border-purple-500/50',
        description: 'Real-world deployment logs from rural implementations, solving zero-connectivity challenges with offline-first solutions.',
        features: ['Offline-First Mobile Health', 'Rural Deployment Logs', 'Data Synchronization', 'Muzima & Intelehealth'],
        href: '/resources/field-reports',
        count: '15 Reports'
    }
];

function KnowledgeNode({ x, y, label }: { x: number; y: number; label: string }) {
    return (
        <g>
            <circle cx={x} cy={y} r="15" fill="url(#nodeGradient)" />
            <circle cx={x} cy={y} r="3" fill="#D97706" />
            <text
                x={x}
                y={y + 25}
                textAnchor="middle"
                className="fill-slate-400 text-[10px] font-mono uppercase tracking-widest"
            >
                {label}
            </text>
        </g>
    );
}

export function ResourcesClient() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative bg-slate-950 text-white overflow-hidden min-h-[500px] flex items-center">
                {/* Neural Knowledge Graph Background */}
                <div className="absolute inset-0 z-0">
                    <svg className="w-full h-full opacity-20" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice">
                        <defs>
                            <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
                                <stop offset="0%" stopColor="#D97706" stopOpacity="0.4" />
                                <stop offset="100%" stopColor="#D97706" stopOpacity="0" />
                            </radialGradient>
                        </defs>

                        {/* Connection Lines */}
                        <motion.path
                            d="M150,150 L400,200 M400,200 L650,150 M400,200 L400,300 M150,150 L400,300 M650,150 L400,300"
                            stroke="#1E4E9B"
                            strokeWidth="1"
                            fill="none"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: [0.1, 0.4, 0.1] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        />

                        {/* Nodes */}
                        <KnowledgeNode x={150} y={150} label="FHIR R4" />
                        <KnowledgeNode x={650} y={150} label="Odoo 18" />
                        <KnowledgeNode x={400} y={200} label="OpenHIE" />
                        <KnowledgeNode x={400} y={300} label="ASTM/ISO" />
                    </svg>
                </div>

                {/* Blueprint Grid Overlay */}
                <div className="absolute inset-0 opacity-[0.03] z-0" style={{
                    backgroundImage: `
                        linear-gradient(rgba(30, 78, 155, 0.5) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(30, 78, 155, 0.5) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px'
                }} />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <Terminal className="w-6 h-6 text-execution-orange" />
                            <span className="text-sm font-mono text-slate-400 uppercase tracking-[0.3em]">
                                Architectural Intelligence
                            </span>
                        </div>

                        <h1 className="text-5xl sm:text-6xl font-mono font-bold mb-6 leading-tight">
                            Engineering <span className="text-execution-orange">Resources</span> & Architectural Intelligence.
                        </h1>

                        <p className="text-xl text-slate-300 leading-relaxed mb-8 max-w-3xl">
                            Synthesized insights from over a decade of architecting global health infrastructure
                            across four continents. Built for architects, CTOs, and health informatics teams
                            deploying sovereign digital health systems.
                        </p>

                        <div className="flex flex-wrap gap-4 text-sm font-mono">
                            <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded backdrop-blur-sm">
                                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                                <span className="text-blue-300/80">12 Case Studies</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded backdrop-blur-sm">
                                <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
                                <span className="text-orange-300/80">8 Technical Blueprints</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded backdrop-blur-sm">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                <span className="text-green-300/80">6 Compliance Frameworks</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Resource Domains */}
            <section className="py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {resourceDomains.map((domain, index) => {
                            const Icon = domain.icon;
                            return (
                                <motion.div
                                    key={domain.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                >
                                    <Link href={domain.href}>
                                        <div className="group h-full bg-slate-50 border-2 border-slate-200 rounded-lg p-8 hover:border-execution-orange hover:shadow-2xl transition-all duration-300">
                                            {/* Header */}
                                            <div className="flex items-start justify-between mb-6">
                                                <div className="flex items-center gap-4">
                                                    <div className={`w-16 h-16 rounded-lg ${domain.bgColor} border ${domain.borderColor} flex items-center justify-center`}>
                                                        <Icon className={`w-8 h-8 ${domain.color}`} />
                                                    </div>
                                                    <div>
                                                        <span className="block font-mono text-[10px] text-slate-500 group-hover:text-precision-blue transition-colors mb-1">
                                                            {domain.dnaTag}
                                                        </span>
                                                        <h3 className="text-2xl font-mono font-bold text-slate-900 group-hover:text-execution-orange transition-colors">
                                                            {domain.title}
                                                        </h3>
                                                        <p className="text-sm text-slate-500 font-mono">
                                                            {domain.subtitle}
                                                        </p>
                                                    </div>
                                                </div>
                                                <ArrowRight className="w-6 h-6 text-slate-400 group-hover:text-execution-orange group-hover:translate-x-2 transition-all" />
                                            </div>

                                            {/* Description */}
                                            <p className="text-slate-600 leading-relaxed mb-6">
                                                {domain.description}
                                            </p>

                                            {/* Features */}
                                            <div className="space-y-2 mb-6">
                                                {domain.features.map((feature, idx) => (
                                                    <div key={idx} className="flex items-center gap-2">
                                                        <div className={`w-1.5 h-1.5 rounded-full ${domain.color.replace('text-', 'bg-')}`} />
                                                        <span className="text-sm text-slate-700">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Footer */}
                                            <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                                                <div className="flex flex-col">
                                                    <span className="text-[10px] font-mono text-slate-400 uppercase">
                                                        {domain.count}
                                                    </span>
                                                    <span className="text-[9px] font-mono text-precision-blue uppercase mt-0.5">
                                                        UPDATED: {domain.updatedAt}
                                                    </span>
                                                </div>
                                                <span className="text-sm font-mono text-execution-orange group-hover:underline">
                                                    Explore →
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-slate-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
                    <h2 className="text-3xl font-mono font-bold mb-4">
                        Need Custom Technical Documentation?
                    </h2>
                    <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                        Organizations requiring bespoke architecture reviews, FHIR mapping strategies,
                        or compliance audit reports can engage with our senior engineering team.
                    </p>
                    <Link
                        href="/consult"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-execution-orange text-white font-mono font-bold rounded hover:bg-execution-orange/90 transition-all"
                    >
                        <Download className="w-5 h-5" />
                        Request Custom Documentation
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>
        </main>
    );
}
