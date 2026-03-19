'use client';
import { useState } from 'react';
import Cards from '@/components/Cards';
import TableSearch from '@/components/TableSearch';
import Filter from '@/components/Filter';
import GenerateButton from '@/components/GenerateButton';
import Pagination from '@/components/Pagination';
import TransacMangTable from '@/components/TransacMangTable';
import RefundMangTable from '@/components/RefundMangTable';

const TransactionsManagaement = () => {
  const [activeTab, setActiveTab] = useState<'transactions' | 'refunds'>(
    'transactions'
  );

  const tabs = [
    { key: 'transactions', label: 'Transactions' },
    { key: 'refunds', label: 'Refunds' }
  ];

  return (
    <div className="p-7 flex flex-col gap-6">
      <h1 className="font-medium text-[24px]">Transactions Management</h1>

      <div className="w-full md:w-1/2">
        <div className="flex gap-7 flex-wrap justify-between">
          <Cards type="Total Transactions" value="N400,000" />
          <Cards type="Total Refund" value="N20,000" />
        </div>
      </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-4 sm:gap-12 mt-4">
        {tabs.map(tab => (
            <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key as 'transactions' | 'refunds')}
            className={`relative pb-3 text-[17px] font-medium flex-1 text-center sm:flex-none ${
                activeTab === tab.key
                ? 'text-[rgba(52,209,134,1)]'
                : 'text-gray-500'
            }`}
            >
            {tab.label}
            {activeTab === tab.key && (
                <span className="absolute left-0 -bottom-[2px] h-[3px] w-full bg-[rgba(52,209,134,1)] rounded-full" />
            )}
            </button>
        ))}
        </div>

      {/* Search, Filter, Generate Button */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <TableSearch />
          <Filter />
        </div>
        <GenerateButton />
      </div>

      {/* Tables */}
      <div className="w-full h-[514px]">
        {activeTab === 'transactions' ? <TransacMangTable /> : <RefundMangTable />}
        <Pagination />
      </div>
    </div>
  );
};

export default TransactionsManagaement;
