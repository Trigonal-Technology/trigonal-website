import { MapPin, Briefcase, Award, ChevronRight } from 'lucide-react'
import Link from 'next/link'

export function ArchitectSection() {
    return (
        <section className="py-24 bg-blueprint-gray">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Profile Image Area */}
                    <div className="relative">
                        {/* Professional placeholder silhouette */}
                        <div className="relative w-full max-w-md mx-auto aspect-square bg-gradient-to-br from-precision-blue/20 to-blueprint-line rounded-2xl overflow-hidden">
                            {/* Silhouette */}
                            <div className="absolute inset-0 flex items-end justify-center">
                                <svg
                                    viewBox="0 0 200 200"
                                    className="w-4/5 h-4/5 text-precision-blue/30"
                                    fill="currentColor"
                                >
                                    <path d="M100,40 C70,40 50,65 50,95 C50,125 70,145 100,145 C130,145 150,125 150,95 C150,65 130,40 100,40 Z" />
                                    <path d="M40,200 C40,160 65,140 100,140 C135,140 160,160 160,200 L40,200 Z" />
                                </svg>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute top-4 left-4">
                                <div className="w-16 h-16 border-t-2 border-l-2 border-precision-blue/30 rounded-tl-lg" />
                            </div>
                            <div className="absolute bottom-4 right-4">
                                <div className="w-16 h-16 border-b-2 border-r-2 border-execution-orange/30 rounded-br-lg" />
                            </div>
                        </div>

                        {/* Credential badge */}
                        <div className="absolute -bottom-4 -right-4 lg:right-8 bg-white rounded-lg shadow-lg p-4 border border-blueprint-line">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-precision-blue/10 flex items-center justify-center">
                                    <Award className="w-5 h-5 text-precision-blue" />
                                </div>
                                <div>
                                    <p className="font-semibold text-foreground text-sm">11+ Years</p>
                                    <p className="text-xs text-foreground/60">Healthcare Tech</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Profile Content */}
                    <div>
                        <p className="text-sm font-mono text-execution-orange mb-2 uppercase tracking-wider">
                            Meet the Architect
                        </p>

                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                            Dipak Thapa
                        </h2>

                        <p className="text-xl text-foreground/70 mb-6">
                            Founder & CEO, Trigonal Technology
                        </p>

                        <div className="space-y-4 text-foreground/70">
                            <p>
                                Pioneer in Digital Health implementation across{' '}
                                <span className="font-semibold text-foreground">Nepal, India, Middle East, and Africa</span>.
                            </p>

                            <div className="flex items-start gap-3">
                                <Briefcase className="w-5 h-5 text-precision-blue mt-0.5" />
                                <p>
                                    <span className="font-semibold text-foreground">Expertise in Interoperability:</span>{' '}
                                    Specialized in OpenMRS, Bahmni, Odoo, and DHIS2 integrations.
                                </p>
                            </div>

                            <div className="flex items-start gap-3">
                                <Award className="w-5 h-5 text-execution-orange mt-0.5" />
                                <p>
                                    <span className="font-semibold text-foreground">Compliance Architect:</span>{' '}
                                    &quot;Architecting systems compliant with{' '}
                                    <span className="font-mono text-sm bg-blueprint-line px-1.5 py-0.5 rounded">
                                        Nepal MoHP Directive 2081
                                    </span>&quot;
                                </p>
                            </div>

                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-foreground/50 mt-0.5" />
                                <p className="text-foreground/60">
                                    Based in Kathmandu, deploying globally.
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link href="/company" className="btn-primary">
                                Learn More
                            </Link>
                            <Link href="/consult" className="btn-secondary inline-flex items-center gap-2">
                                Schedule Consultation
                                <ChevronRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
