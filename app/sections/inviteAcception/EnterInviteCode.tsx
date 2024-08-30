import React, { SetStateAction } from "react";
import Image from "next/image";
import { toast } from "sonner";
import Link from "next/link";

import EnterInviteCodeButton from "@/app/components/inviteAcception/EnterInviteCodeButton";

interface EnterInviteCodeProps {
  invite_code?: string;
}

const EnterInviteCode = ({invite_code}:EnterInviteCodeProps) => {
  return (
    <main className="w-full flex-1 flex flex-col justify-between items-center">
      <section className="w-full flex flex-col justify-center items-center pr-5 pl-5">
        <div className="h1 flex flex-col justify-center items-center font-bold text-[26px] leading-8 tracking-tight">
            <span className="text-black block text-center">
              가족 초대 코드를
            </span>
            <span className="text-black block text-center">
              입력해주세요
            </span>
        </div>
        <div className="mb-[54px]"></div>
        
        <div className="h-[85px]"></div>

        <div className="w-full flex flex-col justify-center items-start gap-y-8">
          <div className="w-full flex flex-col justify-start items-start gap-y-2">
            <label
              className="text-sm font-semibold text-[#1A2128] tracking-tight leading-4"
            >
              초대코드
            </label>
            <input
              value={invite_code || "0000"}
              className="w-full px-[14px] py-[13px] rounded-lg bg-[#E4E4E4] focus:outline-none focus:bg-main-300"
            />
          </div>
        </div>
      </section>
      <Link
        href="../../inviteAcception/familyAccept/" // 여기바꿔야함
        className="w-full flex flex-row justify-center items-center"
      >
        <EnterInviteCodeButton vite-code=""/>
      </Link>
    </main>
  );
}

export default EnterInviteCode;