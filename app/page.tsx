import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import Amenities from '@/components/layout/Amenities';
import Navbar from '@/components/layout/Navbar';
import Rooms from '@/components/Rooms';

export default function Home() {
  return (
    <>
      <main className="flex flex-1 flex-col">
        <Navbar />
        <Hero />
        <Intro />
        <Rooms />
        <Amenities />
      </main>
    </>
  );
}
