import Link from 'next/link';

export function Footer() {
    return (
        <footer
            style={{
                backgroundColor: '#1A1A1A',
                padding: '3rem 1.5rem 2rem',
                marginTop: '4rem',
                marginBottom: 0,
            }}
        >
            <div
                className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8"
                style={{ paddingBottom: '2rem', borderBottom: '1.5px solid rgba(255, 255, 255, 0.15)' }}
            >
                {/* Column 1: Socials */}
                <div>
                    <h4
                        className="font-heading font-bold text-sm mb-4"
                        style={{ color: '#FFFFFF' }}
                    >
                        Socials
                    </h4>
                    <ul className="space-y-2">
                        <li>
                            <a
                                href="https://github.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm hover:opacity-70 transition-opacity"
                                style={{ color: '#E5E5E5' }}
                            >
                                GitHub
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/parth-gupta-3a44b327b/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm hover:opacity-70 transition-opacity"
                                style={{ color: '#E5E5E5' }}
                            >
                                LinkedIn
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Column 2: Navigation */}
                <div>
                    <h4
                        className="font-heading font-bold text-sm mb-4"
                        style={{ color: '#FFFFFF' }}
                    >
                        Navigation
                    </h4>
                    <ul className="space-y-2">
                        <li>
                            <Link
                                href="/"
                                className="text-sm hover:opacity-70 transition-opacity"
                                style={{ color: '#E5E5E5' }}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/projects"
                                className="text-sm hover:opacity-70 transition-opacity"
                                style={{ color: '#E5E5E5' }}
                            >
                                Projects
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Column 3: Contact */}
                <div>
                    <h4
                        className="font-heading font-bold text-sm mb-4"
                        style={{ color: '#FFFFFF' }}
                    >
                        Contact
                    </h4>
                    <a
                        href="pg786616@mail.com"
                        className="text-sm hover:opacity-70 transition-opacity"
                        style={{ color: '#E5E5E5' }}
                    >
                        hello@example.com
                    </a>
                </div>

                {/* Column 4: Copyright */}
                <div>
                    <p className="text-sm" style={{ color: '#E5E5E5' }}>
                        © {new Date().getFullYear()} Neo Data. All rights reserved.
                    </p>
                </div>
            </div>

            <div style={{ maxWidth: '1200px', margin: '1.5rem auto 0', textAlign: 'center' }}>
                <p style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.5)' }}>
                    Built with Next.js, TypeScript &amp; Tailwind CSS
                </p>
            </div>
        </footer>
    );
}