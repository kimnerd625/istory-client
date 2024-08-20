import React, { SetStateAction } from "react";
import localFont from "next/font/local";
import Image from "next/image";

interface BoxHeroProps {
  isBoxOpened: boolean;
  setIsBoxOpened: React.Dispatch<SetStateAction<boolean>>;
}

const EFDiary = localFont({ src: "../../../public/fonts/EFDiary.ttf" });

const BoxHero = ({ isBoxOpened, setIsBoxOpened }: BoxHeroProps) => {
  return (
    <div className="pt-10 w-full flex flex-col justify-center items-center text-center gap-y-[48px]">
      <h3 className="font-bold text-3xl text-[#1c1c1c] leading-10 tracking-tight">
        띵똥! <br />
        이번 주 추억상자가 <br />
        도착했습니다.
      </h3>
      <div className="relative w-[360px] h-[300px] overflow-hidden">
        <Image src="/images/box-image.png" alt="추억 상자 이미지" fill />
        <h4
          className={`${EFDiary.className} absolute top-[90px] left-[80px] text-[60px] tracking-tight leading-5 text-white`}
        >
          5<span className="text-[32px]">th</span>
        </h4>
        <div className="absolute w-[200px] h-[200px] bottom-0 right-[59px]">
          <Image
            src="/images/box-hero-character.png"
            alt="추억 상자 이미지"
            fill
          />
        </div>
      </div>
      <div className="mt-15 w-full px-9 flex flex-row justify-center items-center">
        <div
          onClick={() => setIsBoxOpened(true)}
          className="w-full cursor-pointer py-[18px] flex flex-row justify-center items-center rounded-full bg-main-500 hover:bg-main-600"
        >
          <span className="font-bold text-white text-xl tracking-tight leading-4">
            열어 보기
          </span>
        </div>
      </div>
    </div>
  );
};

export default BoxHero;
