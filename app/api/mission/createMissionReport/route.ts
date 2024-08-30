import { NextResponse } from "next/server";

import { BASE_URL } from "../../base_url";

export async function POST(request: Request) {
  try {
    const { email, famillymissionNo, thoughts } = await request.json();

    const accessToken = request.headers.get("Authorization")?.split(" ")[1];
    if (!accessToken) {
      return NextResponse.json(
        { error: "Access token is missing" },
        { status: 401 }
      );
    }

    const apiUrl = `${BASE_URL}/mission/report`;

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      credentials: "include",
      body: JSON.stringify({
        user: { userId: email },
        familymissionNo: famillymissionNo,
        thoughts: thoughts,
      }),
    });

    const contentType = response.headers.get("Content-Type");

    let responseData;
    if (contentType && contentType.includes("application/json")) {
      responseData = await response.json();
    } else {
      responseData = await response.text();
    }

    if (!response.ok) {
      return NextResponse.json(
        { error: "Error: " + responseData },
        { status: response.status }
      );
    }

    return NextResponse.json(
      { message: "미션 소감이 성공적으로 등록되었습니다.", data: responseData },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: "미션 소감 등록이 실패했습니다: " + error.message },
      { status: 500 }
    );
  }
}
