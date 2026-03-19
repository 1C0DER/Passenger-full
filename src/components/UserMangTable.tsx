'use client';

import { useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Table from "./Table";

type User = {
  id: number;
  name: string;
  emailAddress: string;
  phoneNumber: string;
  Status: string;
  actions: string;
  index?: number;
};

export default function UserMangTable({
  users,
  onEdit,
  onDelete,
}: {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (user: User) => void;
}) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [dropdownPos, setDropdownPos] = useState<{ top: number; left: number } | null>(null);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const data = users.map((u, i) => ({ ...u, index: i }));

  const handleDropdown = (
    e: React.MouseEvent<HTMLButtonElement>,
    index: number,
    user: User
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setDropdownPos({
      top: rect.bottom + window.scrollY,
      left: rect.right - 140,
    });
    setOpenIdx(openIdx === index ? null : index);
    setSelectedUser(user);
  };

  const renderRow = (item: User) => {
    const statusLower = item.Status.toLowerCase();
    const statusClasses =
      statusLower === "active"
        ? "bg-[rgba(240,253,244,1)] border border-[rgba(134,239,172,1)]"
        : statusLower === "suspended"
        ? "bg-[rgba(254,242,242,1)] border border-[rgba(254,202,202,1)]"
        : "bg-gray-100 border";

    return (
      <tr key={item.index}>
        <td className="p-4 text-[14px] border border-gray-200">{item.name}</td>
        <td className="p-4 text-[14px] border border-gray-200">{item.emailAddress}</td>
        <td className="p-4 text-[14px] border border-gray-200">{item.phoneNumber}</td>
        <td className="p-4 border border-gray-200">
          <span className={`px-3 py-1 rounded-full text-sm ${statusClasses}`}>
            {item.Status}
          </span>
        </td>
        <td className="p-4 border border-gray-200 relative">
          <button onClick={(e) => handleDropdown(e, item.index!, item)}>
            <Image src={item.actions} alt="" width={20} height={20} />
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div className="bg-white rounded-md mt-6 w-full">
      <Table
        columns={[
          { header: "Name", accessor: "name" },
          { header: "Email Address", accessor: "emailAddress" },
          { header: "Phone Number", accessor: "phoneNumber" },
          { header: "Status", accessor: "status" },
          { header: "Actions", accessor: "actions" },
        ]}
        renderRow={renderRow}
        data={data}
      />

      {openIdx !== null && dropdownPos &&
        createPortal(
          <div
            style={{ top: dropdownPos.top, left: dropdownPos.left }}
            className="fixed z-50 w-[140px] bg-white border border-gray-200 rounded-md shadow-md"
          >
            <button
              className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
              onClick={() => {
                if (selectedUser) onEdit(selectedUser);
                setOpenIdx(null);
              }}
            >
              Edit User
            </button>

            <div className="border-t border-gray-200" />

            <button
              className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
              onClick={() => {
                if (selectedUser) onDelete(selectedUser);
                setOpenIdx(null);
              }}
            >
              Delete User
            </button>
          </div>,
          document.body
        )}
    </div>
  );
}
