import { userTableData } from "@/lib/data";
import Table from "./Table";
import Image from "next/image";

type User = {
    name: string;
    issueType: string;
    description: string;
    actions: string;
}

const columns = [
    { header: "Name", accessor: "name" },
    { header: "Issue Type", accessor: "issueType"},
    { header: "Description", accessor: "description"},
    { header: "Actions", accessor: "actions"}
]

const UserTable = () => {
    const renderRow = (item: User) => {
    return (
        <tr>
            <td className="p-4 text-sm text-gray-900 border border-gray-200">{item.name}</td>
            <td className="p-4 text-sm text-gray-900 border border-gray-200 md:table-cell">{item.issueType}</td>
            <td className="p-4 text-sm text-gray-900 border border-gray-200 md:table-cell">{item.description}</td>
            <td className="p-4 border border-gray-200 md:table-cell">
            <Image src={item.actions} alt="action-icon" width={20} height={20} className="cursor-pointer"/></td>
        </tr>
    );
    };

    return (
    <div>
        <div className="bg-white rounded-md mt-6 w-full h-full">
        <Table columns={columns} renderRow={renderRow} data={userTableData.users} />
        </div>
    </div>
    );
    };

export default UserTable;