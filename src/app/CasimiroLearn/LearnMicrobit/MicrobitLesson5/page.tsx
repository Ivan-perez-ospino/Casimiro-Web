'use client';


import { Fragment } from 'react';
import { Image, Link, Button } from '@nextui-org/react';


export default function MicrobitLesson5(): JSX.Element {
  return (
    <Fragment>
      <div className='my-20 px-10 max-[530px]:px-5'>
        <section className='flex itmes-center justify-center'>
          <main className='grid gap-y-6 w-unit-9xl'>
            <div>
              <h1 className='font-extrabold text-6xl text-center max-[455px]:text-4xl max-[396px]:text-xl'>Explora El Modulo Entrada</h1>
            </div>


            <p className='max-[450px]:text-sm'>Esta vez vas a explorar el modulo entrada, en el que se encuentra todo lo que tiene que ver con sensores que trae la microbit. El primer bloque que se puede encontrar es, al presionar el boton, puedes observar que en la parte izquierda y derecha del simulador de la microbit hay dos botones, bueno mediante ese bloque puedes definir si alguno de los dos o los dos estan presionados y ejecutar algo de codigo como mostrar una cadena de texto o un numero. Observa el siguiente ejemplo:</p>
            <video width='640' height='360' controls>
              <source src='/microbit-video-nine.mp4' type='video/mp4' />
            </video>


            <p className='max-[450px]:text-sm'>Luego sigue el bloque <q>si esta agitado</q> la funcion de este bloque es detectar si la micro:bit de alguna manera esta agitada si esto es verdadero vas a ejecutar codigo. Observa el siguiente ejemplo:</p>
            <video width='640' height='360' controls>
              <source src='/microbit-video-ten.mp4' type='video/mp4' />
            </video>

            <p className='max-[450px]:text-sm'>Sigue el bloque <q>al presionarse el pin</q> La funcion de este bloque es que al sentir tacto con el algun pin de la microbit va a ejecutar codigo. Observa el siguiente ejemplo:</p>
            <video width='640' height='360' controls>
              <source src='/microbit-video-eleven.mp4' type='video/mp4' />
            </video>


            <p className='max-[450px]:text-sm'>Luego sigue un conjunto de bloques, estos los vas a omitir hasta que lleguemos a la clase en donde se explican todos. Estos son los bloques:</p>
            <picture className='flex items-center justify-center'>
              <Image src='/microbit-capture-four.png' alt='Image Makecode Capture' radius='none' width={900} height={900} />
            </picture>


            <p className='max-[450px]:text-sm'>Seguido del conjunto de bloques anteriores tenemos el bloque que ya esta disponible solo y unicamente para la V2 de la microbit y es el bloque <q>al detectar el sonido alto o silencioso</q>. La funcion de este bloque es detectar el nivel de sonido que esta presente en un area determinada o en donde se encuentre la tarjeta microbit, si lo piesas bien, programar con la microbit es algo muy sencillo y facil.</p>
            <video width='640' height='360' controls>
              <source src='/microbit-video-twelve.mp4' type='video/mp4' />
            </video>


            <p className='max-[450px]:text-sm'>Luego sigue el bloque <q>al pulsar, tocar, soltar o mantener pulsado el logotipo</q> esta funcion establece que al hacer cualquier tipo de tacto con el logotipo ejecutara codigo. Ejemplo:</p>
            <video width='640' height='360' controls>
              <source src='/microbit-video-thirteen.mp4' type='video/mp4' />
            </video>


            <p>Excelente, has explorado el modulo entrada, y por lo tanto hasta aqui llegaste, felicidades por leer todo el curso basico de la microbit recuerda practicar lo aprendido con proyectos pequeños. La programacion no se aprende leyendo sino practicando. ¡Suerte!</p>
            <p>Se estara trabajando en el curso intermedio.</p>
          </main>
        </section>


        <div className='flex items-center justify-between mt-10'>
          <Link href='/CasimiroLearn/LearnMicrobit/MicrobitLesson4' className=''>
            <Button color='primary' radius='none' className='text-xl p-6 max-[396px]:w-full min-[455px]:text-lg max-[455px]:py-2 max-[396px]:text-small' variant='ghost'>Anterior</Button>
          </Link>
          <Link href='/CasimiroLearn/LearnMicrobit/MicrobitFinalLesson' className=''>
            <Button color='primary' radius='none' className='text-xl p-6 max-[396px]:w-full min-[455px]:text-lg max-[455px]:py-2 max-[396px]:text-small'>Siguiente</Button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
}