"use client";

import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import LongButton from "@/app/components/LongButton";
import { toast } from "sonner";
import { getAccessToken } from "@/app/utils/localAccessToken";

export default function InviteDetailPage() {
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState<boolean>(false);

  // URL에서 초대 코드 추출
  const inviteCodeUrl = pathname.split("/").pop();

  // 초대 코드를 상태로 관리
  const [inviteCode, setInviteCode] = useState<string>(inviteCodeUrl || "");

  // URL의 초대 코드가 바뀔 때마다 상태를 업데이트
  useEffect(() => {
    if (inviteCodeUrl) {
      setInviteCode(inviteCodeUrl);
    }
  }, [inviteCodeUrl]);

  // 초대 코드 입력 필드 변경 핸들러
  const handleInviteCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInviteCode(e.target.value);
  };

  const handleSubmitButton = async () => {
    setLoading(true);

    const accessToken = getAccessToken();

    try {
      const response = await fetch("/api/family/joinFamily", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        credentials: "include",
        body: JSON.stringify({
          inviteCode,
        }),
      });

      if (!response.ok) {
        throw new Error("초대 수락에 실패했습니다.");
      }
      toast.success("가족 모임을 수락하셨습니다!");
      // setTimeout(() => {
      //   router.push("#");
      // }, 1500);
    } catch (error) {
      toast.error("초대 수락에 실패했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="w-full flex-1 flex flex-col justify-between items-center bg-home-bg overflow-x-hidden py-[56px]">
      <section className="w-full flex flex-col justify-start items-center px-5">
        <h4 className="text-[26px] font-bold text-black tracking-tight leading-8">
          가족 초대 코드를 <br />
          입력해주세요.
        </h4>
        <div className="mt-[85px] w-full flex flex-col justify-center items-start">
          <label
            htmlFor="inviteCode"
            className="text-sm font-semibold tracking-tight leading-6"
          >
            초대 코드
          </label>
          <input
            key="inviteCodeInput"
            id="inviteCode"
            type="text"
            value={inviteCode}
            onChange={handleInviteCodeChange}
            className="px-[14px] py-[13px] rounded-lg bg-[#E4E4E4] w-full"
          />
        </div>
      </section>
      <LongButton
        buttonText="초대 코드 입력하기"
        buttonAction={handleSubmitButton}
      />
    </main>
  );
}
