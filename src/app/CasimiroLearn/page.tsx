'use client';


import { Fragment } from 'react';
import NavBarDashboardStudent from '../components/NavBarDasboardStudents';
import { Image, Card, CardHeader, CardBody, Link } from '@nextui-org/react';


export default function CasimiroLearn(): JSX.Element {
  return (
    <Fragment>
      <NavBarDashboardStudent />
      <div className='my-20 px-10 max-[530px]:px-5'>
        <main className='grid place-items-center place-content-between grid-cols-2 max-tablet:grid-cols-1 my-20'>
          <div>
            <h1 className='font-extrabold text-6xl text-center max-[455px]:text-4xl max-[396px]:text-xl'>Casimiro Aprende</h1>
            <p className='text-center max-[450px]:text-sm'>Esta es la seccion de aprendizaje en la cual podras escoger entre los distintos temas que te pueden llegar a interesar.</p>
          </div>
          <picture>
            <Image src='./book-lover-flatline.svg' alt='Image Book Lover' width={500} height={500} />
          </picture>
        </main>
        <section className='grid gap-5 place-items-center place-content-between grid-cols-3 max-tablet:grid-cols-1 my-10'>
          <Link href='CasimiroLearn/LearnMicrobit'>
            <Card radius='none' shadow='sm' isPressable>
              <CardHeader className='flex items-center justify-center'>
                <h1 className='font-extrabold text-4xl text-center max-[455px]:text-2xl max-[396px]:text-lg'>Curso Basico De Programacion Con Micro:bit</h1>
              </CardHeader>
              <CardBody>
                <Image src='../microbit-flatline.svg' alt='Image Microbit Logo Flatline' width={500} height={500} />
              </CardBody>
            </Card>
          </Link>


          {/* <Link href=''>
            <Card radius='none' shadow='sm' isPressable>
              <CardHeader className='flex items-center justify-center'>
                <h1 className='font-extrabold text-4xl text-center max-[455px]:text-2xl max-[396px]:text-lg'>Bases De Datos Con Firebase</h1>
              </CardHeader>
              <CardBody>
                <Image src='../online-storage-flatline.svg' alt='Image Data Process' width={500} height={500} />
              </CardBody>
            </Card>
          </Link> */}
        </section>
      </div>
    </Fragment>
  );
} 