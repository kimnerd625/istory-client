import Image from "next/image";
import Link from "next/link";
import React, { SetStateAction } from "react";

import MkAccountButton from "@/app/components/mkAccount/MkAccountButton";

interface MakeAccountProps {
  step: number;
  setStep: React.Dispatch<SetStateAction<number>>;
}

const MakeAccount = ({ step, setStep }: MakeAccountProps) => {
  return (
    <main className="w-full flex-1 flex flex-col justify-between items-center">
      <section className="w-full flex flex-col justify-center items-center pr-5 pl-5">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col items-center justify-center font-bold text-[26px] leading-8 tracking-tight">
            <div>
              <span className="text-main-600">신한 ISTORY</span> 에<br />
            </div>
            오신 것을 환영합니다!
          </div>
        </div>
        <div className="mb-[54px]"></div>
        <div className="relative mt-10 w-[236px] h-[224px]">
          <Image
            src="/images/new-account-image.png"
            alt="초대 코드 캐릭터 이미지"
            fill
          />
        </div>
        <div className="mt-14 px-8 flex flex-col justify-center items-center">
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
      <MkAccountButton setStep={setStep} />
    </main>
  );
};

export default MakeAccount;
