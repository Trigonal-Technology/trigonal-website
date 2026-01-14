'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Lock, BadgeCheck, Database, Eye, FileText, ChevronRight, Terminal, Globe, Server, KeyRound, AlertCircle, Brain } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface Section {
    id: string;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
}

const sections: Section[] = [
    { id: 'sovereignty', label: 'Data Sovereignty', icon: Database },
    { id: 'security', label: 'Security Engineering', icon: Lock },
    { id: 'compliance', label: 'Compliance Framework', icon: BadgeCheck },
    { id: 'rights', label: 'User Rights', icon: Shield },
    { id: 'ai-transparency', label: 'AI Transparency', icon: Brain },
];

export function PrivacyPolicyClient() {
    const [activeSection, setActiveSection] = useState('sovereignty');
    const [encryptionToggle, setEncryptionToggle] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    // Track active section based on scroll
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / scrollHeight) * 100;
            setScrollProgress(progress);

            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (element && element.offsetTop <= scrollPosition) {
                    setActiveSection(section.id);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100;
            const elementPosition = element.offsetTop - offset;
            window.scrollTo({ top: elementPosition, behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 relative">
            {/* Blueprint Grid Background */}
            <div className="fixed inset-0 opacity-[0.03] pointer-events-none" style={{
                backgroundImage: `
                    linear-gradient(rgba(30, 78, 155, 0.5) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(30, 78, 155, 0.5) 1px, transparent 1px)
                `,
                backgroundSize: '30px 30px'
            }} />

            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-precision-blue to-execution-orange z-50"
                style={{ scaleX: scrollProgress / 100, transformOrigin: '0%' }}
            />

            {/* Sticky Sidebar - Protocol Index */}
            <aside className="hidden lg:block fixed left-8 top-32 w-64 z-40">
                <div className="bg-white border border-slate-200 rounded-lg shadow-lg p-6">
                    <div className="flex items-center gap-2 mb-6">
                        <Terminal className="w-5 h-5 text-precision-blue" />
                        <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-slate-900">
                            Protocol Index
                        </h3>
                    </div>

                    <nav className="space-y-1">
                        {sections.map((section) => {
                            const Icon = section.icon;
                            const isActive = activeSection === section.id;
                            return (
                                <button
                                    key={section.id}
                                    onClick={() => scrollToSection(section.id)}
                                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-mono transition-all ${isActive
                                            ? 'bg-precision-blue text-white'
                                            : 'text-slate-600 hover:bg-slate-100'
                                        }`}
                                >
                                    <Icon className="w-4 h-4" />
                                    <span className="flex-1 text-left">{section.label}</span>
                                    {isActive && <ChevronRight className="w-3 h-3" />}
                                </button>
                            );
                        })}
                    </nav>

                    {/* Version Badge */}
                    <div className="mt-8 pt-6 border-t border-slate-200">
                        <div className="flex items-center justify-between text-xs font-mono">
                            <span className="text-slate-500">Protocol</span>
                            <span className="text-precision-blue font-bold">v1.0.4</span>
                        </div>
                        <div className="flex items-center justify-between text-xs font-mono mt-2">
                            <span className="text-slate-500">Status</span>
                            <span className="flex items-center gap-1 text-green-600">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                SECURE
                            </span>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="lg:ml-80 lg:mr-8 px-4 sm:px-6 py-16 max-w-4xl">
                {/* Hero: The Sovereignty Manifesto */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <Image
                            src="/logos/trigonal.webp"
                            alt="Trigonal Technology"
                            width={48}
                            height={48}
                            className="rounded-lg"
                        />
                        <div className="flex items-center gap-3">
                            <div className="px-3 py-1 bg-green-100 border border-green-300 rounded text-xs font-mono font-bold text-green-700 flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                SYSTEM STATUS: SECURE
                            </div>
                            <div className="text-xs font-mono text-slate-500">
                                Last Updated: January 14, 2026
                            </div>
                        </div>
                    </div>

                    <h1 className="text-5xl font-bold text-slate-900 mb-4 font-mono leading-tight">
                        Data Sovereignty & Privacy Protocol
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        Architecting the structures that protect global health data.
                    </p>

                    <div className="mt-8 p-6 bg-slate-900 text-slate-100 rounded-lg border border-slate-700">
                        <div className="flex items-start gap-4">
                            <Shield className="w-6 h-6 text-precision-blue mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-white mb-2">
                                    Core Principle
                                </h3>
                                <p className="text-sm leading-relaxed text-slate-300">
                                    Trigonal Technology operates on a <span className="text-execution-orange font-bold">sovereignty-first architecture</span>.
                                    We build the infrastructure-you own the data. Clinical patient information never passes through Trigonal servers,
                                    ensuring complete data sovereignty for health institutions across Nepal, India, Middle East, and Africa.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Section 1: Data Sovereignty */}
                <section id="sovereignty" className="mb-16 scroll-mt-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-precision-blue/10 rounded-lg">
                                <Database className="w-6 h-6 text-precision-blue" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 font-mono">
                                    Data Sovereignty
                                </h2>
                                <p className="text-sm text-slate-500 font-mono">01 • OWNERSHIP & CONTROL</p>
                            </div>
                        </div>

                        <div className="bg-white border border-slate-200 rounded-lg p-8 shadow-sm">
                            <h3 className="text-lg font-bold text-slate-900 mb-4">The Sovereignty-First Model</h3>
                            <div className="space-y-4 text-slate-700 leading-relaxed">
                                <p>
                                    <strong className="text-slate-900">Trigonal never owns your clinical data.</strong> We architect,
                                    deploy, and maintain the digital health infrastructure, but all patient records, clinical events,
                                    and diagnostic data remain under the exclusive ownership and control of the deploying health institution.
                                </p>

                                <div className="pl-6 border-l-4 border-precision-blue bg-blue-50 p-4 rounded-r">
                                    <p className="text-sm font-mono text-slate-800">
                                        <strong>Technical Implementation:</strong> All NidanEHR, OpenMRS, Bahmni, and DHIS2 deployments
                                        are installed on-premise or within client-controlled cloud infrastructure. Trigonal engineers
                                        access systems only via temporary, audited VPN tunnels for maintenance-never for data extraction.
                                    </p>
                                </div>

                                <h4 className="text-md font-bold text-slate-900 mt-6">What We Collect</h4>
                                <ul className="list-disc list-inside space-y-2 text-slate-700">
                                    <li><strong>System Diagnostics:</strong> Server performance metrics, error logs (anonymized), uptime statistics</li>
                                    <li><strong>Usage Analytics:</strong> Feature adoption rates (aggregated, not patient-level)</li>
                                    <li><strong>Contact Information:</strong> Hospital admin emails, support ticket communications</li>
                                </ul>

                                <h4 className="text-md font-bold text-slate-900 mt-6">What We Never Collect</h4>
                                <ul className="list-disc list-inside space-y-2 text-slate-700">
                                    <li>Patient names, identifiers, or demographic data</li>
                                    <li>Clinical diagnoses, prescriptions, or lab results</li>
                                    <li>Financial billing records or insurance claims</li>
                                    <li>Any FHIR resources containing Protected Health Information (PHI)</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Section 2: Security Engineering */}
                <section id="security" className="mb-16 scroll-mt-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-execution-orange/10 rounded-lg">
                                <Lock className="w-6 h-6 text-execution-orange" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 font-mono">
                                    Security Engineering
                                </h2>
                                <p className="text-sm text-slate-500 font-mono">02 • ENCRYPTION & ACCESS</p>
                            </div>
                        </div>

                        <div className="bg-white border border-slate-200 rounded-lg p-8 shadow-sm">
                            <h3 className="text-lg font-bold text-slate-900 mb-4">Cryptographic Standards</h3>

                            {/* Technical Callout Box */}
                            <div className="bg-slate-900 text-slate-100 p-6 rounded-lg mb-6 font-mono text-sm">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <KeyRound className="w-4 h-4 text-execution-orange" />
                                            <span className="text-xs uppercase tracking-wider text-slate-400">At Rest</span>
                                        </div>
                                        <p className="text-white font-bold">AES-256-CBC Encryption</p>
                                        <p className="text-xs text-slate-400 mt-1">Database-level encryption for all PHI</p>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <Globe className="w-4 h-4 text-precision-blue" />
                                            <span className="text-xs uppercase tracking-wider text-slate-400">In Transit</span>
                                        </div>
                                        <p className="text-white font-bold">TLS 1.3 Transport Security</p>
                                        <p className="text-xs text-slate-400 mt-1">All API endpoints enforce HTTPS</p>
                                    </div>
                                </div>
                            </div>

                            {/* Interactive Encryption Toggle */}
                            <div className="border border-slate-300 rounded-lg p-6 bg-slate-50">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-2">
                                        <Server className="w-5 h-5 text-precision-blue" />
                                        <h4 className="text-md font-bold text-slate-900">
                                            Role-Based Access Control (RBAC)
                                        </h4>
                                    </div>
                                    <button
                                        onClick={() => setEncryptionToggle(!encryptionToggle)}
                                        className={`px-4 py-2 rounded-md text-xs font-mono font-bold transition-all ${encryptionToggle
                                                ? 'bg-precision-blue text-white'
                                                : 'bg-slate-200 text-slate-700'
                                            }`}
                                    >
                                        {encryptionToggle ? 'VIEWING SPECS' : 'SHOW SPECS'}
                                    </button>
                                </div>

                                <AnimatePresence>
                                    {encryptionToggle && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pt-4 border-t border-slate-300 space-y-3 text-sm text-slate-700">
                                                <p className="font-mono text-xs bg-white p-3 rounded border border-slate-200">
                                                    <strong className="text-precision-blue">Layer 1: Authentication</strong><br />
                                                    OAuth 2.0 + OpenID Connect for identity verification
                                                </p>
                                                <p className="font-mono text-xs bg-white p-3 rounded border border-slate-200">
                                                    <strong className="text-precision-blue">Layer 2: Authorization</strong><br />
                                                    Granular permissions (Doctor → Full PHI, Nurse → Limited, Billing → Financial Only)
                                                </p>
                                                <p className="font-mono text-xs bg-white p-3 rounded border border-slate-200">
                                                    <strong className="text-precision-blue">Layer 3: Audit Trail</strong><br />
                                                    Every data access logged with timestamp, user ID, and action type (READ/WRITE/DELETE)
                                                </p>
                                                <p className="font-mono text-xs bg-white p-3 rounded border border-slate-200">
                                                    <strong className="text-precision-blue">Layer 4: Session Management</strong><br />
                                                    15-minute inactivity timeout, forced re-authentication for sensitive operations
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Section 3: Compliance Framework */}
                <section id="compliance" className="mb-16 scroll-mt-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-green-100 rounded-lg">
                                <BadgeCheck className="w-6 h-6 text-green-700" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 font-mono">
                                    Compliance Framework
                                </h2>
                                <p className="text-sm text-slate-500 font-mono">03 • STANDARDS & CERTIFICATIONS</p>
                            </div>
                        </div>

                        <div className="bg-white border border-slate-200 rounded-lg p-8 shadow-sm">
                            <h3 className="text-lg font-bold text-slate-900 mb-6">Regulatory Compliance Stack</h3>

                            {/* Compliance Badges */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                                <div className="border-2 border-precision-blue rounded-lg p-6 text-center bg-blue-50">
                                    <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-md">
                                        <Image src="/logos/hl7.png" alt="HL7 FHIR" width={40} height={40} className="object-contain" />
                                    </div>
                                    <h4 className="font-mono font-bold text-sm text-slate-900 mb-1">HL7 FHIR R4</h4>
                                    <p className="text-xs text-slate-600">Interoperability Standard</p>
                                </div>

                                <div className="border-2 border-green-600 rounded-lg p-6 text-center bg-green-50">
                                    <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-md">
                                        <Shield className="w-8 h-8 text-green-700" />
                                    </div>
                                    <h4 className="font-mono font-bold text-sm text-slate-900 mb-1">HIPAA Compliant</h4>
                                    <p className="text-xs text-slate-600">US Health Data Privacy</p>
                                </div>

                                <div className="border-2 border-execution-orange rounded-lg p-6 text-center bg-orange-50">
                                    <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-md">
                                        <FileText className="w-8 h-8 text-execution-orange" />
                                    </div>
                                    <h4 className="font-mono font-bold text-sm text-slate-900 mb-1">Nepal MoHP</h4>
                                    <p className="text-xs text-slate-600">Directive 2081</p>
                                </div>
                            </div>

                            <div className="space-y-4 text-slate-700 leading-relaxed">
                                <h4 className="text-md font-bold text-slate-900">Geographic Compliance</h4>
                                <ul className="list-disc list-inside space-y-2">
                                    <li><strong>Nepal:</strong> Ministry of Health & Population (MoHP) Directive 2081 for EHR interoperability</li>
                                    <li><strong>India:</strong> Digital Information Security in Healthcare Act (DISHA) compliance</li>
                                    <li><strong>Nigeria:</strong> National Health Act 2014 data protection standards</li>
                                    <li><strong>USA:</strong> HIPAA Security Rule (for US-based deployments)</li>
                                    <li><strong>EU:</strong> GDPR compliance for European health institutions</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Section 4: User Rights */}
                <section id="rights" className="mb-16 scroll-mt-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-purple-100 rounded-lg">
                                <Eye className="w-6 h-6 text-purple-700" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 font-mono">
                                    User Rights
                                </h2>
                                <p className="text-sm text-slate-500 font-mono">04 • ACCESS & CONTROL</p>
                            </div>
                        </div>

                        <div className="bg-white border border-slate-200 rounded-lg p-8 shadow-sm">
                            <h3 className="text-lg font-bold text-slate-900 mb-4">Your Data Rights</h3>
                            <div className="space-y-4">
                                {[
                                    {
                                        title: 'Right to Access',
                                        description: 'Request a copy of all diagnostic logs and system metadata we hold about your institution.',
                                        icon: FileText
                                    },
                                    {
                                        title: 'Right to Rectification',
                                        description: 'Correct any inaccurate contact information or organizational details.',
                                        icon: AlertCircle
                                    },
                                    {
                                        title: 'Right to Erasure',
                                        description: 'Request deletion of non-essential logs after contract termination (excludes legally required audit trails).',
                                        icon: Shield
                                    },
                                    {
                                        title: 'Right to Data Portability',
                                        description: 'Export system configurations and integration schemas in FHIR-compliant formats.',
                                        icon: Database
                                    },
                                ].map((right, index) => {
                                    const Icon = right.icon;
                                    return (
                                        <div key={index} className="flex gap-4 p-4 border border-slate-200 rounded-lg hover:border-precision-blue transition-colors">
                                            <div className="flex-shrink-0">
                                                <div className="w-10 h-10 bg-precision-blue/10 rounded-lg flex items-center justify-center">
                                                    <Icon className="w-5 h-5 text-precision-blue" />
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 mb-1">{right.title}</h4>
                                                <p className="text-sm text-slate-600">{right.description}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                                <p className="text-sm text-slate-700">
                                    <strong className="text-precision-blue">Contact for Rights Requests:</strong><br />
                                    Email: <a href="mailto:privacy@trigonal.io" className="text-precision-blue underline">privacy@trigonal.io</a><br />
                                    Response Time: Within 30 days of verified request
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Section 5: AI Transparency - The Digital Brain Disclosure */}
                <section id="ai-transparency" className="mb-16 scroll-mt-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-purple-100 rounded-lg">
                                <Brain className="w-6 h-6 text-purple-700" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 font-mono">
                                    AI Transparency
                                </h2>
                                <p className="text-sm text-slate-500 font-mono">05 • INTELLIGENCE LAYER DISCLOSURE</p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-300 rounded-lg p-8 shadow-lg">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="p-3 bg-purple-700 rounded-lg">
                                    <Brain className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">The Digital Brain: AI/Predictive Analytics</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        Our AI Intelligence Layer (Layer 04 in the Vertical Nervous System) processes clinical data to generate
                                        predictive insights, radiology diagnostics, and outbreak alerts. Here's how we ensure transparency:
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="bg-white rounded-lg p-5 border border-purple-200">
                                    <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                                        <span className="w-6 h-6 bg-purple-700 text-white rounded-full flex items-center justify-center text-xs font-mono">1</span>
                                        On-Premise AI Processing
                                    </h4>
                                    <p className="text-sm text-slate-700">
                                        All AI models (TensorFlow-based CNN for radiology, NLP for claim coding) run <strong>exclusively on your infrastructure</strong>.
                                        No clinical data is transmitted to external AI services or Trigonal cloud servers.
                                    </p>
                                </div>

                                <div className="bg-white rounded-lg p-5 border border-purple-200">
                                    <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                                        <span className="w-6 h-6 bg-purple-700 text-white rounded-full flex items-center justify-center text-xs font-mono">2</span>
                                        Model Training & Data Usage
                                    </h4>
                                    <p className="text-sm text-slate-700">
                                        Pre-trained models are deployed with your system. If custom training is requested, it occurs <strong>only on your anonymized datasets</strong>
                                        under explicit contractual agreement. Trigonal never uses your data to improve models for other clients.
                                    </p>
                                </div>

                                <div className="bg-white rounded-lg p-5 border border-purple-200">
                                    <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                                        <span className="w-6 h-6 bg-purple-700 text-white rounded-full flex items-center justify-center text-xs font-mono">3</span>
                                        Human-in-the-Loop Requirement
                                    </h4>
                                    <p className="text-sm text-slate-700">
                                        AI predictions (e.g., fracture detection at 94% accuracy) are presented as <strong>decision support tools</strong>,
                                        not autonomous diagnostic systems. A licensed clinician must review and approve all AI-generated insights before clinical action.
                                    </p>
                                </div>

                                <div className="bg-white rounded-lg p-5 border border-purple-200">
                                    <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                                        <span className="w-6 h-6 bg-purple-700 text-white rounded-full flex items-center justify-center text-xs font-mono">4</span>
                                        Audit Trail for AI Decisions
                                    </h4>
                                    <p className="text-sm text-slate-700">
                                        Every AI prediction is logged with: input parameters, model version, confidence score, and clinician override status.
                                        This ensures full accountability and regulatory compliance.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-6 p-4 bg-purple-900 text-white rounded-lg">
                                <p className="text-sm">
                                    <strong>Key Guarantee:</strong> Your institution can disable the AI Intelligence Layer at any time without affecting
                                    core EHR functionality. Data sovereignty always supersedes algorithmic enhancement.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* CTA Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <div className="bg-gradient-to-r from-precision-blue to-execution-orange p-[2px] rounded-lg">
                        <div className="bg-white rounded-lg p-10 text-center">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4 font-mono">
                                Need a Data Governance Audit?
                            </h2>
                            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                                Organizations requiring detailed compliance mapping, FHIR security architecture reviews,
                                or custom data governance frameworks can schedule a consultation with our senior engineering team.
                            </p>
                            <Link
                                href="/consult"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-precision-blue text-white font-mono font-bold rounded-lg hover:bg-precision-blue/90 transition-all shadow-lg hover:shadow-xl"
                            >
                                <Shield className="w-5 h-5" />
                                Consult an Architect
                                <ChevronRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </motion.section>

                {/* Footer Metadata */}
                <div className="border-t-2 border-slate-200 pt-8 text-center">
                    <p className="text-xs text-slate-500 font-mono mb-2">
                        Trigonal Technology Pvt. Ltd. • Est. 2019 • Kathmandu, Nepal
                    </p>
                    <p className="text-xs text-slate-400 font-mono">
                        Protocol Version 1.0.4 • Last Updated: January 14, 2026 • Effective: January 1, 2025
                    </p>
                    <p className="text-xs text-slate-400 font-mono mt-4">
                        Questions? Email <a href="mailto:privacy@trigonal.io" className="text-precision-blue underline">privacy@trigonal.io</a>
                    </p>
                </div>
            </main>
        </div>
    );
}
