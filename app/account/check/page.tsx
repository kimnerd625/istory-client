"use client";

import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import Header from "@/app/sections/Header";
import SummaryInquiry from "@/app/components/account/SummaryInquiry";
import InquiryinfoCard from "@/app/components/account/InquiryInfoCard";
import BottomNavigationBar from "../../sections/BottomNavigationBar";

// 임시 데이터
const paymentInfo = [
  { date: "2024.08.01", amount: "200,000" },
  { date: "2024.08.08", amount: "200,000" },
  { date: "2024.08.15", amount: "200,000" },
];

export default function MissionLogPage() {
  const [isTextInputFocused, setIsTextInputFocused] = useState<boolean>(false);

  const [inquireData, setInquireData] = useState<any>();
  // 컴포넌트가 처음 렌더링될 때 한 번 실행되는 useEffect 훅
  useEffect(() => {
    // 데이터를 가져오는 fetchInquireData라는 비동기 함수(async function)를 정의합니다.
    const fetchInquireData = async () => {
      try {
        const response = await fetch(
          "https://istroyapi.ssafy.io/api/v1/inquireAccount",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json", // JSON 형식으로 데이터를 주고받는다
            },
            credentials: "include", // 쿠키를 포함하여 요청을 보냅니다.
          }
        );

        if (!response.ok) {
          throw new Error("데이터 조회 실패");
        }

        // 디버깅 용도
        console.log(response);

        // 응답 데이터를 상태로 저장하여 화면에 반영되도록 합니다.
        setInquireData(response);
      } catch (error) {
        toast.error("데이터 조회 실패");
      }
    };

    // 위에서 정의한 fetchAccountData 함수를 호출하여 데이터를 가져옵니다.
    fetchInquireData();
  }, []);

  return (
    <>
      <Header isCheck={false} isCancel={true} isUser={false} />
      <main className="w-full flex-1 flex flex-col justify-start items-center bg-custom-background">
        <SummaryInquiry
          accountNickName="우리가족"
          accountNo="0000000000000"
          totalBalance="200,000"
          week={4}
          accountCreateDate="2024.08.10"
          accountExpiryDate="2025.07.31"
        />
        <InquiryinfoCard
          depositBalance="50000"
          totalBalance="50000"
          paymentInfo={paymentInfo}
        />
        <InquiryinfoCard
          depositBalance="50000"
          totalBalance="50000"
          paymentInfo={paymentInfo}
        />
        <InquiryinfoCard
          depositBalance="50000"
          totalBalance="50000"
          paymentInfo={paymentInfo}
        />
        <BottomNavigationBar />
      </main>
    </>
  );
}
