'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

interface Tab {
    id: string
    title: string
    subtitle: string
    href: string
}

const tabs: Tab[] = [
    {
        id: 'emr',
        title: 'EMR/EHR & HIS',
        subtitle: 'OpenMRS-powered clinical workflows with Bahmni frontend for patient management and encounters.',
        href: '/architecture/emr',
    },
    {
        id: 'lab',
        title: 'Laboratory Systems & LabBridge',
        subtitle: 'OpenELIS integration with automated FHIR DiagnosticReport generation and result routing.',
        href: '/architecture/lab',
    },
    {
        id: 'fhir',
        title: 'HL7 FHIR & Interoperability',
        subtitle: 'Native R4 resources, OpenHIE mediators, and Nepal MoHP Directive 2081 compliance.',
        href: '/architecture/fhir',
    },
]

export function ArchitectureTabs() {
    const [activeTab, setActiveTab] = useState(tabs[0].id)

    return (
        <section className="py-16 lg:py-24 bg-white border-y border-blueprint-line">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                        Architecture
                    </h2>
                    <span className="text-foreground/40">/</span>
                    <span className="text-xl text-foreground/60">Engineering Proof</span>
                    {/* Decorative line */}
                    <div className="hidden lg:block flex-1 h-px bg-blueprint-line ml-8" />
                </div>

                {/* Tabs */}
                <div
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
                    role="tablist"
                    aria-label="Architecture sections"
                >
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            role="tab"
                            aria-selected={activeTab === tab.id}
                            aria-controls={`panel-${tab.id}`}
                            onClick={() => setActiveTab(tab.id)}
                            className={cn(
                                'text-left p-6 rounded-lg border shadow-sm transition-all duration-300',
                                'focus-visible:outline-2 focus-visible:outline-execution-orange',
                                activeTab === tab.id
                                    ? 'bg-precision-blue/5 border-precision-blue shadow-md'
                                    : 'bg-white border-slate-200 hover:border-precision-blue/30 hover:shadow-md'
                            )}
                        >
                            <h3 className="font-semibold text-foreground mb-2">
                                {tab.title}
                            </h3>
                            <p className="text-sm text-foreground/60 mb-4">
                                {tab.subtitle}
                            </p>
                            <Link
                                href={tab.href}
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center text-sm text-execution-orange font-medium hover:gap-2 transition-all"
                            >
                                Learn more
                                <ChevronRight className="w-4 h-4 ml-1" />
                            </Link>
                        </button>
                    ))}
                </div>

                {/* Tab Panel */}
                <div
                    id={`panel-${activeTab}`}
                    role="tabpanel"
                    aria-labelledby={activeTab}
                    className="mt-8 p-8 bg-blueprint-gray rounded-lg border border-slate-200 shadow-sm"
                >
                    <div className="flex items-center justify-between">
                        <p className="text-foreground/60 font-mono text-sm">
                            Detailed architecture documentation for {tabs.find(t => t.id === activeTab)?.title}
                        </p>
                        <Link
                            href={tabs.find(t => t.id === activeTab)?.href || '/architecture'}
                            className="btn-secondary text-sm"
                        >
                            View Full Documentation
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
