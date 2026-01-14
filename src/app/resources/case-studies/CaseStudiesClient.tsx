'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Database, Server, Zap, Users, Globe, ArrowRight, CheckCircle, Code } from 'lucide-react';
import Link from 'next/link';

const caseStudies = [
    {
        id: 'lafiahms',
        title: 'LafiaHMS',
        location: 'Nigeria',
        subtitle: 'Multi-Tenant SaaS for West African Healthcare',
        year: '2022-2024',
        status: 'DEPLOYED',
        color: 'text-green-400',
        bgColor: 'bg-green-500/20',
        borderColor: 'border-green-500/50',
        challenge: 'Architecting a scalable, multi-tenant SaaS ecosystem capable of serving 50+ hospitals across Nigeria with strict data sovereignty requirements.',
        solution: 'Integrated OpenMRS 2.x as the clinical EMR, OpenELIS 2.0 for laboratory management, and Odoo 16 for billing/inventory. Implemented tenant isolation at the PostgreSQL level with Docker-based deployment.',
        impact: [
            '50+ hospitals onboarded across Lagos, Abuja, and Port Harcourt',
            '2.5M+ patient records managed with <10ms query latency',
            '99.8% uptime achieved with Kubernetes orchestration',
            'Zero data sovereignty violations (all data stored in Lagos datacenter)'
        ],
        stack: {
            'EMR Core': 'OpenMRS 2.12.x',
            'Laboratory': 'OpenELIS 2.0',
            'ERP/Billing': 'Odoo 16 (Python 3.10)',
            'Database': 'PostgreSQL 14 (Multi-Tenant Schema)',
            'Infrastructure': 'Docker + Kubernetes on Azure Nigeria',
            'Integration': 'HL7 v2.x + FHIR R4 Mediators',
            'Security': 'AES-256-CBC + TLS 1.3'
        },
        diagram: 'lafiahms'
    },
    {
        id: 'venevital',
        title: 'Venevital',
        location: 'Venezuela',
        subtitle: 'Sustainable Clinical Management with Bahmni',
        year: '2023-Present',
        status: 'DEPLOYED',
        color: 'text-blue-400',
        bgColor: 'bg-blue-500/20',
        borderColor: 'border-blue-500/50',
        challenge: 'Deploying a robust, offline-capable EMR system in Venezuela\'s challenging infrastructure environment with frequent power outages and limited internet connectivity.',
        solution: 'Customized Bahmni (OpenMRS + Odoo + OpenERP) with offline-first architecture. Implemented Progressive Web App (PWA) for mobile clinicians and automatic data synchronization when connectivity is restored.',
        impact: [
            '15 clinics operational in Caracas and Maracaibo',
            '120K+ patient encounters recorded',
            'Offline-first architecture maintains 100% uptime during outages',
            'Reduced medication stock-outs by 67% through Odoo inventory sync'
        ],
        stack: {
            'EMR Core': 'Bahmni 0.93 (OpenMRS 2.x)',
            'ERP/Inventory': 'Odoo 14 (Customized)',
            'PACS': 'DCM4CHEE 5.x',
            'Database': 'PostgreSQL 13 + MySQL 5.7',
            'Infrastructure': 'On-Premise Servers + AWS Backup',
            'Offline Sync': 'Service Workers + IndexedDB',
            'Security': 'RBAC + AES-256 Encryption'
        },
        diagram: 'venevital'
    }
];

