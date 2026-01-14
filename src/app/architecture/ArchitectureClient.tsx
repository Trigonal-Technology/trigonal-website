'use client';

import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
    Server,
    Database,
    Zap,
    Shield,
    GitBranch,
    Lock,
    CheckCircle,
    Code,
    ArrowRight,
    Layers,
    Activity,
    DollarSign,
    FileText,
    AlertTriangle,
    Terminal
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { ArchitectureHero } from '@/components/sections/ArchitectureHero';

interface TechStackItem {
    layer: string;
    technologies: string[];
    protocols: string[];
    color: string;
}

const techStack: TechStackItem[] = [
    {
        layer: 'Clinical Layer',
        technologies: ['OpenMRS 3.x', 'Java/Spring Boot', 'Hibernate ORM', 'MySQL 8.0'],
        protocols: ['HL7 FHIR R4', 'REST API', 'OAuth 2.0'],
        color: 'text-precision-blue',
    },
    {
        layer: 'Laboratory Layer',
        technologies: ['OpenELIS 2.6', 'Java/Spring', 'PostgreSQL 14'],
        protocols: ['ASTM E1381-02', 'HL7 v2.x', 'FHIR DiagnosticReport'],
        color: 'text-emerald-500',
    },
    {
        layer: 'ERP/Fiscal Layer',
        technologies: ['Odoo 18', 'Python 3.11', 'PostgreSQL 14', 'Redis'],
        protocols: ['XML-RPC', 'REST API', 'FHIR Invoice'],
        color: 'text-execution-orange',
    },
    {
        layer: 'Interoperability Layer',
        technologies: ['OpenHIE Mediator', 'Node.js', 'MongoDB', 'RabbitMQ'],
        protocols: ['HL7 FHIR R4', 'IHE XDS.b', 'OAuth 2.0 + SMART'],
        color: 'text-purple-500',
    },
    {
        layer: 'Infrastructure Layer',
        technologies: ['Docker 24.x', 'Kubernetes', 'Nginx', 'Let\'s Encrypt'],
        protocols: ['TLS 1.3', 'AES-256-GCM', 'HTTPS'],
        color: 'text-slate-400',
    },
];

