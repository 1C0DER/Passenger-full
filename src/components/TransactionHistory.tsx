const TransactionHistory = () => {
const transactions = [
{ amount: "+₦20,000", date: "09/02/2025", type: "in" },
{ amount: "-₦5,000", date: "08/02/2025", type: "out" },
{ amount: "+₦20,000", date: "09/02/2025", type: "in" },
{ amount: "-₦5,000", date: "08/02/2025", type: "out" },
];

return (
<div className="w-full">
<h1 className="text-[18px] mb-4">Transaction History</h1>
<div className="bg-white rounded-xl p-4 w-full sm:w-[350px]">
    {transactions.map((t, index) => (
    <div key={index} className="flex justify-between items-center mb-2">
        <div className={`flex items-center gap-2 ${t.type === "in" ? "text-green-500" : "text-black"}`}>
        <span>{t.type === "in" ? "↗" : "↘"}</span>
        <span>{t.amount}</span>
        </div>
        <span className="text-sm text-gray-500">{t.date}</span>
    </div>
    ))}
</div>
</div>

);
};

export default TransactionHistory;
