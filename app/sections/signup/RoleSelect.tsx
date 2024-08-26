"use client";

import React from "react";
import SignUpHeader from "@/app/components/signup/SignUpHeader";
import NextButton from "@/app/components/signup/NextButton";
import Image from "next/image";

interface RoleSelectProps {
  role: string;
  setRole: React.Dispatch<React.SetStateAction<string>>;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const RoleSelect = ({ role, setRole, step, setStep }: RoleSelectProps) => {
  const handleClickRoleButton = (id: string) => {
    setRole(id);
  };

  return (
    <section className="w-full flex-1 flex flex-col justify-between items-center">
      <SignUpHeader
        firstLine="부모 / 자녀 중"
        secondLine="하나를 선택해주세요."
        step={step}
        setStep={setStep}
      />
      <div className="w-full px-[50px] flex flex-row justify-center items-center gap-x-[34px]">
        <div className="flex flex-col justify-center items-center gap-[19px]">
          <div
            id="parent"
            onClick={(e) => handleClickRoleButton(e.currentTarget.id)}
            className={`relative min-w-[112px] min-h-[140px] rounded-[20px] ${
              role === "parent" ? "bg-main-400" : "bg-[#E4E4E4]"
            }`}
          >
            <Image
              src="/images/image-parent.png"
              alt="부모 이미지"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <span className="text-[#757575] text-xl font-medium tracking-tight leading-5">
            부모
          </span>
        </div>
        <div className="flex flex-col justify-center items-center gap-[19px]">
          <div
            id="child"
            onClick={(e) => handleClickRoleButton(e.currentTarget.id)}
            className={`relative min-w-[112px] min-h-[140px] rounded-[20px] ${
              role === "child" ? "bg-main-400" : "bg-[#E4E4E4]"
            }`}
          >
            <Image
              src="/images/image-child.png"
              alt="자녀 이미지"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <span className="text-[#757575] text-xl font-medium tracking-tight leading-5">
            자식
          </span>
        </div>
      </div>
      <NextButton step={step} setStep={setStep} />
    </section>
  );
};

export default RoleSelect;
