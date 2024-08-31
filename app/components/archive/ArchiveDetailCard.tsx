import Image from "next/image";
import Link from "next/link";
import React from "react";
import ArchiveUserInfo from "./ArchiveUserInfo";
import ArchiveDetailContent from "./ArchiveDetailContent";

interface ArchiveDetailCardProps {
  userName: string;
  userImageUrl?: string;
  createdAt?: string;
  missionNo?: string;
  data?: any;
}

const ArchiveDetailCard = ({
  userName,
  userImageUrl,
  createdAt,
  missionNo,
  data,
}: ArchiveDetailCardProps) => {
  return (
    <div className="w-full min-h-[200px] flex flex-col justify-start items-start gap-y-3 py-1 px-1.5">
      <ArchiveUserInfo
        userName={userName}
        userImageUrl={data?.userImageUrl || "/images/user-default2.png"}
      />
      {/* ArchiveDetailContent에 data 전달 */}
      <ArchiveDetailContent data={data} />
    </div>
  );
};

export default ArchiveDetailCard;
