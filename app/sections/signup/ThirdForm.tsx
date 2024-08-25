import React from "react";

import NextButton from "@/app/components/signup/NextButton";
import SignUpHeader from "@/app/components/signup/SignUpHeader";

interface ThirdFormProps {
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const ThirdForm = ({
  password,
  setPassword,
  email,
  setEmail,
  step,
  setStep,
}: ThirdFormProps) => {
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
            htmlFor="email"
            className="text-sm font-semibold text-[#1A2128] tracking-tight leading-4"
          >
            이메일
          </label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일을 입력해주세요."
            className="w-full px-[14px] py-[13px] rounded-lg bg-[#E4E4E4] focus:outline-none focus:bg-main-300"
          />
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-y-2">
          <label
            htmlFor="password"
            className="text-sm font-semibold text-[#1A2128] tracking-tight leading-4"
          >
            비밀번호
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호를 입력해주세요."
            className="w-full px-[14px] py-[13px] rounded-lg bg-[#E4E4E4] focus:outline-none focus:bg-main-300"
          />
        </div>
      </div>
      <NextButton step={step} setStep={setStep} />
    </section>
  );
};

export default ThirdForm;
