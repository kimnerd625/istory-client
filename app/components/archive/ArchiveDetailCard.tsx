import Image from "next/image";
import Link from "next/link";
import React from "react";
import ArchiveUserInfo from "./ArchiveUserInfo";
import ArchiveDetailContent from "./ArchiveDetailContent";

interface ArchiveDetailCardProps {
  userName: string;
  userImageUrl?: string;
  createdAt?: string;
}

const ArchiveDetailCard = ({
  userName,
  userImageUrl,
  createdAt,
}: ArchiveDetailCardProps) => {
  return (
    <div className="w-full min-h-[200px] flex flex-col justify-start items-start gap-y-3 py-1 px-1.5">
      <ArchiveUserInfo
        userName={userName}
        userImageUrl="/images/user-default2.png"
      />
      <ArchiveDetailContent />
    </div>
  );
};

export default ArchiveDetailCard;
