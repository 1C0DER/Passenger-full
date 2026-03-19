'use client';
import Cards from "@/components/Cards";
import LineChart from "@/components/UserChart";
import DashTable from "@/components/DashTable";

const Dashboard = () => {
return (
    <div className="p-7 flex gap-6 flex-col md:flex:row">
        <h1 className="font-medium text-[24px]">Dashboard</h1>
        <div className="w-full">
            <div className="flex gap-7 justify-between flex-wrap">
                <Cards type="Active users" value="600" />
                <Cards type="Total deliveries" value="100" />
                <Cards type="Total transactions" value="N500,000" />
                <Cards type="Avg. delivery time" value="2hrs" />
                <Cards type="Delivery success rate" value="99%" />
            </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row gap-7">
        <div className="w-full lg:w-1/2 h-[300px]">
            <LineChart />
        </div>
        <div className="w-full lg:w-1/2 h-[300px]">
            <LineChart />
        </div>
        </div>
        <div className="w-full h-[400px]">
        <h1 className="font-medium text-[20px]">Flagged users</h1>
        <DashTable />
        <div className="flex justify-end mt-4">
            <button className="flex items-center gap-2 border border-[rgba(52,209,134,0.5)] text-[rgba(52,209,134,1)] font-medium text-sm py-2 px-4 rounded-full hover:bg-[rgba(52,209,134,0.05)] transition">
            View all
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
            </button>
        </div>
        </div>
    </div>
);
}

export default Dashboard;