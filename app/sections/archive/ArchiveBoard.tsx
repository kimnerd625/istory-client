import React, {useEffect, useState} from "react";
import ArchiveCard from "@/app/components/archive/ArchiveCard";
import { toast } from "sonner";
import { getAccessToken } from "../../utils/localAccessToken";

const ArchiveBoard = () => {

  const [accountData, setAccountData] = useState<any>();
  const [roundNum, setRoundNum] = useState<number>(0); // 총 회차 수
  const [selectedRound, setSelectedRound] = useState<number>(1); // 선택된 회차 번호
  const [roundDate, setRoundDate] = useState<any>(); // 선택된 회차의 날짜 정보
  const [roundMissions, setRoundMissions] = useState<any[]>([]); // 선택된 회차의 미션들

  useEffect(()=>{
    // 데이터를 가져오는 fetchAccountData라는 비동기 함수(async function)를 정의합니다.
    const fetchArchiveData = async() => {
      const accessToken = getAccessToken();
      console.log(accessToken);

      try {
        const response = await fetch("https://istroyapi.ssafy.io/api/v1/mission/roundMissions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({ roundNum: 1 }),
        });
  
        if (!response.ok) {
          throw new Error("데이터 조회 실패");
        }

        const data = await response.json(); // 응답 데이터를 JSON으로 파싱
        // 디버깅 용도  
        console.log(data); // 디버깅 용도

        // roundNum을 상태로 설정
        setRoundNum(data.roundNum);
        // 최초 로드시 첫 번째 회차의 데이터를 설정
        setRoundDate(data.roundDate);
        setRoundMissions(data.roundMissions);

      } catch (error) {
        toast.error("데이터 조회 실패");
      }
    };

    // 위에서 정의한 fetchArchiveData 함수를 호출하여 데이터를 가져옵니다.
    fetchArchiveData();

  }, [])

  return (
    <div>
      <select value={selectedRound} onChange={(e) => setSelectedRound(Number(e.target.value))}>
        <option value="" disabled>
          회차 선택
        </option>
        {Array.from({ length: roundNum }, (_, index) => index + 1).map((num) => (
          <option key={num} value={num}>
            {num} 회차
          </option>
        ))}
      </select>

      <section className="w-full flex flex-col justify-center items-center gap-y-1">
        <div className="w-full flex flex-row justify-center items-center gap-x-1">
          <ArchiveCard missionNo={1} />
          <ArchiveCard missionNo={2} />
          <ArchiveCard missionNo={3} />
          <ArchiveCard missionNo={4} />
          <ArchiveCard missionNo={5} />
          <ArchiveCard missionNo={6} />
        </div>
        <div className="w-full flex flex-row justify-center items-center gap-x-1">
          <ArchiveCard missionNo={7} />
          <ArchiveCard missionNo={8} />
          <ArchiveCard missionNo={9} />
          <ArchiveCard missionNo={10} />
          <ArchiveCard missionNo={11} />
          <ArchiveCard missionNo={12} />
        </div>
        <div className="w-full flex flex-row justify-center items-center gap-x-1">
          <ArchiveCard missionNo={13} />
          <ArchiveCard missionNo={14} />
          <ArchiveCard missionNo={15} />
          <ArchiveCard missionNo={16} />
          <ArchiveCard missionNo={17} />
          <ArchiveCard missionNo={18} />
        </div>
        <div className="w-full flex flex-row justify-center items-center gap-x-1">
          <ArchiveCard missionNo={19} />
          <ArchiveCard missionNo={20} />
          <ArchiveCard missionNo={21} />
          <ArchiveCard missionNo={22} />
          <ArchiveCard missionNo={23} />
          <ArchiveCard missionNo={24} />
        </div>
        <div className="w-full flex flex-row justify-center items-center gap-x-1">
          <ArchiveCard missionNo={25} />
          <ArchiveCard missionNo={26} />
          <ArchiveCard missionNo={27} />
          <ArchiveCard missionNo={28} />
          <ArchiveCard missionNo={29} />
          <ArchiveCard missionNo={30} />
        </div>
        <div className="w-full flex flex-row justify-center items-center gap-x-1">
          <ArchiveCard missionNo={31} />
          <ArchiveCard missionNo={32} />
          <ArchiveCard missionNo={33} />
          <ArchiveCard missionNo={34} />
          <ArchiveCard missionNo={35} />
          <ArchiveCard missionNo={36} />
        </div>
        <div className="w-full flex flex-row justify-center items-center gap-x-1">
          <ArchiveCard missionNo={37} />
          <ArchiveCard missionNo={38} />
          <ArchiveCard missionNo={39} />
          <ArchiveCard missionNo={40} />
          <ArchiveCard missionNo={41} />
          <ArchiveCard missionNo={42} />
        </div>
        <div className="w-full flex flex-row justify-center items-center gap-x-1">
          <ArchiveCard missionNo={43} />
          <ArchiveCard missionNo={44} />
          <ArchiveCard missionNo={45} />
          <ArchiveCard missionNo={46} />
          <ArchiveCard missionNo={47} />
          <ArchiveCard missionNo={48} />
        </div>
        <div className="w-full flex flex-row justify-center items-center gap-x-1">
          <ArchiveCard missionNo={49} />
          <ArchiveCard missionNo={50} />
          <ArchiveCard missionNo={51} />
          <ArchiveCard missionNo={52} />
          <div className="min-h-[50px] min-w-[50px] flex-1 aspect-square flex flex-row justify-start items-start" />
          <div className="min-h-[50px] min-w-[50px] flex-1 aspect-square flex flex-row justify-start items-start" />
        </div>
      </section>
    </div>
  );
};

export default ArchiveBoard;
