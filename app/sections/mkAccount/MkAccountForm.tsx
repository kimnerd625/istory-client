import React from "react";
import Link from "next/link";

import SignUpHeader from "@/app/components/signup/SignUpHeader";
import NextButton from "@/app/components/signup/NextButton";

interface MkAccountFromProps {
  accountNickname: string;
  setAccountNickname: React.Dispatch<React.SetStateAction<string>>;

  paymentBalance: string;
  setPaymentBalance: React.Dispatch<React.SetStateAction<string>>;

  paymentDate: string;
  setPaymentDate: React.Dispatch<React.SetStateAction<string>>;

  withdrawalBankCode: string;
  setWithdrawalBankCode: React.Dispatch<React.SetStateAction<string>>;

  withdrawalBankName: string;
  setWithdrawalBankName: React.Dispatch<React.SetStateAction<string>>;

  withdrawalAccountNo: string;
  setWithdrawalAccountNo: React.Dispatch<React.SetStateAction<string>>;
}

const MkAccountFrom = ({
  accountNickname,
  setAccountNickname,
  paymentBalance,
  setPaymentBalance,
  paymentDate,
  setPaymentDate,
  withdrawalBankCode,
  setWithdrawalBankCode,
  withdrawalBankName,
  setWithdrawalBankName,
  withdrawalAccountNo,
  setWithdrawalAccountNo,
}: MkAccountFromProps) => {
  return (
    <section className="w-full flex-1 flex flex-col justify-between items-center">
      <div className="w-full flex flex-col justify-center items-start gap-y-4">
        <div className="w-full flex flex-row justify-between items-center gap-y-2">
          {/* 적금 계좌 이름  */}
          <label
            htmlFor="accountNickname"
            className="text-base font-semibold text-[#1A2128] tracking-tight leading-4"
          >
            적금 계좌 이름
          </label>
          <div className="flex flex-row justify-between items-center gap-x-[7px]">
            <input
              key="accountNicknameinput"
              type="text"
              id="accountNickname"
              value={accountNickname}
              onChange={(e) => setAccountNickname(e.target.value)}
              placeholder="예시: 울가족 사랑해"
              className="w-full px-[14px] py-[13px] rounded-lg bg-[#E4E4E4] focus:outline-none focus:bg-main-300"
            />
          </div>
        </div>
        {/* 매주 납입 금액 */}
        <div className="w-full flex flex-row justify-between items-center gap-y-2">
          <label
            htmlFor="depositBalance"
            className="text-base font-semibold text-[#1A2128] tracking-tight leading-4"
          >
            매주 납입 금액
          </label>
          <div className="flex flex-row justify-between items-center gap-x-[7px]">
            <input
              key="depositBalanceinput"
              type="text"
              id="depositBalance"
              value={paymentBalance}
              onChange={(e) => setPaymentBalance(e.target.value)}
              placeholder="원"
              className="w-full px-[14px] py-[13px] rounded-lg bg-[#E4E4E4] focus:outline-none focus:bg-main-300"
            />
          </div>
        </div>
        {/* 적금 기간 */}
        <div className="w-full flex flex-row justify-between items-center gap-y-2">
          <label
            htmlFor="depositBalance"
            className="text-base font-semibold text-[#1A2128] tracking-tight leading-4"
          >
            적금 기간 
          </label>
          <div className="flex flex-row justify-between items-center gap-x-[7px]">
            <div className=" text-base w-full px-[14px] py-[13px] rounded-lg ">
              52 주 
            </div>
          </div>
        </div>
        {/* 적금 요일 */}
        <div className="w-full flex flex-row justify-between items-center gap-y-2">
          <label
            htmlFor="paymentDate"
            className="text-base font-semibold text-[#1A2128] tracking-tight leading-4"
          >
            적금 요일 
          </label>
          <div className="flex flex-row justify-between items-center gap-x-[7px]">
            <input
              key="depositBalanceinput"
              type="text"
              id="depositBalance"
              value={paymentDate}
              onChange={(e) => setPaymentDate(e.target.value)}
              placeholder="요일"
              className="w-full px-[14px] py-[13px] rounded-lg bg-[#E4E4E4] focus:outline-none focus:bg-main-300"
            />
          </div>
        </div>
        {/* 최고 적용 금리 */}
        <div className="w-full flex flex-row justify-between items-center gap-y-2">
          <label
            htmlFor="depositBalance"
            className="text-base font-semibold text-[#1A2128] tracking-tight leading-4"
          >
           최고 적용 금리  
          </label>
          <div className="flex flex-row justify-between items-center gap-x-[7px]">
            <div className=" text-base w-full px-[14px] py-[13px] rounded-lg ">
              4.8 % 
            </div>
          </div>
        </div>

        {/* 연결계좌 */}
        <div className="w-full flex flex-row justify-between items-center bg-[#E4E4E4] rounded-[12px]">
          <div className="w-full flex flex-row justify-between items-center px-7 h-[80px]">
            <span>연결 계좌</span>
            <div>
              <span>등록하기</span>
              <img src="/image/right-angle-gray.tsx" alt="" />
            </div>
          </div>
        </div>

        <div className="h-[61px]"> </div>
      </div>
      <Link href="/" className="w-full flex flex-row justify-center items-center">
        <button
        // onClick={() => handleClickNextButton()}
        className="bg-main-400 rounded-xl w-full flex flex-col justify-center items-center font-extrabold text-white text-xl leading-5 tracking-tight py-[18px]">
          다&nbsp;&nbsp;&nbsp;음
        </button>
      </Link>
    </section>
  );
};

export default MkAccountFrom;
