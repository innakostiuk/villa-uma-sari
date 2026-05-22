import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import Amenities from '@/components/Amenities';
import Rooms from '@/components/Rooms';
import Quote from '@/components/Quote';

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Rooms />
      <Amenities />
      <Quote />
    </>
  );
}
