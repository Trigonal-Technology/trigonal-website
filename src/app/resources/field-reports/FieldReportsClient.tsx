'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Wifi, WifiOff, Database, Smartphone, CheckCircle, AlertTriangle, Code, Download, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const fieldReports = [
    {
        id: '2024-q4',
        date: 'November 2024',
        location: 'Karnali Province, Nepal',
        title: 'Zero-Connectivity Clinic Deployment',
        challenge: 'Deploying OpenMRS in a remote health post with zero internet connectivity, unreliable power (4-6 hours daily), and no IT staff.',
        solution: 'Deployed Bahmni on a ruggedized mini-PC (Intel NUC) with offline-first architecture. Installed solar panels with battery backup (48V 200Ah). Trained 2 nurses on basic system administration.',
        technicalStack: {
            'Hardware': 'Intel NUC 11 (i5, 16GB RAM, 512GB SSD)',
            'Power': 'Solar 500W + Battery 200Ah',
            'Software': 'Bahmni 0.93 (Ubuntu 20.04)',
            'Backup': 'Daily SQLite dump to USB drive',
            'Sync': 'Monthly manual sync via 4G hotspot'
        },
        outcomes: [
            '120+ patient encounters recorded in first month',
            'Zero system downtime during power outages',
            '2-hour monthly sync window (vs. 24/7 connectivity requirement)',
            'Nurses proficient in basic troubleshooting (restart services, check disk space)'
        ],
        lessonsLearned: [
            'Offline-first is non-negotiable for rural deployments',
            'Train end-users on basic Linux commands (systemctl, df, journalctl)',
            'Always provision 3x expected battery capacity',
            'Use SSD over HDD (lower power consumption, better shock resistance)'
        ],
        status: 'OPERATIONAL',
        connectivity: 'OFFLINE'
    },
    {
        id: '2024-q3',
        date: 'August 2024',
        location: 'Mara Region, Tanzania',
        title: 'Muzima Mobile EMR for Community Health Workers',
        challenge: 'Equipping 50 Community Health Workers (CHWs) with mobile EMR for door-to-door maternal health screenings in rural villages (avg. 20km from nearest clinic).',
        solution: 'Deployed Muzima Android app on budget smartphones (Infinix Smart 7). Configured offline data capture with daily sync when CHWs return to clinic. Integrated with OpenMRS backend.',
        technicalStack: {
            'Mobile App': 'Muzima 3.x (Android)',
            'Backend': 'OpenMRS 2.12 + MySQL 5.7',
            'Hardware': 'Infinix Smart 7 (2GB RAM, 32GB storage)',
            'Sync': 'WiFi sync at clinic (4G hotspot fallback)',
            'Forms': 'Custom OpenMRS HTML forms (maternal health, child immunization)'
        },
        outcomes: [
            '50 CHWs onboarded in 2-day training',
            '1,200+ maternal health screenings in first 3 months',
            '92% data sync success rate (vs. 60% with paper forms)',
            'Reduced data entry errors by 78% (vs. manual transcription)'
        ],
        lessonsLearned: [
            'Budget Android phones work well if app is optimized (minSdkVersion 21)',
            'Offline forms must be simple (max 20 questions per form)',
            'CHWs need refresher training every 3 months',
            'Power banks essential (villages have electricity 2-3 hours daily)'
        ],
        status: 'OPERATIONAL',
        connectivity: 'INTERMITTENT'
    },
    {
        id: '2024-q2',
        date: 'May 2024',
        location: 'Cajamarca, Peru',
        title: 'Intelehealth Telemedicine Kiosks',
        challenge: 'Deploying telemedicine kiosks in 10 rural health centers to connect patients with doctors in Lima (8-hour drive away).',
        solution: 'Installed Intelehealth kiosks (Raspberry Pi 4 + touchscreen + USB medical devices). CHWs conduct preliminary exams; video consultations with remote doctors; prescriptions generated automatically.',
        technicalStack: {
            'Hardware': 'Raspberry Pi 4 (4GB), 10" touchscreen, USB BP monitor, pulse oximeter',
            'Software': 'Intelehealth Android + Node.js backend',
            'Backend': 'OpenMRS 2.x (AWS Lima region)',
            'Video': 'Jitsi Meet (self-hosted)',
            'Connectivity': '4G LTE (Movistar, Claro failover)'
        },
        outcomes: [
            '10 kiosks operational across Cajamarca',
            '450+ remote consultations in first 6 months',
            'Average consultation time: 18 minutes (vs. 3 hours travel + wait)',
            'Patient satisfaction: 89% (survey of 200 patients)'
        ],
        lessonsLearned: [
            'Raspberry Pi 4 sufficient for telemedicine (Pi 3 struggled with video)',
            'Jitsi Meet works better than Zoom in low-bandwidth environments',
            '4G failover essential (single carrier has 30% downtime in rural areas)',
            'CHWs must be trained in basic medical device troubleshooting'
        ],
        status: 'OPERATIONAL',
        connectivity: 'ONLINE'
    },
    {
        id: '2024-q1',
        date: 'February 2024',
        location: 'Mandalay Region, Myanmar',
        title: 'Lab Data Synchronization in Conflict Zones',
        challenge: 'Synchronizing lab results from 5 clinics in conflict-affected areas where internet is frequently shut down by authorities.',
        solution: 'Deployed OpenELIS at each clinic with local PostgreSQL. Developed custom Python sync script that queues lab results locally and syncs via Tor network when connectivity is restored.',
        technicalStack: {
            'Lab Software': 'OpenELIS 2.0',
            'Database': 'PostgreSQL 13 (per clinic)',
            'Sync': 'Custom Python script + Tor Hidden Service',
            'Encryption': 'GPG for result files, SSH tunneling',
            'Queue': 'RabbitMQ (local)',
            'Fallback': 'USB drive courier (weekly)'
        },
        outcomes: [
            'Lab results synced successfully despite 60% internet uptime',
            'Zero patient safety incidents due to missing lab data',
            'Average sync latency: 8 hours (vs. 5 days with courier)',
            'Tor network provided anonymity for health workers'
        ],
        lessonsLearned: [
            'Tor is viable for low-bandwidth health data sync in hostile environments',
            'Queue-based architecture essential (never lose data during outages)',
            'Physical USB courier still needed as ultimate fallback',
            'Encrypt everything (authorities can intercept data at ISP level)'
        ],
        status: 'OPERATIONAL',
        connectivity: 'RESTRICTED'
    },
    {
        id: '2023-q4',
        date: 'October 2023',
        location: 'Sindh Province, Pakistan',
        title: 'Post-Flood Health Data Recovery',
        challenge: 'Recovering health records from 3 clinics that were flooded during 2022 monsoon. Paper records destroyed; servers water-damaged.',
        solution: 'Sent data recovery team with specialized equipment. Recovered 70% of data from damaged hard drives. Reconstructed missing records from patient recall and immunization cards. Migrated to cloud-based OpenMRS (Azure Pakistan).',
        technicalStack: {
            'Recovery': 'Data recovery software (TestDisk, PhotoRec), clean room HDD repair',
            'Migration': 'OpenMRS 2.x on Azure Pakistan',
            'Backup': 'Daily snapshots to Azure Blob Storage (GRS replication)',
            'Disaster Recovery': 'RTO 4 hours, RPO 1 hour',
            'Training': '2-week intensive training for 12 staff on cloud EMR'
        },
        outcomes: [
            '70% of pre-flood data recovered (1.2M patient records)',
            'Remaining 30% reconstructed from alternate sources',
            'All 3 clinics operational on cloud EMR within 6 weeks',
            'Zero data loss in subsequent floods (2023, 2024)'
        ],
        lessonsLearned: [
            'Cloud backup is mandatory for disaster-prone regions',
            'Geographic replication essential (Azure GRS saved us)',
            'Physical media (CDs, USB) also damaged in floods-cloud is safer',
            'Disaster recovery plans must be tested annually (tabletop exercises)'
        ],
        status: 'OPERATIONAL',
        connectivity: 'ONLINE'
    }
];

