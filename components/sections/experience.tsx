export function Experience() {
    const experiences = [
        {
            role: 'ML Intern',
            company: 'Mission Simulation Group, ISRO',
            dateRange: 'Jul 2026 – Aug 2026',
            tags: ['Machine Learning', 'Fault Detection', 'Telemetry'],
            highlights: [
                'Built an ML-based fault detection model from scratch using telemetry data; applied supervised learning and anomaly detection on time-series sensor data.',
                'Engineered feature extraction pipeline from raw telemetry streams; improved baseline model performance via hyperparameter tuning and cross-validation, reducing false positives and improving detection accuracy.',
            ],
        },
        {
            role: 'Data Analytics Consultant',
            company: 'Deloitte (Job Simulation via Forage)',
            dateRange: 'Feb 2026 – Mar 2026',
            tags: ['Data Analysis', 'Forensic Technology'],
            highlights: [
                'Completed practical tasks in data analysis and forensic technology replicating Deloitte consulting workflows; developed analytical problem-solving and stakeholder communication competencies.',
            ],
        },
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
        .experience-card {
          border: 2.5px solid hsl(var(--foreground));
          border-radius: 14px;
          padding: 2rem 1.5rem;
          background-color: hsl(var(--card-background));
          box-shadow: var(--shadow-neo);
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          transition: all 0.3s ease;
        }

        .experience-card:hover {
          transform: translateY(-4px);
          box-shadow: 4px 8px 0px 0px rgba(0, 0, 0, 1);
        }

        .experience-tag {
          display: inline-block;
          padding: 0.5rem 1rem;
          border-radius: 999px;
          background-color: hsl(var(--foreground) / 0.1);
          color: hsl(var(--foreground));
          font-size: 0.75rem;
          font-weight: 700;
          border: 1px solid hsl(var(--foreground) / 0.3);
          white-space: nowrap;
          font-family: var(--font-space-grotesk);
        }

        .experience-highlight {
          padding-left: 1.25rem;
          position: relative;
          font-weight: 600;
        }

        .experience-highlight::before {
          content: '▸';
          position: absolute;
          left: 0;
          color: hsl(var(--foreground));
          opacity: 0.6;
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
                    Experience
                </h2>

                {/* Experience Cards Stack */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '2rem',
                    }}
                >
                    {experiences.map((exp, idx) => (
                        <div key={idx} className="experience-card">
                            {/* Header: Role, Company, Date */}
                            <div>
                                <h3
                                    className="font-heading font-bold mb-1"
                                    style={{
                                        fontSize: '1.25rem',
                                        color: accentColors[idx % accentColors.length],
                                    }}
                                >
                                    {exp.role}
                                </h3>
                                <p
                                    className="font-heading font-bold"
                                    style={{
                                        fontSize: '0.95rem',
                                        color: 'hsl(var(--foreground))',
                                        opacity: 0.75,
                                        marginBottom: '0.25rem',
                                    }}
                                >
                                    {exp.company}
                                </p>
                                <p
                                    className="font-heading font-bold"
                                    style={{
                                        fontSize: '0.85rem',
                                        color: 'hsl(var(--foreground))',
                                        opacity: 0.6,
                                    }}
                                >
                                    {exp.dateRange}
                                </p>
                            </div>

                            {/* Tags */}
                            <div
                                style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '0.75rem',
                                }}
                            >
                                {exp.tags.map((tag) => (
                                    <span key={tag} className="experience-tag">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Highlights / Bullet Points */}
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '1rem',
                                }}
                            >
                                {exp.highlights.map((highlight, hIdx) => (
                                    <p
                                        key={hIdx}
                                        className="font-heading font-bold experience-highlight"
                                        style={{
                                            color: 'hsl(var(--foreground))',
                                            lineHeight: '1.6',
                                            opacity: 0.85,
                                            fontSize: '0.95rem',
                                        }}
                                    >
                                        {highlight}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}