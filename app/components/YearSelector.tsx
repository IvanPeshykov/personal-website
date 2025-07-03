import React from 'react';

interface IProps {
    year: number;
    onYearChange: (year: number) => void;
}

const YearSelector = ({year, onYearChange} : IProps) => {

    return (
        <div className="flex items-center space-x-3 ">
            <label htmlFor="year" className="text-lg">Select Year:</label>
            <select
                value={year}
                onChange={(e) => {
                    const selectedYear = parseInt(e.target.value, 10);
                    if (onYearChange) {
                        onYearChange(selectedYear);
                    }
                }}
                id="year"
                className="bg-gray-800 text-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                <option>2025</option>
            </select>
        </div>
    );
};

export default YearSelector;
