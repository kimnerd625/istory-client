import { NextResponse, NextRequest } from "next/server";
import { BASE_URL } from "../../base_url";

export async function GET(req: NextRequest) {
  const apiUrl = `${BASE_URL}/user/status`;

  // 요청 헤더에서 accessToken을 가져옵니다.
  const accessToken = req.headers.get("Authorization")?.split(" ")[1];

  console.log(accessToken);

  if (!accessToken) {
    return NextResponse.json(
      { error: "Access token is missing" },
      { status: 401 }
    );
  }

  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      credentials: "include",
    });

    if (!response.ok) {
      console.error("사용자 상태를 가져오는데 실패했습니다.");
      return NextResponse.json(
        { error: "Failed to fetch user status" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    console.error("사용자 상태 불러오는데, 문제가 생겼습니다.", error);
    return NextResponse.json(
      { error: "Failed to connect to API", message: error.message },
      { status: 500 }
    );
  }
}
