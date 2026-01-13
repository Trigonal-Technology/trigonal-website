'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

type Step = 'identity' | 'challenge' | 'compliance' | 'contact';

const options = {
    identity: [
        { id: 'ministry', label: 'Ministry of Health', icon: '🏛️' },
        { id: 'hospital', label: 'Hospital Group', icon: '🏥' },
        { id: 'ngo', label: 'NGO / Donor', icon: '🤝' },
        { id: 'private', label: 'Private Clinic', icon: '🩺' },
    ],
    challenge: [
        { id: 'fragmentation', label: 'System Fragmentation', desc: 'Siloed data across clinics/labs' },
        { id: 'revenue', label: 'Revenue Loss', desc: '漏 Billing capture & inventory' },
        { id: 'lab', label: 'Lab Automation', desc: 'Manual entry errors' },
        { id: 'rural', label: 'Rural Reach', desc: 'Offline/remote care delivery' },
    ],
    compliance: [
        { id: 'nepal', label: 'Nepal Directive 2081', badge: 'MANDATORY' },
        { id: 'hipaa', label: 'HIPAA Compliance', badge: 'PRIVACY' },
        { id: 'fhir', label: 'HL7 FHIR R4', badge: 'GLOBAL' },
    ]
};

export function ArchitectConsultation({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const [step, setStep] = useState<Step>('identity');
    const [selections, setSelections] = useState<Record<string, string>>({});

    const handleSelect = (key: string, value: string) => {
        setSelections(prev => ({ ...prev, [key]: value }));
        // Auto advance logic or manual? Let's manual for clarity + animation
    };

    const nextStep = () => {
        if (step === 'identity') setStep('challenge');
        else if (step === 'challenge') setStep('compliance');
        else if (step === 'compliance') setStep('contact');
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden border border-slate-200"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50">
                            <div>
                                <h3 className="text-xl font-bold text-slate-900">Consult an Architect</h3>
                                <p className="text-sm text-slate-500">Stop Managing Software. Start Architecting Health.</p>
                            </div>
                            <button onClick={onClose} className="p-2 hover:bg-slate-200 rounded-full transition-colors">
                                <X className="w-5 h-5 text-slate-500" />
                            </button>
                        </div>

                        {/* Progress Bar */}
                        <div className="h-1 bg-slate-100 w-full">
                            <motion.div
                                className="h-full bg-execution-orange"
                                initial={{ width: '25%' }}
                                animate={{
                                    width: step === 'identity' ? '25%' :
                                        step === 'challenge' ? '50%' :
                                            step === 'compliance' ? '75%' : '100%'
                                }}
                            />
                        </div>

                        {/* Body */}
                        <div className="p-8 min-h-[400px]">
                            <AnimatePresence mode="wait">
                                {step === 'identity' && (
                                    <motion.div
                                        key="identity"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="space-y-6"
                                    >
                                        <h4 className="text-lg font-semibold text-slate-800">Who are you representing?</h4>
                                        <div className="grid grid-cols-2 gap-4">
                                            {options.identity.map((opt) => (
                                                <button
                                                    key={opt.id}
                                                    onClick={() => handleSelect('identity', opt.id)}
                                                    className={cn(
                                                        "p-6 text-left rounded-xl border-2 transition-all hover:bg-slate-50",
                                                        selections['identity'] === opt.id
                                                            ? "border-precision-blue bg-precision-blue/5 ring-1 ring-precision-blue"
                                                            : "border-slate-100 hover:border-slate-300"
                                                    )}
                                                >
                                                    <span className="text-3xl mb-3 block">{opt.icon}</span>
                                                    <span className="font-bold text-slate-700">{opt.label}</span>
                                                </button>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}

                                {step === 'challenge' && (
                                    <motion.div
                                        key="challenge"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="space-y-6"
                                    >
                                        <h4 className="text-lg font-semibold text-slate-800">Primary Challenge?</h4>
                                        <div className="space-y-3">
                                            {options.challenge.map((opt) => (
                                                <button
                                                    key={opt.id}
                                                    onClick={() => handleSelect('challenge', opt.id)}
                                                    className={cn(
                                                        "w-full p-4 flex items-center justify-between rounded-xl border-2 transition-all hover:bg-slate-50",
                                                        selections['challenge'] === opt.id
                                                            ? "border-execution-orange bg-execution-orange/5"
                                                            : "border-slate-100 hover:border-slate-300"
                                                    )}
                                                >
                                                    <div>
                                                        <span className="font-bold text-slate-800 block text-left">{opt.label}</span>
                                                        <span className="text-sm text-slate-500">{opt.desc}</span>
                                                    </div>
                                                    {selections['challenge'] === opt.id && <Check className="w-5 h-5 text-execution-orange" />}
                                                </button>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}

                                {step === 'compliance' && (
                                    <motion.div
                                        key="compliance"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="space-y-6"
                                    >
                                        <h4 className="text-lg font-semibold text-slate-800">Required Compliance?</h4>
                                        <div className="grid gap-3">
                                            {options.compliance.map((opt) => (
                                                <button
                                                    key={opt.id}
                                                    onClick={() => handleSelect('compliance', opt.id)}
                                                    className={cn(
                                                        "w-full p-4 flex items-center justify-between rounded-xl border-2 transition-all hover:bg-slate-50",
                                                        selections['compliance'] === opt.id
                                                            ? "border-precision-blue bg-precision-blue/5"
                                                            : "border-slate-100 hover:border-slate-300"
                                                    )}
                                                >
                                                    <span className="font-bold text-slate-800">{opt.label}</span>
                                                    <span className="text-xs font-mono font-bold px-2 py-1 bg-slate-200 rounded text-slate-600">
                                                        {opt.badge}
                                                    </span>
                                                </button>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}

                                {step === 'contact' && (
                                    <motion.div
                                        key="contact"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="text-center py-8"
                                    >
                                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <Check className="w-8 h-8 text-green-600" />
                                        </div>
                                        <h4 className="text-2xl font-bold text-slate-900 mb-2">Request Ready</h4>
                                        <p className="text-slate-600 mb-8 max-w-md mx-auto">
                                            Your architectural profile has been generated. Our senior team will review your specific compliance needs ({selections.compliance}) and interoperability status.
                                        </p>

                                        {/* Placeholder for actual form or direct email action */}
                                        <button className="bg-precision-blue text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:bg-blue-800 transition-colors w-full">
                                            Submit Architectural Request
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Footer Controls */}
                        {step !== 'contact' && (
                            <div className="p-6 border-t border-slate-100 flex justify-end">
                                <button
                                    onClick={nextStep}
                                    disabled={!selections[step]}
                                    className="flex items-center gap-2 bg-slate-900 text-white font-bold py-3 px-6 rounded-lg hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                >
                                    <span>Next Step</span>
                                    <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
