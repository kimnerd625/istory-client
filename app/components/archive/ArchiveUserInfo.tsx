import Image from "next/image";
import React from "react";

interface ArchiveUserInfoProps {
  userName: string;
  userImageUrl: string;
}

const ArchiveUserInfo = ({ userImageUrl, userName }: ArchiveUserInfoProps) => {
  return (
    <div className="w-full flex flex-row justify-start items-center gap-x-3">
      <div className="relative w-10 h-10 overflow-hidden rounded-full border border-[#B3B3B3]">
        <Image src={userImageUrl} alt="사용자 프로필 이미지" fill />
      </div>
      <div className="w-full flex flex-col justify-start items-start">
        <h5 className="text-[#1A2128] font-semibold text-xl tracking-tight">
          {userName}
        </h5>
        <span className="text-[#B3B3B3] font-normal tracking-tight leading-5 text-sm">
          08.15.목 오후 3:00
        </span>
      </div>
    </div>
  );
};

export default ArchiveUserInfo;
