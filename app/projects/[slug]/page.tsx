import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { getProjectBySlug, getAllProjectSlugs } from '@/lib/mdx';
import { notFound } from 'next/navigation';

interface ProjectPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const slugs = await getAllProjectSlugs();
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
    const { slug } = await params;
    try {
        const { frontmatter } = await getProjectBySlug(slug);
        return {
            title: frontmatter.title,
            description: frontmatter.summary,
        };
    } catch {
        return { title: 'Project Not Found' };
    }
}

const mdxComponents = {
    h2: ({ children }: { children: React.ReactNode }) => (
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginTop: '2rem', marginBottom: '1rem', color: 'hsl(var(--foreground))', fontFamily: 'var(--font-space-grotesk)' }}>
            {children}
        </h2>
    ),
    h3: ({ children }: { children: React.ReactNode }) => (
        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginTop: '1.5rem', marginBottom: '0.75rem', color: 'hsl(var(--foreground))', fontFamily: 'var(--font-space-grotesk)' }}>
            {children}
        </h3>
    ),
    p: ({ children }: { children: React.ReactNode }) => (
        <p style={{ marginBottom: '1rem', lineHeight: '1.6', color: 'hsl(var(--foreground))' }}>
            {children}
        </p>
    ),
    ul: ({ children }: { children: React.ReactNode }) => (
        <ul style={{ marginBottom: '1.5rem', marginLeft: '2rem', color: 'hsl(var(--foreground))' }}>
            {children}
        </ul>
    ),
    li: ({ children }: { children: React.ReactNode }) => (
        <li style={{ marginBottom: '0.5rem', lineHeight: '1.6' }}>
            {children}
        </li>
    ),
    code: ({ children, className }: { children: React.ReactNode; className?: string }) => {
        const isInline = !className;
        if (isInline) {
            return (
                <code style={{ backgroundColor: 'hsl(var(--secondary))', color: 'hsl(var(--foreground))', padding: '0.2rem 0.4rem', borderRadius: '4px', fontSize: '0.9rem', fontFamily: 'monospace' }}>
                    {children}
                </code>
            );
        }
        return (
            <code style={{ backgroundColor: 'hsl(var(--secondary))', color: 'hsl(var(--foreground))', display: 'block', padding: '1rem', borderRadius: '6px', overflow: 'auto', fontSize: '0.875rem', fontFamily: 'monospace', lineHeight: '1.5' }}>
                {children}
            </code>
        );
    },
    pre: ({ children }: { children: React.ReactNode }) => (
        <pre style={{ marginBottom: '1.5rem', overflow: 'auto' }}>
            {children}
        </pre>
    ),
};

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;

    try {
        const { frontmatter, content } = await getProjectBySlug(slug);

        return (
            <main style={{ minHeight: '100vh', backgroundColor: 'transparent', color: 'hsl(var(--foreground))', paddingTop: '120px', paddingBottom: '3rem' }}>
                <div style={{ backgroundColor: 'hsl(var(--card))', borderBottom: `2.5px solid hsl(var(--border))`, padding: '3rem 1.5rem' }}>
                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <div style={{ marginBottom: '2rem' }}>
                            <Link href="/projects" style={{ color: '#FF4911', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500 }}>
                                ← Back To Projects
                            </Link>
                        </div>

                        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem', color: 'hsl(var(--foreground))', fontFamily: 'var(--font-space-grotesk)' }}>
                            {frontmatter.title}
                        </h1>

                        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: 'hsl(var(--foreground))', marginBottom: '2rem', opacity: 0.9 }}>
                            {frontmatter.summary}
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
                            <div>
                                <p style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'hsl(var(--foreground))', opacity: 0.7, marginBottom: '0.5rem' }}>
                                    Published
                                </p>
                                <p style={{ fontSize: '1rem', color: 'hsl(var(--foreground))' }}>
                                    {new Date(frontmatter.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                </p>
                            </div>

                            {frontmatter.metrics && (
                                <div>
                                    <p style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'hsl(var(--foreground))', opacity: 0.7, marginBottom: '0.5rem' }}>
                                        Metrics
                                    </p>
                                    <p style={{ fontSize: '1rem', color: 'hsl(var(--foreground))' }}>
                                        {frontmatter.metrics}
                                    </p>
                                </div>
                            )}

                            {frontmatter.githubUrl && (
                                <div>
                                    <p style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'hsl(var(--foreground))', opacity: 0.7, marginBottom: '0.5rem' }}>
                                        Repository
                                    </p>
                                    <a href={frontmatter.githubUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#FF4911', textDecoration: 'none', fontSize: '1rem', fontWeight: 500 }}>
                                        View On GitHub →
                                    </a>
                                </div>
                            )}
                        </div>

                        <div style={{ marginTop: '2rem', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                            {frontmatter.categories.length > 0 && (
                                <div>
                                    <p style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'hsl(var(--foreground))', opacity: 0.7, marginBottom: '0.75rem' }}>
                                        Categories
                                    </p>
                                    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                                        {frontmatter.categories.map((cat) => (
                                            <span key={cat} style={{ display: 'inline-block', padding: '0.5rem 1rem', backgroundColor: 'hsl(var(--secondary))', color: 'hsl(var(--foreground))', borderRadius: '999px', border: `1.5px solid hsl(var(--border))`, fontSize: '0.9rem', fontWeight: 500 }}>
                                                {cat}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {frontmatter.techStack.length > 0 && (
                                <div>
                                    <p style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'hsl(var(--foreground))', opacity: 0.7, marginBottom: '0.75rem' }}>
                                        Tech Stack
                                    </p>
                                    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                                        {frontmatter.techStack.map((tech) => (
                                            <span key={tech} style={{ display: 'inline-block', padding: '0.5rem 1rem', backgroundColor: 'hsl(var(--secondary))', color: 'hsl(var(--foreground))', borderRadius: '999px', border: `1.5px solid hsl(var(--border))`, fontSize: '0.9rem', fontWeight: 500 }}>
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <article style={{ maxWidth: '900px', margin: '3rem auto', padding: '0 1.5rem', color: 'hsl(var(--foreground))' }}>
                    <MDXRemote source={content} components={mdxComponents} />
                </article>

                <div style={{ maxWidth: '900px', margin: '4rem auto', padding: '2rem 1.5rem', borderTop: `2.5px solid hsl(var(--border))` }}>
                    <Link href="/projects" style={{ color: '#FF4911', textDecoration: 'none', fontSize: '1rem', fontWeight: 500 }}>
                        ← Back To All Projects
                    </Link>
                </div>
            </main>
        );
    } catch (error) {
        notFound();
    }
}