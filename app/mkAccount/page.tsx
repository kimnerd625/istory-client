"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation"; // 쿼리 파라미터를 가져오기 위한 훅
import { toast } from "sonner";

import MakeAccount from "../sections/mkAccount/MakeAccount";
import MakeAccountInfo from "../sections/mkAccount/MakeAccountInfo";

export default function InvitePage() {
  const [step, setStep] = useState<number>(1);
  const searchParams = useSearchParams(); // 쿼리 파라미터를 가져옴
  const inviteCode = searchParams.get("inviteCode") || ""; // 쿼리에서 inviteCode를 가져옴

  return (
    <main className="w-full flex-1 flex flex-col justify-between items-center bg-custom-background overflow-x-hidden py-[56px]">
      {step === 1 && <MakeAccount step={step} setStep={setStep} />}
      {step === 2 && (
        <MakeAccountInfo
          step={step}
          setStep={setStep}
          inviteCode={inviteCode} // inviteCode를 MakeAccountInfo에 전달
        />
      )}
    </main>
  );
}
