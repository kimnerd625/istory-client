"use client";

import React, { useState, useEffect } from "react";
import { toast } from "sonner";

import useWeekInfoStore from "../store/weekInfo";
import { getAccessToken } from "../utils/localAccessToken";

import Header from "../sections/Header";
import UsersProfile from "@/app/components/main/UsersProfile";
import BoxCard from "@/app/components/main/BoxCard";
import ArchiveCard from "@/app/components/main/ArchiveCard";
import AccountCard from "@/app/components/main/AccountCard";
import BottomNavigationBar from "../sections/BottomNavigationBar";

import CompassIcon from "@/public/icons/icon-compass.svg";
import Loading from "../loading";

interface FamilyMemberProps {
  userName: string;
  userImageUrl: string;
  isCompleted: boolean;
}

export default function MainPage() {
  const { weekInfo, setWeekInfo } = useWeekInfoStore();
  const [familyMembers, setFamilyMembers] = useState<FamilyMemberProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true); // 로딩 상태 추가

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
          throw new Error(
            "Weekly Mission 관련 정보를 불러 오는데, 실패했습니다. (BE)"
          );
        }

        const responseData = await response.json();

        const members = responseData.weeklyMission.member.map(
          (member: any) => ({
            userName: member.userName,
            userImageUrl: member.userProfile
              ? `http://ec2-43-201-221-63.ap-northeast-2.compute.amazonaws.com:8080/api/v1/file/image?systemname=${member.userProfile}`
              : "/images/profile-mom.jpg", // Default profile image when member.userProfile is empty
            isCompleted:
              responseData.weeklyMission.reports[member.userId]?.complete === 1,
          })
        );

        setFamilyMembers(members);

        setWeekInfo({
          weeklyNum: responseData.weeklyNum,
          missionContents: responseData.weeklyMission.missionContents,
          familymissionNo: responseData.weeklyMission.familymissionNo,
          showCheck: responseData.showCheck,
        });
      } catch (error) {
        console.error("Error fetching weekly mission:", error);
        toast.error(
          "Weekly Mission 관련 정보를 불러 오는데, 실패했습니다. (FE)"
        );
      } finally {
        setIsLoading(false); // 로딩 상태 해제
      }
    };

    fetchWeeklyMission();
  }, [setWeekInfo]); // setWeekInfo가 변경될 때마다 다시 실행

  if (isLoading) {
    return <Loading />; // 로딩 중일 때 로딩 상태 표시
  }

  return (
    <>
      <Header isUser={true} isCancel={false} isCheck={false} />
      <main className="w-full min-h-screen flex-1 flex flex-col justify-start items-start overflow-x-hidden overflow-y-scroll">
        <div className="w-full flex flex-row justify-start items-center pt-2 pb-2 px-5 gap-x-5">
          {familyMembers &&
            familyMembers.map((member, index) => (
              <UsersProfile
                key={index}
                userName={member.userName}
                userImageUrl={member.userImageUrl}
                isCompleted={member.isCompleted}
              />
            ))}
        </div>
        <div className="px-5 pt-[5px] pb-[14px] w-full flex flex-row justify-start items-center gap-x-[3px]">
          <CompassIcon width={15} height={15} />
          <span className="font-semibold text-sm leading-4 tracking-tight text-[#5A5A5A]">
            가족 공간 탐험하기
          </span>
        </div>
        <BoxCard />
        <ArchiveCard />
        <AccountCard weeklyMissionNum={weekInfo?.weeklyNum || 1} />
        <div className="h-[55px]" />
      </main>
      <BottomNavigationBar />
    </>
  );
}
