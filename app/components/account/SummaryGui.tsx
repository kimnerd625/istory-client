import React, { SetStateAction } from "react";
import Image from "next/image";


interface SummaryGuiProps {
  accountName: string;
  week: number;
}

const SummaryGui = ({ accountName = "우리가족", week = 4 }: SummaryGuiProps) => {
  const barSize = 50;

  return (
    <div className="w-full flex flex-col">
      <span className = "text-[#1A2128] font-pretendard text-[20px] font-semibold leading-[25px] tracking-[-0.5px]">
        지금까지 <br/>
        <span>{week}</span><span>주 째</span><br/>
        진행하고 있어요! <br/>
      </span>
    
      {/* 배경 바 */}
      <div className="w-full h-[10px] bg-[#CADFFF] rounded-[10px] mt-4 relative">
        <div className="gui-box relative">
          <div className="bar absolute top-0 left-0 h-[10px] bg-[#A3CFFF] rounded-[10px]" style={{ width: `${barSize}px` }}>
            <Image src="/images/account-summary-character.png" 
            alt="캐릭터"
            width={200}
            height={200}
            className="absolute"
            style={{
              left: `${barSize - 16}px`,
              bottom: '-14px', // 이미지가 바에 맞게 위치하도록 조정
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
            width: '40px',
            height: '40px',
            right: '-2px',
            bottom: '-2px', // 이미지가 바에 맞게 위치하도록 조정
          }}
        />
      </div>
      {/* 목표 금액을 오른쪽 끝에 배치 */}
      <div className="w-full flex justify-end mt-2">
        <span className="font-light text-[14px] text-[#757575]">목표 금액: 2,600,000원</span>
      </div>
    </div>
  );
};

export default SummaryGui;