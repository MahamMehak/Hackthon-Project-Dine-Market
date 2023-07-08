import React from 'react'
import Image from 'next/image'
import logo from 'public/logo.webp'
import { Button } from '@/components/ui/button'
import {BsTwitter} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'
import Link from 'next/link'


const Dine = () => {
  return (
    <section className='flex flex-col pb-8 mt-24 gap-y-12 lg:flex-row  justify-evenly lg:mt-80 lg:pb-44'>
        {/* Dine  */}
        <div className='w-64 '>
          
          <Image src={logo} alt="logo dine" width={400} height={400} className='pb-8'/>
          <p className='leading-8 pb-8'>Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>
    <div className='flex justify-start gap-6 '>
          <div className='h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center'>
          <BsTwitter className='h-6 w-6' />
        </div>
        <div className='h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center'>
          <FaFacebookF className='h-6 w-6' />
        </div>
        <div className='h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center'>
          <FaLinkedinIn className='h-6 w-6' />
        </div>
    </div>
        </div>
        {/* company */}
        <div>
          <p className='text-2xl font-bold text-gray-500 pb-4'>Company</p>
          <ul className=''>
            <li className='pb-4'><Link href="#">About</Link></li>
            <li className='pb-4'><Link href="#">Terms of Use</Link></li>
            <li className='pb-4'><Link href="#">Terms of Use</Link></li>
            <li className='pb-4'><Link href="#">Privacy Policy</Link></li>
            <li className='pb-4'><Link href="#">How it Works</Link></li>
            <li className='pb-4'><Link href="#">Contact Us</Link></li>
          </ul>
        </div>
        {/* support */}
        <div>
        <div>
          <p className='text-2xl font-bold text-gray-500 pb-4'>Support</p>
          <ul className=''>
            <li className='pb-4'><Link href="#">Support Center</Link></li>
            <li className='pb-4'><Link href="#">24/7 Service</Link></li>
            <li className='pb-4'><Link href="#">Quick Chat</Link></li>
            
          </ul>
        </div>
        </div>
        {/* contact */}
        <div>
        <div>
          <p className='text-2xl font-bold text-gray-500 pb-4'>Contact</p>
          <ul className=''>
            <li className='pb-4'><Link href="#">Whatsapp Service</Link></li>
            <li className='pb-4'><Link href="#">24/7 Service</Link></li>
                        
          </ul>
        </div>
        </div>
    </section>
  )
}

export default Dine