"use client";
import React, { useState, useEffect } from "react";
import Header from "../sections/Header";
import UsersProfile from "@/app/components/main/UsersProfile";
import BoxCard from "@/app/components/main/BoxCard";
import ArchiveCard from "@/app/components/main/ArchiveCard";
import AccountCard from "@/app/components/main/AccountCard";
import BottomNavigationBar from "../sections/BottomNavigationBar";
import { getAccessToken } from "../utils/localAccessToken";
import { toast } from "sonner";

const familyMembers = [
  {
    userName: "민지",
    userImageUrl: "/images/user-default2.png",
    isCompleted: true,
  },
  {
    userName: "지민",
    userImageUrl: "/images/user-default2.png",
    isCompleted: false,
  },
  {
    userName: "정국",
    userImageUrl: "/images/user-default2.png",
    isCompleted: true,
  },
];

export default function MainPage() {
  useEffect(() => {
    const fetchWeeklyMission = async () => {
      const accessToken = getAccessToken();
      console.log(accessToken);

      try {
        const response = await fetch("/api/mission/getWeeklyMission", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (!response.ok) {
          throw new Error("회원 상태를 불러 오는데, 실패했습니다.");
        }
      } catch (error) {
        toast.error("회원 상태를 불러 오는데, 실패했습니다.");
      }
    };

    fetchWeeklyMission();
  }, []);

  return (
    <>
      <Header isUser={true} isCancel={false} isCheck={false} />
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
      <BoxCard />
      <ArchiveCard />
      <AccountCard />
      <BottomNavigationBar />
    </>
  );
}
