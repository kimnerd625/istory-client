import React from "react";
import Link from "next/link";

import LongButton from "../components/LongButton";

export default function LoginPage() {
  return (
    <main className="w-full flex-1 flex flex-col justify-start items-center bg-home-bg overflow-x-hidden py-[56px]">
      <section className="px-5 w-full flex-col justify-start items-start">
        <h3 className="text-[#1A2128] font-bold text-[26px] leading-8 tracking-tight">
          안녕하세요 !
        </h3>
        <h3 className="text-[#1A2128] font-bold text-[26px] leading-8 tracking-tight">
          아이스토리 입니다.
        </h3>
        <h5 className="mt-3 text-sm text-[#777777] font-normal tracking-tight leading-4">
          이메일을 입력해주세요.
        </h5>
      </section>
      <section className="mt-[58px] px-5 w-full flex flex-col justify-start items-start gap-y-3">
        <div className="w-full flex flex-col justify-center items-start gap-y-[7px]">
          <label
            className="font-semibold text-sm tracking-tight text-[#1A2128] leading-3"
            htmlFor="email"
          >
            이메일
          </label>
          <input
            id="email"
            type="text"
            placeholder="이메일을 입력해주세요."
            className="text-base leading-4 tracking-tight font-normal text-[#777777] w-full focus:outline-none focus:border-none rounded-lg bg-[#E4E4E4] px-[14px] py-[13px] flex flex-row justify-start items-center"
          />
        </div>
        <div className="w-full flex flex-col justify-center items-start gap-y-[7px]">
          <label
            className="font-semibold text-sm tracking-tight text-[#1A2128] leading-3"
            htmlFor="password"
          >
            비밀번호
          </label>
          <input
            id="password"
            type="password"
            placeholder="비밀번호를 입력해주세요."
            className="text-base leading-4 tracking-tight font-normal text-[#777777] w-full focus:outline-none focus:border-none rounded-lg bg-[#E4E4E4] px-[14px] py-[13px] flex flex-row justify-start items-center"
          />
        </div>
      </section>
      <section className="mt-[49px] flex flex-col justify-center items-center w-full gap-y-5">
        <LongButton buttonText="로그인" />
        <Link
          className="w-full flex flex-row justify-center items-center"
          href="/signup"
        >
          <LongButton buttonText="회원가입" color="white" />
        </Link>
      </section>
    </main>
  );
}