export function ArchitectureClient() {
    const [activeLayer, setActiveLayer] = useState<string>('Clinical Layer');
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const explodedViewScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
    const explodedViewY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

    return (
        <div ref={containerRef} className="relative min-h-screen bg-white text-slate-900 font-inter overflow-x-hidden transition-colors">
            {/* === HERO: OPENHIE DATA FLOW VISUALIZATION === */}
            <ArchitectureHero />



        {/* === SECTION: THE INTEROPERABLE SPINE === */ }
        < section className = "relative z-10 py-24 px-4 sm:px-6 lg:px-8 bg-slate-50" >
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 text-sm font-mono uppercase text-precision-blue mb-4 px-4 py-2 bg-white rounded-full border border-slate-200 shadow-sm">
                        <GitBranch className="h-4 w-4" /> Layer 01
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold font-mono text-slate-900 mb-4">
                        The Interoperable Spine
                    </h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                        How clinical data flows from NidanEMR through the HL7 FHIR R4 mapper to a national health registry-architected for zero vendor lock-in.
                    </p>
                </motion.div>

                {/* FHIR Data Flow Diagram (Dark Focal Point) */}
                <div className="relative w-full h-[500px] mb-16 bg-slate-900 rounded-lg border border-slate-700 p-8 shadow-2xl">
                    <svg viewBox="0 0 1200 500" className="w-full h-full">
                        <defs>
                            <marker id="arrowhead-fhir" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                                <polygon points="0 0, 10 3, 0 6" fill="#1E4E9B" />
                            </marker>
                            <filter id="glow-fhir">
                                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>

                        {/* Step 1: NidanEMR */}
                        <g>
                            <rect x="50" y="150" width="200" height="200" rx="8" fill="#1E4E9B" stroke="#3B82F6" strokeWidth="2" />
                            <text x="150" y="220" textAnchor="middle" fill="white" fontSize="18" fontFamily="JetBrains Mono, monospace" fontWeight="bold">
                                NidanEMR
                            </text>
                            <text x="150" y="245" textAnchor="middle" fill="#DBEAFE" fontSize="12" fontFamily="JetBrains Mono, monospace">
                                (OpenMRS 3.x)
                            </text>
                            <text x="150" y="280" textAnchor="middle" fill="#94A3B8" fontSize="11" fontFamily="JetBrains Mono, monospace">
                                Patient: #12345
                            </text>
                            <text x="150" y="300" textAnchor="middle" fill="#94A3B8" fontSize="11" fontFamily="JetBrains Mono, monospace">
                                Encounter: Lab Order
                            </text>
                            <text x="150" y="320" textAnchor="middle" fill="#94A3B8" fontSize="11" fontFamily="JetBrains Mono, monospace">
                                Observation: CBC
                            </text>
                        </g>

                        {/* Arrow 1 */}
                        <motion.line
                            x1="250" y1="250" x2="400" y2="250"
                            stroke="#1E4E9B" strokeWidth="3" markerEnd="url(#arrowhead-fhir)"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 }}
                        />
                        <text x="325" y="240" textAnchor="middle" fill="#1E4E9B" fontSize="10" fontFamily="JetBrains Mono, monospace">
                            REST API Call
                        </text>

                        {/* Step 2: FHIR Mapper */}
                        <g>
                            <rect x="400" y="150" width="200" height="200" rx="8" fill="#10B981" stroke="#34D399" strokeWidth="2" />
                            <text x="500" y="220" textAnchor="middle" fill="white" fontSize="18" fontFamily="JetBrains Mono, monospace" fontWeight="bold">
                                FHIR Mapper
                            </text>
                            <text x="500" y="245" textAnchor="middle" fill="#D1FAE5" fontSize="12" fontFamily="JetBrains Mono, monospace">
                                (OpenHIE Mediator)
                            </text>
                            <text x="500" y="280" textAnchor="middle" fill="#94A3B8" fontSize="11" fontFamily="JetBrains Mono, monospace">
                                Transform:
                            </text>
                            <text x="500" y="300" textAnchor="middle" fill="#94A3B8" fontSize="11" fontFamily="JetBrains Mono, monospace">
                                Patient → FHIR Patient
                            </text>
                            <text x="500" y="320" textAnchor="middle" fill="#94A3B8" fontSize="11" fontFamily="JetBrains Mono, monospace">
                                Obs → DiagnosticReport
                            </text>
                        </g>

                        {/* Arrow 2 */}
                        <motion.line
                            x1="600" y1="250" x2="750" y2="250"
                            stroke="#1E4E9B" strokeWidth="3" markerEnd="url(#arrowhead-fhir)"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 1 }}
                        />
                        <text x="675" y="240" textAnchor="middle" fill="#1E4E9B" fontSize="10" fontFamily="JetBrains Mono, monospace">
                            FHIR R4 Bundle
                        </text>

                        {/* Step 3: HIE Gateway */}
                        <g>
                            <rect x="750" y="150" width="200" height="200" rx="8" fill="#8B5CF6" stroke="#A78BFA" strokeWidth="2" />
                            <text x="850" y="220" textAnchor="middle" fill="white" fontSize="18" fontFamily="JetBrains Mono, monospace" fontWeight="bold">
                                HIE Gateway
                            </text>
                            <text x="850" y="245" textAnchor="middle" fill="#E0E7FF" fontSize="12" fontFamily="JetBrains Mono, monospace">
                                (National Registry)
                            </text>
                            <text x="850" y="280" textAnchor="middle" fill="#94A3B8" fontSize="11" fontFamily="JetBrains Mono, monospace">
                                Store: Bundle
                            </text>
                            <text x="850" y="300" textAnchor="middle" fill="#94A3B8" fontSize="11" fontFamily="JetBrains Mono, monospace">
                                Validate: Schema
                            </text>
                            <text x="850" y="320" textAnchor="middle" fill="#94A3B8" fontSize="11" fontFamily="JetBrains Mono, monospace">
                                Audit: Log Entry
                            </text>
                        </g>

                        {/* Arrow 3 (Response) */}
                        <motion.line
                            x1="950" y1="280" x2="1100" y2="280"
                            stroke="#10B981" strokeWidth="3" markerEnd="url(#arrowhead-fhir)"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 1.5 }}
                        />
                        <text x="1025" y="270" textAnchor="middle" fill="#10B981" fontSize="10" fontFamily="JetBrains Mono, monospace">
                            HTTP 201 Created
                        </text>

                        {/* Step 4: Success Indicator */}
                        <g>
                            <circle cx="1100" cy="250" r="60" fill="#059669" stroke="#10B981" strokeWidth="3" filter="url(#glow-fhir)" />
                            <text x="1100" y="245" textAnchor="middle" fill="white" fontSize="16" fontFamily="JetBrains Mono, monospace" fontWeight="bold">
                                ✓
                            </text>
                            <text x="1100" y="265" textAnchor="middle" fill="#D1FAE5" fontSize="11" fontFamily="JetBrains Mono, monospace">
                                Synced
                            </text>
                        </g>

                        {/* Bottom Protocol Labels */}
                        <text x="150" y="420" textAnchor="middle" fill="#64748B" fontSize="10" fontFamily="JetBrains Mono, monospace">
                            Java/Spring Boot
                        </text>
                        <text x="500" y="420" textAnchor="middle" fill="#64748B" fontSize="10" fontFamily="JetBrains Mono, monospace">
                            Node.js/Express
                        </text>
                        <text x="850" y="420" textAnchor="middle" fill="#64748B" fontSize="10" fontFamily="JetBrains Mono, monospace">
                            HAPI FHIR Server
                        </text>
                    </svg>
                </div>

                {/* Technical DNA Callout (Light Mode) */}
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-md">
                        <div className="flex items-center gap-3 mb-4">
                            <Code className="h-6 w-6 text-precision-blue" />
                            <h3 className="font-mono text-lg font-bold text-slate-900">TECHNICAL_DNA</h3>
                        </div>
                        <ul className="space-y-2 text-sm text-slate-600">
                            <li><strong className="text-slate-900">Runtime:</strong> Java 17 LTS</li>
                            <li><strong className="text-slate-900">Framework:</strong> Spring Boot 3.2</li>
                            <li><strong className="text-slate-900">Mapper:</strong> HAPI FHIR 6.8</li>
                            <li><strong className="text-slate-900">Database:</strong> PostgreSQL 14</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-md">
                        <div className="flex items-center gap-3 mb-4">
                            <Shield className="h-6 w-6 text-emerald-500" />
                            <h3 className="font-mono text-lg font-bold text-slate-900">SECURITY_LAYER</h3>
                        </div>
                        <ul className="space-y-2 text-sm text-slate-600">
                            <li><strong className="text-slate-900">Auth:</strong> OAuth 2.0 + SMART on FHIR</li>
                            <li><strong className="text-slate-900">Transport:</strong> TLS 1.3</li>
                            <li><strong className="text-slate-900">Encryption:</strong> AES-256-GCM</li>
                            <li><strong className="text-slate-900">Audit:</strong> IHE ATNA</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-md">
                        <div className="flex items-center gap-3 mb-4">
                            <CheckCircle className="h-6 w-6 text-execution-orange" />
                            <h3 className="font-mono text-lg font-bold text-slate-900">COMPLIANCE_MAP</h3>
                        </div>
                        <ul className="space-y-2 text-sm text-slate-600">
                            <li><strong className="text-slate-900">Nepal MoHP 2081:</strong> ✓</li>
                            <li><strong className="text-slate-900">HIPAA § 164.312(a)(2)(iv):</strong> ✓</li>
                            <li><strong className="text-slate-900">HL7 FHIR R4:</strong> ✓</li>
                            <li><strong className="text-slate-900">OpenHIE Architecture:</strong> ✓</li>
                        </ul>
                    </div>
                </div>
            </div>
            </section >

        {/* === SECTION: THE FISCAL ENGINE === */ }
        < section className = "relative z-10 py-24 px-4 sm:px-6 lg:px-8 bg-white" >
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 text-sm font-mono uppercase text-execution-orange mb-4 px-4 py-2 bg-slate-50 rounded-full border border-slate-200 shadow-sm">
                        <DollarSign className="h-4 w-4" /> Layer 02
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold font-mono text-slate-900 mb-4">
                        The Fiscal Engine
                    </h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                        The architecture of a transaction: How a lab order in NidanEMR becomes an invoice in Odoo without manual intervention-preventing revenue leakage through real-time synchronization.
                    </p>
                </motion.div>

                {/* Transaction Flow Diagram (Dark Focal Point) */}
                <div className="relative w-full h-[600px] mb-16 bg-slate-900 rounded-lg border border-slate-700 p-8 shadow-2xl">
                    <svg viewBox="0 0 1200 600" className="w-full h-full">
                        <defs>
                            <marker id="arrowhead-odoo" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                                <polygon points="0 0, 10 3, 0 6" fill="#D97706" />
                            </marker>
                        </defs>

                        {/* Step 1: Clinical Order */}
                        <g>
                            <rect x="50" y="50" width="250" height="120" rx="8" fill="#1E4E9B" stroke="#3B82F6" strokeWidth="2" />
                            <text x="175" y="90" textAnchor="middle" fill="white" fontSize="16" fontFamily="JetBrains Mono, monospace" fontWeight="bold">
                                01. CLINICAL ORDER
                            </text>
                            <text x="175" y="115" textAnchor="middle" fill="#DBEAFE" fontSize="11" fontFamily="JetBrains Mono, monospace">
                                Doctor orders CBC test
                            </text>
                            <text x="175" y="135" textAnchor="middle" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono, monospace">
                                Patient: John Doe (#12345)
                            </text>
                            <text x="175" y="155" textAnchor="middle" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono, monospace">
                                Price: NPR 800
                            </text>
                        </g>

                        {/* Arrow 1 */}
                        <motion.line
                            x1="175" y1="170" x2="175" y2="230"
                            stroke="#D97706" strokeWidth="3" markerEnd="url(#arrowhead-odoo)"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        />
                        <text x="200" y="200" fill="#D97706" fontSize="10" fontFamily="JetBrains Mono, monospace">
                            Webhook Trigger
                        </text>

                        {/* Step 2: Sync Engine */}
                        <g>
                            <rect x="50" y="230" width="250" height="120" rx="8" fill="#10B981" stroke="#34D399" strokeWidth="2" />
                            <text x="175" y="270" textAnchor="middle" fill="white" fontSize="16" fontFamily="JetBrains Mono, monospace" fontWeight="bold">
                                02. SYNC ENGINE
                            </text>
                            <text x="175" y="295" textAnchor="middle" fill="#D1FAE5" fontSize="11" fontFamily="JetBrains Mono, monospace">
                                NidanBridge Connector
                            </text>
                            <text x="175" y="315" textAnchor="middle" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono, monospace">
                                Map: Order → Product
                            </text>
                            <text x="175" y="335" textAnchor="middle" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono, monospace">
                                Validate: Price, Patient
                            </text>
                        </g>

                        {/* Arrow 2 */}
                        <motion.line
                            x1="300" y1="290" x2="450" y2="290"
                            stroke="#D97706" strokeWidth="3" markerEnd="url(#arrowhead-odoo)"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        />
                        <text x="375" y="280" textAnchor="middle" fill="#D97706" fontSize="10" fontFamily="JetBrains Mono, monospace">
                            XML-RPC Call
                        </text>

                        {/* Step 3: Odoo Invoice Creation */}
                        <g>
                            <rect x="450" y="230" width="250" height="120" rx="8" fill="#D97706" stroke="#F59E0B" strokeWidth="2" />
                            <text x="575" y="270" textAnchor="middle" fill="white" fontSize="16" fontFamily="JetBrains Mono, monospace" fontWeight="bold">
                                03. ODOO INVOICE
                            </text>
                            <text x="575" y="295" textAnchor="middle" fill="#FEF3C7" fontSize="11" fontFamily="JetBrains Mono, monospace">
                                account.move.create()
                            </text>
                            <text x="575" y="315" textAnchor="middle" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono, monospace">
                                Partner: John Doe
                            </text>
                            <text x="575" y="335" textAnchor="middle" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono, monospace">
                                Line: CBC - NPR 800
                            </text>
                        </g>

                        {/* Arrow 3 */}
                        <motion.line
                            x1="575" y1="350" x2="575" y2="410"
                            stroke="#D97706" strokeWidth="3" markerEnd="url(#arrowhead-odoo)"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 1.3 }}
                        />
                        <text x="600" y="380" fill="#D97706" fontSize="10" fontFamily="JetBrains Mono, monospace">
                            Payment Link
                        </text>

                        {/* Step 4: Patient Payment */}
                        <g>
                            <rect x="450" y="410" width="250" height="120" rx="8" fill="#8B5CF6" stroke="#A78BFA" strokeWidth="2" />
                            <text x="575" y="450" textAnchor="middle" fill="white" fontSize="16" fontFamily="JetBrains Mono, monospace" fontWeight="bold">
                                04. PATIENT PAYMENT
                            </text>
                            <text x="575" y="475" textAnchor="middle" fill="#E0E7FF" fontSize="11" fontFamily="JetBrains Mono, monospace">
                                Cash/eSewa/Khalti
                            </text>
                            <text x="575" y="495" textAnchor="middle" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono, monospace">
                                Amount: NPR 800
                            </text>
                            <text x="575" y="515" textAnchor="middle" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono, monospace">
                                Status: PAID
                            </text>
                        </g>

                        {/* Arrow 4 (Reverse Sync) */}
                        <motion.line
                            x1="450" y1="470" x2="300" y2="470"
                            stroke="#10B981" strokeWidth="3" markerEnd="url(#arrowhead-odoo)"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 1.8 }}
                        />
                        <text x="375" y="460" textAnchor="middle" fill="#10B981" fontSize="10" fontFamily="JetBrains Mono, monospace">
                            Status Update
                        </text>

                        {/* Step 5: Clinical Update */}
                        <g>
                            <rect x="50" y="410" width="250" height="120" rx="8" fill="#059669" stroke="#10B981" strokeWidth="2" />
                            <text x="175" y="450" textAnchor="middle" fill="white" fontSize="16" fontFamily="JetBrains Mono, monospace" fontWeight="bold">
                                05. CLINICAL UPDATE
                            </text>
                            <text x="175" y="475" textAnchor="middle" fill="#D1FAE5" fontSize="11" fontFamily="JetBrains Mono, monospace">
                                Order Status: PAID
                            </text>
                            <text x="175" y="495" textAnchor="middle" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono, monospace">
                                Lab can process sample
                            </text>
                            <text x="175" y="515" textAnchor="middle" fill="#10B981" fontSize="12" fontFamily="JetBrains Mono, monospace" fontWeight="bold">
                                ✓ REVENUE SECURED
                            </text>
                        </g>

                        {/* Bottom: Zero Manual Intervention */}
                        <text x="600" y="580" textAnchor="middle" fill="#059669" fontSize="14" fontFamily="JetBrains Mono, monospace" fontWeight="bold">
                            ⚡ ZERO MANUAL INTERVENTION | REAL-TIME SYNC | ZERO REVENUE LEAKAGE
                        </text>

                        {/* Right Side: Technical Stack */}
                        <g>
                            <rect x="900" y="50" width="250" height="480" rx="8" fill="#0F172A" stroke="#334155" strokeWidth="2" />
                            <text x="1025" y="90" textAnchor="middle" fill="#D97706" fontSize="14" fontFamily="JetBrains Mono, monospace" fontWeight="bold">
                                TECHNICAL_STACK
                            </text>

                            <text x="920" y="130" fill="#64748B" fontSize="11" fontFamily="JetBrains Mono, monospace">
                                NidanEMR:
                            </text>
                            <text x="920" y="150" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono, monospace">
                                • Java 17 LTS
                            </text>
                            <text x="920" y="165" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono, monospace">
                                • Spring Boot 3.2
                            </text>
                            <text x="920" y="180" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono, monospace">
                                • MySQL 8.0
                            </text>

                            <text x="920" y="220" fill="#64748B" fontSize="11" fontFamily="JetBrains Mono, monospace">
                                NidanBridge:
                            </text>
                            <text x="920" y="240" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono, monospace">
                                • Python 3.11
                            </text>
                            <text x="920" y="255" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono, monospace">
                                • FastAPI
                            </text>
                            <text x="920" y="270" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono, monospace">
                                • RabbitMQ
                            </text>

                            <text x="920" y="310" fill="#64748B" fontSize="11" fontFamily="JetBrains Mono, monospace">
                                Odoo ERP:
                            </text>
                            <text x="920" y="330" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono, monospace">
                                • Python 3.11
                            </text>
                            <text x="920" y="345" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono, monospace">
                                • PostgreSQL 14
                            </text>
                            <text x="920" y="360" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono, monospace">
                                • Redis Cache
                            </text>

                            <text x="920" y="400" fill="#64748B" fontSize="11" fontFamily="JetBrains Mono, monospace">
                                Protocols:
                            </text>
                            <text x="920" y="420" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono, monospace">
                                • REST API
                            </text>
                            <text x="920" y="435" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono, monospace">
                                • XML-RPC
                            </text>
                            <text x="920" y="450" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono, monospace">
                                • WebSockets
                            </text>

                            <text x="920" y="490" fill="#10B981" fontSize="10" fontFamily="JetBrains Mono, monospace" fontWeight="bold">
                                Sync Time: &lt;500ms
                            </text>
                            <text x="920" y="510" fill="#10B981" fontSize="10" fontFamily="JetBrains Mono, monospace" fontWeight="bold">
                                Uptime: 99.97%
                            </text>
                        </g>
                    </svg>
                </div>

                {/* Impact Metrics (Light Mode) */}
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-white p-8 rounded-lg border border-emerald-500/30 shadow-lg text-center"
                    >
                        <div className="text-5xl font-bold font-mono text-emerald-500 mb-2">
                            98.4%
                        </div>
                        <div className="text-sm text-slate-700">Revenue Capture Rate</div>
                        <div className="text-xs text-slate-500 mt-2">(vs. 67% manual entry)</div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-white p-8 rounded-lg border border-execution-orange/30 shadow-lg text-center"
                    >
                        <div className="text-5xl font-bold font-mono text-execution-orange mb-2">
                            &lt;2s
                        </div>
                        <div className="text-sm text-slate-700">Order-to-Invoice Latency</div>
                        <div className="text-xs text-slate-500 mt-2">(vs. 45min manual)</div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-white p-8 rounded-lg border border-precision-blue/30 shadow-lg text-center"
                    >
                        <div className="text-5xl font-bold font-mono text-precision-blue mb-2">
                            0
                        </div>
                        <div className="text-sm text-slate-700">Manual Data Entry Steps</div>
                        <div className="text-xs text-slate-500 mt-2">(fully automated pipeline)</div>
                    </motion.div>
                </div>

                {/* Real-World Implementation (Light Mode) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-lg border border-execution-orange shadow-xl"
                >
                    <div className="flex items-start gap-4 mb-6">
                        <div className="flex-shrink-0 w-12 h-12 bg-execution-orange/20 rounded-lg flex items-center justify-center">
                            <Activity className="h-6 w-6 text-execution-orange" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold font-mono text-slate-900 mb-2">Real-World Impact: LafiaHMS (Nigeria)</h3>
                            <p className="text-slate-600">12+ months of production data</p>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-mono text-sm text-execution-orange mb-3">BEFORE (Manual Entry)</h4>
                            <ul className="space-y-2 text-sm text-slate-600">
                                <li>• 67% revenue capture rate</li>
                                <li>• 45min average order-to-invoice time</li>
                                <li>• 23% billing errors (wrong price, duplicate)</li>
                                <li>• 3 FTE required for billing data entry</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-mono text-sm text-emerald-500 mb-3">AFTER (Automated Sync)</h4>
                            <ul className="space-y-2 text-sm text-slate-600">
                                <li>• 98.4% revenue capture rate</li>
                                <li>• &lt;2s average order-to-invoice time</li>
                                <li>• 0.8% billing errors (API validation)</li>
                                <li>• 0 FTE (fully automated)</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
            </section >

        {/* === SECTION: COMPLIANCE INTEGRATION === */ }
        < section className = "relative z-10 py-24 px-4 sm:px-6 lg:px-8 bg-slate-50" >
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 text-sm font-mono uppercase text-emerald-500 mb-4 px-4 py-2 bg-white rounded-full border border-slate-200 shadow-sm">
                        <Shield className="h-4 w-4" /> Compliance Layer
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold font-mono text-slate-900 mb-4">
                        Architected for Compliance
                    </h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                        Every layer of the Trigonal stack explicitly maps to Nepal MoHP Directive 2081 and HIPAA security requirements-sovereignty by design, not by retrofit.
                    </p>
                </motion.div>

                {/* Compliance Mapping Grid (Light Mode) */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {/* Nepal MoHP 2081 */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white p-8 rounded-lg border border-emerald-500/30 shadow-lg"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <img src="/logos/trigonal.webp" className="w-12 h-12" alt="Nepal" />
                            <h3 className="text-2xl font-bold font-mono text-slate-900">Nepal MoHP Directive 2081</h3>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-mono text-sm text-slate-900 mb-1">Section 4.2: Data Encryption</h4>
                                    <p className="text-xs text-slate-600">AES-256-GCM at rest, TLS 1.3 in transit</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-mono text-sm text-slate-900 mb-1">Section 5.1: Audit Trail</h4>
                                    <p className="text-xs text-slate-600">IHE ATNA compliant logging (WHO-R001, R002, R003)</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-mono text-sm text-slate-900 mb-1">Section 6.3: Data Residency</h4>
                                    <p className="text-xs text-slate-600">All PHI stored within Nepal jurisdiction (Docker on-premise)</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-mono text-sm text-slate-900 mb-1">Section 7.2: Interoperability</h4>
                                    <p className="text-xs text-slate-600">HL7 FHIR R4 for national HIE integration</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* HIPAA (Light Mode) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white p-8 rounded-lg border border-precision-blue/30 shadow-lg"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <Lock className="h-12 w-12 text-precision-blue" />
                            <h3 className="text-2xl font-bold font-mono text-slate-900">HIPAA Security Rule</h3>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-precision-blue flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-mono text-sm text-slate-900 mb-1">§ 164.312(a)(2)(iv): Encryption</h4>
                                    <p className="text-xs text-slate-600">AES-256 encryption mechanism (addressable)</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-precision-blue flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-mono text-sm text-slate-900 mb-1">§ 164.308(a)(1)(ii)(D): Risk Analysis</h4>
                                    <p className="text-xs text-slate-600">NIST CSF-based continuous security assessment</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-precision-blue flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-mono text-sm text-slate-900 mb-1">§ 164.312(b): Audit Controls</h4>
                                    <p className="text-xs text-slate-600">Immutable audit log with WORM storage</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-precision-blue flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-mono text-sm text-slate-900 mb-1">§ 164.308(a)(4)(ii)(B): RBAC</h4>
                                    <p className="text-xs text-slate-600">Role-based access via OpenMRS privilege system</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Compliance Architecture Diagram (Light Mode) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white p-8 rounded-lg border border-slate-200 shadow-lg"
                >
                    <h3 className="text-2xl font-bold font-mono text-slate-900 mb-8 text-center">Security Architecture: Defense in Depth</h3>
                    <div className="grid md:grid-cols-4 gap-4">
                        <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                            <div className="flex items-center gap-2 mb-4">
                                <Lock className="h-6 w-6 text-emerald-500" />
                                <h4 className="font-mono text-sm font-bold text-slate-900">Transport Layer</h4>
                            </div>
                            <ul className="space-y-2 text-xs text-slate-600">
                                <li>• TLS 1.3 (mandatory)</li>
                                <li>• Let\'s Encrypt certificates</li>
                                <li>• HSTS enabled</li>
                                <li>• Perfect Forward Secrecy</li>
                            </ul>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                            <div className="flex items-center gap-2 mb-4">
                                <Shield className="h-6 w-6 text-precision-blue" />
                                <h4 className="font-mono text-sm font-bold text-slate-900">Application Layer</h4>
                            </div>
                            <ul className="space-y-2 text-xs text-slate-600">
                                <li>• OAuth 2.0 + SMART on FHIR</li>
                                <li>• RBAC (Doctor, Nurse, Admin)</li>
                                <li>• Session timeout: 15min</li>
                                <li>• XSS/CSRF protection</li>
                            </ul>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                            <div className="flex items-center gap-2 mb-4">
                                <Database className="h-6 w-6 text-execution-orange" />
                                <h4 className="font-mono text-sm font-bold text-slate-900">Data Layer</h4>
                            </div>
                            <ul className="space-y-2 text-xs text-slate-600">
                                <li>• AES-256-GCM at rest</li>
                                <li>• Encrypted backups (7yr)</li>
                                <li>• Field-level encryption</li>
                                <li>• Key rotation: 90 days</li>
                            </ul>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                            <div className="flex items-center gap-2 mb-4">
                                <Activity className="h-6 w-6 text-purple-500" />
                                <h4 className="font-mono text-sm font-bold text-slate-900">Audit Layer</h4>
                            </div>
                            <ul className="space-y-2 text-xs text-slate-600">
                                <li>• IHE ATNA compliant</li>
                                <li>• Immutable WORM logs</li>
                                <li>• Real-time SIEM alerts</li>
                                <li>• Retention: 7 years</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>

                {/* CTA (Light Mode) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mt-16"
                >
                    <h3 className="text-2xl font-bold font-mono text-slate-900 mb-4">Need a Custom Compliance Audit?</h3>
                    <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
                        Engage with our senior architects for detailed security architecture reviews, penetration testing, or compliance gap analysis.
                    </p>
                    <a
                        href="/consult"
                        className="btn-primary text-lg group focus:outline-none focus:ring-2 focus:ring-precision-blue focus:ring-offset-2 focus:ring-offset-white"
                    >
                        <span className="flex items-center gap-2">
                            Schedule Architecture Consultation <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </a>
                </motion.div>
            </div>
            </section >
        </div >
    );
}
