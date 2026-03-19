'use client';
import { useState } from 'react';
import { DelivTableData } from '@/lib/data';
import Table from './Table';
import Image from 'next/image';

type Delivery = {
  parcelType: string;
  route: string;
  traveler: string;
  deliveryFee: string;
  serviceFee: string;
  date: string;
  status: string;
  index?: number;
};

const columns = [
  { header: 'Parcel Type', accessor: 'parcelType' },
  { header: 'Route', accessor: 'route' },
  { header: 'Traveler', accessor: 'traveler' },
  { header: 'Delivery Fee', accessor: 'deliveryFee' },
  { header: 'Service Fee', accessor: 'serviceFee' },
  { header: 'Date', accessor: 'date' },
  { header: 'Status', accessor: 'status' }
];

const DelivMangTable = () => {
  const [data, setData] = useState<Delivery[]>(
    DelivTableData.users.map((u, i) => ({ ...u, index: i }))
  );
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const statusOptions = ['Delivered', 'In Transit', 'Pending'];

  const handleStatusChange = (index: number, newStatus: string) => {
    setData(prev =>
      prev.map((item, i) =>
        i === index ? { ...item, status: newStatus } : item
      )
    );
    setOpenIdx(null); // close dropdown after selection
  };

  const renderRow = (item: Delivery) => {
    const status = item.status.toLowerCase();
    const statusClasses =
      status === 'delivered'
        ? 'bg-[rgba(240,253,244,1)] border border-[rgba(134,239,172,1)] text-green-700'
        : status === 'in transit'
        ? 'bg-[rgba(255,249,230,1)] border border-[rgba(253,224,71,1)] text-yellow-700'
        : 'bg-gray-100 border text-gray-700';

    return (
      <tr key={item.index}>
        <td className="p-4 text-[14px] border border-gray-200">{item.parcelType}</td>
        <td className="p-4 text-[14px] border border-gray-200">{item.route}</td>
        <td className="p-4 text-[14px] border border-gray-200">{item.traveler}</td>
        <td className="p-4 text-[14px] border border-gray-200">{item.deliveryFee}</td>
        <td className="p-4 text-[14px] border border-gray-200">{item.serviceFee}</td>
        <td className="p-4 text-[14px] border border-gray-200">{item.date}</td>
        <td className="p-4 border border-gray-200 relative">
          <button
            onClick={() => setOpenIdx(openIdx === item.index ? null : item.index!)}
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm ${statusClasses}`}
          >
            {item.status}
            <Image src="/dropdown.png" alt="dropdown" width={12} height={12} className="object-contain"/>
          </button>

          {openIdx === item.index && (
            <div className="absolute right-0 mt-2 w-[140px] bg-white border border-gray-200 rounded-md shadow-md z-10">
              {statusOptions.map(option => (
                <button
                  key={option}
                  onClick={() => handleStatusChange(item.index!, option)}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </td>
      </tr>
    );
  };

  return (
    <div className="bg-white rounded-md mt-6 w-full">
      <Table columns={columns} renderRow={renderRow} data={data} />
    </div>
  );
};

export default DelivMangTable;
