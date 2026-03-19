const Table = ({
    columns,
    renderRow,
    data
}: {
    columns: { header: string; accessor: string; className?: string }[];
    renderRow: (item: any) => React.ReactNode;
    data: any[];
}) => {
    return (
    <div className="w-full overflow-x-auto">
        <table className="w-full min-w-[600px] table-auto border-collapse border border-gray-200">
        <thead>
        <tr className="text-left text-[14px] font-medium">
            {columns.map((col) => (
        <th
        key={col.accessor}
        className={`p-4 text-sm text-gray-900 font-medium border border-gray-200 ${col.className || ''}`}
        >
        {col.header}
        </th>
            ))}
        </tr>
        </thead>
        <tbody>{data.map((item) => renderRow(item))}</tbody>
    </table>
    </div>
    )
}

export default Table;