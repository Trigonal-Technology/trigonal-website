import { Focus, ShieldCheck, Heart, Zap } from 'lucide-react'

const values = [
    {
        icon: Focus,
        letter: 'F',
        title: 'Focus',
        description: 'Single-minded pursuit of healthcare interoperability',
    },
    {
        icon: ShieldCheck,
        letter: 'I',
        title: 'Integrity',
        description: 'Transparent, honest, open-source aligned',
    },
    {
        icon: Heart,
        letter: 'R',
        title: 'Respect',
        description: 'Inclusive design, accessibility-first',
    },
    {
        icon: Zap,
        letter: 'E',
        title: 'Execution',
        description: 'Deployed. Running. Trusted.',
    },
]

export function FireProtocol() {
    return (
        <section className="py-24 bg-precision-blue text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        The <span className="text-execution-orange">FIRE</span> Protocol
                    </h2>
                    <p className="text-white/70 max-w-2xl mx-auto">
                        Our core values guide every decision, from architecture design to client relationships.
                    </p>
                </div>

                {/* Values Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((value, index) => (
                        <div
                            key={value.title}
                            className="relative bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:bg-white/15 transition-colors"
                        >
                            {/* Large Letter */}
                            <div className="absolute top-4 right-4 text-6xl font-bold text-white/10">
                                {value.letter}
                            </div>

                            {/* Icon */}
                            <div className="w-12 h-12 rounded-lg bg-execution-orange/20 flex items-center justify-center mb-4">
                                <value.icon className="w-6 h-6 text-execution-orange" />
                            </div>

                            {/* Content */}
                            <h3 className="font-semibold text-xl mb-2 relative z-10">
                                {value.title}
                            </h3>
                            <p className="text-white/70 text-sm relative z-10">
                                {value.description}
                            </p>

                            {/* Index number */}
                            <div className="mt-4 pt-4 border-t border-white/10">
                                <span className="font-mono text-xs text-white/40">
                                    0{index + 1}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer tagline */}
                <div className="mt-12 text-center">
                    <p className="text-2xl font-bold text-execution-orange">
                        FIRE = Focus + Integrity + Respect + Execution
                    </p>
                </div>
            </div>
        </section>
    )
}
