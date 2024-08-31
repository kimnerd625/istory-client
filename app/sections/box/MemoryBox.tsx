"use client";

import React, { useState, useEffect } from "react";

import BoxHero from "@/app/components/box/BoxHero";
import BoxInfo from "@/app/components/box/BoxInfo";
import MissionCard from "@/app/components/box/MissionCard";

import useWeekInfoStore from "@/app/store/weekInfo";
import Loading from "@/app/loading";
import { getAccessToken } from "@/app/utils/localAccessToken";
import { toast } from "sonner";
import useLoginInfoStore from "@/app/store/loginInfo";

interface FamilyMemberProps {
  userId: string;
  userName: string;
  userImageUrl: string;
  thoughts: string;
  isCompleted: boolean;
}

const MemoryBox = () => {
  const { weekInfo } = useWeekInfoStore();
  const [showCheck, setShowCheck] = useState<boolean | null>(null);
  const [contents, setContents] = useState<string>("");
  const [weeklyNum, setWeeklyNum] = useState<number>();
  const [startDate, setStartDate] = useState<string>();
  const [endDate, setEndDate] = useState<string>();

  const [familyMembers, setFamilyMembers] = useState<FamilyMemberProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { loginInfo } = useLoginInfoStore();

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

        const members = responseData.weeklyMission.member.map((member: any) => {
          const report =
            responseData.weeklyMission.reports[member.userId] || {};
          return {
            userId: member.userId,
            userName: member.userName,
            userImageUrl: member.userProfile
              ? `http://ec2-43-201-221-63.ap-northeast-2.compute.amazonaws.com:8080/api/v1/file/image?systemname=${member.userProfile}`
              : "/images/character-default.png", // Default profile image when member.userProfile is empty
            thoughts: report.thoughts || "", // Get thoughts from the reports object
            isCompleted: report.complete === 1, // Get completion status from the reports object
          };
        });

        setFamilyMembers(members);
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
  }, []);

  useEffect(() => {
    if (weekInfo) {
      setShowCheck(weekInfo.showCheck ?? false);
      setContents(weekInfo.missionContents ?? "");
      setWeeklyNum(weekInfo.weeklyNum);
      setStartDate(weekInfo.startDate);
      setEndDate(weekInfo.endDate);
    }
  }, [weekInfo]);

  if (isLoading) {
    return <Loading />; // 로딩 중일 때 로딩 상태 표시
  }

  if (showCheck === null) {
    return <Loading />;
  }

  return (
    <>
      {showCheck ? (
        <div className="w-full px-5 py-7 flex flex-col justify-start items-center gap-y-9">
          <BoxInfo
            isDateVisible={true}
            contents={contents}
            weeklyNum={weeklyNum}
            startDate={startDate}
            endDate={endDate}
          />
          <section className="w-full flex flex-col justify-center items-center">
            {familyMembers.map((member, index) => (
              <MissionCard
                key={index}
                userName={member.userName}
                userImageUrl={member.userImageUrl}
                thoughts={member.thoughts}
                isMe={member.userId === loginInfo?.userId}
              />
            ))}
          </section>
        </div>
      ) : (
        <BoxHero />
      )}
    </>
  );
};

export default MemoryBox;
