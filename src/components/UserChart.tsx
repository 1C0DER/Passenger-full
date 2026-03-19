'use client';
import { useState } from 'react';
import Image from 'next/image';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';

const data = [
    { name: 'Mon', Users: 20 },
    { name: 'Tue', Users: 30 },
    { name: 'Wed', Users: 50 },
    { name: 'Thur', Users: 40 },
    { name: 'Fri', Users: 60 },
    { name: 'Sat', Users: 35 },
    { name: 'Sun', Users: 70 },
];

const UserChart = () => {
    const [showExport, setShowExport] = useState(false);

    return (
    <div className="bg-white rounded-xl w-full h-full p-4 relative">
        <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-4">
            <h1 className="text-[14px] font-normal">Users Growth</h1>
            <div className="flex items-center gap-2">
            <p className="text-[14px] font-normal">Last 7 days</p>
            <Image src="/dropdown.png" alt="arrow-down" width={20} height={20} />
            </div>
        </div>

        <div className="relative">
        <button
            className="flex items-center gap-2"
            onClick={() => setShowExport(!showExport)}>
            <p className="text-[14px] font-normal">Export</p>
            <Image src="/dropdown.png" alt="arrow-down" width={20} height={20} />
        </button>

        {showExport && (
            <div className="absolute right-0 mt-2 w-[150px] bg-white border rounded-md shadow-lg z-10">
            <button className="w-full px-4 py-2 text-sm hover:bg-gray-100 text-left">Export as CSV</button>
            <button className="w-full px-4 py-2 text-sm hover:bg-gray-100 text-left">Export as PDF</button>
            </div>
        )}
        </div>
    </div>

    <div className="w-full h-[230px]">
        <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="Users" stroke="#82ca9d" />
        </LineChart>
        </ResponsiveContainer>
    </div>
    </div>
);
};

export default UserChart;
