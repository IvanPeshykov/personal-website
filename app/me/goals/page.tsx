"use client";
import React, {useEffect, useState} from 'react';
import {FaBullseye} from "react-icons/fa";
import YearSelector from "@/app/components/YearSelector";
import {getGoals} from "@/app/lib/api/goals";
import {IGoal} from "@/app/me/goals/types";
import Goal from "@/app/components/Goal";

const Page = () => {

    const [year, setYear] = useState<number>(2025);
    const [goals, setGoals] = useState<IGoal[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getGoals(year)
            .then((data) => {
                setGoals(data);
            })
            .catch((err) => {
                console.error("Error fetching goals:", err);
            })
            .finally(() => setLoading(false));
    }, [year]);

    return (
        <div className="max-w-3xl mx-auto px-6 py-dd116 text-gray-300">
            <div className='flex justify-between items-start flex-wrap gap-x-12 mb-12'>
                <h1 className="text-3xl sm:text-4xl font-bold flex items-center space-x-3 mb-8">
                    <FaBullseye className="text-pink-500"/>
                    <span>My Goals</span>
                </h1>
                <YearSelector year={year} onYearChange={(year) => setYear(year)}/>
            </div>
            <div className="space-y-8">
                {loading ? (
                    <p className="text-gray-400">Loading goals...</p>
                ) : (
                    goals.length > 0 ? (
                        goals.map((goal) => <Goal key={goal.id} {...goal}/>)
                    ) : (
                        <p className="text-gray-400">No goals found for {year}.</p>
                    )
                )}
            </div>
        </div>
    );
};

export default Page;
