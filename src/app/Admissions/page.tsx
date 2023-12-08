'use client';

import { Fragment } from 'react';
import { Image, Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, Listbox, ListboxItem } from '@nextui-org/react';

export default function Admissions(): JSX.Element {
  return (
    <Fragment>
      <section className='my-20 max-[530px]:my-10'>
        <main className='my-10'>
          <h1 className='font-extrabold text-6xl text-center max-[530px]:text-4xl max-[350px]:text-3xl'>Admisiones</h1>
        </main>
        <section className='flex flex-wrap items-start justify-evenly max-tablet:flex-col max-tablet:items-center max-tablet:justify-center'>
          <article className='w-2/4 px-10 max-tablet:w-auto max-[530px]:px-5'>
            <h3 className='font-bold text-4xl text-center max-[530px]:text-xl max-[350px]:text-md max-[350px]:my-5'>Bienvenidos A La Institucion Educativa Casimiro Raul Maestre</h3>
            <picture className='flex items-center justify-center'>
              <Image src='./school-flatline.svg' alt='Image School' width={500} height={500}></Image>
            </picture>
            <article>
              <p className='my-2 text-center max-tablet:text-left max-[530px]:text-sm max-[350px]:text-xs'>De manera grata les extiendo un saludo cariñoso y amoroso de mi parte. Esta institución es y será siempre su casa. Estamos a puertas de muchos cambios sociales y culturales que afectan de manera positiva a los jóvenes y niños de este país. Por tanto debemos estar dispuestos a ser forjadores del futuro que define su vida y parte del entorno de las personas que los rodean.</p>
              <p className='my-2 text-center max-tablet:text-left max-[530px]:text-sm max-[350px]:text-xs'>Por lo tanto es importante que ustedes estén dispuestos a tomar el mundo con las manos, muy seguros de sí mismos y con la mente abierta a nuevas cosas. De mi parte, invitarlos a enamorarse de esta, su institución, y recibir de brazos abiertos la ACADEMIA.</p>
              <p className='my-2 text-center max-tablet:text-left max-[530px]:text-sm max-[350px]:text-xs'>Sinceramente,</p>
            </article>
          </article>
          <article className='w-2/4 flex flex-col items-center justify-center max-tablet:w-full max-tablet:my-10 px-4'>
            <picture className='flex items-center justify-center'>
              <Image src='./MERCEDES CADENA.webp' alt='Image Rectora' width={500} height={500}></Image>
            </picture>
            <div className='max-tablet:my-5'>
              <h5 className='font-bold text-2xl max-[530px]:text-xl max-[350px]:text-lg'>Mercedes Elena Cadena De Perez</h5>
              <p className='max-[530px]:text-sm max-[350px]:text-xs'>Rectora De La Institucion</p>
            </div>
          </article>
        </section>
        <section className='flex items-start justify-evenly my-20 max-tablet:flex-col max-tablet:items-center max-tablet:justify-center'>
          <article className='px-2 max-[530px]:px-5'>
            <main>
              <h1 className='font-bold text-2xl text-center my-5 max-[530px]:text-lg'>Fechas De Matricula Para Diciembre Del 2023</h1>
            </main>
            <Table aria-label='table'>
              <TableHeader>
                <TableColumn>
                  <h1 className='text-xl max-[400px]:text-sm'>Grado</h1>
                </TableColumn>
                <TableColumn>
                  <h1 className='text-xl max-[400px]:text-sm'>Fecha</h1>
                </TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow key={'1'}>
                  <TableCell>
                    <h1 className='max-[400px]:text-xs'>9°</h1>
                    <h1 className='max-[400px]:text-xs'>Ciclo 23 (6° y 7°)</h1>
                    <h1 className='max-[400px]:text-xs'>Transicion</h1>
                  </TableCell>
                  <TableCell>
                    <h1 className='max-[400px]:text-xs'>Diciembre 11 - 12 - 13 y 14</h1>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <h1 className='max-[400px]:text-xs'>10°</h1>
                    <h1 className='max-[400px]:text-xs'>Ciclo 24 (8° y 9°)</h1>
                    <h1 className='max-[400px]:text-xs'>Transicion</h1>
                  </TableCell>
                  <TableCell>
                    <h1 className='max-[400px]:text-xs'>Diciembre 15 - 18 - 19 y 20</h1>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <h1 className='max-[400px]:text-xs'>11°</h1>
                    <h1 className='max-[400px]:text-xs'>Ciclo 25 (10°)</h1>
                    <h1 className='max-[400px]:text-xs'>Transicion</h1>
                  </TableCell>
                  <TableCell>
                    <h1 className='max-[400px]:text-xs'>Diciembre 21 - 26 - 27 y 28</h1>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </article>
          <article className='px-2 max-tablet:my-10 max-[530px]:px-5'>
            <main>
              <h1 className='font-bold text-2xl text-center my-5 max-[530px]:text-lg'>Fechas De Matriculas Para Enero Del 2024</h1>
            </main>
            <Table>
              <TableHeader>
                <TableColumn>
                  <h1 className='text-xl max-[400px]:text-sm'>Grado</h1>
                </TableColumn>
                <TableColumn>
                  <h1 className='text-xl max-[400px]:text-sm'>Fecha</h1>
                </TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <h1 className='max-[400px]:text-xs'>7° y Ciclo 23 (6° y 7°)</h1>
                  </TableCell>
                  <TableCell>
                    <h1 className='max-[400px]:text-xs'>Enero 4 y 5</h1>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <h1 className='max-[400px]:text-xs'>8° y Ciclo 24 (8° y 9°)</h1>
                  </TableCell>
                  <TableCell>
                    <h1 className='max-[400px]:text-xs'>Enero 8 y 9</h1>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <h1 className='max-[400px]:text-xs'>9° y Ciclo 25 (10°)</h1>
                  </TableCell>
                  <TableCell>
                    <h1 className='max-[400px]:text-xs'>Enero 10 y 11</h1>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <h1 className='max-[400px]:text-xs'>10° y Ciclo 23 (6° y 7°)</h1>
                  </TableCell>
                  <TableCell>
                    <h1 className='max-[400px]:text-xs'>Enero 12 y 15</h1>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <h1 className='max-[400px]:text-xs'>11° y Ciclo 24 (8° y 9°)</h1>
                  </TableCell>
                  <TableCell>
                    <h1 className='max-[400px]:text-xs'>Enero 16 y 17</h1>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <h1 className='max-[400px]:text-xs'>6° y Ciclo 25 (10°)</h1>
                  </TableCell>
                  <TableCell>
                    <h1 className='max-[400px]:text-xs'>Enero 18 - 19 - 22 y 23</h1>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </article>
        </section>
        <section className='my-20'> 
          <main className='flex flex-col items-center justify-center max-tablet:px-4 my-5'>
            <h1 className='font-extrabold text-6xl text-center max-[530px]:text-4xl max-[400px]:text-2xl max-[530px]:my-4'>Requisitos De Matricula</h1>
            <h1 className='font-bold text-5xl text-center max-[530px]:text max-[400px]:text-lg'>Estudiantes Antiguos De Secundaria</h1>
          </main>
          <picture className='hidden max-tablet:flex max-tablet:items-center max-tablet:justify-center'>
            <Image src='./group-presentation-flatline.svg' alt='Image Group Presentation' width={500} height={500}></Image>
          </picture>
          <article className='flex items-center justify-evenly my-10 max-tablet:flex-col'>
            <Listbox aria-label='actions' className='w-2/5 max-tablet:w-full p-2' variant='shadow' color='danger'>
              <ListboxItem key={'1'} aria-label='actions'>
                <p className='max-tablet:text-center max-[450px]:text-xs'>Formato de matricula devidamente diligenciado sin tachones.</p>
              </ListboxItem>
              <ListboxItem key={'2'} aria-label=''>
                <p className='max-tablet:text-center max-[450px]:text-xs'>Carpeta plastificada color azul rey con su respectivo gancho.</p>
              </ListboxItem>
              <ListboxItem key={'3'} aria-label=''>
                <p className='max-tablet:text-center max-[450px]:text-xs'>Fotocopia de la tarjeta de identidad del estudiante al 150%.</p>
              </ListboxItem>
              <ListboxItem key={'4'} aria-label=''>
                <p className='max-tablet:text-center max-[450px]:text-xs'>Fotocopia del registro civil en buen estado.</p>
              </ListboxItem>
              <ListboxItem key={'5'} aria-label=''>
                <p className='max-tablet:text-center max-[450px]:text-xs'>Fotocopia de la cedula del acudiente al 150%.</p>
              </ListboxItem>
              <ListboxItem key={'6'} aria-label=''>
                <p className='max-tablet:text-center max-[450px]:text-xs'>Dos fotos recientes en buen estado.</p>
              </ListboxItem>
              <ListboxItem key={'7'} aria-label=''>
                <p className='max-tablet:text-center max-[450px]:text-xs'>Fotocopia del recibo de la luz.</p>
              </ListboxItem>
              <ListboxItem key={'8'} aria-label=''>
                <p className='max-tablet:text-center max-[450px]:text-xs'>Boletin original del año anterior (2023).</p>
              </ListboxItem>
              <ListboxItem key={'9'} aria-label=''>
                <p className='max-tablet:text-center max-[450px]:text-xs'>Sisben actualizado.</p>
              </ListboxItem>
              <ListboxItem key={'10'} aria-label=''>
                <p className='max-tablet:text-center max-[450px]:text-xs'>Copia del carnet de salud (CERTIFICADO ADRES).</p>
              </ListboxItem>
            </Listbox>
            <picture className='max-tablet:hidden'>
              <Image src='./group-presentation-flatline.svg' alt='Image Group Presentation' width={500} height={500}></Image>
            </picture>
          </article>
          <main className='flex flex-col items-center justify-center max-tablet:px-4'>
            <h1 className='font-extrabold text-6xl text-center max-[530px]:text-4xl max-[530px]:my-4 max-[400px]:text-2xl'>Requisitos De Matricula</h1>
            <h1 className='font-bold text-5xl text-center max-[530px]:text-2xl max-[400px]:text-lg'>Estudiantes Del Grado 5 A 6</h1>
          </main>
          <picture className='hidden max-tablet:flex max-tablet:items-center max-tablet:justify-center'>
            <Image src='./project-presentation-flatline.svg' alt='Image Project Presentation' width={500} height={500}></Image>
          </picture>
          <article className='flex items-center justify-evenly my-10 max-tablet:flex-col'>
            <picture className='max-tablet:hidden'>
              <Image src='./project-presentation-flatline.svg' alt='Image Project Presentation' width={500} height={500}></Image>
            </picture>
            <Listbox aria-label='actions' className='w-2/5 max-tablet:w-full p-2' variant='shadow' color='danger'>
              <ListboxItem key={'1'} aria-label=''>
                <p className='max-tablet:text-center max-[450px]:text-xs'>Formato de matricula (FOTOCOPIADORA).</p>
              </ListboxItem>
              <ListboxItem key={'2'} aria-label=''>
                <p className='max-tablet:text-center max-[450px]:text-xs'>Carpeta plastificada color azul rey con su respectivo gancho.</p>
              </ListboxItem>
              <ListboxItem key={'3'} aria-label=''>
                <p className='max-tablet:text-center max-[450px]:text-xs'>Fotocopia de la tarjeta de identidad del estudiante al 150%.</p>
              </ListboxItem>
              <ListboxItem key={'4'} aria-label=''>
                <p className='max-tablet:text-center max-[450px]:text-xs'>Fotocopia del registro civil en buen estado.</p>
              </ListboxItem>
              <ListboxItem key={'5'} aria-label=''>
                <p className='max-tablet:text-center max-[450px]:text-xs'>Fotocopia de la cedula del acudiente al 150%.</p>
              </ListboxItem>
              <ListboxItem key={'6'} aria-label=''>
                <p className='max-tablet:text-center max-[450px]:text-xs'>Dos fotos recientes en buen estado.</p>
              </ListboxItem>
              <ListboxItem key={'7'} aria-label=''>
                <p className='max-tablet:text-center max-[450px]:text-xs'>Fotocopia del recibo de la luz.</p>
              </ListboxItem>
              <ListboxItem key={'8'} aria-label=''>
                <p className='max-tablet:text-center max-[450px]:text-xs'>Boletin original del año anterior (2023).</p>
              </ListboxItem>
              <ListboxItem key={'9'} aria-label=''>
                <p className='max-tablet:text-center max-[450px]:text-xs'>Solo para la matricula la matricula del grado sexto carpeta<br/>plastificada color amarillo con su gancho.</p>
              </ListboxItem>
              <ListboxItem key={'10'} aria-label=''>
                <p className='max-tablet:text-center max-[450px]:text-xs'>Sisben actualizado.</p>
              </ListboxItem>  
              <ListboxItem key={'11'} aria-label=''>
                <p className='max-tablet:text-center max-[450px]:text-xs'>Copia del carnet de salud (CERTIFICADO ADRES).</p>
              </ListboxItem>
            </Listbox>
          </article>
        </section>
      </section>
    </Fragment>
  );
}