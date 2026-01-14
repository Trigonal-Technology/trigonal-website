'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Server, Activity, DollarSign, Brain, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

// Functional Domains
const functionalDomains = [
    {
        id: 'infrastructure',
        title: 'Infrastructure',
        icon: Server,
        color: '#64748B',
        description: 'Docker orchestration, version control, and deployment automation for sovereign health systems.',
        technologies: [
            { name: 'Docker & K8s', purpose: 'Containerized deployment' },
            { name: 'Git/GitHub', purpose: 'Version control & CI/CD' },
            { name: 'PostgreSQL 14', purpose: 'Clinical data persistence' },
            { name: 'Nginx/Caddy', purpose: 'Reverse proxy & TLS termination' }
        ],
        standards: ['Docker Compose', 'Kubernetes', 'OAuth 2.0', 'TLS 1.3']
    },
    {
        id: 'clinical-core',
        title: 'Clinical Core',
        icon: Activity,
        color: '#1E4E9B',
        description: 'OpenMRS and Bahmni customization for longitudinal patient tracking, clinical workflows, and FHIR interoperability.',
        technologies: [
            { name: 'OpenMRS 3.x', purpose: 'Electronic Medical Record' },
            { name: 'Bahmni', purpose: 'Integrated hospital workflows' },
            { name: 'OpenELIS 2.6', purpose: 'Laboratory Information System' },
            { name: 'Orthanc', purpose: 'DICOM imaging server' }
        ],
        standards: ['HL7 FHIR R4', 'DICOM', 'ICD-10', 'LOINC', 'SNOMED CT']
    },
    {
        id: 'fiscal-engine',
        title: 'Fiscal Engine',
        icon: DollarSign,
        color: '#D97706',
        description: 'Odoo ERP integration for hospital billing, inventory management, and financial reconciliation—preventing revenue leakage.',
        technologies: [
            { name: 'Odoo 18', purpose: 'Hospital ERP & billing' },
            { name: 'NidanBridge', purpose: 'Real-time EMR-ERP sync' },
            { name: 'XML-RPC API', purpose: 'Odoo integration protocol' },
            { name: 'RabbitMQ', purpose: 'Async message queuing' }
        ],
        standards: ['XML-RPC', 'REST API', 'FHIR Invoice', 'IHE PIX/PDQ']
    },
    {
        id: 'intelligence-layer',
        title: 'Intelligence Layer',
        icon: Brain,
        color: '#8B5CF6',
        description: 'AI-powered clinical decision support, predictive analytics, and LabBridge for automated lab result validation.',
        technologies: [
            { name: 'LabBridge', purpose: 'Analyzer → LIS middleware' },
            { name: 'ASTM E1381', purpose: 'Lab instrument protocol' },
            { name: 'Python/FastAPI', purpose: 'AI model serving' },
            { name: 'DHIS2', purpose: 'Aggregate surveillance analytics' }
        ],
        standards: ['ASTM E1381-02', 'HL7 v2.x', 'FHIR DiagnosticReport', 'WHO SMART Guidelines']
    }
];

