'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';

export function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    // Navigation links in Title Case per spec
    const navLinks = [
        { label: 'Home', href: '/' },
        { label: 'Projects', href: '/projects' },
        { label: 'Beyond Tech', href: '#beyond-tech' },
        { label: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            style={{
                position: 'sticky',
                top: 0,
                zIndex: 50,
                width: '100%',
                backgroundColor: 'hsl(var(--background))',
                borderBottom: `2.5px solid hsl(var(--foreground))`,
                boxShadow: 'var(--shadow-neo)',
            }}
            className="w-full"
        >
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo/Home Link */}
                <Link
                    href="/"
                    className="font-heading font-bold text-lg"
                    style={{ color: 'hsl(var(--foreground))' }}
                >
                    ND
                </Link>

                {/* Desktop Nav Links */}
                <div className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="font-heading text-sm font-medium transition-opacity hover:opacity-70"
                            style={{ color: 'hsl(var(--foreground))' }}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Right: Theme Toggle + Mobile Menu Button */}
                <div className="flex items-center gap-6">
                    <ThemeToggle />

                    {/* Mobile Menu Button - Fixed spacing */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden p-2 border-2"
                        style={{
                            borderColor: 'hsl(var(--foreground))',
                            backgroundColor: 'transparent',
                            color: 'hsl(var(--foreground))',
                            minWidth: '44px',
                            minHeight: '44px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? (
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        ) : (
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <line x1="3" y1="12" x2="21" y2="12" />
                                <line x1="3" y1="18" x2="21" y2="18" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div
                    className="md:hidden border-t-2"
                    style={{
                        borderColor: 'hsl(var(--foreground))',
                        backgroundColor: 'hsl(var(--background))',
                        padding: '1rem',
                    }}
                >
                    <div className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="font-heading text-sm font-medium"
                                style={{ color: 'hsl(var(--foreground))' }}
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}