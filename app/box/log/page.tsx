import React from "react";

import BoxInfo from "@/app/components/box/BoxInfo";
import ImageUploader from "@/app/components/box/ImageUploader";
import MissionInput from "@/app/components/box/MissionInput";

export default function MissionLogPage() {
  return (
    <main className="w-full flex-1 flex flex-col justify-start items-center bg-home-bg">
      <div className="w-full px-5 py-7 flex flex-col justify-start items-center gap-y-9">
        <BoxInfo isDateVisible={false} />
        <ImageUploader />
        <MissionInput
          userName="민지"
          userImageUrl="/images/user-default2.png"
        />
      </div>
    </main>
  );
}
