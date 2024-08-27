import LoginForm from "../components/login/LoginForm";

export default function LoginPage() {
  return (
    <main className="w-full flex-1 flex flex-col justify-start items-center bg-home-bg overflow-x-hidden py-[56px]">
      <section className="px-5 w-full flex-col justify-start items-start">
        <h3 className="text-[#1A2128] font-bold text-[26px] leading-8 tracking-tight">
          안녕하세요 !
        </h3>
        <h3 className="text-[#1A2128] font-bold text-[26px] leading-8 tracking-tight">
          아이스토리 입니다.
        </h3>
        <h5 className="mt-3 text-sm text-[#777777] font-normal tracking-tight leading-4">
          이메일을 입력해주세요.
        </h5>
      </section>
      <LoginForm />
    </main>
  );
}
