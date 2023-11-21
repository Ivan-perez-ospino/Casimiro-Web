'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import { Fragment } from 'react';
import Image from 'next/image';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button, Card, CardHeader, CardBody, Link, Tooltip, Popover, PopoverTrigger, PopoverContent } from '@nextui-org/react';
import { NextUIProvider } from '@nextui-org/react';
import { useTheme } from 'next-themes';

export default function HomePage(): JSX.Element {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { theme, setTheme } = useTheme()

  return (
    <Fragment>
      <NextUIProvider>
        <Navbar className='h-18' shouldHideOnScroll onMenuOpenChange={setIsMenuOpen}>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className='tablet:hidden'
            suppressHydrationWarning
          />
          <NavbarContent justify='center'>
            <NavbarBrand>
              <h1>Casimiro Web</h1>
            </NavbarBrand>
          </NavbarContent>
          <NavbarContent className='hidden laptop:flex gap-4' justify='center'>
            <NavbarItem>
              <Link href='' className='text-black'><i className='fi fi-rr-home flex items-center justify-center text-lg mr-2'></i> Inicio</Link>
            </NavbarItem>
            <Tooltip content='Funcion Inhabilitada' color='secondary'>
              <NavbarItem>
                <Link href='' isDisabled className='text-black'><i className='fi fi-rr-blog-text flex items-center justify-center text-lg mr-2'></i>Blog</Link>
              </NavbarItem>
            </Tooltip>
            <NavbarItem>
              <Link href='' className='text-black'><i className='fi fi-rr-interrogation flex items-center justify-center text-lg mr-2'></i>Soporte</Link>
            </NavbarItem>
            <NavbarItem>
              <Popover placement='bottom' className='max-tablet:hidden'>
                <PopoverTrigger>
                  <p className='flex hover:cursor-pointer'><i className='fi fi-rr-info flex items-center justify-center text-lg mr-2'></i>Informacion Institucional</p>
                </PopoverTrigger>
                <PopoverContent>
                  <section className='flex items-start justify-evenly flex-wrap gap-10   p-4'>
                    <div className='flex flex-col max-tablet:items-center max-tablet:justify-center'>
                      <h1 className='font-bold text-xl'>INSTITUCIONAL</h1>
                      <Link href='' className='text-black hover:text-slate-600'>
                        PEI
                      </Link>
                      <Link href='' className='text-black hover:text-slate-600'>
                        Manual De Convivencia
                      </Link>
                      <Link href='/MissionAndVision' className='text-black hover:text-slate-600'>
                        Mision Y Vision
                      </Link>
                      <Link href='' className='text-black hover:text-slate-600'>
                        Cultura Institucional
                      </Link>
                      <Link href='' className='text-black hover:text-slate-600'>
                        Perfil Casimirista
                      </Link>
                    </div>
                    <div className='flex flex-col max-tablet:items-center max-tablet:justify-center'>
                      <h1 className='font-bold text-xl'>NIVELES EDUCATIVOS</h1>
                      <Link href='' className='text-black hover:text-slate-600'>
                        Primaria
                      </Link>
                      <Link href='' className='text-black hover:text-slate-600'>
                        Secundaria
                      </Link>
                      <Link href='' className='text-black hover:text-slate-600'>
                        Ciclos Nocturnos
                      </Link>
                    </div>
                    <div className='flex flex-col max-tablet:items-center max-tablet:justify-center'>
                      <h1 className='font-bold text-xl'>SEDES</h1>
                      <Link href='' className='text-black hover:text-slate-600'>
                        Daniel Tapias Pico
                      </Link>
                      <Link href='' className='text-black hover:text-slate-600'>
                        Casimiro Raul Maestre
                      </Link>
                    </div>
                    <div className='flex flex-col max-tablet:items-center max-tablet:justify-center'>
                      <h1 className='font-bold text-xl'>SERVICIOS</h1>
                      <Link href='' className='text-black hover:text-slate-600'>
                        Admisiones
                      </Link>
                      <Link href='' className='text-black hover:text-slate-600'>
                        Recursos TIC
                      </Link>
                      <Link href='' className='text-black hover:text-slate-600'>
                        Orientacion Escolar
                      </Link>
                    </div>
                    <div className='flex flex-col max-tablet:items-center max-tablet:justify-center'>
                      <h1 className='font-bold text-xl'>PRUEBAS SABER</h1>
                      <Link href='' className='text-black hover:text-slate-600'>
                        Pruebas Saber 3°
                      </Link>
                      <Link href='' className='text-black hover:text-slate-600'>
                        Pruebas Saber 5°
                      </Link>
                      <Link href='' className='text-black hover:text-slate-600'>
                        Pruebas Saber 9°
                      </Link>
                      <Link href='' className='text-black hover:text-slate-600'>
                        Pruebas Saber 11°
                      </Link>
                    </div>
                  </section>
                </PopoverContent>
              </Popover>
            </NavbarItem>
            <NavbarItem>
              <Link href='' className='text-black'><i className='fi fi-rr-phone-call flex items-center justify-center text-lg mr-2'></i>Contacto</Link>
            </NavbarItem>
            <NavbarItem>
              <Popover>
                <PopoverTrigger>
                  <p className='flex hover:cursor-pointer'><i className='fi fi-rr-settings flex items-center justify-center text-lg mr-2'></i>Ajustes</p>
                </PopoverTrigger>
                <PopoverContent>
                  <section>
                    <div>
                      <button onClick={() => setTheme('light')}>Light Mode</button>
                      <button onClick={() => setTheme('dark')}>Dark Mode</button>
                    </div>
                  </section>
                </PopoverContent>
              </Popover>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent className='hidden min-[530px]:flex' justify='center'>
            <Button color='secondary' variant='shadow' suppressHydrationWarning>Iniciar Sesion</Button>
            <Button color='secondary' variant='shadow' suppressHydrationWarning>Registrarse</Button>
          </NavbarContent>
          <NavbarMenu className='tablet:hidden'>
            <NavbarMenuItem>
              <Link href=''>Inicio</Link>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <Link href='' isDisabled color='secondary'>Blog</Link>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <Link href='' color='secondary'>Informacion</Link>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <Link href='' color='secondary'>Soporte
              </Link>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <Link href='' color='secondary'>Contacto</Link>
            </NavbarMenuItem>
          </NavbarMenu>
        </Navbar>
        <div className='flex flex-wrap items-center justify-evenly h-screen max-tablet:h-auto max-tablet:my-10 max-[530px]:grid max-[530px]:h-screen'>
          <main className='w-96 max-tablet:w-auto max-tablet:mx-2'>
            <h1 className='font-extrabold text-center text-4xl max-[530px]:text-xl'>Bienvenido a la pagina web institucional de la escuela Casimiro Raul Maestre</h1>
          </main>
          <picture>
            <Image src='./world-wide-web-flatline.svg' alt='Image Word Wide Web' width={500} height={500}></Image>
          </picture>
          <div className='hidden max-[530px]:flex max-[530px]:justify-evenly'>
            <Button color='secondary' variant='shadow' suppressHydrationWarning>Iniciar Sesion</Button>
            <Button color='secondary' variant='shadow' suppressHydrationWarning>Registrarse</Button>
          </div>
        </div>
        <div className='flex flex-wrap items-center justify-evenly h-screen max-tablet:h-auto max-tablet:my-20 max-tablet:flex-wrap-reverse'>
          <picture>
            <Image src='./user-interface-flatline.svg' alt='Image Interface' width={500} height={500}></Image>
          </picture>
          <h1 className='font-bold text-3xl text-center w-2/4 max-tablet:w-auto max-tablet:mx-2 max-[530px]:text-xl'>Sientete comodo con nuestra interfaz de usuario accesible y flexible, que cuenta con variadas funciones</h1>
        </div>
        <section className='bg-rose-500 py-10'>
          <main>
            <h1 className='font-bold text-4xl text-center text-white max-tablet:mx-2 max-[530px]:text-xl'>Nuestra Web Tiene En Cuenta Lo Siguiente</h1>
          </main>
          <section className='grid grid-cols-4 gap-5 mx-5 my-5 max-tablet:grid-cols-2 max-[500px]:grid-cols-1'>
            <Card isPressable>
              <CardHeader className='flex items-center justify-center'>
                <h1 className='font-bold text-lg text-center'>Informacion Institucional</h1>
              </CardHeader>
              <CardBody className='flex items-center justify-center'>
                <picture className='flex items-center justify-center'>
                  <Image src='./mind-map-flatline.svg' alt='Image Calendar' width={300} height={300}></Image>
                </picture>
                <p className='text-center'>La web proporciona informacion sobre la escuela, tales como su historia, mision y vision</p>
              </CardBody>
            </Card>
            <Card isPressable>
              <CardHeader className='flex items-center justify-center'>
                <h1 className='font-bold text-lg text-center'>Recursos Interactivos</h1>
              </CardHeader>
              <CardBody className='flex items-center justify-center'>
                <picture className='flex items-center justify-center'>
                  <Image src='./analytics-process-flatline.svg' alt='Image Calendar' width={300} height={300}></Image>
                </picture>
                <p className='text-center'>La web proporciona recursos gratuitos y didacticos a la comunidad casimirista</p>
              </CardBody>
            </Card>
            <Card isPressable>
              <CardHeader className='flex items-center justify-center'>
                <h1 className='font-bold text-xl text-center'>Calendario Y Horario</h1>
              </CardHeader>
              <CardBody className='flex items-center justify-center'>
                <picture className='flex items-center justify-center'>
                  <Image src='./calendar-outline.svg' alt='Image Calendar' width={300} height={300}></Image>
                </picture>
                <p className='text-center'>Te brindamos un calendario de eventos, examenes, etc</p>
              </CardBody>
            </Card>
            <Card isPressable>
              <CardHeader className='flex items-center justify-center'>
                <h1 className='font-bold text-xl text-center'>Actualizaciones Y Novedades</h1>
              </CardHeader>
              <CardBody className='flex items-center justify-center'>
                <picture className='flex items-center justify-center'>
                  <Image src='./start-up-flatline.svg' alt='Image Calendar' width={300} height={300}></Image>
                </picture>
                <p className='text-center'>Te mantendremos informado de cada novedad ya que se vienen cosas grandes, ¡esperalas con ansias!</p>
              </CardBody>
            </Card>
          </section>
        </section>
        <section className='flex flex-wrap items-center justify-evenly h-screen max-tablet:h-auto max-tablet:my-20'>
          <h1 className='font-bold text-3xl text-center w-2/4 max-tablet:w-auto max-tablet:mx-2 max-[530px]:text-xl'>Aqui podras encontrar el calendario de eventos, dias de examenes, actos civicos etc</h1>
          <picture>
            <Image src='./calendar-flatline.svg' alt='Image Calendar' width={500} height={500}></Image>
          </picture>
        </section>
        <section className='flex flex-wrap items-center justify-evenly h-screen max-tablet:h-auto max-tablet:my-20 max-tablet:flex-wrap-reverse'>
          <picture>
            <Image src='./marketing-flatline-eda0a.svg' alt='Image Social Network' width={500} height={500}></Image>
          </picture>
          <h1 className='font-bold text-3xl text-center w-2/4 max-tablet:w-auto max-tablet:mx-2 max-[530px]:text-xl'>Unete y se parte del blog escolar donde los docentes se suman a aportar publicaciones de eventos o dias especiales</h1>
        </section>
        <footer className='bg-slate-100 text-black py-6'>
          <section className='flex items-center justify-center mt-10'>
            <div className='flex gap-5'>
              <a href='https://www.instagram.com/iecasimiroraul/'><Image src='/instagram.png' alt='Instagram Icon' width={30} height={30}></Image></a>
              <a href='https://twitter.com/iemaestre'><Image src='/gorjeo.png' alt='X Icon' width={30} height={30}></Image></a>
              <a href='https://www.facebook.com/iecasimiroraul/'><Image src='/facebook.png' alt='Facebook Icon' width={30} height={30}></Image></a>
              <a href='https://www.youtube.com/channel/UCMVDAajsLiRpCi6vhEReCPw?view_as=subscriber'><Image src='/youtube.png' alt='Youtube Icon' width={30} height={30}></Image></a>
            </div>
          </section>
        </footer>
      </NextUIProvider>
    </Fragment>
  );
}
