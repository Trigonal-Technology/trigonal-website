export function FounderManifesto() {
    return (
        <section className="py-24 bg-white border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Executive Summary */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <p className="text-sm font-mono text-execution-orange mb-4 uppercase tracking-wider">
                        Executive Summary
                    </p>

                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
                        Engineering Integrity in Digital Health
                    </h2>

                    <div className="space-y-6 text-xl text-foreground/80 leading-relaxed font-light">
                        <p>
                            &quot;At Trigonal, <span className="font-bold text-foreground">Engineering Integrity</span> means building systems that don&apos;t just work-they work under pressure, at scale, and for decades. Every line of code, every architecture decision, and every integration must withstand the demands of real-world healthcare operations.
                        </p>

                        <p>
                            We are committed to <span className="font-bold text-foreground">Data Sovereignty</span>, ensuring health data belongs to the nation and the patient. We challenge the status quo of siloed systems through <span className="font-bold text-foreground">Radical Interoperability</span>, using HL7 FHIR and OpenHIE to build bridges where others build walls.&quot;
                        </p>
                    </div>
                </div>

                {/* Strategic Partnerships Strip */}
                <div className="border-t border-slate-100 pt-12 pb-4">
                    <p className="text-center text-xs font-mono text-slate-400 uppercase tracking-widest mb-8">
                        Trusted by leading innovators in global health
                    </p>

                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* 
                            Place logo assets in: public/images/partners/
                            Recommended format: .svg for optimal scaling and grayscale transitions.
                            Filenames: nyaya-health.svg, nic-nepal.svg, sunyaek.svg, axtute.svg, sursatech.svg, giz.svg
                        */}
                        {[
                            { name: "Nyaya Health", src: "/images/partners/nyaya-health.svg" },
                            { name: "NIC Nepal", src: "/images/partners/nic-nepal.svg" },
                            { name: "SunyaEK", src: "/images/partners/sunyaek.svg" },
                            { name: "Axtute", src: "/images/partners/axtute.svg" },
                            { name: "SursaTech", src: "/images/partners/sursatech.svg" },
                            { name: "GIZ", src: "/images/partners/giz.svg" },
                        ].map((partner) => (
                            <div key={partner.name} className="h-10 w-32 flex items-center justify-center">
                                <img
                                    src={partner.src}
                                    alt={`${partner.name} logo`}
                                    className="max-h-full max-w-full object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
