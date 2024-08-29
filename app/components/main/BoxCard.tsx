import React from "react";
import Image from "next/image";
import Link from "next/link";

const BoxCard = () => {
  return (
    <Link href="/box" className="w-full flex flex-row justify-start px-5">
      <div className="relative w-[220px] h-[140px] rounded-xl bg-slate-500 overflow-hidden">
        <Image
          src="/images/main-box-card.png"
          alt="사용자 프로필 이미지"
          fill
          className="object-cover"
          quality={100}
        />
      </div>
      <span className="absolute p-5 text-white font-medium text-xl">
        추억 상자
        <br />
        확인하러 가기
      </span>
    </Link>
  );
};

export default BoxCard;
