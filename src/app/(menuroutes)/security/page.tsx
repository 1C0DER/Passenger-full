'use client';
import { useState } from 'react';
import AdminRoleTable from '@/components/AdminRoleTable';
import AdminRoleModal from '@/components/AdminRoleModal';
import SuspiciousActicitiesTable from '@/components/SuspiciousActivitiesTable';
import AdminLoginsTable from '@/components/AdminLoginsTable';
import AdminActionsTable from '@/components/AdminActionsTable'; 

const SystemSettings = () => {
const [activeTab, setActiveTab] = useState<'roles' | 'activity' | 'logs'>('roles');
const [showModal, setShowModal] = useState(false);

const tabs = [
{ key: 'roles', label: 'Admin Roles' },
{ key: 'activity', label: 'Suspicious Activities' },
{ key: 'logs', label: 'Audit Logs' }
];

return (
<div className="p-7 flex flex-col gap-6">
    <h1 className="font-medium text-[24px]">Security And Compliance</h1>

    {/* Tabs */}
    <div className="flex flex-wrap gap-4 md:gap-10">
    {tabs.map((tab) => (
        <button
        key={tab.key}
        onClick={() => setActiveTab(tab.key as any)}
        className={`relative pb-3 text-[16px] font-medium border-b-2 ${
            activeTab === tab.key
            ? 'text-[rgba(52,209,134,1)] border-[rgba(52,209,134,1)]'
            : 'text-gray-500 border-transparent'
        }`}
        >
        {tab.label}
        </button>
    ))}
    </div>

    {/* Add button */}
    {activeTab === 'roles' && (
    <div className="flex flex-wrap gap-4">
        <button
        onClick={() => setShowModal(true)}
        className="px-6 py-2 rounded-full text-white text-sm font-medium"
        style={{ backgroundColor: 'rgba(52, 209, 134, 1)' }}
        >
        Add new admin Role
        </button>
    </div>
    )}

    {/* Tables */}
    <div className="flex flex-col gap-6 w-full">
    {activeTab === 'roles' && (
        <div className="w-full min-h-[300px]">
        <AdminRoleTable />
        </div>
    )}

    {activeTab === 'activity' && (
        <div className="flex flex-col gap-4 w-full">
        <div className="w-full min-h-[250px]">
            <SuspiciousActicitiesTable />
        </div>
        </div>
    )}

    {activeTab === 'logs' && (
        <div className="flex flex-col gap-6 w-full">
        <div className="w-full min-h-[250px]">
            <h2 className="text-lg font-medium mb-2">Admin Logins</h2>
            <AdminLoginsTable />
        </div>
        <div className="w-full min-h-[250px]">
            <h2 className="text-lg font-medium mb-2">Admin Actions</h2>
            <AdminActionsTable />
        </div>
        </div>
    )}
    </div>

    {showModal && activeTab === 'roles' && (
    <AdminRoleModal onClose={() => setShowModal(false)} />
    )}
</div>
);
};

export default SystemSettings;
