'use client'


import { Fragment, useState } from 'react';
import NavBar from '../components/Navbar';
import { Input, Button, Image } from '@nextui-org/react';
import { useRouter } from 'next/navigation'
import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: 'AIzaSyDDv32DTEBw4FA5nUpCiEKhQCEirRCsaco',
  authDomain: 'casimiro-web.firebaseapp.com',
  projectId: 'casimiro-web',
  storageBucket: 'casimiro-web.appspot.com',
  messagingSenderId: '706117831528',
  appId: '1:706117831528:web:f12ed21d4ab1f6975264dd',
  measurementId: 'G-R8CREKB5Z6'
};


const app = initializeApp(firebaseConfig);


const auth = getAuth(app);


export default function SignIn(): JSX.Element {


  const router = useRouter();


  const [email, setEmail] = useState('');


  const [password, setPassword] = useState('');


  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push('/SignIn');
    } catch (error) {
      alert('Error al registrarse' + error);
    }
  };


  return (
    <Fragment>
      <NavBar />
      <div className='my-20 px-10 max-[530px]:px-5'>
        <div className='flex items-center justify-evenly max-tablet:justify-center gap-y-10'>
          <div>
            <h1 className='font-extrabold text-6xl text-center max-[455px]:text-4xl max-[396px]:text-xl'>Registrarse</h1>
            <form action='' className='flex flex-col gap-y-10'>
              <Input
                isRequired
                type='email'
                label='Correo Electronico'
                variant='underlined'
                color='primary'
                radius='none'
                value={email}
                onChange={(e) => setEmail(e.target.value)} />


              <Input
                isRequired
                type='password'
                label='Contraseña'
                variant='underlined'
                color='primary'
                radius='none'
                value={password}
                onChange={(e) => setPassword(e.target.value)} />


              <Button color='primary' radius='none' variant='ghost' className='flex w-full text-lg' onClick={handleRegister}>Registrarse</Button>
            </form>
          </div>
          <div>
            <picture className='max-tablet:hidden'>
              <Image src='./drone-flatline.svg' alt='Image Report Analysis' width={500} height={500} />
            </picture>
          </div>
        </div>
      </div>
    </Fragment>
  );
}