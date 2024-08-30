// getAccessToken.ts

export function getAccessToken() {
  // 브라우저 환경에서만 localStorage 접근
  if (typeof window !== "undefined") {
    return localStorage.getItem("accessToken");
  }
  return null; // 서버 환경에서는 null 반환
}

export const setAccessToken = (accessToken: string) =>
  localStorage.setItem("access_token", accessToken);

export const removeAccessToken = () => localStorage.removeItem("access_token");
