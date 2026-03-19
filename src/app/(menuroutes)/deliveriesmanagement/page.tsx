'use client';
import Cards from "@/components/Cards";
import DelivMangTable from "@/components/DelivMangTable";
import Filter from "@/components/Filter";
import GenerateButton from "@/components/GenerateButton";
import Pagination from "@/components/Pagination";
import TableSearch from "@/components/TableSearch";

const DeliveriesManagaement = () => {
return (
    <div className="p-7 flex gap-6 flex-col md:flex:row">
    <h1 className="font-medium text-[24px]">Deliveries Management</h1>
    <div className="w-[50%]">
        <div className="w-full flex flex-wrap gap-4 md:gap-7">
        <Cards
            type="Ongoing Deliveries"
            value="10"
            withArrow
            link="/deliveriesmanagement/ongoingdeliveries"
            editable
        />
        <Cards type="Resolved Deliveries" value="5" editable />
        </div>
    </div>
    <div className="flex flex-col mt-1">
        <h1 className="font-medium text-[20px] mb-4">All Deliveries</h1>
        <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                <div className="w-full sm:w-auto">
                    <TableSearch />
                </div>
                <div className="w-fit">
                    <Filter />
                </div>
            </div>
            <div className="w-fit">
            <GenerateButton />
            </div>
        </div>
        <div className="w-full h-[514px]">
            <DelivMangTable />
            <Pagination />
        </div>
    </div>
    </div>
);
};

export default DeliveriesManagaement;
