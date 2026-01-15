'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Server, Activity, DollarSign, Smartphone, Shield, CheckCircle2 } from 'lucide-react';

// Architectural Layers: Tools mapped to their architectural purposes
const techBuckets = [
    {
        id: 'infrastructure',
        title: 'Infrastructure',
        icon: Server,
        color: '#64748B',
        technologies: [
            { archRole: 'Orchestration', name: 'Docker & K8s', purpose: 'Container orchestration & scaling' },
            { archRole: 'Version Control', name: 'Git/GitHub', purpose: 'Source integrity & CI/CD pipelines' },
            { archRole: 'Gateway', name: 'Nginx/Caddy', purpose: 'Reverse proxy & TLS termination' },
            { archRole: 'Persistence', name: 'PostgreSQL 14', purpose: 'Sovereign clinical data storage' }
        ],
        compliance: ['HIPAA', 'NEPAL_2081', 'ISO_27001']
    },
    {
        id: 'clinical-lis',
        title: 'Clinical & LIS',
        icon: Activity,
        color: '#1E4E9B',
        technologies: [
            { archRole: 'Clinical Core', name: 'NidanEHR', purpose: 'Patient longitudinal records & workflows' },
            { archRole: 'Lab System', name: 'OpenELIS', purpose: 'Laboratory Information System & LIMS' },
            { archRole: 'Middleware', name: 'LabBridge', purpose: 'Analyzer → LIS real-time bridge' },
            { archRole: 'Imaging', name: 'Orthanc', purpose: 'DICOM-compliant PACS server' }
        ],
        compliance: ['HL7_FHIR_R4', 'DICOM', 'LOINC']
    },
    {
        id: 'fiscal-intelligence',
        title: 'Fiscal & Intelligence',
        icon: DollarSign,
        color: '#D97706',
        technologies: [
            { archRole: 'Fiscal Engine', name: 'Odoo 18', purpose: 'Hospital ERP & revenue management' },
            { archRole: 'Insurance', name: 'OpenIMIS', purpose: 'Claims & beneficiary registry' },
            { archRole: 'Surveillance', name: 'DHIS2', purpose: 'Public health aggregate analytics' },
            { archRole: 'Intelligence', name: 'Radiology AI', purpose: 'Predictive diagnostic support' }
        ],
        compliance: ['HL7_FHIR', 'IHE_PIX', 'WHO_SMART']
    },
    {
        id: 'frontline-outreach',
        title: 'Frontline Outreach',
        icon: Smartphone,
        color: '#10B981',
        technologies: [
            { archRole: 'Mobile Health', name: 'Muzima', purpose: 'Offline-first Android data collection' },
            { archRole: 'Community CHW', name: 'Intelehealth', purpose: 'Rural health worker mobile workflows' },
            { archRole: 'Sync Engine', name: 'OpenMRS Sync', purpose: 'Bidirectional offline sync protocol' },
            { archRole: 'Forms', name: 'ODK / KoboToolbox', purpose: 'Field data capture & surveys' }
        ],
        compliance: ['OpenMRS', 'HL7_V2', 'Offline_First']
    }
];

// Shared compliance standards
const universalCompliance = [
    { badge: 'HIPAA', description: 'Health Insurance Portability and Accountability Act' },
    { badge: 'NEPAL_2081', description: 'Nepal Ministry of Health Directive 2081' },
    { badge: 'HL7_FHIR_R4', description: 'Fast Healthcare Interoperability Resources Release 4' }
];

export function SovereignTechStack() {
    return (
        <section className="relative py-20 md:py-28 bg-white transition-colors">
            {/* Blueprint Grid Background */}
            <div 
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(226, 232, 240, 0.3) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(226, 232, 240, 0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: '24px 24px'
                }}
            />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-sm font-mono uppercase tracking-wider text-precision-blue mb-4">
                        SOVEREIGN_TECH_STACK
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        Architected for Sovereignty
                    </h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                        Our integrated technology stack is engineered for data sovereignty, zero vendor lock-in, and compliance-first deployment across diverse health ecosystems.
                    </p>
                </motion.div>

                {/* Tech Buckets Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {techBuckets.map((bucket, idx) => {
                        const Icon = bucket.icon;
                        return (
                            <motion.div
                                key={bucket.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="group relative bg-white rounded-2xl border border-slate-200 p-8 hover:border-precision-blue transition-all duration-300 hover:shadow-xl"
                            >
                                {/* Icon Header */}
                                <div className="flex items-center gap-4 mb-6">
                                    <div 
                                        className="w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
                                        style={{ 
                                            backgroundColor: `${bucket.color}20`,
                                            borderColor: bucket.color,
                                            borderWidth: '2px'
                                        }}
                                    >
                                        <Icon 
                                            className="w-7 h-7" 
                                            style={{ color: bucket.color }}
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold font-mono text-slate-900">
                                        {bucket.title}
                                    </h3>
                                </div>

                                {/* Architectural Mapping */}
                                <div className="space-y-4 mb-6">
                                    {bucket.technologies.map((tech, techIdx) => (
                                        <div key={techIdx} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200">
                                            <CheckCircle2 
                                                className="w-4 h-4 flex-shrink-0 mt-0.5" 
                                                style={{ color: bucket.color }}
                                            />
                                            <div className="flex-1">
                                                <p className="text-[10px] font-mono uppercase tracking-wider text-slate-500 mb-1">
                                                    {tech.archRole}
                                                </p>
                                                <p className="font-mono text-sm font-bold text-slate-900 mb-0.5">
                                                    {tech.name}
                                                </p>
                                                <p className="text-xs text-slate-600 leading-relaxed">
                                                    {tech.purpose}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Compliance Strip */}
                                <div className="pt-6 border-t border-slate-200">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Shield className="w-4 h-4 text-slate-500" />
                                        <p className="text-xs font-mono uppercase tracking-wider text-slate-500">
                                            Compliance
                                        </p>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {bucket.compliance.map((standard, stdIdx) => (
                                            <span
                                                key={stdIdx}
                                                className="px-2 py-1 bg-slate-100 border border-slate-200 rounded text-[10px] font-mono text-slate-700 tracking-tight"
                                            >
                                                {standard}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Universal Compliance Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-gradient-to-r from-precision-blue/10 to-execution-orange/10 rounded-2xl border border-precision-blue/30 p-8"
                >
                    <div className="text-center mb-6">
                        <h3 className="text-lg font-bold font-mono text-slate-900 mb-2">
                            Engineering Proof: Compliance by Design
                        </h3>
                        <p className="text-sm text-slate-600">
                            Every component in our stack is architected to meet international and national health data standards
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {universalCompliance.map((item, idx) => (
                            <div
                                key={idx}
                                className="flex items-center gap-3 p-4 bg-white rounded-lg border border-slate-200"
                            >
                                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                                <div>
                                    <p className="font-mono text-sm font-bold text-slate-900">
                                        {item.badge}
                                    </p>
                                    <p className="text-xs text-slate-600 mt-0.5">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
