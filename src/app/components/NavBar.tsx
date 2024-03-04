'use client';

 
import { Fragment, useState } from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Popover, PopoverTrigger, PopoverContent, Accordion, AccordionItem, Image, Button, Avatar } from '@nextui-org/react';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';


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


export default function NavbarHome(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const [classNameButtonsLogin, setClassNameButtonLogin] = useState('flex');


  const [photoURL, setPhotoURL] = useState('');


  const [name, setName] = useState('');


  const [classNameAvatarLogin, setClassNameAvatarLogin] = useState('');


  onAuthStateChanged(auth, (user) => {
    if (user) {
      setClassNameButtonLogin('hidden');
      const photoURL = user.photoURL ?? '';
      setPhotoURL(photoURL);
      const name = user.displayName ?? '';
      setName(name);
    } else {
      setClassNameAvatarLogin('hidden');
    }
  });


  return (
    <Fragment>
      <Navbar className='h-18 border-b-2 border-blue-600 ' shouldHideOnScroll onMenuOpenChange={setIsMenuOpen}>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='tablet:hidden' />
        <NavbarContent justify='center'>
          <NavbarBrand>
            <Image src='/casimiro-logo.svg' alt='Logo' className='w-8 mr-2' />
            <h1>Casimiro Web</h1>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className='hidden laptop:flex gap-4' justify='end'>
          <NavbarItem>
            <Link href='/' className='text-black hover:text-blue-600'><i className='fi fi-rr-home flex items-center justify-center text-lg mr-2'></i> Inicio</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href='/News' className='text-black hover:text-blue-600'><i className='fi fi-rr-bell flex items-center justify-center text-lg mr-2'></i>Novedades</Link>
          </NavbarItem>

          <NavbarItem>
            <Popover placement='bottom' className='max-tablet:hidden' showArrow backdrop='blur' radius='none'>
              <PopoverTrigger>
                <p className='flex hover:cursor-pointer'><i className='fi fi-rr-info flex items-center justify-center text-lg mr-2'></i>Informacion Institucional</p>
              </PopoverTrigger>
              <PopoverContent>
                <div className='flex items-start justify-evenly flex-wrap gap-10 p-4'>
                  <div className='flex flex-col max-tablet:items-center max-tablet:justify-center'>
                    <h1 className='font-bold text-xl'>INSTITUCIONAL</h1>
                    <Link href='https://9d22257e-b846-49fe-9b60-758f6b03d328.filesusr.com/ugd/f49309_10ff780cf668441e8b5fddbd6f2944e8.pdf' className='text-black hover:text-blue-600'>
                      PEI (Descarga directa)
                    </Link>
                    <Link href='https://9d22257e-b846-49fe-9b60-758f6b03d328.filesusr.com/ugd/f49309_811e06a05b03482e90d712949a340967.pdf' className='text-black hover:text-blue-600'>
                      Manual De Convivencia (Descarga directa)
                    </Link>
                    <Link href='/MissionAndVision' className='text-black hover:text-blue-600'>
                      Mision Y Vision
                    </Link>
                    <Link href='/InstitutionalCulture' className='text-black hover:text-blue-600'>
                      Cultura Institucional
                    </Link>
                    <Link href='/ProfileCasimirista' className='text-black hover:text-blue-600'>
                      Perfil Casimirista
                    </Link>
                  </div>
                  <div className='flex flex-col max-tablet:items-center max-tablet:justify-center'>
                    <h1 className='font-bold text-xl'>NIVELES EDUCATIVOS</h1>
                    <Link href='/LevelPrimary' className='text-black hover:text-blue-600'>
                      Primaria
                    </Link>
                    <Link href='/LevelSecondary' className='text-black hover:text-blue-600'>
                      Secundaria
                    </Link>
                    <Link href='/LevelNightCicles' className='text-black hover:text-blue-600'>
                      Formacion Por Ciclos
                    </Link>
                  </div>
                  <div className='flex flex-col max-tablet:items-center max-tablet:justify-center'>
                    <h1 className='font-bold text-xl'>SERVICIOS</h1>
                    <Link href='/Admissions' className='text-black hover:text-blue-600'>
                      Admisiones
                    </Link>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </NavbarItem>
          <NavbarItem className={classNameButtonsLogin}>
            <Link href='/SignIn'>
              <Button variant='ghost' color='primary' radius='none' className='text-xl p-4 max-[396px]:w-full min-[455px]:text-lg max-[455px]:py-2 max-[396px]:text-small'>Iniciar Sesion</Button>
            </Link>
            <Link href='/Register'>
              <Button color='primary' radius='none' className='text-xl p-4 max-[396px]:w-full min-[455px]:text-lg max-[455px]:py-2 max-[396px]:text-small'>Registrarse</Button>
            </Link>
          </NavbarItem>
          <NavbarItem className={classNameAvatarLogin}>
            <Popover radius='sm' backdrop='blur'>
              <PopoverTrigger>
                <Avatar isBordered color='primary' src={photoURL} />
              </PopoverTrigger>
              <PopoverContent className='p-6'>
                <Avatar isBordered color='primary' size='lg' src={photoURL} />
                <h1 className='mt-6'>{name}</h1>
              </PopoverContent>
            </Popover>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu className='tablet:hidden'>
          <NavbarMenuItem>
            <Link href='/' className='text-black hover:text-blue-600'><i className='fi fi-rr-home flex items-center justify-center text-lg mr-2'></i> Inicio</Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href='/News' className='text-black hover:text-blue-600'><i className='fi fi-rr-bell flex items-center justify-center text-lg mr-2'></i>Novedades</Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href='/Blog' className='text-black hover:text-blue-600'><i className='fi fi-rr-people flex items-center justify-center text-lg mr-2'></i>Blog</Link>
          </NavbarMenuItem>
          <NavbarItem className={classNameButtonsLogin}>
            <Link href='/SignIn'>
              <Button variant='ghost' color='primary' radius='none' className='text-xl p-4 max-[396px]:w-full min-[455px]:text-lg max-[455px]:py-2 max-[396px]:text-small'>Iniciar Sesion</Button>
            </Link>
            <Link href='/Register'>
              <Button color='primary' radius='none' className='text-xl p-4 max-[396px]:w-full min-[455px]:text-lg max-[455px]:py-2 max-[396px]:text-small'>Registrarse</Button>
            </Link>
          </NavbarItem>
          <NavbarMenuItem>
            <Accordion variant='light'>
              <AccordionItem key='1' aria-label='Institucional' title='Institucional'>
                <div className='grid'>
                  <Link href='https://9d22257e-b846-49fe-9b60-758f6b03d328.filesusr.com/ugd/f49309_10ff780cf668441e8b5fddbd6f2944e8.pdf' className='text-black hover:text-slate-600'>
                    PEI (Descarga directa)
                  </Link>
                  <Link href='https://9d22257e-b846-49fe-9b60-758f6b03d328.filesusr.com/ugd/f49309_811e06a05b03482e90d712949a340967.pdf' className='text-black hover:text-slate-600'>
                    Manual De Convivencia (Descarga directa)
                  </Link>
                  <Link href='/MissionAndVision' className='text-black hover:text-slate-600'>
                    Mision Y Vision
                  </Link>
                  <Link href='/InstitutionalCulture' className='text-black hover:text-slate-600'>
                    Cultura Institucional
                  </Link>
                  <Link href='/ProfileCasimirista' className='text-black hover:text-slate-600'>
                    Perfil Casimirista
                  </Link>
                </div>
              </AccordionItem>
              <AccordionItem key='2' aria-label='Niveles Educativos' title='Niveles Educativos'>
                <div className='grid'>
                  <Link href='/LevelPrimary' className='text-black hover:text-slate-600'>
                    Primaria
                  </Link>
                  <Link href='/LevelSecondary' className='text-black hover:text-slate-600'>
                    Secundaria
                  </Link>
                  <Link href='/LevelNightCicles' className='text-black hover:text-slate-600'>
                    Formacion Por Ciclos
                  </Link>
                </div>
              </AccordionItem>
              <AccordionItem key='4' aria-label='Servicios' title='Servicios'>
                <div className='grid'>
                  <Link href='/Admissions' className='text-black hover:text-slate-600'>
                    Admisiones
                  </Link>
                </div>
              </AccordionItem>
            </Accordion>
          </NavbarMenuItem>
          <NavbarItem className={classNameButtonsLogin}>
            <Link href='/SignIn'>
              <Button variant='ghost' color='primary' radius='none' className='text-xl p-4 max-[396px]:w-full min-[455px]:text-lg max-[455px]:py-2 max-[396px]:text-small'>Iniciar Sesion</Button>
            </Link>
            <Link href='/Register'>
              <Button color='primary' radius='none' className='text-xl p-4 max-[396px]:w-full min-[455px]:text-lg max-[455px]:py-2 max-[396px]:text-small'>Registrarse</Button>
            </Link>
          </NavbarItem>
        </NavbarMenu>
      </Navbar>
    </Fragment>
  );
}