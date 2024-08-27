import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import BottomNavigationBar from "./sections/BottomNavigationBar";
import { Toaster } from "sonner";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata: Metadata = {
  title: "IStory: 아이스토리",
  description: "IStory Client developed by SolFamily",
};

const Pretendard = localFont({
  src: "../public/fonts/PretendardVariable.woff2",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body
        className={`bg-home-bg min-h-screen flex flex-col justify-start items-center ${Pretendard.className}`}
      >
        <Suspense fallback={<Loading />}>
          <Toaster richColors position="top-center" />
          {children}
        </Suspense>
      </body>
    </html>
  );
}
