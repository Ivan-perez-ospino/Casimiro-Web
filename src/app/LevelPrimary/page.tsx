'use client';


import { Fragment } from 'react';
import NavBar from '../components/Navbar';


export default function LevelPrimary(): JSX.Element {
  return (
    <Fragment>
      <NavBar />
      <div className='my-20 px-10 max-[530px]:px-5'>
        <main> 
          <h1 className='font-extrabold text-6xl text-center max-tablet:text-4xl'>Niveles Educativos De Primaria</h1>
          <section>
            <div className='my-10'>
              <h4 className='font-bold text-2xl text-center max-tablet:text-xl'>Niveles de las sedes educativas daniel tapias pico de mañana y tarde y de la institucion casimiro raul maestre de mañana:</h4>
              <ul className='flex flex-wrap gap-10 items-center justify-evenly my-10'>
                <li>Transicion</li>
                <li>Preescolar</li>
                <li>Primero</li>
                <li>Segundo</li>
                <li>Tercero</li>
                <li>Cuarto</li>
                <li>Quinto</li>
              </ul>
            </div>
          </section>
        </main>
      </div>
    </Fragment>
  );
}