export default function ManifestoPage() {
    return (
        <div className="min-h-screen bg-slate-50">
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

            <div className="relative max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
                <div className="mb-10">
                    <p className="font-mono text-xs uppercase tracking-wider text-slate-500 mb-2">
                        MANIFESTO_PROTOCOL
                    </p>
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">
                        The Sovereign Health Engineering Manifesto
                    </h1>
                    <p className="text-lg text-slate-600">
                        We build digital health infrastructure that protects sovereignty, preserves
                        clinical integrity, and scales across national systems without compromise.
                    </p>
                </div>

                <div className="space-y-10">
                    <section className="bg-white border-2 border-slate-200 rounded-lg p-8 shadow-sm">
                        <h2 className="font-mono text-sm uppercase tracking-wider text-slate-700 mb-3">
                            [01_SOVEREIGNTY]
                        </h2>
                        <p className="text-slate-700 leading-relaxed">
                            Patient data is not a commodity. Every architecture we deliver enforces
                            national data residency, RBAC access controls, and auditable trails.
                            Trigonal never owns clinical data-we design systems where ministries,
                            hospitals, and communities retain full sovereignty.
                        </p>
                    </section>

                    <section className="bg-white border-2 border-slate-200 rounded-lg p-8 shadow-sm">
                        <h2 className="font-mono text-sm uppercase tracking-wider text-slate-700 mb-3">
                            [02_INTEROPERABILITY]
                        </h2>
                        <p className="text-slate-700 leading-relaxed">
                            True interoperability is engineered, not promised. We integrate FHIR R4,
                            OpenHIE mediators, HL7 V2, and ASTM lab protocols to ensure every
                            clinical signal travels end-to-end without manual reconciliation.
                        </p>
                    </section>

                    <section className="bg-white border-2 border-slate-200 rounded-lg p-8 shadow-sm">
                        <h2 className="font-mono text-sm uppercase tracking-wider text-slate-700 mb-3">
                            [03_FISCAL_INTEGRITY]
                        </h2>
                        <p className="text-slate-700 leading-relaxed">
                            Digital health systems must protect revenue and sustain operations. We
                            embed ERP-grade fiscal controls (Odoo 18, OpenIMIS) so that every lab
                            order, claim, and inventory movement is synchronized without leakage.
                        </p>
                    </section>

                    <section className="bg-white border-2 border-slate-200 rounded-lg p-8 shadow-sm">
                        <h2 className="font-mono text-sm uppercase tracking-wider text-slate-700 mb-3">
                            [04_EXECUTION]
                        </h2>
                        <p className="text-slate-700 leading-relaxed">
                            Architecture is meaningless without execution. Our senior engineers
                            deliver Dockerized deployments, Git-audited codebases, and scalable
                            infrastructure across Nepal, Africa, and the Middle East-built to run,
                            built to last.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}
