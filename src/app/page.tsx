'use client';


import { Fragment } from 'react';
import { NextUIProvider, Image, Link, Button } from '@nextui-org/react';
import NavbarHome from './components/Navbar';


export default function HomePage(): JSX.Element {


  return (
    <Fragment>
      <NextUIProvider>
        <NavbarHome />
          <div className='my-20'>
            <main className='flex justify-evenly'>
              <picture className='flex items-center justify-center w-2/4 max-tablet:hidden'>
                <Image src='./ESCUDO 2014.PNG' alt='Image Escude' width={400} height={500} />
              </picture>
              <div className='flex flex-col items-center justify-center w-2/4 max-tablet:w-auto'>
                <h1 className='font-extrabold text-6xl text-center max-[455px]:text-4xl max-[396px]:text-xl'>Bienvenido Al Sitio Web De La Institucion Educativa Casimiro Raul Maestre.</h1>
                <picture className='flex items-center justify-center w-2/4 hidden max-tablet:flex mt-6'>
                  <Image src='./ESCUDO 2014.PNG' alt='Image Escude' width={600} height={600} />
                </picture>
                <div className='flex flex-wrap items-center justify-center gap-10 my-20 max-[396px]:gap-5 max-tablet:flex-col'>
                  <Link href='#Start' className='w-auto'>
                    <Button color='primary' radius='none' className='text-xl p-6 max-[396px]:w-full min-[455px]:text-lg max-[455px]:py-2 max-[396px]:text-small'>Comenzar</Button>
                  </Link>
                  <Link href='/Blog' className='max-tablet:hidden'>
                    <Button color='primary' variant='ghost' radius='none' className='text-xl p-6 max-[396px]:w-full min-[455px]:text-lg max-[455px]:py-2 max-[369px]:text-small'>Blog</Button>
                  </Link>
                  <Link href='/SignIn' className='hidden max-tablet:flex'>
                    <Button color='primary' variant='ghost' radius='none' className='text-xl p-6 max-[396px]:w-full min-[455px]:text-lg max-[455px]:py-2 max-[369px]:text-small'>Iniciar Sesion</Button>
                  </Link>
                <Link href='/Register' className='hidden max-tablet:flex'>
                    <Button color='primary' variant='ghost' radius='none' className='text-xl p-6 max-[396px]:w-full min-[455px]:text-lg max-[455px]:py-2 max-[369px]:text-small'>Registrarse</Button>
                  </Link>
                </div>
              </div>
            </main>


            <section className='my-40 bg-blue-800 text-white pt-10 px-4' id='Start'>
              <h1 className='font-extrabold text-4xl text-center max-[455px]:text-2xl max-[396px]:text-lg'>Sientete comodo con nuestra interfaz grafica de usuario accesible y flexible, que es facil, sencilla y rapida de usar.</h1>
              <picture className='flex justify-evenly my-10'>
                <Image src='./user-interface-flatline.svg' alt='Image Interface Graphic' width={500} height={500} />
                <Image src='./wireframe-flatline.svg' alt='Image Wireframe' width={500} height={500} />
              </picture>
            </section>


            <section className='my-40 px-4'>
              <h1 className='font-extrabold text-4xl text-center max-[455px]:text-2xl max-[396px]:text-lg'>Aqui podras encontrar el calendario de eventos, dias de examenes, actos civicos etc.</h1>
              <picture className='flex justify-evenly my-10'>
                <Image src='./calendar-flatline.svg' alt='Image Calendar' width={500} height={500} />
                <Image src='./snow-flatline.svg' alt='Image Snow' width={500} height={500} />
              </picture>
            </section>


            <section className='my-40 bg-blue-800 text-white pt-10 px-4'>
              <h1 className='font-extrabold text-4xl text-center max-[455px]:text-2xl max-[396px]:text-lg'>Tenemos un blog escolar en el cual se suben noticias, anuncios, eventos, logros, reconocimientos y proyectos de nuestros estudiantes.</h1>
              <picture className='flex justify-evenly my-10'>
                <Image src='./marketing-flatline-eda0a.svg' alt='Image Social Network' width={500} height={500} />
                <Image src='./user-group-flatline.svg' alt='Image User Group' width={500} height={500} />
              </picture>
            </section>
          </div>


          <footer className='flex flex-col  items-center justify-center'>
            <div className='flex items-center justify-center my-5 gap-5'>
              <Link href='https://www.instagram.com/iecasimiroraul/'><Image src='/instagram.png' alt='Instagram Icon' width={30} height={30}></Image></Link>
              <Link href='https://twitter.com/iemaestre'><Image src='/gorjeo.png' alt='X Icon' width={30} height={30}></Image></Link>
              <Link href='https://www.facebook.com/iecasimiroraul/'><Image src='/facebook.png' alt='Facebook Icon' width={30} height={30}></Image></Link>
              <Link href='https://www.youtube.com/channel/UCMVDAajsLiRpCi6vhEReCPw?view_as=subscriber'><Image src='/youtube.png' alt='Youtube Icon' width={30} height={30}></Image></Link>
            </div>
            <div>
              <h1>Ivan Perez - Todos los derechos reservados - 2024</h1>
              <picture className='flex items-center justify-center mt-2'>
                <Image src='/creative-commons.webp' alt='Image Creative Commons' width={150} height={150}></Image>
              </picture>
            </div>
          </footer>
      </NextUIProvider>
    </Fragment>
  );
}
