"use client";

import React, { useState, useEffect } from "react";

import Header from "@/app/sections/Header";
import BoxInfo from "@/app/components/box/BoxInfo";
import ImageUploader from "@/app/components/box/ImageUploader";
import MissionInput from "@/app/components/box/MissionInput";
import useWeekInfoStore from "@/app/store/weekInfo";
import useLoginInfoStore from "@/app/store/loginInfo";
import { getAccessToken } from "@/app/utils/localAccessToken";
import { toast } from "sonner";
import Loading from "@/app/loading";

interface FamilyMemberProps {
  userId: string;
  userName: string;
  userImageUrl: string;
  thoughts: string;
  isCompleted: boolean;
}

export default function MissionLogPage() {
  const [isTextInputFocused, setIsTextInputFocused] = useState<boolean>(false);
  const { weekInfo } = useWeekInfoStore();
  const [showCheck, setShowCheck] = useState<boolean | null>(null);
  const [contents, setContents] = useState<string>("");
  const [weeklyNum, setWeeklyNum] = useState<number>();
  const [startDate, setStartDate] = useState<string>();
  const [endDate, setEndDate] = useState<string>();

  const [missionImg, setMissionImg] = useState<string>();

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
              : "/images/profile-mom.jpg", // Default profile image when member.userProfile is empty
            thoughts: report.thoughts || "", // Get thoughts from the reports object
            isCompleted: report.complete === 1, // Get completion status from the reports object
          };
        });

        setMissionImg(
          `http://ec2-43-201-221-63.ap-northeast-2.compute.amazonaws.com:8080/api/v1/file/image?systemname=${responseData.missionImg}`
        );
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

  // Find the logged-in user from family members
  const loggedInUser = familyMembers.find(
    (member) => member.userId === loginInfo?.userId
  );

  return (
    <>
      <Header isCheck={true} isCancel={true} isUser={false} />
      <main className="w-full flex-1 flex flex-col justify-start items-center bg-custom-background">
        <div className="w-full px-5 py-7 flex flex-col justify-start items-center gap-y-9">
          <BoxInfo
            isDateVisible={false}
            contents={contents}
            weeklyNum={weeklyNum}
          />
          {isTextInputFocused ? (
            <></>
          ) : (
            <ImageUploader
              missionImg={missionImg || ""}
              familymissionNo={weekInfo?.familymissionNo || ""}
            />
          )}
          {loggedInUser && (
            <MissionInput
              thoughts={loggedInUser.thoughts}
              userName={loggedInUser.userName}
              userImageUrl={loggedInUser.userImageUrl}
              setIsTextInputFocused={setIsTextInputFocused}
            />
          )}
        </div>
      </main>
    </>
  );
}
