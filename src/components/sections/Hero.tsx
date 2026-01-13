import Link from 'next/link'
import NetworkMapSVG from '@/components/sections/Hero/NetworkMapSVG'

export function Hero() {
    return (
        <section className="relative bg-blueprint-grid bg-blueprint-gray overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-precision-blue/5 rounded-full blur-3xl" />
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-execution-orange/5 rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                            <span className="text-precision-blue">Architecting</span>{' '}
                            <span className="text-foreground">the Future of</span>
                            <br />
                            <span className="text-execution-orange">Global Health Infrastructure.</span>
                        </h1>

                        <p className="mt-6 text-lg text-foreground/70 max-w-xl">
                            We design interoperable digital health systems used by hospitals, clinics, and public health programs worldwide. AI-Powered. Precision-Built. Health-Engineered.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link href="/nidanehr" className="btn-primary">
                                Explore NidanEHR
                            </Link>
                            <Link href="/architecture" className="btn-secondary">
                                View System Architecture
                            </Link>
                        </div>

                        {/* Trust indicators */}
                        <div className="mt-12 pt-8 border-t border-slate-200">
                            <p className="text-sm text-foreground/50 mb-3 uppercase tracking-wider">
                                Built on global open standards
                            </p>
                            <div className="flex flex-wrap items-center gap-6 text-foreground/60">
                                <span className="font-semibold">Bahmni</span>
                                <span className="font-semibold">OpenMRS</span>
                                <span className="font-semibold">OpenELIS</span>
                                <span className="font-semibold">Odoo</span>
                                <span className="font-semibold">DHIS2</span>
                                <span className="font-mono text-sm">HL7 FHIR</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Network Map SVG */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-precision-blue/10 to-transparent rounded-3xl transform rotate-2 scale-105" />
                        <div className="relative bg-white rounded-2xl p-6 shadow-xl border border-slate-200">
                            <NetworkMapSVG />
                            {/* Caption */}
                            <div className="mt-4 text-center">
                                <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-precision-blue/10 text-precision-blue text-xs font-mono rounded-full">
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                    Interoperable Health Exchange Architecture
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
