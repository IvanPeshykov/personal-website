'use client';
import React, { useState } from 'react';
import { IProject } from '@/app/lib/types/projects';
import Project from '@/app/components/Project';

interface ProjectListProps {
    projects: IProject[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
    const [activeCategory, setActiveCategory] = useState<number>(1);

    const categories = [
        { id: 1, name: 'All' },
        { id: 2, name: 'Main' },
        { id: 3, name: 'Games' },
        {id: 4, name: "Websites"},
        {id: 5, name: "Other"}
    ];

    return (
        <div>
            <div className="flex gap-4 mb-6 flex-wrap justify-center">
                {categories.map(category => (
                    <button
                        key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                        className={`px-5 py-2 cursor-pointer rounded-full font-semibold shadow transition-colors duration-400 border
                ${activeCategory === category.id
                            ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white border-blue-600 scale-105'
                            : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50'
                        }`}
                    >
                        {category.name}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {projects.length > 0 &&
                    projects.filter(
                        (project: IProject) =>
                            activeCategory === 1 || project.category === activeCategory
                    )
                    .map((project: IProject) => (
                        <Project key={project.id} {...project} />
                    ))}
            </div>
            {projects.length === 0 && <div className='text-center mt-20'>No projects found.</div>}
        </div>
    );
};

export default ProjectList;
