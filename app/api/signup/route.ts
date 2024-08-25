import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, password, name, phone, gender, birthdate, role } =
      await request.json();

    const apiUrl =
      "http://ec2-52-78-83-122.ap-northeast-2.compute.amazonaws.com:8080/api/v1/user/join";

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        user_id: email,
        user_pw: password,
        user_name: name,
        user_phone: phone,
        user_gender: gender,
        user_birth: birthdate,
        user_type: role,
      }),
    });

    // 백엔드에서 반환된 응답 데이터를 모두 읽음
    const responseData = await response.json();

    if (!response.ok) {
      // 백엔드에서 보낸 에러 메시지를 포함한 응답을 클라이언트로 전송
      return NextResponse.json(responseData, { status: response.status });
    }

    // 성공한 경우에도 백엔드에서 보낸 응답 데이터를 그대로 클라이언트로 전송
    return NextResponse.json(responseData, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: "회원가입 중 오류가 발생했습니다: " + error.message },
      { status: 500 }
    );
  }
}
