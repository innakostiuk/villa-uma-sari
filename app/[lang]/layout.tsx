import type { Metadata } from 'next';
import { Cormorant_Garamond, Jost } from 'next/font/google';
import { LANGUAGES } from '@/lib/constans';
import { ReactNode } from 'react';
import { LanguageId, PageParams } from '@/types';
import '@/app/globals.css';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import { getDictionary } from '@/dictionaries';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
});

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-jost',
});

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { lang } = await params;
  const translation = await getDictionary(lang);
  return translation.pages.home.meta;
}

export async function generateStaticParams() {
  return LANGUAGES.map(({ id }) => ({ lang: id }));
}

type StaticProps = {
  children: ReactNode;
  params: Promise<{ lang: string }>;
};

export default async function RootLayout({ children, params }: StaticProps) {
  const { lang } = (await params) as { lang: LanguageId };
  const translation = await getDictionary(lang);

  return (
    <html
      lang={lang}
      className={`${cormorant.variable} ${jost.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-sand">
        <Navbar lang={lang} villasLabel={translation.shared.nav.villas} />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer copyright={translation.shared.footer.copyright} />
      </body>
    </html>
  );
}
