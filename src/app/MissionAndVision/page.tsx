'use client';

import { Fragment } from 'react';
import Image from 'next/image';

export default function MissionAndVision(): JSX.Element {
  return (
    <Fragment>
      <section>
        <section className='flex justify-evenly flex-wrap mt-5'>
          <article className='w-unit-7xl flex flex-col max-tablet:m-10'>
            <main>
              <h1 className='font-extrabold text-4xl text-center max-[530px]:text-lg'>Nuestra Mision</h1>
            </main>
            <picture>
              <Image src='./startup-flatline.svg' alt='Image Startup' width={600} height={600}></Image>
            </picture>
            <div>
              <p className='text-center max-[530px]:text-xs'>La institucion educativa Casimiro Raul Maestre es un establecimiento de caracter oficial, de modalidad academica, que tiene como mision ofrecer un servicio educativo en los niveles de preescolar, basica, media y educacion por ciclos, cimentando en el modelo Critico-Social con un enfoque pedagogico Humanista-Desarrollista que contribuya al crecimiento personal, familiar y social de la comunidad.</p>
            </div>
          </article>
          <article className='w-unit-7xl flex flex-col max-tablet:m-10'>
            <main>
              <h1 className='font-extrabold text-4xl text-center max-[530px]:text-lg'>Nuestra Vision</h1>
            </main>
            <picture>
              <Image src='./startup-flatline-0066b.svg' alt='Image Vission' width={600} height={600}></Image>
            </picture>
            <div>
              <p className='text-center max-[530px]:text-xs'>La institucion educativa Casimiro Raul Maestre, para el año 2020 sera reconocida por su curriculo incluyente, impactando en la comunidad con una educacion de calidad. Formando lideres emprendedores con espiritu investigativo y dinamico generadores de cambios positivos en su contexto.</p>
            </div>
          </article>
        </section>
        <section className='flex items-center justify-evenly flex-wrap mt-20'>
          <article className='grid place-items-center'>
            <h1 className='font-bold text-4xl max-[530px]:text-lg'>La Calidad Es Nuestro Reto</h1>
            <picture>
              <Image src='./quality-check-flatline.svg' alt='Image Quality' width={400} height={400}></Image>
            </picture>
          </article>
          <article className='grid grid-cols-2 text-violet-800 max-[530px]:text-xs'>
            <div>
              <h4>+ Calidad</h4>
              <h4>+ Oportunidad</h4>
              <h4>+ Preparacion</h4>
              <h4>+ Capacitacion</h4>
            </div>
            <div>
              <h4>+ Responsabilidad</h4>
              <h4>+ Cultura</h4>
              <h4>+ Retos Personales</h4>
              <h4>+ Metas Cumplidas</h4>
            </div>
          </article>
        </section>
      </section>
    </Fragment>
  );
}