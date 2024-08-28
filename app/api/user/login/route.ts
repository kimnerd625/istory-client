import { NextResponse } from "next/server";

import { BASE_URL } from "../../base_url";
import { setAccessToken } from "@/app/utils/localAccessToken";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    const apiUrl = `${BASE_URL}/user/login`;

    // FormData 객체 생성 및 데이터 추가
    const formData = new FormData();
    formData.append("userId", email);
    formData.append("userPw", password);

    const response = await fetch(apiUrl, {
      method: "POST",
      credentials: "include",
      body: formData,
    });

    const contentType = response.headers.get("Content-Type");

    let responseData;
    if (contentType && contentType.includes("application/json")) {
      responseData = await response.json();
    } else {
      responseData = await response.text();
    }

    if (!response.ok) {
      // 에러 메시지가 객체일 경우, 문자열로 변환
      const errorMessage =
        typeof responseData === "object"
          ? JSON.stringify(responseData)
          : responseData;

      return NextResponse.json(
        { error: "Error: " + errorMessage },
        { status: response.status }
      );
    }

    const jwtToken = responseData.jwt_token;
    if (jwtToken) {
      setAccessToken(jwtToken);
    }

    return NextResponse.json(
      {
        message: "로그인이 성공했습니다.",
        data: responseData,
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: "로그인 중 오류가 발생했습니다 : " + error.message },
      { status: 500 }
    );
  }
}
