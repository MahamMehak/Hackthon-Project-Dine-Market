

"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '/public/logo.webp';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className='w-full sm:px-20  top-0 z-50  bg-white '>
      <div className='flex justify-between items-center  md: py-4 '>
        <div>
          <Link href='/'>
            <Image src={logo} alt='logo' className='w-40' />
          </Link>
        </div>

        <div className='md:hidden'>
          <button
            type='button'
            onClick={toggleMenu}
            className='text-gray-600 hover:text-gray-800 focus:outline-none'
          >
            {isMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </button>
        </div>

        <div className='hidden  md:flex md:items-center'>
          <ul className='flex gap-x-6 mr-44'>
            <li className='text-lg'>
              <Link href={"/category/female"}> Female</Link>
            </li>
            <li className='text-lg'>
              <Link href={"/category/male"}> Male</Link>
            </li>
            <li className='text-lg'>
              <Link href={"/category/kids"}> Kids</Link>
            </li>
            <li className='text-lg'>
              <Link href={"/products"}> All Products</Link>
            </li>
          </ul>

          <div className="flex items-center mr-14">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="px-2 py-1 border border-gray-300 rounded-l-md w-full"
            />
            <button
              type="submit"
              className="flex items-center justify-center px-2 py-1 border border-gray-300 rounded-r-md bg-white"
            >
              <AiOutlineSearch className="text-gray-300" size={24} />
            </button>
          </div>

          <div className='h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center ml-4'>
            <ShoppingCart className='h-6 w-6' />
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className='fixed top-0 left-0 pb-52 gap-24 h-screen w-screen bg-white z-10 flex flex-col items-center justify-center lg:hidden'>
          <div className='flex justify-evenly gap-44'> 
          <Image src={logo} alt="logo"  width={200} height={100} />
          <Button className='h-10 w-10 box-full   bg-gray-200  justify-end  ml-4 hover:bg-gray-200 lg:hidden' onClick={closeMenu}>
            <Link href={"/"}>
              <RxCross1 />
            </Link>
          </Button>
          </div>
          <ul className='flex flex-col gap-y-4  '>
            <li className='text-lg '>
              <Link href={"/category/female"}> Female</Link>
            </li>
            <li className='text-lg'>
              <Link href={"/category/male"}> Male</Link>
            </li>
            <li className='text-lg'>
              <Link href={"/category/kids"}> Kids</Link>
            </li>
            <li className='text-lg'>
              <Link href={"/products"}> All Products</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;

