import React from "react";

interface LongButtonProps {
  buttonText: string;
  buttonAction?: () => {};
}

const LongButton = ({ buttonText, buttonAction }: LongButtonProps) => {
  return (
    <div className="w-full flex flex-row justify-center items-center px-10">
      <button
        onClick={buttonAction}
        className="w-full rounded-2xl py-[18px] flex flex-row justify-center items-center bg-main-400"
      >
        <span className="text-xl tracking-tight leading-5 font-extrabold text-white">
          {buttonText}
        </span>
      </button>
    </div>
  );
};

export default LongButton;
