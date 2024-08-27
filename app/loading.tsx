import React from "react";
import Image from "next/image";

export default function Loading() {
  return (
    <main className="w-full min-h-screen flex flex-col justify-center items-center">
      <div className="relative w-[206px] h-[193px] animate-pulse">
        <Image src="/images/login-hero-character.png" alt="쏠 캐릭터" fill />
      </div>
    </main>
  );
}
