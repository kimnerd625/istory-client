"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import LongButton from "../LongButton";
import Spinner from "../Spinner";

const LoginForm = () => {
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLoginButton = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error("로그인에 실패했습니다.");
      }
      toast.success("로그인에 성공했어요!");
      setTimeout(() => {
        router.push("/invite");
      }, 2000);
    } catch (error) {
      toast.error("로그인에 실패했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Spinner />}
      <section className="mt-[58px] px-5 w-full flex flex-col justify-start items-start gap-y-3">
        <div className="w-full flex flex-col justify-center items-start gap-y-[7px]">
          <label
            className="font-semibold text-sm tracking-tight text-[#1A2128] leading-3"
            htmlFor="email"
          >
            이메일
          </label>
          <input
            key="emailInput"
            id="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            key="passwordInput"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호를 입력해주세요."
            className="text-base leading-4 tracking-tight font-normal text-[#777777] w-full focus:outline-none focus:border-none rounded-lg bg-[#E4E4E4] px-[14px] py-[13px] flex flex-row justify-start items-center"
          />
        </div>
      </section>
      <section className="mt-[49px] flex flex-col justify-center items-center w-full gap-y-5">
        <LongButton buttonText="로그인" buttonAction={handleLoginButton} />
        <Link
          className="w-full flex flex-row justify-center items-center"
          href="/signup"
        >
          <LongButton buttonText="회원가입" color="white" />
        </Link>
      </section>
    </>
  );
};

export default LoginForm;
