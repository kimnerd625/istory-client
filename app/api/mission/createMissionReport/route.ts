import { NextRequest, NextResponse } from "next/server";

import { BASE_URL } from "../../base_url";

export async function POST(request: NextRequest) {
  try {
    const { familymissionNo, thoughts, complete } = await request.json();
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
        thoughts: thoughts,
        complete: "2",
      }),
    });

    const contentType = response.headers.get("Content-Type");

    let responseData;
    if (contentType && contentType.includes("application/json")) {
      responseData = await response.json();
    } else {
      responseData = await response.text();
    }
    if (responseData.error) {
      return NextResponse.json(
        {
          error: `설정한 에러: ${responseData.errorCode}`,
          detail: responseData,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "소감을 성공적으로 등록했습니다.", data: responseData },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: "소감 등록에 실패했습니다: " + error.message },
      { status: 500 }
    );
  }
}
