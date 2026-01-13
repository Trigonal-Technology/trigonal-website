'use client'

import { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'
import { cn } from '@/lib/utils'

export function AIConcierge() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {/* Chat Panel (Placeholder) */}
            <div
                className={cn(
                    'absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-xl border border-blueprint-line overflow-hidden transition-all duration-300',
                    isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                )}
            >
                <div className="bg-precision-blue text-white px-4 py-3 flex items-center justify-between">
                    <span className="font-semibold text-sm">Architecture Concierge</span>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-1 hover:bg-white/10 rounded transition-colors"
                        aria-label="Close chat"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>
                <div className="p-4">
                    <p className="text-sm text-foreground/80 mb-4">
                        Ask our AI about FHIR integration, Nepal MoHP Directive 2081 compliance, or system architecture.
                    </p>
                    <div className="bg-blueprint-gray rounded-md p-3 text-sm text-foreground/60 italic">
                        &quot;How does NidanEHR ensure HL7 FHIR compliance?&quot;
                    </div>
                    <div className="mt-4 pt-4 border-t border-blueprint-line">
                        <p className="text-xs text-foreground/50 font-mono">
                            RAG-based AI integration coming in Phase 2
                        </p>
                    </div>
                </div>
            </div>

            {/* Floating Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    'w-14 h-14 rounded-full bg-execution-orange text-white flex items-center justify-center shadow-lg transition-all duration-200',
                    'hover:bg-execution-orange/90 hover:scale-105',
                    !isOpen && 'animate-pulse-orange'
                )}
                aria-label="Open Architecture Concierge"
                aria-expanded={isOpen}
            >
                <MessageCircle className="w-6 h-6" />
            </button>

            {/* Tooltip */}
            {!isOpen && (
                <div className="absolute bottom-16 right-0 w-64 bg-foreground text-white text-xs px-3 py-2 rounded-lg shadow-lg opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
                    Ask our Architecture Concierge about FHIR integration or Directive 2081.
                </div>
            )}
        </div>
    )
}
