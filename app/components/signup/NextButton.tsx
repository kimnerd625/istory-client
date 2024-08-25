import React from "react";

interface NextButtonProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const NextButton = ({ step, setStep }: NextButtonProps) => {
  const handleClickNextButton = () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    }
  };

  return (
    <button
      onClick={() => handleClickNextButton()}
      className="bg-main-400 rounded-xl min-w-[280px] flex flex-col justify-center items-center font-extrabold text-white text-xl leading-5 tracking-tight py-[18px]"
    >
      다&nbsp;&nbsp;&nbsp;음
    </button>
  );
};

export default NextButton;
