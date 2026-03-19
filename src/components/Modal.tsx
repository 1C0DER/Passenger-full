'use client';
import { ReactNode } from 'react';

export default function Modal({open,onClose,children,}: {
open: boolean;
onClose: () => void;
children: ReactNode;
}) {
if (!open) return null;

return (
<div
    className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30"
    onClick={onClose}>
    <div className="relative bg-[rgba(250,247,253,1)] p-8 rounded-2xl w-full max-w-md shadow-lg"
    onClick={(e) => e.stopPropagation()}>
    {children}
    </div>
</div>
);
}
