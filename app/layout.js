import { Josefin_Sans } from 'next/font/google';

import Header from './_components/Header';

import '@/app/_styles/globals.css';
import { ReservationProvider } from '@/app/_context/ReservationContext';
const josefin = Josefin_Sans({ subsets: ['latin'], display: 'swap' });

export const metadata = {
  title: {
    template: '%s / The Wild Oasis',
    default: 'Welcome / The Wild Oasis',
  },
  description:
    'Luxurious cabin hotel located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests',
};

// If you want you can fetch data here as well but than error.js need to be called global-error.js to catch error from here as well

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
