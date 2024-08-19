import React from "react";
import ArchiveHeader from "../components/archive/ArchiveHeader";
import ArchiveBoard from "../sections/archive/ArchiveBoard";

export default function ArchivePage() {
  return (
    <main className="w-full px-5 py-7 flex-1 flex flex-col justify-start items-center bg-home-bg gap-y-3">
      <ArchiveHeader />
      <ArchiveBoard />
    </main>
  );
}
