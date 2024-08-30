import React, { useState } from "react";
import localFont from "next/font/local";
import Image from "next/image";
import { getAccessToken } from "@/app/utils/localAccessToken";
import { toast } from "sonner";
import useWeekInfoStore from "@/app/store/weekInfo";
import Spinner from "../Spinner";

const EFDiary = localFont({ src: "../../../public/fonts/EFDiary.ttf" });

const BoxHero = () => {
  const { weekInfo } = useWeekInfoStore();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const weeklyNum = weekInfo?.weeklyNum ?? 1;

  const handleOpenButton = async () => {
    const accessToken = getAccessToken();
    setIsLoading(true);

    try {
      const response = await fetch("/api/mission/openBox", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        credentials: "include",
        body: JSON.stringify({ familymissionNo: weekInfo?.familymissionNo }),
      });

      if (!response.ok) {
        throw new Error("추억 상자 열기에 실패했습니다.");
      }
      toast.success("추억 상자가 성공적으로 열렸습니다!");
    } catch (error) {
      toast.error("추억 상자를 열지 못했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && <Spinner />}
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
            {weeklyNum}
            <span className="text-[32px]">th</span>
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
          <button
            onClick={handleOpenButton}
            className={`w-full cursor-pointer py-[18px] flex flex-row justify-center items-center rounded-xl ${
              isLoading ? "bg-gray-400" : "bg-main-400 hover:bg-main-500"
            }`}
            disabled={isLoading}
          >
            <span className="font-bold text-white text-xl tracking-tight leading-4">
              {isLoading ? "열리는 중..." : "열어 보기"}
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default BoxHero;
