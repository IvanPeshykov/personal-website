import { getProjects } from '@/app/lib/api/projects';
import ProjectList from '@/app/projects/ProjectList';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Projects',
};

const Page = async () => {
    const projects = await getProjects();

    return (
        <div className="container mx-auto px-4 md:px-18 lg:px-4 xl:px-30">
            <h1 className="text-3xl font-bold text-center mb-8">My Projects</h1>
            <ProjectList projects={projects} />
        </div>
    );
};

export default Page;
