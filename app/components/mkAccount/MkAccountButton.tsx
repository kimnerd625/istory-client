"use client";

import React, { SetStateAction } from "react";

interface MkCodeButtonProps {
  setStep: React.Dispatch<SetStateAction<number>>;
}

const MkCodeButton = ({ setStep }: MkCodeButtonProps) => {
  const handleButton = () => {
    setStep(2);
  };

  return (
    <div className="w-full flex flex-row justify-center items-center px-5">
      <button
        onClick={() => handleButton()}
        className="w-full rounded-xl py-[18px] flex flex-row justify-center items-center bg-main-400"
      >
        <span className="text-xl tracking-tight leading-5 font-extrabold text-white">
          새로운 적금 개설하기
        </span>
      </button>
    </div>
  );
};

export default MkCodeButton;
