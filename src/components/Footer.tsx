'use client';

import { Fragment } from 'react';
import Image from 'next/image';

export default function Footer(): JSX.Element {
  return (
    <Fragment>
      <footer className='bg-slate-100 text-black py-6'>
        <section className='flex items-center justify-center mt-10'>
          <div className='flex gap-5'>
            <a href='https://www.instagram.com/iecasimiroraul/'><Image src='/instagram.png' alt='Instagram Icon' width={30} height={30}></Image></a>
            <a href='https://twitter.com/iemaestre'><Image src='/gorjeo.png' alt='X Icon' width={30} height={30}></Image></a>
            <a href='https://www.facebook.com/iecasimiroraul/'><Image src='/facebook.png' alt='Facebook Icon' width={30} height={30}></Image></a>
            <a href='https://www.youtube.com/channel/UCMVDAajsLiRpCi6vhEReCPw?view_as=subscriber'><Image src='/youtube.png' alt='Youtube Icon' width={30} height={30}></Image></a>
          </div>
        </section>
      </footer>
    </Fragment>
  );
}