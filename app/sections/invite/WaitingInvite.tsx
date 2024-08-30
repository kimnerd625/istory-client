import Image from "next/image";
import React from "react";

import MkCodeButton from "@/app/components/invite/MkCodeButton";
import UserCard from "@/app/components/invite/UserCard";

const WaitingInvite = () => {
  return (
    <section className="w-full flex-1 flex flex-col justify-between items-center">
      <section className="w-full flex flex-col justify-center pr-5 pl-5">
        <h4 className="font-bold text-[26px] leading-8 tracking-tight">
          가족 초대가 완료될 때까지 <br />
          대기해주세요.
        </h4>
        <div className="h-[100px]" />

        <div className="flex flex-row flex-wrap justify-center gap-5 w-[220px]">
          <UserCard name="박민지" />
          <UserCard name="박민지" />
          <UserCard name="박민지" />
          <UserCard name="박민지" />
          <div className="flex space-x-2 mb-8">
            <span className="dot block w-2 h-2 rounded-full animate-dot-bounce"></span>
            <span className="dot block w-2 h-2 rounded-full animate-dot-bounce animation-delay-200"></span>
            <span className="dot block w-2 h-2 rounded-full animate-dot-bounce animation-delay-400"></span>
          </div>
        </div>
      </section>
      <section className="flex flex-col w-full gap-3">
        <div className="w-full flex flex-row justify-center items-center">
          <MkCodeButton userId="" handleButton={() => {}} />
        </div>

        <div className="flex flex-row">
          <div className="w-full flex flex-row justify-center items-center">
            <button
              type="button"
              className="flex flex-row justify-between items-center p-[10px]"
            >
              <img src="/images/left-angle-gray.png" alt="" />
              <div className="w-5"></div>
              <span className="text-xl font-semibold text-gray-400">이전</span>
            </button>
          </div>

          <div className="w-full flex flex-row justify-center items-center">
            <button
              type="button"
              className="flex flex-row justify-between items-center p-[10px]"
            >
              <span className="text-xl font-semibold text-gray-400">다음</span>
              <div className="w-5"></div>
              <img src="/images/right-angle-gray.png" alt="" />
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default WaitingInvite;
