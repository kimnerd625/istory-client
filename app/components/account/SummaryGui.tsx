import React, { useState, useEffect } from "react";
import Image from "next/image";
import useWeekInfoStore from "@/app/store/weekInfo";

interface SummaryGuiProps {
  accountNickname: string;
  weeklyNum: number;
  accountExpiryDate: string;
  depositBalance: string;
}

const SummaryGui = ({
  accountNickname = "우리가족 사랑해",
  accountExpiryDate,
  weeklyNum,
  depositBalance = "4",
}: SummaryGuiProps) => {
  const { weekInfo } = useWeekInfoStore();
  let week = weekInfo?.weeklyNum ?? 0;
  let [Dday, setDday] = useState(0);
  let [targetAmount] = useState(2600000);

  // D-Day 계산 함수
  const calculateDday = (expiryDate: string) => {
    const today = new Date();
    const expiry = new Date(expiryDate);
    const diffTime = expiry.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  useEffect(() => {
    if (accountExpiryDate) {
      setDday(calculateDday(accountExpiryDate));
    }
  }, [accountExpiryDate]);

  const barSize = week * (320 / 52);

  return (
    <>
      <div className="w-full flex flex-col">
        {/* 요약 카드 섹션 */}
        <section className="w-full flex flex-col justify-center items-center gap-y-5">
          <div className="summary-card p-5 bg-[#f0f3fa] w-full h-[318px] flex-1 flex flex-col justify-start items-start">
            <div className="border-[1.6px] border-[#9FB8F8] px-4 py-2 rounded-lg flex flex-row justify-center items-center mb-[10px]">
              <span className="font-extrabold text-sm tracking-tight leading-4 text-[#9FB8F8]">
                D-{Dday}
              </span>
            </div>
            <div className="mb-[60px]">
              <span className="font-semibold tracking-tight leading-6 text-[26px] text-blue-500 pb-14 mt-[10px]">
                {accountNickname}
              </span>
              <span className="w-2"></span>
              <span className="font-semibold tracking-tight leading-6 text-[26px] text-blue-500 pb-14 mt-[10px]">
                모임
              </span>
            </div>

            <span className="text-[#1A2128] font-pretendard text-[20px] font-semibold leading-[25px] tracking-[-0.5px]">
              지금까지 <br />
              <span>{week}</span>
              <span>주 째</span>
              <br />
              진행하고 있어요! <br />
            </span>

            <div className="h-5"></div>

            {/* 배경 바 */}
            <div className="w-full h-[10px] bg-[#CADFFF] rounded-[10px] mt-4 relative">
              <div className="gui-box relative">
                <div
                  className="bar absolute top-0 left-0 h-[10px] bg-[#A3CFFF] rounded-[10px]"
                  style={{ width: `${barSize}px` }}
                >
                  <img
                    src="/images/account-summary-character.png"
                    alt="캐릭터"
                    className="absolute"
                    style={{
                      width: "50px !important",
                      height: "50px",
                      maxWidth: "none", // 부모 요소의 영향을 받지 않도록 설정
                      boxSizing: "border-box", // 크기 계산 방식을 border-box로 설정
                      left: `${barSize - 31}px`,
                      bottom: "-14px", // 이미지가 바에 맞게 위치하도록 조정
                    }}
                  />
                </div>
              </div>
              <Image
                src="/images/account-summary-flag.png"
                alt="깃발"
                width={200}
                height={200}
                className="absolute"
                style={{
                  width: "40px",
                  height: "40px",
                  right: "-2px",
                  bottom: "-2px", // 이미지가 바에 맞게 위치하도록 조정
                }}
              />
            </div>
            {/* 목표 금액을 오른쪽 끝에 배치 */}
            <div className="w-full flex justify-end mt-2">
              <span className="font-light text-[14px] text-[#757575]">
                목표 금액: {targetAmount}원
              </span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SummaryGui;
