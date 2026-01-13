import { ExternalLink, Shield, Layers, Zap, Globe } from 'lucide-react'
import Link from 'next/link'

const features = [
    {
        icon: Shield,
        title: 'HL7 FHIR R4 Compliant',
        description: 'Native FHIR resources with OpenHIE-certified interoperability.',
    },
    {
        icon: Layers,
        title: 'Modular Architecture',
        description: 'OpenMRS core with OpenELIS, Odoo, and DHIS2 integrations.',
    },
    {
        icon: Zap,
        title: 'Offline-First Design',
        description: 'Resilient operation in low-connectivity environments.',
    },
    {
        icon: Globe,
        title: 'Nepal MoHP 2081 Ready',
        description: 'Pre-certified compliance with national health directives.',
    },
]

export function NidanEHRSection() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Flagship Product Card */}
                <div className="relative bg-gradient-to-br from-precision-blue to-precision-blue/90 rounded-2xl overflow-hidden shadow-2xl">
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <defs>
                                <pattern id="grid-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
                                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                        </svg>
                    </div>

                    <div className="relative grid lg:grid-cols-2 gap-12 p-8 lg:p-16">
                        {/* Left: Product Info */}
                        <div className="text-white">
                            {/* Version tag */}
                            <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-mono mb-6">
                                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                v3.0.0-stable
                            </span>

                            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                                NidanEHR
                            </h2>

                            <p className="text-2xl text-white/80 mb-6">
                                Our enterprise health <span className="font-bold text-white">OS distribution.</span>
                            </p>

                            <p className="text-white/70 leading-relaxed mb-8">
                                NidanEHR integrates clinical workflows, laboratory systems, imaging, billing, and health analytics into a single, modular platform—designed for diverse healthcare systems from rural clinics to national health programs.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="https://nidanehr.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-execution-orange text-white font-semibold rounded-lg hover:bg-execution-orange/90 transition-colors shadow-lg"
                                >
                                    Visit NidanEHR.com
                                    <ExternalLink className="w-4 h-4" />
                                </Link>
                                <Link
                                    href="/nidanehr"
                                    className="inline-flex items-center px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                                >
                                    View Documentation
                                </Link>
                            </div>
                        </div>

                        {/* Right: Feature Pills */}
                        <div className="flex flex-col justify-center">
                            <div className="grid grid-cols-2 gap-4">
                                {features.map((feature) => (
                                    <div
                                        key={feature.title}
                                        className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:bg-white/15 transition-colors"
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-execution-orange/20 flex items-center justify-center mb-3">
                                            <feature.icon className="w-5 h-5 text-execution-orange" />
                                        </div>
                                        <h3 className="font-semibold text-white mb-1 text-sm">
                                            {feature.title}
                                        </h3>
                                        <p className="text-white/60 text-xs leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Tech Stack Tags */}
                            <div className="mt-6 pt-6 border-t border-white/10">
                                <p className="text-white/50 text-xs uppercase tracking-wider mb-3">
                                    Core Technologies
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {['OpenMRS 3.x', 'OpenELIS', 'Odoo 17', 'DHIS2', 'Docker'].map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 py-1 bg-white/10 text-white/80 text-xs font-mono rounded"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
