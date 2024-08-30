import React, { SetStateAction } from "react";
import Image from "next/image";
import { toast } from "sonner";
import Link from "next/link";


interface EnterInviteCodeProps {
  invite_code?: string;
}

const EnterInviteCode = ({invite_code}:EnterInviteCodeProps) => {
  return (
    <main className="w-full flex-1 flex flex-col justify-between items-center pr-5 pl-5">
      <section className="w-full flex flex-col justify-center items-center">
        <div className="h1 flex flex-col justify-center items-center font-bold text-[26px] leading-8 tracking-tight">
            <span className="text-black block text-center">
              가족 초대 수락을 
            </span>
            <span className="text-black block text-center">
              하시겠습니까? 
            </span>
        </div>


        <div className="w-full h-[124px]"></div>


        {/* 괸리자 네임 카드 */}
        <div className="relative flex flex-col w-full">
          {/* 이미지 */}
          <div className="absolute family-profile w-20 h-20 rounded-[40px] left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2">
            <img 
            src="../images/profile-mom.jpg" 
            alt="관리자 프로필" 
            className="rounded-[40px]"
            />
          </div>

          <section className="w-full h-[218px] rounded-[20px] border border-[0.5px] border-[#D9D9D9] bg-white shadow-[0_0_12px_0_rgba(0,0,0,0.10)] flex flex-col justify-center items-center gap-6">
            <span className="text-[26px] font-bold">박민지</span>
            <span className="text-lg text-main-500">부모</span>
          </section>
        </div>
        
        <div className="mt-14 px-8 flex flex-col justify-center items-center">
          <p className="text-center text-sm font-normal text-[#757575] tracking-tight leading-5">
            가족 정보를 확인하고
            <br />
            내 가족이 맞다면 네 맞아요!를
            <br />
            내 가족이 아니라면 아니에요!를
            <br />
            클릭해주세요.
          </p>
        </div>
      </section>
      <div className="w-full flex flex-row justify-between items-center gap-5">
        <Link href="../../inviteAcception/WaitingInvite.tsx" className="w-full">
          <button
          // onClick={() => handleClickNextButton()}
          className="bg-main-400 rounded-xl w-full flex flex-col justify-center items-center font-extrabold text-white text-xl leading-5 tracking-tight py-[18px]">
            네 맞아요!
          </button>
        </Link>
        <Link href="/" className="w-full">
          <button
          // onClick={() => handleClickNextButton()}
          className="bg-[#908EFC] rounded-xl w-full flex flex-col justify-center items-center font-extrabold text-white text-xl leading-5 tracking-tight py-[18px]">
            아니에요!
          </button>
        </Link>
      </div>
      
    </main>
  );
}

export default EnterInviteCode;