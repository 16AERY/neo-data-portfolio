import Link from 'next/link';

export function Hero() {
    return (
        <section
            style={{
                paddingTop: '6rem',
                paddingBottom: '6rem',
                backgroundColor: 'transparent',
                textAlign: 'center',
            }}
        >
            <style>{`
        .hero-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 1rem 2rem;
          border-radius: 999px;
          font-family: var(--font-space-grotesk);
          font-weight: 700;
          font-size: 1rem;
          border: none;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          text-decoration: none;
          display: inline-flex;
        }

        .hero-btn-primary {
          background-color: #FF4911;
          color: #FFFFFF;
        }

        .hero-btn-primary:hover {
          transform: scale(1.08) translateY(-2px);
        }

        .hero-btn-primary:active {
          transform: scale(0.96);
        }

        .hero-btn-secondary {
          background-color: transparent;
          border: 2.5px solid hsl(var(--foreground));
          color: hsl(var(--foreground));
        }

        .hero-btn-secondary:hover {
          transform: scale(1.08) translateY(-2px);
        }

        .hero-btn-secondary:active {
          transform: scale(0.96);
        }
      `}</style>

            <div className="max-w-2xl mx-auto px-4">
                {/* Main Heading */}
                <h1
                    className="font-heading font-bold mb-6"
                    style={{
                        fontSize: '3.5rem',
                        lineHeight: '1.1',
                        color: 'hsl(var(--foreground))',
                    }}
                >
                    Building Models That{' '}
                    <span style={{ fontStyle: 'italic' }}>Actually</span> Ship
                </h1>

                {/* Subheading with one italic phrase */}
                <p
                    className="text-lg mb-12"
                    style={{
                        color: 'hsl(var(--foreground))',
                        opacity: 0.85,
                        lineHeight: '1.6',
                        fontWeight: 500,
                    }}
                >
                    AI/ML Engineer focused on{' '}
                    <span style={{ fontStyle: 'italic' }}>retrieval systems</span> and
                    production pipelines that scale. Turning research into robust,
                    deployable solutions.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    {/* Primary CTA */}
                    <Link
                        href="/projects"
                        className="hero-btn hero-btn-primary"
                    >
                        View Projects
                    </Link>

                    {/* Secondary CTA */}
                    <a
                        href="mailto:hello@example.com"
                        className="hero-btn hero-btn-secondary"
                    >
                        Get In Touch
                    </a>
                </div>
            </div>
        </section>
    );
}