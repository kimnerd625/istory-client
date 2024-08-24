"use client";

import React, { useState } from "react";

import Header from "@/app/sections/Header";
import SummaryInquiry from "@/app/components/account/SummaryInquiry";
import InquiryinfoCard from "@/app/components/account/InquiryInfoCard";

// 임시 데이터
const paymentInfo = [
  { date: "2024.08.01", amount: "5000" },
  { date: "2024.08.08", amount: "5000" },
  { date: "2024.08.15", amount: "5000" },
];


export default function MissionLogPage() {
  const [isTextInputFocused, setIsTextInputFocused] = useState<boolean>(false);

  return (
    <>
      <Header isCheck={false} isCancel={true} isUser={false} />
      <main className="w-full flex-1 flex flex-col justify-start items-center bg-white">
        <SummaryInquiry accountName = {"우리가족"} accountNo={"0000000000000"} accountData={"200,000"} week = {4}  accountCreateDate= {"2024.08.10"}  accountExpiryDate= {"2025.07.31"}/>
        <InquiryinfoCard depositBalance={"50000"} totalBalance={"50000"} paymentInfo={paymentInfo}/>
        <InquiryinfoCard depositBalance={"50000"} totalBalance={"50000"} paymentInfo={paymentInfo}/>
        <InquiryinfoCard depositBalance={"50000"} totalBalance={"50000"} paymentInfo={paymentInfo}/>
      </main>
    </>
  );
}
