import { Suspense } from 'react';
import { getAllProjects } from '@/lib/mdx';
import FilterableProjectGrid from '@/components/sections/filterable-project-grid';

async function ProjectsContent() {
    const projects = await getAllProjects();

    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1.5rem' }}>
            <FilterableProjectGrid projects={projects} />
        </div>
    );
}

export default function ProjectsPage() {
    return (
        <main
            style={{
                minHeight: '100vh',
                backgroundColor: 'hsl(var(--background))',
                paddingTop: '120px',
                paddingBottom: '3rem',
            }}
        >
            {/* Header Section */}
            <div
                style={{
                    backgroundColor: 'hsl(var(--card))',
                    borderBottom: `2.5px solid hsl(var(--border))`,
                    padding: '4rem 1.5rem',
                    marginBottom: '3rem',
                }}
            >
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h1
                        style={{
                            fontSize: '2.5rem',
                            fontWeight: 700,
                            marginBottom: '1rem',
                            color: 'hsl(var(--foreground))',
                            fontFamily: 'var(--font-space-grotesk)',
                        }}
                    >
                        Data Science & Machine Learning Projects
                    </h1>
                    <p
                        style={{
                            fontSize: '1.1rem',
                            lineHeight: '1.6',
                            color: 'hsl(var(--foreground))',
                            opacity: 0.85,
                            maxWidth: '700px',
                        }}
                    >
                        A collection of production-scale systems, research implementations, and advanced
                        analytical models. Each project demonstrates deep technical expertise in data
                        engineering, machine learning, and predictive analytics.
                    </p>
                </div>
            </div>

            {/* Projects Grid with Suspense Boundary */}
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
                <Suspense fallback={<ProjectsLoadingFallback />}>
                    <ProjectsContent />
                </Suspense>
            </div>
        </main>
    );
}

function ProjectsLoadingFallback() {
    return (
        <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
            <p
                style={{
                    fontSize: '1.1rem',
                    color: 'hsl(var(--foreground))',
                    opacity: 0.6,
                }}
            >
                Loading projects...
            </p>
        </div>
    );
}