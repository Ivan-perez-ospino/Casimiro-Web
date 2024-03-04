'use client';


import { Fragment } from 'react';
import { Link, Button } from '@nextui-org/react';


export default function MicrobitLesson4(): JSX.Element {
  return (
    <Fragment>
      <div className='my-20 px-10 max-[530px]:px-5'>
        <section className='flex itmes-center justify-center'>
          <main className='grid gap-y-6 w-unit-9xl'>
            <div>
              <h1 className='font-extrabold text-6xl text-center max-[455px]:text-4xl max-[396px]:text-xl'>Explora El Modulo Basico</h1>
            </div>


            <p className='max-[450px]:text-sm'>Esta vez exploraremos cada uno de los bloques que se encuentran en el modulo basico, e iremos creando programas con cada uno de ellos el primer bloque es mostrar numero. La funcion de este bloque es sencilla al igual que mostrar cadena la unica diferencia es que en ves de mostrar un texto en comillas, muestra un numero. En el video se puede observar como se arrastra el bloque y muestra un numero al iniciar, y luego lo ejecuta en el simulador.</p>
            <video width='640' height='360' controls>
              <source src='/microbit-video-one.mp4' type='video/mp4' />
            </video>


            <p className='max-[450px]:text-sm'>La funcion de este bloque es sencilla al igual que mostrar cadena la unica diferencia es que en vez de mostrar un texto en comillas, muestra un numero. En el video se puede observar como se arrastra el bloque y muestra un numero al iniciar, y luego lo ejecuta en el simulador:</p>
            <video width='640' height='360' controls>
              <source src='/microbit-video-three.mp4' type='video/mp4' />
            </video>

            <p className='max-[450px]:text-sm'>Despues de haber hecho lo anterior, seguimos con el bloque mostrar LEDs, este bloque tiene laa funcion de encendar los LEDs de la micro:bit dependiendo de cuales marques en el bloque como se observa en el siguiente video:</p>
            <video width='640' height='360' controls>
              <source src='/microbit-video-four.mp4' type='video/mp4' />
            </video>


            <p className='max-[450px]:text-sm'>Despues del bloque mostrar LEDs sigue el bloque mostrar icono, su funcion es parecida a la del bloque mostrar LEDs la diferencia es que en vez de crear vas a elegir iconos que ya esten en el bloque mira el siguiente ejemplo:</p>
            <video width='640' height='360' controls>
              <source src='/microbit-video-five.mp4' type='video/mp4' />
            </video>


            <p className='max-[450px]:text-sm'>El siguiente bloque es mostrar cadena, este ya lo debes de tener dominado con el primer programa que hiciste, luego de mostrar cadena tenemos el bloque borrar pantalla. La funcion de este es borrar la todos los LEDs encendidos mientras se ejecuta un programa su mismo nombre lo indica, borrar la pantalla mira el siguiente ejemplo:</p>
            <video width='640' height='360' controls>
              <source src='/microbit-video-six.mp4' type='video/mp4' />
            </video>


            <p className='max-[450px]:text-sm'>Luego tenemos el bloque para siempre y al iniciar, son bloques muy basicos que se explicaron al principio del curso. Seguido de esos bloques tenemos el bloque pausa, la funcion de este es hacer una pausa intermedia en cualquier programa. Hay que tener en cuenta que la unidad que usa el bloque pausa es en milimetros por lo tanto si queremos que la pausa sea de 1 segundo debemos colocar el numero 1000, en el siguiente ejemplo se observa como muestra una cadena, borra la pantalla por una pausa de 4 segundos y vuelve a mostrar otra cadena de texto:</p>
            <video width='640' height='360' controls>
              <source src='/microbit-video-seven.mp4' type='video/mp4' />
            </video>


            <p className='max-[450px]:text-sm'>Y por ultimo tenemos el bloque mostrar flecha, este bloque muestra una flecha dependiendo en la direccion que la apuntes en el bloque. Observa el siguiente ejemplo:</p>
            <video width='640' height='360' controls>
              <source src='/microbit-video-eight.mp4' type='video/mp4' />
            </video>


            <p>¡Listo! Hemos terminado por hoy, recuerda poner en practica todo lo aprendido hoy y espero que te haya servido la explicacion y ejemplos sobre los bloques del modulo basico.</p>
          </main>
        </section>


        <div className='flex items-center justify-between mt-10'>
          <Link href='/CasimiroLearn/LearnMicrobit/MicrobitLesson3' className=''>
            <Button color='primary' radius='none' className='text-xl p-6 max-[396px]:w-full min-[455px]:text-lg max-[455px]:py-2 max-[396px]:text-small' variant='ghost'>Anterior</Button>
          </Link>
          <Link href='/CasimiroLearn/LearnMicrobit/MicrobitLesson5' className=''>
            <Button color='primary' radius='none' className='text-xl p-6 max-[396px]:w-full min-[455px]:text-lg max-[455px]:py-2 max-[396px]:text-small'>Siguiente</Button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
}