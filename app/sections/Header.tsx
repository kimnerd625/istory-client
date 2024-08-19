import React from "react";

import UserIcon from "@/public/icons/icon-user.svg";
import CheckIcon from "@/public/icons/icon-check.svg";
import CancelIcon from "@/public/icons/icon-cancel.svg";

interface HeaderProps {
  isCheck: boolean;
  isCancel: boolean;
  isUser: boolean;
}

const Header = ({ isCheck, isCancel, isUser }: HeaderProps) => {
  return (
    <header className="px-5 py-3 w-full flex flex-row justify-between items-center">
      {isCheck ? (
        <CheckIcon width={20} height={20} />
      ) : (
        <div className="w-5 h-5" />
      )}
      <div className="w-full flex flex-1 justify-center items-center flex-row">
        <h4 className="text-[#D0D0D0] font-semibold text-[15px] tracking-tight leading-4">
          ISTORY
        </h4>
      </div>
      {isCancel ? (
        <CancelIcon width={20} height={20} />
      ) : isUser ? (
        <UserIcon width={20} height={20} />
      ) : (
        <div className="w-5 h-5" />
      )}
    </header>
  );
};

export default Header;
