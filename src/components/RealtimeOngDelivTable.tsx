'use client';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { RealtimeOngDelivData } from '@/lib/data';
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

const RealtimeOngDelivTable = () => {
  const [openDropdown, setOpenDropdown] = useState<{
    type: 'sender' | 'traveler' | 'noOfChekIns' | null;
    index: number | null;
    position: { top: number; left: number } | null;
  }>({ type: null, index: null, position: null });

  const handleDropdown = (
    type: 'sender' | 'traveler' | 'noOfChekIns',
    index: number,
    e: React.MouseEvent<HTMLImageElement>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setOpenDropdown((prev) =>
      prev.index === index && prev.type === type
        ? { type: null, index: null, position: null }
        : { type, index, position: { top: rect.bottom + window.scrollY, left: rect.right - 160 } }
    );
  };

  const renderRow = (item: OngoingDelivery) => {
    const index = RealtimeOngDelivData.users.indexOf(item);

    const renderCellWithDropdown = (value: string, type: 'sender' | 'traveler' | 'noOfChekIns') => (
      <td className="p-4 text-[14px] border border-gray-200 relative">
        <div className="flex items-center justify-between gap-2">
          <span>{value}</span>
          <Image
            src="/moredot.png"
            alt="options"
            width={14}
            height={14}
            className="cursor-pointer object-contain"
            onClick={(e) => handleDropdown(type, index, e)}
          />
        </div>
      </td>
    );

    return (
      <tr key={index}>
        <td className="p-4 text-[14px] border border-gray-200">{item.liveLocation}</td>
        <td className="p-4 text-[14px] border border-gray-200">{item.route}</td>
        <td className="p-4 text-[14px] border border-gray-200">{item.deliveryFee}</td>
        {renderCellWithDropdown(item.sender, 'sender')}
        {renderCellWithDropdown(item.traveler, 'traveler')}
        {renderCellWithDropdown(item.noOfChekIns, 'noOfChekIns')}
      </tr>
    );
  };

  const renderDropdownPortal = () => {
    if (!openDropdown.position || !openDropdown.type || openDropdown.index === null) return null;

    let buttonLabel = '';
    switch (openDropdown.type) {
      case 'sender':
        buttonLabel = 'Contact Sender';
        break;
      case 'traveler':
        buttonLabel = 'Contact Traveler';
        break;
      case 'noOfChekIns':
        buttonLabel = 'Send Notification';
        break;
    }

    return createPortal(
      <div
        style={{
          position: 'absolute',
          top: openDropdown.position.top,
          left: openDropdown.position.left,
          width: 160,
        }}
        className="z-50 bg-white border border-gray-200 rounded-md shadow-md"
      >
        <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">{buttonLabel}</button>
      </div>,
      document.body
    );
  };

  return (
    <div className="relative bg-white rounded-md mt-6 w-full">
      <Table columns={columns} renderRow={(item: OngoingDelivery) => renderRow(item)} data={RealtimeOngDelivData.users} />
      {renderDropdownPortal()}
    </div>
  );
};

export default RealtimeOngDelivTable;
