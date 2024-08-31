"use client";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  SummaryGui,
  AccountCard,
  InterestCard,
  AdvertisingCard,
} from "@/app/components/account";
import Header from "../sections/Header";
import BottomNavigationBar from "../sections/BottomNavigationBar";
import useWeekInfoStore from "../store/weekInfo";

export default function AccountPage() {
  const { weekInfo } = useWeekInfoStore();
  let week = weekInfo?.weeklyNum ?? 0;

  const balance = week * 200000;

  useEffect(() => {
    const fetchSavingAccount = async () => {
      try {
      } catch (error) {}
    };
  }, []);

  return (
    <>
      <Header isUser={true} isCancel={false} isCheck={false} />
      <main className="w-full py-0 flex flex-col justify-start items-center gap-y-5 bg-custom-background">
        <SummaryGui
          accountNickname="우리가족 사랑해"
          weeklyNum={4}
          accountExpiryDate="2025-08-25"
          depositBalance="5000"
        />
        <span className="items-center mt-5 text-[14px] text-[#757575] font-light">
          보유 적금 보기
        </span>
        <div className="flex flex-col w-full px-5 gap-y-5">
          <AccountCard accountNo={"0014011530653313"} totalBalance={balance} />
          <InterestCard />
        </div>

        <span className="items-center mt-5 text-[14px] text-[#757575] font-light">
          추천 상품 보기
        </span>
        <div className="flex flex-col w-full px-5 gap-y-5">
          <AdvertisingCard />
          <AdvertisingCard />
        </div>
        <div className="h-12"></div>
        <BottomNavigationBar />
      </main>
    </>
  );
}
