'use client';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import Table from './Table';
import Image from 'next/image';
import { suspiciousActivitiesData } from '@/lib/data';

type SuspiciousActivity = {
name: string;
issueType: string;
description: string;
actions: string;
index?: number;
};

export default function SuspiciousActivitiesTable() {
const [openDropdown, setOpenDropdown] = useState<{
index: number | null;
position: { top: number; left: number } | null;
}>({ index: null, position: null });

const data = suspiciousActivitiesData.users.map((user, i) => ({ ...user, index: i }));

const handleDropdown = (index: number, e: React.MouseEvent<HTMLButtonElement>) => {
const rect = e.currentTarget.getBoundingClientRect();
setOpenDropdown((prev) =>
    prev.index === index
    ? { index: null, position: null }
    : { index, position: { top: rect.bottom + window.scrollY, left: rect.right - 140 } }
);
};

const renderRow = (item: SuspiciousActivity) => (
<tr key={item.index}>
    <td className="p-4 text-[14px] border border-gray-200">{item.name}</td>
    <td className="p-4 text-[14px] border border-gray-200">{item.issueType}</td>
    <td className="p-4 text-[14px] border border-gray-200">{item.description}</td>
    <td className="p-4 border border-gray-200 relative">
    <button
        onClick={(e) => handleDropdown(item.index!, e)}
        className="flex items-center justify-center"
    >
        <Image src={item.actions} alt="more options" width={20} height={20} />
    </button>
    </td>
</tr>
);

const renderDropdownPortal = () => {
if (!openDropdown.position || openDropdown.index === null) return null;

return createPortal(
    <div
    style={{
        position: 'absolute',
        top: openDropdown.position.top,
        left: openDropdown.position.left,
        width: 140,
    }}
    className="z-50 bg-white border border-gray-200 rounded-md shadow-md"
    >
    <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
        View Details
    </button>
    <div className="border-t border-gray-200" />
    <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
        Flag
    </button>
    </div>,
    document.body
);
};

const columns = [
{ header: 'Name', accessor: 'name' },
{ header: 'Email', accessor: 'issueType' },
{ header: 'Phone', accessor: 'description' },
{ header: 'Actions', accessor: 'actions' },
];

return (
<div className="bg-white rounded-md mt-2 w-full">
    <Table columns={columns} renderRow={renderRow} data={data} />
    {renderDropdownPortal()}
</div>
);
}
