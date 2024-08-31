import React from "react";
import localFont from "next/font/local";
import Link from "next/link";
import Image from "next/image";

interface ArchiveCardProps {
  missionNo: number;
  complete: number;
}

const EFDiary = localFont({ src: "../../../public/fonts/EFDiary.ttf" });

const ArchiveCard = ({ missionNo, complete }: ArchiveCardProps) => {
  const getImageSrc = (complete: number) => {
    if (complete === 2) {
      const randomNum = Math.floor(Math.random() * 4) + 1;
      return `/images/completed-${randomNum}.png`;
    } else {
      return "/images/complete-default.png";
    }
  };

  return (
    <Link href={`/archive/${missionNo}`}>
      <div className="relative min-h-[50px] min-w-[50px] flex-1 aspect-square flex flex-row justify-start items-start cursor-pointer border border-[#CADFFF] rounded-lg px-[7px] py-[7px]">
        {complete === 2 ? (
          <Image
            src={getImageSrc(complete)}
            alt={`완성 아이콘 ${complete}`}
            fill
            style={{ objectFit: "cover" }}
          />
        ) : (
          <span
            className={`${EFDiary.className} font-normal text-sm leading-5 text-[#CADFFF]`}
          >
            {missionNo}
          </span>
        )}
      </div>
    </Link>
  );
};

export default ArchiveCard;
