import React from "react";

interface BoxInfoProps {
  isDateVisible: boolean;
  isLabelVisible?: boolean;
  contents?: string;
}

const BoxInfo = ({
  isDateVisible,
  isLabelVisible = true,
  contents = "오늘은 식목일입니다./안녕하세요.",
}: BoxInfoProps) => {
  const insertBreaks = (text: string) => {
    return text.split("/ ").map((part, index) => (
      <React.Fragment key={index}>
        {index > 0 && <br />}
        {part}
      </React.Fragment>
    ));
  };

  return (
    <section className="w-full flex flex-col justify-start items-start gap-y-5">
      {isLabelVisible && (
        <div className="border-[1.6px] border-[#9FB8F8] px-4 py-2 rounded-lg flex flex-row justify-center items-center">
          <span className="font-extrabold text-sm tracking-tight leading-4 text-[#9FB8F8]">
            이번주 추억 카드
          </span>
        </div>
      )}
      <div className="w-full flex flex-col justify-start items-start gap-y-2">
        <p className="font-semibold tracking-tight leading-6 text-xl text-black whitespace-pre-line break-keep">
          {insertBreaks(contents)}
        </p>
        {isDateVisible && (
          <div className="w-full flex flex-row justify-start items-center gap-x-2">
            <span className="font-normal text-sm text-[#B3B3B3] tracking-tight leading-5">
              08.12 - 08.17
            </span>
            <div className="bg-[#B3B3B3] rounded-lg px-2 py-1 flex flex-row justify-center items-center">
              <span className="font-normal text-[10px] text-white tracking-tight leading-3">
                5주차
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BoxInfo;
