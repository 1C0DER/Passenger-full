'use client';
import { useState } from 'react';
import NotificationsModal from '@/components/NotificationsModal';
import ScheduleNotificationsModal from '@/components/ScheduleNotificationsModal';
import NotificationsTable from '@/components/NotificationsTable';

const SystemSettings = () => {
const [openModal, setOpenModal] = useState<'notifications' | 'schedule' | null>(null);

const closeModal = () => setOpenModal(null);

return (
<div className="p-7 flex flex-col gap-6">
    <div className="flex flex-wrap items-center gap-4 md:gap-18">
    <h1 className="font-medium text-[24px]">Notifications</h1>

    {/* Always visible success notification */}
    <div className="flex items-center gap-3 bg-[#3FC47A] text-white rounded-full px-6 py-2 max-w-max">
        <img
        src="/frame.png"
        alt="Success"
        className="w-5 h-5 flex-shrink-0"
        />
        <span>Notification Scheduled Successfully</span>
    </div>
    </div>

    <div className="flex gap-4">
    <button
        onClick={() => setOpenModal('notifications')}
        className="px-6 py-2 rounded-full text-white text-sm font-medium"
        style={{ backgroundColor: 'rgba(52, 209, 134, 1)' }}
    >
        Send Notification
    </button>
    </div>

    <div className="w-full">
    <NotificationsTable />
    </div>

    {openModal === 'notifications' && (
    <NotificationsModal
        onClose={closeModal}
        onScheduleClick={() => setOpenModal('schedule')}
    />
    )}
    {openModal === 'schedule' && <ScheduleNotificationsModal onClose={closeModal} />}
</div>
);
};

export default SystemSettings;
