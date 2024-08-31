import React from "react";
import localFont from "next/font/local";
import Link from "next/link";
import Image from "next/image";

interface ArchiveCardProps {
  missionNo: number;
  complete: number;
}

const EFDiary = localFont({ src: "../../../public/fonts/EFDiary.ttf" });

const ArchiveCard = ({ missionNo, complete }: ArchiveCardProps) => {
  // 성공일 때 랜덤 이미지를 선택하도록 함수 설정
  const getImageSrc = (complete: number) => {
    if (complete === 2) {
      // 1부터 4 사이의 랜덤 숫자 생성
      const randomNum = Math.floor(Math.random() * 4) + 1;
      return `/images/completed-${randomNum}.png`;
    } else {
      // 실패했을 때의 기본 이미지
      return "/images/complete-default.png";
    }
  };

  return (
    <Link href={`/archive/${missionNo}`}>
      <div className="relative min-h-[50px] min-w-[50px] flex-1 aspect-square flex flex-row justify-start items-start cursor-pointer border border-[#CADFFF] rounded-lg px-[7px] py-[7px]">
        {complete === 2 ? (
          // 성공했을 때는 랜덤 이미지를 표시
          <Image
            src={getImageSrc(complete)}
            alt={`완성 아이콘 ${complete}`}
            fill
            style={{ objectFit: "cover" }}
          />
        ) : (
          // 실패했을 때는 기본 이미지를 표시하고, 미션 번호를 표시
          <span
            className={`${EFDiary.className} font-normal text-sm leading-5 text-[#CADFFF]`}
          >
            {missionNo}
          </span>
        )}
      </div>
    </Link>
  );
};

export default ArchiveCard;
