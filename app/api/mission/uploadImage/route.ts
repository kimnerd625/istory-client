import { NextRequest, NextResponse } from "next/server";
import { BASE_URL } from "../../base_url";

export async function POST(request: NextRequest) {
  //---------------------------------------------------
  // URL
  const apiUrl = `${BASE_URL}/mission/missionImg`; // 이미지 업로드 엔드포인트
  //---------------------------------------------------
  // FormData 처리
  const formData = await request.formData(); // FormData 형식으로 데이터 읽기
  const familymissionNo = formData.get("familymissionNo");
  const missionImg = formData.get("missionImg");

  if (!familymissionNo || !missionImg) {
    return NextResponse.json(
      {
        success: false,
        error: "FE: 업로드할 이미지 또는 필수 인자가 빠졌습니다.",
      },
      { status: 400 }
    );
  }

  //---------------------------------------------------
  // AccessToken
  const accessToken = request.headers.get("Authorization")?.split(" ")[1];

  if (!accessToken) {
    return NextResponse.json(
      { success: false, error: "Access token is missing" },
      { status: 401 }
    );
  }
  // ---------------------------------------------------
  // FETCH 호출
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: formData, // FormData를 그대로 전달
    });

    if (!response.ok) {
      console.error("이미지 업로드에 실패했습니다.");
      return NextResponse.json(
        { success: false, error: "이미지 업로드에 실패했습니다." },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("이미지 업로드에 실패했습니다.", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to connect to API",
        message: error.message,
      },
      { status: 500 }
    );
  }
}
