'use client';


import { Fragment } from 'react';
import { NextUIProvider, Image, Link, Button } from '@nextui-org/react';
import NavBar from './components/NavBar';


export default function HomePage(): JSX.Element {


  return (
    <Fragment>
      <NextUIProvider>
        <NavBar />
          <div className='my-20 px-10 max-[530px]:px-5'>
            <main className='flex flex-col items-center justify-center'>
              <h1 className='font-extrabold text-6xl text-center max-[455px]:text-4xl max-[396px]:text-xl'>Bienvenido Al Sitio Web De La Institucion Educativa Casimiro Raul Maestre.</h1>
              <div className='flex flex-wrap gap-10 my-20 max-[396px]:gap-5'>
                <Link href='#Start'>
                  <Button color='primary' radius='none' className='text-xl p-6 max-[396px]:w-full min-[455px]:text-lg max-[455px]:py-2 max-[396px]:text-small'>Comenzar</Button>
                </Link>
                <Link href='/Blog'>
                  <Button color='primary' variant='ghost' radius='none' className='text-xl p-6 max-[396px]:w-full min-[455px]:text-lg max-[455px]:py-2 max-[369px]:text-small'>Blog</Button>
                </Link>
              </div>
            </main>


            <section className='my-40' id='Start'>
              <h1 className='font-extrabold text-4xl text-center max-[455px]:text-2xl max-[396px]:text-lg'>Sientete comodo con nuestra interfaz grafica de usuario accesible y flexible, que es facil, sencilla y rapida de usar.</h1>
              <picture className='flex justify-evenly my-10'>
                <Image src='./user-interface-flatline.svg' alt='Image Interface Graphic' width={500} height={500} />
                <Image src='./wireframe-flatline.svg' alt='Image Wireframe' width={500} height={500} />
              </picture>
            </section>


            <section className='my-40'>
              <h1 className='font-extrabold text-4xl text-center max-[455px]:text-2xl max-[396px]:text-lg'>Aqui podras encontrar el calendario de eventos, dias de examenes, actos civicos etc.</h1>
              <picture className='flex justify-evenly my-10'>
                <Image src='./calendar-flatline.svg' alt='Image Calendar' width={500} height={500} />
                <Image src='./snow-flatline.svg' alt='Image Snow' width={500} height={500} />
              </picture>
            </section>


            <section className='my-40'>
              <h1 className='font-extrabold text-4xl text-center max-[455px]:text-2xl max-[396px]:text-lg'>Tenemos un blog escolar en el cual se suben noticias, anuncios, eventos, logros, reconocimientos y proyectos de nuestros estudiantes.</h1>
              <picture className='flex justify-evenly my-10'>
                <Image src='./marketing-flatline-eda0a.svg' alt='Image Social Network' width={500} height={500} />
                <Image src='./user-group-flatline.svg' alt='Image User Group' width={500} height={500} />
              </picture>
            </section>
          </div>


          <footer className='flex justify-center'>
            <div className='flex items-center justify-center my-5 gap-5'>
              <Link href='https://www.instagram.com/iecasimiroraul/'><Image src='/instagram.png' alt='Instagram Icon' width={30} height={30}></Image></Link>
              <Link href='https://twitter.com/iemaestre'><Image src='/gorjeo.png' alt='X Icon' width={30} height={30}></Image></Link>
              <Link href='https://www.facebook.com/iecasimiroraul/'><Image src='/facebook.png' alt='Facebook Icon' width={30} height={30}></Image></Link>
              <Link href='https://www.youtube.com/channel/UCMVDAajsLiRpCi6vhEReCPw?view_as=subscriber'><Image src='/youtube.png' alt='Youtube Icon' width={30} height={30}></Image></Link>
            </div>
          </footer>
      </NextUIProvider>
    </Fragment>
  );
}
