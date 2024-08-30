import React from "react";
import Image from "next/image";
import Link from "next/link";

interface AccountCardProps {
  weeklyMissionNum: number;
}

const AccountCard = ({ weeklyMissionNum }: AccountCardProps) => {
  return (
    <Link
      href="/account"
      className="relative w-full flex flex-row justify-start px-5 mt-4 text-white"
    >
      <div className="relative w-full h-[140px] rounded-xl bg-[#FCE6AC] overflow-hidden">
        <Image
          src="/images/main-account-card.png"
          alt="사용자 프로필 이미지"
          fill
          className="object-cover"
          quality={100}
        />
      </div>
      <div className="absolute p-5 flex flex-row justify-start items-center gap-[57px]">
        <div className="flex flex-col gap-y-2.5">
          <div className="account-name">
            <span className="border-2 border-white rounded-3xl px-2 py-1 text-white mt-2 font-light">
              신한 ISTORY 적금
            </span>
          </div>
          <div className="text-xl font-bold tracking-tight leading-5">
            {weeklyMissionNum}주차 도전 중
          </div>
        </div>
        <div className="relative w-[103px] h-[55px]">
          <Image
            src="/images/character-doremi.png"
            alt="도레미 캐릭터"
            fill
            className="object-cover"
            quality={100}
          />
        </div>
      </div>
      <div className="absolute right-5 bottom-5 pr-5 text-[26px] font-extrabold tracking-tight leading-7">
        200,000원
      </div>
      <div className="absolute right-5 top-5"></div>
    </Link>
  );
};

export default AccountCard;
