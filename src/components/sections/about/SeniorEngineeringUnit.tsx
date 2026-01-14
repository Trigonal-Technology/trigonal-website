'use client'

import Image from 'next/image'
import { Award, Shield } from 'lucide-react'

const teamMembers = [
    {
        name: 'Dipak Thapa',
        role: 'CEO & Chief Architect',
        expertise: 'Ecosystem Strategy & Interoperable Infrastructure',
        yearsExp: '11+ yrs Dev',
        healthExp: '9 yrs Digital Health',
        photo: '/team/dipak-thapa.jpg',
        mastery: [
            'Java/Python Enterprise Architecture',
            'HL7 FHIR & OpenHIE Integration',
            'National Health System Design',
        ],
        initials: 'DT',
        highlight: true,
    },
    {
        name: 'Utsav Deshar',
        role: 'Lead EHR Implementer',
        expertise: 'Clinical Workflows & Enterprise Deployment',
        yearsExp: '15 yrs IT',
        healthExp: '6 yrs EHR',
        photo: '/team/utsav-deshar.jpg',
        mastery: [
            'Bahmni & OpenMRS Clinical Reporting',
            'Clinical Workflow Optimization',
            'Metabase & Analytics',
        ],
        initials: 'UD',
    },
    {
        name: 'Madhukar Subedi',
        role: 'Senior UI/UX Architect',
        expertise: 'User-Centric Clinical Design',
        yearsExp: '14+ yrs UI/UX',
        healthExp: 'Healthcare UX',
        photo: '/team/madhukar-subedi.jpg',
        mastery: [
            'Clinical Interface Optimization',
            'Accessibility-First Design',
            'Design System Architecture',
        ],
        initials: 'MS',
    },
    {
        name: 'Alok Subedi',
        role: 'Mobile Architecture Lead',
        expertise: 'High-Performance Mobile Health Infrastructure',
        yearsExp: '11+ yrs Mobile',
        healthExp: 'Remote Health',
        photo: '/team/alok-subedi.jpg',
        mastery: [
            'Native iOS/Android Development',
            'Offline-First Mobile Apps',
            'Rural Health Delivery Systems',
        ],
        initials: 'AS',
    },
    {
        name: 'Sudeep Balchhaudi',
        role: 'Operations & Project Lead',
        expertise: 'Digital Health Lifecycle Management',
        yearsExp: '12+ yrs Web',
        healthExp: 'Odoo Functional',
        photo: '/team/sudeep-balchhaudi.jpg',
        mastery: [
            'Agile Project Delivery',
            'Odoo Functional Consulting',
            'Quality Assurance & Compliance',
        ],
        initials: 'SB',
    },
    {
        name: 'Anish Kumar Yadav',
        role: 'Systems & Compliance Engineer',
        expertise: 'Standards Compliance & ML Integration',
        yearsExp: '3+ yrs IT',
        healthExp: '3 yrs Health',
        photo: '/team/anish-yadav.jpg',
        mastery: [
            'Odoo ERP Implementation',
            'Machine Learning Integration',
            'Health Standards Compliance',
        ],
        initials: 'AY',
        certifications: ['HL7 FHIR', 'HIPAA', 'DHIS2'],
    },
]

