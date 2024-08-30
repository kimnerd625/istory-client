import { NextRequest, NextResponse } from "next/server";
import { BASE_URL } from "../../base_url";

export async function POST(request: NextRequest) {
  //---------------------------------------------------
  // URL
  const apiUrl = `${BASE_URL}/family/exclude-member`;
  //---------------------------------------------------
  // Parameters
  const { inviteCode, userId } = await request.json();
  if (!inviteCode || !userId) {
    return NextResponse.json(
      {
        error: "FE: 중간 서버 단에 들어오는 인자가 빠졌습니다.",
      },
      { status: 400 }
    );
  }
  //---------------------------------------------------
  // AccessToken
  const accessToken = request.headers.get("Authorization")?.split(" ")[1];

  if (!accessToken) {
    return NextResponse.json(
      { error: "Access token is missing" },
      { status: 401 }
    );
  }
  // ---------------------------------------------------
  // FETCH 호출
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
        userId: userId,
      }),
    });

    if (!response.ok) {
      console.error("초대 인원 삭제에 실패했습니다.");
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    console.error("초대 인원 삭제에 실패했습니다.", error);
    return NextResponse.json(
      { error: "Failed to connect to API", message: error.message },
      { status: 500 }
    );
  }
}
