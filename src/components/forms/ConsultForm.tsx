'use client'

import { useActionState } from 'react'
import { ArrowRight, Loader2, CheckCircle } from 'lucide-react'
import { submitConsultForm, type ConsultFormState } from '@/app/actions/consult'

const projectLocations = ['Nepal', 'India', 'Middle East', 'Africa', 'Other'] as const
const primaryInterests = [
    'Interoperability Architecture',
    'Enterprise EMR Deployment',
    'AI & Diagnostic Intelligence',
] as const
const existingSystemsOptions = ['OpenMRS', 'Bahmni', 'Odoo', 'DHIS2', 'Legacy/Proprietary'] as const

const initialState: ConsultFormState = {
    success: false,
    message: '',
}

export function ConsultForm() {
    const [state, formAction, isPending] = useActionState(submitConsultForm, initialState)

    if (state.success) {
        return (
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">Request Received</h3>
                <p className="text-foreground/70">{state.message}</p>
            </div>
        )
    }

    return (
        <form action={formAction} className="space-y-6">
            {/* Error message */}
            {state.message && !state.success && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                    {state.message}
                </div>
            )}

            {/* Name & Organization */}
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="fullName" className="block text-sm font-semibold text-foreground mb-2">
                        Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        aria-required="true"
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-precision-blue focus:border-precision-blue transition-colors"
                        placeholder="Dr. Jane Doe"
                    />
                    {state.errors?.fullName && (
                        <p className="mt-1 text-sm text-red-600">{state.errors.fullName[0]}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="organization" className="block text-sm font-semibold text-foreground mb-2">
                        Organization <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="organization"
                        name="organization"
                        aria-required="true"
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-precision-blue focus:border-precision-blue transition-colors"
                        placeholder="Ministry of Health / Hospital Name"
                    />
                    {state.errors?.organization && (
                        <p className="mt-1 text-sm text-red-600">{state.errors.organization[0]}</p>
                    )}
                </div>
            </div>

            {/* Email */}
            <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Email Address <span className="text-red-500">*</span>
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    aria-required="true"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-precision-blue focus:border-precision-blue transition-colors"
                    placeholder="architect@organization.health"
                />
                {state.errors?.email && (
                    <p className="mt-1 text-sm text-red-600">{state.errors.email[0]}</p>
                )}
            </div>

            {/* Location & Interest */}
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="projectLocation" className="block text-sm font-semibold text-foreground mb-2">
                        Project Location <span className="text-red-500">*</span>
                    </label>
                    <select
                        id="projectLocation"
                        name="projectLocation"
                        aria-required="true"
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-precision-blue focus:border-precision-blue transition-colors"
                    >
                        <option value="">Select location...</option>
                        {projectLocations.map((loc) => (
                            <option key={loc} value={loc}>{loc}</option>
                        ))}
                    </select>
                    {state.errors?.projectLocation && (
                        <p className="mt-1 text-sm text-red-600">{state.errors.projectLocation[0]}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="primaryInterest" className="block text-sm font-semibold text-foreground mb-2">
                        Primary Interest <span className="text-red-500">*</span>
                    </label>
                    <select
                        id="primaryInterest"
                        name="primaryInterest"
                        aria-required="true"
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-precision-blue focus:border-precision-blue transition-colors"
                    >
                        <option value="">Select interest...</option>
                        {primaryInterests.map((interest) => (
                            <option key={interest} value={interest}>{interest}</option>
                        ))}
                    </select>
                    {state.errors?.primaryInterest && (
                        <p className="mt-1 text-sm text-red-600">{state.errors.primaryInterest[0]}</p>
                    )}
                </div>
            </div>

            {/* Existing Systems */}
            <div>
                <fieldset>
                    <legend className="block text-sm font-semibold text-foreground mb-3">
                        Existing Systems (select all that apply)
                    </legend>
                    <div className="flex flex-wrap gap-4">
                        {existingSystemsOptions.map((system) => (
                            <label key={system} className="inline-flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="existingSystems"
                                    value={system}
                                    className="w-5 h-5 rounded border-slate-300 text-precision-blue focus:ring-precision-blue"
                                />
                                <span className="text-sm text-foreground/70">{system}</span>
                            </label>
                        ))}
                    </div>
                </fieldset>
            </div>

            {/* Compliance Requirements */}
            <div>
                <fieldset>
                    <legend className="block text-sm font-semibold text-foreground mb-3">
                        Compliance Requirements
                    </legend>
                    <div className="flex flex-wrap gap-6">
                        <label className="inline-flex items-center gap-3 cursor-pointer">
                            <div className="relative">
                                <input
                                    type="checkbox"
                                    name="nepalDirective2081"
                                    className="sr-only peer"
                                />
                                <div className="w-11 h-6 bg-slate-200 rounded-full peer-checked:bg-precision-blue transition-colors" />
                                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5" />
                            </div>
                            <span className="text-sm text-foreground/70">Nepal Directive 2081</span>
                        </label>

                        <label className="inline-flex items-center gap-3 cursor-pointer">
                            <div className="relative">
                                <input
                                    type="checkbox"
                                    name="hl7Fhir"
                                    className="sr-only peer"
                                />
                                <div className="w-11 h-6 bg-slate-200 rounded-full peer-checked:bg-precision-blue transition-colors" />
                                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5" />
                            </div>
                            <span className="text-sm text-foreground/70">HL7 FHIR</span>
                        </label>
                    </div>
                </fieldset>
            </div>

            {/* Technical Brief */}
            <div>
                <label htmlFor="technicalBrief" className="block text-sm font-semibold text-foreground mb-2">
                    Technical Brief
                    <span className="text-foreground/50 font-normal ml-2">(1000 characters max)</span>
                </label>
                <textarea
                    id="technicalBrief"
                    name="technicalBrief"
                    rows={5}
                    maxLength={1000}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-precision-blue focus:border-precision-blue transition-colors resize-none"
                    placeholder="Describe your project goals, current challenges, and desired outcomes..."
                />
                {state.errors?.technicalBrief && (
                    <p className="mt-1 text-sm text-red-600">{state.errors.technicalBrief[0]}</p>
                )}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
                <button
                    type="submit"
                    disabled={isPending}
                    className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-execution-orange text-white font-bold rounded-lg hover:bg-execution-orange/90 transition-colors shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {isPending ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Analyzing Requirements...
                        </>
                    ) : (
                        <>
                            Submit Consultation Request
                            <ArrowRight className="w-5 h-5" />
                        </>
                    )}
                </button>
            </div>
        </form>
    )
}