export function SeniorEngineeringUnit() {
    return (
        <section className="py-24 bg-blueprint-gray bg-blueprint-grid">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <p className="text-sm font-mono text-execution-orange mb-2 uppercase tracking-wider">
                        The Team
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                        The Senior Engineering Unit
                    </h2>
                    <p className="mt-4 text-foreground/60 max-w-3xl mx-auto">
                        Architectural seniority meets healthcare domain mastery.
                    </p>
                </div>

                {/* Team Grid - 3 columns */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member) => (
                        <article
                            key={member.name}
                            className={`relative bg-white rounded-xl overflow-hidden border transition-all duration-300 hover:shadow-xl ${member.highlight
                                ? 'border-precision-blue/30 shadow-lg'
                                : 'border-slate-200 shadow-sm hover:border-precision-blue/20'
                                }`}
                            aria-label={`${member.name}, ${member.role}`}
                        >
                            {/* Photo Section */}
                            <div className="relative h-56 bg-gradient-to-br from-precision-blue/10 to-slate-50 flex items-center justify-center overflow-hidden">
                                {/* Photo with fallback */}
                                <Image
                                    src={member.photo}
                                    alt={`${member.name} - ${member.role}`}
                                    fill
                                    className="object-cover object-top"
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none'
                                    }}
                                />
                                {/* Fallback initials */}
                                <div className={`w-28 h-28 rounded-full flex items-center justify-center text-4xl font-bold shadow-lg ${member.highlight ? 'bg-precision-blue text-white' : 'bg-slate-200 text-slate-500'
                                    }`}>
                                    {member.initials}
                                </div>

                                {/* Tenure Badges - Most Prominent */}
                                <div className="absolute top-3 right-3 flex flex-col gap-1.5 items-end">
                                    <span className="px-3 py-1.5 bg-precision-blue text-white text-xs font-mono font-bold rounded-lg shadow-lg">
                                        {member.yearsExp}
                                    </span>
                                    <span className="px-3 py-1.5 bg-execution-orange text-white text-xs font-mono font-bold rounded-lg shadow-lg">
                                        {member.healthExp}
                                    </span>
                                </div>

                                {/* Founder badge */}
                                {member.highlight && (
                                    <div className="absolute top-3 left-3">
                                        <span className="px-3 py-1.5 bg-white text-precision-blue text-xs font-bold rounded-lg shadow-lg">
                                            Founder
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Content Section */}
                            <div className="p-6">
                                <h3 className="font-bold text-lg text-foreground">{member.name}</h3>
                                <p className="text-sm text-precision-blue font-medium mb-3">{member.role}</p>
                                <p className="text-sm text-foreground/60 mb-4">{member.expertise}</p>

                                {/* Mastery list */}
                                <ul className="space-y-2">
                                    {member.mastery.map((skill) => (
                                        <li key={skill} className="flex items-center gap-2 text-xs text-foreground/70">
                                            <span className="w-1.5 h-1.5 bg-precision-blue rounded-full flex-shrink-0" />
                                            {skill}
                                        </li>
                                    ))}
                                </ul>

                                {/* Certifications */}
                                {member.certifications && (
                                    <div className="flex flex-wrap gap-2 pt-4 mt-4 border-t border-slate-100">
                                        {member.certifications.map((cert) => (
                                            <span
                                                key={cert}
                                                className="inline-flex items-center gap-1 px-2.5 py-1 bg-execution-orange/10 text-execution-orange text-xs font-mono font-bold rounded-full border border-execution-orange/20"
                                            >
                                                <Shield className="w-3 h-3" />
                                                {cert}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </article>
                    ))}
                </div>

                {/* Aggregated Stats */}
                <div className="mt-16 text-center">
                    <div className="inline-flex flex-wrap items-center justify-center gap-6 sm:gap-8 px-8 py-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                        <div className="text-center px-4">
                            <span className="text-3xl font-bold font-mono text-precision-blue whitespace-nowrap">12+ Years</span>
                            <p className="text-xs text-foreground/60 mt-1">Avg. Seniority</p>
                        </div>
                        <div className="w-px h-12 bg-slate-200 hidden sm:block" />
                        <div className="text-center px-4">
                            <span className="text-3xl font-bold font-mono text-execution-orange whitespace-nowrap">8 Years</span>
                            <p className="text-xs text-foreground/60 mt-1">Domain Mastery</p>
                        </div>
                        <div className="w-px h-12 bg-slate-200 hidden sm:block" />
                        <div className="text-center px-4">
                            <span className="text-3xl font-bold font-mono text-precision-blue">6</span>
                            <p className="text-xs text-foreground/60 mt-1">Senior Architects</p>
                        </div>
                        <div className="w-px h-12 bg-slate-200 hidden sm:block" />
                        <div className="flex items-center gap-2 px-4">
                            <Award className="w-6 h-6 text-green-600" />
                            <div className="text-left">
                                <p className="text-sm font-bold text-foreground">Certified</p>
                                <p className="text-xs text-foreground/60">FHIR • HIPAA • DHIS2</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
