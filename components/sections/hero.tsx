import Link from 'next/link';

export function Hero() {
    return (
        <section
            style={{
                paddingTop: '6rem',
                paddingBottom: '6rem',
                backgroundColor: 'transparent',
                paddingLeft: '3rem',
                paddingRight: '3rem',
            }}
        >
            <style>{`
        .hero-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem 3rem;
          border-radius: 999px;
          font-family: var(--font-space-grotesk);
          font-weight: 700;
          font-size: 1.5rem;
          border: none;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          text-decoration: none;
          white-space: nowrap;
          max-width: 400px;
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

        @media (max-width: 768px) {
          .hero-image {
            display: none;
          }
        }
      `}</style>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center', maxWidth: '1200px', marginLeft: 'auto', marginRight: 'auto' }}>
                {/* LEFT: Text + Buttons */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'left' }}>
                    {/* Main Heading */}
                    <h1
                        className="font-heading font-bold"
                        style={{
                            fontSize: '3.5rem',
                            lineHeight: '1.1',
                            color: 'hsl(var(--foreground))',
                        }}
                    >
                        Building Models That{' '}
                        <span style={{ fontStyle: 'italic' }}>Actually</span> Ship
                    </h1>

                    {/* Subheading */}
                    <p
                        className="font-heading font-bold"
                        style={{
                            fontSize: '1.1rem',
                            color: 'hsl(var(--foreground))',
                            opacity: 0.85,
                            lineHeight: '1.6',
                            fontWeight: 500,
                        }}
                    >
                        We help engineering teams operationalize and scale machine learning systems with production-grade infrastructure.
                    </p>

                    {/* CTA Buttons */}
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.25rem',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                        }}
                    >
                        <Link href="/projects" className="hero-btn hero-btn-primary">
                            View Projects
                        </Link>
                        <Link href="/contact" className="hero-btn hero-btn-secondary">
                            Get in Touch
                        </Link>
                    </div>
                </div>

                {/* RIGHT: Image Placeholder */}
                <div
                    className="hero-image"
                    style={{
                        width: '100%',
                        height: '500px',
                        backgroundColor: 'hsl(var(--card-background))',
                        border: '2.5px solid hsl(var(--foreground))',
                        borderRadius: '14px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'hsl(var(--foreground))',
                        opacity: 0.5,
                        fontSize: '1rem',
                        fontFamily: 'var(--font-space-grotesk)',
                        textAlign: 'center',
                        padding: '2rem',
                    }}
                >
                    [Your Hero Image Here]
                </div>
            </div>
        </section>
    );
}