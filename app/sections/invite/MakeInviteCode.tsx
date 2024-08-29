import Image from "next/image";
import Link from "next/link";
import React from "react";

import MkCodeButton from "@/app/components/invite/MkCodeButton";

interface MakeInviteCodeProps {
  
}

const MakeInviteCode = ({}) => {
  return (
    <main className="w-full flex-1 flex flex-col justify-between items-center">
      <section className="w-full flex flex-col justify-center items-center">
        <h4 className="text-[26px] font-bold text-black tracking-tight leading-5">
          가족들을 초대해보세요!
        </h4>
        <div className="mb-[90px]"></div>
        <div className="relative mt-8 w-[300px] h-[210px]">
          <Image
            src="/images/invite-three-character.png"
            alt="초대 코드 캐릭터 이미지"
            fill
          />
        </div>
        <div className="mt-10 px-8 flex flex-col justify-center items-center">
          <p className="text-center text-sm font-normal text-[#757575] tracking-tight leading-5">
            ISTORY를 함께할 
            <br />
            나의 가족들을 초대하기 위해
            <br />
            아래 초대 코드 발급하기를 눌러주세요
            <br />
          </p>
        </div>
      </section>
      <Link
        href="/"
        className="w-full flex flex-row justify-center items-center"
      >
        <MkCodeButton userId=""/>
      </Link>
    </main>
  );
};

export default MakeInviteCode;
