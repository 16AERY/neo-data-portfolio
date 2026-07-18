'use client';

import { useState } from 'react';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';

export function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { label: 'Home', href: '/' },
        { label: 'Projects', href: '/projects' },
        { label: 'Beyond Tech', href: '/beyond-tech' },
        { label: 'Contact', href: '/contact' },
    ];

    const isActive = (href: string) => {
        if (href === '/') return pathname === '/';
        return pathname.startsWith(href);
    };

    return (
        <nav
            style={{
                position: 'sticky',
                top: 0,
                zIndex: 50,
                width: '100%',
                backgroundColor: '#1A1A1A',
            }}
        >
            <style>{`
                .nav-desktop-links { display: none; }
                .nav-mobile-toggle { display: flex; }
                .nav-link-pill { transition: transform 0.15s ease, background-color 0.15s ease; }
                .nav-link-pill:hover { transform: scale(1.06); }
                .nav-link-pill:active { transform: scale(0.96); }
                .nav-icon-btn { transition: transform 0.15s ease, background-color 0.15s ease; }
                .nav-icon-btn:hover { transform: scale(1.08) translateY(-1px); background-color: rgba(255, 255, 255, 0.1); }
                @media (min-width: 768px) {
                  .nav-desktop-links { display: flex; }
                  .nav-mobile-toggle { display: none; }
                }
            `}</style>

            <div
                style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    padding: '1rem 1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1.5rem',
                }}
            >
                <Link
                    href="/"
                    style={{
                        fontFamily: 'var(--font-space-grotesk)',
                        fontWeight: 700,
                        fontSize: '1.25rem',
                        color: '#FFFFFF',
                        textDecoration: 'none',
                        letterSpacing: '-0.02em',
                        whiteSpace: 'nowrap',
                    }}
                >
                    Neo<span style={{ color: '#FF4911' }}>Data</span>
                </Link>

                <div
                    className="nav-desktop-links"
                    style={{
                        alignItems: 'center',
                        gap: '0.25rem',
                        backgroundColor: 'rgba(255, 255, 255, 0.06)',
                        border: '2px solid rgba(255, 255, 255, 0.15)',
                        borderRadius: '999px',
                        padding: '0.35rem',
                        flexShrink: 0,
                    }}
                >
                    {navLinks.map((link) => {
                        const active = isActive(link.href);
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="nav-link-pill"
                                style={{
                                    fontFamily: 'var(--font-space-grotesk)',
                                    fontSize: '0.9rem',
                                    fontWeight: 500,
                                    padding: '0.5rem 1.1rem',
                                    borderRadius: '999px',
                                    textDecoration: 'none',
                                    whiteSpace: 'nowrap',
                                    backgroundColor: active ? '#FF4911' : 'transparent',
                                    color: active ? '#FFFFFF' : '#E5E5E5',
                                }}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
                    {/* FIXED: Added missing <a> opening tag */}
                    <a
                        href="https://github.com/16AERY"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nav-icon-btn"
                        aria-label="GitHub"
                        style={{
                            width: '38px',
                            height: '38px',
                            border: '1.5px solid rgba(255, 255, 255, 0.15)',
                            borderRadius: '999px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#FFFFFF',
                            fontFamily: 'var(--font-space-grotesk)',
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            textDecoration: 'none',
                        }}
                    >
                        <img
                            src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/github.svg"
                            alt="GitHub"
                            width={18}
                            height={18}
                            style={{ filter: 'invert(1)' }}
                        />
                    </a>

                    {/* FIXED: Added missing <a> opening tag */}
                    <a
                        href="https://www.linkedin.com/in/parth-gupta-3a44b327b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nav-icon-btn"
                        aria-label="LinkedIn"
                        style={{
                            width: '38px',
                            height: '38px',
                            border: '1.5px solid rgba(255, 255, 255, 0.15)',
                            borderRadius: '999px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#FFFFFF',
                            fontFamily: 'var(--font-space-grotesk)',
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            textDecoration: 'none',
                        }}
                    >
                        <img
                            src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/linkedin.svg"
                            alt="LinkedIn"
                            width={18}
                            height={18}
                            style={{ filter: 'invert(1)' }}
                        />
                    </a>

                    <ThemeToggle />

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="nav-mobile-toggle nav-icon-btn"
                        aria-label="Toggle menu"
                        style={{
                            width: '42px',
                            height: '42px',
                            border: '1.5px solid rgba(255, 255, 255, 0.15)',
                            borderRadius: '999px',
                            backgroundColor: 'transparent',
                            color: '#FFFFFF',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            fontSize: '1.1rem',
                        }}
                    >
                        {menuOpen ? 'X' : '≡'}
                    </button>
                </div>
            </div> {/* FIXED: Mismatched tag corrected here */}

            {menuOpen && (
                <div
                    className="nav-mobile-toggle"
                    style={{
                        borderTop: '1.5px solid rgba(255, 255, 255, 0.15)',
                        backgroundColor: '#1A1A1A',
                        padding: '1rem 1.5rem',
                        flexDirection: 'column',
                        gap: '0.5rem',
                    }}
                >
                    {navLinks.map((link) => {
                        const active = isActive(link.href);
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className="nav-link-pill"
                                style={{
                                    fontFamily: 'var(--font-space-grotesk)',
                                    fontSize: '1rem',
                                    fontWeight: 500,
                                    padding: '0.75rem 1.25rem',
                                    borderRadius: '999px',
                                    textDecoration: 'none',
                                    backgroundColor: active ? '#FF4911' : 'rgba(255, 255, 255, 0.06)',
                                    color: active ? '#FFFFFF' : '#E5E5E5',
                                    border: '1.5px solid rgba(255, 255, 255, 0.15)',
                                    display: 'block',
                                }}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </div>
            )}
        </nav>
    );
}