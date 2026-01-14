'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Wrench, Download, Code, Database, Server, GitBranch, FileText, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const whitePapers = [
    {
        id: 'fhir-r4-mapping',
        title: 'FHIR R4 Mapping Protocols',
        subtitle: 'From Fragmented Data to Global Interoperability',
        version: 'v2.1.0',
        published: 'January 2026',
        readTime: '18 min',
        color: 'text-blue-400',
        bgColor: 'bg-blue-500/20',
        borderColor: 'border-blue-500/50',
        abstract: 'A comprehensive technical guide to mapping fragmented clinical data sources to HL7 FHIR R4 resources. Covers Patient, Encounter, Observation, MedicationRequest, and DiagnosticReport resource mappings with real-world examples from OpenMRS, Bahmni, and proprietary EMR systems.',
        keyTopics: [
            'FHIR R4 Resource Structure & Cardinality Rules',
            'Mapping OpenMRS Observations to FHIR Observation Resources',
            'Patient Demographics Synchronization (ADT Events)',
            'CodeableConcept Mapping (ICD-10, LOINC, SNOMED CT)',
            'Provenance & Audit Trail Requirements'
        ],
        technicalDNA: {
            'Standards': 'HL7 FHIR R4 (4.0.1)',
            'Implementation': 'Java (HAPI FHIR), Python (fhir.resources)',
            'Validation': 'FHIR Validator CLI, Touchstone Testing',
            'Security': 'SMART on FHIR OAuth 2.0',
            'Storage': 'MongoDB (FHIR Documents), PostgreSQL (Relational)',
            'Testing': 'Postman Collections, FHIR Crucible'
        },
        sections: [
            {
                title: '1. FHIR Resource Fundamentals',
                content: 'Every FHIR resource follows a predictable structure: resourceType, id, meta (versionId, lastUpdated), and domain-specific elements. The Patient resource, for instance, contains identifiers (NID, MRN), name (HumanName), telecom (ContactPoint), gender, birthDate, and address. Understanding cardinality (0..1, 1..1, 0..*) is critical for valid resource construction.'
            },
            {
                title: '2. OpenMRS → FHIR Observation Mapping',
                content: 'OpenMRS stores clinical data as key-value "observations" (concept_id → value). Mapping this to FHIR Observation requires: (1) Extracting concept_id and mapping to LOINC/SNOMED codes via ConceptMap resources. (2) Converting obs_datetime to effectiveDateTime. (3) Mapping numeric/coded/text values to valueQuantity, valueCodeableConcept, or valueString. (4) Linking to Patient (subject) and Encounter (encounter) references.'
            },
            {
                title: '3. Handling Missing Data & Extensions',
                content: 'Not all local EMR data fits cleanly into FHIR\'s rigid structure. Use Extensions for custom fields (e.g., tribal affiliation, caste). The data-absent-reason extension indicates why a required field is missing. Custom extensions must be registered with a canonical URL and documented in a StructureDefinition.'
            },
            {
                title: '4. Real-World Example: Lab Results',
                content: 'A lab analyzer sends HL7 v2.x ORU^R01 messages. The mediator parses OBX segments, creates FHIR Observation resources (status: final, category: laboratory), maps LOINC codes, and POSTs to the FHIR server. The DiagnosticReport resource bundles multiple Observations and links to the ordering ServiceRequest.'
            }
        ]
    },
    {
        id: 'odoo-healthcare-erp',
        title: 'Odoo 18 for Healthcare Fiscal Integrity',
        subtitle: 'Why Hospital Billing Requires Enterprise ERP',
        version: 'v1.3.0',
        published: 'December 2025',
        readTime: '22 min',
        color: 'text-purple-400',
        bgColor: 'bg-purple-500/20',
        borderColor: 'border-purple-500/50',
        abstract: 'Hospital billing is complex: insurance claims, multi-currency invoicing, inventory tracking, payroll integration. Generic EMR billing modules leak revenue. This white paper demonstrates how Odoo 18\'s accounting, inventory, and HR modules prevent financial hemorrhaging through real-time synchronization with clinical workflows.',
        keyTopics: [
            'Revenue Leakage Prevention in Hospital Billing',
            'OpenMRS → Odoo Billing Synchronization Architecture',
            'Multi-Currency Invoicing for International Patients',
            'Inventory Management: From Pharmacy to OR Consumables',
            'Insurance Claims Automation (NHIF, RSSB, Private)'
        ],
        technicalDNA: {
            'ERP Platform': 'Odoo 18 Community + Custom Modules',
            'Language': 'Python 3.11, JavaScript (Owl Framework)',
            'Database': 'PostgreSQL 15',
            'Integration': 'Odoo XML-RPC API, REST API (FastAPI Middleware)',
            'Accounting': 'Chart of Accounts (CoA) Localization',
            'Reporting': 'Jasper Reports, Odoo Studio Dashboards'
        },
        sections: [
            {
                title: '1. The Revenue Leakage Problem',
                content: 'Studies show hospitals lose 3-7% of revenue due to billing errors: unbilled services, incorrect coding, delayed claims submission, inventory shrinkage. EMR-native billing is reactive (bill after discharge). Odoo enables proactive billing: real-time service capture, automated claim generation, inventory deduction at point-of-use.'
            },
            {
                title: '2. Architecture: Clinical-Financial Sync',
                content: 'Every clinical event (admission, consultation, lab order, medication dispensing) triggers a webhook to Odoo. A FastAPI middleware transforms FHIR Encounter → Odoo Sale Order, FHIR MedicationRequest → Odoo Product (Pharmacy), FHIR ServiceRequest → Odoo Timesheet Entry. The middleware maintains a correlation table (OpenMRS UUID ↔ Odoo ID) in Redis for idempotency.'
            },
            {
                title: '3. Insurance Claims Automation',
                content: 'Odoo\'s "Account Move" model represents invoices. Custom Python code generates insurance claim files (XML/CSV per payer specification). For NHIF (Kenya), we generate standardized claim CSVs with ICD-10 codes, service dates, and provider NPI. The system tracks claim status (Submitted, Approved, Rejected) and automatically posts payments to patient accounts.'
            },
            {
                title: '4. Inventory: Preventing Stock-Outs',
                content: 'Odoo\'s inventory module tracks stock levels in real-time. When a nurse dispenses medication via OpenMRS, the Odoo stock.move record decrements pharmacy inventory. Automatic reorder rules trigger purchase orders when stock falls below minimum thresholds. This eliminated 67% of stock-outs in our Venevital deployment.'
            }
        ]
    },
    {
        id: 'openhie-spine',
        title: 'The OpenHIE Spine',
        subtitle: 'Architecting National Health Information Exchanges',
        version: 'v1.5.0',
        published: 'November 2025',
        readTime: '25 min',
        color: 'text-green-400',
        bgColor: 'bg-green-500/20',
        borderColor: 'border-green-500/50',
        abstract: 'National HIEs require secure, scalable mediators to route data between disparate systems. This blueprint documents OpenHIE architecture patterns: the Interoperability Layer (IL), Client Registry (CR), Shared Health Record (SHR), Terminology Service (TS), and Facility Registry (FR). Includes deployment patterns for low-resource settings.',
        keyTopics: [
            'OpenHIE Reference Architecture (5 Core Components)',
            'OpenHIM Mediator Development (Node.js, Java)',
            'Client Registry: Master Patient Index (MPI) Design',
            'Shared Health Record: Document vs. Message Exchange',
            'Securing HIE Transactions (Mutual TLS, OAuth 2.0)'
        ],
        technicalDNA: {
            'HIE Platform': 'OpenHIM (OpenHIE Interoperability Layer)',
            'Mediators': 'Node.js (TypeScript), Java (Spring Boot)',
            'Client Registry': 'OpenCR (PostgreSQL)',
            'SHR': 'HAPI FHIR Server (MySQL)',
            'Terminology': 'OCL (Open Concept Lab)',
            'Infrastructure': 'Docker Swarm, Kubernetes'
        },
        sections: [
            {
                title: '1. The OpenHIE Vision',
                content: 'OpenHIE defines a service-oriented architecture for national HIEs. Five core components: (1) Interoperability Layer (IL) routes transactions. (2) Client Registry (CR) maintains master patient index. (3) Shared Health Record (SHR) stores longitudinal patient data. (4) Terminology Service (TS) provides standard code sets. (5) Facility Registry (FR) manages health facility metadata.'
            },
            {
                title: '2. OpenHIM: The Central Router',
                content: 'OpenHIM acts as a reverse proxy and transaction logger. It authenticates clients (X.509 certs or OAuth), routes requests to appropriate mediators, logs all transactions (audit trail), and orchestrates multi-step workflows. The web console provides real-time monitoring of message flow, error rates, and performance metrics.'
            },
            {
                title: '3. Building Mediators',
                content: 'Mediators transform and route messages. Example: An ADT mediator receives HL7 v2.x ADT^A01 (patient admission) from a hospital, queries the Client Registry for the patient\'s national ID, transforms to FHIR Patient/Encounter, and POSTs to the SHR. Mediators are stateless, horizontally scalable Node.js or Java services registered with OpenHIM.'
            },
            {
                title: '4. Deployment Patterns',
                content: 'For low-resource settings, we deploy OpenHIE on a 3-node Docker Swarm cluster: (1) OpenHIM + MongoDB, (2) OpenCR + PostgreSQL, (3) HAPI FHIR + MySQL. For high-availability, migrate to Kubernetes with autoscaling, Redis caching, and PostgreSQL replication. Always use mutual TLS for inter-service communication.'
            }
        ]
    }
];

