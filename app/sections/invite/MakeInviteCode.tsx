import React, { SetStateAction } from "react";
import Image from "next/image";
import { toast } from "sonner";

import MkCodeButton from "@/app/components/invite/MkCodeButton";
import Spinner from "@/app/components/Spinner";
import { getAccessToken } from "@/app/utils/localAccessToken";

interface MakeInviteCodeProps {
  step: number;
  setStep: React.Dispatch<SetStateAction<number>>;
  loading: boolean;
  setLoading: React.Dispatch<SetStateAction<boolean>>;
  inviteCode: string;
  setInviteCode: React.Dispatch<SetStateAction<string>>;
}

const MakeInviteCode = ({
  step,
  setStep,
  loading,
  setLoading,
  inviteCode,
  setInviteCode,
}: MakeInviteCodeProps) => {
  const accessToken = getAccessToken();

  const handleButton = async () => {
    setLoading(true);

    try {
      const response = await fetch("/api/user/createInviteCode", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("초대코드 발급에 실패했습니다.");
      }

      const responseData = await response.json();

      // 초대 코드가 성공적으로 발급된 경우, inviteCode 상태 업데이트
      if (responseData.result && responseData.inviteCode) {
        setInviteCode(responseData.inviteCode);
        toast.success("성공적으로 초대코드를 발급했어요!");
        setTimeout(() => {
          setStep(2);
        }, 1500);
      } else {
        throw new Error("초대코드 발급에 실패했습니다.");
      }
    } catch (error) {
      toast.error("초대코드 발급에 실패했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="w-full flex-1 flex flex-col justify-between items-center">
      {loading && <Spinner />}
      <section className="w-full flex flex-col justify-center items-center">
        <h4 className="text-[26px] font-bold text-black tracking-tight leading-5">
          가족들을 초대해보세요!
        </h4>
        <div className="mb-[90px]"></div>
        <div className="relative mt-8 w-[300px] h-[210px]">
          <Image
            src="/images/invite-three-character.png"
            alt="초대 코드 캐릭터 이미지"
            fill
          />
        </div>
        <div className="mt-10 px-8 flex flex-col justify-center items-center">
          <p className="text-center text-sm font-normal text-[#757575] tracking-tight leading-5">
            ISTORY를 함께할
            <br />
            나의 가족들을 초대하기 위해
            <br />
            아래 초대 코드 발급하기를 눌러주세요
            <br />
          </p>
        </div>
      </section>
      <div className="w-full flex flex-row justify-center items-center">
        <MkCodeButton handleButton={handleButton} />
      </div>
    </main>
  );
};

export default MakeInviteCode;
