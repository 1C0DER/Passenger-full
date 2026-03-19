    const ParcelSendingHistory = () => {
    const data = [
    {
        status: "Completed",
        sender: "Parcel Sender Name",
        route: "Jos → Abuja",
        size: "Small",
        date: "14/02/2025",
        time: "8am",
    },
    {
        status: "Completed",
        sender: "Parcel Sender Name",
        route: "Jos → Abuja",
        size: "Small",
        date: "14/02/2025",
        time: "8am",
    },
    ];

    return (
    <div className="w-full">
        <h2 className="text-[18px] font-normal mb-4">Parcel Sending History</h2>
        <div className="flex flex-wrap sm:flex-nowrap gap-4 overflow-x-auto">
        {data.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl p-4 min-w-[280px] sm:w-[300px] flex-shrink-0 flex flex-col gap-3">
            <p className="text-[16px]">
                Status:{" "}
                <span className="bg-[rgba(240,253,244,1)] border border-[rgba(134,239,172,1)] px-2 py-1 rounded-xl">
                {item.status}
                </span>
            </p>
            <p className="text-[14px]">{item.sender}</p>
            <p className="text-[14px]">{item.route}</p>
            <p className="text-[14px]">Parcel size: {item.size}</p>
            <div className="flex justify-between text-sm">
                <p>Date: {item.date}</p>
                <p>{item.time}</p>
            </div>
            </div>
        ))}
        </div>
    </div>
    );
    };

    export default ParcelSendingHistory;
