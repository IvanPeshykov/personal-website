import React from 'react';
import type {Metadata} from "next";
import {getProjects} from "@/app/lib/api/projects";
import {IProject} from "@/app/projects/types";
import Project from "@/app/components/Project";


export const metadata: Metadata = {
    title: "Projects",
};


const Page = async () => {

    const projects = await getProjects();

    return (
        <div className='container mx-auto px-4 md:px-18 lg:px-4 xl:px-30'>
            <h1 className='text-3xl font-bold text-center mb-8'>My Projects</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                {projects.map((project: IProject) => (
                    <Project key={project.id} {...project} />
                ))}
            </div>
        </div>
    );
};

export default Page;
