'use client';

import { motion } from 'framer-motion';
import { Focus, ShieldCheck, Heart, Zap, Users, Award, TrendingUp } from 'lucide-react';

const values = [
    {
        icon: Focus,
        letter: 'F',
        title: 'Focus',
        description: 'Single-minded pursuit of healthcare interoperability',
        metric: 'OpenHIE-First',
        metricDetail: 'All architectures built on global standards',
        example: 'Architecture Decision',
        exampleDetail: 'Every integration uses HL7 FHIR R4 resources, ensuring national health exchanges can consume our data without custom mappings.'
    },
    {
        icon: ShieldCheck,
        letter: 'I',
        title: 'Integrity',
        description: 'Transparent, honest, open-source aligned',
        metric: '100% FOSS',
        metricDetail: 'Zero proprietary vendor lock-in',
        example: 'Code Review Standard',
        exampleDetail: 'All code is version-controlled in Git. No binary blobs, no obfuscation-clients can audit, fork, and self-host every component.'
    },
    {
        icon: Heart,
        letter: 'R',
        title: 'Respect',
        description: 'Inclusive design, accessibility-first',
        metric: 'WCAG 2.1 AA',
        metricDetail: 'Accessible to all healthcare workers',
        example: 'UI/UX Mandate',
        exampleDetail: 'Offline-first design for rural clinics. Keyboard navigation, screen reader support, and multi-language interfaces for diverse healthcare workers.'
    },
    {
        icon: Zap,
        letter: 'E',
        title: 'Execution',
        description: 'Deployed. Running. Trusted.',
        metric: '99.97% Uptime',
        metricDetail: 'Production-grade reliability',
        example: 'Deployment Proof',
        exampleDetail: 'LafiaHMS (Nigeria) and Venevital (Venezuela) run 24/7 with automated backups, monitoring, and zero-downtime updates via Docker orchestration.'
    },
];

const seniorityMetrics = [
    {
        icon: Users,
        value: '12+',
        unit: 'Years',
        label: 'Avg. Seniority',
        description: 'Architect-Led Engineering'
    },
    {
        icon: Award,
        value: '60+',
        unit: 'Years',
        label: 'Combined Experience',
        description: 'Digital Health Expertise'
    },
    {
        icon: TrendingUp,
        value: '50+',
        unit: 'Projects',
        label: 'Deployed Systems',
        description: 'Across 4 continents'
    }
];

export function FireProtocol() {
    return (
        <section className="relative py-24 bg-gradient-to-br from-precision-blue via-precision-blue to-slate-900 text-white overflow-hidden">
            {/* Decorative grid pattern */}
            <div 
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '32px 32px'
                }}
            />

            {/* Glowing orbs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-execution-orange/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
                        <img src="/logos/trigonal.webp" alt="Trigonal" className="w-6 h-6" />
                        <span className="text-sm font-mono uppercase tracking-wider">CULTURAL_FOUNDATION</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                        BUILD with <span className="text-execution-orange">FIRE</span>
                    </h2>
                    <p className="text-white/70 text-lg max-w-2xl mx-auto">
                        Our engineering culture is built on four immutable principles that guide every architectural decision, code review, and client engagement.
                    </p>
                </motion.div>

                {/* Seniority Pulse Banner */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-16 p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl"
                >
                    <div className="text-center mb-6">
                        <p className="text-sm font-mono uppercase tracking-wider text-execution-orange mb-2">
                            SENIORITY_PULSE
                        </p>
                        <h3 className="text-2xl font-bold">
                            Architect-Led Engineering Team
                        </h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {seniorityMetrics.map((metric, idx) => {
                            const Icon = metric.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                                    className="flex flex-col items-center text-center p-6 bg-white/5 rounded-xl border border-white/10"
                                >
                                    <div className="w-14 h-14 rounded-xl bg-execution-orange/20 flex items-center justify-center mb-4">
                                        <Icon className="w-7 h-7 text-execution-orange" />
                                    </div>
                                    <div className="mb-2">
                                        <span className="text-4xl font-bold font-mono">{metric.value}</span>
                                        <span className="text-xl ml-1 text-white/70">{metric.unit}</span>
                                    </div>
                                    <p className="font-bold text-lg mb-1 text-white">{metric.label}</p>
                                    <p className="text-sm text-white/70 font-medium">{metric.description}</p>
                                </motion.div>
                            );
                        })}
                </div>
                </motion.div>

                {/* Culture Grid - FIRE Values */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((value, index) => (
                        <motion.div
                            key={value.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 hover:border-white/30 hover:scale-105 transition-all duration-300"
                        >
                            {/* Large Letter Background */}
                            <div className="absolute top-4 right-4 text-7xl font-bold text-white/5 group-hover:text-white/10 transition-colors font-mono">
                                {value.letter}
                            </div>

                            {/* Icon */}
                            <div className="w-14 h-14 rounded-xl bg-execution-orange/20 flex items-center justify-center mb-4 group-hover:bg-execution-orange/30 transition-colors">
                                <value.icon className="w-7 h-7 text-execution-orange" />
                            </div>

                            {/* Content */}
                            <h3 className="font-bold text-2xl mb-2 relative z-10 font-mono">
                                {value.title}
                            </h3>
                            <p className="text-white/70 text-sm mb-4 relative z-10">
                                {value.description}
                            </p>

                            {/* Metric Badge */}
                            <div className="mt-4 pt-4 border-t border-white/10 space-y-3">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="font-mono text-sm font-bold text-execution-orange">
                                            {value.metric}
                                        </p>
                                        <p className="text-xs text-white/50 mt-0.5">
                                            {value.metricDetail}
                                        </p>
                                    </div>
                                    <span className="font-mono text-xs text-white/30">
                                    0{index + 1}
                                </span>
                                </div>
                                
                                {/* Practical Example */}
                                <div className="pt-3 border-t border-white/5">
                                    <p className="text-[10px] font-mono uppercase tracking-wider text-execution-orange/70 mb-1">
                                        {value.example}
                                    </p>
                                    <p className="text-xs text-white/60 leading-relaxed">
                                        {value.exampleDetail}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Footer tagline */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-block p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                        <p className="text-3xl font-bold font-mono">
                            <span className="text-white">FIRE</span>
                            <span className="text-white/50 mx-2">=</span>
                            <span className="text-execution-orange">Focus + Integrity + Respect + Execution</span>
                        </p>
                        <p className="text-sm text-white/60 mt-3 font-mono">
                            The foundation of every line of code we ship.
                    </p>
                </div>
                </motion.div>
            </div>
        </section>
    );
}
