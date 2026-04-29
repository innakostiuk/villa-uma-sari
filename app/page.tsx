import Hero from "@/components/Hero";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <>
      <main className="flex flex-col flex-1">
        <Navbar />
        <Hero />
      </main>
    </>
  );
}
