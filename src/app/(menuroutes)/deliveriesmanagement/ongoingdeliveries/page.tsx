'use client';
import OngDelivTable from "@/components/OngDelivTable";
import Image from "next/image";

const OngoingDeliveries = () => {
return (
    <div className="p-7 flex flex-col md:flex:row">
        <div className="flex items-center gap-7 mb-5">
            <Image src="/back.png" alt="back button" width={20} height={20} />
            <h1 className="font-medium text-[24px]">Ongoing Deliveries</h1>
        </div>
        <div className="w-full h-[514px]">
            <OngDelivTable />
        </div>
    </div>
);
};

export default OngoingDeliveries;
