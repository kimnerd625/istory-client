"use client";

import React from "react";
import Header from "@/app/sections/Header";
import SummaryInquiry from "@/app/components/account/SummaryInquiry";
import InquiryinfoCard from "@/app/components/account/InquiryInfoCard";
import BottomNavigationBar from "../../sections/BottomNavigationBar";

// 날짜와 금액 정보를 포함한 배열 (5월부터 2월까지 추가)
const paymentInfo = [
  { date: "2024.08.01", amount: "200,000" },
  { date: "2024.07.01", amount: "200,000" },
  { date: "2024.06.01", amount: "200,000" },
  { date: "2024.05.01", amount: "200,000" },
  { date: "2024.04.01", amount: "200,000" },
  { date: "2024.03.01", amount: "200,000" },
  { date: "2024.02.01", amount: "200,000" },
];

export default function MissionLogPage() {
  return (
    <>
      <Header isCheck={false} isCancel={true} isUser={false} />
      <main className="w-full flex-1 flex flex-col justify-start items-center bg-custom-background">
        <SummaryInquiry
          accountNickName="우리 가족 사랑해"
          accountNo="0014011530653313"
          totalBalance="7,200,000"
          week={4}
          accountCreateDate="2024.08.10"
          accountExpiryDate="2025.07.31"
        />
        {/* InquiryInfoCard 컴포넌트에 paymentInfo를 전달 */}
        {paymentInfo.map((info, index) => (
          <InquiryinfoCard
            key={index}
            depositBalance="200,000"
            totalBalance="200,000"
            paymentInfo={[info]} // 각 날짜 정보를 개별적으로 전달
          />
        ))}
        <div className="min-h-[55px]" />
      </main>
      <BottomNavigationBar />
    </>
  );
}
