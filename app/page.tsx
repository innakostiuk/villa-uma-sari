import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import Navbar from '@/components/layout/Navbar';

export default function Home() {
  return (
    <>
      <main className="flex flex-1 flex-col">
        <Navbar />
        <Hero />
        <Intro />
      </main>
    </>
  );
}
