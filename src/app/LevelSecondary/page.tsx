import { Fragment } from 'react';

export default function LevelSecondary(): JSX.Element {
  return (
    <Fragment>
      <div className='my-20 px-10 max-[530px]:px-5'>
        <main>
          <h1 className='font-extrabold text-6xl text-center max-tablet:text-4xl'>Niveles Educativos De Basica Secundaria Y Media</h1>
          <section>
              <div className='my-10'>
              <h4 className='font-bold text-2xl text-center max-tablet:text-xl'>Niveles Educativos De La Basica Secundaria:</h4>
                <ul className='flex flex-wrap gap-10 items-center justify-evenly my-10'>
                  <li>1. Sexto</li>
                  <li>2. Septimo</li>
                  <li>3. Octavo</li>
                  <li>4. Noveno</li>
                </ul>
              </div>
              <div className='my-10'>
                <h4 className='font-bold text-2xl text-center max-tablet:text-xl'>Niveles Educativos De Media Secundaria:</h4>
                <ul className='flex flex-wrap gap-10 items-center justify-evenly my-10'>
                  <li>5. Decimo</li>
                  <li>6. Once</li>
                </ul>
              </div>
          </section>
        </main>
      </div>
    </Fragment>
  );
}