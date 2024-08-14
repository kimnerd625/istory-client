"use client";

import BoxHero from "@/app/components/box/BoxHero";
import React, { useState } from "react";

const MemoryBox = () => {
  const [isBoxOpened, setIsBoxOpened] = useState<boolean>(false); // 추후 zustand로 전역 상태 관리 예정

  switch (isBoxOpened) {
    case true:
      return (
        <>
          <div>
            <h2>하이</h2>
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
