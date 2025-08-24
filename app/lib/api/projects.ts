import { IProject } from "@/app/lib/types/projects";

export async function getProjects(): Promise<IProject[]> {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`, {
            cache: "no-store", // or "force-cache" / "reload" depending on your needs
        });

        if (!res.ok) {
            console.error("Failed to fetch projects:", res.status);
            return [];
        }

        return res.json();
    } catch (error) {
        console.error("Error fetching projects:", error);
        return [];
    }
}
