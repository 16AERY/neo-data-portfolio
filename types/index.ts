export interface ProjectFrontmatter {
    slug: string;
    title: string;
    publishedAt: string;
    summary: string;
    coverImage: string;
    categories: string[];
    techStack: string[];
    metrics?: string;
    githubUrl?: string;
    featured: boolean;
}