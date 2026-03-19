'use client';
import { useState } from 'react';
import Table from './Table';
import { AdminLoginsData } from '@/lib/data';

type LoginRecord = {
name: string;
dateTime: string;
ipAddress: string;
deviceInfo: string;
location: string;
index?: number;
};

export default function SuspiciousActivitiesTable() {
const [openIdx, setOpenIdx] = useState<number | null>(null);

const data: LoginRecord[] = AdminLoginsData.users.map((user, i) => ({
name: user.name,
dateTime: user.dateTime,
ipAddress: user.ipAddress,
deviceInfo: user.deviceInfo,
location: user.location,
index: i,
}));

const renderRow = (item: LoginRecord) => (
<tr key={item.index} className="relative">
    <td className="p-4 text-[14px] border border-gray-200">{item.name}</td>
    <td className="p-4 text-[14px] border border-gray-200">{item.dateTime}</td>
    <td className="p-4 text-[14px] border border-gray-200">{item.ipAddress}</td>
    <td className="p-4 text-[14px] border border-gray-200">{item.deviceInfo}</td>
    <td className="p-4 text-[14px] border border-gray-200">{item.location}</td>
</tr>
);

const columns = [
{ header: 'Name', accessor: 'name' },
{ header: 'Date & Time', accessor: 'dateTime' },
{ header: 'IP Address', accessor: 'ipAddress' },
{ header: 'Device Info', accessor: 'deviceInfo' },
{ header: 'Location', accessor: 'location' }
];

return (
<div className="bg-white rounded-md mt-2 w-full h-215px">
    <Table columns={columns} renderRow={renderRow} data={data} />
</div>
);
}
