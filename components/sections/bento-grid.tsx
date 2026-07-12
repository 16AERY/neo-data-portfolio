export function BentoGrid() {
    return (
        <section
            style={{
                paddingTop: '4rem',
                paddingBottom: '4rem',
                backgroundColor: 'hsl(var(--background))',
            }}
            id="beyond-tech"
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
                    Beyond Tech
                </h2>

                {/* Placeholder Grid - Phase 4 will populate with real content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[1, 2, 3, 4].map((idx) => (
                        <div
                            key={idx}
                            style={{
                                border: `2.5px solid hsl(var(--foreground))`,
                                borderRadius: '14px',
                                padding: '2rem',
                                backgroundColor: 'hsl(var(--card-background))',
                                boxShadow: 'var(--shadow-neo)',
                                minHeight: '250px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <p
                                style={{
                                    color: 'hsl(var(--foreground))',
                                    opacity: 0.5,
                                    textAlign: 'center',
                                }}
                            >
                                Tile {idx} - [Phase 4]
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}