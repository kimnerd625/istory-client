"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

import Header from "@/app/sections/Header";
import BoxInfo from "@/app/components/box/BoxInfo";
import BottomNavigationBar from "@/app/sections/BottomNavigationBar";
import ArchiveUserInfo from "@/app/components/archive/ArchiveUserInfo"; // Import the ArchiveUserInfo component
import { toast } from "sonner";
import { getAccessToken } from "@/app/utils/localAccessToken";
import Loading from "@/app/loading";
import useLoginInfoStore from "@/app/store/loginInfo";

export default function DetailPage() {
  const pathname = usePathname();
  const [archiveData, setArchiveData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { loginInfo, setLoginInfo } = useLoginInfoStore();

  const missionNo = pathname.split("/").pop();

  useEffect(() => {
    const fetchArchiveData = async () => {
      if (!missionNo) return;
      const accessToken = getAccessToken();

      if (loginInfo) {
        try {
          const formData = new FormData();
          formData.append("weekNum", missionNo);
          formData.append("roundNum", "3");

          const response = await fetch(`/api/archive/getArchiveCard`, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
            body: formData,
          });

          if (!response.ok) {
            throw new Error("아카이브 세부 정보를 불러오는데 실패했습니다.");
          }

          // Parse the response data
          const data = await response.json();

          // Set the fetched archive data to the state
          setArchiveData(data);
        } catch (error) {
          console.error("Error fetching archive details:", error);
          toast.error("아카이브 세부 정보를 불러오는데 실패했습니다.");
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchArchiveData();
  }, [missionNo]);

  // Function to map reports data and render ArchiveUserInfo
  const renderReports = () => {
    if (
      !archiveData ||
      !archiveData.weeklyMission ||
      !archiveData.weeklyMission.reports
    ) {
      return null;
    }

    // Get the reports object
    const reports = archiveData.weeklyMission.reports;

    // Map through the reports and return JSX for each report
    return Object.entries(reports).map(([userId, report]: any) => (
      <div
        key={userId}
        className="report-card w-full flex flex-col gap-y-2 mb-4"
      >
        {/* Render ArchiveUserInfo for the user */}
        <ArchiveUserInfo
          userName={report.user.userName}
          userImageUrl={
            report.user.userProfile
              ? `http://ec2-43-201-221-63.ap-northeast-2.compute.amazonaws.com:8080/api/v1/file/image?systemname=${report.user.userProfile}`
              : "/images/character-default.png" // Provide a default image if userProfile is empty
          }
          date={report.user.registDate || new Date().toISOString()} // Pass the registration date or current date as a fallback
        />
        <div className="ml-12">
          <p className="text-[#1A2128] text-sm font-normal mb-1">
            {report.thoughts}
          </p>
          <p className="text-[#B3B3B3] text-xs">
            완료 상태: {report.complete === 2 ? "완료됨" : "미완료"}
          </p>
        </div>
      </div>
    ));
  };

  return (
    <>
      <Header isCancel={true} isCheck={false} isUser={false} />
      <main className="w-full px-5 py-7 flex-1 flex flex-col justify-start items-center bg-custom-background gap-y-9">
        <BoxInfo
          isDateVisible={true}
          isLabelVisible={true}
          contents={
            archiveData?.weeklyMission?.missionContents ||
            "오늘은 식목일입니다.모두 식물 하나 심어 볼까요?"
          }
          weeklyNum={archiveData?.weekNum || 1}
          startDate={archiveData?.weeklyMission?.registDate || "2024-08-31"}
          endDate={archiveData?.weeklyMission?.expirationDate || "2024-09-06"}
        />
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {/* Render the mission image */}
            <div className="relative w-[320px] h-[240px] rounded-xl shadow-lg overflow-hidden">
              <Image
                src={
                  archiveData?.missionImg
                    ? `http://ec2-43-201-221-63.ap-northeast-2.compute.amazonaws.com:8080/api/v1/file/image?systemname=${archiveData.missionImg}`
                    : "/images/mission-image.jfif" // Default image if missionImg is not provided
                }
                alt="미션 이미지"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            {renderReports()} {/* Render the mapped reports */}
          </>
        )}
        <div className="min-w-[55px]" />
      </main>
      <BottomNavigationBar />
    </>
  );
}
