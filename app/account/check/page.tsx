"use client";

import React, { useState } from "react";

import Header from "@/app/sections/Header";
import SummaryInquiry from "@/app/components/account/SummaryInquiry";

export default function MissionLogPage() {
  const [isTextInputFocused, setIsTextInputFocused] = useState<boolean>(false);

  return (
    <>
      <Header isCheck={false} isCancel={true} isUser={false} />
      <main className="w-full flex-1 flex flex-col justify-start items-center bg-white">
        <SummaryInquiry accountName = {"우리가족"} accountNo={"0000000000000"} accountData={"200,000"} week = {4}  accountCreateDate= {"2024.08.10"}  accountExpiryDate= {"2025.07.31"}/>
      </main>
    </>
  );
}
