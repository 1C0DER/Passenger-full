'use client';
import Image from "next/image";

const Filter = () => {
    return (
    <button className="bg-white flex items-center gap-2 px-4 py-2 rounded-md text-sm hover:bg-gray-100">
        <Image src="/filter.png" alt="Filter" width={16} height={16}/>
    Filter
    </button>
);
};

export default Filter;
