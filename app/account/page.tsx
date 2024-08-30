"use client"
import React, {useEffect, useState} from "react";
import { toast } from "sonner";
import { SummaryGui, AccountCard, InterestCard, AdvertisingCard } from "@/app/components/account";
import Header from "../sections/Header";
import BottomNavigationBar from "../sections/BottomNavigationBar";




export default function AccountPage() {
  const [accountData, setAccountData] = useState<any>(); // accountData라는 상태(state)와 상태를 업데이트할 setAccountData 함수를 생성


  // 컴포넌트가 처음 렌더링될 때 한 번 실행되는 useEffect 훅
  useEffect(()=>{


    // 데이터를 가져오는 fetchAccountData라는 비동기 함수(async function)를 정의합니다.
    const fetchAccountData = async() => {
      try {
        const response = await fetch("https://istroyapi.ssafy.io/api/v1/inquireAccount", {
          method: "GET",
          headers: {
            "Content-Type": "application/json", // JSON 형식으로 데이터를 주고받는다
          },
          credentials: "include" // 쿠키를 포함하여 요청을 보냅니다.
        });
  
        if (!response.ok) {
          throw new Error("데이터 조회 실패");
        }

        // 디버깅 용도  
        console.log(response);

        // 응답 데이터를 상태로 저장하여 화면에 반영되도록 합니다.
        setAccountData(response);

      } catch (error) {
        toast.error("데이터 조회 실패");
      }
    }

    // 위에서 정의한 fetchAccountData 함수를 호출하여 데이터를 가져옵니다.
    fetchAccountData();

  }, [])

  // accountData.accountNickName 으로 파라미터로 던져줌.
  // 컴포넌트 안에서 accountData 인식 가능 
  return (
   <>
     <Header isUser={true} isCancel={false} isCheck={false}/>
     <main className="w-full py-0 flex flex-col justify-start items-center gap-y-5 bg-white">
        <SummaryGui accountNickname = "우리가족 사랑해" weeklyNum = {4} accountExpiryDate="2025-08-25" depositBalance="5000"/>
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
        <div className="h-12"></div>
        <BottomNavigationBar/>
     </main>
   </>
  );
};


