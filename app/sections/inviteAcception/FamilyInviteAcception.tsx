"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { toast } from "sonner";
import { getAccessToken } from "@/app/utils/localAccessToken";
import { usePathname } from "next/navigation";
import Spinner from "@/app/components/Spinner";

const FamilyInviteAcception = () => {
  const pathname = usePathname(); // 현재 경로를 가져옴
  const [loading, setLoading] = useState<boolean>(false);
  const [representName, setRepresentName] = useState<string>();
  const [inviteCode, setInviteCode] = useState("");

  useEffect(() => {
    const parts = pathname.split("/");
    const codeFromUrl = parts[2]; // '/invite/{inviteCode}/familyAccept'에서 {inviteCode} 부분 추출

    if (codeFromUrl) {
      setInviteCode(codeFromUrl);
    }
  }, [pathname]);

  useEffect(() => {
    const getRepresentName = async () => {
      if (!inviteCode) return; // 초대 코드가 없으면 실행하지 않음
      const accessToken = getAccessToken();
      console.log("Access Token:", accessToken);

      setLoading(true);
      try {
        const response = await fetch(`/api/family/getRepresentName`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({ inviteCode }), // 추출된 inviteCode 사용
        });

        if (!response.ok) {
          throw new Error("대표자 정보를 불러 오는데 실패했습니다.");
        }

        const responseData = await response.json();

        if (responseData.representaiveName) {
          setRepresentName(responseData.representaiveName);
          console.log(responseData);
        } else {
          throw new Error("대표자 정보를 불러 오는데 실패했습니다.");
        }
      } catch (error) {
        toast.error("대표자 정보를 불러 오는데 실패했습니다.");
      } finally {
        setLoading(false);
      }
    };

    getRepresentName();
  }, [inviteCode]);

  return (
    <main className="w-full flex-1 flex flex-col justify-between items-center pr-5 pl-5">
      <section className="w-full flex flex-col justify-center items-center">
        <div className="h1 flex flex-col justify-center items-center font-bold text-[26px] leading-8 tracking-tight">
          <span className="text-black block text-center">가족 초대 수락을</span>
          <span className="text-black block text-center">하시겠습니까?</span>
        </div>

        <div className="w-full h-[124px]"></div>
        <div className="relative flex flex-col w-full">
          <div className="absolute family-profile w-20 h-20 rounded-[40px] left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2">
            <Image
              src="/images/character-default.png"
              alt="관리자 프로필"
              className="rounded-[40px]"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          <section className="w-full h-[218px] rounded-[20px] border border-[0.5px] border-[#D9D9D9] bg-white shadow-[0_0_12px_0_rgba(0,0,0,0.10)] flex flex-col justify-center items-center gap-6">
            {loading && <Spinner />}
            <span className="text-[26px] font-bold">{representName}</span>
            <span className="text-lg text-main-500">부모</span>
          </section>
        </div>

        <div className="mt-6 px-8 flex flex-col justify-center items-center">
          <p className="text-center text-sm font-normal text-[#757575] tracking-tight leading-5">
            가족 정보를 확인하고
            <br />
            내 가족이 맞다면 네 맞아요!를
            <br />
            내 가족이 아니라면 아니에요!를
            <br />
            클릭해주세요.
          </p>
        </div>
      </section>
      <div className="w-full flex flex-row justify-between items-center gap-5">
        <Link href={`/invite/${inviteCode}/familyQueue`} className="w-full">
          <button className="bg-main-400 rounded-xl w-full flex flex-col justify-center items-center font-extrabold text-white text-xl leading-5 tracking-tight py-[18px]">
            네 맞아요!
          </button>
        </Link>
        <Link href={`/invite/${inviteCode}`} className="w-full">
          <button className="bg-[#908EFC] rounded-xl w-full flex flex-col justify-center items-center font-extrabold text-white text-xl leading-5 tracking-tight py-[18px]">
            아니에요!
          </button>
        </Link>
      </div>
    </main>
  );
};

export default FamilyInviteAcception;
