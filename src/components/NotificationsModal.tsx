'use client';
import React, { useState } from 'react';

interface NotificationsModalProps {
onClose: () => void;
onScheduleClick: () => void;
}

const NotificationsModal: React.FC<NotificationsModalProps> = ({ onClose, onScheduleClick }) => {
const [version, setVersion] = useState('');
const [content, setContent] = useState('');
const [notificationType, setNotificationType] = useState('');
const [targetAudience, setTargetAudience] = useState('');

return (
<div className="fixed inset-0 backdrop-blur-sm bg-white/30 flex items-center justify-center z-50 px-4">
    <div className="bg-[#F8F4FB] rounded-xl w-full max-w-lg p-6 sm:p-8 shadow-lg">
    {/* Header */}
    <div className="relative mb-6">
        <h2 className="text-[20px] font-medium text-center">Add Notification</h2>
        <button className="absolute right-0 top-0 text-xl" onClick={onClose}>
        ✕
        </button>
    </div>

    {/* Form Wrapper */}
    <div className="flex flex-col gap-4 max-h-[70vh] overflow-y-auto">
        {/* Title */}
        <div>
        <label className="block text-sm mb-1">Title</label>
        <input
            type="text"
            value={version}
            onChange={(e) => setVersion(e.target.value)}
            className="w-full px-4 py-3 rounded-md border border-gray-200 bg-white focus:outline-none"
        />
        </div>

        {/* Notification Type */}
        <div>
        <label className="block text-sm mb-1">Notification Type</label>
        <div className="relative w-full">
            <select
            value={notificationType}
            onChange={(e) => setNotificationType(e.target.value)}
            className="w-full px-4 py-3 rounded-md border border-gray-200 bg-white focus:outline-none cursor-pointer appearance-none"
            >
            <option value="Push">Push Notification</option>
            <option value="Email">Email</option>
            <option value="InApp">Application Notification</option>
            </select>
            <span className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none">
            ▼
            </span>
        </div>
        </div>

        {/* Target Audience */}
        <div>
        <label className="block text-sm mb-1">Target Audience</label>
        <div className="relative w-full">
            <select
            value={targetAudience}
            onChange={(e) => setTargetAudience(e.target.value)}
            className="w-full px-4 py-3 rounded-md border border-gray-200 bg-white focus:outline-none cursor-pointer appearance-none"
            >
            <option value="All">All Users</option>
            <option value="Tier1">Tier-1 users</option>
            <option value="Tier2">Tier-2 users</option>
            </select>
            <span className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none">
            ▼
            </span>
        </div>
        </div>

        {/* Message */}
        <div>
        <label className="block text-sm mb-1">Message</label>
        <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={5}
            className="w-full px-4 py-3 bg-white rounded-md border border-gray-200 focus:outline-none resize-none"
        />
        </div>
    </div>

    {/* Actions */}
    <div className="flex flex-col sm:flex-row justify-between gap-3 mt-6">
        <button
        className="px-5 py-3 rounded-full border border-[rgba(52,209,134,1)] text-[rgba(52,209,134,1)] font-medium text-sm w-full sm:w-auto"
        onClick={() => {
            onClose();
            onScheduleClick();
        }}
        >
        Schedule Notification
        </button>
        <button
        className="px-16 py-3 rounded-full bg-[rgba(52,209,134,1)] text-white font-medium text-sm w-full sm:w-auto"
        onClick={onClose}
        >
        Send Now
        </button>
    </div>
    </div>
</div>
);
};

export default NotificationsModal;
