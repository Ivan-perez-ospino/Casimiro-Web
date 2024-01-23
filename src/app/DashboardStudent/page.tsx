'use client';


import { Fragment } from 'react';
import { Image } from '@nextui-org/react';
import NavBarDashboardStudent from '../components/NavBarDasboardStudents';


export default function DashboardStudent(): JSX.Element {
  return (
    <Fragment>
      <NavBarDashboardStudent />
      <div className='my-20 px-10 max-[530px]:px-5'>
        <main>
          <div>
            <h1 className='font-extrabold text-6xl text-center max-[455px]:text-4xl max-[396px]:text-xl'>Panel De Control Para Estudiantes</h1>
          </div>
          <picture className='flex items-center justify-evenly max-tablet:justify-center'>
            <Image src='./report-analysis-flatline-d148b.svg' alt='Image Report Analysis' width={500} height={500} />
            <Image src='./creative-process-flatline (1).svg' alt='Image Creative Process' className='max-tablet:hidden' width={500} height={500} />
          </picture>
        </main>


        <section className='grid grid-cols-2 place-items-center place-content-center max-tablet:grid-cols-1 my-20'>
          <picture>
            <Image src='./calendar-flatline.svg' alt='Image Great Idea' width={500} height={500} />
          </picture>
          <div>
            <p className='text-lg text-center max-[450px]:text-sm'>Puedes revisar tu horario con tan solo ingresar tu numero de grado y verificar que asignaturas te tocaran al dia siguiente.</p>
          </div>
        </section>


        <section className='grid grid-cols-2 place-items-center place-content-center max-tablet:grid-cols-1 my-20'>
          <picture className='hidden max-tablet:flex'>
            <Image src='./great-idea-flatline.svg' alt='Image Great Idea' width={500} height={500} />
          </picture>
          <div>
            <p className='text-lg text-center max-[450px]:text-sm'>Conoce la gran variedad de recursos didacticos y recomendaciones de la internet que te ayudaran a ser el mejor estudiante en nuestra institucion.</p>
          </div>
          <picture className='max-tablet:hidden'>
            <Image src='./great-idea-flatline.svg' alt='Image Great Idea' width={500} height={500} />
          </picture>
        </section>


        <section className='grid grid-cols-2 place-items-center place-content-center max-tablet:grid-cols-1 my-20'>
          <picture>
            <Image src='./knowledge-flatline.svg' alt='Image Knowledge' width={500} height={500} />
          </picture>
          <div>
            <p className='text-lg text-center max-[450px]:text-sm'>Tenemos una seccion reservada con aprendizajes que tal vez sean de tu interes y los puedas leer directamente en nuestra web.</p>
          </div>
        </section>
      </div>
    </Fragment>
  );
}