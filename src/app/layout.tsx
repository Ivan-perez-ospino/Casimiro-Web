import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';


const outfit = Outfit({
  weight: ['400', '900'],
  style: ['normal'],
  subsets: ['latin']
});


export const metadata: Metadata = {
  title: 'Casimiro Raul Maestre',
  description: 'La principal web de la institucion casimiro raul maestre',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/casimiro-logo.svg' type='image/gif' sizes='16x16'></link>
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.0.0/uicons-regular-rounded/css/uicons-regular-rounded.css'></link>
      </head>
      <body className={outfit.className}>
        {children}
      </body>
    </html>
  );
}
