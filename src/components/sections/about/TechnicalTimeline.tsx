const timelineEvents = [
    {
        year: '2017',
        title: 'Digital Health Domain Entry',
        description: 'Initial entry into the Digital Health domain; architecting first clinical data structures and EHR component development.',
        type: 'milestone' as const,
    },
    {
        year: '2018–2021',
        title: 'Regional Expansion',
        description: 'Expanding technical footprint across Nepal, India, and the Middle East. Deploying OpenMRS and Bahmni at scale.',
        locations: ['Nepal', 'India', 'Middle East'],
        type: 'expansion' as const,
    },
    {
        year: 'Nov 2022',
        title: 'Trigonal Technology Founded',
        description: 'Established to provide high-integrity engineering for the Global South. Headquartered in Kathmandu, Nepal.',
        highlight: true,
        type: 'founding' as const,
    },
    {
        year: '2023–Present',
        title: 'African Markets & Social Impact',
        description: 'Expansion into African markets (Uganda, Kenya) and launch of the SSUUBO Uganda Pro-Bono Initiative.',
        locations: ['Uganda', 'Kenya'],
        type: 'impact' as const,
    },
]

export function TechnicalTimeline() {
    return (
        <section className="py-24 bg-blueprint-gray bg-blueprint-grid">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <p className="text-sm font-mono text-execution-orange mb-2 uppercase tracking-wider">
                        Our Journey
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                        A Decade of Digital Health
                    </h2>
                    <p className="mt-4 text-foreground/60 max-w-2xl mx-auto">
                        From architecting clinical data structures to deploying enterprise health systems across four continents.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-precision-blue via-execution-orange to-precision-blue transform md:-translate-x-1/2 rounded-full" />

                    {/* Timeline events */}
                    <div className="space-y-12" role="list" aria-label="Company timeline">
                        {timelineEvents.map((event, index) => (
                            <div
                                key={event.year}
                                className={`relative flex items-start gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                                role="listitem"
                                aria-label={`${event.year}: ${event.title}`}
                            >
                                {/* Timeline node */}
                                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                                    <div className={`w-5 h-5 rounded-full border-4 border-white shadow-lg ${event.highlight ? 'bg-execution-orange ring-4 ring-execution-orange/20' :
                                            event.type === 'expansion' ? 'bg-precision-blue' :
                                                event.type === 'impact' ? 'bg-green-600' :
                                                    'bg-slate-400'
                                        }`} />
                                </div>

                                {/* Content card */}
                                <div className={`ml-20 md:ml-0 md:w-[calc(50%-3rem)] ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'
                                    }`}>
                                    <div className={`bg-white rounded-xl p-6 border shadow-sm hover:shadow-md transition-shadow ${event.highlight ? 'border-execution-orange/30 shadow-md' : 'border-slate-200'
                                        }`}>
                                        {/* Year badge */}
                                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-mono font-bold mb-3 ${event.highlight
                                                ? 'bg-execution-orange text-white'
                                                : 'bg-precision-blue/10 text-precision-blue'
                                            }`}>
                                            {event.year}
                                        </span>

                                        {/* Title */}
                                        <h3 className="text-lg font-bold text-foreground mb-2">
                                            {event.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-foreground/60 text-sm mb-3">
                                            {event.description}
                                        </p>

                                        {/* Locations */}
                                        {event.locations && (
                                            <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                                                }`}>
                                                {event.locations.map((loc) => (
                                                    <span
                                                        key={loc}
                                                        className="px-2 py-0.5 bg-slate-100 text-foreground/60 text-xs font-mono rounded"
                                                    >
                                                        📍 {loc}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Spacer for opposite side */}
                                <div className="hidden md:block md:w-[calc(50%-3rem)]" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
