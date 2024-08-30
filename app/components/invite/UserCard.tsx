"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import Image from "next/image";

import { getAccessToken } from "@/app/utils/localAccessToken";

import DeleteIcon from "@/public/icons/icon-delete.svg";

interface UserCardProps {
  userId: string;
  name: string;
  inviteCode: string;
}

const UserCard = ({ name, userId, inviteCode }: UserCardProps) => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleDeleteButton = async () => {
    const accessToken = getAccessToken();
    setLoading(true);

    try {
      const response = await fetch("/api/family/deleteInvitedMember", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        credentials: "include",
        body: JSON.stringify({
          inviteCode: inviteCode,
          userId: userId,
        }),
      });

      if (!response.ok) {
        throw new Error("초대 인원 삭제에 실패했습니다.");
      }

      const responseData = await response.json();

      // 초대 코드가 성공적으로 발급된 경우, inviteCode 상태 업데이트
      if (responseData.success) {
        toast.success("성공적으로 해당 인원을 삭제했어요!");
      } else {
        throw new Error("멤버 삭제에 실패했습니다.");
      }
    } catch (error) {
      toast.error("멤버 삭제에 실패했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="user-profile w-[80px] h-[104px] flex flex-col justify-center items-center py-2 px-2.5 bg-white rounded-xl border relative">
      <div className="relative">
        {/* 유저 프로필 사진 */}
        <div className="w-[60px] h-[60px] overflow-hidden rounded-full border">
          <Image
            src="/images/user-default2.png"
            alt="사용자 프로필 이미지"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      <div className="text-[#1A2128] font-medium text-sm tracking-tight text-[14px] mt-2">
        {name}
      </div>

      <div
        onClick={handleDeleteButton}
        className="absolute top-[-9px] right-[-9px] flex justify-center items-center"
      >
        <DeleteIcon width={32} height={32} />
      </div>
    </div>
  );
};

export default UserCard;
