"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import MakeAccount from "../sections/mkAccount/MakeAccount";
import MakeAccountInfo from "../sections/mkAccount/MakeAccountInfo";

export default function InvitePage() {
  return (
    <main className="w-full flex-1 flex flex-col justify-between items-center bg-home-bg overflow-x-hidden py-[56px]">
      <MakeAccount />
      {/* <MakeAccountInfo/> */}
    </main>
  );
}
