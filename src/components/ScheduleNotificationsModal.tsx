'use client';
import React, { useState } from 'react';

interface ScheduleNotificationsModalProps {
onClose: () => void;
}

const ScheduleNotificationsModal: React.FC<ScheduleNotificationsModalProps> = ({ onClose }) => {
const [date, setDate] = useState('');
const [time, setTime] = useState('');

return (
<div className="fixed inset-0 backdrop-blur-sm bg-white/30 flex items-center justify-center z-50">
    <div className="bg-white rounded-xl w-full max-w-md p-6 shadow-lg">
    {/* Header */}
    <div className="relative mb-6">
        <h2 className="text-[20px] font-medium text-center">Schedule Notification</h2>
        <button className="absolute right-0 top-0 text-xl" onClick={onClose}>
        ✕
        </button>
    </div>

    {/* Form */}
    <div className="flex flex-col gap-6">
        <div>
        <label className="block text-sm mb-1">Date</label>
        <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="DD/MM/YYYY"
            className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white focus:outline-none"
        />
        </div>

        <div>
        <label className="block text-sm mb-1">Time</label>
        <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            placeholder="00:00"
            className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white focus:outline-none"
        />
        </div>
    </div>

    {/* Actions */}
    <div className="flex justify-between mt-8">
        <button
        className="px-5 py-3 rounded-full border border-[rgba(52,209,134,1)] text-[rgba(52,209,134,1)] font-medium text-sm"
        onClick={onClose}
        >
        Cancel
        </button>
        <button
        className="px-10 py-3 rounded-full bg-[rgba(52,209,134,1)] text-white font-medium text-sm"
        onClick={() => {
            onClose();
        }}
        >
        Send Now
        </button>
    </div>
    </div>
</div>
);
};

export default ScheduleNotificationsModal;
