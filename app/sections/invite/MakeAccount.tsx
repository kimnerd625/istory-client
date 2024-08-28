import Image from "next/image";
import Link from "next/link";
import React from "react";

import MkCodeButton from "@/app/components/invite/MkCodeButton";

interface MakeAccountProps {
  
}

const MakeAccount = ({}) => {
  return (
    <main className="w-full flex-1 flex flex-col justify-between items-center bg-home-bg overflow-x-hidden py-[56px]">
      <section className="w-full flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center"> {/* 추가된 items-center */}
          <div className="flex flex-col items-center justify-center text-2xl font-bold text-black text-center"> {/* text-center 추가 */}
              <div><span className="text-main-600">신한 ISTORY</span> 에<br/></div>
              오신 것을 환영합니다!
          </div>
        </div>
        <div className="mb-[54px]"></div>
        <div className="relative mt-8 w-[236px] h-[224px]">
          <Image
            src="/images/new-account-image.png"
            alt="초대 코드 캐릭터 이미지"
            fill
          />
        </div>
        <div className="mt-10 px-8 flex flex-col justify-center items-center">
          <p className="text-center text-sm font-normal text-[#757575] tracking-tight leading-5">
            신한 ISTORY 적금을 개설해주세요!
            <br />
            적금 개설 시 추억 카드 미션이
            <br />
            동시에 진행됩니다. 
            <br />
          </p>
        </div>
      </section>
      <Link
        href="/login"
        className="w-full flex flex-row justify-center items-center"
      >
        <MkCodeButton userId=""/>
      </Link>
    </main>
  );
};

export default MakeAccount;