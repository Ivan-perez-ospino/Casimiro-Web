'use client'


import { Fragment, useState } from 'react';
import NavBar from '../components/NavBar';
import { Input, Button, Link } from '@nextui-org/react';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';


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


  const [email, setEmail] = useState('');


  const [password, setPassword] = useState('');


   const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Inicio De Sesion Exitoso');
    } catch (error) {
      console.error('Error al crear el usuario:' + error);
    }
  };


  return (
    <Fragment>
      <NavBar />
      <div className='my-20 px-10 max-[530px]:px-5'>
        <main className='flex flex-col items-center justify-center gap-y-10'>
          <h1 className='font-extrabold text-6xl text-center max-[455px]:text-4xl max-[396px]:text-xl'>Inicio De Sesion Para Docentes</h1>
          <form action='' className='flex flex-col w-2/5 gap-y-10 max-[1450px]:w-3/5 max-[830px]:w-4/5'>
            <Input
              isRequired
              type='email'
              label='Correo Electronico'
              variant='underlined'
              color='primary'
              radius='none' 
              value={email}
              onChange={(e) => setEmail(e.target.value)}/>


            <Input
              isRequired
              type='password'
              label='Contraseña'
              variant='underlined'
              color='primary'
              radius='none'
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
              <span className='flex items-center justify-center'>
                <Link href='/Register' className='text-black hover:text-blue-600 text-center'>¿No tienes una cuenta? Registrate aqui</Link>
              </span>
              <Button color='primary' radius='none' variant='ghost' className='flex w-full text-lg' onClick={handleSignIn}>Iniciar Sesion</Button>
          </form>
        </main>
      </div>
    </Fragment>
  );
}