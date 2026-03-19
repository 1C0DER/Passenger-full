'use client';
import { useState } from 'react';

export default function TransactionFeeModal({
onClose,
}: {
onClose: () => void;
}) {
const [feeType, setFeeType] = useState<'Base' | 'Percentage' | null>(null);
const [amount, setAmount] = useState('');
const [minCap, setMinCap] = useState('');
const [maxCap, setMaxCap] = useState('');

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm p-4">
        <div className="bg-[rgba(248,244,251,1)] w-full max-w-lg sm:max-w-md rounded-2xl p-6 sm:p-8 relative">
            <div className="relative mb-6">
            <h2 className="text-[20px] font-medium text-center">Add Transaction Fee</h2>
            <button className="absolute right-0 top-0 text-xl" onClick={onClose}>✕</button>
            </div>

            <div className="flex flex-wrap gap-4 mb-6 justify-center sm:justify-start">
            <label className="flex items-center gap-2">
                <input
                type="radio"
                name="feeType"
                checked={feeType === 'Base'}
                onChange={() => setFeeType('Base')}
                />
                Base
            </label>
            <label className="flex items-center gap-2">
                <input
                type="radio"
                name="feeType"
                checked={feeType === 'Percentage'}
                onChange={() => setFeeType('Percentage')}
                />
                Percentage
            </label>
            </div>

            <div className="space-y-4">
            <div>
                <label className="block mb-1 text-[15px]">Amount</label>
                <input
                type="text"
                className="w-full rounded-md px-4 py-2 bg-white focus:outline-none"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                />
            </div>
            <div>
                <label className="block mb-1 text-[15px]">Minimum Cap</label>
                <input
                type="text"
                className="w-full rounded-md px-4 py-2 bg-white focus:outline-none"
                value={minCap}
                onChange={(e) => setMinCap(e.target.value)}
                />
            </div>
            <div>
                <label className="block mb-1 text-[15px]">Maximum Cap</label>
                <input
                type="text"
                className="w-full rounded-md px-4 py-2 bg-white focus:outline-none"
                value={maxCap}
                onChange={(e) => setMaxCap(e.target.value)}
                />
            </div>
            </div>

    <div className="mt-6 flex flex-col sm:flex-row sm:justify-between gap-3 sm:gap-4">
    <button
        onClick={onClose}
        className="flex-1 px-1 py-3 border border-[rgba(52,209,134,1)] text-[rgba(52,209,134,1)] rounded-full font-medium text-sm sm:text-base"
    >
        Cancel
    </button>
    <button
        className="flex-1 px-1 py-3 rounded-full bg-[rgba(52,209,134,1)] text-white font-medium text-sm sm:text-base"
    >
        Save
    </button>
    </div>

        </div>
        </div>
    );
    }
