'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Menu, X, ChevronDown, 
  Server, CreditCard, Activity, Scan, BrainCircuit, Smartphone, // Platform Icons
  FileText, Shield // Resource Icons
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

// 1. DEFINE THE PLATFORMS (The Engines)
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
    desc: 'Diagnostic Middleware',
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
  }
];

// 2. DEFINE RESOURCES (The Evidence)
const resourcesPillars = [
    {
        href: '/resources/case-studies',
        label: 'Mission Logs',
        dnaTag: '[FIELD_REPORTS]',
        icon: FileText,
        description: 'Engineering case studies from Parbat, Lafia, and beyond.',
        color: 'text-orange-400'
    },
    {
        href: '/manifesto',
        label: 'The Manifesto',
        dnaTag: '[CULTURAL_CODE]',
        icon: Shield,
        description: 'Our core philosophy: Build with Fire.',
        color: 'text-blue-400'
    }
]

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [openDropdown, setOpenDropdown] = useState<string | null>(null)

    return (
        <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 relative">
                            <img src="/logos/trigonal.webp" alt="Trigonal" className="w-full h-full object-contain" />
                        </div>
                        <span className="font-bold text-lg tracking-tight transition-colors" style={{ color: '#1e4e9b' }}>
                            TRIGONAL<span className="text-slate-600 font-normal"> TECHNOLOGY</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-2">
                        
                        {/* 1. PLATFORMS DROPDOWN */}
                        <div 
                            className="relative"
                            onMouseEnter={() => setOpenDropdown('platforms')}
                            onMouseLeave={() => setOpenDropdown(null)}
                        >
                            <button className="px-4 py-2 text-sm font-bold text-slate-700 hover:text-blue-600 flex items-center gap-1 transition-colors">
                                PLATFORMS <ChevronDown className="w-4 h-4" />
                            </button>
                            
                            <AnimatePresence>
                                {openDropdown === 'platforms' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white border border-slate-200 shadow-xl rounded-xl p-4 grid grid-cols-2 gap-2"
                                    >
                                        {platformLinks.map((item) => (
                                            <Link 
                                                key={item.href} 
                                                href={item.href}
                                                className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group"
                                            >
                                                <div className={`mt-1 p-1.5 bg-slate-100 rounded group-hover:bg-white group-hover:shadow-sm transition-all`}>
                                                    <item.icon className={`w-5 h-5 ${item.color}`} />
                                                </div>
                                                <div>
                                                    <div className="font-bold text-slate-900 text-sm group-hover:text-blue-600">
                                                        {item.title}
                                                    </div>
                                                    <div className="text-xs text-slate-500 font-medium">
                                                        {item.desc}
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* 2. SIMPLE LINKS */}
                        <Link href="/architecture" className="px-4 py-2 text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors">
                            ARCHITECTURE
                        </Link>

                        {/* 3. RESOURCES DROPDOWN */}
                        <div 
                            className="relative"
                            onMouseEnter={() => setOpenDropdown('resources')}
                            onMouseLeave={() => setOpenDropdown(null)}
                        >
                            <button className="px-4 py-2 text-sm font-bold text-slate-700 hover:text-blue-600 flex items-center gap-1 transition-colors">
                                RESOURCES <ChevronDown className="w-4 h-4" />
                            </button>

                            <AnimatePresence>
                                {openDropdown === 'resources' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute top-full right-0 w-[400px] bg-white border border-slate-200 shadow-xl rounded-xl p-4 grid gap-2"
                                    >
                                        {resourcesPillars.map((item) => (
                                            <Link 
                                                key={item.href} 
                                                href={item.href}
                                                className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group"
                                            >
                                                <div className="mt-1 p-1.5 bg-slate-100 rounded group-hover:bg-white group-hover:shadow-sm transition-all">
                                                    <item.icon className={`w-5 h-5 ${item.color}`} />
                                                </div>
                                                <div>
                                                    <div className="font-bold text-slate-900 text-sm group-hover:text-blue-600">
                                                        {item.label}
                                                    </div>
                                                    <div className="text-xs text-slate-500 font-mono mt-1">
                                                        {item.dnaTag}
                                                    </div>
                                                    <p className="text-xs text-slate-400 mt-1">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link href="/about" className="px-4 py-2 text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors">
                            ABOUT
                        </Link>
                    </div>

                    {/* CTA */}
                    <div className="hidden md:flex items-center gap-3">
                         <Link href="/consult" className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-lg transition-colors shadow-lg shadow-blue-600/20">
                            Consult an Architect
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle (Simplified) */}
                    <button
                        type="button"
                        className="md:hidden p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="md:hidden border-t border-slate-200 py-4">
                        <div className="flex flex-col gap-2">
                            {/* Mobile Platforms */}
                            <div className="px-4 py-2">
                                <div className="text-xs font-bold text-slate-500 uppercase mb-2">PLATFORMS</div>
                                <div className="space-y-1">
                                    {platformLinks.map((item) => (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className="flex items-center gap-3 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-md"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            <item.icon className={`w-4 h-4 ${item.color}`} />
                                            <div>
                                                <div className="font-bold">{item.title}</div>
                                                <div className="text-xs text-slate-500">{item.desc}</div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Mobile Simple Links */}
                            <Link
                                href="/architecture"
                                className="px-4 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                ARCHITECTURE
                            </Link>

                            {/* Mobile Resources */}
                            <div className="px-4 py-2">
                                <div className="text-xs font-bold text-slate-500 uppercase mb-2">RESOURCES</div>
                                <div className="space-y-1">
                                    {resourcesPillars.map((item) => (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className="flex items-center gap-3 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-md"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            <item.icon className={`w-4 h-4 ${item.color}`} />
                                            <div>
                                                <div className="font-bold">{item.label}</div>
                                                <div className="text-xs text-slate-500">{item.dnaTag}</div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <Link
                                href="/about"
                                className="px-4 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                ABOUT
                            </Link>

                            <Link
                                href="/consult"
                                className="mx-4 mt-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-lg text-center"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Consult an Architect
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}
