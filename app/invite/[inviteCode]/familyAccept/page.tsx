"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // 경로를 가져오기 위해 사용
import FamilyInviteAcception from "../../../sections/inviteAcception/FamilyInviteAcception";

export default function FamilyAcceptPage() {
  return (
    <main className="w-full flex-1 flex flex-col justify-between items-center bg-custom-background overflow-x-hidden py-[56px]">
      <FamilyInviteAcception />
    </main>
  );
}
