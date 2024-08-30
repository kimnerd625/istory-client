import { NextRequest, NextResponse } from "next/server";
import { BASE_URL } from "../../base_url";

export async function POST(request: NextRequest) {
  const { inviteCode } = await request.json();

  if (!inviteCode) {
    return NextResponse.json(
      { error: "Invite code is missing" },
      { status: 400 }
    );
  }

  const apiUrl = `${BASE_URL}/family/all-userInfo`;

  const accessToken = request.headers.get("Authorization")?.split(" ")[1];
  if (!accessToken) {
    return NextResponse.json(
      { error: "Access token is missing" },
      { status: 401 }
    );
  }

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      credentials: "include",
      body: JSON.stringify({
        inviteCode: inviteCode,
      }),
    });

    if (!response.ok) {
      console.log(response);
      console.error("초대 인원 목록을 가져오는데 실패했습니다.");
      return NextResponse.json(
        { error: response },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    console.error("초대 인원 목록을 불러오는데, 문제가 생겼습니다.", error);
    return NextResponse.json(
      { error: "Failed to connect to API", message: error.message },
      { status: 500 }
    );
  }
}
