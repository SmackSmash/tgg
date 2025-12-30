import type { Metadata } from 'next';
import Providers from '../components/providers';
import './globals.css';

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
    <html lang='en' className='bg-black'>
      <body className='mx-auto w-93.75 bg-white antialiased'>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
