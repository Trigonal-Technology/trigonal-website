'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Database, Radio, Server, Brain, Shield, FileText, Lock, CheckCircle, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export function DataPolicyClient() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100">
            {/* Blueprint Grid Background */}
            <div className="fixed inset-0 opacity-[0.08] pointer-events-none" style={{
                backgroundImage: `
                    linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px'
            }} />

            {/* Technical Header */}
            <header className="relative border-b-2 border-execution-orange bg-slate-900/80 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-2 h-2 bg-execution-orange rounded-full animate-pulse" />
                        <span className="text-xs text-slate-500 font-mono uppercase tracking-[0.3em]">
                            TECHNICAL DOCUMENTATION
                        </span>
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl font-mono font-bold text-white leading-tight mb-2">
                        PROTOCOL: DATA_GOVERNANCE_BLUEPRINT_V1.0
                    </h1>
                    
                    <div className="flex flex-wrap items-center gap-6 text-sm font-mono">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-green-500 rounded-sm" />
                            <span className="text-slate-400">STATUS: <span className="text-green-400">ACTIVE</span></span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-blue-500 rounded-sm" />
                            <span className="text-slate-400">VERSION: <span className="text-blue-400">1.0.4</span></span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-purple-500 rounded-sm" />
                            <span className="text-slate-400">LAST_UPDATE: <span className="text-purple-400">2026-01-14</span></span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 pb-32">
                {/* Introduction */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <div className="border-l-4 border-execution-orange pl-6 py-4 bg-slate-900/50 backdrop-blur-sm rounded-r">
                        <h2 className="text-2xl font-mono font-bold text-white mb-3">
                            {'>'} EXECUTIVE_SUMMARY
                        </h2>
                        <p className="text-slate-300 leading-relaxed mb-4">
                            This technical manifest defines the data architecture, sovereignty protocols, and compliance 
                            engineering standards governing Trigonal Technology's digital health infrastructure deployments 
                            across Nepal, India, Middle East, and Africa.
                        </p>
                        <div className="flex items-center gap-2 text-sm text-execution-orange font-mono">
                            <CheckCircle className="w-4 h-4" />
                            <span>ZERO_VENDOR_LOCKIN • SOVEREIGNTY_FIRST • OPEN_STANDARDS</span>
                        </div>
                    </div>
                </motion.section>

                {/* Exploded View: Data Path Schematic */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-1 h-8 bg-precision-blue" />
                        <h2 className="text-3xl font-mono font-bold text-white">
                            DATA_FLOW_ARCHITECTURE
                        </h2>
                    </div>

                    <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-lg p-8">
                        <p className="text-slate-400 font-mono text-sm mb-8 uppercase tracking-wider">
                            Exploded View: Sovereign Data Path
                        </p>

                        {/* SVG Schematic */}
                        <svg viewBox="0 0 1000 400" className="w-full h-auto" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                            <defs>
                                <linearGradient id="dataFlowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" style={{ stopColor: '#3B82F6', stopOpacity: 0.8 }} />
                                    <stop offset="50%" style={{ stopColor: '#D97706', stopOpacity: 0.8 }} />
                                    <stop offset="100%" style={{ stopColor: '#7C3AED', stopOpacity: 0.8 }} />
                                </linearGradient>
                                <filter id="glow">
                                    <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                                    <feMerge>
                                        <feMergeNode in="coloredBlur"/>
                                        <feMergeNode in="SourceGraphic"/>
                                    </feMerge>
                                </filter>
                                
                                {/* Animated dashed line */}
                                <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                                    <polygon points="0 0, 10 3, 0 6" fill="#D97706" />
                                </marker>
                            </defs>

                            {/* Background grid */}
                            <rect x="0" y="0" width="1000" height="400" fill="none" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="1" strokeDasharray="10,10"/>

                            {/* Data Flow Lines */}
                            <motion.path
                                d="M 150 200 L 300 200"
                                stroke="url(#dataFlowGradient)"
                                strokeWidth="3"
                                fill="none"
                                markerEnd="url(#arrowhead)"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            />
                            <motion.path
                                d="M 450 200 L 550 200"
                                stroke="url(#dataFlowGradient)"
                                strokeWidth="3"
                                fill="none"
                                markerEnd="url(#arrowhead)"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.5 }}
                            />
                            <motion.path
                                d="M 700 200 L 850 200"
                                stroke="url(#dataFlowGradient)"
                                strokeWidth="3"
                                fill="none"
                                markerEnd="url(#arrowhead)"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
                            />

                            {/* Node 1: SOURCE (Patient) */}
                            <g>
                                <rect x="30" y="150" width="120" height="100" fill="rgba(59, 130, 246, 0.2)" stroke="#3B82F6" strokeWidth="2" rx="4"/>
                                <circle cx="90" cy="180" r="15" fill="#3B82F6" filter="url(#glow)"/>
                                <text x="90" y="185" textAnchor="middle" fill="white" fontSize="20">👤</text>
                                <text x="90" y="220" textAnchor="middle" fill="#3B82F6" fontSize="14" fontWeight="bold">SOURCE</text>
                                <text x="90" y="238" textAnchor="middle" fill="#94A3B8" fontSize="11">Patient Data</text>
                            </g>

                            {/* Node 2: MEDIATOR (HIE) */}
                            <g>
                                <rect x="300" y="150" width="150" height="100" fill="rgba(217, 119, 6, 0.2)" stroke="#D97706" strokeWidth="2" rx="4"/>
                                <circle cx="375" cy="180" r="15" fill="#D97706" filter="url(#glow)"/>
                                <text x="375" y="185" textAnchor="middle" fill="white" fontSize="18">⚡</text>
                                <text x="375" y="220" textAnchor="middle" fill="#D97706" fontSize="14" fontWeight="bold">MEDIATOR</text>
                                <text x="375" y="238" textAnchor="middle" fill="#94A3B8" fontSize="11">HIE • OpenHIE</text>
                            </g>

                            {/* Node 3: CORE (EMR/ERP) */}
                            <g>
                                <rect x="550" y="150" width="150" height="100" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" strokeWidth="2" rx="4"/>
                                <circle cx="625" cy="180" r="15" fill="#10B981" filter="url(#glow)"/>
                                <text x="625" y="185" textAnchor="middle" fill="white" fontSize="18">🏥</text>
                                <text x="625" y="220" textAnchor="middle" fill="#10B981" fontSize="14" fontWeight="bold">CORE</text>
                                <text x="625" y="238" textAnchor="middle" fill="#94A3B8" fontSize="11">EMR/ERP</text>
                            </g>

                            {/* Node 4: BRAIN (AI) */}
                            <g>
                                <rect x="850" y="150" width="120" height="100" fill="rgba(124, 58, 237, 0.2)" stroke="#7C3AED" strokeWidth="2" rx="4"/>
                                <circle cx="910" cy="180" r="15" fill="#7C3AED" filter="url(#glow)"/>
                                <text x="910" y="185" textAnchor="middle" fill="white" fontSize="18">🧠</text>
                                <text x="910" y="220" textAnchor="middle" fill="#7C3AED" fontSize="14" fontWeight="bold">BRAIN</text>
                                <text x="910" y="238" textAnchor="middle" fill="#94A3B8" fontSize="11">AI Engine</text>
                            </g>

                            {/* Technical Annotations */}
                            <text x="225" y="180" textAnchor="middle" fill="#64748B" fontSize="10">FHIR R4</text>
                            <text x="500" y="180" textAnchor="middle" fill="#64748B" fontSize="10">HL7 v2.x</text>
                            <text x="775" y="180" textAnchor="middle" fill="#64748B" fontSize="10">TensorFlow</text>

                            {/* Security Layer */}
                            <rect x="30" y="280" width="940" height="40" fill="none" stroke="#EF4444" strokeWidth="1" strokeDasharray="4,4" rx="4"/>
                            <text x="500" y="305" textAnchor="middle" fill="#EF4444" fontSize="12" fontWeight="bold">
                                SECURITY_LAYER: AES-256 ENCRYPTION • TLS 1.3 TRANSPORT • RBAC
                            </text>
                        </svg>

                        {/* Technical Specs */}
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
                            {[
                                { label: 'SOURCE', icon: Database, color: '#3B82F6', spec: 'Patient devices, clinical workstations' },
                                { label: 'MEDIATOR', icon: Radio, color: '#D97706', spec: 'OpenHIE HIE, FHIR mediators' },
                                { label: 'CORE', icon: Server, color: '#10B981', spec: 'OpenMRS, Bahmni, Odoo 18' },
                                { label: 'BRAIN', icon: Brain, color: '#7C3AED', spec: 'TensorFlow AI, Metabase ML' }
                            ].map((node, index) => {
                                const Icon = node.icon;
                                return (
                                    <div key={index} className="bg-slate-800/50 border border-slate-700 rounded p-4">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Icon className="w-4 h-4" style={{ color: node.color }} />
                                            <span className="text-xs font-mono font-bold" style={{ color: node.color }}>
                                                {node.label}
                                            </span>
                                        </div>
                                        <p className="text-xs text-slate-400 leading-relaxed">{node.spec}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </motion.section>

                {/* Sovereignty Protocols */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-1 h-8 bg-execution-orange" />
                        <h2 className="text-3xl font-mono font-bold text-white">
                            SOVEREIGNTY_PROTOCOLS
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                title: 'DATA_OWNERSHIP',
                                icon: Shield,
                                color: 'text-blue-400',
                                description: 'All clinical data remains under exclusive control of deploying institution. Trigonal never accesses PHI without explicit audit trail.',
                                protocol: 'ISO 27001 • NIST CSF'
                            },
                            {
                                title: 'ENCRYPTION_STANDARDS',
                                icon: Lock,
                                color: 'text-orange-400',
                                description: 'AES-256-CBC for data at rest. TLS 1.3 for transport. End-to-end encryption for all FHIR resource exchanges.',
                                protocol: 'FIPS 140-2 • AES-256'
                            },
                            {
                                title: 'AUDIT_TRAIL',
                                icon: FileText,
                                color: 'text-green-400',
                                description: 'Every data access logged with timestamp, user ID, action type. Immutable audit logs stored for 7 years minimum.',
                                protocol: 'HIPAA • GDPR Art. 30'
                            },
                            {
                                title: 'INTEROPERABILITY',
                                icon: CheckCircle,
                                color: 'text-purple-400',
                                description: 'HL7 FHIR R4 native. OpenHIE architecture. Zero proprietary formats. Full data portability guaranteed.',
                                protocol: 'FHIR R4 • OpenHIE'
                            }
                        ].map((protocol, index) => {
                            const Icon = protocol.icon;
                            return (
                                <div key={index} className="bg-slate-900/80 border border-slate-700 rounded-lg p-6 hover:border-execution-orange transition-colors">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center">
                                                <Icon className={`w-6 h-6 ${protocol.color}`} />
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-mono font-bold text-white mb-2">
                                                {protocol.title}
                                            </h3>
                                            <p className="text-sm text-slate-400 leading-relaxed mb-3">
                                                {protocol.description}
                                            </p>
                                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-800 rounded text-xs font-mono text-slate-300">
                                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                                                {protocol.protocol}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </motion.section>

                {/* Implementation Matrix */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-1 h-8 bg-purple-500" />
                        <h2 className="text-3xl font-mono font-bold text-white">
                            IMPLEMENTATION_MATRIX
                        </h2>
                    </div>

                    <div className="bg-slate-900/80 border border-slate-700 rounded-lg overflow-hidden">
                        <table className="w-full font-mono text-sm">
                            <thead className="bg-slate-800">
                                <tr>
                                    <th className="text-left p-4 text-slate-300 font-bold uppercase tracking-wider">Component</th>
                                    <th className="text-left p-4 text-slate-300 font-bold uppercase tracking-wider">Technology</th>
                                    <th className="text-left p-4 text-slate-300 font-bold uppercase tracking-wider">Standard</th>
                                    <th className="text-left p-4 text-slate-300 font-bold uppercase tracking-wider">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-700">
                                {[
                                    { component: 'HIE_BACKBONE', tech: 'OpenHIE', standard: 'IHE Profiles', status: 'DEPLOYED' },
                                    { component: 'EMR_CORE', tech: 'OpenMRS / Bahmni', standard: 'HL7 FHIR R4', status: 'DEPLOYED' },
                                    { component: 'ERP_SYNC', tech: 'Odoo 18', standard: 'REST API', status: 'DEPLOYED' },
                                    { component: 'LAB_BRIDGE', tech: 'HL7 v2.x Middleware', standard: 'ASTM 1394', status: 'DEPLOYED' },
                                    { component: 'AI_ENGINE', tech: 'TensorFlow', standard: 'On-Premise', status: 'PILOT' },
                                    { component: 'MOBILE_SYNC', tech: 'Muzima / Intelehealth', standard: 'Offline-First', status: 'DEPLOYED' }
                                ].map((row, index) => (
                                    <tr key={index} className="hover:bg-slate-800/50 transition-colors">
                                        <td className="p-4 text-white font-bold">{row.component}</td>
                                        <td className="p-4 text-slate-300">{row.tech}</td>
                                        <td className="p-4 text-blue-400">{row.standard}</td>
                                        <td className="p-4">
                                            <span className={`inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-bold ${
                                                row.status === 'DEPLOYED' 
                                                    ? 'bg-green-500/20 text-green-400' 
                                                    : 'bg-yellow-500/20 text-yellow-400'
                                            }`}>
                                                <div className={`w-1.5 h-1.5 rounded-full ${
                                                    row.status === 'DEPLOYED' ? 'bg-green-400' : 'bg-yellow-400'
                                                }`} />
                                                {row.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.section>

                {/* Contact CTA */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="border-t border-slate-700 pt-12"
                >
                    <div className="text-center">
                        <h3 className="text-2xl font-mono font-bold text-white mb-4">
                            REQUIRE_TECHNICAL_CONSULTATION?
                        </h3>
                        <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
                            Organizations requiring detailed data governance audits, FHIR architecture reviews, 
                            or custom compliance frameworks can engage with our senior engineering team.
                        </p>
                        <a
                            href="/consult"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-execution-orange text-white font-mono font-bold rounded hover:bg-execution-orange/90 transition-all"
                        >
                            <Shield className="w-5 h-5" />
                            INITIATE_CONSULTATION
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </motion.section>
            </main>

            {/* Persistent Compliance Strip */}
            <div className="fixed bottom-0 left-0 right-0 bg-slate-900 border-t-2 border-execution-orange z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
                    <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono">
                        <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/50 rounded">
                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                            <span className="text-blue-300 font-bold">HL7 FHIR R4</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-orange-500/20 border border-orange-500/50 rounded">
                            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
                            <span className="text-orange-300 font-bold">OPENHIE</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/50 rounded">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                            <span className="text-green-300 font-bold">AES-256</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-500/50 rounded">
                            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                            <span className="text-purple-300 font-bold">NEPAL 2081 COMPLIANT</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
