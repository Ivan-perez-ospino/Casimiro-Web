'use client';

import { Fragment, useState } from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Popover, PopoverTrigger, PopoverContent, Accordion, AccordionItem, Image } from '@nextui-org/react';

export default function NavBar(): JSX.Element {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Fragment>
      <Navbar className='h-18' shouldHideOnScroll onMenuOpenChange={setIsMenuOpen}>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='tablet:hidden'
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
     { /* <Tooltip content='Funcion En Progreso' color='secondary'>
            <NavbarItem>
              <Link href='' isDisabled className='text-black'><i className='fi fi-rr-blog-text flex items-center justify-center text-lg mr-2'></i>Blog</Link>
            </NavbarItem>
          </Tooltip> */ }
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
                  <div className='flex flex-col max-tablet:items-center max-tablet:justify-center'>
                    <h1 className='font-bold text-xl'>SERVICIOS</h1>
                    <Link href='/Admissions' className='text-black hover:text-slate-600'>
                      Admisiones
                    </Link>
                  </div>
                </section>
              </PopoverContent>
            </Popover>
          </NavbarItem>
          <NavbarItem>
            <Link href='' className='text-black'><i className='fi fi-rr-interrogation flex items-center justify-center text-lg mr-2'></i>Soporte</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href='' className='text-black'><i className='fi fi-rr-phone-call flex items-center justify-center text-lg mr-2'></i>Contacto</Link>
          </NavbarItem>
        </NavbarContent>
  { /*  <NavbarContent className='hidden min-[530px]:flex' justify='center'>
          <Button color='secondary' variant='shadow'>Iniciar Sesion Con Google</Button> 
        </NavbarContent>  */ }
        <NavbarMenu className='tablet:hidden'>
          <NavbarMenuItem>
            <Link href='/' className='text-black'>Inicio</Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href='' color='secondary' className='text-black'>Soporte Tecnico</Link>
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
                  <Link href='/LevelPrimary' className='text-black hover:text-slate-600'>
                    Primaria
                  </Link>
                  <Link href='/LevelSecondary' className='text-black hover:text-slate-600'>
                    Secundaria
                  </Link>
                  <Link href='/LevelNightCicles' className='text-black hover:text-slate-600'>
                    Formacion Por Ciclos
                  </Link>
                </section>
              </AccordionItem>
              <AccordionItem key='4' aria-label='Servicios' title='Servicios'>
                <section className='grid'>
                  <Link href='/Admissions' className='text-black hover:text-slate-600'>
                    Admisiones
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