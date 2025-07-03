

export interface IGoal {
    id: string;
    year: number;
    text: string
    is_completed: boolean;
    completed_at: string | null;
    not_completed: boolean;
}
