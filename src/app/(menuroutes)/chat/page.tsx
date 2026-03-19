'use client';

import ContactSearch from '@/components/ContactSearch';
import Chats from '@/components/Chats';

export default function ChatPage() {
return (
<div className="h-full py-6 px-4 sm:px-6 md:px-8 lg:px-10 bg-[#F8F8F9]">
    <div className="mx-auto flex flex-col gap-6">
    <h1 className="font-medium text-[24px] sm:text-[28px]">Chat</h1>

    {/* Search bar container */}
    <div className="w-full sm:w-2/3 md:w-1/2 lg:w-[28%]">
        <ContactSearch />
    </div>

    {/* Live chats container */}
    <div className="w-full">
        <Chats />
    </div>
    </div>
</div>
);
}
