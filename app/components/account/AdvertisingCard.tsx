import React, { SetStateAction } from "react";

const AdvertisingCard = () => {

  return (
    <div className="w-full  px-5 py-4 flex justify-start items-start rounded-[12px] border border-[#E2E2E2] bg-white shadow-[0_0_12px_0_rgba(0,0,0,0.10)]">
      <div className="flex flex-col">
          <span className = "text-gray-500 text-4 font-semibold">
            더드림정기예금
          </span>
          <span className = "text-gray-400 text-[14px] font-light">
          영업점 방문 없이 장기 목돈굴리기 상품
          빠르게 가입해보세요!
          </span>
        </div>
    </div>
  );
};

export default AdvertisingCard;