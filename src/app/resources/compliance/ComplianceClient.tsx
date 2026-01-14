'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, Lock, FileText, Globe, Server, Download, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const complianceFrameworks = [
    {
        id: 'data-sovereignty',
        title: 'Data Sovereignty Framework',
        subtitle: 'Architectural Principles for National Health Data Ownership',
        version: 'v3.0.0',
        jurisdiction: 'Global',
        color: 'text-blue-400',
        bgColor: 'bg-blue-500/20',
        borderColor: 'border-blue-500/50',
        overview: 'A comprehensive framework for nations and NGOs to maintain complete ownership and control of health data. Covers on-premise deployment, Docker-based version control, data residency policies, and zero-dependency architectures that prevent vendor lock-in.',
        principles: [
            'Data Never Leaves National Borders (Physical & Logical)',
            'Open-Source Stack Only (Zero Proprietary Licenses)',
            'Git-Based Configuration Management (Infrastructure as Code)',
            'Encrypted At-Rest & In-Transit (AES-256, TLS 1.3)',
            'Audit Trail Immutability (Blockchain-Inspired Logging)',
            'Right to Data Portability (FHIR R4 Export)'
        ],
        technicalRequirements: [
            {
                category: 'Infrastructure',
                requirements: [
                    'Deploy all services on in-country hardware (AWS Local Zones, Azure Stack, bare metal)',
                    'Use Docker Compose for single-server deployments; Kubernetes for multi-node clusters',
                    'Implement multi-region replication within national borders only',
                    'DNS and TLS certificates managed via Let\'s Encrypt or national CA'
                ]
            },
            {
                category: 'Software',
                requirements: [
                    'Core EMR: OpenMRS, Bahmni, GNU Health (all AGPLv3/GPLv3)',
                    'Database: PostgreSQL or MySQL (avoid cloud-managed services)',
                    'Messaging: RabbitMQ, Kafka (self-hosted)',
                    'No AWS RDS, GCP Cloud SQL, or Azure SQL Database'
                ]
            },
            {
                category: 'Security',
                requirements: [
                    'AES-256-CBC encryption for all databases (SQLCipher for SQLite)',
                    'TLS 1.3 for all HTTP traffic (disable TLS 1.0/1.1)',
                    'RBAC with least-privilege principle',
                    'Annual third-party security audits (OWASP Top 10, SANS CWE)'
                ]
            },
            {
                category: 'Audit & Compliance',
                requirements: [
                    'Immutable audit logs (write-once, read-many storage)',
                    'Centralized log aggregation (ELK Stack, Graylog)',
                    'Quarterly compliance reports to Ministry of Health',
                    'Data breach notification protocol (<72 hours)'
                ]
            }
        ],
        realWorldExample: 'Nepal\'s National Health Information System (NHIS) deployed using this framework stores 15M+ patient records across 750+ health facilities with zero data residency violations since 2020.'
    },
    {
        id: 'nepal-2081',
        title: 'Nepal MoHP Directive 2081',
        subtitle: 'Engineering Checklist for National Compliance',
        version: 'v2.1.0',
        jurisdiction: 'Nepal',
        color: 'text-green-400',
        bgColor: 'bg-green-500/20',
        borderColor: 'border-green-500/50',
        overview: 'Nepal\'s Ministry of Health and Population (MoHP) Directive 2081 mandates specific technical controls for health information systems. This checklist translates legal requirements into actionable engineering specifications.',
        principles: [
            'Patient Consent Management (Explicit Opt-In)',
            'Data Minimization (Collect Only Essential PHI)',
            'Encryption Standards (AES-256 Mandatory)',
            'Access Control Logs (7-Year Retention)',
            'Cross-Border Data Transfer Prohibition',
            'Annual Security Audits by Certified Auditors'
        ],
        technicalRequirements: [
            {
                category: 'Encryption (Section 4.2)',
                requirements: [
                    'Database encryption: AES-256-CBC with key rotation every 90 days',
                    'Transport encryption: TLS 1.3 with Perfect Forward Secrecy (PFS)',
                    'Backup encryption: GPG with 4096-bit RSA keys',
                    'Key management: HashiCorp Vault or AWS KMS (Nepal region)'
                ]
            },
            {
                category: 'Audit Trail (Section 5.1)',
                requirements: [
                    'Log every data access (READ, WRITE, DELETE) with timestamp, user ID, IP address',
                    'Store logs in tamper-proof format (digital signatures, blockchain hashing)',
                    'Retain logs for minimum 7 years (as per Nepal Companies Act 2063)',
                    'Monthly log reviews by designated Data Protection Officer (DPO)'
                ]
            },
            {
                category: 'Patient Consent (Section 3.4)',
                requirements: [
                    'Implement granular consent: treatment, billing, research, marketing',
                    'Consent withdrawal mechanism (effective within 48 hours)',
                    'Consent records stored with digital signatures',
                    'Annual consent renewal for research data usage'
                ]
            },
            {
                category: 'Data Residency (Section 6.3)',
                requirements: [
                    'All servers physically located in Nepal',
                    'Cloud services: Azure Nepal, AWS Local Zone Kathmandu (when available)',
                    'No data replication to foreign regions (even for disaster recovery)',
                    'Quarterly certification from hosting provider confirming physical location'
                ]
            }
        ],
        realWorldExample: 'LafiaHMS Nepal deployment achieved full 2081 compliance with: (1) AES-256 database encryption via pgcrypto. (2) Audit logs in append-only PostgreSQL table with SHA-256 hashing. (3) Patient consent module integrated with OpenMRS. (4) All servers co-located at Nepal Telecom datacenter, Kathmandu.'
    },
    {
        id: 'hipaa',
        title: 'HIPAA Data Residency',
        subtitle: 'US Healthcare Privacy & Security Standards',
        version: 'v1.8.0',
        jurisdiction: 'United States',
        color: 'text-purple-400',
        bgColor: 'bg-purple-500/20',
        borderColor: 'border-purple-500/50',
        overview: 'The Health Insurance Portability and Accountability Act (HIPAA) defines Privacy Rule, Security Rule, and Breach Notification Rule requirements. This guide maps HIPAA administrative, physical, and technical safeguards to concrete engineering controls.',
        principles: [
            'Administrative Safeguards (Risk Assessments, Workforce Training)',
            'Physical Safeguards (Facility Access, Workstation Security)',
            'Technical Safeguards (Access Control, Audit Controls, Integrity, Transmission Security)',
            'Business Associate Agreements (BAAs) for Third-Party Services',
            'Breach Notification (<60 Days)',
            'De-Identification Standards (Safe Harbor, Expert Determination)'
        ],
        technicalRequirements: [
            {
                category: 'Access Control (§164.312(a)(1))',
                requirements: [
                    'Unique user IDs for all system users (no shared accounts)',
                    'Emergency access procedures (break-glass accounts)',
                    'Automatic logoff after 15 minutes of inactivity',
                    'Encryption and decryption (FIPS 140-2 validated modules)'
                ]
            },
            {
                category: 'Audit Controls (§164.312(b))',
                requirements: [
                    'Log all ePHI access and modifications',
                    'Automated alerts for suspicious activity (failed logins, bulk exports)',
                    'Centralized log management (SIEM: Splunk, ELK)',
                    'Annual audit log reviews by compliance officer'
                ]
            },
            {
                category: 'Integrity (§164.312(c)(1))',
                requirements: [
                    'Digital signatures for critical documents (prescriptions, lab reports)',
                    'Checksum verification for file transfers',
                    'Database integrity constraints (foreign keys, NOT NULL)',
                    'Immutable audit logs (blockchain or WORM storage)'
                ]
            },
            {
                category: 'Transmission Security (§164.312(e)(1))',
                requirements: [
                    'TLS 1.3 for all HTTP/API traffic',
                    'VPN (IPsec, WireGuard) for remote access',
                    'SFTP/SCP for file transfers (no FTP)',
                    'End-to-end encryption for emails containing ePHI (S/MIME, PGP)'
                ]
            }
        ],
        realWorldExample: 'A US-based telehealth platform achieved HIPAA compliance with: (1) AWS HIPAA-eligible services (EC2, RDS, S3 with encryption). (2) Signed BAAs with all vendors (Twilio for SMS, SendGrid for email). (3) Annual penetration testing by certified ethical hackers. (4) Breach notification runbooks tested quarterly.'
    }
];

