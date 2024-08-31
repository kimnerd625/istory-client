import React from "react";

interface BoxInfoProps {
  isDateVisible: boolean;
  isLabelVisible?: boolean;
  contents?: string;
  weeklyNum?: number;
  startDate?: string;
  endDate?: string;
}

const BoxInfo = ({
  isDateVisible,
  isLabelVisible = true,
  contents = "오늘은 식목일입니다.모두 식물 하나 심어 볼까요?",
  weeklyNum = 1,
  startDate = "2024-08-31",
  endDate = "2024-09-06",
}: BoxInfoProps) => {
  const insertBreaks = (text: string) => {
    return text.split("/ ").map((part, index) => (
      <React.Fragment key={index}>
        {index > 0 && <br />}
        {part}
      </React.Fragment>
    ));
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Add leading zero if needed
    const day = String(date.getDate()).padStart(2, "0"); // Add leading zero if needed
    return `${month}.${day}`;
  };

  const formattedStartDate = startDate ? formatDate(startDate) : "";
  const formattedEndDate = endDate ? formatDate(endDate) : "";

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
              {formattedStartDate} - {formattedEndDate}
            </span>
            <div className="bg-[#B3B3B3] rounded-lg px-2 py-1 flex flex-row justify-center items-center">
              <span className="font-normal text-[10px] text-white tracking-tight leading-3">
                {weeklyNum}주차
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BoxInfo;
