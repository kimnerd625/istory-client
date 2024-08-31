import React, { SetStateAction, useState, useEffect } from "react";
import Image from "next/image";
import { toast } from "sonner";
import { getAccessToken } from "@/app/utils/localAccessToken";
import useWeekInfoStore from "@/app/store/weekInfo";

interface MissionInputProps {
  thoughts: string;
  userName: string;
  userImageUrl: string;
  setIsTextInputFocused: React.Dispatch<SetStateAction<boolean>>;
}

const MissionInput = ({
  thoughts,
  userName,
  userImageUrl,
  setIsTextInputFocused,
}: MissionInputProps) => {
  const { weekInfo } = useWeekInfoStore();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [reflection, setReflection] = useState<string>("");

  // 초기 thoughts 값 설정
  useEffect(() => {
    setReflection(thoughts || "");
  }, [thoughts]);

  const handleSubmit = async () => {
    const accessToken = getAccessToken();
    setIsLoading(true);

    try {
      const response = await fetch("/api/mission/createMissionReport", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        credentials: "include",
        body: JSON.stringify({
          familymissionNo: weekInfo?.familymissionNo,
          thoughts: reflection,
        }),
      });

      if (!response.ok) {
        throw new Error("미션 등록에 실패했습니다.");
      }

      toast.success("성공적으로 미션을 등록했습니다!");
    } catch (error) {
      toast.error("미션 등록에 실패했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full min-h-[200px] flex flex-col justify-start items-start gap-y-2.5 py-1 px-1.5">
      <div className="w-full flex flex-row justify-start items-center gap-x-3">
        <div className="relative min-w-10 min-h-10 rounded-full border border-[#B3B3B3] overflow-hidden">
          <Image src={userImageUrl} alt="사용자 프로필 이미지" fill />
        </div>
        <h5 className="text-[#1A2128] font-semibold text-xl tracking-tight">
          {userName}
        </h5>
      </div>
      <div className="w-full">
        <textarea
          onFocus={() => setIsTextInputFocused(true)}
          onBlur={() => {
            setIsTextInputFocused(false);
            handleSubmit(); // 사용자가 textarea를 벗어날 때 POST 요청을 보냄
          }}
          value={reflection}
          onChange={(e) => setReflection(e.target.value)} // textarea 값 업데이트
          className="text-[#1A2128] tracking-tight leading-6 font-normal text-sm resize-none w-full bg-transparent h-[150px] placeholder:text-[#B3B3B3] focus:ring-0 focus:outline-none"
          placeholder="이곳을 눌러 답변을 입력해주세요."
        />
      </div>
    </div>
  );
};

export default MissionInput;
