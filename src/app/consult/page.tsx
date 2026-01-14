import type { Metadata } from 'next'
import { ConsultForm } from '@/components/forms/ConsultForm'
import { Building2, Clock, Shield } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Consult an Architect | Trigonal Technology',
    description: 'Schedule a technical consultation with our healthcare architecture team. Expertise in HL7 FHIR, OpenMRS, Bahmni, and national health information systems.',
    openGraph: {
        title: 'Consult an Architect | Trigonal Technology',
        description: 'Schedule a technical consultation with our healthcare architecture team.',
        type: 'website',
    },
}

const features = [
    {
        icon: Building2,
        title: 'Architecture Review',
        description: 'Get expert feedback on your health system architecture and integration strategy.',
    },
    {
        icon: Clock,
        title: '24-Hour Response',
        description: 'Our architects review every submission and respond within one business day.',
    },
    {
        icon: Shield,
        title: 'Confidential',
        description: 'Your technical brief is treated with strict confidentiality and data privacy.',
    },
]

export default function ConsultPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="py-24 bg-blueprint-gray bg-blueprint-grid">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <p className="text-sm font-mono text-execution-orange mb-2 uppercase tracking-wider">
                            Consult an Architect
                        </p>
                        <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                            Technical Intake
                        </h1>
                        <p className="text-xl text-foreground/70 leading-relaxed">
                            Share your project requirements and an architect will review your technical brief
                            within 24 hours. No sales pitches-just engineering-focused consultation.
                        </p>
                    </div>

                    {/* Feature pills */}
                    <div className="mt-12 grid sm:grid-cols-3 gap-6">
                        {features.map((feature) => (
                            <div
                                key={feature.title}
                                className="flex items-start gap-4 p-5 bg-white rounded-xl border border-slate-200 shadow-sm"
                            >
                                <div className="w-10 h-10 rounded-lg bg-precision-blue/10 flex items-center justify-center flex-shrink-0">
                                    <feature.icon className="w-5 h-5 text-precision-blue" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                                    <p className="text-sm text-foreground/60">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Form Section */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-blueprint-gray rounded-2xl p-8 md:p-12 border border-slate-200 shadow-lg">
                        <h2 className="text-2xl font-bold text-foreground mb-8">
                            Submit Your Requirements
                        </h2>
                        <ConsultForm />
                    </div>
                </div>
            </section>
        </>
    )
}
