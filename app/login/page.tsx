"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import LongButton from "../components/LongButton";

export default function LoginPage() {
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>();

  return (
    <main className="w-full flex-1 flex flex-col justify-start items-center bg-home-bg">
      <section className="py-16 w-full flex flex-col justify-start items-center ">
        <div className="w-full flex flex-col justify-center items-center gap-5">
          <h4 className="text-xl font-bold text-black tracking-tight leading-5">
            환영합니다!
          </h4>
          <h4 className="text-xl font-bold text-black tracking-tight leading-6 text-center">
            추억과 함께 쌓이는 <br />
            ISTORY
          </h4>
        </div>
        <div className="relative mt-16 w-[206px] h-[193px]">
          <Image
            src="/images/login-hero-character.png"
            alt="로그인 캐릭터 이미지"
            fill
          />
        </div>
      </section>
      <LongButton buttonText="로그인" />
      <div className="mt-8 border-b border-[#757575]">
        <Link href="/signup">
          <span className="text-[#757575] text-sm tracking-tight leading-4 font-normal">
            회원 가입
          </span>
        </Link>
      </div>
    </main>
  );
}
