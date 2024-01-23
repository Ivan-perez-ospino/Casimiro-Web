'use client';


import { Fragment } from 'react';
import { Image, Link, Button } from '@nextui-org/react';


export default function MicrobitLesson2(): JSX.Element {
  return (
    <Fragment>
      <div className='my-20 px-10 max-[530px]:px-5'>
        <section className='flex itmes-center justify-center'>
          <main className='grid gap-y-6 w-unit-9xl'>
            <div>
              <h1 className='font-extrabold text-6xl text-center max-[455px]:text-4xl max-[396px]:text-xl'>Makecode: Editor De Codigo De La Microbit</h1>
            </div>


            <p className='max-[450px]:text-sm'>Makecode te permitirá ejecutar codigo que escribas ya sea en bloques, python o javascript. Esta herramienta esta disponible en la web, movil y escritorio, y ademas funciona con o sin internet. Al ingresar a Makecode te aparecerá la siguiente interfaz:</p>
            <picture className='flex items-center justify-center'>
              <Image src='/microbit-capture-one.png' alt='Image Makecode Capture' radius='none' width={900} height={900} />
            </picture>


            <p className='max-[450px]:text-sm'>Puedes observar que es la seccion para crear proyectos, y guardalos.Y como podras ver en la parte inferior estan los proyectos que aporta la comunidad. Ya sabiendo esto continuacion crea un proyecto con el nombre: microbit-practice (microbit practica).</p>
            <picture className='flex items-center justify-center'>
              <Image src='/microbit-capture-Two.png' alt='Image Makecode Capture' radius='none' width={900} height={900} />
            </picture>


            <p className='max-[450px]:text-sm'>Luego darás click en create y ya tendrias tu primer proyecto creado, en la siguiente clase aprenderas como crear tu primer programa en la microbit.</p>
          </main>
        </section>


        <div className='flex items-center justify-between mt-10'>
          <Link href='/CasimiroLearn/LearnMicrobit' className=''>
            <Button color='primary' radius='none' className='text-xl p-6 max-[396px]:w-full min-[455px]:text-lg max-[455px]:py-2 max-[396px]:text-small' variant='ghost'>Anterior</Button>
          </Link>
          <Link href='/CasimiroLearn/LearnMicrobit/MicrobitLesson3' className=''>
            <Button color='primary' radius='none' className='text-xl p-6 max-[396px]:w-full min-[455px]:text-lg max-[455px]:py-2 max-[396px]:text-small'>Siguiente</Button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
}