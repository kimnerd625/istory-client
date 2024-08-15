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
          <div className="w-full px-5 flex flex-col justify-start items-center gap-y-7">
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
