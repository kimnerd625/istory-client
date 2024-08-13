import React from "react";
import Image from "next/image";

const BoxHero = () => {
  return (
    <div className="pt-10 w-full flex flex-col justify-center items-center text-center">
      <h3 className="font-bold text-3xl text-[#1c1c1c] leading-10 tracking-tight">
        띵똥! <br />
        이번 주 추억상자가 <br />
        도착했습니다.
      </h3>
      <div className="relative w-80 h-80 overflow-hidden">
        <Image
          src="/images/box-hero-character.png"
          alt="추억 상자 이미지"
          fill
        />
      </div>
      <div className="mt-15 w-full px-9 flex flex-row justify-center items-center">
        <div className="w-full cursor-pointer py-5 flex flex-row justify-center items-center rounded-lg bg-main-400">
          <span className="font-bold text-white text-xl tracking-tight leading-4">
            보러 가기
          </span>
        </div>
      </div>
    </div>
  );
};

export default BoxHero;
