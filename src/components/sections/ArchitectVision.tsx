import Link from 'next/link'
import { ArrowRight, Quote } from 'lucide-react'

export function ArchitectVision() {
    return (
        <section className="py-24 bg-white border-y border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Section Label */}
                    <p className="text-sm font-mono text-execution-orange mb-4 uppercase tracking-wider">
                        The Architect&apos;s Vision
                    </p>

                    {/* Quote Block */}
                    <div className="relative">
                        <Quote className="absolute -left-2 -top-2 w-12 h-12 text-precision-blue/10" />
                        <blockquote className="relative pl-8 border-l-4 border-precision-blue">
                            <p className="text-2xl sm:text-3xl font-medium text-foreground leading-relaxed">
                                After <span className="font-bold text-precision-blue">11 years</span> of engineering complex systems in Java and Python, I founded Trigonal to solve the{' '}
                                <span className="font-bold text-execution-orange">integrity gap</span> in digital health.
                            </p>
                            <p className="mt-6 text-xl text-foreground/70 leading-relaxed">
                                We don&apos;t just deploy software; we architect{' '}
                                <span className="font-semibold text-foreground">sovereign health ecosystems</span>.
                            </p>
                        </blockquote>
                    </div>

                    {/* Attribution */}
                    <div className="mt-8 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            {/* Profile placeholder */}
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-precision-blue/20 to-execution-orange/20 flex items-center justify-center border-2 border-precision-blue/30">
                                <span className="text-lg font-bold text-precision-blue">DT</span>
                            </div>
                            <div>
                                <p className="font-semibold text-foreground">Dipak Thapa</p>
                                <p className="text-sm text-foreground/60">Founder & CEO, Trigonal Technology</p>
                            </div>
                        </div>

                        {/* CTA */}
                        <Link
                            href="/about"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-precision-blue text-white font-semibold rounded-lg hover:bg-precision-blue/90 transition-colors shadow-lg"
                        >
                            Read the Manifesto
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
