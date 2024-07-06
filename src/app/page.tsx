import Link from "next/link";
import Header from "~/components/header";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <Header></Header>
    </main>
  );
}
