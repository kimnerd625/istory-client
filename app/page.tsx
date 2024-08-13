import BottomNavigationBar from "./sections/BottomNavigationBar";
import Header from "./sections/Header";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col justify-start items-center">
      <Header />
      <BottomNavigationBar />
    </main>
  );
}
