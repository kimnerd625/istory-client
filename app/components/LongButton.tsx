import React from "react";

interface LongButtonProps {
  buttonText: string;
  buttonAction?: () => {};
  color?: string;
}

const LongButton = ({
  buttonText,
  buttonAction,
  color = "blue",
}: LongButtonProps) => {
  return (
    <div className="w-full flex flex-row justify-center items-center px-5">
      <button
        onClick={buttonAction}
        className={`w-full rounded-xl py-[18px] flex flex-row justify-center items-center ${
          color == "blue" ? "bg-main-400" : "bg-white border border-[#C8C8C8]"
        }`}
      >
        <span
          className={`text-xl tracking-tight leading-5 font-extrabold ${
            color == "blue" ? "text-white" : "text-[#1E1E1E]"
          }`}
        >
          {buttonText}
        </span>
      </button>
    </div>
  );
};

export default LongButton;
