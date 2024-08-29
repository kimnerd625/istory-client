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
import useWeekInfoStore from "../store/weekInfo";
interface FamilyMemberProps {
  userName: string;
  userImageUrl: string;
  isCompleted: boolean;
}

export default function MainPage() {
  const { weekInfo, setWeekInfo } = useWeekInfoStore();
  const [familyMembers, setFamilyMembers] = useState<FamilyMemberProps[]>([]); // 배열 타입으로 수정

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

        // 데이터 매핑
        const members = responseData.weeklyMission.member.map(
          (member: any) => ({
            userName: member.userName,
            userImageUrl: member.userProfile || "/images/user-default2.png",
            isCompleted:
              responseData.weeklyMission.reports[member.userId]?.complete === 1,
          })
        );

        console.log(members);

        setFamilyMembers(members);

        setWeekInfo({
          weeklyNum: responseData.weeklyNum,
          missionContents: responseData.weeklyMission.missionContents,
        });
      } catch (error) {
        console.error("Error fetching weekly mission:", error);
        toast.error(
          "Weekly Mission 관련 정보를 불러 오는데, 실패했습니다. (FE)"
        );
      }
    };

    fetchWeeklyMission();
  }, []);

  return (
    <>
      <Header isUser={true} isCancel={false} isCheck={false} />
      <div className="flex flex-row justify-start">
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
      <BoxCard />
      <ArchiveCard />
      <AccountCard weeklyMissionNum={weekInfo?.weeklyNum || 1} />
      <BottomNavigationBar />
    </>
  );
}
