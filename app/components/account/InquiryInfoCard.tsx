import React, { useState, useEffect } from "react";

interface PaymentInfo {
  date: string; // 납입 날짜
  amount: string; // 납입 금액
}

interface InquiryinfoCardProps {
  depositBalance: string; // 가입금액
  totalBalance: string; // 누적금액
  paymentInfo: PaymentInfo[]; // 납입 회차 정보 리스트

}

const InquiryinfoCard = ({depositBalance, totalBalance, paymentInfo }: InquiryinfoCardProps) => {

  // 날짜 함수
  const today = new Date();
  const formattedDate = `${today.getFullYear()}. ${today.getMonth() + 1}. ${today.getDate()}`;


  return (
    <div className="w-full p-5 flex justify-start items-start">
      <div className="w-full flex flex-col">
          <span className="text-gray-400 font-light">{paymentInfo[0].date}</span>
          <div className="flex flex-row justify-between mt-3">
            <p>한 주 추억 쌓기</p>
            <span className="text-main-600 text-xl font-semibold">{depositBalance}원</span>
          </div>
      </div>
    </div>
  );
};

export default InquiryinfoCard;