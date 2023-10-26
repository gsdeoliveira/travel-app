"use client";

import { useState } from 'react';

import { NAV_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'

const Navbar = () => {
  const [menuIsOpen, setmenuIsOpen] = useState(true);
  return (
    <>
    <nav className='flexBetween max-container padding-container relative z-30 py-5'>
      <Link href="/">
        <Image src='/hilink-logo.svg' alt='Hilink logo' width={74} height={29} />
      </Link>

      <ul className='hidden h-full gap-12 lg:flex'>
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className='regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'>
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button
          type='button'
          title='Login'
          icon='/user.svg'
          variant='btn_dark_green'
        />
      </div>

      <Image
        src='/menu.svg'
        alt='menu'
        width={32}
        height={32}
        className='inline-block cursor-pointer lg:hidden'
        onClick={
          () => {
            document.body.style.overflow = menuIsOpen ? 'auto' : 'hidden';
            setmenuIsOpen((valor) => !valor)
          }
        }
      />
    </nav>


    {menuIsOpen && (
    <>
      <div className='lg:hidden absolute w-full h-full z-30 bg-black opacity-50 top-0' />
      <nav className='lg:hidden z-40 absolute w-10/12 h-full right-0 top-0 animation-menu flex flex-col gap-5 bold-20 items-center justify-center bg-white'>
        <Image
          src='/close-menu.svg'
          alt='menu'
          width={32}
          height={32}
          className='inline-block cursor-pointer lg:hidden absolute top-5 right-5'
          onClick={
            () => {
              document.body.style.overflow = menuIsOpen ? 'auto' : 'hidden';
              setmenuIsOpen((valor) => !valor)
            }
          }
        />
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key}>{link.label}</Link>
        ))}
      </nav>
    </>
    )}
    </>
  )
}

export default Navbar