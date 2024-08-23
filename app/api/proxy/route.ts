import { NextResponse } from "next/server";

export async function GET() {
  const apiUrl =
    "http://ec2-52-78-83-122.ap-northeast-2.compute.amazonaws.com:8080/api/v1/user/all";

  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const text = await response.text();

    // 응답이 JSON 형식인지 확인하고 파싱 시도
    let data;
    try {
      data = JSON.parse(text);
    } catch (error) {
      console.error("Error parsing JSON:", error);
      // JSON 파싱이 실패하면, 텍스트 응답을 그대로 반환
      return NextResponse.json(
        { message: "Received non-JSON response", data: text },
        { status: 200 }
      );
    }

    // JSON 파싱이 성공하면, 파싱된 데이터를 반환
    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Error fetching data from Java API:", error);
    return NextResponse.json(
      { error: "Failed to connect to API", message: error.message },
      { status: 500 }
    );
  }
}
