import { NextRequest, NextResponse } from "next/server";

import { BASE_URL } from "../../base_url";

export async function POST(request: NextRequest) {
  try {
    const { familymissionNo } = await request.json();
    const apiUrl = `${BASE_URL}/mission/report`;

    const accessToken = request.headers.get("Authorization")?.split(" ")[1];
    if (!accessToken) {
      return NextResponse.json(
        { error: "Access token is missing" },
        { status: 401 }
      );
    }

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      credentials: "include",
      body: JSON.stringify({
        familymissionNo: parseInt(familymissionNo),
        thoughts: "",
        complete: "1",
      }),
    });

    const contentType = response.headers.get("Content-Type");

    let responseData;
    if (contentType && contentType.includes("application/json")) {
      responseData = await response.json();
    } else {
      responseData = await response.text();
    }
    if (responseData.errorCode) {
      return NextResponse.json(
        {
          error: `설정한 에러: ${responseData.errorCode}`,
          detail: responseData,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "상자를 성공적으로 열었습니다.", data: responseData },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: "상자 열기를 실패했습니다: " + error.message },
      { status: 500 }
    );
  }
}
