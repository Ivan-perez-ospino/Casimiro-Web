import { Fragment } from 'react';
import { Link } from '@nextui-org/react';


export default function Blog(): JSX.Element {  
  return (
    <Fragment>
      <div>
        <Link href='/' className='text-black hover:text-blue-600 mx-4 my-4'>
          <i className='fi fi-rr-arrow-left flex items-center justify-center mr-2 text-xl'></i><h4 className='text-lg'>Regresar</h4>
        </Link>
      </div>
      <div className='my-20 px-10 max-[530px]:px-5'>
        <div>
          <h1 className='font-extrabold text-6xl text-center max-[455px]:text-4xl max-[396px]:text-xl'>¡Aun No Hay Contenido Aqui!</h1>
        </div>
      </div>
    </Fragment>
  );
}