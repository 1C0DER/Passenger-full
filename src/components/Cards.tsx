'use client';
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

type CardProps = {
  type: string;
  value: string;
  withArrow?: boolean;
  link?: string;
  editable?: boolean; // new prop
};

const Cards = ({ type, value, withArrow = false, link, editable = false }: CardProps) => {
  const [cardValue, setCardValue] = useState(value);
  const [isEditing, setIsEditing] = useState(false);
  const router = useRouter();

  return (
    <div className="relative rounded-2xl bg-white py-7 px-5 flex-1">
      {withArrow && link && (
        <div
          className="absolute top-10 right-3 cursor-pointer"
          onClick={() => router.push(link)}
        >
          <Image
            src="/arrow.png"
            alt="arrow"
            width={20}
            height={20}
            className="object-contain"
          />
        </div>
      )}

      <div className="flex flex-col items-start sm:items-center gap-1">
        <h1 className="text-[14px] font-normal break-words">{type}</h1>

        {editable && isEditing ? (
          <input
            type="text"
            value={cardValue}
            onChange={(e) => setCardValue(e.target.value)}
            onBlur={() => setIsEditing(false)}
            onKeyDown={(e) => e.key === "Enter" && setIsEditing(false)}
            className="text-[24px] font-medium border-b border-gray-300 focus:outline-none"
          />
        ) : (
          <h1
            className={`text-[24px] font-medium ${editable ? 'cursor-pointer' : ''}`}
            onClick={() => editable && setIsEditing(true)}
          >
            {cardValue}
          </h1>
        )}
      </div>
    </div>
  );
};

export default Cards;
