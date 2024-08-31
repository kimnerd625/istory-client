import Image from "next/image";
import React from "react";

interface ArchiveUserInfoProps {
  userName: string;
  userImageUrl: string;
  date: string; // Add date prop
}

const ArchiveUserInfo = ({
  userImageUrl,
  userName,
  date,
}: ArchiveUserInfoProps) => {
  // Function to format the date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const dayOfWeek = ["일", "월", "화", "수", "목", "금", "토"][date.getDay()]; // Get the day of the week in Korean
    const hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const period = hours >= 12 ? "오후" : "오전"; // Determine if it's AM or PM
    const formattedHour = hours % 12 || 12; // Convert to 12-hour format

    return `${month}.${day}.${dayOfWeek} ${period} ${formattedHour}:${minutes}`;
  };

  // Format the date using the function
  const formattedDate = formatDate(date);

  return (
    <div className="w-full flex flex-row justify-start items-center gap-x-3">
      <div className="relative w-10 h-10 overflow-hidden rounded-full border border-[#B3B3B3]">
        <Image src={userImageUrl} alt="사용자 프로필 이미지" fill />
      </div>
      <div className="flex flex-col justify-start items-start flex-1">
        <h5 className="text-[#1A2128] font-semibold text-xl tracking-tight">
          {userName}
        </h5>
        <span className="text-[#B3B3B3] font-normal text-sm tracking-tight leading-5">
          {formattedDate}
        </span>
      </div>
    </div>
  );
};

export default ArchiveUserInfo;
