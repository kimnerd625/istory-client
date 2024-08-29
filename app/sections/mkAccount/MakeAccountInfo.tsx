import React, { useState } from "react";
import MkAccountForm from "@/app/sections/mkAccount/MkAccountForm";
import UserCard from "@/app/components/invite/UserCard";

interface MkAccountButtonInfoProps {}

const MkAccountButtonInfo = () => {
  // MkAccountForm에서 필요한 모든 상태와 setter 함수 정의
  const [accountNickname, setAccountNickname] = useState<string>("");
  const [depositBalance, setDepositBalance] = useState<string>("");
  const [withdrawalBankCode, setWithdrawalBankCode] = useState<string>("");
  const [withdrawalBankName, setWithdrawalBankName] = useState<string>("");
  const [withdrawalAccountNo, setWithdrawalAccountNo] = useState<string>("");

  return (
    <section className="w-full flex-1 flex flex-col justify-between items-center">
      <section className="w-full flex flex-col justify-center pr-5 pl-5">
        <h4 className="font-bold text-[26px] leading-8 tracking-tight">
          신한 ISTORY 적금을 <br />
          개설해주세요.
        </h4>
        <div className="h-[100px]"></div>
        <MkAccountForm
          accountNickname={accountNickname}
          setAccountNickname={setAccountNickname}
          depositBalance={depositBalance}
          setDepositBalance={setDepositBalance}
          withdrawalBankCode={withdrawalBankCode}
          setWithdrawalBankCode={setWithdrawalBankCode}
          withdrawalBankName={withdrawalBankName}
          setWithdrawalBankName={setWithdrawalBankName}
          withdrawalAccountNo={withdrawalAccountNo}
          setWithdrawalAccountNo={setWithdrawalAccountNo}
        />
      </section>
    </section>
  );
};

export default MkAccountButtonInfo;
