"use client";

import React, { useState, useEffect } from "react";

import Header from "@/app/sections/Header";
import BoxInfo from "@/app/components/box/BoxInfo";
import ImageUploader from "@/app/components/box/ImageUploader";
import MissionInput from "@/app/components/box/MissionInput";
import useWeekInfoStore from "@/app/store/weekInfo";

export default function MissionLogPage() {
  const [isTextInputFocused, setIsTextInputFocused] = useState<boolean>(false);
  const { weekInfo } = useWeekInfoStore();
  console.log(weekInfo);

  const contents =
    weekInfo?.missionContents ??
    "오늘은 식목일입니다./ 가족과 함께 산책을 나가보세요.";

  return (
    <>
      <Header isCheck={true} isCancel={true} isUser={false} />
      <main className="w-full flex-1 flex flex-col justify-start items-center bg-home-bg">
        <div className="w-full px-5 py-7 flex flex-col justify-start items-center gap-y-9">
          <BoxInfo isDateVisible={false} contents={contents} />
          {isTextInputFocused ? <></> : <ImageUploader />}
          <MissionInput
            userName="민지"
            userImageUrl="/images/user-default2.png"
            setIsTextInputFocused={setIsTextInputFocused}
          />
        </div>
      </main>
    </>
  );
}