// Exploded View Diagrams
function LafiaHMSDiagram() {
    return (
        <svg viewBox="0 0 900 500" className="w-full h-full" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            <defs>
                <linearGradient id="lafiahmsFlow" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#10B981', stopOpacity: 0.8 }} />
                    <stop offset="100%" style={{ stopColor: '#3B82F6', stopOpacity: 0.8 }} />
                </linearGradient>
                <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>

            {/* Background Grid */}
            <rect x="0" y="0" width="900" height="500" fill="none" stroke="rgba(16, 185, 129, 0.1)" strokeWidth="1" strokeDasharray="10,10"/>

            {/* Tenant Layer */}
            <rect x="50" y="50" width="800" height="400" fill="rgba(16, 185, 129, 0.05)" stroke="#10B981" strokeWidth="2" strokeDasharray="5,5" rx="8"/>
            <text x="450" y="35" textAnchor="middle" fill="#10B981" fontSize="14" fontWeight="bold">MULTI-TENANT ARCHITECTURE</text>

            {/* OpenMRS Node */}
            <g>
                <rect x="100" y="150" width="150" height="120" fill="rgba(59, 130, 246, 0.2)" stroke="#3B82F6" strokeWidth="2" rx="4"/>
                <circle cx="175" cy="190" r="20" fill="#3B82F6" filter="url(#glow)"/>
                <text x="175" y="195" textAnchor="middle" fill="white" fontSize="20">🏥</text>
                <text x="175" y="230" textAnchor="middle" fill="#3B82F6" fontSize="14" fontWeight="bold">OpenMRS 2.x</text>
                <text x="175" y="250" textAnchor="middle" fill="#94A3B8" fontSize="11">Clinical EMR</text>
            </g>

            {/* OpenELIS Node */}
            <g>
                <rect x="300" y="150" width="150" height="120" fill="rgba(217, 119, 6, 0.2)" stroke="#D97706" strokeWidth="2" rx="4"/>
                <circle cx="375" cy="190" r="20" fill="#D97706" filter="url(#glow)"/>
                <text x="375" y="195" textAnchor="middle" fill="white" fontSize="20">🔬</text>
                <text x="375" y="230" textAnchor="middle" fill="#D97706" fontSize="14" fontWeight="bold">OpenELIS 2.0</text>
                <text x="375" y="250" textAnchor="middle" fill="#94A3B8" fontSize="11">Laboratory</text>
            </g>

            {/* Odoo Node */}
            <g>
                <rect x="500" y="150" width="150" height="120" fill="rgba(124, 58, 237, 0.2)" stroke="#7C3AED" strokeWidth="2" rx="4"/>
                <circle cx="575" cy="190" r="20" fill="#7C3AED" filter="url(#glow)"/>
                <text x="575" y="195" textAnchor="middle" fill="white" fontSize="20">💰</text>
                <text x="575" y="230" textAnchor="middle" fill="#7C3AED" fontSize="14" fontWeight="bold">Odoo 16</text>
                <text x="575" y="250" textAnchor="middle" fill="#94A3B8" fontSize="11">ERP/Billing</text>
            </g>

            {/* PostgreSQL Database */}
            <g>
                <rect x="700" y="150" width="150" height="120" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" strokeWidth="2" rx="4"/>
                <circle cx="775" cy="190" r="20" fill="#10B981" filter="url(#glow)"/>
                <text x="775" y="195" textAnchor="middle" fill="white" fontSize="20">🗄️</text>
                <text x="775" y="230" textAnchor="middle" fill="#10B981" fontSize="14" fontWeight="bold">PostgreSQL 14</text>
                <text x="775" y="250" textAnchor="middle" fill="#94A3B8" fontSize="11">Multi-Tenant DB</text>
            </g>

            {/* Data Flow Lines */}
            <motion.path
                d="M 250 210 L 300 210"
                stroke="url(#lafiahmsFlow)"
                strokeWidth="3"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <motion.path
                d="M 450 210 L 500 210"
                stroke="url(#lafiahmsFlow)"
                strokeWidth="3"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.5 }}
            />
            <motion.path
                d="M 650 210 L 700 210"
                stroke="url(#lafiahmsFlow)"
                strokeWidth="3"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
            />

            {/* HL7 FHIR Integration Layer */}
            <rect x="100" y="320" width="750" height="60" fill="none" stroke="#EF4444" strokeWidth="1" strokeDasharray="4,4" rx="4"/>
            <text x="475" y="355" textAnchor="middle" fill="#EF4444" fontSize="12" fontWeight="bold">
                INTEGRATION LAYER: HL7 v2.x + FHIR R4 MEDIATORS
            </text>

            {/* Kubernetes Orchestration */}
            <text x="450" y="430" textAnchor="middle" fill="#64748B" fontSize="11">
                Kubernetes Orchestration • Docker Containers • Azure Nigeria Region
            </text>
        </svg>
    );
}

