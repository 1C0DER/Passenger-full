'use client';
import { useState } from 'react';

export default function FAQsModal({ onClose }: { onClose: () => void }) {
const [policyType, setPolicyType] = useState('');

return (
<div className="fixed inset-0 backdrop-blur-sm bg-white/30 flex items-center justify-center z-50">
    <div className="bg-[rgba(248,244,251,1)] p-8 rounded-2xl w-full max-w-md shadow-lg">
    <div className="relative mb-6">
    <h2 className="text-[20px] font-medium text-center">Add new FAQ</h2>
    <button className="absolute right-0 top-0 text-xl" onClick={onClose}>✕</button>
    </div>

    <form className="space-y-5">
        <div>
        <label className="block mb-2 text-[15px]">Enter a new question</label>
        <input
            type="text"
            className="w-full px-4 py-3 rounded-md bg-white focus:outline-none"/>
        </div>

        <div>
        <label className="block mb-2 text-[15px]">Enter an answer to the question</label>
        <input type="text" className="w-full px-4 py-3 rounded-md bg-white focus:outline-none"/>
        </div>

        <div className="flex justify-between items-center pt-4">
        <button type="button" className="w-[45%] py-3 border border-[rgba(52,209,134,1)] text-[rgba(52,209,134,1)] rounded-full" onClick={onClose}>Cancel</button>
        <button type="submit" className="w-[45%] py-3 bg-[rgba(52,209,134,1)] text-white rounded-full">Add FAQ</button>
        </div>
    </form>
    </div>
</div>
);
}
