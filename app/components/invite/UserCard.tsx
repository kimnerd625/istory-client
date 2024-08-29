import React from "react";
import Image from 'next/image';

interface UserCardProps {
  name: string; // 타입을 소문자 'string'으로 변경합니다.
}

const UserCard = ({ name }: UserCardProps) => {
  return (
    <div className="user-profile w-[80px] h-[104px] flex flex-col justify-center items-center p-3 bg-white rounded-xl border relative">
      <div className="relative">
        {/* 유저 프로필 사진 */}
        <div className="w-[60px] h-[60px] overflow-hidden rounded-full border">
          <Image
            src="/images/user-default2.png"
            alt="사용자 프로필 이미지"
            fill
            style={{ objectFit: 'cover' }} // fill 속성과 함께 사용할 스타일을 설정합니다.
          />
        </div>
      </div>
      
      <div className="text-[#1A2128] font-normal text-xl tracking-tight text-[14px] mt-2">
        {name}
      </div>

      <div className="absolute top-[-8px] right-[-8px] w-8 h-8 bg-black text-white rounded-full flex justify-center items-center">
        X
            {/* <Image
              src="/images/white-check-icon.png"
              alt="체크 표시"
              width={20}
              height={20}
            /> */}
          </div>
      
    </div>
  );
};

export default UserCard;