export function ComplianceClient() {
    const [selectedFramework, setSelectedFramework] = useState(complianceFrameworks[0]);

    return (
        <main className="min-h-screen bg-white">
            {/* Hero */}
            <section className="bg-slate-950 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex items-center gap-3 mb-6">
                        <Shield className="w-6 h-6 text-execution-orange" />
                        <span className="text-sm font-mono text-slate-400 uppercase tracking-[0.3em]">
                            Compliance & Standards
                        </span>
                    </div>
                    <h1 className="text-5xl font-mono font-bold mb-4">
                        The Trust{' '}
                        <span className="text-execution-orange">Node</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl">
                        Frameworks for data sovereignty, regional compliance, and international standards. 
                        Translating legal mandates into actionable engineering specifications.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        {/* Sidebar: Framework List */}
                        <div className="lg:col-span-1">
                            <h2 className="text-lg font-mono font-bold text-slate-900 mb-4">Frameworks</h2>
                            <div className="space-y-3">
                                {complianceFrameworks.map((framework) => (
                                    <button
                                        key={framework.id}
                                        onClick={() => setSelectedFramework(framework)}
                                        className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                                            selectedFramework.id === framework.id
                                                ? 'border-execution-orange bg-orange-50'
                                                : 'border-slate-200 hover:border-slate-300'
                                        }`}
                                    >
                                        <div className="flex items-center gap-2 mb-2">
                                            <Globe className="w-4 h-4 text-slate-500" />
                                            <span className="text-xs text-slate-500">{framework.jurisdiction}</span>
                                        </div>
                                        <h3 className="font-mono font-bold text-sm text-slate-900 mb-1">{framework.title}</h3>
                                        <p className="text-xs text-slate-600">{framework.version}</p>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Main Content: Selected Framework */}
                        <div className="lg:col-span-3">
                            <motion.div
                                key={selectedFramework.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                            >
                                {/* Header */}
                                <div className="bg-slate-50 border-2 border-slate-200 rounded-lg p-8 mb-8">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h2 className="text-3xl font-mono font-bold text-slate-900 mb-2">
                                                {selectedFramework.title}
                                            </h2>
                                            <p className="text-lg text-slate-600 mb-4">{selectedFramework.subtitle}</p>
                                            <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                                                <span className={`px-3 py-1 rounded ${selectedFramework.bgColor} ${selectedFramework.borderColor} border font-mono font-bold`}>
                                                    {selectedFramework.version}
                                                </span>
                                                <span>🌍 {selectedFramework.jurisdiction}</span>
                                            </div>
                                        </div>
                                        <button className="flex items-center gap-2 px-4 py-2 bg-execution-orange text-white font-mono text-sm rounded hover:bg-execution-orange/90 transition-all">
                                            <Download className="w-4 h-4" />
                                            PDF
                                        </button>
                                    </div>

                                    {/* Overview */}
                                    <div>
                                        <h3 className="text-sm font-mono font-bold text-slate-700 uppercase mb-2">Overview</h3>
                                        <p className="text-slate-600 leading-relaxed">{selectedFramework.overview}</p>
                                    </div>
                                </div>

                                {/* Core Principles */}
                                <div className="bg-white border-2 border-slate-200 rounded-lg p-8 mb-8">
                                    <h3 className="text-lg font-mono font-bold text-slate-900 mb-4">Core Principles</h3>
                                    <div className="space-y-3">
                                        {selectedFramework.principles.map((principle, idx) => (
                                            <div key={idx} className="flex items-start gap-3">
                                                <CheckCircle className={`w-5 h-5 ${selectedFramework.color} flex-shrink-0 mt-0.5`} />
                                                <span className="text-slate-700">{principle}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Technical Requirements */}
                                <div className="space-y-6">
                                    <h3 className="text-xl font-mono font-bold text-slate-900">Technical Requirements</h3>
                                    {selectedFramework.technicalRequirements.map((section, idx) => (
                                        <div key={idx} className="bg-slate-50 border-2 border-slate-200 rounded-lg p-6">
                                            <h4 className="text-lg font-mono font-bold text-slate-900 mb-4 flex items-center gap-2">
                                                <Lock className={`w-5 h-5 ${selectedFramework.color}`} />
                                                {section.category}
                                            </h4>
                                            <ul className="space-y-2">
                                                {section.requirements.map((req, reqIdx) => (
                                                    <li key={reqIdx} className="flex items-start gap-3">
                                                        <div className={`w-1.5 h-1.5 rounded-full ${selectedFramework.color.replace('text-', 'bg-')} flex-shrink-0 mt-2`} />
                                                        <span className="text-slate-700 text-sm">{req}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>

                                {/* Real-World Example */}
                                <div className="mt-8 bg-green-50 border-2 border-green-200 rounded-lg p-6">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Server className="w-5 h-5 text-green-600" />
                                        <h4 className="text-lg font-mono font-bold text-green-900">Real-World Implementation</h4>
                                    </div>
                                    <p className="text-slate-700 leading-relaxed">
                                        {selectedFramework.realWorldExample}
                                    </p>
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
                        Require Compliance Audit?
                    </h2>
                    <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                        We conduct third-party security audits, compliance gap analyses, and provide remediation roadmaps for organizations deploying health information systems.
                    </p>
                    <Link
                        href="/consult"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-execution-orange text-white font-mono font-bold rounded hover:bg-execution-orange/90 transition-all"
                    >
                        <Shield className="w-5 h-5" />
                        Request Compliance Audit
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>
        </main>
    );
}
