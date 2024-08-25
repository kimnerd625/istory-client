import React from "react";

interface SignUpHeaderProps {
  firstLine: string;
  secondLine: string;
  step: number;
}

const SignUpHeader = ({ firstLine, secondLine, step }: SignUpHeaderProps) => {
  return (
    <div className="w-full flex-col justify-start items-start">
      <h3 className="text-[#1A2128] font-bold text-[26px] leading-8 tracking-tight">
        {firstLine}
      </h3>
      <h3 className="text-[#1A2128] font-bold text-[26px] leading-8 tracking-tight">
        {secondLine}
      </h3>
      <div className="w-full min-h-4" />
      <div className="flex flex-row justify-start items-center gap-x-2">
        <div
          className={`min-w-[24px] min-h-[24px] flex flex-row justify-center items-center rounded-full ${
            step === 1 ? "bg-black" : "bg-[#E4E4E4]"
          }`}
        >
          <span
            className={`text-xs font-normal tracking-tight leading-3 ${
              step === 1 ? "text-white" : "text-black"
            }`}
          >
            1
          </span>
        </div>
        <div
          className={`min-w-[24px] min-h-[24px] flex flex-row justify-center items-center rounded-full ${
            step === 2 ? "bg-black" : "bg-[#E4E4E4]"
          }`}
        >
          <span
            className={`text-xs font-normal tracking-tight leading-3 ${
              step === 2 ? "text-white" : "text-black"
            }`}
          >
            2
          </span>
        </div>
        <div
          className={`min-w-[24px] min-h-[24px] flex flex-row justify-center items-center rounded-full ${
            step === 3 ? "bg-black" : "bg-[#E4E4E4]"
          }`}
        >
          <span
            className={`text-xs font-normal tracking-tight leading-3 ${
              step === 3 ? "text-white" : "text-black"
            }`}
          >
            3
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUpHeader;
