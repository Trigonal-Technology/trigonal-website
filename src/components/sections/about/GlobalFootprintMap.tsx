const regions = [
    {
        id: 'nepal',
        name: 'Nepal',
        path: 'M 580 180 l 15 5 l 10 -3 l 8 8 l -5 10 l -20 2 l -12 -10 z',
        description: 'Headquarters & Primary Operations',
        projects: 'NidanEHR Provincial Hospitals',
    },
    {
        id: 'india',
        name: 'India',
        path: 'M 555 175 l 30 10 l 15 40 l 10 50 l -25 15 l -30 -20 l -10 -40 l 5 -35 z',
        description: 'Implementation Partner Network',
        projects: 'OpenMRS Consulting',
    },
    {
        id: 'middle-east',
        name: 'Middle East',
        path: 'M 470 160 l 40 -5 l 20 30 l -10 40 l -35 10 l -25 -30 z',
        description: 'Healthcare IT Advisory',
        projects: 'FHIR Integration Services',
    },
    {
        id: 'africa-east',
        name: 'East Africa',
        path: 'M 440 220 l 25 10 l 10 50 l -5 40 l -30 -5 l -10 -50 z',
        description: 'NGO & Ministry Partnerships',
        projects: 'Pro-bono FHIR R4 mapping & OpenMRS implementation',
        highlight: true,
    },
    {
        id: 'africa-west',
        name: 'Nigeria',
        path: 'M 355 200 l 30 5 l 10 30 l -5 20 l -20 5 l -15 -20 z',
        description: 'LafiaHMS SaaS Platform',
        projects: 'Architected enterprise SaaS: OpenMRS + OpenELIS + Odoo',
    },
    {
        id: 'south-america',
        name: 'South America',
        path: 'M 120 280 l 40 30 l 20 80 l -30 40 l -50 -60 z',
        description: 'Venevital Project',
        projects: 'Customized Bahmni-based HMIS',
    },
]

export function GlobalFootprintMap() {
    return (
        <section className="py-24 bg-blueprint-gray bg-blueprint-grid">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <p className="text-sm font-mono text-execution-orange mb-2 uppercase tracking-wider">
                        Global Presence
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                        The Global Footprint
                    </h2>
                    <p className="mt-4 text-foreground/60 max-w-2xl mx-auto">
                        Architecting health systems across continents—from Kathmandu to Kampala.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Map SVG */}
                    <div className="relative">
                        <svg
                            viewBox="0 0 800 400"
                            className="w-full h-auto"
                            role="img"
                            aria-label="World map highlighting Trigonal Technology's operational regions: Nepal, India, Middle East, and Africa"
                        >
                            {/* Background world shape - simplified */}
                            <defs>
                                <filter id="map-glow" x="-50%" y="-50%" width="200%" height="200%">
                                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                                    <feMerge>
                                        <feMergeNode in="coloredBlur" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                            </defs>

                            {/* Base map outline - simplified continents */}
                            <g className="fill-slate-200 stroke-slate-300" strokeWidth="0.5">
                                {/* Europe */}
                                <path d="M 380 80 l 60 20 l 40 -10 l 30 30 l -20 40 l -50 10 l -40 -30 l -30 -20 z" />
                                {/* Asia */}
                                <path d="M 500 60 l 100 30 l 80 50 l 20 80 l -60 50 l -100 -20 l -80 -60 l -20 -80 z" opacity="0.5" />
                                {/* Africa */}
                                <path d="M 380 180 l 80 20 l 30 100 l -20 80 l -70 20 l -60 -60 l -10 -100 z" opacity="0.5" />
                                {/* Americas */}
                                <path d="M 100 80 l 60 40 l 30 100 l -20 80 l -60 60 l -40 -80 l 10 -120 z" opacity="0.3" />
                                <path d="M 120 280 l 40 30 l 20 80 l -30 40 l -50 -60 z" opacity="0.3" />
                            </g>

                            {/* Highlighted regions */}
                            {regions.map((region) => (
                                <g key={region.id}>
                                    <path
                                        d={region.path}
                                        className={`transition-all duration-300 cursor-pointer ${region.highlight
                                            ? 'fill-execution-orange stroke-execution-orange'
                                            : 'fill-precision-blue stroke-precision-blue'
                                            }`}
                                        strokeWidth="2"
                                        filter="url(#map-glow)"
                                        role="button"
                                        aria-label={`${region.name}: ${region.description}. Projects: ${region.projects}`}
                                        tabIndex={0}
                                    />
                                    {/* Pulse animation for active regions */}
                                    <circle
                                        cx={region.id === 'nepal' ? 585 : region.id === 'india' ? 570 : region.id === 'middle-east' ? 490 : region.id === 'africa-west' ? 370 : region.id === 'south-america' ? 140 : 455}
                                        cy={region.id === 'nepal' ? 188 : region.id === 'india' ? 220 : region.id === 'middle-east' ? 190 : region.id === 'africa-west' ? 225 : region.id === 'south-america' ? 320 : 275}
                                        r="6"
                                        className={`animate-pulse ${region.highlight ? 'fill-execution-orange' : 'fill-precision-blue'}`}
                                    />
                                </g>
                            ))}

                            {/* Connection lines */}
                            <g className="stroke-precision-blue/30" strokeWidth="1" strokeDasharray="4,4">
                                <path d="M 585 188 Q 550 180 490 190" fill="none" />
                                <path d="M 585 188 L 570 220" fill="none" />
                                <path d="M 455 275 Q 480 230 490 190" fill="none" />
                            </g>
                        </svg>
                    </div>

                    {/* Region Cards */}
                    <div className="space-y-4">
                        {regions.map((region) => (
                            <div
                                key={region.id}
                                className={`p-5 rounded-xl border transition-all duration-300 ${region.highlight
                                    ? 'bg-execution-orange/5 border-execution-orange/30 shadow-md'
                                    : 'bg-white border-slate-200 shadow-sm hover:shadow-md'
                                    }`}
                            >
                                <div className="flex items-start justify-between">
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className={`w-3 h-3 rounded-full ${region.highlight ? 'bg-execution-orange' : 'bg-precision-blue'
                                                }`} />
                                            <h3 className="font-bold text-foreground">{region.name}</h3>
                                            {region.highlight && (
                                                <span className="px-2 py-0.5 bg-execution-orange/20 text-execution-orange text-xs font-mono rounded">
                                                    Pro-Bono
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-sm text-foreground/60 mb-2">{region.description}</p>
                                        <p className="text-sm font-medium text-precision-blue">{region.projects}</p>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* SSUUBO Call-out */}
                        <div className="mt-6 p-6 bg-execution-orange/10 rounded-xl border-2 border-execution-orange/30">
                            <h4 className="font-bold text-foreground mb-2">🇺🇬 SSUUBO Uganda Project</h4>
                            <p className="text-sm text-foreground/70 mb-3">
                                Our pro-bono commitment to non-profit healthcare. Pro-bono FHIR R4 resource mapping
                                and OpenMRS implementation support for rural health facilities in Uganda.
                            </p>
                            <p className="font-mono text-xs text-execution-orange">
                                Healthcare has no borders. Neither does our commitment.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
