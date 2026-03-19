'use client';
import Image from "next/image";

const TableSearch = () => {
  return (
    <div className="relative w-full max-w-sm mx-auto sm:max-w-md md:max-w-lg">
      <input
        type="text"
        placeholder="Search users"
        className="w-full pl-10 pr-4 py-2 bg-white rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[rgba(52,209,134,1)] text-sm sm:text-base"
      />
      <Image
        src="/search.png"
        alt="Search icon"
        width={16}
        height={16}
        className="absolute left-3 top-1/2 -translate-y-1/2"
      />
    </div>
  );
};

export default TableSearch;
