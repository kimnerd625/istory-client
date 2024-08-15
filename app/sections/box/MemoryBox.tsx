"use client";

import BoxHero from "@/app/components/box/BoxHero";
import MissionInput from "@/app/components/box/MissionInput";
import React, { useState } from "react";

const MemoryBox = () => {
  const [isBoxOpened, setIsBoxOpened] = useState<boolean>(false); // 추후 zustand로 전역 상태 관리 예정

  switch (isBoxOpened) {
    case true:
      return (
        <>
          <div className="w-full px-5 py-7 flex flex-col justify-start items-center gap-y-7">
            <section className="w-full flex flex-col justify-start items-start gap-y-5">
              <div className="border-[1.6px] border-[#9FB8F8] px-4 py-2 rounded-lg flex flex-row justify-center items-center">
                <span className="font-extrabold text-sm tracking-tight leading-4 text-[#9FB8F8]">
                  이번주 추억 카드
                </span>
              </div>
              <div className="w-full flex flex-col justify-start items-start gap-y-2">
                <p className="font-semibold tracking-tight leading-6 text-xl text-black">
                  오늘은 식목일입니다. <br />
                  가족과 함께 산책을 나가보세요.
                </p>
                <div className="w-full flex flex-row justify-start items-center gap-x-2">
                  <span className="font-normal text-sm text-[#B3B3B3] tracking-tight leading-5">
                    08.12 - 08.17
                  </span>
                  <div className="bg-[#B3B3B3] rounded-lg px-2 py-1 flex flex-row justify-center items-center">
                    <span className="font-normal text-[10px] text-white tracking-tight leading-3">
                      5주차
                    </span>
                  </div>
                </div>
              </div>
            </section>
            <section className="w-full flex flex-col justify-center items-center">
              <MissionInput
                userName="민지"
                userImageUrl="/images/user-default2.png"
                isMe={true}
              />
              <MissionInput
                userName="엄마"
                userImageUrl="/images/user-default.png"
                isMe={false}
              />
              <MissionInput
                userName="아빠"
                userImageUrl="/images/user-default3.jpg"
                isMe={false}
              />
            </section>
          </div>
        </>
      );
    case false:
      return (
        <BoxHero isBoxOpened={isBoxOpened} setIsBoxOpened={setIsBoxOpened} />
      );
    default:
      return (
        <BoxHero isBoxOpened={isBoxOpened} setIsBoxOpened={setIsBoxOpened} />
      );
  }
};

export default MemoryBox;
