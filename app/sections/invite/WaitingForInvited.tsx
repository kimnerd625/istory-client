import { toast } from "sonner";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getAccessToken } from "@/app/utils/localAccessToken";
import React, { useState, useEffect, SetStateAction } from "react";

import Loading from "@/app/loading";
import UserCard from "@/app/components/invite/UserCard";
import MkCodeButton from "@/app/components/invite/MkCodeButton";

interface WaitingInviteProps {
  step: number;
  setStep: React.Dispatch<SetStateAction<number>>;
  inviteCode: string;
  setInviteCode: React.Dispatch<SetStateAction<string>>;
}

interface User {
  userId: string;
  userName: string;
  userPhone: string;
  userGender: string;
  userBirth: string;
  userType: string;
  userProfile: string | null;
}

const WaitingInvite = ({
  step,
  setStep,
  inviteCode,
  setInviteCode,
}: WaitingInviteProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true); // 로딩 상태 추가
  const [invitedMembers, setInvitedMembers] = useState<User[]>([]); // 초대된 사용자 목록 상태 추가

  const handlePrevButton = () => {
    setStep(1);
  };

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

  // 사용자 카드 2개씩 그룹화
  const groupedMembers = invitedMembers.reduce<User[][]>((acc, curr, index) => {
    if (index % 2 === 0) {
      // 두 개씩 묶기 위한 새로운 배열 시작
      acc.push([curr]);
    } else {
      // 마지막 그룹에 추가
      acc[acc.length - 1].push(curr);
    }
    return acc;
  }, []);

  return (
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
              className="flex flex-row flex-wrap justify-center gap-5 w-[220px]"
            >
              {group.map((member) => (
                <UserCard
                  key={member.userId}
                  userId={member.userId}
                  name={member.userName}
                  inviteCode={inviteCode}
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

        <div className="flex flex-row">
          <div className="w-full flex flex-row justify-center items-center">
            <button
              onClick={handlePrevButton}
              type="button"
              className="flex flex-row justify-between items-center p-[10px]"
            >
              <img src="/images/left-angle-gray.png" alt="" />
              <div className="w-5"></div>
              <span className="text-xl font-semibold text-gray-400">이전</span>
            </button>
          </div>

          <Link
            href="/mkAccount"
            className="w-full flex flex-row justify-center items-center"
          >
            <button
              type="button"
              className="flex flex-row justify-between items-center p-[10px]"
            >
              <span className="text-xl font-semibold text-gray-400">다음</span>
              <div className="w-5"></div>
              <img src="/images/right-angle-gray.png" alt="" />
            </button>
          </Link>
        </div>
      </section>
    </section>
  );
};

export default WaitingInvite;
