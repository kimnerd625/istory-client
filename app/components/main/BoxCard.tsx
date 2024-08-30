import React from "react";
import Image from "next/image";
import Link from "next/link";

import BoxArrow from "@/public/icons/icon-box-arrow.svg";

const BoxCard = () => {
  return (
    <Link
      href="/box"
      className="relative w-full flex flex-row justify-start px-5"
    >
      <div className="relative w-[220px] h-[140px] rounded-xl bg-slate-500 overflow-hidden">
        <Image
          src="/images/main-box-card.png"
          alt="사용자 프로필 이미지"
          fill
          className="object-cover"
          quality={100}
        />
      </div>
      <span className="absolute p-5 text-white font-bold text-xl tracking-tight">
        추억 상자
        <br />
        확인하러 가기
      </span>
      <div className="flex flex-row justify-center items-center absolute bottom-3 right-[150px]">
        <BoxArrow width={50} height={50} />
      </div>
    </Link>
  );
};

export default BoxCard;
