'use client';
import { useState } from 'react';
import { OngDelivData } from '@/lib/data';
import Table from './Table';
import Image from 'next/image';

type OngoingDelivery = {
    liveLocation: string;
    route: string;
    deliveryFee: string;
    sender: string;
    traveler: string;
    noOfChekIns: string;
};

const columns = [
    { header: 'Live Location', accessor: 'liveLocation' },
    { header: 'Route', accessor: 'route' },
    { header: 'Delivery Fee', accessor: 'deliveryFee' },
    { header: 'Sender', accessor: 'sender' },
    { header: 'Traveler', accessor: 'traveler' },
    { header: 'No of Check-ins', accessor: 'noOfChekIns' },
];

const OngDelivTable = () => {
    const [openDropdown, setOpenDropdown] = useState<{
        type: 'sender' | 'traveler' | null;
        index: number | null;
    }>({ type: null, index: null });

    const handleDropdown = (type: 'sender' | 'traveler', index: number) => {
        setOpenDropdown((prev) =>
        prev.index === index && prev.type === type
            ? { type: null, index: null }
            : { type, index }
        );
    };

    const renderRow = (item: OngoingDelivery) => {
        const index = OngDelivData.users.indexOf(item);

        return (
        <tr key={index} className="relative">
            <td className="p-4 text-[14px] border border-gray-200">{item.liveLocation}</td>
            <td className="p-4 text-[14px] border border-gray-200">{item.route}</td>
            <td className="p-4 text-[14px] border border-gray-200">{item.deliveryFee}</td>

            <td className="p-4 text-[14px] border border-gray-200 relative">
            <div className="flex items-center justify-between gap-2">
                <span>{item.sender}</span>
                <Image src="/moredot.png" alt="options" width={14} height={14} className="cursor-pointer object-contain" onClick={() => handleDropdown('sender', index)}/>
            </div>
            {openDropdown.type === 'sender' && openDropdown.index === index && (
                <div className="absolute right-0 mt-2 z-10 bg-white border border-gray-200 rounded-md shadow-md w-40">
                <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">Contact Sender</button>
                </div>
            )}
            </td>

            <td className="p-4 text-[14px] border border-gray-200 relative">
            <div className="flex items-center justify-between gap-2">
                <span>{item.traveler}</span>
                <Image src="/moredot.png" alt="options" width={14} height={14} className="cursor-pointer object-contain" onClick={() => handleDropdown('traveler', index)}/>
            </div>
            {openDropdown.type === 'traveler' && openDropdown.index === index && (
                <div className="absolute right-0 mt-2 z-10 bg-white border border-gray-200 rounded-md shadow-md w-40">
                <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">Contact Traveler</button>
                </div>
            )}
            </td>
            <td className="p-4 text-[14px] border border-gray-200">{item.noOfChekIns}</td>
        </tr>
        );
    };

    return (
    <div className="bg-white rounded-md mt-6 w-full">
    <Table columns={columns} renderRow={(item: OngoingDelivery) => renderRow(item)} data={OngDelivData.users}/>
    </div>
);
};

export default OngDelivTable;
