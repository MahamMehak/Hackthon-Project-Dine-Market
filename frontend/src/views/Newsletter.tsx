import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'

const Newsletter = () => {
  return (
    <section className='pb-96' >
            <div className=' hidden lg:flex flex-row text-9xl absolute ml-72 text-gray-200 mt-64 z-index-1 opasity-o.7  font-extrabold line-height:110px'>
                    Newsletter  </div>
            <p className='hidden lg:flex justify-center items-center text-4xl absolute ml-80 pl-28  mt-60  font-bold line-height:110px'>Subcribe Our News letter</p>
            <p className='hidden lg:flex justify-center items-center text-2xl absolute ml-60 pl-28  mt-72  line-height:110px'>Get the latest information and promo offers directly</p>
            <div className="hidden lg:flex w-full max-w-sm items-center pb-96 space-x-2 flex justify-center items-center text-2xl absolute ml-96  mt-96  line-height:110px">
      <Input type="email" placeholder="Input Email Address" className='ml-16 w-96'/>
      <Button type="submit" className='bg-black  w-18 ml-16 text-white hover:bg-black'>Subscribe</Button>
    </div>  
                {/*responsive  */}
                <div className='flex justify-center mt-96 pb-52 lg:hidden'>
    <div className=' flex justify-center text-6xl mr-8 absolute ml-8 text-gray-200 mt-64 z-index-1 opasity-o.7  font-extrabold line-height:110px lg:hidden'>
                    Newsletter  </div>
            <p className='flex justify-center items-center text-1xl absolute  pl-8  mt-64  font-bold line-height:110px lg:hidden'>Subcribe Our News letter</p>
            <p className='flex justify-center items-center  absolute pl-16 pr-12 mt-72  line-height:110px lg:hidden'>Get the latest information and promo offers directly</p>
            <div className="flex w-full max-w-sm items-center space-x-2 flex justify-center items-center text-2xl absolute  mt-80 pt-8 mr-16  line-height:110px lg:hidden">
      <Input type="email" placeholder="Input Email Address" className='ml-16 w-96'/>
      <Button type="submit" className='bg-black  w-18 ml-16 text-white hover:bg-black lg:hidden'>Subscribe</Button>
    </div>  
                </div>
        
        
    </section>
  )
}

export default Newsletter