import { API } from "./Token";

const BASE_API =
  "http://ec2-52-79-247-22.ap-northeast-2.compute.amazonaws.com:8080/api/v1/user";

/**
 * 1. 회원가입 : joinAPI
 * userId: 이메일
 * userPw: 비밀번호
 * userName: 사용자명
 * userPhone: 전화번호
 * userGender: 성별
 * userBirth: 생년월일
 * userType: 사용자 유형 (부모, 자식)
 */
export const joinAPI = async (userForm: {
  userId: string;
  userPw: string;
  userName: string;
  userPhone: string;
  userGender: string;
  userBirth: string;
  userType: string;
}) => {
  return await API.post(`${BASE_API}/join`, userForm);
};

/**
 * 2. 로그인 : loginAPI
 * userId: 이메일
 * userPw: 비밀번호
 */
export const loginAPI = async (userForm: {
  userId: string;
  userPw: string;
}) => {
  return await API.post(`${BASE_API}/login`, userForm);
};

/**
 * 3. 초대 받은 사용자 회원가입 : joinByInviteAPI
 * userId: 이메일
 * userPw: 비밀번호
 * userName: 사용자명
 * userPhone: 전화번호
 * userGender: 성별
 * userBirth: 생년월일
 * userType: 사용자 유형 (부모, 자식)
 * inviteCode: 초대 코드
 */
export const joinByInviteAPI = async (userForm: {
  userId: string;
  userPw: string;
  userName: string;
  userPhone: string;
  userGender: string;
  userBirth: string;
  userType: string;
  inviteCode: string; // 수정 예정
}) => {
  return await API.post(`${BASE_API}/joinByInvite`, userForm);
};

export const getUserAllAPI = async () => {
  return await API.get(`${BASE_API}/all`, { withCredentials: true });
};
