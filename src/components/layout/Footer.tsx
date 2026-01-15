import Link from 'next/link'

const footerLinks = [
    {
        title: '[01_PLATFORMS]',
        links: [
            { href: '/nidanehr', label: 'NidanEHR' },
            { href: '/solutions', label: 'Interoperability Spine' },
            { href: '/solutions', label: 'Lab-Bridge' },
        ],
    },
    {
        title: '[02_EXPERTISE]',
        links: [
            { href: '/architecture', label: 'System Architecture' },
            { href: '/solutions', label: 'Fiscal Integrity' },
            { href: '/solutions', label: 'Health Intelligence' },
        ],
    },
    {
        title: '[03_RESOURCES]',
        links: [
            { href: '/resources/manifesto', label: 'The Manifesto' },
            { href: '/resources/case-studies', label: 'Case Studies' },
            { href: '/resources/blueprints', label: 'Documentation' },
        ],
    },
]

export function Footer() {
    return (
        <footer className="relative z-50 bg-white border-t border-slate-200 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]">
            {/* FIRE Banner - Solid precision-blue background */}
            <div className="bg-[#1E4E9B] text-white">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
                    <div className="py-10 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-3 flex-none">
                            <div className="w-8 h-8 relative">
                                <img
                                    src="/logos/trigonal.webp"
                                    alt="FIRE"
                                    className="w-full h-full object-contain brightness-0 invert"
                                />
                            </div>
                            <span className="text-xl font-bold tracking-wide">
                                TRIGONAL: We BUILD with FIRE.
                            </span>
                        </div>
                        <div className="text-lg font-semibold flex-1 text-center">
                            AI-Powered. Precision-Built. Health-Engineered.
                        </div>
                        <div className="flex items-center gap-4 flex-none">
                            <Link
                                href="/nidanehr"
                                className="px-6 py-3 bg-execution-orange text-white font-semibold rounded-md hover:bg-execution-orange/90 transition-colors shadow-lg"
                            >
                                Explore NidanEHR
                            </Link>
                            <Link
                                href="/#consult-console"
                                className="px-6 py-3 border-2 border-white/40 text-white font-semibold rounded-md hover:bg-white/10 transition-colors"
                            >
                                Consult an Architect
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                    {/* Company Info */}
                    <div className="col-span-2 md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 relative">
                                <img
                                    src="/logos/trigonal.webp"
                                    alt="Trigonal Technology"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <span className="font-bold text-xl text-precision-blue">TRIGONAL</span>
                        </div>
                        <p className="text-sm text-foreground/70 mb-2">
                            Trigonal Technology Pvt. Ltd.
                        </p>
                        <p className="text-sm text-foreground/60">
                            Pioneering interoperable digital health systems across Nepal, India, Middle East, and Africa since 2022.
                        </p>
                        <div className="flex gap-4 mt-6 text-xs text-foreground/60">
                            <Link href="/privacy" className="hover:underline decoration-precision-blue decoration-1 underline-offset-4">
                                Privacy
                            </Link>
                            <Link href="/security" className="hover:underline decoration-precision-blue decoration-1 underline-offset-4">
                                Security
                            </Link>
                            <Link href="/open-source" className="hover:underline decoration-precision-blue decoration-1 underline-offset-4">
                                Open Source
                            </Link>
                        </div>
                    </div>

                    {/* Link Columns */}
                    {footerLinks.map((column) => (
                        <div key={column.title}>
                            <h3 className="font-mono text-xs uppercase tracking-wider text-slate-600 mb-4">
                                {column.title}
                            </h3>
                            <ul className="space-y-3">
                                {column.links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-foreground/70 hover:underline decoration-precision-blue decoration-1 underline-offset-4"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <p className="text-center text-xs text-foreground/50 font-mono mb-2">
                        [STATUS: DEPLOYED. RUNNING. TRUSTED.]
                    </p>
                    <p className="text-center text-sm text-foreground/50">
                        © {new Date().getFullYear()} Trigonal Technology Pvt. Ltd. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
