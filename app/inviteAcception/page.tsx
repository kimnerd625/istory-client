"use client";

import React, { useState } from "react";
import EnterInviteCode from "../sections/inviteAcception/EnterInviteCode";


export default function InvitePage() {
  return (
    <main className="w-full flex-1 flex flex-col justify-between items-center bg-custom-background overflow-x-hidden py-[56px]">
      
      <EnterInviteCode/>
    </main>
  );
}