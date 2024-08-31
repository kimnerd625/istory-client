
"use client"
import React, {useEffect, useState} from "react";
import FamilyInviteAcception from "../../sections/inviteAcception/FamilyInviteAcception"


interface EnterInviteCodeProps {
  // 초대링크 생성자(관리자) 정보 필요
  invite_code?: string;
}

export default function FamilyAcceptPage() {
  const [inviteCode, setInviteCode] = useState("");
  const [representName, setRepresentName] = useState("");
  const [error, setError] = useState("");

  const fetchFamilyData = async () => {
    if (!inviteCode) {
      alert("초대 코드를 입력해주세요.");
      return;
    }

    try {
      const response = await fetch(
        "https://istroyapi.ssafy.io/api/v1/family/invite-code-represent",
        {
          method: "POST",  // GET에서 POST로 변경
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include", // 쿠키 포함
          body: JSON.stringify({ inviteCode }), // 요청 바디에 초대 코드 포함
        }
      );

      if (!response.ok) {
        throw new Error("데이터 조회 실패");
      }

      const data = await response.json();

      console.log(data); // 디버깅 용도

      if (data.representName) {
        setRepresentName(data.representName);
        setError("");
      } else {
        setRepresentName("");
        setError("초대 코드가 유효하지 않습니다.");
      }

    } catch (error) {
      console.error("API 호출 중 에러 발생:", error);
      setError("API 호출 중 오류가 발생했습니다.");
    }
  };

  return (
    <main className="w-full flex-1 flex flex-col justify-between items-center bg-custom-background overflow-x-hidden py-[56px]">
      
      <FamilyInviteAcception/>
    </main>
  );
}