import React, { useState, useEffect, SetStateAction } from "react";
import { toast } from "sonner";

import MkCodeButton from "@/app/components/invite/MkCodeButton";
import UserCard from "@/app/components/invite/UserCard";
import { useRouter } from "next/navigation";
import { getAccessToken } from "@/app/utils/localAccessToken";

interface WaitingInviteProps {
  step: number;
  setStep: React.Dispatch<SetStateAction<number>>;
  inviteCode: string;
  setInviteCode: React.Dispatch<SetStateAction<string>>;
}

const WaitingInvite = ({
  step,
  setStep,
  inviteCode,
  setInviteCode,
}: WaitingInviteProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const handlePrevButton = () => {
    setStep(1);
  };

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(inviteCode);
      toast.success("초대 코드가 복사되었습니다!");
    } catch (error) {
      toast.error("초대 코드를 복사하는데 실패했습니다.");
    }
  };

  useEffect(() => {
    const getUserStatus = async () => {
      const accessToken = getAccessToken();
      console.log(accessToken);

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

      try {
        // 초대 코드를 URL 파라미터로 추가
        const response = await fetch(`/api/family/getInvitedMember`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({ inviteCode: inviteCode }),
        });

        if (!response.ok) {
          throw new Error("초대받은 회원 정보를 불러 오는데 실패했습니다.");
        }
      } catch (error) {
        toast.error("초대받은 회원 정보를 불러 오는데 실패했습니다.");
      }
    };

    getUserStatus();
    getFamilyInvitedMember(); // 추가된 API 호출
  }, [inviteCode]); // inviteCode가 변경될 때마다 실행

  return (
    <section className="w-full flex-1 flex flex-col justify-between items-center">
      <section className="w-full flex flex-col justify-center pr-5 pl-5">
        <h4 className="font-bold text-[26px] leading-8 tracking-tight">
          가족 초대가 완료될 때까지 <br />
          대기해주세요.
        </h4>
        <div className="h-[100px]" />

        <div className="w-full flex flex-col justify-center items-center">
          <div className="flex flex-row flex-wrap justify-center gap-5 w-[220px]">
            <UserCard name="박민지" />
            <UserCard name="박민지" />
            <UserCard name="박민지" />
            <UserCard name="박민지" />
            <div className="flex space-x-2 mb-8">
              <span className="dot block w-2 h-2 rounded-full animate-dot-bounce"></span>
              <span className="dot block w-2 h-2 rounded-full animate-dot-bounce delay-700"></span>
              <span className="dot block w-2 h-2 rounded-full animate-dot-bounce delay-1000"></span>
            </div>
          </div>
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

          <div className="w-full flex flex-row justify-center items-center">
            <button
              type="button"
              className="flex flex-row justify-between items-center p-[10px]"
            >
              <span className="text-xl font-semibold text-gray-400">다음</span>
              <div className="w-5"></div>
              <img src="/images/right-angle-gray.png" alt="" />
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default WaitingInvite;
