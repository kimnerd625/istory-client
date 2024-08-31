import { BASE_URL } from "../../base_url";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const weekNum = formData.get("weekNum");

  const apiUrl = `${BASE_URL}/mission/week`;

  const accessToken = req.headers.get("Authorization")?.split(" ")[1];
  if (!accessToken) {
    return NextResponse.json(
      { error: "Access token is missing" },
      { status: 401 }
    );
  }

  try {
    const newFormData = new FormData();
    newFormData.append("weekNum", weekNum?.toString() || "");
    newFormData.append("roundNum", "3");

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      credentials: "include",
      body: newFormData,
    });

    if (!response.ok) {
      console.error("Failed to fetch archive information.");
      return NextResponse.json(
        { error: "Failed to fetch archive information." },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    console.error(
      "An error occurred while fetching archive information.",
      error
    );
    return NextResponse.json(
      { error: "Failed to connect to API", message: error.message },
      { status: 500 }
    );
  }
}
