import { User } from 'lucide-react'

export function ManifestoHero({ headline, subheadline }: { headline?: string; subheadline?: string }) {
    return (
        <section className="py-24 bg-blueprint-gray bg-blueprint-grid">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Manifesto Text */}
                    <div>
                        <p className="text-sm font-mono text-execution-orange mb-4 uppercase tracking-wider">
                            About Trigonal Technology
                        </p>

                        <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 leading-tight">
                            {headline || "Global Digital Health Engineering & Architecture"}
                        </h1>

                        <div className="space-y-6 text-lg text-foreground/70 leading-relaxed">
                            <p>
                                <span className="font-bold text-foreground">Trigonal Technology</span> was founded in November 2022 with a singular mission: to bridge the integrity gap in global health infrastructure.
                            </p>

                            <p>
                                {subheadline || "Synthesizing over a decade of domain mastery to build the digital nervous system of the Global South."}
                            </p>

                            <p>
                                With <span className="font-bold text-execution-orange">12+ Years Avg. Seniority</span> per Architect, Trigonal is an <span className="font-bold text-foreground">Elite Engineering Unit</span> delivering open-source EHR implementation and interoperability architecture across the Global South.
                            </p>
                        </div>

                        {/* Key stats */}
                        <div className="mt-10 grid grid-cols-3 gap-6">
                            <div className="text-center">
                                <p className="text-3xl font-bold text-precision-blue font-mono">12+</p>
                                <p className="text-sm text-foreground/60">Years Avg. Seniority</p>
                            </div>
                            <div className="text-center">
                                <p className="text-3xl font-bold text-execution-orange font-mono">8</p>
                                <p className="text-sm text-foreground/60">Years Health Mastery</p>
                            </div>
                            <div className="text-center">
                                <p className="text-3xl font-bold text-precision-blue font-mono">6</p>
                                <p className="text-sm text-foreground/60">Elite Architects</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Team Visual */}
                    <div className="relative">
                        <div className="aspect-square bg-slate-100 rounded-2xl border border-slate-200 shadow-xl overflow-hidden relative">
                            {/* Placeholder for Dipak Thapa Headshot */}
                            <div className="absolute inset-0 flex items-center justify-center bg-slate-200">
                                <span className="text-slate-400 font-mono text-sm">CEO Headshot Placeholder</span>
                            </div>

                            {/* Bottom overlay */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white/90 to-transparent p-6">
                                <h2 className="text-xl font-bold text-foreground text-center">The Senior Engineering Unit</h2>
                                <p className="text-foreground/60 text-center text-sm">Elite architects for global health infrastructure</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
