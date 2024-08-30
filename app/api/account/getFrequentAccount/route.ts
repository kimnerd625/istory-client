import { NextRequest, NextResponse } from "next/server";
import { BASE_URL } from "../../base_url";

export async function GET(request: NextRequest) {
  //---------------------------------------------------
  // URL
  const apiUrl = `${BASE_URL}/user/account`;
  //---------------------------------------------------
  // AccessToken
  const accessToken = request.headers.get("Authorization")?.split(" ")[1];
  if (!accessToken) {
    return NextResponse.json(
      { error: "Access token is missing" },
      { status: 401 }
    );
  }
  //---------------------------------------------------
  // FETCH 호출
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
      console.log(response);
      console.error("수시 입출금 계좌 목록을 가져오는데 실패했습니다.");
      return NextResponse.json(
        { error: response },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    console.error(
      "수시 입출금 계좌 목록을 불러오는데, 문제가 생겼습니다.",
      error
    );
    return NextResponse.json(
      { error: "Failed to connect to API", message: error.message },
      { status: 500 }
    );
  }
}
