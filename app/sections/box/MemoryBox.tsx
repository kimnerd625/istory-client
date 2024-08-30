"use client";

import React, { useState, useEffect } from "react";

import BoxHero from "@/app/components/box/BoxHero";
import BoxInfo from "@/app/components/box/BoxInfo";
import MissionCard from "@/app/components/box/MissionCard";

import useWeekInfoStore from "@/app/store/weekInfo";
import Loading from "@/app/loading";

const MemoryBox = () => {
  const { weekInfo } = useWeekInfoStore();
  const [showCheck, setShowCheck] = useState<boolean | null>(null);
  const [contents, setContents] = useState<string>("");

  // weekInfo가 변경될 때마다 showCheck를 업데이트
  useEffect(() => {
    if (weekInfo) {
      setShowCheck(weekInfo.showCheck ?? false);
    }
  }, [weekInfo]);

  // 로딩 상태 표시
  if (showCheck === null) {
    return <Loading />;
  }

  // showCheck에 따른 렌더링
  return showCheck ? (
    <div className="w-full px-5 py-7 flex flex-col justify-start items-center gap-y-9">
      <BoxInfo isDateVisible={true} contents={contents} />
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
  ) : (
    <BoxHero />
  );
};

export default MemoryBox;
