'use client';


import { Fragment } from 'react';
import { Image } from '@nextui-org/react';
import NavBar from '../components/NavBar';


export default function Admissions(): JSX.Element {


  return (
    <Fragment>
      <NavBar />
      <div className='my-20 px-10 max-[530px]:px-5'>
        <main className='my-10'>
          <h1 className='font-extrabold text-6xl text-center max-[455px]:text-4xl max-[396px]:text-xl'>Admisiones</h1>
        </main>


        <section className='flex items-start justify-evenly max-tablet:grid max-tablet:place-items-center'>
          <div className='w-2/4 max-tablet:w-auto'>
            <h3 className='font-bold text-4xl text-center max-[530px]:text-2xl max-[350px]:text-xl mb-5'>Bienvenidos A La Institucion Educativa Casimiro Raul Maestre</h3>
            <picture className='flex items-center justify-center'>
              <Image src='./school-flatline.svg' alt='Image School' width={500} height={500}></Image>
            </picture>
            <div>
              <p className='my-2 text-center max-tablet:text-left max-[350px]:text-sm'>De manera grata les extiendo un saludo cariñoso y amoroso de mi parte. Esta institución es y será siempre su casa. Estamos a puertas de muchos cambios sociales y culturales que afectan de manera positiva a los jóvenes y niños de este país. Por tanto debemos estar dispuestos a ser forjadores del futuro que define su vida y parte del entorno de las personas que los rodean.</p>
              <p className='my-2 text-center max-tablet:text-left max-[350px]:text-sm'>Por lo tanto es importante que ustedes estén dispuestos a tomar el mundo con las manos, muy seguros de sí mismos y con la mente abierta a nuevas cosas. De mi parte, invitarlos a enamorarse de esta, su institución, y recibir de brazos abiertos la ACADEMIA.</p>
              <p className='my-2 text-center max-tablet:text-left max-[350px]:text-sm'>Sinceramente,</p>
            </div>
          </div>


          <div className='w-2/4 flex flex-col items-center justify-center max-tablet:w-full max-tablet:my-10'>
            <picture className='flex items-center justify-center'>
              <Image src='./MERCEDES CADENA.webp' alt='Image Rectora' width={500} height={500} radius='md'></Image>
            </picture>
            <div className='max-tablet:my-5'>
              <h5 className='font-bold text-2xl max-[530px]:text-xl max-[350px]:text-lg'>Mercedes Elena Cadena De Perez</h5>
              <p className='max-[350px]:text-sm'>Rectora De La Institucion</p>
            </div>
          </div>


        </section>
      </div>
    </Fragment>
  );
}