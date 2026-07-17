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
          padding: 0.9rem 2rem;
          border-radius: 999px;
          font-family: var(--font-space-grotesk);
          font-weight: 700;
          font-size: 1rem;
          border: none;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          text-decoration: none;
          white-space: nowrap;
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

            <div style={{ maxWidth: '640px', margin: '0 auto', padding: '0 1.5rem' }}>
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
                    }}
                >
                    We help engineering teams operationalize and scale machine learning systems with production-grade infrastructure.
                </p>

                {/* CTA Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link href="/projects" className="hero-btn hero-btn-primary">
                        View Projects
                    </Link>
                    <Link href="/contact" className="hero-btn hero-btn-secondary">
                        Get in Touch
                    </Link>
                </div>
            </div>
        </section>
    );
}