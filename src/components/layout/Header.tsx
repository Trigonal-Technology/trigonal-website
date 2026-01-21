'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, FileText, Wrench, Shield, MapPin, ChevronDown, Server, CreditCard, Activity, Globe, Eye, BrainCircuit, Smartphone, Scan, BookOpen, ScrollText } from 'lucide-react'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'
// ThemeSwitcher removed - forced to Light Blueprint mode

// Platform Links for Dropdown
const platformLinks = [
    {
        href: '/nidanehr',
        title: 'NidanEHR',
        desc: 'The Sovereign Hospital OS',
        icon: Server,
        color: 'text-blue-600'
    },
    {
        href: '/solutions/fiscal-integrity',
        title: 'Fiscal Integrity',
        desc: 'Odoo 19 Revenue Engine',
        icon: CreditCard,
        color: 'text-orange-600'
    },
    {
        href: '/solutions/lab-bridge',
        title: 'Lab-Bridge',
        desc: 'Universal Diagnostic Middleware',
        icon: Activity,
        color: 'text-purple-600'
    },
    {
        href: '/solutions/imaging',
        title: 'Imaging Core',
        desc: 'Sovereign PACS Archive',
        icon: Scan,
        color: 'text-pink-600'
    },
    {
        href: '/solutions/intelligence',
        title: 'Health Intelligence',
        desc: 'DHIS2 & Analytics',
        icon: BrainCircuit,
        color: 'text-indigo-600'
    },
    {
        href: '/solutions/mobile',
        title: 'NidanPHR',
        desc: 'Patient Mobile App',
        icon: Smartphone,
        color: 'text-blue-500'
    },
    {
        href: '/architecture',
        title: 'Interoperability Spine',
        desc: 'National Health Grid Gateway',
        icon: Globe,
        color: 'text-indigo-600'
    }
];

const navLinks = [
    { href: '/architecture', label: 'Architecture' },
    { href: '/about', label: 'About Us' },
]

