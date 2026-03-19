'use client';
import React, { useState } from 'react';

interface TAndDModalProps {
onClose: () => void;
}

const TAndDModal: React.FC<TAndDModalProps> = ({ onClose }) => {
const [version, setVersion] = useState('');
const [title, setTitle] = useState('');
const [content, setContent] = useState('');

return (
<div className="fixed inset-0 backdrop-blur-sm bg-white/30 flex items-center justify-center z-50">
    <div className="bg-[rgba(248,244,251,1)] rounded-xl w-full max-w-md p-6 shadow-lg">
    <div className="relative mb-6">
    <h2 className="text-[20px] font-medium text-center">Add Terms And Conditions</h2>
    <button className="absolute right-0 top-0 text-xl" onClick={onClose}>✕</button>
    </div>

    <div className="flex flex-col gap-4">
        <div>
        <label className="block text-sm mb-1">Enter Version</label>
        <input
            type="text"
            value={version}
            onChange={(e) => setVersion(e.target.value)}
            className="w-full px-4 py-3 rounded-md border border-gray-200 bg-white focus:outline-none"/>
        </div>

        <div>
        <label className="block text-sm mb-1">Enter Title</label>
        <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-3 rounded-md border border-gray-200 bg-white focus:outline-none"/>
        </div>

        <div>
        <label className="block text-sm mb-1">Enter T&C</label>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} rows={5} className="w-full px-4 py-3 bg-white rounded-md border border-gray-200 focus:outline-none resize-none"/>
        </div>
    </div>

    <div className="flex justify-between mt-6">
        <button className="px-6 py-2 rounded-full border border-[rgba(52,209,134,1)] text-[rgba(52,209,134,1)] font-medium text-sm" onClick={() => {onClose();}}>Save as Draft</button>
        <button className="px-6 py-2 rounded-full bg-[rgba(52,209,134,1)] text-white font-medium text-sm" onClick={() => {onClose();}}>Publish</button>
    </div>
    </div>
</div>
);
};

export default TAndDModal;
