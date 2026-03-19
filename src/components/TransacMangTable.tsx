'use client';
import { TransacTableData } from '@/lib/data';
import Table from './Table';

/** Type that matches each row in TransacTableData */
type Transaction = {
    user: string;
    transactionType: string;
    amount: string;
    date: string;
    time: string;
};

/** Column definitions for <Table /> */
const columns = [
    { header: 'User',             accessor: 'user'            },
    { header: 'Transaction Type', accessor: 'transactionType' },
    { header: 'Amount',           accessor: 'amount'          },
    { header: 'Date',             accessor: 'date'            },
    { header: 'Time',             accessor: 'time'            }
];

/** How to render each row */
const renderRow = (item: Transaction) => (
    <tr>
        <td className="p-4 text-[14px] border border-gray-200">{item.user}</td>
        <td className="p-4 text-[14px] border border-gray-200">{item.transactionType}</td>
        <td className="p-4 text-[14px] border border-gray-200">{item.amount}</td>
        <td className="p-4 text-[14px] border border-gray-200">{item.date}</td>
        <td className="p-4 text-[14px] border border-gray-200">{item.time}</td>
    </tr>
);

/** Component export */
const TransacMangTable = () => (
    <div className="bg-white rounded-md mt-6 w-full">
        <Table columns={columns} renderRow={renderRow} data={TransacTableData.users}/>
    </div>
);

export default TransacMangTable;
