import { Fragment } from 'react';
import NavBar from '../components/NavBar';

export default function LevelNightCicles(): JSX.Element {

  
  return (
    <Fragment>
      <NavBar />
      <div className='my-20 px-10 max-[530px]:px-5'>
        <main>
          <h1 className='font-extrabold text-6xl text-center max-[455px]:text-4xl max-[396px]:text-xl'>Niveles Educativos De Formacion Por Ciclos</h1>
          <section> 
            <div className='my-10'>
              <h4 className='font-bold text-2xl text-center max-tablet:text-xl'>Niveles Educativos De Ciclos Nocturnos</h4>
              <ul className='flex flex-wrap gap-10 items-center justify-evenly my-10'>
                <li>1. Ciclo 23 (6° y 7°)</li>
                <li>2. Ciclo 24 (8° y 9°)</li>
                <li>3. Ciclo 25 (10°)</li>
              </ul>
            </div>
          </section>
        </main>
      </div>
    </Fragment>
  );
}