function VenevitalDiagram() {
    return (
        <svg viewBox="0 0 900 500" className="w-full h-full" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            <defs>
                <linearGradient id="venevitalFlow" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#3B82F6', stopOpacity: 0.8 }} />
                    <stop offset="100%" style={{ stopColor: '#8B5CF6', stopOpacity: 0.8 }} />
                </linearGradient>
                <filter id="glowVene">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>

            {/* Background */}
            <rect x="0" y="0" width="900" height="500" fill="none" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="1" strokeDasharray="10,10"/>

            {/* Offline-First Layer */}
            <rect x="50" y="50" width="800" height="400" fill="rgba(59, 130, 246, 0.05)" stroke="#3B82F6" strokeWidth="2" strokeDasharray="5,5" rx="8"/>
            <text x="450" y="35" textAnchor="middle" fill="#3B82F6" fontSize="14" fontWeight="bold">OFFLINE-FIRST ARCHITECTURE</text>

            {/* Bahmni Core */}
            <g>
                <rect x="150" y="150" width="180" height="120" fill="rgba(59, 130, 246, 0.2)" stroke="#3B82F6" strokeWidth="2" rx="4"/>
                <circle cx="240" cy="190" r="20" fill="#3B82F6" filter="url(#glowVene)"/>
                <text x="240" y="195" textAnchor="middle" fill="white" fontSize="20">🏥</text>
                <text x="240" y="230" textAnchor="middle" fill="#3B82F6" fontSize="14" fontWeight="bold">Bahmni 0.93</text>
                <text x="240" y="250" textAnchor="middle" fill="#94A3B8" fontSize="11">OpenMRS + Odoo</text>
            </g>

            {/* DCM4CHEE PACS */}
            <g>
                <rect x="380" y="150" width="180" height="120" fill="rgba(217, 119, 6, 0.2)" stroke="#D97706" strokeWidth="2" rx="4"/>
                <circle cx="470" cy="190" r="20" fill="#D97706" filter="url(#glowVene)"/>
                <text x="470" y="195" textAnchor="middle" fill="white" fontSize="20">📸</text>
                <text x="470" y="230" textAnchor="middle" fill="#D97706" fontSize="14" fontWeight="bold">DCM4CHEE 5.x</text>
                <text x="470" y="250" textAnchor="middle" fill="#94A3B8" fontSize="11">PACS/Imaging</text>
            </g>

            {/* PWA Layer */}
            <g>
                <rect x="610" y="150" width="180" height="120" fill="rgba(124, 58, 237, 0.2)" stroke="#7C3AED" strokeWidth="2" rx="4"/>
                <circle cx="700" cy="190" r="20" fill="#7C3AED" filter="url(#glowVene)"/>
                <text x="700" y="195" textAnchor="middle" fill="white" fontSize="20">📱</text>
                <text x="700" y="230" textAnchor="middle" fill="#7C3AED" fontSize="14" fontWeight="bold">PWA Client</text>
                <text x="700" y="250" textAnchor="middle" fill="#94A3B8" fontSize="11">Offline Sync</text>
            </g>

            {/* Data Flow */}
            <motion.path
                d="M 330 210 L 380 210"
                stroke="url(#venevitalFlow)"
                strokeWidth="3"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <motion.path
                d="M 560 210 L 610 210"
                stroke="url(#venevitalFlow)"
                strokeWidth="3"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.5 }}
            />

            {/* Offline Sync Layer */}
            <rect x="150" y="320" width="640" height="60" fill="none" stroke="#10B981" strokeWidth="1" strokeDasharray="4,4" rx="4"/>
            <text x="470" y="355" textAnchor="middle" fill="#10B981" fontSize="12" fontWeight="bold">
                OFFLINE SYNC: Service Workers + IndexedDB + Background Sync API
            </text>

            {/* Infrastructure */}
            <text x="450" y="430" textAnchor="middle" fill="#64748B" fontSize="11">
                On-Premise Servers • AWS S3 Backup (Colombia Region) • PostgreSQL + MySQL
            </text>
        </svg>
    );
}

