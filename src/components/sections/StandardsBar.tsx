/**
 * StandardsBar Component
 * Displays partner/standards logos with color and subtle hover effects
 */
import Image from 'next/image'

const standards = [
    { name: 'OpenMRS', logo: '/logos/openmrs.svg', description: 'Medical Record System' },
    { name: 'OpenELIS', logo: '/logos/openelis.png', description: 'Laboratory Information System' },
    { name: 'Odoo', logo: '/logos/odoo.svg', description: 'Enterprise Resource Planning' },
    { name: 'DHIS2', logo: '/logos/dhis2.svg', description: 'Health Information System' },
    { name: 'OpenHIE', logo: '/logos/openhie.png', description: 'Health Information Exchange' },
    { name: 'HL7 FHIR', logo: '/logos/hl7.png', description: 'Interoperability Standard' },
]

export function StandardsBar() {
    return (
        <section className="py-16 bg-white border-y border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-sm text-foreground/70 font-semibold uppercase tracking-wider mb-10">
                    Built on global open standards
                </p>

                <ul
                    role="list"
                    aria-label="Technology partners and standards"
                    className="flex flex-wrap justify-center items-center gap-10 md:gap-14"
                >
                    {standards.map((standard) => (
                        <li
                            key={standard.name}
                            className="group transition-transform duration-200 hover:scale-110"
                        >
                            <div className="flex flex-col items-center gap-2">
                                <Image
                                    src={standard.logo}
                                    alt={`${standard.name} logo`}
                                    width={120}
                                    height={48}
                                    className="h-10 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                                    aria-label={`${standard.name}: ${standard.description}`}
                                />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
