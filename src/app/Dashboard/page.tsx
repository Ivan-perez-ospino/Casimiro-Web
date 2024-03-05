'use client';


import { Fragment } from 'react';
import NavBarDashboard from '../components/NavbarDasboard';
import { Image } from '@nextui-org/react';


export default function DashboardStudent(): JSX.Element {
  return (
    <Fragment>
      <NavBarDashboard />
      <div className='my-20'>
        <main>
          <div>
            <h1 className='font-extrabold text-6xl text-center max-[455px]:text-4xl max-[396px]:text-xl'>Panel De Control Para Usuarios</h1>
          </div>
          <picture className='flex items-center justify-evenly max-tablet:justify-center'>
            <Image src='./report-analysis-flatline-d148b.svg' alt='Image Report Analysis' width={500} height={500} />
            <Image src='./creative-process-flatline (1).svg' alt='Image Creative Process' className='max-tablet:hidden' width={500} height={500} />
          </picture>
        </main>


        <section className='grid grid-cols-2 place-items-center place-content-center max-tablet:grid-cols-1 my-20 bg-blue-800 mt-10 text-white px-6 py-10'>
          <picture>
            <Image src='./calendar-flatline.svg' alt='Image Great Idea' width={500} height={500} />
          </picture>
          <div className='flex items-center justify-center'>
            <p className='text-lg text-center max-[450px]:text-sm'>Tienes la opurtunidad de revisar tu horario de clases semanal, para saber que asignaturas o materias te tocaran ese dia.</p>
          </div>
        </section>


        <section className='grid grid-cols-2 place-items-center place-content-center max-tablet:grid-cols-1 my-20 px-6'>
          <picture className='hidden max-tablet:flex'>
            <Image src='./great-idea-flatline.svg' alt='Image Great Idea' width={500} height={500} />
          </picture>
          <div className='flex items-center justify-center'>
            <p className='text-lg text-center max-[450px]:text-sm'>Conoce la gran variedad de recursos didacticos y recomendaciones de la internet que te ayudaran a ser el mejor estudiante en nuestra institucion.</p>
          </div>
          <picture className='max-tablet:hidden'>
            <Image src='./great-idea-flatline.svg' alt='Image Great Idea' width={500} height={500} />
          </picture>
        </section>


        <section className='grid grid-cols-2 place-items-center place-content-center max-tablet:grid-cols-1 my-20 bg-blue-800 mt-10 text-white px-6 py-10'>
          <picture>
            <Image src='./knowledge-flatline.svg' alt='Image Knowledge' width={500} height={500} />
          </picture>
          <div className='flex items-center justify-center'>
            <p className='text-lg text-center max-[450px]:text-sm'>Tenemos una seccion reservada con aprendizajes que tal vez sean de tu interes y los puedas leer directamente en nuestra web.</p>
          </div>
        </section>
      </div>
    </Fragment>
  );
}