'use client';
import DeliveryHistoryCard from "@/components/DeliveryHistoryCard";
import ParcelSendingHistory from "@/components/ParcelSendingHistory";
import TransactionHistory from "@/components/TransactionHistory";
import UserReview from "@/components/UserReview";
import Image from "next/image";

const Tier2 = () => {
    return (
        <div className="w-full p-4 md:p-7 flex flex-col">
            <div className="flex items-center gap-7 mb-7">
                <Image src="/back.png" alt="back button" width={20} height={20} />
                <h1 className="font-medium text-[24px]">User management</h1>
            </div>
                <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-10 w-[81%]">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-5">
                <Image src="/jd.png" alt="User avatar" width={128} height={128} className="rounded-full object-cover"/>
                    <div className="flex flex-col justify-center gap-2">
                        <h2 className="font-normal text-[18px]">
                        John Doe{" "}
                        <span className="text-[16px] bg-[rgba(213,246,230,1)] text-[rgba(17,24,39,1)] px-2 py-1 rounded-md ml-2">Tier 2</span>
                        </h2>
                        <p className="text-[16px] font-normal text-[rgba(49,57,53,1)]">john23@gmail.com</p>
                        <p className="text-[16px] font-normal text-[rgba(49,57,53,1)]">BVN: 23456798763</p>
                        <p className="text-[16px] font-normal text-[rgba(49,57,53,1)]">08023765482</p>
                        <Image src="/star.png" alt="rating stars" width={127} height={19} />
                    </div>
                </div>
                <div className="flex gap-3 items-start mt-7">
                    <Image src="/call.png" alt="Call icon" width={40} height={40} className="object-contain" />
                    <Image src="/chatwu.png" alt="Chat icon" width={40} height={40} className="object-contain" />
                </div>
            </div>
            <div className="flex flex-col gap-10 mt-10">
            <DeliveryHistoryCard/>
            <ParcelSendingHistory/>
            <div className="flex flex-col gap-4">
                <h2 className="text-[18px]">User Reviews</h2>
                <div className="flex gap-4">
                <UserReview text="Ab***: Delivery was seamless." />
                <UserReview text="Bo***: Parcel received in good condition." />
                <UserReview text="Bo***: Parcel received in good condition." />
                </div>
            </div>
            <TransactionHistory/>
            </div>
    </div>
    )
}

export default Tier2;