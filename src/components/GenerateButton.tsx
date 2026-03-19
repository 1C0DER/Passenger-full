'use client';
import Image from "next/image";

const GenerateButton = () => {
  return (
    <button className="flex items-center gap-2 bg-[rgba(52,209,134,1)] text-white px-4 py-2 rounded-full text-sm hover:opacity-90">
      Generate report
      <Image src="/dropdownW.png" alt="Filter" width={10.61} height={6.48}/>
    </button>
  );
};

export default GenerateButton;
