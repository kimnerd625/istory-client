"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface MkCodeButtonProps {
  userId: string;
}

const MkCodeButton = ({ userId }: MkCodeButtonProps) => {
  const [loading, setLoading] = useState(false); // API 호출 중 로딩 상태를 관리합니다.
  const router = useRouter(); // Next.js의 useRouter 훅을 사용하여 페이지 이동을 처리합니다.

  return (
    <div className="w-full flex flex-row justify-center items-center px-5">
      <button className="w-full rounded-xl py-[18px] flex flex-row justify-center items-center bg-main-400">
        <span className="text-xl tracking-tight leading-5 font-extrabold text-white">
          새로운 적금 개설하기
        </span>
      </button>
    </div>
  );
};

export default MkCodeButton;
