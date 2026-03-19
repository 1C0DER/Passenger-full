'use client';

import Image from 'next/image';
import { SupportChatData } from '@/lib/data';

export default function Chats() {
return (
<div className="flex flex-col gap-5">
    {SupportChatData.chats.map(chat => (
    <div
        key={chat.id}
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center hover:bg-gray-50"
    >
        <div className="flex items-center gap-3 mb-2 sm:mb-0">
        <div className="flex items-center relative">
            {chat.online && (
            <span className="w-3 h-3 bg-green-500 rounded-full mr-4"></span>
            )}
            <Image
            src={chat.avatar}
            width={48}
            height={48}
            alt="avatar"
            className="rounded-full"
            />
        </div>
        <div>
            <p className="font-medium text-[15px]">{chat.name}</p>
            <p className="text-gray-500 text-sm truncate max-w-[200px] sm:max-w-[300px] md:max-w-[400px]">
            {chat.message}
            </p>
        </div>
        </div>

        <div className="flex items-center gap-4">
        <span
            className={`px-4 py-1 rounded-full text-sm font-medium ${
            chat.status === 'Resolved'
                ? 'bg-[#E4F8EE] text-[#34D186]'
                : 'bg-[#FFF7D4] text-[#D1A234]'
            }`}
        >
            {chat.status}
        </span>
        <p className="text-gray-400 text-sm">{chat.time}</p>
        </div>
    </div>
    ))}
</div>
);
}
