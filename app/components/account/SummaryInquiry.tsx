import React, { SetStateAction } from "react";


interface SummaryInquiryProps {
  accountNickName: string;
  accountNo: string;
  totalBalance: string;
  week: number;
  accountCreateDate: string;
  accountExpiryDate: string;

}

const SummaryInquiry = ({ accountNickName = "우리가족", accountNo="0000000000000", totalBalance="200000" ,week = 4,  accountCreateDate= "2024.08.10",  accountExpiryDate="2025.07.31" }: SummaryInquiryProps) => {

  return (
    <section className="w-full flex flex-col">
      <div className="summary-inquiry-card p-5 bg-[#f0f3fa] w-full flex flex-col items-center gap-7 justify-center ">
        <div className="flex flex-col justify-center items-center font-light">
          <article className="account-info text-[14px] mb-5">
            <span className="text-main-600">{accountNickName}</span>
            <span className="text-gray-500">모임</span>
          </article>
          <article className="account-no text-gray-400 text-[14px]"/>신한은행 {accountNo}
          <article className="account-data text-gray-900 font-bold text-[28px]">
            <span/>{totalBalance}
            <span/>원
          </article>
        </div>
        <div className="text-[14px] text-gray-400 justify-between font-light">
          <span className="pr-16">만기일</span>
          <span>{accountExpiryDate}</span>
        </div>
        <div className="card flex flex-col w-full gap-4 bg-white rounded-[12px] p-5 ">
          <div className="account-info text-[14px] font-light">
            <div className="flex flex-row justify-between"> 
              <span>기본 금리</span>
              <span>1.80%</span>
            </div>
            <div className="flex flex-row justify-between">
              <span>최대 우대 금리</span>
              <span>4.80%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SummaryInquiry;