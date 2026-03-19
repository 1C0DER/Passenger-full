'use client';
import { useState } from 'react';
import Table from './Table';
import { AdminActionsData } from '@/lib/data';

type AdminActionRecord = {
name: string;
dateTime: string;
actionTaken: string;
affectedSection: string;
ipAddress: string;
index?: number;
};

export default function AdminActionsTable() {
const [openIdx, setOpenIdx] = useState<number | null>(null);

// Map AdminActionsData into table format
const data: AdminActionRecord[] = AdminActionsData.users.map((user, i) => ({
name: user.name,
dateTime: user.dateTime,
actionTaken: user.actionTaken,
affectedSection: user.affectedSection,
ipAddress: user.ipAddress,
index: i,
}));

const renderRow = (item: AdminActionRecord) => (
<tr key={item.index} className="relative">
    <td className="p-4 text-[14px] border border-gray-200">{item.name}</td>
    <td className="p-4 text-[14px] border border-gray-200">{item.dateTime}</td>
    <td className="p-4 text-[14px] border border-gray-200">{item.actionTaken}</td>
    <td className="p-4 text-[14px] border border-gray-200">{item.affectedSection}</td>
    <td className="p-4 text-[14px] border border-gray-200">{item.ipAddress}</td>
</tr>
);

const columns = [
{ header: 'Name', accessor: 'name' },
{ header: 'Date & Time', accessor: 'dateTime' },
{ header: 'Action Taken', accessor: 'actionTaken' },
{ header: 'Affected Section', accessor: 'affectedSection' },
{ header: 'IP Address', accessor: 'ipAddress' },
];

return (
<div className="bg-white rounded-md mt-2 w-full h-215px">
    <Table columns={columns} renderRow={renderRow} data={data} />
</div>
);
}
