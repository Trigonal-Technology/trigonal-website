'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { TrigonalLoader } from '@/components/layout/TrigonalLoader';
import {
    Building2,
    Layers,
    Globe,
    CheckCircle2,
    Terminal,
    ArrowRight
} from 'lucide-react';

// Engineering needs options
const engineeringNeeds = [
    { value: 'national-hie', label: 'National HIE Spine', description: 'OpenHIE-compliant health information exchange' },
    { value: 'hospital-os', label: 'Integrated Hospital OS', description: 'Complete EMR + LIS + ERP stack' },
    { value: 'diagnostic-middleware', label: 'Diagnostic Middleware', description: 'Lab analyzer → FHIR bridge' },
    { value: 'fiscal-engine', label: 'Hospital Fiscal Engine', description: 'Odoo 18 ERP for revenue management' },
    { value: 'surveillance', label: 'Public Health Surveillance', description: 'DHIS2 aggregate analytics' },
    { value: 'mobile-health', label: 'Offline-First Mobile Health', description: 'Muzima/Intelehealth deployment' }
];

// Interoperability standards
const interopStandards = [
    { id: 'fhir', label: 'HL7 FHIR R4', color: '#1E4E9B' },
    { id: 'openhie', label: 'OpenHIE', color: '#8B5CF6' },
    { id: 'dhis2', label: 'DHIS2 Integration', color: '#D97706' },
    { id: 'openimis', label: 'OpenIMIS', color: '#EF4444' },
    { id: 'labbridge', label: 'Lab-Bridge', color: '#10B981' },
    { id: 'dicom', label: 'DICOM/PACS', color: '#6366F1' }
];

// Scope options
const scopeOptions = [
    { value: 'facility', label: 'Facility', icon: Building2, description: 'Single hospital/clinic' },
    { value: 'regional', label: 'Regional', icon: Layers, description: 'Multi-facility district' },
    { value: 'national', label: 'National', icon: Globe, description: 'Country-wide deployment' }
];

export default function ConsultPage() {
    return (
        <React.Suspense fallback={
            <div className="min-h-screen bg-white flex items-center justify-center">
                <TrigonalLoader />
            </div>
        }>
            <ConsultPageContent />
        </React.Suspense>
    );
}

