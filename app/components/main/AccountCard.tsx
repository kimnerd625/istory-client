import React from "react";
import Image from "next/image";


const AccountCard = () => {
  return (
    <>
      <div className="relative w-full flex flex-row justify-start px-5 mt-5 text-white">
        <div className="relative w-full h-[140px] rounded-xl bg-[#FCE6AC] overflow-hidden">
          <Image src="/images/main-account-card.png" alt="사용자 프로필 이미지" fill className="object-cover"
          quality={100} />
        </div>
        <div className="account-name absolute pt-5 pl-5">
          <span className="w-30 border-2 border-white rounded-3xl px-2 py-1 text-white mt-2 font-light">
            신한 ISTORY 적금
          </span>
        </div>
        <div className="absolute pt-14 pl-5 text-xl font-medium">
          4주차 도전 중
        </div>

        <div className="absolute right-5 bottom-5 pr-5 text-[26px] font-normal">
          200,000원
        </div>

        
      </div>
    
    </>
  );
};

export default AccountCard;