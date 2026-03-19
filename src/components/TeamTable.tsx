'use client';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { TeamTableData } from '@/lib/data';
import Table from './Table';
import Image from 'next/image';

type User = {
  role: string;
  name: string;
  issueType: string; // email field
  actions: string;
  index?: number;
};

export default function TeamTable({
  onEdit,
  onDelete,
}: {
  onEdit: () => void;
  onDelete: () => void;
}) {
  const [openDropdown, setOpenDropdown] = useState<{
    index: number | null;
    position: { top: number; left: number } | null;
  }>({ index: null, position: null });

  const data = TeamTableData.users.map((u, i) => ({ ...u, index: i }));

  const handleDropdown = (index: number, e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setOpenDropdown((prev) =>
      prev.index === index
        ? { index: null, position: null }
        : { index, position: { top: rect.bottom + window.scrollY, left: rect.right - 140 } }
    );
  };

  const renderDropdownPortal = () => {
    if (!openDropdown.position || openDropdown.index === null) return null;

    const user = data[openDropdown.index];
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
        <button
          className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
          onClick={() => {
            onEdit();
            setOpenDropdown({ index: null, position: null });
          }}
        >
          Edit User
        </button>
        <div className="border-t border-gray-200" />
        <button
          className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
          onClick={() => {
            onDelete();
            setOpenDropdown({ index: null, position: null });
          }}
        >
          Delete User
        </button>
      </div>,
      document.body
    );
  };

  const renderRow = (item: User) => (
    <tr key={item.index}>
      <td className="p-4 text-[14px] border border-gray-200">{item.role}</td>
      <td className="p-4 text-[14px] border border-gray-200">{item.name}</td>
      <td className="p-4 text-[14px] border border-gray-200">{item.issueType}</td>
      <td className="p-4 border border-gray-200 relative">
        <button onClick={(e) => handleDropdown(item.index!, e)}>
          <Image src={item.actions} alt="actions" width={20} height={20} />
        </button>
      </td>
    </tr>
  );

  const columns = [
    { header: 'Role', accessor: 'role' },
    { header: 'Name', accessor: 'name' },
    { header: 'Email', accessor: 'issueType' },
    { header: 'Actions', accessor: 'actions' },
  ];

  return (
    <div className="bg-white rounded-md w-full h-full relative">
      <Table columns={columns} renderRow={renderRow} data={data} />
      {renderDropdownPortal()}
    </div>
  );
}
