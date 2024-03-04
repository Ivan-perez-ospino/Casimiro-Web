'use client';


import { Fragment } from 'react';
import NavBar from '../components/Navbar';
import { Image } from '@nextui-org/react';


export default function ProfileCasimirista(): JSX.Element {
  return (
    <Fragment>
      <NavBar />
      <div className='my-20 px-10 max-[530px]:px-5'>
        <section className='grid grid-cols-2 max-tablet:grid-cols-1 mt-10 gap-x-5'>
          <main>
            <div>
              <h1 className='font-extrabold text-6xl text-center max-[455px]:text-4xl max-[396px]:text-xl'>Perfil Del Estudiante Casimirista</h1>
              <picture className='flex items-center justify-center'>
                <Image src='/personal-data-flatline.svg' alt='Image Personal Data' width={500} height={500}></Image>
              </picture>
              <p className='text-center max-[350px]:text-sm'>La Institución Educativa Casimiro Raúl Maestre, trabajará permanentemente por la formación de una persona que desarrolle equilibradamente sus conocimientos, aptitudes y destrezas por medio de un permanente proceso de aprendizaje y maduración que garantice su desempeño competentemente integrando lo académico, lo socio afectivo, y sus valores como también el respeto por sus semejantes y su cultura, en paralelo con la conservación del medio ambiente.</p>
            </div>
            <picture className='max-tablet:hidden flex items-center justify-center mt-40'>
              <Image src='/personal-data-flatline-224f0.svg' alt='Image Personal Data' width={900} height={900}></Image>
            </picture>
          </main>
          <article className='max-tablet:mt-10'>
            <picture className='flex items-center justify-center'>
              <Image src='/IMAGEN ESTUDIANTES CRM.webp' alt='Image Students' width={500} height={500} radius='md'></Image>
            </picture>
            <div className='flex flex-col text-center my-10'>
              <div>
                <main>
                  <h1 className='font-bold text-3xl my-2 max-[530px]:text-xl'>Perfil De Los Estudiantes De Preescolar</h1>
                </main>
                <p className='max-[350px]:text-sm'>Un estudiante que desarrolle las habilidades de observar y percibir las diferencias de su entorno, identifique, cuide su cuerpo y el de los demás. Conozca, respete y practique las normas de convivencia y cultura ciudadana. </p>
              </div>
              <div>
                <main>
                  <h1 className='font-bold text-3xl my-2 max-[530px]:text-xl'>Perfil De Los Estudiantes De Grados 1º  A  3º De Basica Primaria</h1>
                </main>
                <p className='max-[350px]:text-sm'>Un estudiante respetuoso y ordenado; que identifique, diferencie y relacione sobre eventos en diferentes saberes, aplicándolos en su interacción con la naturaleza y sus semejantes.</p>
              </div>
              <div>
                <main>
                  <h1 className='font-bold text-3xl my-2 max-[530px]:text-xl'>Perfil De Los Estudiantes De Grados 4° A 5° De Basica Primaria</h1>
                </main>
                <p className='max-[350px]:text-sm'>Un estudiante que tenga una actitud positiva frente a su proceso de aprendizaje, de tal manera que desarrolle sus aptitudes, intereses y destrezas en actividades cooperativas y colaborativas transformador de su contexto.</p>
              </div>
              <div>
                <main>
                  <h1 className='font-bold text-3xl my-2 max-[530px]:text-xl'>Perfil De Los Estudiantes De Grados 6° A 7° De Basica Secundaria</h1>
                </main>
                <p className='max-[350px]:text-sm'>Un estudiante que reconoce sus potencialidades, diferencias, y limitaciones; manifieste interés por fortalecer su personalidad y ejercer su autonomía, mostrando conducta de autocontrol y autorregulación en sus frustraciones; respetuoso con sus padres, acudientes, directivos, docentes, compañeros y todos los miembros que conforman la comunidad educativa; igualmente vivencie los valores de puntualidad, responsabilidad, honestidad y sentido de pertenencia.</p>
              </div>
              <div>
                <main>
                  <h1 className='font-bold text-3xl my-2 max-[530px]:text-xl'>Perfil De Los Estudiantes De Grados 8° A 9° De Basica Secundaria</h1>
                </main>
                <p className='max-[350px]:text-sm'>Un estudiante con sentido de pertenencia hacia su institución; comprometido con su desarrollo personal y colectivo; razonable, objetivo frente al desempeño de saberes; defensor, promotor de los deberes y derechos humanos que le permitan intervenir positivamente en su contexto.</p>
              </div>
              <div>
                <main>
                  <h1 className='font-bold text-3xl my-2 max-[530px]:text-xl'>Perfil De Los Estudiantes De Grados 10° A 11° De Basica Secundaria</h1>
                </main>
                <p className='max-[350px]:text-sm'>Un estudiante con liderazgo y proyección en el campo cultural, social, laboral y profesional, capaz de interpretar, comprender, transformar la realidad, con autonomía en la vivencia de sus creencias, imágenes sociales y tradiciones culturales. Forjador de su proyecto de vida.</p>
              </div>
            </div>
          </article>
        </section>
      </div>
    </Fragment>
  );
}