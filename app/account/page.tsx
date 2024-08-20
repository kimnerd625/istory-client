import React from "react";
import SummaryGui from "../components/account/SummaryGui";
import AccountCard from "../components/account/AccountCard";
import InterestCard from "../components/account/InterestCard";
import AdvertisingCard from "../components/account/AdvertisingCard";

export default function AccountPage() {
  const accountName = "우리가족 사랑해";
  return (
    <div className="w-full py-0 flex flex-col justify-start items-center gap-y-5">
       {/* 요약 카드 섹션 */}
      <section className="w-full flex flex-col justify-center items-center gap-y-5">
        <div className="summary-card p-5 bg-[#F4F6FA] w-full h-[318px] flex-1 flex flex-col justify-start items-start">
            <div className="border-[1.6px] border-[#9FB8F8] px-4 py-2 rounded-lg flex flex-row justify-center items-center mb-[10px]">
              <span className="font-extrabold text-sm tracking-tight leading-4 text-[#9FB8F8]">D-324</span>
            </div>
            <div className="mb-[60px]">
              <span className="font-semibold tracking-tight leading-6 text-[26px] text-blue-500 pb-14 mt-[10px]">{accountName}</span>
              <span className="w-2"></span>
              <span className="font-semibold tracking-tight leading-6 text-[26px] text-blue-500 pb-14 mt-[10px]">모임</span>
            </div>
            <SummaryGui accountName={accountName} week={4}/>
          </div>
      </section>
      <span className="items-center mt-5 text-[14px] text-[#757575] font-light">보유 적금 보기</span>
      <div className="flex flex-col w-full px-5 gap-y-5">
        <AccountCard accountNo={""} />
        <InterestCard/>
        <AdvertisingCard/>
        <AdvertisingCard/>
      </div>
    </div>
  );
};


