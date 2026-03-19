'use client';
import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { TransacFeeData } from '@/lib/data';
import Table from './Table';
import Image from 'next/image';

type Fee = {
  feeType: string;
  amount: string;
  minimumCap: string;
  maximumCap: string;
  actions: string;
  index?: number;
};

export default function TransacFeeTable() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [dropdownPos, setDropdownPos] = useState<{ top: number; left: number } | null>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const data = TransacFeeData.users.map((fee, i) => ({ ...fee, index: i }));

  const handleButtonClick = (index: number) => {
    if (openIdx === index) {
      setOpenIdx(null);
      setDropdownPos(null);
    } else {
      const rect = buttonRefs.current[index]?.getBoundingClientRect();
      if (rect) {
        setDropdownPos({ top: rect.bottom + window.scrollY, left: rect.left + window.scrollX });
        setOpenIdx(index);
      }
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest('.dropdown-portal')) {
        setOpenIdx(null);
        setDropdownPos(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const renderRow = (item: Fee) => (
    <tr key={item.index}>
      <td className="p-4 text-[14px] border border-gray-200">{item.feeType}</td>
      <td className="p-4 text-[14px] border border-gray-200">{item.amount}</td>
      <td className="p-4 text-[14px] border border-gray-200">{item.minimumCap}</td>
      <td className="p-4 text-[14px] border border-gray-200">{item.maximumCap}</td>
      <td className="p-4 border border-gray-200 relative">
        <button
          ref={el => { buttonRefs.current[item.index!] = el; }}
          onClick={() => handleButtonClick(item.index!)}
          className="flex items-center justify-center"
        >
          <Image src={item.actions} alt="more options" width={20} height={20} />
        </button>
      </td>
    </tr>
  );

  return (
    <div className="bg-white rounded-md mt-2 w-full h-full overflow-visible relative">
      <Table columns={[
        { header: 'Fee Type', accessor: 'feeType' },
        { header: 'Amount', accessor: 'amount' },
        { header: 'Minimum Cap', accessor: 'minimumCap' },
        { header: 'Maximum Cap', accessor: 'maximumCap' },
        { header: 'Actions', accessor: 'actions' },
      ]} renderRow={renderRow} data={data.map((p, i) => ({ ...p, index: i }))} />

      {openIdx !== null && dropdownPos &&
        createPortal(
          <div
            className="dropdown-portal absolute z-50 w-40 bg-white border border-gray-200 rounded-md shadow-md"
            style={{ top: dropdownPos.top, left: dropdownPos.left }}
          >
            <button
              className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
              onClick={() => {
                console.log('Edit Fee', data[openIdx].feeType);
                setOpenIdx(null);
              }}
            >
              Edit Fee
            </button>
            <div className="border-t border-gray-200" />
            <button
              className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
              onClick={() => {
                console.log('Delete Fee', data[openIdx].feeType);
                setOpenIdx(null);
              }}
            >
              Delete Fee
            </button>
          </div>,
          document.body
        )}
    </div>
  );
}
