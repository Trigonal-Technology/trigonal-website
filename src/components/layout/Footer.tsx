'use client'; // Required for usePathname
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { shouldHideFooterBanner } from '@/config/page-config';

const footerLinks = [
    {
        title: '[01_PLATFORMS]',
        links: [
            { href: '/nidanehr', label: 'NidanEHR' },
            { href: '/solutions/fiscal-integrity', label: 'Fiscal Integrity' },
            { href: '/solutions/lab-bridge', label: 'Lab-Bridge' },
            { href: '/solutions/imaging', label: 'Imaging Core' },
            { href: '/solutions/intelligence', label: 'Health Intelligence' },
            { href: '/solutions/mobile', label: 'NidanPHR' },
        ],
    },
    {
        title: '[02_EXPERTISE]',
        links: [
            { href: '/architecture', label: 'System Architecture' },
            { href: '/solutions/fiscal-integrity', label: 'Fiscal Integrity' },
            { href: '/solutions', label: 'Health Intelligence' },
        ],
    },
    {
        title: '[03_RESOURCES]',
        links: [
            { href: '/resources/case-studies', label: 'Mission Logs (Case Studies)' },
            { href: '/manifesto', label: 'The Manifesto' },
            { href: '/resources/blueprints', label: 'Documentation' },
        ],
    },
    {
        title: '[04_NETWORK]',
        links: [
            { href: 'https://www.linkedin.com/company/trigonal-technology', label: 'Trigonal Engineering Log', external: true },
        ],
    },
];

export function Footer() {
    const pathname = usePathname();

    // HIDE BANNER LOGIC: Use centralized config from page-config.ts
    // This prevents double footers on pages with custom CTAs (e.g., Imaging, Intelligence, Mobile)
    const hideBanner = shouldHideFooterBanner(pathname);

    return (
        <footer className="relative z-50 bg-white border-t border-slate-200 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]">
            
            {/* CONDITIONAL RENDER: Only show this band if we are NOT on Home or Consult */}
            {!hideBanner && (
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
                            <div className="text-lg font-semibold flex-1 text-center hidden md:block">
                                AI-Powered. Precision-Built. Health-Engineered.
                            </div>
                            <div className="flex items-center gap-4 flex-none">
                                <Link
                                    href="/nidanehr"
                                    className="px-6 py-3 bg-orange-600 text-white font-semibold rounded-md hover:bg-orange-500 transition-colors shadow-lg"
                                >
                                    Explore NidanEHR
                                </Link>
                                <Link
                                    href="/consult?source=footer_global"
                                    className="px-6 py-3 border-2 border-white/40 text-white font-semibold rounded-md hover:bg-white/10 transition-colors"
                                >
                                    Consult an Architect
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
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
                        <p className="text-sm text-slate-600 mb-2">
                            Trigonal Technology Pvt. Ltd.
                        </p>
                        <p className="text-sm text-slate-500">
                            Pioneering interoperable digital health systems across Nepal, India, Middle East, and Africa since 2022.
                        </p>
                        <div className="flex gap-4 mt-6 text-xs text-slate-500">
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
                                        {'external' in link && link.external ? (
                                            <a
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm text-slate-500 hover:text-blue-600 transition-colors inline-flex items-center gap-1"
                                            >
                                                {link.label}
                                                <span className="text-[10px] opacity-50">↗</span>
                                            </a>
                                        ) : (
                                            <Link href={link.href} className="text-sm text-slate-500 hover:text-blue-600 transition-colors">
                                                {link.label}
                                            </Link>
                                        )}
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
                    <p className="text-center text-xs text-slate-400 font-mono mb-2">
                        [STATUS: DEPLOYED. RUNNING. TRUSTED.]
                    </p>
                    <p className="text-center text-sm text-slate-400">
                        © {new Date().getFullYear()} Trigonal Technology Pvt. Ltd. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
