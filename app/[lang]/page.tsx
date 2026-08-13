import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import Amenities from '@/components/Amenities';
import Rooms from '@/components/Rooms';
import Quote from '@/components/Quote';
import { PageParams } from '@/types';

export default async function Home({ params }: PageParams) {
  const { lang } = await params;
  return (
    <>
      <Hero lang={lang} />
      <Intro />
      <Rooms />
      <Amenities />
      <Quote />
    </>
  );
}
