import Image from "next/image";
import LongButton from "../components/LongButton";
import Link from "next/link";

export default function CompletedPage() {
  return (
    <main className="w-full flex-1 flex flex-col justify-between items-center bg-home-bg overflow-x-hidden py-[56px]">
      <section className="w-full flex flex-col justify-start items-center">
        <h2 className="text-[26px] font-bold tracking-tight leading-8">
          적금 개설을 완료했습니다!
        </h2>
        <div className="mt-[50px] relative px-8 w-full flex flex-col justify-center items-center min-h-[260px]">
          <Image
            src="/images/completed-character.png"
            alt="성공 이미지"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <p className="text-sm tracking-tight leading-6 text-[#404141] font-normal text-center mt-[58px]">
          아이스토리와 함께 만드는 가족과의 추억들.
          <br />
          바쁜 일상 속에서도 우리 가족만의 <br />
          소중한 순간을 쌓아가며 <br />
          아이의 미래를 위한 금융 습관을 키워보세요.
        </p>
      </section>
      <Link
        className="w-full flex flex-col justify-center items-center"
        href="/main"
      >
        <LongButton buttonText="우리 가족 추억 여정 시작하기" />
      </Link>
    </main>
  );
}
