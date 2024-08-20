import React, { SetStateAction } from "react";

const InterestCard = () => {

  return (
    <div className="w-full  px-5 py-4 flex flex-row justify-between rounded-[12px] border border-[#E2E2E2] bg-white shadow-[0_0_12px_0_rgba(0,0,0,0.10)]">
      <div className = "text-[#666666] font-pretendard text-4 font-semibold">
        추억 카드 완주 시, <br/>
        최대 4.8% 받을 수 있어요.
      </div>
      <div className="flex items-center">
        <img
          src="/images/right-angle-gray.png"
          alt="오른쪽 회색 화살표"
        />
      </div>
    </div>
  );
};

export default InterestCard;