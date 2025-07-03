import {IGoal} from "@/app/me/goals/types";


export async function getGoals(year: number): Promise<IGoal[]> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/goals?year=${year}`);


    if (!res.ok) {
        return [];
    }

    return res.json();
}
