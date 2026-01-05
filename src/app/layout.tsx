import type { Metadata } from 'next';
import Providers from '@/src/components/providers';
import Header from '@/src/components/header';
import Footer from '@/src/components/footer';
import '@/src/app/globals.css';

import Image from 'next/image';
import Overlay from '@/public/overlays/thank-you.png';

export const metadata: Metadata = {
  title: 'TGG Test',
  description: 'A frontend project for The Genius Group'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='bg-zinc-800'>
      <body className='relative mx-auto my-2 w-93.75 bg-white antialiased'>
        {/* <Image src={Overlay} alt='Overlay' className='absolute opacity-50' /> */}
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
