"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; 
import crypto from "crypto"; // Node.js의 crypto 모듈을 사용하여 SHA-256 해싱을 처리합니다.

interface MkCodeButtonProps {
  userId: string; 
}

const MkCodeButton = ({ userId }: MkCodeButtonProps) => {
  const [loading, setLoading] = useState(false); // API 호출 중 로딩 상태를 관리합니다.
  const router = useRouter(); // Next.js의 useRouter 훅을 사용하여 페이지 이동을 처리합니다.

  // 초대 코드 생성 및 페이지 이동 처리 함수
  const handleInviteCodeGeneration = async () => {
    try {
      setLoading(true);

      // userId를 SHA-256으로 해싱하여 inviteCode 생성
      const inviteCode = crypto.createHash("sha256").update(userId).digest("hex");

      // 초대 코드 생성 API 호출
      const response = await fetch("/api/invite/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ inviteCode }),
      });

      const result = await response.json();

      if (response.ok) {
        // 초대 코드 생성이 성공하면 초대 대기 페이지로 이동
        router.push(`/invite?inviteCode=${inviteCode}`);
      } else {
        alert(`오류가 발생했습니다: ${result.message}`);
      }
    } catch (error) {
      console.error("초대 코드 생성 중 오류:", error);
      alert("초대 코드 생성 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-row justify-center items-center px-5">
      <button
        className="w-full rounded-xl py-[18px] flex flex-row justify-center items-center bg-main-400"
      >
        <span className="text-xl tracking-tight leading-5 font-extrabold text-white">새로운 적금 개설하기</span>
      </button>
    </div>
  );
};

export default MkCodeButton;
