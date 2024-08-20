import React from "react";
import Image from "next/image";

const ArchiveDetailContent = () => {
  return (
    <div className="w-full flex flex-col justify-start items-start gap-y-6">
      <div className="relative w-[320px] h-[240px] rounded-xl shadow-lg">
        <Image
          src="/images/user-default.png"
          alt="카드 이미지"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <p className="text-sm font-normal text-[#5A5A5A] leading-5 tracking-tight">
        오늘은 식목일이어서 엄마, 아빠랑 공원에 갔어요. 나무들이 정말 많고
        예뻤어요! 엄마가 만들어준 김밥도 맛있고, 돗자리 깔고 놀아서 너무
        재밌었어요. 엄마, 아빠랑 같이 있어서 너무 행복했어요. 다음에도 또 가고
        싶어요!
      </p>
    </div>
  );
};

export default ArchiveDetailContent;
