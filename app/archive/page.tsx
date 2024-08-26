import React from "react";
import ArchiveHeader from "../components/archive/ArchiveHeader";
import ArchiveBoard from "../sections/archive/ArchiveBoard";
import Header from "../sections/Header";
import BottomNavigationBar from "../sections/BottomNavigationBar";

export default function ArchivePage() {
  return (
    <>
      <Header isCancel={false} isUser={false} isCheck={false} />
      <main className="w-full px-5 py-7 flex-1 flex flex-col justify-start items-center bg-home-bg gap-y-3">
        <ArchiveHeader />
        <ArchiveBoard />
      </main>
      <BottomNavigationBar />
    </>
  );
}