export function BlueprintsClient() {
    const [selectedPaper, setSelectedPaper] = useState(whitePapers[0]);

    return (
        <main className="min-h-screen bg-white">
            {/* Hero */}
            <section className="bg-slate-950 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex items-center gap-3 mb-6">
                        <Wrench className="w-6 h-6 text-execution-orange" />
                        <span className="text-sm font-mono text-slate-400 uppercase tracking-[0.3em]">
                            Technical Blueprints
                        </span>
                    </div>
                    <h1 className="text-5xl font-mono font-bold mb-4">
                        The Sovereign{' '}
                        <span className="text-execution-orange">Library</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl">
                        White papers and technical documentation from 60+ years of combined engineering experience. 
                        No vendor marketing. Only implementation truth.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        {/* Sidebar: White Paper List */}
                        <div className="lg:col-span-1">
                            <h2 className="text-lg font-mono font-bold text-slate-900 mb-4">White Papers</h2>
                            <div className="space-y-3">
                                {whitePapers.map((paper) => (
                                    <button
                                        key={paper.id}
                                        onClick={() => setSelectedPaper(paper)}
                                        className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                                            selectedPaper.id === paper.id
                                                ? 'border-execution-orange bg-orange-50'
                                                : 'border-slate-200 hover:border-slate-300'
                                        }`}
                                    >
                                        <div className="flex items-center gap-2 mb-2">
                                            <FileText className="w-4 h-4 text-slate-500" />
                                            <span className="text-xs text-slate-500">{paper.version}</span>
                                        </div>
                                        <h3 className="font-mono font-bold text-sm text-slate-900 mb-1">{paper.title}</h3>
                                        <p className="text-xs text-slate-600">{paper.readTime} read</p>
                                    </button>
                                ))}
                            </div>

                            {/* Technical DNA Sidebar */}
                            <div className="mt-8 p-4 bg-slate-50 border-2 border-slate-200 rounded-lg">
                                <div className="flex items-center gap-2 mb-3">
                                    <Code className="w-4 h-4 text-execution-orange" />
                                    <h3 className="text-sm font-mono font-bold text-slate-900">Technical DNA</h3>
                                </div>
                                <div className="space-y-2">
                                    {Object.entries(selectedPaper.technicalDNA).map(([key, value]) => (
                                        <div key={key}>
                                            <div className="text-xs font-mono text-slate-500 uppercase">{key}</div>
                                            <div className="text-xs font-mono text-slate-900">{value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Main Content: Selected White Paper */}
                        <div className="lg:col-span-3">
                            <motion.div
                                key={selectedPaper.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                            >
                                {/* Header */}
                                <div className="bg-slate-50 border-2 border-slate-200 rounded-lg p-8 mb-8">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h2 className="text-3xl font-mono font-bold text-slate-900 mb-2">
                                                {selectedPaper.title}
                                            </h2>
                                            <p className="text-lg text-slate-600 mb-4">{selectedPaper.subtitle}</p>
                                            <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                                                <span className={`px-3 py-1 rounded ${selectedPaper.bgColor} ${selectedPaper.borderColor} border font-mono font-bold`}>
                                                    {selectedPaper.version}
                                                </span>
                                                <span>📅 {selectedPaper.published}</span>
                                                <span>⏱️ {selectedPaper.readTime}</span>
                                            </div>
                                        </div>
                                        <button className="flex items-center gap-2 px-4 py-2 bg-execution-orange text-white font-mono text-sm rounded hover:bg-execution-orange/90 transition-all">
                                            <Download className="w-4 h-4" />
                                            PDF
                                        </button>
                                    </div>

                                    {/* Abstract */}
                                    <div>
                                        <h3 className="text-sm font-mono font-bold text-slate-700 uppercase mb-2">Abstract</h3>
                                        <p className="text-slate-600 leading-relaxed">{selectedPaper.abstract}</p>
                                    </div>
                                </div>

                                {/* Key Topics */}
                                <div className="bg-white border-2 border-slate-200 rounded-lg p-8 mb-8">
                                    <h3 className="text-lg font-mono font-bold text-slate-900 mb-4">Key Topics Covered</h3>
                                    <div className="space-y-3">
                                        {selectedPaper.keyTopics.map((topic, idx) => (
                                            <div key={idx} className="flex items-start gap-3">
                                                <div className={`w-6 h-6 rounded flex items-center justify-center ${selectedPaper.bgColor} ${selectedPaper.borderColor} border flex-shrink-0`}>
                                                    <span className="text-xs font-mono font-bold">{idx + 1}</span>
                                                </div>
                                                <span className="text-slate-700">{topic}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Sections */}
                                <div className="space-y-6">
                                    {selectedPaper.sections.map((section, idx) => (
                                        <div key={idx} className="bg-slate-50 border-2 border-slate-200 rounded-lg p-6">
                                            <h4 className="text-lg font-mono font-bold text-slate-900 mb-3">
                                                {section.title}
                                            </h4>
                                            <p className="text-slate-700 leading-relaxed">
                                                {section.content}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                {/* Download CTA */}
                                <div className="mt-8 bg-execution-orange/10 border-2 border-execution-orange rounded-lg p-6 text-center">
                                    <p className="text-slate-700 mb-4">
                                        This is a condensed version. Download the full white paper (45+ pages) for code samples, architecture diagrams, and deployment checklists.
                                    </p>
                                    <button className="inline-flex items-center gap-3 px-6 py-3 bg-execution-orange text-white font-mono font-bold rounded hover:bg-execution-orange/90 transition-all">
                                        <Download className="w-5 h-5" />
                                        Download Full White Paper (PDF)
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
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
                        Need Custom Technical Documentation?
                    </h2>
                    <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                        We provide bespoke white papers, architecture reviews, and integration blueprints tailored to your organization's specific requirements.
                    </p>
                    <Link
                        href="/consult"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-execution-orange text-white font-mono font-bold rounded hover:bg-execution-orange/90 transition-all"
                    >
                        <Wrench className="w-5 h-5" />
                        Request Custom Blueprint
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>
        </main>
    );
}
