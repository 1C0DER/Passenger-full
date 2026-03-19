'use client';
import Cards from "@/components/Cards";
import RealtimeOngDelivTable from "@/components/RealtimeOngDelivTable";

const RealtimeMonitoring = () => {
return (
<div className="p-4 md:p-7 flex flex-col gap-6">
    <h1 className="font-medium text-[24px]">Real-time Activities</h1>

    {/* Cards Section */}
    <div className="flex flex-wrap gap-7 justify-start">
    <div className="flex-1 min-w-[200px] max-w-[calc(50%-0.5rem)] sm:max-w-[45%] md:max-w-[23%]">
        <Cards type="Active users" value="15" />
    </div>
    <div className="flex-1 min-w-[200px] max-w-[calc(50%-0.5rem)] sm:max-w-[45%] md:max-w-[23%]">
        <Cards type="Ongoing deliveries" value="5" />
    </div>
    </div>

    {/* Table Section */}
    <div className="w-full mt-4">
    <h1 className="text-[18px] mb-2">Ongoing Deliveries</h1>
    <RealtimeOngDelivTable />
    </div>
</div>
);
}

export default RealtimeMonitoring;
