'use client';
import { RefundTableData } from '@/lib/data';
import Table from './Table';

/** Type for each refund entry */
type Refund = {
    user: string;
    amount: string;
    reason: string;
    date: string;
    time: string;
};

/** Table column configuration */
const columns = [
    { header: 'User',   accessor: 'user'   },
    { header: 'Amount', accessor: 'amount' },
    { header: 'Reason', accessor: 'reason' },
    { header: 'Date',   accessor: 'date'   },
    { header: 'Time',   accessor: 'time'   },
];

/** Row rendering logic */
const renderRow = (item: Refund) => (
    <tr>
        <td className="p-4 text-[14px] border border-gray-200">{item.user}</td>
        <td className="p-4 text-[14px] border border-gray-200">{item.amount}</td>
        <td className="p-4 text-[14px] border border-gray-200">{item.reason}</td>
        <td className="p-4 text-[14px] border border-gray-200">{item.date}</td>
        <td className="p-4 text-[14px] border border-gray-200">{item.time}</td>
    </tr>
);

/** Refund management table component */
const RefundMangTable = () => (
    <div className="bg-white rounded-md mt-6 w-full">
        <Table columns={columns} renderRow={renderRow} data={RefundTableData.users}/>
    </div>
);

export default RefundMangTable;
