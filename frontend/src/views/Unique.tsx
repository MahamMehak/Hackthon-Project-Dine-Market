import React from 'react'
import feature from '/public/feature.webp'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
const Unique = () => {
  return (
    <section className=' lg:flex flex-col justify-between'>
    
        <div className=' lg:mt-28  '>
            <h1 className=' flex justify-start mt-8 text-3xl  lg:flex justify-end text-5xl font-extrabold bg-gray-100 text-gray-900'>Unique and <br/> Authentic Vintage <br/> Designer Jewellery</h1>
        </div>
       

        
        <div className=' mb-18  lg:flex flex-col bg-gray-100 '>
                
                <div className='flex justify-center items-center  text-6xl  mr-96 ml-8 mt-32 lg:text-8xl absolute ml-14 text-gray-200 mt-28 z-index-1 opasity-o.7  font-extrabold line-height:110px'>
                    Different <br/> From <br/> Others

                </div>
      
                <div className=' flex gap-x-4 ml-6 mr-8 mt-32 pt-2 pb-18 lg:flex gap-x-8 mt-36 ml-14 absolute z-index-1 opasity-o.7'>
                    <p><b >Using Good Quality<br/> Materials</b><br/> Lorem ipsum dolor sit amt,<br/> consectetur adipiscing elit.</p>
                    <p><b>Using Good Quality<br/> Materials</b><br/> Lorem ipsum dolor sit amt, <br/>consectetur adipiscing elit.</p>
                </div>

                <div className='hidden lg:flex absolute ml-6 mt-48 pt-20  gap-x-8 '>
                    <p><b >Using Good Quality<br/> Materials</b><br/> Lorem ipsum dolor sit amt,<br/> consectetur adipiscing elit.</p>
                    <p><b>Using Good Quality<br/> Materials</b><br/> Lorem ipsum dolor sit amt, <br/>consectetur adipiscing elit.</p>
                </div>
                
                <div className='hidden   lg:flex  mt-12 mr-24 pl-96 pr-18 ml-44'>
                <Image src={feature} alt="feature" />
                <p className='flex justify-end mt-6 ml-14 leading-loose'>This piece is ethically<br/>
                         crafted in our small <br/>
                         family-owned workshop<br/>
                         in Peru with unmatched <br/>
                         attention to detail and <br/>
                         care. The Natural color <br/>
                         is the actual natural <br/>
                         color of the fiber, <br/>
                         undyed and 100% traceable.<br/>
                         
                         </p>
                        
                </div >
                
                </div>
                <div className='lg:bg-gray-100'>
                <div>
                <Button className='hidden lg:flex ml-auto  text-white bg-black h-12  mb-38 mt-1 mr-32  px-8 hover: text-white bg-black ' >See All Products</Button> 
                </div>
                <div>
                <Button className='flex justify-center items-center mt-10 hover:text-white bg-black  text-white bg-black h-12 lg:hidden ' >See All Products</Button> 
                </div>
                </div>
        
    
           
        
    </section>
  )
}

export default Unique