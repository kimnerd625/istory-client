import React from "react";
import Image from "next/image";


const BoxCard = () => {
  return (
    <>
      <div className="relative w-full flex flex-row justify-end px-5 mt-5">
        <div className="relative w-[192px] h-[140px] rounded-xl  bg-[#FCE6AC] overflow-hidden">
          <Image src="/images/main-archive-card.png" alt="사용자 프로필 이미지" fill className="object-cover"
          quality={100} />
        </div>
        <span className="absolute p-5 right-0 pr-10 text-gray-600 font-semibold text-xl">
            차곡 차곡
            <br/>아카이브
          </span>
      </div>
    
    </>
  );
};

export default BoxCard;