'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ProjectFrontmatter } from '@/types/index';
import { useMemo } from 'react';

interface FilterableProjectGridProps {
    projects: ProjectFrontmatter[];
}

export default function FilterableProjectGrid({ projects }: FilterableProjectGridProps) {
    const searchParams = useSearchParams();
    const router = useRouter();

    // Get filter parameters from URL
    const selectedCategories = searchParams.getAll('category') || [];
    const selectedTechStack = searchParams.getAll('tech') || [];

    // Get all unique categories and tech stack
    const allCategories = useMemo(() => {
        const cats = new Set<string>();
        projects.forEach((p) => p.categories.forEach((c) => cats.add(c)));
        return Array.from(cats).sort();
    }, [projects]);

    const allTechStack = useMemo(() => {
        const tech = new Set<string>();
        projects.forEach((p) => p.techStack.forEach((t) => tech.add(t)));
        return Array.from(tech).sort();
    }, [projects]);

    // Filter projects
    const filteredProjects = useMemo(() => {
        return projects.filter((project) => {
            const categoryMatch =
                selectedCategories.length === 0 ||
                selectedCategories.every((cat) => project.categories.includes(cat));

            const techMatch =
                selectedTechStack.length === 0 ||
                selectedTechStack.every((tech) => project.techStack.includes(tech));

            return categoryMatch && techMatch;
        });
    }, [projects, selectedCategories, selectedTechStack]);

    // Toggle filter
    const toggleFilter = (type: 'category' | 'tech', value: string) => {
        const params = new URLSearchParams(searchParams.toString());
        const key = type === 'category' ? 'category' : 'tech';
        const current = params.getAll(key);

        if (current.includes(value)) {
            params.delete(key);
            current.forEach((v) => {
                if (v !== value) params.append(key, v);
            });
        } else {
            params.append(key, value);
        }

        router.push(`/projects?${params.toString()}`);
    };

    return (
        <div style={{ width: '100%' }}>
            {/* Filter Section */}
            <div
                style={{
                    marginBottom: '3rem',
                    backgroundColor: 'hsl(var(--card))',
                    padding: '2rem 1.5rem',
                    borderRadius: '14px',
                    border: `2.5px solid hsl(var(--border))`,
                    boxShadow: 'var(--shadow-neo)',
                }}
            >
                {/* Categories Filter */}
                <div style={{ marginBottom: '2rem' }}>
                    <h3
                        style={{
                            fontSize: '1rem',
                            fontWeight: 700,
                            marginBottom: '1rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            color: 'hsl(var(--foreground))',
                            fontFamily: 'var(--font-space-grotesk)',
                        }}
                    >
                        Categories
                    </h3>
                    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                        {allCategories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => toggleFilter('category', cat)}
                                style={{
                                    padding: '0.5rem 1rem',
                                    backgroundColor: selectedCategories.includes(cat)
                                        ? '#FF4911'
                                        : 'hsl(var(--secondary))',
                                    color: selectedCategories.includes(cat)
                                        ? '#FFFFFF'
                                        : 'hsl(var(--foreground))',
                                    border: `1.5px solid hsl(var(--border))`,
                                    borderRadius: '999px',
                                    cursor: 'pointer',
                                    fontSize: '0.9rem',
                                    fontWeight: 500,
                                    transition: 'all 0.2s ease',
                                    fontFamily: 'var(--font-space-grotesk)',
                                }}
                                onMouseEnter={(e) => {
                                    const target = e.currentTarget;
                                    target.style.transform = 'scale(1.08) translateY(-2px)';
                                }}
                                onMouseLeave={(e) => {
                                    const target = e.currentTarget;
                                    target.style.transform = 'scale(1) translateY(0)';
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tech Stack Filter */}
                <div>
                    <h3
                        style={{
                            fontSize: '1rem',
                            fontWeight: 700,
                            marginBottom: '1rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            color: 'hsl(var(--foreground))',
                            fontFamily: 'var(--font-space-grotesk)',
                        }}
                    >
                        Tech Stack
                    </h3>
                    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                        {allTechStack.map((tech) => (
                            <button
                                key={tech}
                                onClick={() => toggleFilter('tech', tech)}
                                style={{
                                    padding: '0.5rem 1rem',
                                    backgroundColor: selectedTechStack.includes(tech)
                                        ? '#7C5CFF'
                                        : 'hsl(var(--secondary))',
                                    color: selectedTechStack.includes(tech)
                                        ? '#FFFFFF'
                                        : 'hsl(var(--foreground))',
                                    border: `1.5px solid hsl(var(--border))`,
                                    borderRadius: '999px',
                                    cursor: 'pointer',
                                    fontSize: '0.9rem',
                                    fontWeight: 500,
                                    transition: 'all 0.2s ease',
                                    fontFamily: 'var(--font-space-grotesk)',
                                }}
                                onMouseEnter={(e) => {
                                    const target = e.currentTarget;
                                    target.style.transform = 'scale(1.08) translateY(-2px)';
                                }}
                                onMouseLeave={(e) => {
                                    const target = e.currentTarget;
                                    target.style.transform = 'scale(1) translateY(0)';
                                }}
                            >
                                {tech}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Clear Filters */}
                {(selectedCategories.length > 0 || selectedTechStack.length > 0) && (
                    <button
                        onClick={() => router.push('/projects')}
                        style={{
                            marginTop: '1.5rem',
                            padding: '0.5rem 1.5rem',
                            backgroundColor: 'transparent',
                            color: '#FF4911',
                            border: `2px solid #FF4911`,
                            borderRadius: '999px',
                            cursor: 'pointer',
                            fontSize: '0.9rem',
                            fontWeight: 500,
                            fontFamily: 'var(--font-space-grotesk)',
                            transition: 'all 0.2s ease',
                        }}
                        onMouseEnter={(e) => {
                            const target = e.currentTarget;
                            target.style.transform = 'scale(1.08) translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                            const target = e.currentTarget;
                            target.style.transform = 'scale(1) translateY(0)';
                        }}
                    >
                        Clear Filters
                    </button>
                )}
            </div>

            {/* Results Count */}
            <div style={{ marginBottom: '2rem' }}>
                <p
                    style={{
                        fontSize: '0.95rem',
                        color: 'hsl(var(--foreground))',
                        opacity: 0.8,
                    }}
                >
                    Showing {filteredProjects.length} of {projects.length} projects
                </p>
            </div>

            {/* Project Grid */}
            {filteredProjects.length > 0 ? (
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                        gap: '2rem',
                    }}
                >
                    {filteredProjects.map((project) => (
                        <Link
                            key={project.slug}
                            href={`/projects/${project.slug}`}
                            style={{ textDecoration: 'none' }}
                        >
                            <div
                                style={{
                                    backgroundColor: 'hsl(var(--card))',
                                    border: `2.5px solid hsl(var(--border))`,
                                    borderRadius: '14px',
                                    padding: '1.5rem',
                                    cursor: 'pointer',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: 'all 0.2s ease',
                                    boxShadow: 'var(--shadow-neo)',
                                    color: 'hsl(var(--foreground))',
                                }}
                                onMouseEnter={(e) => {
                                    const target = e.currentTarget;
                                    target.style.transform = 'scale(1.02) translateY(-4px)';
                                    target.style.boxShadow = '2px 2px 0px 0px hsl(var(--border))';
                                }}
                                onMouseLeave={(e) => {
                                    const target = e.currentTarget;
                                    target.style.transform = 'scale(1) translateY(0)';
                                    target.style.boxShadow = 'var(--shadow-neo)';
                                }}
                            >
                                {/* Featured Badge */}
                                {project.featured && (
                                    <div
                                        style={{
                                            display: 'inline-block',
                                            width: 'fit-content',
                                            marginBottom: '1rem',
                                            padding: '0.35rem 0.75rem',
                                            backgroundColor: '#FF4911',
                                            color: '#FFFFFF',
                                            borderRadius: '999px',
                                            fontSize: '0.75rem',
                                            fontWeight: 700,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.05em',
                                        }}
                                    >
                                        Featured
                                    </div>
                                )}

                                {/* Title */}
                                <h3
                                    style={{
                                        fontSize: '1.25rem',
                                        fontWeight: 700,
                                        marginBottom: '0.75rem',
                                        color: 'hsl(var(--foreground))',
                                        fontFamily: 'var(--font-space-grotesk)',
                                    }}
                                >
                                    {project.title}
                                </h3>

                                {/* Summary */}
                                <p
                                    style={{
                                        fontSize: '0.95rem',
                                        lineHeight: '1.5',
                                        marginBottom: '1.5rem',
                                        color: 'hsl(var(--foreground))',
                                        opacity: 0.8,
                                        flex: 1,
                                    }}
                                >
                                    {project.summary}
                                </p>

                                {/* Metrics (Optional) */}
                                {project.metrics && (
                                    <p
                                        style={{
                                            fontSize: '0.85rem',
                                            marginBottom: '1rem',
                                            color: '#FF4911',
                                            fontWeight: 500,
                                        }}
                                    >
                                        {project.metrics}
                                    </p>
                                )}

                                {/* Categories */}
                                {project.categories.length > 0 && (
                                    <div style={{ marginBottom: '1rem' }}>
                                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                            {project.categories.slice(0, 2).map((cat) => (
                                                <span
                                                    key={cat}
                                                    style={{
                                                        display: 'inline-block',
                                                        padding: '0.35rem 0.75rem',
                                                        backgroundColor: 'hsl(var(--secondary))',
                                                        borderRadius: '999px',
                                                        fontSize: '0.8rem',
                                                        fontWeight: 500,
                                                        border: `1px solid hsl(var(--border))`,
                                                        color: 'hsl(var(--foreground))',
                                                    }}
                                                >
                                                    {cat}
                                                </span>
                                            ))}
                                            {project.categories.length > 2 && (
                                                <span
                                                    style={{
                                                        display: 'inline-block',
                                                        padding: '0.35rem 0.75rem',
                                                        fontSize: '0.8rem',
                                                        fontWeight: 500,
                                                        color: 'hsl(var(--foreground))',
                                                        opacity: 0.6,
                                                    }}
                                                >
                                                    +{project.categories.length - 2}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                )}

                                {/* View Link */}
                                <div
                                    style={{
                                        paddingTop: '1rem',
                                        borderTop: `1.5px solid hsl(var(--border))`,
                                    }}
                                >
                                    <span
                                        style={{
                                            color: '#FF4911',
                                            fontWeight: 500,
                                            fontSize: '0.9rem',
                                        }}
                                    >
                                        View Project →
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            ) : (
                <div
                    style={{
                        textAlign: 'center',
                        padding: '4rem 2rem',
                        backgroundColor: 'hsl(var(--card))',
                        borderRadius: '14px',
                        border: `2.5px solid hsl(var(--border))`,
                        color: 'hsl(var(--foreground))',
                    }}
                >
                    <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>No Projects Found</p>
                    <p style={{ fontSize: '0.95rem', opacity: 0.7 }}>
                        Try adjusting your filters or clearing them to see all projects.
                    </p>
                </div>
            )}
        </div>
    );
}