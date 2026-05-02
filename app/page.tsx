import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import Amenities from '@/components/Amenities';
import Navbar from '@/components/layout/Navbar';
import Rooms from '@/components/Rooms';
import Quote from '@/components/Quote';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex flex-1 flex-col">
        <Hero />
        <Intro />
        <Rooms />
        <Amenities />
        <Quote />
      </main>

      <Footer />
    </>
  );
}
