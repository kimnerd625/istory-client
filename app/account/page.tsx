"use client"
import React from "react";
import { SummaryGui, AccountCard, InterestCard, AdvertisingCard } from "@/app/components/account";
import Header from "../sections/Header";


export default function AccountPage() {

  return (
   <>
     <Header isUser={true} isCancel={false} isCheck={false}/>
     <main className="w-full py-0 flex flex-col justify-start items-center gap-y-5 bg-white">
        <SummaryGui accountName = {"우리가족 사랑해"} week = {4} />
        <span className="items-center mt-5 text-[14px] text-[#757575] font-light">보유 적금 보기</span>
        <div className="flex flex-col w-full px-5 gap-y-5">
          <AccountCard accountNo={"0000000000000"} totalBalance={"200000"}/>
          <InterestCard/>
        </div>

        <span className="items-center mt-5 text-[14px] text-[#757575] font-light">추천 상품 보기</span>
        <div className="flex flex-col w-full px-5 gap-y-5">
          <AdvertisingCard/>
          <AdvertisingCard/>
        </div>
     </main>
   </>
  );
};


