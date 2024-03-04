'use client';


import { Fragment } from 'react';
import NavBar from '../components/Navbar';
import { Image } from '@nextui-org/react';


export default function InstituyionalCulture(): JSX.Element {
  return (
    <Fragment>
      <NavBar />
        <div className='my-20 px-10 max-[530px]:px-5'>
          <div>
            <main className='flex flex-wrap items-center justify-center my-8'>
              <div>
                <h1 className='font-extrabold text-6xl text-center max-[455px]:text-4xl max-[396px]:text-xl'>Cultura Institucional</h1>
              </div>
            </main>
          </div>
          <div className='grid grid-cols-2 max-tablet:grid-cols-1'>
            <div className='max-tablet:my-10'>
              <main className='flex flex-col items-center justify-center mb-5'>
                <h1 className='font-extrabold text-4xl max-[530px]:text-xl'>Simbolos Institucionales</h1>
                <p className='my-2 max-[450px]:text-sm'>Los símbolos de la Institución Educativa Casimiro Raúl Maestre son elementos que permiten su identidad ante los educandos se le deben guardar  respeto y admiración por toda  la Comunidad Educativa; están fundamentados en el esfuerzo, la superación, el éxito, la fe en Dios para conseguir la Paz y la tranquilidad social.</p>
              </main>
              <div className='flex flex-col items-center justify-center my-10'>
                <h1 className='font-extrabold text-4xl max-[530px]:text-xl'>El Escudo</h1>
                <picture className='my-5'>
                  <Image src='/ESCUDO CRM.webp' alt='Image Bandera' width={190} height={190}></Image>
                </picture>
                <p className='max-[450px]:text-sm'>Simboliza los saberes y la formacion integral que brinda la institucion.</p>
              </div>
              <div className='flex flex-col items-center justify-center my-10'>
                <h1 className='font-extrabold text-4xl max-[530px]:text-xl'>La Bandera</h1>
                <picture className='my-5'>
                  <Image src='/BANDERA CRM.webp' alt='Image Escudo' width={190} height={190}></Image>
                </picture>
                <p className='max-[450px]:text-sm'>La bandera de la Institución Educativa “Casimiro Raúl Maestre” tiene dos franjas horizontales de la misma dimensión, la primera blanca y la segunda azul las cuales significan:</p>
                <div className='my-5'>
                  <p className='max-[450px]:text-sm'><i className='font-bold max-[450px]:text-xs'>Blanco: </i>La fe, la creencia en Dios y la Paz que deseamos para nuestro país la tranquilidad,  la armonía que deben existir en la Institución.</p>
                  <p className='max-[450px]:text-sm'><i className='font-bold max-[450px]:text-xs'>Azul: </i>El esfuerzo continúo en el estudio para la superación y el éxito (perseverancia).</p>
                </div>
              </div>
            </div>
            <div>
              <div className='max-tablet:my-10'>
                <main className='flex flex-col items-center justify-center'>
                  <h1 className='font-bold text-4xl text-center max-[530px]:text-xl '>Himno De La Institucion</h1>
                  <p>Autor: <i>Dinocrates Ramon Barbosa Ruiz</i></p>
                </main>
                <div className='grid place-items-center mt-2'>
                  <div className='flex flex-col items-center justify-center text-center my-2 max-[500px]:text-xs'>
                    <h1 className='font-extrabold'><i>I</i></h1>
                    <p>CASIMIRO VIVE SU CLAMOR</p>
                    <p>EN EL VALLE DE CACIQUE UPAR</p>
                    <p>ACORDEONES QUE ACLAMAN SABER</p>
                    <p>JUVENTUDES VAMOS A ESTUDIAR</p>
                  </div>
                  <div className='flex flex-col items-center justify-center text-center my-2 max-[500px]:text-xs'>
                    <h1 className='font-extrabold'><i>CORO</i></h1>
                    <p>PROCLAMAMOS CON DULZURA</p>
                    <p>LA MEMORIA HOMBRE DE BIEN</p>
                    <p>CASIMIRISTA DE ORGULLO FORMACION ARTE Y SABER (BIS)</p>
                  </div>
                  <div className='flex flex-col items-center justify-center text-center my-2 max-[500px]:text-xs'>
                    <h1 className='font-extrabold'><i>II</i></h1>
                    <p>CASIMIRO HOMBRE DEL PASADO</p>
                    <p>EN SU NOMBRE ACLAMAMOS SABER</p>
                    <p>CON PRINCIPIO DE PERSONA SABIA</p>
                    <p>POR LO ALTO QUEREMOS APRENDER</p>
                  </div>
                  <div className='flex flex-col items-center justify-center text-center my-2 max-[500px]:text-xs'>
                    <h1 className='font-extrabold'><i>CORO</i></h1>
                    <p>PROCLAMAMOS CON DULZURA</p>
                    <p>LA MEMORIA HOMBRE DE BIEN</p>
                    <p>CASIMIRISTA DE ORGULLO FORMACION ARTE Y SABER (BIS)</p>
                  </div>
                  <div className='flex flex-col items-center justify-center text-center my-2 max-[500px]:text-xs'>
                    <h1 className='font-extrabold'><i>III</i></h1>
                    <p>EN LAS ALTAS CULTURAS DEL VALLE</p>
                    <p>HOMBRE ILUSTRE SUS HUELLAS DEJO</p>
                    <p>Y EN HONOR A ESTE GRAN PERSONAJE</p>
                    <p>NACE EL NOMBRE DE ESTA INSTITUCION</p>
                  </div>
                  <div className='flex flex-col items-center justify-center text-center my-2 max-[500px]:text-xs'>
                    <h1 className='font-extrabold'><i>CORO</i></h1>
                    <p>PROCLAMAMOS CON DULZURA</p>
                    <p>LA MEMORIA HOMBRE DE BIEN</p>
                    <p>CASIMIRISTA DE ORGULLO FORMACION ARTE Y SABER (BIS)</p>
                  </div>
                  <div className='flex flex-col items-center justify-center text-center my-2 max-[500px]:text-xs'>
                    <h1 className='font-extrabold'><i>IV</i></h1>
                    <p>EN MI VALLE TIERRA DE CANTORES</p>
                    <p>MI PLANTEL INFUNDE EDUCACION</p>
                    <p>UN MANJAR CULTIVADO EN VALORES</p>
                    <p>ENTONAMOS UN HIMNO DE AMOR</p>
                  </div>
                  <div className='flex flex-col items-center justify-center text-center my-2 max-[500px]:text-xs'>
                    <h1 className='font-extrabold'><i>CORO</i></h1>
                    <p>PROCLAMAMOS CON DULZURA</p>
                    <p>LA MEMORIA HOMBRE DE BIEN</p>
                    <p>CASIMIRISTA DE ORGULLO FORMACION ARTE Y SABER (BIS)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </Fragment>
  );
}