// Resource Links for Dropdown
const resourceLinks = [
    {
        href: '/resources/case-studies',
        title: 'Mission Logs',
        desc: 'Engineering Case Studies & Field Reports',
        icon: FileText,
        color: 'text-emerald-600'
    },
    {
        href: '/manifesto',
        title: 'The Manifesto',
        desc: 'Our Core Philosophy: Build with Fire',
        icon: ScrollText,
        color: 'text-orange-600'
    },
    {
        href: '/resources/blueprints',
        title: 'System Blueprints',
        desc: 'Technical Architecture References',
        icon: BookOpen,
        color: 'text-blue-600'
    }
];

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isResourcesOpen, setIsResourcesOpen] = useState(false)
    const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false)
    const [isPlatformsOpen, setIsPlatformsOpen] = useState(false)
    const [isMobilePlatformsOpen, setIsMobilePlatformsOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 relative">
                            <img
                                src="/logos/trigonal.webp"
                                alt="Trigonal Technology"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <span className="font-bold text-lg text-precision-blue tracking-tight">
                            TRIGONAL<span className="text-slate-700 font-normal"> TECHNOLOGY</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {/* Platforms Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setIsPlatformsOpen(true)}
                            onMouseLeave={() => setIsPlatformsOpen(false)}
                        >
                            <button
                                className="px-4 py-2 text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors flex items-center gap-1 rounded-md hover:bg-slate-100"
                                aria-expanded={isPlatformsOpen}
                            >
                                PLATFORMS
                                <ChevronDown className={cn("w-4 h-4 transition-transform", isPlatformsOpen && "rotate-180")} />
                            </button>

                            {/* The Dropdown Panel */}
                            <AnimatePresence>
                                {isPlatformsOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-1/2 -translate-x-1/2 w-[380px] bg-white border border-slate-200 shadow-xl rounded-xl p-3 grid gap-1 mt-2"
                                    >
                                        {platformLinks.map((item) => {
                                            const Icon = item.icon;
                                            return (
                                                <Link
                                                    key={item.href}
                                                    href={item.href}
                                                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group/item"
                                                    onClick={() => setIsPlatformsOpen(false)}
                                                >
                                                    <div className="mt-1 p-1.5 bg-slate-100 rounded group-hover/item:bg-white group-hover/item:shadow-sm transition-all">
                                                        <Icon className={cn("w-5 h-5", item.color)} />
                                                    </div>
                                                    <div>
                                                        <div className="font-bold text-slate-900 text-sm group-hover/item:text-blue-600 transition-colors">
                                                            {item.title}
                                                        </div>
                                                        <div className="text-xs text-slate-500 font-medium">
                                                            {item.desc}
                                                        </div>
                                                    </div>
                                                </Link>
                                            );
                                        })}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 rounded-md transition-colors hover:bg-slate-100"
                            >
                                {link.label}
                            </Link>
                        ))}

                        {/* Resources Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setIsResourcesOpen(true)}
                            onMouseLeave={() => setIsResourcesOpen(false)}
                        >
                            <button
                                className="px-4 py-2 text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors flex items-center gap-1 rounded-md hover:bg-slate-100"
                                aria-expanded={isResourcesOpen}
                            >
                                RESOURCES
                                <ChevronDown className={cn("w-4 h-4 transition-transform", isResourcesOpen && "rotate-180")} />
                            </button>

                            {/* The Dropdown Panel */}
                            <AnimatePresence>
                                {isResourcesOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full right-0 w-[380px] bg-white border border-slate-200 shadow-xl rounded-xl p-3 grid gap-1 mt-2"
                                    >
                                        {resourceLinks.map((item) => {
                                            const Icon = item.icon;
                                            return (
                                                <Link
                                                    key={item.href}
                                                    href={item.href}
                                                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group/item"
                                                    onClick={() => setIsResourcesOpen(false)}
                                                >
                                                    <div className="mt-1 p-1.5 bg-slate-100 rounded group-hover/item:bg-white group-hover/item:shadow-sm transition-all">
                                                        <Icon className={cn("w-5 h-5", item.color)} />
                                                    </div>
                                                    <div>
                                                        <div className="font-bold text-slate-900 text-sm group-hover/item:text-blue-600 transition-colors">
                                                            {item.title}
                                                        </div>
                                                        <div className="text-xs text-slate-500 font-medium">
                                                            {item.desc}
                                                        </div>
                                                    </div>
                                                </Link>
                                            );
                                        })}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Theme Switcher & CTA Button */}
                    <div className="hidden md:flex items-center gap-3">
                        {/* TODO: Fix theme switcher rendering issue - currently commented out, light mode forced */}
                        {/* <ThemeSwitcher /> */}
                        <Link
                            href="/nidanehr"
                            className="btn-primary text-sm"
                        >
                            Explore NidanEHR
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        type="button"
                        className="md:hidden p-2 rounded-md text-foreground/80 hover:text-foreground hover:bg-blueprint-line/30"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-expanded={isMobileMenuOpen}
                        aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                    >
                        {isMobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div
                    className={cn(
                        'md:hidden overflow-hidden transition-all duration-300 ease-in-out',
                        isMobileMenuOpen ? 'max-h-[600px] pb-4' : 'max-h-0'
                    )}
                >
                    <div className="flex flex-col gap-1 pt-2">
                        {/* Mobile Platforms Menu */}
                        <div>
                            <button
                                onClick={() => setIsMobilePlatformsOpen(!isMobilePlatformsOpen)}
                                className="w-full px-4 py-3 text-sm font-bold text-foreground/80 hover:text-foreground rounded-md transition-colors hover:bg-blueprint-line/30 flex items-center justify-between"
                            >
                                PLATFORMS
                                <ChevronDown className={cn("w-4 h-4 transition-transform", isMobilePlatformsOpen && "rotate-180")} />
                            </button>

                            <AnimatePresence>
                                {isMobilePlatformsOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pl-4 py-2 space-y-1">
                                            {platformLinks.map((platform) => {
                                                const Icon = platform.icon;
                                                return (
                                                    <Link
                                                        key={platform.href}
                                                        href={platform.href}
                                                        className="flex items-center gap-3 px-4 py-2 text-sm text-foreground/70 hover:text-foreground hover:bg-blueprint-line/30 rounded-md transition-colors group"
                                                        onClick={() => {
                                                            setIsMobileMenuOpen(false);
                                                            setIsMobilePlatformsOpen(false);
                                                        }}
                                                    >
                                                        <Icon className={cn("w-4 h-4", platform.color)} />
                                                        <div className="flex flex-col">
                                                            <span className="font-bold">{platform.title}</span>
                                                            <span className="text-xs text-slate-500">{platform.desc}</span>
                                                        </div>
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="px-4 py-3 text-sm font-medium text-foreground/80 hover:text-foreground rounded-md transition-colors hover:bg-blueprint-line/30"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}

                        {/* Mobile Resources Menu */}
                        <div>
                            <button
                                onClick={() => setIsMobileResourcesOpen(!isMobileResourcesOpen)}
                                className="w-full px-4 py-3 text-sm font-medium text-foreground/80 hover:text-foreground rounded-md transition-colors hover:bg-blueprint-line/30 flex items-center justify-between"
                            >
                                Resources
                                <ChevronDown className={cn("w-4 h-4 transition-transform", isMobileResourcesOpen && "rotate-180")} />
                            </button>

                            <AnimatePresence>
                                {isMobileResourcesOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pl-4 py-2 space-y-1">
                                            {resourceLinks.map((resource) => {
                                                const Icon = resource.icon;
                                                return (
                                                    <Link
                                                        key={resource.href}
                                                        href={resource.href}
                                                        className="flex items-center gap-3 px-4 py-2 text-sm text-foreground/70 hover:text-foreground hover:bg-blueprint-line/30 rounded-md transition-colors group"
                                                        onClick={() => {
                                                            setIsMobileMenuOpen(false);
                                                            setIsMobileResourcesOpen(false);
                                                        }}
                                                    >
                                                        <Icon className={cn("w-4 h-4", resource.color)} />
                                                        <div className="flex flex-col">
                                                            <span className="font-bold">{resource.title}</span>
                                                            <span className="text-xs text-slate-500">{resource.desc}</span>
                                                        </div>
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link
                            href="/nidanehr"
                            className="btn-primary text-sm text-center mt-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Explore NidanEHR
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}
