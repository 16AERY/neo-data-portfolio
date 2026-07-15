export function EducationTimeline() {
    return (
        <section
            style={{
                paddingTop: '4rem',
                paddingBottom: '4rem',
                backgroundColor: 'transparent',
            }}
        >
            <div className="max-w-7xl mx-auto px-4">
                {/* Section Title */}
                <h2
                    className="font-heading font-bold mb-8"
                    style={{
                        fontSize: '2rem',
                        lineHeight: '1.2',
                        color: 'hsl(var(--foreground))',
                    }}
                >
                    Education & Milestones
                </h2>

                {/* Placeholder Timeline - Phase 4 will populate with real content */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '1.25rem',
                    }}
                >
                    {[1, 2, 3].map((idx) => (
                        <div
                            key={idx}
                            style={{
                                border: `2.5px solid hsl(var(--foreground))`,
                                borderRadius: '14px',
                                padding: '1.25rem',
                                backgroundColor: 'hsl(var(--card-background))',
                                boxShadow: 'var(--shadow-neo)',
                                minHeight: '100px',
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <p
                                style={{
                                    color: 'hsl(var(--foreground))',
                                    opacity: 0.5,
                                    fontSize: '0.9rem',
                                }}
                            >
                                Timeline Entry {idx} - [Phase 4]
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}