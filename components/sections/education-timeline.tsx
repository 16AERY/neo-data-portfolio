export function EducationTimeline() {
    return (
        <section
            style={{
                paddingTop: '4rem',
                paddingBottom: '4rem',
                backgroundColor: 'hsl(var(--background))',
            }}
        >
            <div className="max-w-7xl mx-auto px-4">
                {/* Section Title */}
                <h2
                    className="font-heading font-bold mb-12"
                    style={{
                        fontSize: '2rem',
                        lineHeight: '1.2',
                        color: 'hsl(var(--foreground))',
                    }}
                >
                    Education & Milestones
                </h2>

                {/* Placeholder Timeline - Phase 4 will populate with real content */}
                <div className="space-y-6">
                    {[1, 2, 3].map((idx) => (
                        <div
                            key={idx}
                            style={{
                                border: `2.5px solid hsl(var(--foreground))`,
                                borderRadius: '14px',
                                padding: '2rem',
                                backgroundColor: 'hsl(var(--card-background))',
                                boxShadow: 'var(--shadow-neo)',
                            }}
                        >
                            <p
                                style={{
                                    color: 'hsl(var(--foreground))',
                                    opacity: 0.5,
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