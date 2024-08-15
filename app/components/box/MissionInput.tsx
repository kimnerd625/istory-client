import React, { SetStateAction } from "react";
import Image from "next/image";
import Link from "next/link";

interface MissionInputProps {
  userName: string;
  userImageUrl: string;
  setIsTextInputFocused: React.Dispatch<SetStateAction<boolean>>;
}

const MissionInput = ({
  userName,
  userImageUrl,
  setIsTextInputFocused,
}: MissionInputProps) => {
  return (
    <div className="w-full min-h-[200px] flex flex-col justify-start items-start gap-y-2.5 py-1 px-1.5">
      <div className="w-full flex flex-row justify-start items-center gap-x-3">
        <div className="relative w-10 h-10 overflow-hidden rounded-full border border-[#B3B3B3]">
          <Image src={userImageUrl} alt="사용자 프로필 이미지" fill />
        </div>
        <h5 className="text-[#1A2128] font-semibold text-xl tracking-tight">
          {userName}
        </h5>
      </div>
      <div className="w-full">
        <textarea
          onFocus={() => setIsTextInputFocused(true)}
          onBlur={() => setIsTextInputFocused(false)}
          className="text-[#1A2128] tracking-tight leading-6 font-normal text-sm resize-none w-full bg-transparent h-[150px] placeholder:text-[#B3B3B3] focus:ring-0 focus:outline-none"
          placeholder="이곳을 눌러 답변을 입력해주세요."
        />
      </div>
    </div>
  );
};

export default MissionInput;
