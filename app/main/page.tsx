"use client"
import React from "react";
import Header from "../sections/Header";
import UsersProfile from "@/app/components/main/UsersProfile";
import BoxCard from "@/app/components/main/BoxCard";
import ArchiveCard from "@/app/components/main/ArchiveCard";
import AccountCard from "@/app/components/main/AccountCard";


const familyMembers = [
  { userName: "민지", userImageUrl: "/images/user-default2.png", isCompleted: true },
  { userName: "지민", userImageUrl: "/images/user-default2.png", isCompleted: false },
  { userName: "정국", userImageUrl: "/images/user-default2.png", isCompleted: true }
];

export default function MainPage() {
  return (
    <>
      <Header isUser={true} isCancel={false} isCheck={false}/>
      <div className="flex flex-row justify-start">
        {familyMembers.map((member, index) => (
            <UsersProfile
              key={index}
              userName={member.userName}
              userImageUrl={member.userImageUrl}
              isCompleted={member.isCompleted}
            />
          ))}
      </div>
      <BoxCard/>
      <ArchiveCard/>
      <AccountCard/>
      
    </>
   );
}