'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

interface StackLayer {
    id: string
    name: string
    system: string
    version: string
    tooltip: string
    borderColor: string
    bgColor: string
}

const stackLayers: StackLayer[] = [
    {
        id: 'clinical',
        name: 'Clinical Layer',
        system: 'OpenMRS',
        version: 'v3.0',
        tooltip: 'Patient demographics, encounters, and clinical workflows',
        borderColor: 'border-precision-blue',
        bgColor: 'bg-precision-blue/5',
    },
    {
        id: 'laboratory',
        name: 'Laboratory Layer',
        system: 'OpenELIS',
        version: 'v2.6',
        tooltip: 'Mapped to FHIR DiagnosticReport via LabBridge',
        borderColor: 'border-green-600',
        bgColor: 'bg-green-50',
    },
    {
        id: 'erp',
        name: 'ERP Layer',
        system: 'Odoo',
        version: 'v17',
        tooltip: 'Financial, inventory, and HR management module',
        borderColor: 'border-execution-orange',
        bgColor: 'bg-orange-50',
    },
]

export function TheNidanStack() {
    const [activeLayer, setActiveLayer] = useState<string | null>(null)

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                        The Nidan Stack
                    </h2>
                    <p className="mt-4 text-foreground/60 max-w-2xl mx-auto">
                        A modular architecture integrating Clinical, Laboratory, and ERP systems
                        through FHIR-compliant interoperability layers.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Stack Diagram - Card-based */}
                    <div className="space-y-4">
                        {stackLayers.map((layer, index) => (
                            <div key={layer.id} className="relative">
                                {/* Connection line */}
                                {index < stackLayers.length - 1 && (
                                    <div className="absolute left-1/2 top-full w-0.5 h-4 bg-slate-200 -translate-x-1/2 z-0" />
                                )}

                                {/* Layer Card */}
                                <button
                                    onClick={() => setActiveLayer(activeLayer === layer.id ? null : layer.id)}
                                    onMouseEnter={() => setActiveLayer(layer.id)}
                                    onMouseLeave={() => setActiveLayer(null)}
                                    className={cn(
                                        'relative z-10 w-full text-left p-6 rounded-xl border-2 shadow-sm transition-all duration-300',
                                        'focus-visible:outline-2 focus-visible:outline-execution-orange',
                                        activeLayer === layer.id
                                            ? `${layer.bgColor} ${layer.borderColor} shadow-lg`
                                            : 'bg-white border-slate-200 hover:shadow-md hover:border-slate-300'
                                    )}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            {/* Color indicator */}
                                            <div className={cn(
                                                'w-4 h-4 rounded-full',
                                                layer.id === 'clinical' ? 'bg-precision-blue' :
                                                    layer.id === 'laboratory' ? 'bg-green-600' : 'bg-execution-orange'
                                            )} />

                                            <div>
                                                <h3 className="font-semibold text-lg text-foreground">
                                                    {layer.name}
                                                </h3>
                                                <p className="text-foreground/60">
                                                    {layer.system}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Version tag */}
                                        <span className="font-mono text-xs text-foreground/50 bg-slate-100 px-2 py-1 rounded">
                                            {layer.version}
                                        </span>
                                    </div>

                                    {/* Tooltip on hover/click */}
                                    <div className={cn(
                                        'mt-4 pt-4 border-t border-slate-200 transition-all duration-300',
                                        activeLayer === layer.id ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0 overflow-hidden'
                                    )}>
                                        <p className="text-sm text-foreground/70">{layer.tooltip}</p>
                                    </div>
                                </button>
                            </div>
                        ))}

                        {/* FHIR Bridge */}
                        <div className="mt-6 p-4 bg-precision-blue/5 rounded-lg border-2 border-dashed border-precision-blue/30 text-center">
                            <span className="font-mono text-sm text-precision-blue">
                                HL7 FHIR R4 Interoperability Layer
                            </span>
                        </div>
                    </div>

                    {/* Info Panel */}
                    <div className="bg-blueprint-gray rounded-xl p-8 border border-slate-200 shadow-sm">
                        <h3 className="font-semibold text-xl text-foreground mb-6">
                            Stack Components
                        </h3>

                        <div className="space-y-6">
                            {stackLayers.map((layer) => (
                                <div
                                    key={layer.id}
                                    className={cn(
                                        'p-4 rounded-lg border transition-all duration-300',
                                        activeLayer === layer.id
                                            ? `${layer.bgColor} ${layer.borderColor} border-2`
                                            : 'bg-white border-slate-200'
                                    )}
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className={cn(
                                            'w-3 h-3 rounded-full',
                                            layer.id === 'clinical' ? 'bg-precision-blue' :
                                                layer.id === 'laboratory' ? 'bg-green-600' : 'bg-execution-orange'
                                        )} />
                                        <span className="font-semibold text-foreground">{layer.system}</span>
                                        <span className="font-mono text-xs text-foreground/50">{layer.version}</span>
                                    </div>
                                    <p className="text-sm text-foreground/60 pl-6">{layer.tooltip}</p>
                                </div>
                            ))}
                        </div>

                        {/* Standards badge */}
                        <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            <span className="font-mono text-xs text-foreground/60">
                                Nepal MoHP Directive 2081 Compliant
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