function ConnectivityBadge({ status }: { status: string }) {
    const configs = {
        'ONLINE': { icon: Wifi, color: 'text-green-400', bgColor: 'bg-green-500/20', borderColor: 'border-green-500/50', label: 'ONLINE' },
        'OFFLINE': { icon: WifiOff, color: 'text-red-400', bgColor: 'bg-red-500/20', borderColor: 'border-red-500/50', label: 'OFFLINE' },
        'INTERMITTENT': { icon: Wifi, color: 'text-yellow-400', bgColor: 'bg-yellow-500/20', borderColor: 'border-yellow-500/50', label: 'INTERMITTENT' },
        'RESTRICTED': { icon: AlertTriangle, color: 'text-orange-400', bgColor: 'bg-orange-500/20', borderColor: 'border-orange-500/50', label: 'RESTRICTED' }
    };
    const config = configs[status as keyof typeof configs];
    const Icon = config.icon;

    return (
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded ${config.bgColor} ${config.borderColor} border text-xs font-mono font-bold ${config.color}`}>
            <Icon className="w-3 h-3" />
            {config.label}
        </div>
    );
}

export function FieldReportsClient() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero */}
            <section className="bg-slate-950 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex items-center gap-3 mb-6">
                        <MapPin className="w-6 h-6 text-execution-orange" />
                        <span className="text-sm font-mono text-slate-400 uppercase tracking-[0.3em]">
                            Field Reports
                        </span>
                    </div>
                    <h1 className="text-5xl font-mono font-bold mb-4">
                        Frontline{' '}
                        <span className="text-execution-orange">Insights</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl">
                        Real-world deployment logs from the field. Challenges, solutions, and lessons learned from implementing health information systems in the world's most difficult environments.
                    </p>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-16">
                <div className="max-w-5xl mx-auto px-4 sm:px-6">
                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2" />

                        {/* Timeline Items */}
                        <div className="space-y-12">
                            {fieldReports.map((report, index) => (
                                <motion.div
                                    key={report.id}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                                        }`}
                                >
                                    {/* Timeline Dot */}
                                    <div className="absolute left-0 md:left-1/2 top-8 w-4 h-4 bg-execution-orange rounded-full border-4 border-white shadow-lg -translate-x-1/2 z-10" />

                                    {/* Content */}
                                    <div className={`${index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'} pl-8 md:pl-0`}>
                                        <div className="bg-slate-50 border-2 border-slate-200 rounded-lg p-6 hover:border-execution-orange transition-all">
                                            {/* Header */}
                                            <div className="mb-4">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <span className="text-sm font-mono text-slate-500">{report.date}</span>
                                                    <ConnectivityBadge status={report.connectivity} />
                                                </div>
                                                <h3 className="text-2xl font-mono font-bold text-slate-900 mb-2">
                                                    {report.title}
                                                </h3>
                                                <div className="flex items-center gap-2 text-sm text-slate-600">
                                                    <MapPin className="w-4 h-4" />
                                                    {report.location}
                                                </div>
                                            </div>

                                            {/* Challenge */}
                                            <div className="mb-4">
                                                <h4 className="text-sm font-mono font-bold text-slate-700 uppercase mb-2">Challenge</h4>
                                                <p className="text-slate-600 text-sm leading-relaxed">{report.challenge}</p>
                                            </div>

                                            {/* Solution */}
                                            <div className="mb-4">
                                                <h4 className="text-sm font-mono font-bold text-slate-700 uppercase mb-2">Solution</h4>
                                                <p className="text-slate-600 text-sm leading-relaxed">{report.solution}</p>
                                            </div>

                                            {/* Technical Stack */}
                                            <div className="mb-4 p-4 bg-white rounded border border-slate-200">
                                                <div className="flex items-center gap-2 mb-3">
                                                    <Code className="w-4 h-4 text-execution-orange" />
                                                    <h4 className="text-sm font-mono font-bold text-slate-900">Technical Stack</h4>
                                                </div>
                                                <div className="space-y-1">
                                                    {Object.entries(report.technicalStack).map(([key, value]) => (
                                                        <div key={key} className="flex gap-2 text-xs">
                                                            <span className="font-mono text-slate-500 min-w-[80px]">{key}:</span>
                                                            <span className="font-mono text-slate-900">{value}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Outcomes */}
                                            <div className="mb-4">
                                                <h4 className="text-sm font-mono font-bold text-slate-700 uppercase mb-2">Outcomes</h4>
                                                <div className="space-y-2">
                                                    {report.outcomes.map((outcome, idx) => (
                                                        <div key={idx} className="flex items-start gap-2">
                                                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                                                            <span className="text-slate-600 text-sm">{outcome}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Lessons Learned */}
                                            <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
                                                <h4 className="text-sm font-mono font-bold text-yellow-900 uppercase mb-2">Lessons Learned</h4>
                                                <ul className="space-y-1">
                                                    {report.lessonsLearned.map((lesson, idx) => (
                                                        <li key={idx} className="flex items-start gap-2">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-yellow-600 flex-shrink-0 mt-1.5" />
                                                            <span className="text-slate-700 text-xs">{lesson}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-slate-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
                    <h2 className="text-3xl font-mono font-bold mb-4">
                        Planning a Rural Deployment?
                    </h2>
                    <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                        Our field engineers provide on-site implementation support, offline-first architecture design, and training for low-resource settings.
                    </p>
                    <Link
                        href="/consult"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-execution-orange text-white font-mono font-bold rounded hover:bg-execution-orange/90 transition-all"
                    >
                        <MapPin className="w-5 h-5" />
                        Request Field Engineering Support
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>
        </main>
    );
}
