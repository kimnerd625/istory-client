import { NextResponse } from "next/server";
import { BASE_URL } from "../../base_url";
import { getAccessToken } from "@/app/utils/localAccessToken";

export async function POST() {
  const apiUrl = `${BASE_URL}/family/invite-code`;
  const accessToken = getAccessToken();

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      credentials: "include",
      body: "",
    });

    if (!response.ok) {
      console.error("초대 코드 발급에 실패했습니다.");
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