export function ModularEcosystem() {
    const [activeDomain, setActiveDomain] = useState(functionalDomains[0].id);

    const activeDomainData = functionalDomains.find(d => d.id === activeDomain);

    return (
        <section className="relative py-20 md:py-28 bg-slate-50 transition-colors">
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
                        MODULAR_ECOSYSTEM
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        Functional Domains
                    </h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                        Our tech stack organized into four architectural layers—each engineered for interoperability, sovereignty, and real-world clinical deployment.
                    </p>
                </motion.div>

                {/* Domain Selection Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {functionalDomains.map((domain, idx) => {
                        const Icon = domain.icon;
                        const isActive = activeDomain === domain.id;
                        
                        return (
                            <motion.button
                                key={domain.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                onClick={() => setActiveDomain(domain.id)}
                                className={cn(
                                    "flex items-center gap-3 px-6 py-4 rounded-xl border-2 transition-all duration-300",
                                    isActive
                                        ? "bg-white border-precision-blue shadow-lg scale-105"
                                        : "bg-white/50/50 border-slate-200 hover:border-slate-300 hover:shadow-md"
                                )}
                            >
                                <div 
                                    className={cn(
                                        "w-12 h-12 rounded-lg flex items-center justify-center transition-all",
                                        isActive ? "scale-110" : ""
                                    )}
                                    style={{ 
                                        backgroundColor: `${domain.color}20`,
                                        borderColor: isActive ? domain.color : 'transparent',
                                        borderWidth: '2px'
                                    }}
                                >
                                    <Icon 
                                        className="w-6 h-6" 
                                        style={{ color: domain.color }}
                                    />
                                </div>
                                <div className="text-left">
                                    <h3 className="font-mono text-sm font-bold text-slate-900">
                                        {domain.title}
                                    </h3>
                                    <p className="text-xs text-slate-500 mt-0.5">
                                        {domain.technologies.length} Technologies
                                    </p>
                                </div>
                            </motion.button>
                        );
                    })}
                </div>

                {/* Active Domain Details */}
                <AnimatePresence mode="wait">
                    {activeDomainData && (
                        <motion.div
                            key={activeDomainData.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden"
                        >
                            {/* Domain Header */}
                            <div 
                                className="p-8 border-b border-slate-200"
                                style={{
                                    background: `linear-gradient(135deg, ${activeDomainData.color}10 0%, transparent 100%)`
                                }}
                            >
                                <div className="flex items-start gap-4">
                                    <div 
                                        className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0"
                                        style={{ 
                                            backgroundColor: `${activeDomainData.color}20`,
                                            borderColor: activeDomainData.color,
                                            borderWidth: '2px'
                                        }}
                                    >
                                        <activeDomainData.icon 
                                            className="w-8 h-8" 
                                            style={{ color: activeDomainData.color }}
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold font-mono text-slate-900 mb-2">
                                            {activeDomainData.title}
                                        </h3>
                                        <p className="text-slate-600">
                                            {activeDomainData.description}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Technologies Grid */}
                            <div className="p-8">
                                <h4 className="text-sm font-mono uppercase tracking-wider text-slate-500 mb-6">
                                    CORE_TECHNOLOGIES
                                </h4>
                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    {activeDomainData.technologies.map((tech, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.3, delay: idx * 0.05 }}
                                            className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200"
                                        >
                                            <ChevronRight 
                                                className="w-5 h-5 flex-shrink-0 mt-0.5" 
                                                style={{ color: activeDomainData.color }}
                                            />
                                            <div>
                                                <p className="font-mono text-sm font-bold text-slate-900">
                                                    {tech.name}
                                                </p>
                                                <p className="text-xs text-slate-600 mt-1">
                                                    {tech.purpose}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Standards */}
                                <div className="pt-6 border-t border-slate-200">
                                    <h4 className="text-sm font-mono uppercase tracking-wider text-slate-500 mb-4">
                                        COMPLIANCE_STANDARDS
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {activeDomainData.standards.map((standard, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1.5 bg-slate-100 border border-slate-200 rounded-full text-xs font-mono text-slate-700"
                                            >
                                                {standard}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* International Projects Highlight */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-16 p-8 bg-gradient-to-br from-precision-blue/10 to-execution-orange/10 rounded-2xl border border-precision-blue/20"
                >
                    <div className="text-center">
                        <p className="text-sm font-mono uppercase tracking-wider text-precision-blue mb-3">
                            HEALTH_SOLUTION_ARCHITECTS
                        </p>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">
                            International Project Experience
                        </h3>
                        <p className="text-slate-600 max-w-3xl mx-auto mb-6">
                            From architecting multi-tenant SaaS ecosystems for West Africa (LafiaHMS) to customizing Bahmni for sustainable clinical management in South America (Venevital)—we engineer for sovereignty, scale, and real-world deployment.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <div className="px-6 py-3 bg-white rounded-lg border border-slate-200">
                                <p className="font-mono text-sm font-bold text-slate-900">LafiaHMS</p>
                                <p className="text-xs text-slate-600">Nigeria • OpenMRS + Odoo 16</p>
                            </div>
                            <div className="px-6 py-3 bg-white rounded-lg border border-slate-200">
                                <p className="font-mono text-sm font-bold text-slate-900">Venevital</p>
                                <p className="text-xs text-slate-600">Venezuela • Bahmni Customization</p>
                            </div>
                            <div className="px-6 py-3 bg-white rounded-lg border border-slate-200">
                                <p className="font-mono text-sm font-bold text-slate-900">50+ Facilities</p>
                                <p className="text-xs text-slate-600">Nepal • NidanEHR Deployments</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
