'use client';


import { Fragment } from 'react';
import NavBar from '../components/Navbar';
import { Image } from '@nextui-org/react';


export default function MissionAndVision(): JSX.Element {
  return (
    <Fragment>
      <NavBar />
        <div className='my-20 px-10 max-[530px]:px-5'>
          <main className='flex justify-evenly gap-x-5 mt-5 max-tablet:grid max-tablet:place-items-center'>
            <div className='w-2/4 flex flex-col justify-center max-tablet:m-10 max-tablet:w-auto max-tablet:items-center max-tablet:justify-center'>
              <div>
                <h1 className='font-extrabold text-6xl text-center max-[455px]:text-4xl max-[396px]:text-xl'>Nuestra Mision</h1>
              </div>
              <picture>
                <Image src='./startup-flatline.svg' alt='Image Startup' width={600} height={600}></Image>
              </picture>
              <div>
                <p className='text-center max-[530px]:text-sm'>La institucion educativa Casimiro Raul Maestre es un establecimiento de caracter oficial, de modalidad academica, que tiene como mision ofrecer un servicio educativo en los niveles de preescolar, basica, media y educacion por ciclos, cimentando en el modelo Critico-Social con un enfoque pedagogico Humanista-Desarrollista que contribuya al crecimiento personal, familiar y social de la comunidad.</p>
              </div>
            </div>
            <div className='w-2/4 flex flex-col max-tablet:m-10 max-tablet:w-auto  max-tablet:items-center max-tablet:justify-center'>
              <div>
                <h1 className='font-extrabold text-6xl text-center max-[455px]:text-4xl max-[396px]:text-xl'>Nuestra Vision</h1>
              </div>
              <picture>
                <Image src='./startup-flatline-0066b.svg' alt='Image Vission' width={600} height={600}></Image>
              </picture>
              <div>
                <p className='text-center max-[530px]:text-sm'>La institucion educativa Casimiro Raul Maestre, para el año 2020 sera reconocida por su curriculo incluyente, impactando en la comunidad con una educacion de calidad. Formando lideres emprendedores con espiritu investigativo y dinamico generadores de cambios positivos en su contexto.</p>
              </div>
            </div>
          </main>
          <div className='flex items-center justify-evenly flex-wrap my-20'>
            <div className='grid place-items-center'>
              <h1 className='font-bold text-center text-6xl max-[530px]:text-lg'>La Calidad Es Nuestro Reto</h1>
            </div>


            <div className='flex items-center justify-evenly flex-wrap gap-x-5'>
              <picture>
                <Image src='./quality-check-flatline.svg' alt='Image Quality' width={600} height={600}></Image>
              </picture>
              <div className='grid grid-cols-2 text-violet-800 max-[530px]:text-xs'>
              <div>
                <h4>+ Calidad</h4>
                <h4>+ Oportunidad</h4>
                <h4>+ Preparacion</h4>
                <h4>+ Capacitacion</h4>
              </div>
              <div>
                <h4>+ Responsabilidad</h4>
                <h4>+ Cultura</h4>
                <h4>+ Retos Personales</h4>
                <h4>+ Metas Cumplidas</h4>
              </div>
              </div>
            </div>            
          </div>
        </div>
    </Fragment>
  );
}