import React from "react";

interface ArchiveCardProps {
  missionNo: number;
}

const ArchiveCard = ({ missionNo }: ArchiveCardProps) => {
  return (
    <div className="min-h-[50px] min-w-[50px] flex-1 aspect-square flex flex-row justify-start items-start cursor-pointer border border-[#CADFFF] rounded-lg px-[7px] py-[7px]">
      <span className="font-normal text-sm leading-5 text-[#CADFFF]">
        {missionNo}
      </span>
    </div>
  );
};

export default ArchiveCard;
