"use client";

import React, { useState } from "react";

interface EnterInviteCodeButtonProps {
  handleButton?: () => void;

  // 초대 코드 
  invite_code?: string;
}

  const EnterInviteCodeButton = ({ handleButton = () => {}, invite_code,}: EnterInviteCodeButtonProps) => {
    return (
      <div className="w-full flex flex-row justify-center items-center px-5">
      <button
        onClick={handleButton}
        className="w-full rounded-xl py-[18px] flex flex-row justify-center items-center bg-main-400"
      >
        <span className="text-xl tracking-tight leading-5 font-extrabold text-white">
          초대 링크 입력하기 
        </span>
      </button>
    </div>
    );
};

export default EnterInviteCodeButton
