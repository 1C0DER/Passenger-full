'use client';
import { useState } from 'react';

export default function AdminRoleModal({
onClose,
}: {
onClose: () => void;
}) {
const [roleTitle, setRoleTitle] = useState('');

return (
<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm p-4">
    <div className="bg-[rgba(248,244,251,1)] w-full max-w-md rounded-2xl p-6 sm:p-8 relative">
    <div className="relative mb-6">
        <h2 className="text-[20px] font-medium text-center pr-4">Add new Admin Role</h2>
        <button
        className="absolute right-0 top-0 text-2xl sm:text-xl p-1"
        onClick={onClose}
        >
        ✕
        </button>
    </div>

    <div className="space-y-5">
        <div>
        <label className="block mb-1 text-[15px]">Enter Role Title</label>
        <input
            type="text"
            className="w-full rounded-md px-4 py-2 bg-white focus:outline-none text-sm sm:text-base"
            value={roleTitle}
            onChange={(e) => setRoleTitle(e.target.value)}
        />
        </div>
    </div>

<div className="mt-8 flex flex-col sm:flex-row justify-between gap-3 sm:space-x-3">
    <button
        onClick={onClose}
        className="flex-1 px-1 py-3 border border-[rgba(52,209,134,1)] text-[rgba(52,209,134,1)] rounded-full font-medium text-sm sm:text-base"
    >
        Cancel
    </button>
    <button className="flex-1 px-1 py-3 rounded-full bg-[rgba(52,209,134,1)] text-white font-medium text-sm sm:text-base">
        Add
    </button>
</div>


    </div>
</div>
);
}
