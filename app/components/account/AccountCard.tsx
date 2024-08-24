import React, { SetStateAction } from "react";
import Link from "next/link";

interface AccountCardProps {
  accountNo: string;
}

const AccountCard = ({ accountNo = "0000000000000" }: AccountCardProps) => {

  return (
    <div className="w-full bg-[#98BFFB] px-5 py-4 flex flex-row justify-between gap-[10px] rounded-[12px] shadow-[0_5px_10px_0_rgba(0,0,0,0.15)]">
      <div className="flex flex-col">
        <div className="flex flex-row">
          <span className = "text-[#ffffff] font-pretendard text-[14px] font-light">
            우리은행
          </span>
          <span className = "text-[#ffffff] font-pretendard text-[14px] font-light "> 0000000000000
          </span>
        </div>
        <div className = "text-[#ffffff] font-pretendard text-[26px] font-bold ">200,000원</div>
      </div>
  

      <div className="flex items-center">
          <Link href="/account/check">
            <span className = "float text-[#ffffff] font-pretendard text-4 font-normal">조회</span>
          </Link>
          <span className="px-2">
          <img
              src="/images/right-angle-white.png"
              alt="오른쪽 흰색 화살표"
            />
          </span>
      </div>
    </div>
  );
};

export default AccountCard;