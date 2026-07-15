import Link from 'next/link';

export function Footer() {
    return (
        <footer
            style={{
                borderTop: `2.5px solid hsl(var(--foreground))`,
                boxShadow: 'var(--shadow-neo)',
                backgroundColor: 'transparent',
                padding: '2rem 1rem',
            }}
        >
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                {/* Column 1: Socials */}
                <div>
                    <h4
                        className="font-heading font-bold text-sm mb-4"
                        style={{ color: 'hsl(var(--foreground))' }}
                    >
                        Socials
                    </h4>
                    <ul className="space-y-2">
                        <li>
                            <a
                                href="https://github.com"
                                className="text-sm hover:opacity-70 transition-opacity"
                                style={{ color: 'hsl(var(--foreground))' }}
                            >
                                GitHub
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://linkedin.com"
                                className="text-sm hover:opacity-70 transition-opacity"
                                style={{ color: 'hsl(var(--foreground))' }}
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
                        style={{ color: 'hsl(var(--foreground))' }}
                    >
                        Navigation
                    </h4>
                    <ul className="space-y-2">
                        <li>
                            <Link
                                href="/"
                                className="text-sm hover:opacity-70 transition-opacity"
                                style={{ color: 'hsl(var(--foreground))' }}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/projects"
                                className="text-sm hover:opacity-70 transition-opacity"
                                style={{ color: 'hsl(var(--foreground))' }}
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
                        style={{ color: 'hsl(var(--foreground))' }}
                    >
                        Contact
                    </h4>
                    <a
                        href="mailto:hello@example.com"
                        className="text-sm hover:opacity-70 transition-opacity"
                        style={{ color: 'hsl(var(--foreground))' }}
                    >
                        hello@example.com
                    </a>
                </div>

                {/* Column 4: Copyright */}
                <div>
                    <p
                        className="text-sm"
                        style={{ color: 'hsl(var(--foreground))' }}
                    >
                        © {new Date().getFullYear()} Neo Data. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}