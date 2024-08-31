import React from "react";
import Image from "next/image";

interface UsersProfileProps {
  userName: string;
  userImageUrl: string;
  isCompleted: boolean;
}

const UsersProfile = ({
  userName,
  userImageUrl,
  isCompleted,
}: UsersProfileProps) => {
  return (
    <div className="flex flex-row justify-start items-center gap-5">
      {/* 유저 프로필 */}
      <div
        className={`user-profile ${
          isCompleted ? "completed" : "uncompleted"
        } w-[60px] flex flex-col justify-center items-center gap-2`}
      >
        <div className="relative flex flex-col justify-center items-center">
          <div className="relative w-[60px] h-[60px] rounded-full overflow-hidden border-4 border-main-500 z-10">
            <Image src={userImageUrl} alt="사용자 프로필 이미지" fill />
          </div>
          {isCompleted && (
            <div className="w-6 h-6 absolute rounded-full bg-main-500 right-0 bottom-0 flex justify-center items-center z-30">
              <img
                src="/images/white-check-icon.png"
                alt="체크 표시"
                width={13}
                height={9}
              />
            </div>
          )}
        </div>
        <span className="text-[#1A2128] font-medium text-base tracking-tight leading-4">
          {userName}
        </span>
      </div>
    </div>
  );
};

export default UsersProfile;
