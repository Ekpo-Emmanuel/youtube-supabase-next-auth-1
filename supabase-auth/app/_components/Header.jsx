'use client'

import { useState } from "react"
import Link from "next/link";
import logo from '../../public/images/logo.svg';
import Image from 'next/image';


export default function Header() {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open)
  }
  
  
  return (
    <>
      <div className="w-full mx-auto bg-white px-8 lg:px-12 sm:px-16 2xl:max-w-7xl">
      <div className="relative flex w-full py-3 mx-auto bg-white md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className="flex flex-row items-center  justify-between lg:justify-start">
          <Link href="/" className="flex items-center ">
            <Image
              src={logo}
              alt="Logo"
              width={100}
              height={100}
            />
          </Link>
          <button onClick={toggleOpen} className="inline-flex items-center justify-center p-2  hover:text-black focus:outline-none focus:text-black md:hidden">
          <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path className={open ? 'hidden' : 'inline-flex'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            <path className={open ? 'inline-flex' : 'hidden'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        </div>
        <nav className={`flex-col items-center flex-grow ${open ? 'flex' : 'hidden'} ${!open ? 'hidden' : ''} md:pb-0 md:flex md:justify-end md:flex-row`}>
        {/* <nav className={`flex-col items-center flex-grow flex `}> */}
          <Link className="px-2 py-2 text-sm lg:px-6 md:px-3 hover:text-blue-600 lg:ml-auto" href="#">
            About
          </Link>
          <Link className="px-2 py-2 text-sm lg:px-6 md:px-3 hover:text-blue-600" href="#features">
            Features
          </Link>
          <Link className="px-2 py-2 text-sm lg:px-6 md:px-3 hover:text-blue-600" href="#">
            Contact
          </Link>

          <div className="inline-flex items-center gap-2 list-none lg:ml-auto">
                <Link  href="/api/auth/sign-in" className="dark:text-white font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-1 dark:hover:bg-gray-700">
                  Log in
                </Link>
                  <Link 
                  href='/api/auth/sign-up'
                  className="flex items-center justify-center w-full h-8 px-4 py-2 text-sm font-semibold text-white transition-all bg-blue-500 rounded-lg hover:bg-blue-600 md:w-auto"
                    >Get Started</Link>
              </div>
            </nav>
      </div>
      </div>  

    </>          
  )
}
