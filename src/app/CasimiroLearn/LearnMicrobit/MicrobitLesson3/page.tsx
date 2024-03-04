'use client';


import { Fragment } from 'react';
import { Image, Link, Button } from '@nextui-org/react';


export default function MicrobitLesson4(): JSX.Element {
  return (
    <Fragment>
      <div className='my-20 px-10 max-[530px]:px-5'>
        <section className='flex itmes-center justify-center'>
          <main className='grid gap-y-6 w-unit-9xl'>
            <div>
              <h1 className='font-extrabold text-6xl text-center max-[455px]:text-4xl max-[396px]:text-xl'>Crea Tu Primer Programa</h1>
            </div>


            <p className='max-[450px]:text-sm'>Si ya has creado tu primer proyecto con el nombre microbit-practice los siguiente que te aparecerá es una interfaz de usuario en donde vas aprender a programar la microbit.</p>
            <picture className='flex items-center justify-center'>
              <Image src='/microbit-capture-three.png' alt='Image Makecode Capture' radius='none' width={900} height={900} />
            </picture>


            <p className='max-[450px]:text-sm'>Primero que todo en la parte izquierda tenemos un simulador de una microbit para poder probar y ejecutar sensores, leds, motores etc. Y de lado derecho tienes los modulos y dos bloques iniciales que aparecen al comenzar un nuevo proyecto, como ya sabras los primeros bloques que aparecen mostrarán un bloque de codigo al iniciar o para siempre, dependiendo en donde ubiques ese bloque. A continuacion te ubicaras en el modulo basico y arrastraras el bloque mostrar cadena hacia el bloque al iniciar de esta manera:</p>
            <video width='640' height='360' controls>
              <source src='/microbit-video-one.mp4' type='video/mp4' />
            </video>


            <p className='max-[450px]:text-sm'>Despues de haber hecho lo anterior, en mostrar cadena escribe hola + tu nombre, y luego ejecuta el programa con el simulador de la microbit de esta manera:</p>
            <video width='640' height='360' controls>
              <source src='/microbit-video-two.mp4' type='video/mp4' />
            </video>


            <p className='max-[450px]:text-sm'>¡Genial! Ya has logrado crear un programa basico en la microbit, para que practiques un poco mas aqui te dejo un breve ejercicio con lo aprendido. Sigue las instrucciones para poder programarlo:</p>
            <div>
              <h4>1. Crear un nuevo proyecto con cualquier nombre.</h4>
              <h4>2. Mostrar una cadena al iniciar.</h4>
              <h4>3. Mostrar una cadena para siempre.</h4>
              <h4>4. Mostrar una cadena al inicar y otra para siempre.</h4>
            </div>
          </main>
        </section>


        <div className='flex items-center justify-between mt-10'>
          <Link href='/CasimiroLearn/LearnMicrobit/MicrobitLesson2' className=''>
            <Button color='primary' radius='none' className='text-xl p-6 max-[396px]:w-full min-[455px]:text-lg max-[455px]:py-2 max-[396px]:text-small' variant='ghost'>Anterior</Button>
          </Link>
          <Link href='/CasimiroLearn/LearnMicrobit/MicrobitLesson4' className=''>
            <Button color='primary' radius='none' className='text-xl p-6 max-[396px]:w-full min-[455px]:text-lg max-[455px]:py-2 max-[396px]:text-small'>Siguiente</Button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
}