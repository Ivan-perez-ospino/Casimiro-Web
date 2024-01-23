'use client';


import { Fragment } from 'react';
import { Image, Link, Button } from '@nextui-org/react';


export default function LearnMicrobit():JSX.Element {
  return (
    <Fragment>
      <span>
        <Link href='/CasimiroLearn' className='text-black hover:text-blue-600 m-4'>
          <i className='fi fi-rr-arrow-left flex items-center justify-center mr-2 text-lg'></i> Regresar
        </Link>
      </span>
      <div className='my-20 px-10 max-[530px]:px-5'>
        <main className='grid place-items-center place-content-between grid-cols-2 max-tablet:grid-cols-1'>
          <div>
            <h1 className='font-extrabold text-6xl text-center max-[455px]:text-4xl max-[396px]:text-xl'>¿Que Es La Micro:bit?</h1>
            <picture className='flex items-center justify-center tablet:hidden'>
              <Image src='../microbit-logo.png' alt='Image Microbit Logo' width={500} height={500} />
            </picture>
            <p className='text-center max-[450px]:text-sm max-tablet:text-left max-tablet:mb-6'>La micro:bit es una pequeña computadora de placa única diseñada para la educación en programación y la promoción de la informática en la enseñanza primaria y secundaria. Fue desarrollada por la BBC, en colaboración con varias organizaciones tecnológicas y educativas, con el objetivo de fomentar el aprendizaje de habilidades de programación y electrónica de manera accesible y divertida.</p>
          </div>
          <picture className='max-tablet:hidden'>
            <Image src='../microbit-logo.png' alt='Image Microbit Logo' width={500} height={500} />
          </picture>
        </main>


        <section className='grid gap-5 place-items-center place-content-between grid-cols-2 max-tablet:grid-cols-1'>
          <div>
            <p className='max-[450px]:text-sm'>La micro:bit cuenta con una variedad de sensores integrados, como acelerómetro, brújula y sensor de luz, así como LEDs y conectividad inalámbrica Bluetooth. Está equipada con un microcontrolador ARM Cortex-M0 y se puede programar utilizando varios lenguajes, incluyendo bloques visuales, Python y JavaScript, lo que facilita que estudiantes de diferentes niveles de habilidad se involucren en la programación.</p>
          </div>
          <div>
            <p className='max-[450px]:text-sm'>Este dispositivo se utiliza comúnmente en entornos educativos para enseñar conceptos fundamentales de ciencias de la computación, electrónica y programación de una manera interactiva y práctica. Los estudiantes pueden crear proyectos y experimentar con la micro:bit para desarrollar habilidades creativas y resolver problemas de manera colaborativa, promoviendo así un enfoque práctico en el aprendizaje de la tecnología.</p>
          </div>
        </section>


        <div className='flex items-center justify-end mt-10'>
          <Link href='/CasimiroLearn/LearnMicrobit/MicrobitLesson2' className=''>
            <Button color='primary' radius='none' className='text-xl p-6 max-[396px]:w-full min-[455px]:text-lg max-[455px]:py-2 max-[396px]:text-small'>Siguiente</Button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
}