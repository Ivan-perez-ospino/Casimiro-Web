'use client';

import { Fragment, useState } from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Tooltip, Popover, PopoverTrigger, PopoverContent, Accordion, AccordionItem, Button } from '@nextui-org/react';
import { signIn } from 'next-auth/react';

export default function NavBar(): JSX.Element {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Fragment>
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
            <Link href='/' className='text-black'><i className='fi fi-rr-home flex items-center justify-center text-lg mr-2'></i> Inicio</Link>
          </NavbarItem>
          <Tooltip content='Funcion En Progreso' color='secondary'>
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
                    <Link href='https://9d22257e-b846-49fe-9b60-758f6b03d328.filesusr.com/ugd/f49309_10ff780cf668441e8b5fddbd6f2944e8.pdf' className='text-black hover:text-slate-600'>
                      PEI
                    </Link>
                    <Link href='https://9d22257e-b846-49fe-9b60-758f6b03d328.filesusr.com/ugd/f49309_811e06a05b03482e90d712949a340967.pdf' className='text-black hover:text-slate-600'>
                      Manual De Convivencia
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
                    <Link href='/Admissions' className='text-black hover:text-slate-600'>
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
                    <Link href='https://9d22257e-b846-49fe-9b60-758f6b03d328.filesusr.com/archives/f49309_2e239fd8aaa143828edd7f1fe3850766.rar?dn=saber-3.rar' className='text-black hover:text-slate-600'>
                      Pruebas Saber 3°
                    </Link>
                    <Link href='https://9d22257e-b846-49fe-9b60-758f6b03d328.filesusr.com/archives/f49309_3dfbf265fb1046a98b81d2cbf86230e8.rar?dn=saber-5.rar' className='text-black hover:text-slate-600'>
                      Pruebas Saber 5°
                    </Link>
                    <Link href='https://9d22257e-b846-49fe-9b60-758f6b03d328.filesusr.com/archives/f49309_35665f874d8d4bfa97a06af918d99176.rar?dn=saber-9.rar' className='text-black hover:text-slate-600'>
                      Pruebas Saber 9°
                    </Link>
                    <Link href='https://colcasimiroraul.wixsite.com/iecasimiro/pruebas-saber-11' className='text-black hover:text-slate-600'>
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
        </NavbarContent>
        <NavbarContent className='hidden min-[530px]:flex' justify='center'>
          <Button color='secondary' variant='shadow' onClick={() => signIn()}>Iniciar Sesion Con Google</Button>
        </NavbarContent>
        <NavbarMenu className='tablet:hidden'>
          <NavbarMenuItem>
            <Link href='/' className='text-black'>Inicio</Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href='' isDisabled color='secondary' className='text-black'>Blog</Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href='' color='secondary' className='text-black'>Informacion</Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href='' color='secondary' className='text-black'>Soporte
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href='' color='secondary' className='text-black'>Contacto</Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Accordion variant='splitted'>
              <AccordionItem key='1' aria-label='Institucional' title='Institucional'>
                <section className='grid'>
                  <Link href='https://9d22257e-b846-49fe-9b60-758f6b03d328.filesusr.com/ugd/f49309_10ff780cf668441e8b5fddbd6f2944e8.pdf' className='text-black hover:text-slate-600'>
                    PEI
                  </Link>
                  <Link href='https://9d22257e-b846-49fe-9b60-758f6b03d328.filesusr.com/ugd/f49309_811e06a05b03482e90d712949a340967.pdf' className='text-black hover:text-slate-600'>
                    Manual De Convivencia
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
                </section>
              </AccordionItem>
              <AccordionItem key='2' aria-label='Niveles Educativos' title='Niveles Educativos'>
                <section className='grid'>
                  <Link href='' className='text-black hover:text-slate-600'>
                    Primaria
                  </Link>
                  <Link href='' className='text-black hover:text-slate-600'>
                    Secundaria
                  </Link>
                  <Link href='' className='text-black hover:text-slate-600'>
                    Ciclos Nocturnos
                  </Link>
                </section>
              </AccordionItem>
              <AccordionItem key='3' aria-label='Sedes' title='Sedes'>
                <section className='grid'>
                  <Link href='' className='text-black hover:text-slate-600'>
                    Daniel Tapias Pico
                  </Link>
                  <Link href='' className='text-black hover:text-slate-600'>
                    Casimiro Raul Maestre
                  </Link>
                </section>
              </AccordionItem>
              <AccordionItem key='4' aria-label='Servicios' title='Servicios'>
                <section className='grid'>
                  <Link href='/Admissions' className='text-black hover:text-slate-600'>
                    Admisiones
                  </Link>
                  <Link href='' className='text-black hover:text-slate-600'>
                    Recursos TIC
                  </Link>
                  <Link href='' className='text-black hover:text-slate-600'>
                    Orientacion Escolar
                  </Link>
                </section>
              </AccordionItem>
              <AccordionItem key='5' aria-label='Pruebas Saber' title='Pruebas Saber'>
                <section className='grid'>
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
                </section>
              </AccordionItem>
            </Accordion>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </Fragment>
  );
}