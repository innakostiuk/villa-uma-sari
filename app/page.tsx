import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import Amenities from '@/components/Amenities';
import Navbar from '@/components/layout/Navbar';
import Rooms from '@/components/Rooms';
import Quote from '@/components/Quote';

export default function Home() {
  return (
    <>
      <main className="flex flex-1 flex-col">
        <Navbar />
        <Hero />
        <Intro />
        <Rooms />
        <Amenities />
        <Quote />
      </main>
    </>
  );
}
