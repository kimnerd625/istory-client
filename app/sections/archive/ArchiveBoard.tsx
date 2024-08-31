"use client";

import React, { useEffect, useState } from "react";
import ArchiveCard from "@/app/components/archive/ArchiveCard";
import { toast } from "sonner";
import { getAccessToken } from "../../utils/localAccessToken";
import useLoginInfoStore from "@/app/store/loginInfo";

interface RoundMission {
  familymission_no: number;
  mission_no: number;
  family_key: string;
  regist_date: string;
  expiration_date: string;
  complete: number;
}

const ArchiveBoard = () => {
  const { loginInfo } = useLoginInfoStore();
  const [missions, setMissions] = useState<RoundMission[]>([]); // 미션 데이터를 저장할 상태 추가

  useEffect(() => {
    const fetchArchiveData = async () => {
      const accessToken = getAccessToken();
      console.log(accessToken);

      if (loginInfo) {
        try {
          const response = await fetch("/api/archive/getAllArchive", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify({ userId: loginInfo.userId }),
          });

          if (!response.ok) {
            throw new Error("아카이브 조회에 실패했습니다.");
          }

          const data = await response.json();
          console.log(data);

          // 서버에서 가져온 데이터를 상태에 저장
          if (data.roundMissions) {
            setMissions(data.roundMissions);
          }
        } catch (error) {
          toast.error("아카이브 조회에 실패했습니다.");
        }
      }
    };
    fetchArchiveData();
  }, [loginInfo]);

  // 미션 데이터를 6개씩 그룹으로 나누기
  const chunkMissions = (missions: RoundMission[], chunkSize: number) => {
    const chunks = [];
    for (let i = 0; i < missions.length; i += chunkSize) {
      chunks.push(missions.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const missionGroups = chunkMissions(missions, 6); // 6개씩 나누기

  return (
    <div>
      <section className="w-full flex flex-col justify-center items-start gap-y-1">
        {/* 미션 데이터를 6개씩 그룹으로 묶어 ArchiveCard를 생성 */}
        {missionGroups.map((group, groupIndex) => (
          <div
            key={groupIndex}
            className="flex flex-row justify-center items-start gap-x-1"
          >
            {group.map((mission, index) => (
              <ArchiveCard
                key={groupIndex * 6 + index} // 고유한 key 값 설정
                missionNo={groupIndex * 6 + index + 1} // 전체 인덱스를 기반으로 missionNo 설정
                complete={mission.complete}
              />
            ))}
          </div>
        ))}
      </section>
    </div>
  );
};

export default ArchiveBoard;