function ConsultPageContent() {
    const searchParams = useSearchParams();
    const [isProcessing, setIsProcessing] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    // Form state
    const [formData, setFormData] = useState({
        organizationName: '',
        contactPerson: '',
        email: '',
        engineeringNeed: '',
        interopStandards: [] as string[],
        scope: 'facility',
        additionalContext: ''
    });

    // EFFECT: Check for URL params on mount
    useEffect(() => {
        const domainParam = searchParams.get('domain');

        if (domainParam === 'diagnostic_middleware') {
            // Auto-select the Diagnostic Middleware domain
            setFormData(prev => ({
                ...prev,
                engineeringNeed: 'diagnostic-middleware',
                interopStandards: ['fhir', 'labbridge'] // Auto-select ASTM and HL7 standards
            }));
        }
    }, [searchParams]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsProcessing(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 4000));

        setIsProcessing(false);
        setShowSuccess(true);
    };

    const toggleStandard = (standardId: string) => {
        setFormData(prev => ({
            ...prev,
            interopStandards: prev.interopStandards.includes(standardId)
                ? prev.interopStandards.filter(id => id !== standardId)
                : [...prev.interopStandards, standardId]
        }));
    };

    if (isProcessing) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <TrigonalLoader />
                <div className="absolute bottom-24 font-mono text-xs text-precision-blue uppercase tracking-wider animate-pulse">
                    [ANALYZING_INFRASTRUCTURE_GAP...]
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            {/* Blueprint Grid Background */}
            <div
                className="fixed inset-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, #E2E8F0 1px, transparent 1px),
                        linear-gradient(to bottom, #E2E8F0 1px, transparent 1px)
                    `,
                    backgroundSize: '24px 24px'
                }}
            />

            <div className="relative max-w-4xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full mb-6">
                        <Terminal className="w-4 h-4 text-precision-blue" />
                        <span className="text-xs font-mono uppercase tracking-wider text-slate-600">
                            ARCHITECTURAL_CONSULTATION
                        </span>
                    </div>
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">
                        Consult an <span className="text-precision-blue">Architect</span>
                    </h1>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Our senior architects (12+ years avg. experience) will design a sovereign,
                        interoperable health system architecture tailored to your specifications.
                    </p>
                </motion.div>

                {/* Form Container */}
                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    onSubmit={handleSubmit}
                    className="bg-white border-2 border-slate-200 rounded-lg shadow-sm p-8 space-y-8"
                >
                    {/* Organization Details */}
                    <div className="space-y-6">
                        <h2 className="font-mono text-sm uppercase tracking-wider text-slate-700 border-b border-slate-200 pb-2">
                            01_ORGANIZATION_PROFILE
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block font-mono text-xs uppercase tracking-wider text-slate-600 mb-2">
                                    Organization Name *
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.organizationName}
                                    onChange={(e) => setFormData(prev => ({ ...prev, organizationName: e.target.value }))}
                                    className="w-full px-4 py-3 border border-slate-300 rounded-md font-mono text-sm focus:outline-none focus:ring-2 focus:ring-precision-blue focus:border-transparent"
                                    placeholder="Ministry of Health / NGO / Hospital"
                                />
                            </div>
                            <div>
                                <label className="block font-mono text-xs uppercase tracking-wider text-slate-600 mb-2">
                                    Contact Person *
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.contactPerson}
                                    onChange={(e) => setFormData(prev => ({ ...prev, contactPerson: e.target.value }))}
                                    className="w-full px-4 py-3 border border-slate-300 rounded-md font-mono text-sm focus:outline-none focus:ring-2 focus:ring-precision-blue focus:border-transparent"
                                    placeholder="Technical Lead / CTO"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block font-mono text-xs uppercase tracking-wider text-slate-600 mb-2">
                                Email Address *
                            </label>
                            <input
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                className="w-full px-4 py-3 border border-slate-300 rounded-md font-mono text-sm focus:outline-none focus:ring-2 focus:ring-precision-blue focus:border-transparent"
                                placeholder="architect@organization.org"
                            />
                        </div>
                    </div>

                    {/* Engineering Need */}
                    <div className="space-y-6">
                        <h2 className="font-mono text-sm uppercase tracking-wider text-slate-700 border-b border-slate-200 pb-2">
                            02_ENGINEERING_NEED
                        </h2>

                        <div>
                            <label className="block font-mono text-xs uppercase tracking-wider text-slate-600 mb-3">
                                Primary Requirement *
                            </label>
                            <div className="space-y-2">
                                {engineeringNeeds.map((need) => (
                                    <label
                                        key={need.value}
                                        className={`flex items-start p-4 border-2 rounded-md cursor-pointer transition-all ${formData.engineeringNeed === need.value
                                                ? 'border-precision-blue bg-blue-50'
                                                : 'border-slate-200 hover:border-slate-300'
                                            }`}
                                    >
                                        <input
                                            type="radio"
                                            name="engineeringNeed"
                                            value={need.value}
                                            checked={formData.engineeringNeed === need.value}
                                            onChange={(e) => setFormData(prev => ({ ...prev, engineeringNeed: e.target.value }))}
                                            className="mt-1 text-precision-blue focus:ring-precision-blue"
                                        />
                                        <div className="ml-3">
                                            <p className="font-mono text-sm font-bold text-slate-900">{need.label}</p>
                                            <p className="text-xs text-slate-600 mt-1">{need.description}</p>
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Interoperability Standards */}
                    <div className="space-y-6">
                        <h2 className="font-mono text-sm uppercase tracking-wider text-slate-700 border-b border-slate-200 pb-2">
                            03_REQUIRED_INTEROPERABILITY
                        </h2>

                        <div>
                            <label className="block font-mono text-xs uppercase tracking-wider text-slate-600 mb-3">
                                Standards & Protocols
                            </label>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                {interopStandards.map((standard) => (
                                    <button
                                        key={standard.id}
                                        type="button"
                                        onClick={() => toggleStandard(standard.id)}
                                        className={`p-3 border-2 rounded-md font-mono text-xs font-bold transition-all ${formData.interopStandards.includes(standard.id)
                                                ? 'border-precision-blue bg-blue-50 text-precision-blue'
                                                : 'border-slate-200 text-slate-600 hover:border-slate-300'
                                            }`}
                                        style={{
                                            borderColor: formData.interopStandards.includes(standard.id)
                                                ? standard.color
                                                : undefined
                                        }}
                                    >
                                        {standard.label}
                                        {formData.interopStandards.includes(standard.id) && (
                                            <CheckCircle2 className="w-4 h-4 inline ml-2" />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Scope Selection */}
                    <div className="space-y-6">
                        <h2 className="font-mono text-sm uppercase tracking-wider text-slate-700 border-b border-slate-200 pb-2">
                            04_DEPLOYMENT_SCOPE
                        </h2>

                        <div className="grid md:grid-cols-3 gap-4">
                            {scopeOptions.map((option) => {
                                const Icon = option.icon;
                                return (
                                    <label
                                        key={option.value}
                                        className={`flex flex-col items-center p-6 border-2 rounded-lg cursor-pointer transition-all ${formData.scope === option.value
                                                ? 'border-precision-blue bg-blue-50'
                                                : 'border-slate-200 hover:border-slate-300'
                                            }`}
                                    >
                                        <input
                                            type="radio"
                                            name="scope"
                                            value={option.value}
                                            checked={formData.scope === option.value}
                                            onChange={(e) => setFormData(prev => ({ ...prev, scope: e.target.value }))}
                                            className="sr-only"
                                        />
                                        <Icon className={`w-8 h-8 mb-3 ${formData.scope === option.value ? 'text-precision-blue' : 'text-slate-400'
                                            }`} />
                                        <p className="font-mono text-sm font-bold text-slate-900">{option.label}</p>
                                        <p className="text-xs text-slate-600 mt-1 text-center">{option.description}</p>
                                    </label>
                                );
                            })}
                        </div>
                    </div>

                    {/* Additional Context */}
                    <div className="space-y-6">
                        <h2 className="font-mono text-sm uppercase tracking-wider text-slate-700 border-b border-slate-200 pb-2">
                            05_ADDITIONAL_CONTEXT
                        </h2>

                        <div>
                            <label className="block font-mono text-xs uppercase tracking-wider text-slate-600 mb-2">
                                Technical Requirements / Constraints
                            </label>
                            <textarea
                                value={formData.additionalContext}
                                onChange={(e) => setFormData(prev => ({ ...prev, additionalContext: e.target.value }))}
                                rows={4}
                                className="w-full px-4 py-3 border border-slate-300 rounded-md font-mono text-sm focus:outline-none focus:ring-2 focus:ring-precision-blue focus:border-transparent"
                                placeholder="E.g., Existing infrastructure, data sovereignty requirements, compliance mandates..."
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-6 border-t border-slate-200">
                        <button
                            type="submit"
                            className="w-full bg-precision-blue text-white py-4 rounded-lg font-mono text-sm font-bold uppercase tracking-wider hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 group"
                        >
                            Initiate Consultation
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <p className="text-xs text-slate-500 text-center mt-4 font-mono">
                            Response Time: 24-48 hours · Architect Seniority: 12+ Years
                        </p>
                    </div>
                </motion.form>
            </div>

            {/* Success Modal */}
            <AnimatePresence>
                {showSuccess && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-slate-900/90 backdrop-blur-sm flex items-center justify-center p-4 z-50"
                        onClick={() => setShowSuccess(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-slate-950 border-2 border-precision-blue rounded-lg p-8 max-w-2xl w-full"
                        >
                            {/* Terminal Header */}
                            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-slate-700">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                                <span className="font-mono text-xs text-slate-400 ml-4">
                                    trigonal-architect-console
                                </span>
                            </div>

                            {/* Terminal Content */}
                            <div className="font-mono text-sm space-y-4 text-green-400">
                                <p className="text-slate-400">$ processing architectural brief...</p>
                                <p className="text-green-400">✓ Brief received and validated</p>
                                <p className="text-green-400">✓ Architect assigned: Senior Level (12+ years)</p>
                                <p className="text-green-400">✓ Response SLA: 24-48 hours</p>
                                <p className="mt-6 text-white">
                                    <span className="text-slate-400">Organization:</span> {formData.organizationName}
                                </p>
                                <p className="text-white">
                                    <span className="text-slate-400">Requirement:</span> {
                                        engineeringNeeds.find(n => n.value === formData.engineeringNeed)?.label
                                    }
                                </p>
                                <p className="text-white">
                                    <span className="text-slate-400">Scope:</span> {formData.scope.toUpperCase()}
                                </p>
                                <p className="text-white">
                                    <span className="text-slate-400">Standards:</span> {formData.interopStandards.join(', ').toUpperCase() || 'TBD'}
                                </p>

                                <div className="mt-8 pt-6 border-t border-slate-700">
                                    <p className="text-slate-400 mb-2">Next Steps:</p>
                                    <p className="text-green-400">→ Check {formData.email} for architectural brief</p>
                                    <p className="text-green-400">→ Review technical requirements doc</p>
                                    <p className="text-green-400">→ Schedule deep-dive session</p>
                                </div>

                                <div className="mt-6 flex justify-end">
                                    <button
                                        onClick={() => setShowSuccess(false)}
                                        className="px-6 py-2 bg-precision-blue text-white rounded font-mono text-xs uppercase tracking-wider hover:bg-blue-700 transition-colors"
                                    >
                                        Close Console
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
