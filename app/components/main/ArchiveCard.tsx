import React from "react";
import Link from "next/link";
import Image from "next/image";

import ArchiveIcon from "@/public/icons/icon-archive-arrow.svg";

const BoxCard = () => {
  return (
    <Link
      href="/archive"
      className="relative w-full flex flex-row justify-end px-5 mt-4"
    >
      <div className="relative w-[220px] h-[140px] rounded-xl  bg-[#FCE6AC] overflow-hidden">
        <Image
          src="/images/main-archive-card.png"
          alt="사용자 프로필 이미지"
          fill
          className="object-cover"
          quality={100}
        />
      </div>
      <span className="absolute p-5 right-0 pr-10 text-gray-600 font-bold text-xl tracking-tight text-right">
        차곡 차곡
        <br />
        아카이브
      </span>
      <div className="flex flex-row justify-center items-center">
        <ArchiveIcon
          width={50}
          height={50}
          className="absolute bottom-3 left-[150px]"
        />
      </div>
    </Link>
  );
};

export default BoxCard;
