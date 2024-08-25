import React from "react";

import SignUpHeader from "@/app/components/signup/SignUpHeader";
import NextButton from "@/app/components/signup/NextButton";

interface SecondFormProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  birth: string;
  setBirth: React.Dispatch<React.SetStateAction<string>>;
  phone: string;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const SecondForm = ({
  name,
  setName,
  birth,
  setBirth,
  step,
  setStep,
  phone,
  setPhone,
}: SecondFormProps) => {
  return (
    <section className="w-full flex-1 flex flex-col justify-between items-center">
      <SignUpHeader
        firstLine="회원 가입을 위해"
        secondLine="아래 정보를 입력해주세요."
        step={step}
      />
      <div className="w-full flex flex-col justify-center items-start gap-y-8">
        <div className="w-full flex flex-col justify-start items-start gap-y-2">
          <label
            htmlFor="name"
            className="text-sm font-semibold text-[#1A2128] tracking-tight leading-4"
          >
            이름
          </label>
          <input
            key="nameinput"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="이름"
            className="w-full px-[14px] py-[13px] rounded-lg bg-[#E4E4E4] focus:outline-none focus:bg-main-300"
          />
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-y-2">
          <label
            htmlFor="birth"
            className="text-sm font-semibold text-[#1A2128] tracking-tight leading-4"
          >
            생년월일
          </label>
          <input
            key="birthdateinput"
            type="text"
            id="birth"
            value={birth}
            onChange={(e) => setBirth(e.target.value)}
            placeholder="2000-00-00"
            className="w-full px-[14px] py-[13px] rounded-lg bg-[#E4E4E4] focus:outline-none focus:bg-main-300"
          />
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-y-2">
          <label
            htmlFor="phone"
            className="text-sm font-semibold text-[#1A2128] tracking-tight leading-4"
          >
            휴대폰 정보
          </label>
          <input
            key="phoneinput"
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="010-0000-0000"
            className="w-full px-[14px] py-[13px] rounded-lg bg-[#E4E4E4] focus:outline-none focus:bg-main-300"
          />
        </div>
      </div>
      <NextButton step={step} setStep={setStep} />
    </section>
  );
};

export default SecondForm;
