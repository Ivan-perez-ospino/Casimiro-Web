'use client';

 
import { Fragment, useState } from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Popover, PopoverTrigger, PopoverContent, Accordion, AccordionItem, Image } from '@nextui-org/react';


export default function NavBarDashboardStudent(): JSX.Element {


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
            <Image src='/casimiro-logo.svg' alt='Logo' className='w-8 mr-2' />
            <h1>Casimiro Web</h1>
          </NavbarBrand>
        </NavbarContent>


        <NavbarContent className='hidden laptop:flex gap-4' justify='end'>
          <NavbarItem>
            <Link href='/' className='text-black hover:text-blue-600'><i className='fi fi-rr-home flex items-center justify-center text-lg mr-2'></i> Inicio</Link>
          </NavbarItem>


          {/* <NavbarItem>
            <Link href='/EventsAndHorary' className='text-black hover:text-blue-600'><i className='fi fi-rr-calendar-star flex items-center justify-center text-lg mr-2'></i>Eventos Y Horarios</Link>
          </NavbarItem> */}


          <NavbarItem>
            <Link href='/Blog' className='text-black hover:text-blue-600'><i className='fi fi-rr-blog-text flex items-center justify-center text-lg mr-2'></i>Blog</Link>
          </NavbarItem>


          <NavbarItem>
            <Link href='/News' className='text-black hover:text-blue-600'><i className='fi fi-rr-bell flex items-center justify-center text-lg mr-2'></i>Novedades</Link>
          </NavbarItem>


          {/* <NavbarItem>
            <Link href='/Resources' className='text-black hover:text-blue-600'><i className='fi fi-rr-resources flex items-center justify-center text-lg mr-2'></i>Recursos Educativos</Link>
          </NavbarItem> */}


          <NavbarItem>
            <Link href='/CasimiroLearn' className='text-black hover:text-blue-600'><i className='fi fi-rr-book-bookmark flex items-center justify-center text-lg mr-2'></i>Aprende</Link>
          </NavbarItem>


          {/* <NavbarItem>
            <Link href='' className='text-black hover:text-blue-600'><i className='fi fi-rr-interrogation flex items-center justify-center text-lg mr-2'></i>Soporte</Link>
          </NavbarItem> */}


        {/*  <NavbarItem>
            <Link href='' className='text-black hover:text-blue-600'><i className='fi fi-rr-phone-call flex items-center justify-center text-lg mr-2'></i>Contacto</Link>
          </NavbarItem> */}


        </NavbarContent>


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
            <Accordion variant='light'>
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