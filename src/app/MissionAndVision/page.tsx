'use client';

import { Fragment } from 'react';

export default function MissionAndVision(): JSX.Element {
  return (
    <Fragment>
      <section className='flex items-center justify-evenly'>
          <article className='w-auto p-10'>
            <main>
              <h1 className='font-extrabold text-4xl text-center'>Nuestra Mision</h1>
            </main>
            <div>
              <p className='text-center'>La institucion educativa Casimiro Raul Maestre es un establecimiento de caracter oficial, de modalidad academica, que tiene como mision ofrecer un servicio educativo en los niveles de preescolar, basica, media y educacion por ciclos, cimentando en el modelo Critico-Social con un enfoque pedagogico Humanista-Desarrollista que contribuya al crecimiento personal, familiar y social de la comunidad.</p>
            </div>
          </article>
          <article className='w-auto p-10'>
            <main>
              <h1 className='font-extrabold text-4xl text-center'>Nuestra Vision</h1>
            </main>
            <div>
              <p className='text-center'>La institucion educativa Casimiro Raul Maestre, para el año 2020 sera reconocida por su curriculo incluyente, impactando en la comunidad con una educacion de calidad. Formando lideres emprendedores con espiritu investigativo y dinamico generadores de cambios positivos en su contexto.</p>
            </div>
          </article>
        </section>
    </Fragment>
  );
}