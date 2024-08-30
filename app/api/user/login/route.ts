import { NextResponse } from "next/server";

import { BASE_URL } from "../../base_url";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    const apiUrl = `${BASE_URL}/user/login`;

    const body = { userId: email, userPw: password };

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(body),
    });

    const contentType = response.headers.get("Content-Type");

    let responseData;
    if (contentType && contentType.includes("application/json")) {
      responseData = await response.json();
    } else {
      responseData = await response.text();
    }

    if (!responseData.result) {
      const errorMessage =
        typeof responseData === "object"
          ? JSON.stringify(responseData)
          : responseData;

      return NextResponse.json(
        { error: "Error: " + errorMessage },
        { status: response.status }
      );
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
