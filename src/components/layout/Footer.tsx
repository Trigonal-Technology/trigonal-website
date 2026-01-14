import Link from 'next/link'
import { Flame } from 'lucide-react'

const footerLinks = {
    Product: [
        { href: '/product', label: 'Overview' },
        { href: '/nidanehr', label: 'NidanEHR' },
        { href: '/interoperability', label: 'Interoperability' },
    ],
    Solutions: [
        { href: '/solutions', label: 'Healthcare' },
        { href: '/architecture', label: 'Architecture' },
        { href: '/compliance', label: 'Compliance' },
    ],
    Resources: [
        { href: '/privacy', label: 'Privacy Policy' },
        { href: '/security', label: 'Security Policy' },
    ],
    Company: [
        { href: '/about', label: 'About Us' },
        { href: '/open-source', label: 'Open Source' },
    ],
}

export function Footer() {
    return (
        <footer className="bg-blueprint-gray border-t border-slate-200">
            {/* FIRE Banner - Solid precision-blue background */}
            <div className="bg-[#1E4E9B] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="py-10 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-3">
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
                        <div className="text-lg font-semibold">
                            Deployed. Running. Trusted.
                        </div>
                        <div className="flex items-center gap-4">
                            <Link
                                href="/nidanehr"
                                className="px-6 py-3 bg-execution-orange text-white font-semibold rounded-md hover:bg-execution-orange/90 transition-colors shadow-lg"
                            >
                                Explore NidanEHR
                            </Link>
                            <Link
                                href="/consult"
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
                    <div className="col-span-2 md:col-span-1">
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
                            <Link href="/privacy" className="hover:text-foreground transition-colors">
                                Privacy
                            </Link>
                            <Link href="/security" className="hover:text-foreground transition-colors">
                                Security
                            </Link>
                            <Link href="/open-source" className="hover:text-foreground transition-colors">
                                Open Source
                            </Link>
                        </div>
                    </div>

                    {/* Link Columns */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h3 className="font-semibold text-foreground mb-4">{category}</h3>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-foreground/60 hover:text-foreground transition-colors"
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
                    <p className="text-center text-sm text-foreground/50">
                        © {new Date().getFullYear()} Trigonal Technology Pvt. Ltd. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
