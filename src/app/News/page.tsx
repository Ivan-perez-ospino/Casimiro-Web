'use client'


import { Fragment } from 'react';
import NavBar from '../components/NavBar';
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, Divider } from '@nextui-org/react';


export default function News(): JSX.Element {


  return (
    <Fragment>
      <NavBar />
      <div className='my-20 px-10 max-[530px]:px-5'>
        <Divider className='my-5' />
        <main className='flex justify-evenly my-20 max-tablet:grid max-tablet:items-center max-tablet:justify-center'>
          <div>
            <div>
              <h1 className='font-bold text-2xl text-center my-5 max-[530px]:text-lg'>Fechas De Matricula Para Diciembre Del 2023</h1>
            </div>            


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
          </div>


          <div>
            <div>
              <h1 className='font-bold text-2xl text-center my-5 max-[530px]:text-lg'>Fechas De Matriculas Para Enero Del 2024</h1>
            </div>
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
          </div>


        </main>
      </div>
    </Fragment>
  );
}