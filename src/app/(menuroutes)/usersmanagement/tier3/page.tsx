'use client';
import DeliveryHistoryCard from "@/components/DeliveryHistoryCard";
import ParcelSendingHistory from "@/components/ParcelSendingHistory";
import TransactionHistory from "@/components/TransactionHistory";
import UserReview from "@/components/UserReview";
import Image from "next/image";

const Tier3 = () => {
    return (
        <div className="w-[90%] p-7 flex flex-col">
            <div className="flex items-center gap-7 mb-7">
                <Image src="/back.png" alt="back button" width={20} height={20} />
                <h1 className="font-medium text-[24px]">User management</h1>
            </div>
            <div className="flex justify-between items-start flex-wrap gap-4">
            {/* Left: Profile image + details */}
            <div className="flex items-start gap-5">
                <Image src="/jd.png" alt="User avatar" width={128} height={128} className="rounded-full object-cover" />
                <div className="flex flex-col justify-center gap-2">
                <h2 className="font-normal text-[18px]">
                    John Doe{" "}
                    <span className="text-[16px] bg-[rgba(213,246,230,1)] text-[rgba(17,24,39,1)] px-2 py-1 rounded-md ml-2">Tier 3</span>
                </h2>
                <p className="text-[16px] font-normal text-[rgba(49,57,53,1)]">john23@gmail.com</p>
                <p className="text-[16px] font-normal text-[rgba(49,57,53,1)]">BVN: 23456798763</p>
                <p className="text-[16px] font-normal text-[rgba(49,57,53,1)]">08023765482</p>
                <Image src="/star.png" alt="rating stars" width={127} height={19} />
                </div>
            </div>

            {/* Middle: Address info */}
            <div className="flex flex-col text-[16px] font-normal text-[rgba(17,24,39,1)] gap-3">
                <p>State of residence: Plateau State</p>
                <p>Local govt of residence:Jos North</p>
                <p>House address: No 24, Wisdom Street, Jos</p>
                <p>Street picture: <a href="#" className="text-[rgba(52,209,134,1)] font-semibold underline">Street.JPEG</a></p>
                <p>House picture: <a href="#" className="text-[rgba(52,209,134,1)] font-semibold underline">House.JPEG</a></p>
            </div>

            {/* Right: Call/Chat icons */}
            <div className="flex gap-3 items-start mt-12">
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

export default Tier3;