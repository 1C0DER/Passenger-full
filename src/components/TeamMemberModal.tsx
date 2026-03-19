'use client';
import { useState } from 'react';

export default function TeamMemberModal({
onClose,
}: {
onClose: () => void;
}) {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [role, setRole] = useState('');

return (
<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm p-4">
    <div className="bg-[rgba(248,244,251,1)] w-full max-w-md sm:max-w-lg rounded-2xl p-6 sm:p-8 relative">
    <div className="relative mb-6">
        <h2 className="text-[20px] font-medium text-center">Add Team Member</h2>
        <button
        className="absolute right-2 top-2 text-xl sm:right-4 sm:top-4"
        onClick={onClose}
        >
        ✕
        </button>
    </div>

    <div className="space-y-5">
        <div>
        <label className="block mb-1 text-[15px]">Full Name</label>
        <input
            type="text"
            className="w-full rounded-md px-4 py-2 bg-white focus:outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        </div>

        <div>
        <label className="block mb-1 text-[15px]">Email Address</label>
        <input
            type="email"
            className="w-full rounded-md px-4 py-2 bg-white focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        </div>

        <div>
        <label className="block mb-1 text-[15px]">Role</label>
        <input
            type="text"
            className="w-full rounded-md px-4 py-2 bg-white focus:outline-none"
            value={role}
            onChange={(e) => setRole(e.target.value)}
        />
        </div>
    </div>

    <div className="mt-8 flex flex-col sm:flex-row justify-between gap-3">
        <button
        onClick={onClose}
        className="flex-1 px-4 py-3 border border-[rgba(52,209,134,1)] text-[rgba(52,209,134,1)] rounded-full font-medium text-sm sm:text-base"
        >
        Cancel
        </button>
        <button
        className="flex-1 px-4 py-3 rounded-full bg-[rgba(52,209,134,1)] text-white font-medium text-sm sm:text-base"
        onClick={() => {
            console.log({ name, email, role });
            onClose();
        }}
        >
        Add
        </button>
    </div>
    </div>
</div>
);
}
