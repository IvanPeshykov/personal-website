import { IGoal } from "@/app/me/goals/types";

export async function getGoals(year: number): Promise<IGoal[]> {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/goals?year=${year}`, {
            cache: "no-store", // or adjust to "force-cache" / "reload" if needed
        });

        if (!res.ok) {
            console.error("Failed to fetch goals:", res.status);
            return [];
        }

        return res.json();
    } catch (error) {
        console.error("Error fetching goals:", error);
        return [];
    }
}
