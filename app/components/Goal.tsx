import React from 'react';
import { IGoal } from '@/app/me/goals/types';

const Goal = ({ text, is_completed, not_completed, completed_at }: IGoal) => {
    return (
        <div className={`bg-gray-800 p-4 rounded-lg shadow-md flex justify-between gap-2 ${is_completed ? 'opacity-60' : ''}`}>
            <div>
                <p className="text-gray-400">- {text}</p>
                {completed_at && (
                    <p className="text-xs text-green-400 mt-1">Completed at: {new Date(completed_at).toLocaleDateString()}</p>
                )}
            </div>
            <div className="flex items-center justify-between">
                <span
                    className={`text-xs px-2 py-1 rounded text-white ${is_completed ? 'bg-green-600' :  not_completed ? 'bg-red-600' : 'bg-yellow-600'}`}>
                    {is_completed ? 'Completed' : not_completed ? 'Not completed' : 'In Progress'}
                </span>
            </div>
        </div>
    );
};

export default Goal;
