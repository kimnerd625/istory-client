import React from "react";
import Image from "next/image";

export default function Loading() {
  return (
    <main className="w-full min-h-screen flex flex-col justify-center items-center">
      <div className="relative rounded-full overflow-hidden w-[100px] h-[100px] animate-pulse">
        <Image
          src="/images/service-logo-animation.gif"
          alt="로딩 이미지"
          fill
        />
      </div>
    </main>
  );
}
