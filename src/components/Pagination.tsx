const Pagination = () => {
    return (
        <div className="p-4 flex justify-end">
            <div className="flex items-center gap-3 text-gray-600">
                <button disabled className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed">Previous</button>
                <div className="flex items-center gap-2">
                    <button className="px-3 py-1 rounded-full bg-[rgba(52,209,134,1)] text-white text-sm font-medium">1</button>
                    <button className="px-3 py-1 rounded-full text-sm font-medium">2</button>
                    <button className="px-3 py-1 rounded-full text-sm font-medium">3</button>
                </div>
                <button className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold">Next</button>
            </div>
        </div>
    );
};

export default Pagination;
