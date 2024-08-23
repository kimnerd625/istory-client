"use client";

import { NextResponse } from "next/server";
import { useEffect, useState } from "react";

interface ApiResponse {
  [key: string]: any;
}

const input = {
  user_id: "user11@naver.com",
  user_pw: "password123",
  user_name: "철수",
  user_phone: "010-1234-5678",
  user_gender: "남",
  user_birth: "1990-01-01",
  user_type: "parent",
  user_key: "",
  join_date: "2024-08-18T12:34:56",
  user_profile: "",
  family_key: "",
};

export default function Home() {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/proxy", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });

        if (res.ok) {
          const json: ApiResponse = await res.json();
          setData(json);
        } else {
          // 오류 응답의 본문을 파싱하여 출력
          const errorResponse = await res.json();
          console.error("Failed to fetch data:", res.statusText);
          console.error("Error details:", errorResponse);
          setError(
            `Failed to fetch data: ${
              res.statusText
            }. Error details: ${JSON.stringify(errorResponse)}`
          );
        }
      } catch (error) {
        console.error("Error fetching data from Java API:", error);

        // 'error'를 'unknown'에서 'Error'로 타입 좁히기
        if (error instanceof Error) {
          return NextResponse.json(
            { error: "Failed to connect to API", message: error.message },
            { status: 500 }
          );
        } else {
          // 'error'가 'Error' 객체가 아닌 경우
          return NextResponse.json(
            {
              error: "Failed to connect to API",
              message: "Unknown error occurred",
            },
            { status: 500 }
          );
        }
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Data from Java Spring API via Next.js Proxy</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
