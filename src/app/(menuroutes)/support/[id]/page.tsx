'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { SupportChatData } from '@/lib/data';

export default function SupportChatPage({ params }: { params: { id: string } }) {
const router = useRouter();
const [chat, setChat] = useState<any>(null);

useEffect(() => {
if (params?.id) {
    const found = SupportChatData.chats.find(c => c.id === Number(params.id));
    setChat(found);
}
}, [params]);

if (!chat) return <div className="p-10 text-red-500 text-lg">Chat Not Found</div>;

return (
<div className="flex h-full flex-col bg-[#F8F8F9] px-5 py-5">
    
    {/* Header */}
    <div className="flex justify-between items-center pl-2.5 pr-1">
    <div className="flex items-center gap-4.5">
        <button onClick={() => router.back()} className="flex items-center">
        <Image src="/back.png" width={24} height={24} alt="Back" className="cursor-pointer"/>
        </button>
        <p className="font-normal text-[18px]">{chat.name}</p>
    </div>
    <button className="px-4 py-3 rounded-full border border-[#34D186] text-[#34D186] text-[14px] font-medium">
        Mark as resolved
    </button>
    </div>

    {/* Chat Messages */}
    <div className="flex-1 min-h-0 overflow-y-auto px-1 py-14">
    <div className="flex items-start gap-3 mb-10">
        <Image src={chat.avatar} alt="user" width={44} height={44} className="rounded-full mt-15"/>
        <div className="bg-white rounded-xl rounded-bl-none px-4 py-3 text-sm max-w-[700px] leading-6 shadow-sm">
        Hi, I sent a package through a traveler yesterday, but the recipient
        hasn’t received it yet. The traveler isn’t responding to my messages. 
        What should I do?
        </div>
    </div>

    <div className="flex items-start gap-3 justify-end">
        <div className="bg-[#34D186] text-white rounded-xl rounded-br-none px-4 py-3 text-sm max-w-[450px] leading-6 shadow-sm">
        Thank you for reaching out t.....
        </div>
        <Image src={chat.avatar} alt="admin" width={44} height={44} className="rounded-full mt-7"/>
    </div>
    </div>

    {/* Input Bar */}
    <div className="pr-4">
    <div className="flex items-center bg-white rounded-2xl px-4 py-5 shadow-sm">
        <input className="w-full bg-transparent outline-none text-[18px]" placeholder="Send your message...."/>
        <button>
        <Image src="/farrow.png" width={22} height={22} alt="Send" className="cursor-pointer ml-3"/>
        </button>
    </div>
    </div>

</div>
);
}
