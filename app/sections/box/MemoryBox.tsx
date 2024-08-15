"use client";

import BoxHero from "@/app/components/box/BoxHero";
import BoxInfo from "@/app/components/box/BoxInfo";
import MissionCard from "@/app/components/box/MissionCard";
import React, { useState } from "react";

const MemoryBox = () => {
  const [isBoxOpened, setIsBoxOpened] = useState<boolean>(false); // 추후 zustand로 전역 상태 관리 예정

  switch (isBoxOpened) {
    case true:
      return (
        <>
          <div className="w-full px-5 py-7 flex flex-col justify-start items-center gap-y-9">
            <BoxInfo isDateVisible={true} />
            <section className="w-full flex flex-col justify-center items-center">
              <MissionCard
                userName="민지"
                userImageUrl="/images/user-default2.png"
                isMe={true}
              />
              <MissionCard
                userName="엄마"
                userImageUrl="/images/user-default.png"
                isMe={false}
              />
              <MissionCard
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
