interface MovingStripProps {
    text: string;
    icons?: string[]; // Array of icon names from simple-icons
}

export function MovingStrip({ text, icons = [] }: MovingStripProps) {
    const defaultIcons = ['star', 'zap', 'code', 'cpu'];
    const iconList = icons.length > 0 ? icons : defaultIcons;

    // Create a repeating pattern of text + icons
    const items = Array(5)
        .fill(null)
        .flatMap(() => [
            ...iconList.map((icon) => ({ type: 'icon', value: icon })),
            { type: 'text', value: text },
        ]);

    return (
        <div
            style={{
                width: '100%',
                backgroundColor: '#1A1A1A',
                overflow: 'hidden',
                borderTop: '2.5px solid hsl(var(--foreground))',
                borderBottom: '2.5px solid hsl(var(--foreground))',
                paddingTop: '0.75rem',
                paddingBottom: '0.75rem',
            }}
        >
            <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .marquee-container {
          display: flex;
          gap: 2rem;
          animation: scroll-left 20s linear infinite;
          white-space: nowrap;
          will-change: transform;
        }

        .marquee-item {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          font-family: var(--font-space-grotesk);
          font-weight: 700;
          font-size: 1.25rem;
          color: #FFFFFF;
          letter-spacing: 0.05em;
          flex-shrink: 0;
        }

        .marquee-icon {
          width: 32px;
          height: 32px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .marquee-icon img {
          width: 24px;
          height: 24px;
          filter: invert(1) brightness(1.2);
        }
      `}</style>

            <div className="marquee-container">
                {items.map((item, idx) => (
                    <div key={idx} className="marquee-item">
                        {item.type === 'text' ? (
                            <span>{item.value}</span>
                        ) : (
                            <div className="marquee-icon">
                                <img
                                    src={`https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/${item.value}.svg`}
                                    alt={item.value}
                                    loading="lazy"
                                />
                            </div>
                        )}
                    </div>
                ))}

                {/* Duplicate for seamless loop */}
                {items.map((item, idx) => (
                    <div key={`dup-${idx}`} className="marquee-item">
                        {item.type === 'text' ? (
                            <span>{item.value}</span>
                        ) : (
                            <div className="marquee-icon">
                                <img
                                    src={`https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/${item.value}.svg`}
                                    alt={item.value}
                                    loading="lazy"
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}