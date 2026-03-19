'use client';
import { useState } from 'react';
import { NotificaionsData } from '@/lib/data';
import Table from './Table';
import Image from 'next/image';

type Notification = {
date: string;
time: string;
type: string;
audience: string;
status: string;
actions: string;
index?: number;
};

export default function NotificationsTable() {
const [openIdx, setOpenIdx] = useState<number | null>(null);

// Add index for managing dropdown
const data = NotificaionsData.users.map((item, i) => ({
...item,
index: i,
}));

const renderRow = (item: Notification) => {
return (
    <tr key={item.index} className="relative">
    <td className="p-4 text-[14px] border border-gray-200">{item.date}</td>
    <td className="p-4 text-[14px] border border-gray-200">{item.time}</td>
    <td className="p-4 text-[14px] border border-gray-200">{item.type}</td>
    <td className="p-4 text-[14px] border border-gray-200">{item.audience}</td>
    <td className="p-4 text-[14px] border border-gray-200">{item.status}</td>

    {/* Actions column */}
    <td className="p-4 border border-gray-200 relative">
        <button
        onClick={() =>
            setOpenIdx(openIdx === item.index ? null : item.index!)
        }
        className="flex items-center justify-center"
        >
        <Image
            src={item.actions}
            alt="more options"
            width={20}
            height={20}
        />
        </button>

        {openIdx === item.index && (
        <div className="fixed z-50 bg-white border border-gray-200 shadow-md w-[140px] mt-2 right-4">
            <button className="w-full text-left p-2.5 text-[14px] hover:bg-gray-100">
            View Notification
            </button>
            <div className="border-t border-gray-200" />
            <button className="w-full text-left p-2.5 text-[14px] hover:bg-gray-100">
            Edit Notification
            </button>
            <div className="border-t border-gray-200" />
            <button className="w-full text-center pl-1 pr-1 py-2 text-[14px] hover:bg-gray-100">
            Delete Notification
            </button>
        </div>
        )}
    </td>
    </tr>
);
};

const columns = [
{ header: 'Date', accessor: 'date' },
{ header: 'Time', accessor: 'time' },
{ header: 'Type', accessor: 'type' },
{ header: 'Audience', accessor: 'audience' },
{ header: 'Status', accessor: 'status' },
{ header: 'Actions', accessor: 'actions' },
];

return (
<div className="bg-white rounded-md mt-2 w-full h-full">
    <Table columns={columns} renderRow={renderRow} data={data} />
</div>
);
}
