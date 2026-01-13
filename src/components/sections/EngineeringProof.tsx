"use client";
import { useState } from 'react';

const content = {
    emr: {
        title: "EMR/EHR & HIS",
        desc: "Enterprise-grade OpenMRS distribution for longitudinal patient tracking.",
        stats: ["FHIR R4 Compliant", "Offline-First Support", "Odoo Billing Sync"]
    },
    lab: {
        title: "LabBridge Middleware",
        desc: "Bi-directional analyzer integration connecting OpenELIS to clinical core.",
        stats: ["ASTM/HL7 Protocol", "Sample Barcoding", "Auto-Validation"]
    },
    fhir: {
        title: "HL7 FHIR Gateway",
        desc: "Native R4 resources with OpenHIE mediators for national health programs.",
        stats: ["Nepal Directive 2081", "OpenHIE Certified", "REST/GraphQL APIs"]
    }
};

export function EngineeringProof() {
    const [activeTab, setActiveTab] = useState('emr');

    return (
        <section className="py-24 bg-blueprint-gray border-y border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                        Architecture <span className="text-foreground/40">/</span>{' '}
                        <span className="font-normal text-foreground/60">Engineering Proof</span>
                    </h2>
                </div>

                {/* Tabs */}
                <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
                    {Object.keys(content).map((key) => (
                        <button
                            key={key}
                            onClick={() => setActiveTab(key)}
                            className={`px-6 py-3 font-mono text-sm border-2 rounded-md transition-all whitespace-nowrap ${activeTab === key
                                    ? 'bg-precision-blue text-white border-precision-blue shadow-lg'
                                    : 'bg-white text-slate-500 border-slate-200 hover:border-precision-blue'
                                }`}
                        >
                            {content[key as keyof typeof content].title}
                        </button>
                    ))}
                </div>

                {/* Content Panel */}
                <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-xl min-h-[300px] flex flex-col justify-center">
                    <h4 className="text-2xl font-bold mb-4 text-slate-900">
                        {content[activeTab as keyof typeof content].title}
                    </h4>
                    <p className="text-slate-600 text-lg mb-6 max-w-2xl">
                        {content[activeTab as keyof typeof content].desc}
                    </p>
                    <div className="flex flex-wrap gap-4">
                        {content[activeTab as keyof typeof content].stats.map((stat, i) => (
                            <span
                                key={i}
                                className="bg-slate-100 px-3 py-1 rounded text-xs font-mono text-precision-blue border border-slate-200"
                            >
                                {stat}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
