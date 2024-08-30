"use client";

import { toast } from "sonner";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { getAccessToken } from "@/app/utils/localAccessToken";

import Spinner from "@/app/components/Spinner";

import RightIcon from "@/public/icons/icon-chevron-right.svg";

interface MkAccountFromProps {
  accountNickname: string;
  setAccountNickname: React.Dispatch<React.SetStateAction<string>>;

  depositBalance: string;
  setDepositBalance: React.Dispatch<React.SetStateAction<string>>;

  paymentBalance: string;
  setPaymentBalance: React.Dispatch<React.SetStateAction<string>>;

  paymentDate: string;
  setPaymentDate: React.Dispatch<React.SetStateAction<string>>;

  withdrawalBankCode: string;
  setWithdrawalBankCode: React.Dispatch<React.SetStateAction<string>>;

  withdrawalBankName: string;
  setWithdrawalBankName: React.Dispatch<React.SetStateAction<string>>;

  withdrawalAccountNo: string;
  setWithdrawalAccountNo: React.Dispatch<React.SetStateAction<string>>;
}

const MkAccountFrom = ({
  accountNickname,
  setAccountNickname,
  paymentBalance,
  setPaymentBalance,
  paymentDate,
  setPaymentDate,
  withdrawalBankCode,
  setWithdrawalBankCode,
  withdrawalBankName,
  setWithdrawalBankName,
  withdrawalAccountNo,
  setWithdrawalAccountNo,
}: MkAccountFromProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [faList, setFaList] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedAccount, setSelectedAccount] = useState<string | null>(null);

  useEffect(() => {
    const getFrequentList = async () => {
      const accessToken = getAccessToken();

      try {
        const response = await fetch("/api/account/getFrequentAccount", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const responseData = await response.json();

        if (responseData) {
          setFaList(responseData.accountNoList);
        } else {
          throw new Error("수시 입출금 계좌 목록을 불러 오는데, 실패했습니다.");
        }
      } catch (error) {
        toast.error("수시 입출금 계좌 목록을 불러 오는데, 실패했습니다.");
      } finally {
        setLoading(false);
      }
    };

    getFrequentList();
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSelectAccount = (accountNo: string) => {
    setSelectedAccount(accountNo);
    setIsModalOpen(false);
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <section className="w-full flex-1 flex flex-col justify-between items-center">
      <div className="w-full flex flex-col justify-center items-start gap-y-4">
        <div className="w-full flex flex-row justify-between items-center gap-y-2">
          <label
            htmlFor="accountNickname"
            className="text-base font-medium text-[#1A2128] tracking-tight leading-5"
          >
            적금 계좌 이름
          </label>
          <input
            key="accountNicknameinput"
            type="text"
            id="accountNickname"
            value={accountNickname}
            onChange={(e) => setAccountNickname(e.target.value)}
            placeholder="예시: 울가족 사랑해"
            className="px-[14px] py-[13px] rounded-lg bg-[#E4E4E4] focus:outline-none focus:bg-main-300 w-[150px]"
          />
        </div>
        <div className="w-full flex flex-row justify-between items-center gap-y-2">
          <label
            htmlFor="depositBalance"
            className="text-base font-medium text-[#1A2128] tracking-tight leading-5"
          >
            매주 납입 금액
          </label>
          <div className="flex flex-row justify-between items-center gap-x-[7px]">
            <input
              key="depositBalanceinput"
              type="text"
              id="depositBalance"
              value={paymentBalance}
              onChange={(e) => setPaymentBalance(e.target.value)}
              placeholder="원"
              className="w-[150px] px-[14px] py-[13px] rounded-lg bg-[#E4E4E4] focus:outline-none focus:bg-main-300"
            />
          </div>
        </div>
        <div className="w-full flex flex-row justify-between items-center gap-y-2">
          <label
            htmlFor="depositBalance"
            className="text-base font-medium text-[#1A2128] tracking-tight leading-5"
          >
            적금 기간
          </label>
          <div className="flex flex-row justify-between items-center gap-x-[7px]">
            <div className="text-base w-[150px] px-[14px] py-[13px] rounded-lg ">
              52 주
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row justify-between items-center gap-y-2">
          <label
            htmlFor="paymentDate"
            className="text-base font-medium text-[#1A2128] tracking-tight leading-5"
          >
            적금 요일
          </label>
          <input
            key="depositBalanceinput"
            type="text"
            id="depositBalance"
            value={paymentDate}
            onChange={(e) => setPaymentDate(e.target.value)}
            placeholder="요일"
            className="w-[150px] px-[14px] py-[13px] rounded-lg bg-[#E4E4E4] focus:outline-none focus:border-none focus:bg-main-300"
          />
        </div>
        <div className="w-full flex flex-row justify-between items-center gap-y-2">
          <label
            htmlFor="depositBalance"
            className="text-base font-medium text-[#1A2128] tracking-tight leading-5"
          >
            최고 적용 금리
          </label>
          <div className="flex flex-row justify-between items-center gap-x-[7px]">
            <div className="text-base w-[150px] px-[14px] py-[13px] rounded-lg ">
              4.8 %
            </div>
          </div>
        </div>

        <div
          onClick={handleOpenModal}
          className="w-full flex flex-row justify-between items-center bg-[#E4E4E4] rounded-[12px]"
        >
          <div className="w-full flex flex-row justify-between items-center px-7 h-[80px]">
            <span>연결 계좌</span>
            <div className="flex items-center gap-1">
              <span>등록하기</span>
              <RightIcon width={16} height={16} />
            </div>
          </div>
        </div>
        <div className="h-[61px]"> </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-[300px]">
            <h2 className="text-xl font-bold mb-4">계좌 선택</h2>
            <ul>
              {faList.map((accountNo) => (
                <li key={accountNo} className="mb-2">
                  <button
                    onClick={() => handleSelectAccount(accountNo)}
                    className="text-blue-500 hover:underline"
                  >
                    {accountNo}
                  </button>
                </li>
              ))}
            </ul>
            <button
              onClick={handleCloseModal}
              className="mt-4 bg-[#FFAD3E] text-white rounded px-4 py-2"
            >
              닫기
            </button>
          </div>
        </div>
      )}

      <Link
        href="/"
        className="w-full flex flex-row justify-center items-center"
      >
        <button className="bg-main-400 rounded-xl w-full flex flex-col justify-center items-center font-extrabold text-white text-xl leading-5 tracking-tight py-[18px]">
          다&nbsp;&nbsp;&nbsp;음
        </button>
      </Link>
    </section>
  );
};

export default MkAccountFrom;
