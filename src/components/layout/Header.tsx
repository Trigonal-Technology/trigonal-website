'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, FileText, Wrench, Shield, MapPin, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'
// ThemeSwitcher removed - forced to Light Blueprint mode

const navLinks = [
    { href: '/solutions', label: 'Solutions' },
    { href: '/architecture', label: 'Architecture' },
    { href: '/about', label: 'About Us' },
]

const resourcesPillars = [
    {
        href: '/manifesto',
        label: 'The Manifesto',
        dnaTag: '[CULTURAL_CODE]',
        icon: FileText,
        description: 'The engineering culture and principles we live by.',
        color: 'text-blue-400'
    },
    {
        href: '/case-studies/lab-bridge',
        label: 'Case Studies',
        dnaTag: '[ANALYSIS | DEPLOYMENT]',
        icon: Wrench,
        description: 'Technical deep-dives: Lab-Bridge, NidanEHR, OpenHIE Spine.',
        color: 'text-orange-400'
    },
    {
        href: '/resources/blueprints',
        label: 'Documentation',
        dnaTag: '[ARCH | SCHEMATICS]',
        icon: Shield,
        description: 'FHIR R4 mapping, Odoo 18 ERP, OpenHIE architecture.',
        color: 'text-green-400'
    }
]

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isResourcesOpen, setIsResourcesOpen] = useState(false)
    const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false)

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
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 rounded-md transition-colors hover:bg-slate-100"
                            >
                                {link.label}
                            </Link>
                        ))}

                        {/* Resources Mega Menu */}
                        <div
                            className="relative"
                            onMouseEnter={() => setIsResourcesOpen(true)}
                            onMouseLeave={() => setIsResourcesOpen(false)}
                        >
                            <button
                                className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 rounded-md transition-colors hover:bg-slate-100 flex items-center gap-1"
                                aria-expanded={isResourcesOpen}
                            >
                                Resources
                                <ChevronDown className={cn("w-4 h-4 transition-transform", isResourcesOpen && "rotate-180")} />
                            </button>

                            {/* The Connecting Spine */}
                            <AnimatePresence>
                                {isResourcesOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: '16px', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.15, ease: "easeInOut" }}
                                        className="absolute left-1/2 -translate-x-1/2 top-full w-px bg-precision-blue"
                                        style={{ transformOrigin: 'top' }}
                                    />
                                )}
                            </AnimatePresence>

                            <AnimatePresence>
                                {isResourcesOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-screen max-w-4xl"
                                    >
                                        <div className="bg-white border border-slate-200 rounded-lg shadow-xl p-6"
                                            style={{
                                                backgroundImage: `
                                                    linear-gradient(rgba(30, 78, 155, 0.03) 1px, transparent 1px),
                                                    linear-gradient(90deg, rgba(30, 78, 155, 0.03) 1px, transparent 1px)
                                                `,
                                                backgroundSize: '20px 20px'
                                            }}
                                        >
                                            <div className="grid grid-cols-2 gap-4">
                                                {resourcesPillars.map((pillar) => {
                                                    const Icon = pillar.icon;
                                                    return (
                                                        <Link
                                                            key={pillar.href}
                                                            href={pillar.href}
                                                            className="group p-4 rounded-lg border border-slate-200 bg-white/50 hover:bg-white hover:border-slate-300 transition-all duration-200"
                                                            onClick={() => setIsResourcesOpen(false)}
                                                        >
                                                            <div className="flex items-start gap-3">
                                                                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center group-hover:animate-pulse transition-all">
                                                                    <Icon className={cn("w-5 h-5 transition-colors", pillar.color, "group-hover:text-precision-blue")} />
                                                                </div>
                                                                <div className="flex-1">
                                                                    <span className="font-mono text-[10px] text-slate-500 group-hover:text-precision-blue transition-colors block mb-0.5">
                                                                        {pillar.dnaTag}
                                                                    </span>
                                                                    <h3 className="text-sm font-semibold text-slate-900 mb-1 transition-colors">
                                                                        {pillar.label}
                                                                    </h3>
                                                                    <p className="text-xs text-slate-600 leading-relaxed font-mono">
                                                                        {pillar.description}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    );
                                                })}
                                            </div>
                                            <div className="mt-4 pt-4 border-t border-slate-200">
                                                <Link
                                                    href="/resources"
                                                    className="text-xs font-mono text-precision-blue hover:text-precision-blue/80 transition-colors flex items-center gap-2"
                                                    onClick={() => setIsResourcesOpen(false)}
                                                >
                                                    View All Resources →
                                                </Link>
                                            </div>
                                        </div>
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
                                            {resourcesPillars.map((pillar) => {
                                                const Icon = pillar.icon;
                                                return (
                                                    <Link
                                                        key={pillar.href}
                                                        href={pillar.href}
                                                        className="flex items-center gap-3 px-4 py-2 text-sm text-foreground/70 hover:text-foreground hover:bg-blueprint-line/30 rounded-md transition-colors group"
                                                        onClick={() => {
                                                            setIsMobileMenuOpen(false);
                                                            setIsMobileResourcesOpen(false);
                                                        }}
                                                    >
                                                        <Icon className={cn("w-4 h-4", pillar.color)} />
                                                        <div className="flex flex-col">
                                                            <span className="font-mono text-[9px] text-slate-500 group-hover:text-precision-blue">
                                                                {pillar.dnaTag}
                                                            </span>
                                                            {pillar.label}
                                                        </div>
                                                    </Link>
                                                );
                                            })}
                                            <Link
                                                href="/resources"
                                                className="flex items-center gap-3 px-4 py-2 text-sm text-execution-orange hover:text-execution-orange/80 rounded-md transition-colors font-mono"
                                                onClick={() => {
                                                    setIsMobileMenuOpen(false);
                                                    setIsMobileResourcesOpen(false);
                                                }}
                                            >
                                                View All →
                                            </Link>
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
