'use client';
import { useState } from 'react';

export default function PermissionModal({
onClose,
}: {
onClose: () => void;
}) {
const [roleTitle, setRoleTitle] = useState('');

return (
<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm p-4">
    <div className="bg-[rgba(248,244,251,1)] w-full max-w-md rounded-2xl p-6 sm:p-8 relative">
    <div className="relative mb-6">
        <h2 className="text-[20px] font-medium text-center">Add new Permission</h2>
        <button
        className="absolute right-0 top-0 text-xl"
        onClick={onClose}
        >
        ✕
        </button>
    </div>

    <div className="space-y-5">
        <div>
        <label className="block mb-1 text-[15px]">Enter Permission</label>
        <input
            type="text"
            className="w-full rounded-md px-4 py-2 bg-white focus:outline-none"
            value={roleTitle}
            onChange={(e) => setRoleTitle(e.target.value)}
        />
        </div>
    </div>

    <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-between">
    <button
        onClick={onClose}
        className="w-full sm:min-w-[140px] px-6 sm:px-10 py-3 border border-[rgba(52,209,134,1)] text-[rgba(52,209,134,1)] rounded-full font-medium text-sm"
    >
        Cancel
    </button>
    <button
        className="w-full sm:min-w-[140px] px-6 sm:px-10 py-3 rounded-full bg-[rgba(52,209,134,1)] text-white font-medium text-sm"
    >
        Add
    </button>
    </div>
    </div>
</div>
);
}
