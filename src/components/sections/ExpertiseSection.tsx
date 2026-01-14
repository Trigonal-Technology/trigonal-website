import { Network, Building2, Brain, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import servicesData from '@/mocks/services.json'

const iconMap = {
    Network: Network,
    Building2: Building2,
    Brain: Brain
}

export function ExpertiseSection() {
    return (
        <section className="py-24 bg-blueprint-gray bg-blueprint-grid">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="max-w-3xl mb-16">
                    <p className="text-sm font-mono text-execution-orange mb-2 uppercase tracking-wider">
                        Our Expertise
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                        Engineering Health Infrastructure at Scale
                    </h2>
                    <p className="text-foreground/60 leading-relaxed">
                        We specialize in three core domains that together enable comprehensive digital health transformation-from architecture design to production deployment.
                    </p>
                </div>

                {/* Services Triple-Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {servicesData.services.map((service) => {
                        const IconComponent = iconMap[service.icon as keyof typeof iconMap]
                        return (
                            <div
                                key={service.id}
                                className="group bg-white rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-lg hover:border-precision-blue/30 transition-all duration-300"
                            >
                                {/* Icon */}
                                <div className="w-14 h-14 rounded-xl bg-precision-blue/10 flex items-center justify-center mb-6 group-hover:bg-precision-blue/20 transition-colors">
                                    <IconComponent className="w-7 h-7 text-precision-blue" />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-foreground mb-3">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-foreground/60 text-sm leading-relaxed mb-6">
                                    {service.description}
                                </p>

                                {/* Features */}
                                <ul className="space-y-2 mb-6">
                                    {service.features.slice(0, 3).map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm text-foreground/70">
                                            <span className="w-1.5 h-1.5 bg-execution-orange rounded-full mt-1.5 flex-shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* Compliance Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {service.compliance.slice(0, 2).map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="px-2 py-1 bg-slate-100 text-xs font-mono text-foreground/60 rounded border border-slate-200"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Experience Badge */}
                                <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
                                    <span className="text-xs font-mono text-foreground/50">
                                        {service.experience}
                                    </span>
                                    <Link
                                        href={`/services/${service.id}`}
                                        className="inline-flex items-center text-sm text-execution-orange font-medium group-hover:gap-2 transition-all"
                                    >
                                        Learn more
                                        <ChevronRight className="w-4 h-4 ml-1" />
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
