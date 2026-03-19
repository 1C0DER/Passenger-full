'use client';
import { useState } from "react";
import Table from "./Table";

type PermissionRow = {
    name: string;
    access: boolean[];
};

export default function PermissionTable({ onAddPermission }: { onAddPermission: () => void }) {
    const [roles] = useState([
        "Marketing Manager",
        "Market Researcher",
        "Content Marketer"
    ]);

    const [permissions, setPermissions] = useState<PermissionRow[]>([
        { name: "Can add users", access: [true, true, false] },
        { name: "Can add products to store", access: [true, true, false] },
        { name: "Can add rider to an order", access: [true, false, true] },
        { name: "Can approve/reject store creation request", access: [true, true, false] },
        { name: "Can process payout", access: [true, true, true] },
        { name: "Can process refund", access: [true, true, true] },
        { name: "Can create/add a coupon", access: [true, true, true] },
        { name: "Can update order status", access: [true, false, true] },
        { name: "Can update delivery status", access: [true, false, true] },
    ]);

    const toggle = (permIndex: number, roleIndex: number) => {
        setPermissions(prev => {
            const updated = [...prev];
            updated[permIndex].access[roleIndex] = !updated[permIndex].access[roleIndex];
            return updated;
        });
    };

    const columns = [
        { header: "Permissions", accessor: "name", className: "pl-4 p-7 text-[18px]" },
        ...roles.map(role => ({
            header: role,
            accessor: role.toLowerCase().replace(/\s+/g, "_"),
            className: "p-7 font-normal text-[16px] text-center"
        }))
    ];

    const permissionsWithIndex = permissions.map((p, i) => ({ ...p, index: i }));

    const renderRow = (item: PermissionRow & { index: number }) => (
        <tr key={item.index}>
            <td className="p-4 text-[16px] font-normal border border-gray-200">{item.name}</td>
            {item.access.map((allowed, roleIndex) => (
                <td key={roleIndex} className="p-4 border border-gray-200 text-center">
                    <input
                        type="checkbox"
                        checked={allowed}
                        onChange={() => toggle(item.index, roleIndex)}
                        className="w-5 h-5 mx-auto cursor-pointer accent-green-300"
                    />
                </td>
            ))}
        </tr>
    );

    return (
        <div className="bg-white rounded-lg w-full overflow-auto pt-7.5 p-6">
            <div className="flex flex-wrap gap-3 mb-6">
                <button
                    type="button"
                    className="border border-[rgba(188,240,215,1)] text-[16px] text-[rgba(52,209,134,1)] rounded-full px-6.5 py-3.5 font-medium hover:bg-green-50 transition"
                >
                    Edit Permissions
                </button>

                <button
                    type="button"
                    onClick={onAddPermission}
                    className="bg-[rgba(52,209,134,1)] text-white text-[16px] rounded-full px-6.5 py-3.5 font-medium"
                >
                    Add Permissions
                </button>
            </div>
            <Table columns={columns} renderRow={renderRow} data={permissionsWithIndex} />
        </div>
    );
}
