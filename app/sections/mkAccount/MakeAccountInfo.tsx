import React, { SetStateAction, useState } from "react";
import MkAccountForm from "@/app/sections/mkAccount/MkAccountForm";
import UserCard from "@/app/components/invite/UserCard";

interface MkAccountButtonInfoProps {
  step: number;
  setStep: React.Dispatch<SetStateAction<number>>;
  inviteCode: string;
}

const MkAccountButtonInfo = ({
  step,
  setStep,
  inviteCode,
}: MkAccountButtonInfoProps) => {
  const [accountNickname, setAccountNickname] = useState<string>("");
  const [depositBalance, setDepositBalance] = useState<string>("");
  const [withdrawalBankCode, setWithdrawalBankCode] = useState<string>("");
  const [withdrawalBankName, setWithdrawalBankName] = useState<string>("");
  const [withdrawalAccountNo, setWithdrawalAccountNo] = useState<string>("");
  const [paymentBalance, setPaymentBalance] = useState<string>("");
  const [paymentDate, setPaymentDate] = useState<string>("");

  return (
    <section className="w-full flex-1 flex flex-col justify-between items-center">
      <section className="w-full flex flex-col justify-center pr-5 pl-5">
        <h4 className="font-bold text-[26px] leading-8 tracking-tight">
          신한 ISTORY 적금을 <br />
          개설해주세요.
        </h4>
        <div className="h-[48px]"></div>
        <MkAccountForm
          accountNickname={accountNickname}
          setAccountNickname={setAccountNickname}
          depositBalance={depositBalance}
          setDepositBalance={setDepositBalance}
          paymentBalance={paymentBalance}
          setPaymentBalance={setPaymentBalance}
          paymentDate={paymentDate}
          setPaymentDate={setPaymentDate}
          withdrawalBankCode={withdrawalBankCode}
          setWithdrawalBankCode={setWithdrawalBankCode}
          withdrawalBankName={withdrawalBankName}
          setWithdrawalBankName={setWithdrawalBankName}
          withdrawalAccountNo={withdrawalAccountNo}
          setWithdrawalAccountNo={setWithdrawalAccountNo}
          inviteCode={inviteCode}
        />
      </section>
    </section>
  );
};

export default MkAccountButtonInfo;
