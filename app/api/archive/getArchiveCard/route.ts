import { BASE_URL } from "../../base_url";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { userId, weekNumber } = await req.json();
  const apiUrl = `${BASE_URL}/mission/week`;

  const accessToken = req.headers.get("Authorization")?.split(" ")[1];
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
        userId: userId,
        roundNumber: 3,
        weekNumber: parseInt(weekNumber),
      }),
    });

    if (!response.ok) {
      console.error("아카이브 정보를 가져오는데 실패했습니다.");
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    console.error("아카이브 정보를 불러오는데, 문제가 생겼습니다.", error);
    return NextResponse.json(
      { error: "Failed to connect to API", message: error.message },
      { status: 500 }
    );
  }
}
