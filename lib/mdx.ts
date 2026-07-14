import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { ProjectFrontmatter } from '@/types/index';

const projectsDirectory = path.join(process.cwd(), 'content', 'projects');

export async function getAllProjects(): Promise<ProjectFrontmatter[]> {
    if (!fs.existsSync(projectsDirectory)) {
        return [];
    }

    const files = fs.readdirSync(projectsDirectory);
    const mdxFiles = files.filter((file) => file.endsWith('.mdx'));

    const projects = mdxFiles.map((file) => {
        const filePath = path.join(projectsDirectory, file);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContents);

        return {
            slug: file.replace('.mdx', ''),
            title: data.title || 'Untitled',
            publishedAt: data.publishedAt || new Date().toISOString(),
            summary: data.summary || '',
            coverImage: data.coverImage || '',
            categories: data.categories || [],
            techStack: data.techStack || [],
            metrics: data.metrics,
            githubUrl: data.githubUrl,
            featured: data.featured || false,
        } as ProjectFrontmatter;
    });

    return projects.sort(
        (a, b) =>
            new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
}

export async function getProjectBySlug(slug: string): Promise<{
    frontmatter: ProjectFrontmatter;
    content: string;
}> {
    const filePath = path.join(projectsDirectory, `${slug}.mdx`);

    if (!fs.existsSync(filePath)) {
        throw new Error(`Project not found: ${slug}`);
    }

    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    const frontmatter: ProjectFrontmatter = {
        slug: slug,
        title: data.title || 'Untitled',
        publishedAt: data.publishedAt || new Date().toISOString(),
        summary: data.summary || '',
        coverImage: data.coverImage || '',
        categories: data.categories || [],
        techStack: data.techStack || [],
        metrics: data.metrics,
        githubUrl: data.githubUrl,
        featured: data.featured || false,
    };

    return { frontmatter, content };
}

export async function getAllProjectSlugs(): Promise<string[]> {
    if (!fs.existsSync(projectsDirectory)) {
        return [];
    }

    const files = fs.readdirSync(projectsDirectory);
    const mdxFiles = files.filter((file) => file.endsWith('.mdx'));

    return mdxFiles.map((file) => file.replace('.mdx', ''));
}