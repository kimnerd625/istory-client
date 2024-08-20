import React from "react";
import localFont from "next/font/local";

interface ArchiveCardProps {
  missionNo: number;
}

const EFDiary = localFont({ src: "../../../public/fonts/EFDiary.ttf" });

const ArchiveCard = ({ missionNo }: ArchiveCardProps) => {
  return (
    <div className="min-h-[50px] min-w-[50px] flex-1 aspect-square flex flex-row justify-start items-start cursor-pointer border border-[#CADFFF] rounded-lg px-[7px] py-[7px]">
      <span
        className={`${EFDiary.className} font-normal text-sm leading-5 text-[#CADFFF]`}
      >
        {missionNo}
      </span>
    </div>
  );
};

export default ArchiveCard;
