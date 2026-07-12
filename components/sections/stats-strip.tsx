export function StatsStrip() {
    const stats = [
        { label: 'Projects Built', value: '12+' },
        { label: 'Best Recall', value: '92%' },
        { label: 'Internships', value: '4' },
        { label: 'Experience', value: '3yr' },
    ];

    return (
        <section
            style={{
                paddingTop: '4rem',
                paddingBottom: '4rem',
                backgroundColor: 'hsl(var(--background))',
            }}
        >
            <div className="max-w-7xl mx-auto px-4">
                {/* CSS Grid - 4 columns with proper gap */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '1.5rem',
                    }}
                >
                    {stats.map((stat, idx) => {
                        const accentColors = ['#FF4911', '#7C5CFF', '#C6F135', '#FF4911'];
                        const accentColor = accentColors[idx % accentColors.length];

                        return (
                            <div
                                key={stat.label}
                                style={{
                                    border: `2.5px solid hsl(var(--foreground))`,
                                    borderRadius: '14px',
                                    padding: '2rem 1.5rem',
                                    backgroundColor: 'hsl(var(--card-background))',
                                    boxShadow: 'var(--shadow-neo)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    gap: '0.5rem',
                                    minHeight: '180px',
                                    justifyContent: 'center',
                                }}
                            >
                                <div
                                    className="font-heading font-bold"
                                    style={{
                                        fontSize: '2rem',
                                        lineHeight: '1',
                                        color: accentColor,
                                        fontFamily: 'Space Grotesk, var(--font-space-grotesk), sans-serif',
                                    }}
                                >
                                    {stat.value}
                                </div>

                                <div
                                    className="text-sm font-medium"
                                    style={{
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
            </div>
        </section>
    );
}