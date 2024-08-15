import React from "react";

import HomeIcon from "@/public/icons/icon-home.svg";
import BoxIcon from "@/public/icons/icon-box.svg";
import ArchiveIcon from "@/public/icons/icon-archive.svg";
import AccountIcon from "@/public/icons/icon-account.svg";
import Link from "next/link";

const BottomNavigationBar = () => {
  return (
    <section className="bg-home-bg fixed bottom-0 w-full flex flex-row justify-between items-center py-4 px-11">
      <Link href="/">
        <div className="flex flex-row justify-center items-center">
          <HomeIcon width={24} height={24} />
        </div>
      </Link>
      <Link href="/box">
        <div className="flex flex-row justify-center items-center">
          <BoxIcon width={24} height={24} />
        </div>
      </Link>
      <Link href="/archive">
        <div className="flex flex-row justify-center items-center">
          <ArchiveIcon width={24} height={24} />
        </div>
      </Link>
      <Link href="/account">
        <div className="flex flex-row justify-center items-center">
          <AccountIcon width={24} height={24} />
        </div>
      </Link>
    </section>
  );
};

export default BottomNavigationBar;
