import Image from "next/image";
import Link from "next/link";
import React from "react";

import MkCodeButton from "@/app/components/invite/MkCodeButton";
import UserCard from "@/app/components/invite/UserCard";

interface WaitingInviteProps {
  
}

const WaitingInvite = ({}) => {
  return (
    <main className="w-full flex flex-col justify-center items-center bg-home-bg py-[56px]">
      <section className="w-full flex flex-col justify-center pr-5 pl-5">
        <h4 className="text-2xl font-bold text-black">
            가족 초대가 완료될 때까지 <br/>
            대기해주세요.
        </h4>
        <div className="h-[70px]"></div>
        <div className="flex justify-center">
          <div className="flex flex-row flex-wrap justify-center gap-4 w-[220px] h-[250px] overflow-y-auto">
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
      
      <Link href="/"
            className="w-full flex flex-row justify-center items-center">
        <MkCodeButton userId=""/>
      </Link>
    </main>
  )
};

export default WaitingInvite;
