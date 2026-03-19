'use client';
import { useState } from 'react';
import Image from 'next/image';
import TeamTable from '@/components/TeamTable';
import PermissionTable from '@/components/PermissionTable';
import PermissionModal from '@/components/PermissionModal';
import TeamMemberModal from '@/components/TeamMemberModal';

const SalesAndMarketing = () => {
const [activeTab, setActiveTab] = useState<'team' | 'permissions'>('team');
const [showTeamModal, setShowTeamModal] = useState(false);
const [showPermissionModal, setShowPermissionModal] = useState(false);

const tabs = [
{ key: 'team', label: 'Team' },
{ key: 'permissions', label: 'Permissions' },
];

return (
<div className="p-4 sm:p-7 flex flex-col gap-6 w-full">
    {/* Header */}
    <div className="flex items-center gap-4 sm:gap-7 flex-wrap">
    <Image src="/back.png" alt="back button" width={20} height={20} />
    <h1 className="font-medium text-[20px] sm:text-[24px]">Sales and Marketing</h1>
    </div>

    {/* Tabs */}
    <div className="flex gap-4 sm:gap-10 overflow-x-auto">
    {tabs.map(tab => (
        <button
        key={tab.key}
        onClick={() => setActiveTab(tab.key as any)}
        className={`relative pb-2 sm:pb-3 text-[14px] sm:text-[16px] font-medium border-b-2 whitespace-nowrap ${
            activeTab === tab.key
            ? 'text-[rgba(52,209,134,1)] border-[rgba(52,209,134,1)]'
            : 'text-gray-500 border-transparent'
        }`}
        >
        {tab.label}
        </button>
    ))}
    </div>

    {/* Add Team Button */}
    {activeTab === 'team' && (
    <div className="flex justify-start sm:justify-start mt-2 sm:mt-0">
        <button
        onClick={() => setShowTeamModal(true)}
        className="px-4 sm:px-6 py-2 rounded-full text-white text-sm sm:text-base font-medium"
        style={{ backgroundColor: 'rgba(52, 209, 134, 1)' }}
        >
        Add new team member
        </button>
    </div>
    )}

    {/* Table */}
    <div className="w-full overflow-x-auto">
    {activeTab === 'team' && (
        <TeamTable
        onEdit={() => setShowTeamModal(true)}
        onDelete={() => console.log('delete user')}
        />
    )}
    {activeTab === 'permissions' && (
        <PermissionTable onAddPermission={() => setShowPermissionModal(true)} />
    )}
    </div>

    {/* Modals */}
    {showTeamModal && activeTab === 'team' && (
    <TeamMemberModal onClose={() => setShowTeamModal(false)} />
    )}
    {showPermissionModal && activeTab === 'permissions' && (
    <PermissionModal onClose={() => setShowPermissionModal(false)} />
    )}
</div>
);
};

export default SalesAndMarketing;
