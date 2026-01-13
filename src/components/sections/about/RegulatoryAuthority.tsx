'use client'

import { Shield, Globe } from 'lucide-react'

export function RegulatoryAuthority() {
    return (
        <section className="py-24 bg-white border-y border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <p className="text-sm font-mono text-execution-orange mb-2 uppercase tracking-wider">
                        Compliance & Standards
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                        Regulatory Proof
                    </h2>
                    <p className="mt-4 text-foreground/60 max-w-3xl mx-auto">
                        Certified adherence to national mandates and international interoperability standards.
                    </p>
                </div>

                {/* High Authority Cards */}
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Nepal MoHP Directive 2081 */}
                    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group">
                        <div className="flex items-start gap-5 mb-6">
                            <div className="p-4 bg-red-50 rounded-xl group-hover:bg-red-100 transition-colors">
                                <Shield className="w-8 h-8 text-red-600" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-foreground group-hover:text-red-700 transition-colors">
                                    Nepal MoHP Directive 2081
                                </h3>
                                <p className="text-sm font-mono text-red-600 font-bold mt-2 tracking-wide">
                                    CERTIFIED COMPLIANT
                                </p>
                            </div>
                        </div>
                        <p className="text-foreground/70 leading-relaxed text-lg">
                            Certified compliance with national encryption, audit trail, and data residency standards mandated by the Ministry of Health and Population. We ensure 100% adherence to the latest digital health directives.
                        </p>
                    </div>

                    {/* HL7 FHIR R4 & OpenHIE */}
                    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group">
                        <div className="flex items-start gap-5 mb-6">
                            <div className="p-4 bg-precision-blue/10 rounded-xl group-hover:bg-precision-blue/20 transition-colors">
                                <Globe className="w-8 h-8 text-precision-blue" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-foreground group-hover:text-precision-blue transition-colors">
                                    HL7 FHIR R4 & OpenHIE
                                </h3>
                                <p className="text-sm font-mono text-precision-blue font-bold mt-2 tracking-wide">
                                    GLOBAL ARCHITECTURE
                                </p>
                            </div>
                        </div>
                        <p className="text-foreground/70 leading-relaxed text-lg">
                            Architecture natively designed for global health information exchange. Our systems speak the universal language of interoperability, enabling seamless integration across borders and institutions.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
