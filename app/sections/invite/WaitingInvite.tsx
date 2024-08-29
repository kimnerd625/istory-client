import Image from "next/image";
import Link from "next/link";
import React from "react";

import MkCodeButton from "@/app/components/invite/MkCodeButton";
import UserCard from "@/app/components/invite/UserCard";

interface WaitingInviteProps {
  
}

const WaitingInvite = ({}) => {
  return (
    <section className="w-full flex-1 flex flex-col justify-between items-center">
      <section className="w-full flex flex-col justify-center pr-5 pl-5">
        <h4 className="font-bold text-[26px] leading-8 tracking-tight">
            가족 초대가 완료될 때까지 <br/>
            대기해주세요.
        </h4>
        <div className="h-[100px]"></div>
        <div className="flex justify-center">
          <div className="flex flex-row flex-wrap justify-center gap-5 w-[220px] h-[260px] overflow-y-auto">
            <UserCard name="박민지" />
            <UserCard name="박민지" />
            <UserCard name="박민지" />
            <UserCard name="박민지" />
            <div className="flex space-x-2 mb-8">
              <span className="block w-2 h-2 bg-gray-400 rounded-full"></span>
              <span className="block w-2 h-2 bg-gray-400 rounded-full"></span>
              <span className="block w-2 h-2 bg-gray-400 rounded-full"></span>
            </div>
          </div>
        </div>
 
      </section>
      {/* <div className="h-[100px]"></div> */}
      <section className="flex flex-col w-full gap-3">
        <Link href="/" className="w-full flex flex-row justify-center items-center">
          <MkCodeButton userId=""/>
        </Link>
        
        <div className="flex flex-row">
          <Link href="/" className="w-full flex flex-row justify-center items-center">
            <button type="button" className="flex flex-row justify-between items-center p-[10px]">
              <img src="/images/left-angle-gray.png"  alt="" />
              <div className="w-5"></div>
              <span className="text-xl font-semibold text-gray-400"> 이전 </span>
            </button>
          </Link>

          <Link href="/" className="w-full flex flex-row justify-center items-center">
            <button type="button" className="flex flex-row justify-between items-center p-[10px]">
              <span className="text-xl font-semibold text-gray-400"> 다음 </span>
              <div className="w-5"></div>
              <img src="/images/right-angle-gray.png" alt="" /> 
            </button>
          </Link>
        </div>
       
      </section>
    </section>
  )
};

export default WaitingInvite;
