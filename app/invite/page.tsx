"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import MakeInviteCode from "../sections/invite/MakeInviteCode"
import WaitingInvite from "../sections/invite/WaitingInvite"
import MakeAccount from "../sections/invite/MakeAccount"


export default function InvitePage() {
  return (
    <main className="w-full flex-1 flex flex-col justify-start items-center bg-home-bg overflow-x-hidden py-[56px]">
      {/* <MakeAccount/> */}
      <WaitingInvite/>
      {/* <MakeInviteCode/> */}
    </main>
  );
}
