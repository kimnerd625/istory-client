"use client"
import React, {useEffect, useState} from "react";
import { SummaryGui, AccountCard, InterestCard, AdvertisingCard } from "@/app/components/account";
import Header from "../sections/Header";
import { toast } from "sonner";



export default function AccountPage() {

  const [accountData, setAccountData] = useState<any>();

  useEffect(()=>{

    const fetchAccountData = async() => {
      try {
        const response = await fetch("http://ec2-43-201-221-63.ap-northeast-2.compute.amazonaws.com/api/v1/account", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include"
        });
  
        if (!response.ok) {
          throw new Error("데이터 조회 실패");
        }

        console.log(response);

        setAccountData(response);

      } catch (error) {
        toast.error("데이터 조회 실패");
      }
    }

    fetchAccountData();

  }, [])

  return (
   <>
     <Header isUser={true} isCancel={false} isCheck={false}/>
     <main className="w-full py-0 flex flex-col justify-start items-center gap-y-5 bg-white">
        <SummaryGui accountNickname = {"우리가족 사랑해"} week = {4} accountExpiryDate={"2025-08-25"} depositBalance={"5000"}/>
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


