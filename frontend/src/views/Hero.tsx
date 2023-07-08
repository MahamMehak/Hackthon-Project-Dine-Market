

import React from 'react'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from "@/components/ui/button"
import {BsCartCheck} from 'react-icons/bs'
import brand1 from 'public/brand1.webp'
import brand2 from 'public/brand2.webp'
import brand3 from 'public/brand3.webp'
import brand4 from 'public/brand4.webp'
import header from 'public/header.webp'


const Hero = () => {
  return (
    <section className='flex flex-col lg:flex-row gap-y-10  py-6 '>
        {/* right side */}
        <div>
        <Badge className='py-3 mt-10 px-8 rounded-lg bg-blue-200 text-blue-700 hover:bg-blue-200'>Sale 70%</Badge>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-10">
        An Industrial Take on Streetwear
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-10 mr-6">
      Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
      </p>
      <Button className='text-white bg-black h-12 px-8 mt-10' >
        <BsCartCheck className='mr-2 h-4 w-4'/ >Start Shopping</Button>
        <div className='flex gap-5 mt-10'>
            <Image src={brand1} alt="brand"/>
            <Image src={brand2} alt="brand"/>
            <Image src={brand3} alt="brand"/>
            <Image src={brand4} alt="brand"/>
        </div>
        </div >
        {/* left side */}
        {/* <Image src={header} alt="header"  /> */}
        <div className='lg:mr-4'>
        <div className="rounded-full w-[200] h-[200] bg-pink-100 flex items-center justify-center">
  <Image src={header} alt="header" className="rounded lg:w-[600] lg:h:[600] ml-10 " />
</div>
        </div>
      

        <div>

        </div>
    </section>
  )
}

export default Hero