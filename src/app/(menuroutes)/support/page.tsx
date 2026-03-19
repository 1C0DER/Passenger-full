'use client';

import { useState } from 'react';
import LiveChats from '@/components/LiveChats';
import FAQs from '@/components/FAQs';
import SupportContacts from '@/components/SupportContact';
import ContactSearch from '@/components/ContactSearch';

export default function SupportPage() {
const [activeTab, setActiveTab] = useState<'live' | 'faqs' | 'contact'>('live');

const tabs = [
{ key: 'live', label: 'Live Chats' },
{ key: 'faqs', label: 'FAQs' },
{ key: 'contact', label: 'Contact' },
];

return (
<div className="py-6 px-7.5 bg-[#F8F8F9] min-h-screen">
    <h1 className="font-medium text-[24px] mb-4">Support</h1>

    {/* Tabs */}
    <div className="flex flex-wrap gap-4 md:gap-8 mb-6">
    {tabs.map(tab => (
        <button
        key={tab.key}
        onClick={() => setActiveTab(tab.key as any)}
        className={`pb-2 text-[15px] font-medium ${
            activeTab === tab.key
            ? 'text-[rgba(52,209,134,1)] border-b-2 border-[#34D186]'
            : 'text-[rgba(1,30,12,0.6)] font-normal text-[16px]'
        }`}
        >
        {tab.label}
        </button>
    ))}
    </div>

    {/* Tab Content */}
    <div className="flex flex-col gap-6 w-full">
    {activeTab === 'live' && <LiveChats />}

    {activeTab === 'faqs' && (
        <div className="flex flex-col gap-6 w-full">
        <div className="w-full min-h-[250px]">
            <FAQs />
        </div>
        </div>
    )}

    {activeTab === 'contact' && (
        <div className="flex flex-col gap-6 w-full">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-[28%]">
        <ContactSearch />
        </div>
        <div className="w-full min-h-[250px]">
            <SupportContacts />
        </div>
        </div>
    )}
    </div>
</div>
);
}
