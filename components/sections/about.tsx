export function About() {
    const stats = [
        { label: 'CGPA', value: '7.9' },
        { label: 'Projects Built', value: '2' },
        { label: 'Internships', value: '2' },
        { label: 'Certifications', value: '2' },
    ];

    const technicalDomains = [
        'AI/ML',
        'Data Science',
        'Data Analytics',
        'Vector Search',
        'LLMs',
        'Infrastructure',
    ];

    const accentColors = ['#FF4911', '#7C5CFF', '#C6F135'];

    return (
        <section
            style={{
                paddingTop: '4rem',
                paddingBottom: '4rem',
                backgroundColor: 'transparent',
                paddingLeft: '3rem',
                paddingRight: '3rem',
            }}
        >
            <style>{`
        .domain-pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.75rem 1.5rem;
          border-radius: 999px;
          border: 2.5px solid hsl(var(--foreground));
          background-color: transparent;
          color: hsl(var(--foreground));
          font-family: var(--font-space-grotesk);
          font-weight: 700;
          font-size: 0.875rem;
          cursor: default;
          transition: all 0.3s ease;
        }

        .domain-pill:hover {
          transform: scale(1.08) translateY(-2px);
          box-shadow: var(--shadow-neo);
        }
      `}</style>

            <div style={{ maxWidth: '1200px', marginLeft: 'auto', marginRight: 'auto' }}>
                {/* Section Heading */}
                <h2
                    className="font-heading font-bold mb-12"
                    style={{
                        fontSize: '2rem',
                        lineHeight: '1.2',
                        color: 'hsl(var(--foreground))',
                    }}
                >
                    About Me
                </h2>

                {/* Two-column grid: Left (Bio + Education) | Right (Stats + Domains) */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '2rem',
                    }}
                >
                    {/* LEFT COLUMN: Bio + Education Card */}
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '2rem',
                        }}
                    >
                        {/* Bio Paragraph - SHORT & BOLD */}
                        <div>
                            <p
                                className="font-heading font-bold"
                                style={{
                                    color: 'hsl(var(--foreground))',
                                    lineHeight: '1.7',
                                    opacity: 0.95,
                                    fontSize: '1rem',
                                }}
                            >
                                I'm Parth Gupta, a pre-final year B.E. student at BMSIT Bangalore. I build production-grade AI/ML systems: fault detection models at ISRO, sub-200ms RAG systems, and data pipelines handling 541K+ transactions. Passionate about operationalizing machine learning.
                            </p>
                        </div>

                        {/* Education Card - SMALLER */}
                        <div
                            style={{
                                border: '2.5px solid hsl(var(--foreground))',
                                borderRadius: '14px',
                                padding: '1.5rem 1.25rem',
                                backgroundColor: 'hsl(var(--card-background))',
                                boxShadow: 'var(--shadow-neo)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.75rem',
                            }}
                        >
                            <div>
                                <h3
                                    className="font-heading font-bold mb-2"
                                    style={{
                                        fontSize: '1.125rem',
                                        color: '#FF4911',
                                    }}
                                >
                                    Education
                                </h3>
                            </div>

                            <div>
                                <p
                                    className="font-heading font-bold"
                                    style={{
                                        fontSize: '0.95rem',
                                        color: 'hsl(var(--foreground))',
                                        opacity: 0.9,
                                    }}
                                >
                                    B.E. Electronics & Communication
                                </p>
                                <p
                                    className="font-heading font-bold"
                                    style={{
                                        fontSize: '0.9rem',
                                        color: 'hsl(var(--foreground))',
                                        opacity: 0.7,
                                        marginTop: '0.25rem',
                                    }}
                                >
                                    BMSIT Bangalore
                                </p>
                            </div>

                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    paddingTop: '0.5rem',
                                    borderTop: '1px solid hsl(var(--foreground) / 0.2)',
                                }}
                            >
                                <p
                                    className="font-heading font-bold"
                                    style={{
                                        fontSize: '0.85rem',
                                        color: 'hsl(var(--foreground))',
                                        opacity: 0.7,
                                    }}
                                >
                                    2023–2027
                                </p>
                                <p
                                    className="font-heading font-bold"
                                    style={{
                                        fontSize: '0.85rem',
                                        color: '#7C5CFF',
                                    }}
                                >
                                    CGPA: 7.9/10
                                </p>
                            </div>

                            {/* Relevant Coursework */}
                            <div
                                style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '0.5rem',
                                    marginTop: '0.75rem',
                                }}
                            >
                                {['DSA', 'Statistics', 'ML', 'DBMS', 'Linear Algebra'].map((course) => (
                                    <span
                                        key={course}
                                        className="font-heading font-bold"
                                        style={{
                                            padding: '0.35rem 0.75rem',
                                            borderRadius: '999px',
                                            backgroundColor: 'hsl(var(--foreground) / 0.08)',
                                            color: 'hsl(var(--foreground))',
                                            opacity: 0.8,
                                            border: '1px solid hsl(var(--foreground) / 0.2)',
                                            fontSize: '0.75rem',
                                        }}
                                    >
                                        {course}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Quick Stats + Technical Domains */}
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '2rem',
                        }}
                    >
                        {/* Quick Stats Grid */}
                        <div
                            style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                                gap: '1.25rem',
                            }}
                        >
                            {stats.map((stat, idx) => {
                                const accentColor = accentColors[idx % accentColors.length];
                                return (
                                    <div
                                        key={stat.label}
                                        style={{
                                            border: '2.5px solid hsl(var(--foreground))',
                                            borderRadius: '14px',
                                            padding: '1.5rem 1rem',
                                            backgroundColor: 'hsl(var(--card-background))',
                                            boxShadow: 'var(--shadow-neo)',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            textAlign: 'center',
                                            gap: '0.5rem',
                                            justifyContent: 'center',
                                            minHeight: '140px',
                                        }}
                                    >
                                        <div
                                            className="font-heading font-bold"
                                            style={{
                                                fontSize: '1.75rem',
                                                lineHeight: '1',
                                                color: accentColor,
                                            }}
                                        >
                                            {stat.value}
                                        </div>
                                        <div
                                            className="font-heading font-bold"
                                            style={{
                                                fontSize: '0.75rem',
                                                color: 'hsl(var(--foreground))',
                                                opacity: 0.7,
                                            }}
                                        >
                                            {stat.label}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Technical Domains as Pill Tags */}
                        <div>
                            <p
                                className="font-heading font-bold mb-4"
                                style={{
                                    fontSize: '0.85rem',
                                    color: 'hsl(var(--foreground))',
                                    opacity: 0.8,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em',
                                }}
                            >
                                Technical Domains
                            </p>
                            <div
                                style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '1rem',
                                }}
                            >
                                {technicalDomains.map((domain) => (
                                    <div key={domain} className="domain-pill">
                                        {domain}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}