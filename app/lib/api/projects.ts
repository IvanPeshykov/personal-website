import {IProject} from "@/app/projects/types";

export async function getProjects() : Promise<IProject[]> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`);

    if (!res.ok) {
        return [];
    }

    return res.json();
}
