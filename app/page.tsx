import Link from "next/link";
import Image from "next/image";

import LongButton from "./components/LongButton";

export default function Home() {
  // const [data, setData] = useState<ApiResponse | null>(null);
  // const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch(
  //         "http://ec2-52-78-83-122.ap-northeast-2.compute.amazonaws.com:8080/api/v1/user/all",
  //         {
  //           method: "GET",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           credentials: "include",
  //         }
  //       );

  //       if (res.ok) {
  //         const json: ApiResponse = await res.json();
  //         setData(json);
  //       } else {
  //         const errorResponse = await res.json();
  //         console.error("Failed to fetch data:", res.statusText);
  //         console.error("Error details:", errorResponse);
  //         setError(
  //           `Failed to fetch data: ${
  //             res.statusText
  //           }. Error details: ${JSON.stringify(errorResponse)}`
  //         );
  //       }
  //     } catch (error: any) {
  //       // error를 any로 처리
  //       console.error("Error fetching data from Java API:", error);

  //       setError(`Failed to connect to API: ${error.message}`);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <main className="w-full flex-1 flex flex-col justify-between items-center bg-home-bg overflow-x-hidden py-[56px]">
      <section className="w-full flex flex-col justify-center items-center">
        <h4 className="text-2xl font-extrabold text-black tracking-tight leading-5">
          환영합니다!
        </h4>
        <h4 className="mt-8 text-xl font-medium text-black tracking-tight leading-8 text-center">
          추억과 함께 쌓이는 <br />
          <span className="text-main-600">ISTORY</span>
        </h4>
        <div className="relative mt-8 w-[206px] h-[193px]">
          <Image
            src="/images/login-hero-character.png"
            alt="로그인 캐릭터 이미지"
            fill
          />
        </div>
        <div className="mt-10 px-8 flex flex-col justify-center items-center">
          <p className="text-center text-sm font-normal text-[#757575] tracking-tight leading-5">
            아이스토리와 함께 만드는 가족과의 추억들.
            <br />
            바쁜 일상 속에서도 우리 가족만의
            <br />
            소중한 순간을 쌓아가며
            <br />
            아이의 미래를 위한 금융 습관을 키워보세요.
            <br />
          </p>
        </div>
      </section>
      <Link
        href="/login"
        className="w-full flex flex-row justify-center items-center"
      >
        <LongButton buttonText="시작하기" />
      </Link>
    </main>
  );
}
