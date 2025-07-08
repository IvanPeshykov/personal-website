import React from "react";
import { IProject } from "@/app/projects/types";

const Project = ({ name, description, link, image }: IProject) => {
    const content = (
        <>
            <div className="relative h-50 md:h-80 w-full">
                <img
                    src={image}
                    alt={name}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>
            <div className="flex flex-col flex-1 justify-start p-6 w-full">
                <h3 className="text-2xl font-bold mb-2 group-hover:underline">{name}</h3>
                <p className="mb-6 group-hover:underline">{description}</p>

                {link && <span className="px-5 py-2 bg-cyan-600 rounded-lg shadow transition mt-auto">
                    See More -&gt;
                </span>}

            </div>
        </>
    );

    return link ? (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col max-w-140 md:max-w-full border border-gray-200 p-2 rounded-xl overflow-hidden mb-6 hover:shadow-xl transition-shadow relative text-center no-underline group hover:text-blue-200"
            style={{ textDecoration: "none" }}
        >
            {content}
        </a>
    ) : (
        <div
            className="flex flex-col max-w-140 md:max-w-full border border-gray-200 p-2 rounded-xl overflow-hidden mb-6 relative text-center"
        >
            {content}
        </div>
    );
};

export default Project;
