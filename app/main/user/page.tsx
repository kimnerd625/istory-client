import React from "react";
import useLoginInfoStore from "../../store/loginInfo";


export default function UserPage() {
  // 전역 상태에서 userInfo와 setUserInfo를 가져옵니다.
  const { loginInfo, setLoginInfo } = useLoginInfoStore();

  // 상태 업데이트 함수 예시: 사용자 이름을 업데이트하는 함수
  const updateUserName = () => {
    // userInfo가 null인지 확인
    if (loginInfo) {
      setLoginInfo({
        userId: loginInfo.userId || '', // 기본값을 제공하여 undefined 방지
        userName: '새로운 이름', // 업데이트할 필드
        userPhone: loginInfo.userPhone || '', // 기본값을 제공하여 undefined 방지
        userGender: loginInfo.userGender || '', // 기본값을 제공하여 undefined 방지
        userBirth: loginInfo.userBirth || '', // 기본값을 제공하여 undefined 방지
        userType: loginInfo.userType || '', // 기본값을 제공하여 undefined 방지
        userProfile: loginInfo.userProfile || '', // 기본값을 제공하여 undefined 방지
        familyKey: loginInfo.familyKey || '', // 기본값을 제공하여 undefined 방지
      });
    }
  };

  return (
    <div>
      <h1>사용자 정보</h1>
      <p>사용자 ID: {userInfo?.userId || '정보 없음'}</p> {/* null일 경우 대체 텍스트 표시 */}
      <p>이름: {userInfo?.userName || '정보 없음'}</p>
      <p>전화번호: {userInfo?.userPhone || '정보 없음'}</p>
      <p>성별: {userInfo?.userGender || '정보 없음'}</p>
      <p>생일: {userInfo?.userBirth || '정보 없음'}</p>
      <p>유형: {userInfo?.userType || '정보 없음'}</p>
      <p>프로필: {userInfo?.userProfile || '정보 없음'}</p>
      <p>가족 키: {userInfo?.familyKey || '정보 없음'}</p>
      <button onClick={updateUserName}>이름 업데이트</button>
    </div>
  );
}
