'use client';
import { useState } from 'react';
import { EscrowPoliciesData } from '@/lib/data';
import Table from './Table';
import Image from 'next/image';
import { createPortal } from 'react-dom';

type Policy = {
  policyName: string;
  type: string;
  releaseTime: string;
  actions: string;
  index?: number;
};

export default function EscrowPoliciesTable() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [dropdownPos, setDropdownPos] = useState<{ top: number; left: number }>({ top: 0, left: 0 });

  const data: Policy[] = EscrowPoliciesData.users.map((p, i) => ({ ...p, index: i }));

  const handleDropdownToggle = (e: React.MouseEvent<HTMLButtonElement>, idx: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setDropdownPos({ top: rect.bottom + window.scrollY, left: rect.right - 140 });
    setOpenIdx(openIdx === idx ? null : idx);
  };

  const renderRow = (item: Policy) => (
    <tr key={item.index}>
      <td className="p-4 text-[14px] border border-gray-200">{item.policyName}</td>
      <td className="p-4 text-[14px] border border-gray-200">{item.type}</td>
      <td className="p-4 text-[14px] border border-gray-200">{item.releaseTime}</td>
      <td className="p-4 border border-gray-200 relative">
        <button
          onClick={(e) => handleDropdownToggle(e, item.index!)}
          className="flex items-center justify-center"
        >
          <Image src={item.actions} alt="more options" width={20} height={20} />
        </button>
      </td>
    </tr>
  );

  const columns = [
    { header: 'Policy Name', accessor: 'policyName' },
    { header: 'Type', accessor: 'type' },
    { header: 'Release Time', accessor: 'releaseTime' },
    { header: 'Actions', accessor: 'actions' },
  ];

  return (
    <div className="bg-white rounded-md mt-2 w-full overflow-x-auto relative">
      <Table columns={columns} renderRow={renderRow} data={data} />

      {openIdx !== null &&
        createPortal(
          <div
            className="absolute z-50 w-[140px] bg-white border border-gray-200 rounded-md shadow-lg"
            style={{ top: dropdownPos.top, left: dropdownPos.left }}
          >
            <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
              Edit&nbsp;Policy
            </button>
            <div className="border-t border-gray-200" />
            <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
              Delete&nbsp;Policy
            </button>
          </div>,
          document.body
        )}
    </div>
  );
}
