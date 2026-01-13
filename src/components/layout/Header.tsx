'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
    { href: '/solutions', label: 'Solutions' },
    { href: '/architecture', label: 'Architecture' },
    { href: '/resources', label: 'Resources' },
    { href: '/about', label: 'About Us' },
]

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 bg-blueprint-gray/95 backdrop-blur-sm border-b border-blueprint-line">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 relative">
                            <img
                                src="/favicon.svg"
                                alt="Trigonal Technology"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <span className="font-bold text-lg text-precision-blue tracking-tight">
                            TRIGONAL<span className="text-foreground opacity-60 font-normal"> TECHNOLOGY</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground rounded-md transition-colors hover:bg-blueprint-line/30"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
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
                        isMobileMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'
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