export function CaseStudiesClient() {
    const [selectedStudy, setSelectedStudy] = useState(caseStudies[0]);

    return (
        <main className="min-h-screen bg-white">
            {/* Hero */}
            <section className="bg-slate-950 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex items-center gap-3 mb-6">
                        <FileText className="w-6 h-6 text-execution-orange" />
                        <span className="text-sm font-mono text-slate-400 uppercase tracking-[0.3em]">
                            Case Studies
                        </span>
                    </div>
                    <h1 className="text-5xl font-mono font-bold mb-4">
                        Architectural{' '}
                        <span className="text-execution-orange">Post-Mortems</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl">
                        Deep-dive technical analyses of our flagship implementations. Real projects, real challenges, real solutions.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        {/* Sidebar: Case Study List */}
                        <div className="lg:col-span-1">
                            <h2 className="text-lg font-mono font-bold text-slate-900 mb-4">Projects</h2>
                            <div className="space-y-3">
                                {caseStudies.map((study) => (
                                    <button
                                        key={study.id}
                                        onClick={() => setSelectedStudy(study)}
                                        className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                                            selectedStudy.id === study.id
                                                ? 'border-execution-orange bg-orange-50'
                                                : 'border-slate-200 hover:border-slate-300'
                                        }`}
                                    >
                                        <div className="flex items-center gap-2 mb-2">
                                            <Globe className="w-4 h-4 text-slate-500" />
                                            <span className="text-xs text-slate-500">{study.location}</span>
                                        </div>
                                        <h3 className="font-mono font-bold text-slate-900">{study.title}</h3>
                                        <p className="text-xs text-slate-600 mt-1">{study.year}</p>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Main Content: Selected Case Study */}
                        <div className="lg:col-span-3">
                            <motion.div
                                key={selectedStudy.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                            >
                                {/* Header */}
                                <div className="bg-slate-50 border-2 border-slate-200 rounded-lg p-8 mb-8">
                                    <div className="flex items-start justify-between mb-6">
                                        <div>
                                            <div className="flex items-center gap-3 mb-2">
                                                <h2 className="text-3xl font-mono font-bold text-slate-900">
                                                    {selectedStudy.title}
                                                </h2>
                                                <span className={`px-3 py-1 rounded text-xs font-mono font-bold ${selectedStudy.bgColor} ${selectedStudy.borderColor} border`}>
                                                    {selectedStudy.status}
                                                </span>
                                            </div>
                                            <p className="text-lg text-slate-600 mb-2">{selectedStudy.subtitle}</p>
                                            <div className="flex items-center gap-4 text-sm text-slate-500">
                                                <span>📍 {selectedStudy.location}</span>
                                                <span>📅 {selectedStudy.year}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Challenge */}
                                    <div className="mb-6">
                                        <h3 className="text-sm font-mono font-bold text-slate-700 uppercase mb-2">The Challenge</h3>
                                        <p className="text-slate-600 leading-relaxed">{selectedStudy.challenge}</p>
                                    </div>

                                    {/* Solution */}
                                    <div>
                                        <h3 className="text-sm font-mono font-bold text-slate-700 uppercase mb-2">The Solution</h3>
                                        <p className="text-slate-600 leading-relaxed">{selectedStudy.solution}</p>
                                    </div>
                                </div>

                                {/* Exploded View Diagram */}
                                <div className="bg-slate-900 rounded-lg p-8 mb-8">
                                    <h3 className="text-lg font-mono font-bold text-white mb-4">Exploded View: System Architecture</h3>
                                    <div className="bg-slate-800 rounded-lg p-6">
                                        {selectedStudy.diagram === 'lafiahms' ? <LafiaHMSDiagram /> : <VenevitalDiagram />}
                                    </div>
                                </div>

                                {/* Technical DNA */}
                                <div className="bg-slate-50 border-2 border-slate-200 rounded-lg p-8 mb-8">
                                    <div className="flex items-center gap-2 mb-6">
                                        <Code className="w-5 h-5 text-execution-orange" />
                                        <h3 className="text-lg font-mono font-bold text-slate-900">Technical DNA</h3>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {Object.entries(selectedStudy.stack).map(([key, value]) => (
                                            <div key={key} className="bg-white p-4 rounded border border-slate-200">
                                                <div className="text-xs font-mono text-slate-500 uppercase mb-1">{key}</div>
                                                <div className="text-sm font-mono font-bold text-slate-900">{value}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Impact */}
                                <div className="bg-green-50 border-2 border-green-200 rounded-lg p-8">
                                    <h3 className="text-lg font-mono font-bold text-green-900 mb-6">Measured Impact</h3>
                                    <div className="space-y-3">
                                        {selectedStudy.impact.map((item, idx) => (
                                            <div key={idx} className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                                <span className="text-slate-700">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-slate-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
                    <h2 className="text-3xl font-mono font-bold mb-4">
                        Need a Similar Implementation?
                    </h2>
                    <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                        Consult with our architects to design a custom health information system for your organization.
                    </p>
                    <Link
                        href="/consult"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-execution-orange text-white font-mono font-bold rounded hover:bg-execution-orange/90 transition-all"
                    >
                        <Users className="w-5 h-5" />
                        Book Architecture Consultation
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>
        </main>
    );
}
