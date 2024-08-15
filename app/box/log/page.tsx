import React from "react";
import BoxInfo from "@/app/components/box/BoxInfo";

export default function MissionLogPage() {
  return (
    <main className="w-full flex-1 flex flex-col justify-start items-center bg-home-bg">
      <div className="w-full px-5 py-7 flex flex-col justify-start items-center gap-y-9">
        <BoxInfo isDateVisible={false} />
      </div>
    </main>
  );
}
