import { NextResponse } from "next/server";

import { BASE_URL } from "../../base_url";

export async function POST(request: Request) {
  try {
    const { email, password, name, phone, gender, birthdate, role } =
      await request.json();

    const apiUrl = `${BASE_URL}/user/sign-up`;

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        userId: email,
        userPw: password,
        userName: name,
        userPhone: phone,
        userGender: gender,
        userBirth: birthdate,
        userType: role,
      }),
    });

    const contentType = response.headers.get("Content-Type");

    let responseData;
    if (contentType && contentType.includes("application/json")) {
      responseData = await response.json();
    } else {
      responseData = await response.text();
    }

    // 응답에서 에러 코드와 결과를 체크
    if (responseData && responseData.result === false) {
      const errorCode = responseData.error_code || "Unknown error code";
      const errorMessage = responseData.message || "Unknown error occurred";

      return NextResponse.json(
        { error: `Error: ${errorMessage} (Code: ${errorCode})` },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "회원가입이 성공했습니다.", data: responseData },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: "회원가입 중 오류가 발생했습니다: " + error.message },
      { status: 500 }
    );
  }
}
