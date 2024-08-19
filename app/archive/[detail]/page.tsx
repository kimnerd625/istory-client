import React from "react";

import Header from "@/app/sections/Header";
import BoxInfo from "@/app/components/box/BoxInfo";

export default function DetailPage() {
  return (
    <>
      <Header isCancel={true} isCheck={false} isUser={false} />
      <main className="w-full px-5 py-7 flex-1 flex flex-col justify-start items-center bg-home-bg gap-y-3">
        <BoxInfo isDateVisible={false} isLabelVisible={false} />
      </main>
    </>
  );
}
