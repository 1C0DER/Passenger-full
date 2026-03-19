'use client';
import { JSX, useState } from 'react';
import TransacFeeTable from '@/components/TransacFeeTable';
import TransactionFeeModal from '@/components/TransactionFeeModal';
import EscrowPoliciesTable from '@/components/EscrowPoliciesTable';
import EscrowPolicyModal from '@/components/EscrowPolicyModal';
import TAndDTable from '@/components/T&DTable';
import TAndDModal from '@/components/T&DModal';
import PrivacyPolicyTable from '@/components/PrivacyPolicyTable';
import PrivacyPolicyModal from '@/components/PrivacyPolicyModal';

const SystemSettings = () => {
  const [activeTab, setActiveTab] = useState<'fees' | 'escrow' | 'terms' | 'privacy'>('fees');
  const [showModal, setShowModal] = useState(false);

  const tabs = [
    { key: 'fees', label: 'Transaction Fees' },
    { key: 'escrow', label: 'Escrow Policies' },
    { key: 'terms', label: 'Terms & Conditions' },
    { key: 'privacy', label: 'Privacy Policies' },
  ];

  const renderTableWithButton = (label: string, TableComponent: JSX.Element) => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => setShowModal(true)}
          className="px-6 py-3 rounded-full text-white text-sm md:text-base font-medium flex-1 sm:flex-none"
          style={{ backgroundColor: 'rgba(52, 209, 134, 1)' }}
        >
          {label}
        </button>
      </div>
      <div className="w-full overflow-auto">{TableComponent}</div>
    </div>
  );

  return (
    <div className="p-4 md:p-7 flex flex-col gap-6">
      <h1 className="font-medium text-[22px] md:text-[24px]">System Settings</h1>

      <div className="flex flex-wrap gap-4">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key as any)}
            className={`relative pb-2 md:pb-3 text-[14px] md:text-[16px] font-medium border-b-2 ${
              activeTab === tab.key
                ? 'text-[rgba(52,209,134,1)] border-[rgba(52,209,134,1)]'
                : 'text-gray-500 border-transparent'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'fees' &&
        renderTableWithButton('Add new transaction fee', <TransacFeeTable />)}

      {activeTab === 'escrow' &&
        renderTableWithButton('Add new escrow policy', <EscrowPoliciesTable />)}

      {activeTab === 'terms' &&
        renderTableWithButton('Add new term & conditions', <TAndDTable />)}

      {activeTab === 'privacy' &&
        renderTableWithButton('Add new privacy policy', <PrivacyPolicyTable />)}

      {showModal && activeTab === 'fees' && <TransactionFeeModal onClose={() => setShowModal(false)} />}
      {showModal && activeTab === 'escrow' && <EscrowPolicyModal onClose={() => setShowModal(false)} />}
      {showModal && activeTab === 'terms' && <TAndDModal onClose={() => setShowModal(false)} />}
      {showModal && activeTab === 'privacy' && <PrivacyPolicyModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default SystemSettings;
