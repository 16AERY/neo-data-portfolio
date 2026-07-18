export function Extracurricular() {
    const achievements = [
        {
            title: 'Hackathon Lead — Code Red',
            description:
                'Led a team of 4 through a competitive hackathon, delivering a fully functional prototype 2 hours ahead of the deadline. Demonstrated project management, stakeholder communication, and technical execution under pressure.',
            metric: 'Team of 4',
            metricLabel: 'Members',
            accentColor: '#FF4911',
        },
        {
            title: 'NSS Community Outreach',
            description:
                'Coordinated and led outreach drives impacting 500+ residents in the local community. Strengthened organizational coordination and communication skills through meaningful social impact initiatives.',
            metric: '500+',
            metricLabel: 'Residents Impacted',
            accentColor: '#7C5CFF',
        },
    ];

    return (
        <section
            style={{
                paddingTop: '4rem',
                paddingBottom: '4rem',
                backgroundColor: 'transparent',
            }}
        >
            <style>{`
        .achievement-card {
          border: 2.5px solid hsl(var(--foreground));
          border-radius: 14px;
          padding: 2rem 1.5rem;
          background-color: hsl(var(--card-background));
          box-shadow: var(--shadow-neo);
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          transition: all 0.3s ease;
          min-height: 280px;
        }

        .achievement-card:hover {
          transform: translateY(-4px);
          box-shadow: 4px 8px 0px 0px rgba(0, 0, 0, 1);
        }
      `}</style>

            <div className="max-w-7xl mx-auto px-4">
                {/* Section Heading */}
                <h2
                    className="font-heading font-bold mb-12"
                    style={{
                        fontSize: '2rem',
                        lineHeight: '1.2',
                        color: 'hsl(var(--foreground))',
                    }}
                >
                    Extracurricular & Leadership
                </h2>

                {/* Achievement Cards Grid */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '2rem',
                    }}
                >
                    {achievements.map((achievement, idx) => (
                        <div key={idx} className="achievement-card">
                            {/* Metric Callout */}
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.75rem',
                                    paddingBottom: '0.75rem',
                                    borderBottom: '1px solid hsl(var(--foreground) / 0.2)',
                                }}
                            >
                                <div
                                    className="font-heading font-bold"
                                    style={{
                                        fontSize: '1.5rem',
                                        color: achievement.accentColor,
                                        lineHeight: '1',
                                    }}
                                >
                                    {achievement.metric}
                                </div>
                                <div
                                    className="text-xs font-medium"
                                    style={{
                                        color: 'hsl(var(--foreground))',
                                        opacity: 0.6,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em',
                                    }}
                                >
                                    {achievement.metricLabel}
                                </div>
                            </div>

                            {/* Title */}
                            <h3
                                className="font-heading font-bold"
                                style={{
                                    fontSize: '1.125rem',
                                    color: 'hsl(var(--foreground))',
                                    lineHeight: '1.3',
                                }}
                            >
                                {achievement.title}
                            </h3>

                            {/* Description */}
                            <p
                                className="text-sm"
                                style={{
                                    color: 'hsl(var(--foreground))',
                                    lineHeight: '1.6',
                                    opacity: 0.85,
                                    flexGrow: 1,
                                }}
                            >
                                {achievement.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}