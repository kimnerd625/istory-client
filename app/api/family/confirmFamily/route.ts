import { NextRequest, NextResponse } from "next/server";
import { BASE_URL } from "../../base_url";

export async function POST(request: NextRequest) {
  const apiUrl = `${BASE_URL}/family/confirm-family`;
  const { inviteCode, depositBalance, withdrawalAccountNo } =
    await request.json();

  const accessToken = request.headers.get("Authorization")?.split(" ")[1];
  if (!accessToken) {
    return NextResponse.json(
      { error: "Access token is missing" },
      { status: 401 }
    );
  }

  try {
    // depositBalance를 number로 변환
    const body = {
      inviteCode,
      depositBalance: Number(depositBalance), // depositBalance를 number로 변환
      withdrawalAccountNo,
    };

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      credentials: "include",
      body: JSON.stringify(body), // JSON 형식으로 데이터 변환
    });

    if (!response.ok) {
      console.error("초대 코드 발급에 실패했습니다.");
      return NextResponse.json(
        { error: "Failed to issue invite code" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    console.error("초대 코드 발급과 관련하여 문제가 생겼습니다.", error);
    return NextResponse.json(
      { error: "Failed to connect to API", message: error.message },
      { status: 500 }
    );
  }
}
