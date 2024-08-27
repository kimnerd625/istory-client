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
  gender: string;
  setGender: React.Dispatch<React.SetStateAction<string>>;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const SecondForm = ({
  name,
  setName,
  birth,
  setBirth,
  phone,
  setPhone,
  gender,
  setGender,
  step,
  setStep,
}: SecondFormProps) => {
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/[^0-9]/g, ""); // 숫자만 남기기
    let formattedValue = rawValue;

    if (rawValue.length > 3 && rawValue.length <= 7) {
      formattedValue = `${rawValue.slice(0, 3)}-${rawValue.slice(3)}`;
    } else if (rawValue.length > 7) {
      formattedValue = `${rawValue.slice(0, 3)}-${rawValue.slice(
        3,
        7
      )}-${rawValue.slice(7)}`;
    }

    setPhone(formattedValue);
  };

  return (
    <section className="w-full flex-1 flex flex-col justify-between items-center">
      <SignUpHeader
        firstLine="회원 가입을 위해"
        secondLine="아래 정보를 입력해주세요."
        step={step}
        setStep={setStep}
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
          <div className="flex flex-row justify-between items-center gap-x-[7px]">
            <input
              key="birthdateinput"
              type="text"
              id="birth"
              value={birth}
              onChange={(e) => setBirth(e.target.value)}
              placeholder="000000"
              className="w-full px-[14px] py-[13px] rounded-lg bg-[#E4E4E4] focus:outline-none focus:bg-main-300"
            />
            <div className="w-2 min-w-2 border-b border-[#777777]" />
            <input
              key="genderinput"
              type="text"
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              placeholder="0"
              className="max-w-[38px] px-[14px] py-[13px] rounded-lg bg-[#E4E4E4] focus:outline-none focus:bg-main-300"
            />
            <div className="min-w-[7px] min-h-[7px] bg-[#E4E4E4] rounded-full" />
            <div className="min-w-[7px] min-h-[7px] bg-[#E4E4E4] rounded-full" />
            <div className="min-w-[7px] min-h-[7px] bg-[#E4E4E4] rounded-full" />
            <div className="min-w-[7px] min-h-[7px] bg-[#E4E4E4] rounded-full" />
            <div className="min-w-[7px] min-h-[7px] bg-[#E4E4E4] rounded-full" />
            <div className="min-w-[7px] min-h-[7px] bg-[#E4E4E4] rounded-full" />
          </div>
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
            onChange={handlePhoneChange}
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
