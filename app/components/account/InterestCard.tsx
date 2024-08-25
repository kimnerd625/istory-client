import React, { useState } from "react";

const InterestCard = () => {
  // 토글 상태를 관리하는 useState 훅
  const [isOpen, setIsOpen] = useState(false);

  // 토글 버튼 클릭 시 상태를 변경하는 함수
  const toggleCard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="w-full px-5 py-4 flex flex-col justify-between rounded-[12px] border border-[#E2E2E2] bg-white shadow-[0_0_12px_0_rgba(0,0,0,0.10)] transition-all duration-300 ease-in-out">
      <div className="card-wrap flex flex-row justify-between">
        <div className="text-gray-500 text-4 font-semibold">
          추억 카드 완주 시, <br />
          최대 4.8% 받을 수 있어요.
        </div>
        <div className="toggle-icon flex items-center w-8 justify-end">
          <img
            src="/images/right-angle-gray.png"
            alt="오른쪽 회색 화살표"
            className={`toggle-button transform transition-transform duration-300 ease-in-out ${
              isOpen ? "rotate-90" : "rotate-0"
            }`}
            onClick={toggleCard}
          />
        </div>
      </div>

      {/* 카드가 열릴 때 보여줄 내용 */}
      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          isOpen ? "max-h-[1000px] py-4" : "max-h-0"
        }`}
      >
        <div className="account-name flex justify-end">
          <span className="w-30 border-2 border-main-600 rounded-3xl px-2 py-1 text-main-600 mt-2">
            신한 ISTORY 적금
          </span>
        </div>
        <div className="text-gray-500 font-light">
          <p>
            기본 금리: 1.8% <br />
            최대 우대 금리: 4.8%<br />
            이자 지급 방식: 만기일시지급식<br />
            월 납입액: 최대 300,000원<br />
          </p>
          <br />
          <p>
            10주 달성 시, + 0.6% 우대 금리<br />
            20주 달성 시, + 1.2% 우대 금리<br />
            30주 달성 시, + 1.8% 우대 금리<br />
            40주 달성 시, + 2.4% 우대 금리<br />
            50주 달성 시, + 3.0% 우대 금리<br />
          </p>
        </div>
      </div>
    </section>
  );
};

export default InterestCard;
