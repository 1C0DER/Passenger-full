'use client';

import { useState } from 'react';
import FAQsModal from './FAQsModal'; 

export default function FAQs() {
const [faqs, setFaqs] = useState([
{ id: 1, question: 'FAQ 1', answer: 'Answer.......' },
{ id: 2, question: 'FAQ 2', answer: 'Answer.......' },
{ id: 3, question: 'FAQ 3', answer: 'Answer.......' },
{ id: 4, question: 'FAQ 4', answer: 'Answer.......' },
]);

const [showModal, setShowModal] = useState(false);

return (
<div className="flex flex-col gap-4">
    <div className="flex mb-2 justify-between items-center">
    <h2 className="text-[18px] mb-2">FAQs</h2>
    <button
        onClick={() => setShowModal(true)}
        className="px-4 py-2 bg-[#34D186] text-white rounded-full hover:bg-green-600"
    >
        Add new FAQ
    </button>
    </div>

    {faqs.map(faq => (
    <div
        key={faq.id}
        className="bg-white rounded-lg pt-3 pb-5.5 px-3 flex flex-col gap-3 hover:shadow-md transition-shadow"
    >
        <div className="flex justify-between items-center">
        <h2 className="text-[16px]">{faq.question}</h2>
        <span className="cursor-pointer text-gray-400">⋮</span>
        </div>
        <div className="border-t border-gray-300 w-full"></div>
        <p className="text-gray-500 text-[14px]">{faq.answer}</p>
    </div>
    ))}

    {showModal && <FAQsModal onClose={() => setShowModal(false)} />}
</div>
);
}
