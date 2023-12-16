import { Fragment } from 'react';

export default function LevelPrimary(): JSX.Element {
  return (
    <Fragment>
      <div className='my-20 px-10 max-[530px]:px-5'>
        <main> 
          <h1 className='font-extrabold text-6xl text-center max-tablet:text-4xl'>Niveles Educativos De Primaria</h1>
          <section>
            <div className='my-10'>
              <h4 className='font-bold text-2xl text-center max-tablet:text-xl'>Niveles de las sedes educativas daniel tapias pico de mañana y tarde y de la institucion casimiro raul maestre de mañana:</h4>
              <ul className='flex flex-wrap gap-10 items-center justify-evenly my-10'>
                <li>1. Transicion</li>
                <li>2. Preescolar</li>
                <li>3. Primero</li>
                <li>4. Segundo</li>
                <li>5. Tercero</li>
                <li>6. Cuarto</li>
                <li>7. Quinto</li>
              </ul>
            </div>
          </section>
        </main>
      </div>
    </Fragment>
  );
}