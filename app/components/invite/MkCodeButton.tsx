"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import crypto from "crypto"; // Node.js의 crypto 모듈을 사용하여 SHA-256 해싱을 처리합니다.

interface MkCodeButtonProps {
  handleButton?: () => void;
  userId?: string;
}

const MkCodeButton = ({ handleButton=()=>{}, userId }: MkCodeButtonProps) => {
  return (
    <div className="w-full flex flex-row justify-center items-center px-5">
      <button
        onClick={handleButton}
        className="w-full rounded-xl py-[18px] flex flex-row justify-center items-center bg-main-400"
      >
        <span className="text-xl tracking-tight leading-5 font-extrabold text-white">
          초대 링크 보내기
        </span>
      </button>
    </div>
  );
};

export default MkCodeButton;
