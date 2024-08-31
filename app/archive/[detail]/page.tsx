"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import Header from "@/app/sections/Header";
import BoxInfo from "@/app/components/box/BoxInfo";
import ArchiveDetailCard from "@/app/components/archive/ArchiveDetailCard";
import BottomNavigationBar from "@/app/sections/BottomNavigationBar";
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
          const response = await fetch(`/api/archive/getArchiveDetail`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify({
              userId: loginInfo.userId,
              weekNumber: missionNo,
            }),
          });

          if (!response.ok) {
            throw new Error("아카이브 세부 정보를 불러오는데 실패했습니다.");
          }

          const data = await response.json();
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

  return (
    <>
      <Header isCancel={true} isCheck={false} isUser={false} />
      <main className="w-full px-5 py-7 flex-1 flex flex-col justify-start items-center bg-custom-background gap-y-9">
        <BoxInfo isDateVisible={false} isLabelVisible={false} />
        {isLoading ? (
          <Loading />
        ) : (
          <ArchiveDetailCard
            userName="민지"
            missionNo={missionNo || ""}
            data={archiveData}
          />
        )}
      </main>
      <BottomNavigationBar />
    </>
  );
}
