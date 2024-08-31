"use client";

import { toast } from "sonner";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { getAccessToken } from "@/app/utils/localAccessToken";
import React, { useState, useEffect } from "react";

import Loading from "@/app/loading";
import UserCard from "@/app/components/invite/UserCard";
import MkCodeButton from "@/app/components/invite/MkCodeButton";

interface User {
  userId: string;
  userName: string;
  userPhone: string;
  userGender: string;
  userBirth: string;
  userType: string;
  userProfile: string | null;
}

const FamilyQueuePage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true); // 로딩 상태 추가
  const [invitedMembers, setInvitedMembers] = useState<User[]>([]); // 초대된 사용자 목록 상태 추가

  const pathname = usePathname();
  const [representName, setRepresentName] = useState<string>();
  const [inviteCode, setInviteCode] = useState("");

  useEffect(() => {
    const parts = pathname.split("/");
    const codeFromUrl = parts[2]; // '/invite/{inviteCode}/familyAccept'에서 {inviteCode} 부분 추출

    if (codeFromUrl) {
      setInviteCode(codeFromUrl);
    }
  }, [pathname]);

  const handleCopyToClipboard = async () => {
    try {
      // 현재 URL 가져오기
      const currentUrl = window.location.href;
      // 초대 코드가 붙은 URL 생성
      const urlWithInviteCode = `${currentUrl}/${inviteCode}`;

      await navigator.clipboard.writeText(urlWithInviteCode);
      toast.success("초대 코드가 복사되었습니다!");
    } catch (error) {
      toast.error("초대 코드를 복사하는데 실패했습니다.");
    }
  };

  useEffect(() => {
    const getUserStatus = async () => {
      const accessToken = getAccessToken();

      try {
        const response = await fetch("/api/user/getUserStatus", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (!response.ok) {
          throw new Error("회원 상태를 불러 오는데, 실패했습니다.");
        }
      } catch (error) {
        toast.error("회원 상태를 불러 오는데, 실패했습니다.");
      }
    };

    const getFamilyInvitedMember = async () => {
      const accessToken = getAccessToken();
      console.log(accessToken);

      setLoading(true); // 로딩 상태 시작
      try {
        if (inviteCode) {
          const response = await fetch(`/api/family/getInvitedMember`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify({ inviteCode: inviteCode }),
          });

          const responseData = await response.json();

          if (responseData.result) {
            setInvitedMembers(responseData["user  List"] || []);
            console.log(responseData);
          } else {
            throw new Error("초대받은 회원 정보를 불러 오는데 실패했습니다.");
          }
        }
      } catch (error) {
        toast.error("초대받은 회원 정보를 불러 오는데 실패했습니다.");
      } finally {
        setLoading(false);
      }
    };

    getUserStatus();
    getFamilyInvitedMember(); // 추가된 API 호출
  }, [inviteCode]); // inviteCode가 변경될 때마다 실행

  if (loading) {
    return <Loading />;
  }

  const groupedMembers = invitedMembers.reduce<User[][]>((acc, curr, index) => {
    if (index % 2 === 0) {
      acc.push([curr]);
    } else {
      acc[acc.length - 1].push(curr);
    }
    return acc;
  }, []);

  return (
    <main className="w-full flex-1 flex flex-col justify-between items-center bg-custom-background overflow-x-hidden py-[56px]">
      <section className="w-full flex-1 flex flex-col justify-between items-center">
        <section className="w-full flex flex-col justify-center pr-5 pl-5">
          <h4 className="font-bold text-[26px] leading-8 tracking-tight">
            가족 초대가 완료될 때까지 <br />
            대기해주세요.
          </h4>
          <div className="h-[100px]" />

          <div className="w-full flex flex-col justify-center items-center">
            {groupedMembers.map((group, groupIndex) => (
              <div
                key={groupIndex}
                className="flex flex-row flex-wrap justify-center gap-5 w-[220px] mb-4"
              >
                {group.map((member) => (
                  <UserCard
                    key={member.userId}
                    userId={member.userId}
                    name={member.userName}
                    inviteCode={inviteCode}
                    isNotRepresentative={true}
                  />
                ))}
              </div>
            ))}
          </div>
        </section>
        <section className="flex flex-col w-full gap-3">
          <div className="w-full flex flex-row justify-center items-center">
            <MkCodeButton userId="" handleButton={handleCopyToClipboard} />
          </div>
        </section>
      </section>
    </main>
  );
};

export default FamilyQueuePage;
