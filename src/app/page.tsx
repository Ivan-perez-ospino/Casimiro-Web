'use client';

import React from 'react';
import { Fragment } from 'react';
import Image from 'next/image';
import { Button, Card, CardHeader, CardBody } from '@nextui-org/react';
import { NextUIProvider } from '@nextui-org/react';

export default function HomePage(): JSX.Element {
  return (
    <Fragment>
      <NextUIProvider>
        
        <div className='flex flex-wrap items-center justify-evenly h-screen max-tablet:h-auto max-tablet:my-10 max-[530px]:grid max-[530px]:h-screen'>
          <main className='w-96 max-tablet:w-auto max-tablet:mx-2'>
            <h1 className='font-extrabold text-center text-4xl max-[530px]:text-xl'>Bienvenido a la pagina web institucional de la escuela Casimiro Raul Maestre</h1>
          </main>
          <picture>
            <Image src='./world-wide-web-flatline.svg' alt='Image Word Wide Web' width={500} height={500}></Image>
          </picture>
          <div className='hidden max-[530px]:flex max-[530px]:justify-evenly'>
            <Button color='secondary' variant='shadow' suppressHydrationWarning>Iniciar Sesion</Button>
            <Button color='secondary' variant='shadow' suppressHydrationWarning>Registrarse</Button>
          </div>
        </div>
        <div className='flex flex-wrap items-center justify-evenly h-screen max-tablet:h-auto max-tablet:my-20 max-tablet:flex-wrap-reverse'>
          <picture>
            <Image src='./user-interface-flatline.svg' alt='Image Interface' width={500} height={500}></Image>
          </picture>
          <h1 className='font-bold text-3xl text-center w-2/4 max-tablet:w-auto max-tablet:mx-2 max-[530px]:text-xl'>Sientete comodo con nuestra interfaz de usuario accesible y flexible, que cuenta con variadas funciones</h1>
        </div>
        <section className='bg-rose-500 py-10'>
          <main>
            <h1 className='font-bold text-4xl text-center text-white max-tablet:mx-2 max-[530px]:text-xl'>Nuestra Web Tiene En Cuenta Lo Siguiente</h1>
          </main>
          <section className='grid grid-cols-4 gap-5 mx-5 my-5 max-tablet:grid-cols-2 max-[500px]:grid-cols-1'>
            <Card isPressable>
              <CardHeader className='flex items-center justify-center'>
                <h1 className='font-bold text-lg text-center'>Informacion Institucional</h1>
              </CardHeader>
              <CardBody className='flex items-center justify-center'>
                <picture className='flex items-center justify-center'>
                  <Image src='./mind-map-flatline.svg' alt='Image Mind Map' width={300} height={300}></Image>
                </picture>
                <p className='text-center'>La web proporciona informacion sobre la escuela, tales como su historia, mision y vision</p>
              </CardBody>
            </Card>
            <Card isPressable>
              <CardHeader className='flex items-center justify-center'>
                <h1 className='font-bold text-lg text-center'>Recursos Interactivos</h1>
              </CardHeader>
              <CardBody className='flex items-center justify-center'>
                <picture className='flex items-center justify-center'>
                  <Image src='./analytics-process-flatline.svg' alt='Image Analytics Process' width={300} height={300}></Image>
                </picture>
                <p className='text-center'>La web proporciona recursos gratuitos y didacticos a la comunidad casimirista</p>
              </CardBody>
            </Card>
            <Card isPressable>
              <CardHeader className='flex items-center justify-center'>
                <h1 className='font-bold text-xl text-center'>Calendario Y Horario</h1>
              </CardHeader>
              <CardBody className='flex items-center justify-center'>
                <picture className='flex items-center justify-center'>
                  <Image src='./calendar-outline.svg' alt='Image Calendar' width={300} height={300}></Image>
                </picture>
                <p className='text-center'>Te brindamos un calendario de eventos, examenes, etc</p>
              </CardBody>
            </Card>
            <Card isPressable>
              <CardHeader className='flex items-center justify-center'>
                <h1 className='font-bold text-xl text-center'>Actualizaciones Y Novedades</h1>
              </CardHeader>
              <CardBody className='flex items-center justify-center'>
                <picture className='flex items-center justify-center'>
                  <Image src='./start-up-flatline.svg' alt='Image Startup' width={300} height={300}></Image>
                </picture>
                <p className='text-center'>Te mantendremos informado de cada novedad ya que se vienen cosas grandes, ¡esperalas con ansias!</p>
              </CardBody>
            </Card>
          </section>
        </section>
        <section className='flex flex-wrap items-center justify-evenly h-screen max-tablet:h-auto max-tablet:my-20'>
          <h1 className='font-bold text-3xl text-center w-2/4 max-tablet:w-auto max-tablet:mx-2 max-[530px]:text-xl'>Aqui podras encontrar el calendario de eventos, dias de examenes, actos civicos etc</h1>
          <picture>
            <Image src='./calendar-flatline.svg' alt='Image Calendar' width={500} height={500}></Image>
          </picture>
        </section>
        <section className='flex flex-wrap items-center justify-evenly h-screen max-tablet:h-auto max-tablet:my-20 max-tablet:flex-wrap-reverse'>
          <picture>
            <Image src='./marketing-flatline-eda0a.svg' alt='Image Social Network' width={500} height={500}></Image>
          </picture>
          <h1 className='font-bold text-3xl text-center w-2/4 max-tablet:w-auto max-tablet:mx-2 max-[530px]:text-xl'>Unete y se parte del blog escolar donde los docentes se suman a aportar publicaciones de eventos o dias especiales</h1>
        </section>
      </NextUIProvider>
    </Fragment>
  );
}
