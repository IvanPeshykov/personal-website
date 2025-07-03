import React from 'react';
import Link from "next/link";
import {FaBookOpen, FaBullseye, FaSmile, FaBookReader} from "react-icons/fa";

const LinksTable = () => {
    return (
        <div className="bg-gray-800 rounded-xl overflow-hidden w-full lg:w-2/3">
            <div className="flex flex-col divide-y divide-gray-700 items-center">
                <Link
                    href="/me/goals"
                    className="flex items-center space-x-3 w-full px-5 py-4 hover:bg-gray-700 transition"
                >
                    <FaBullseye size={22} className="text-pink-500"/>
                    <span className="text-lg">My Goals</span>
                </Link>
                <div
                    className="flex items-center space-x-3 w-full px-5 py-4 opacity-60 cursor-not-allowed"
                >
                    <FaSmile size={22} className="text-yellow-400"/>
                    <span className="text-lg">Todo: Mood Tracker</span>
                </div>

                <div
                    className="flex items-center space-x-3 w-full px-5 py-4 opacity-60 cursor-not-allowed"
                >
                    <FaBookReader size={22} className="text-blue-400"/>
                    <span className="text-lg">Todo: Diary</span>
                </div>

                <div
                    className="flex items-center space-x-3 w-full px-5 py-4 opacity-60 cursor-not-allowed"
                >
                    <FaBookOpen size={22} className="text-purple-400 rotate-12"/>
                    <span className="text-lg">Todo: Bookshelf</span>
                </div>


            </div>
        </div>

    );
};

export default LinksTable;
