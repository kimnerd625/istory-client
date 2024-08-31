import React from "react";

import Header from "../sections/Header";
import MemoryBox from "../sections/box/MemoryBox";
import BottomNavigationBar from "../sections/BottomNavigationBar";

export default function BoxPage() {
  return (
    <>
      <Header isUser={false} isCancel={false} isCheck={false} />
      <main className="w-full flex-1 flex flex-col justify-start items-center bg-custom-background overflow-x-hidden overflow-y-scroll">
        <MemoryBox />
        <div className="h-[55px]" />
      </main>
      <BottomNavigationBar />
    </>
  );
}
