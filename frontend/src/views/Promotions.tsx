import React from 'react'
import Image from 'next/image'
import event1 from 'public/event1.webp'
import event2 from 'public/event2.webp'
import event3 from 'public/event3.webp'
const Promotions = () => {
  return (
    <section className='pt-4 pb-4 pr-8 pl-8 mt-10 '>

            <span className='flex justify-center items-center text-blue-600 text-1xl font-bold sm:flex justify-center items-center '>Promotions</span>
            <h2 className='flex justify-center items-center lg:flex item-center justify-center text-3xl font-bold sm:flex justify-center items-center '>Our Promotions Events</h2>
   
  <div className='flex flex-col justify-between gap-4 mt-10 lg:flex-row '>
   {/* first div */}
    <div className='flex flex-col '>

<div className="flex justify-center items-center bg-gray-200 mt-10 px-32 ml-2 py-8">
  <div className="flex-shrink-0 ">
    <Image
      src={event1}
      alt="event"
      className="h-218 w-218"
      loading="lazy"
      data-nimg="1"
      decoding="async"
      height="218"
      width="218"
    />
  </div>
  <div className="mr-6">
    <p className='mr-8'>Get ready for</p>
    <p className="text-3xl font-extrabold mr-6">60% off</p>
  </div>
</div>
{/* first div part 2 */}
<div className="py-8 px-4 mt-7 bg-black flex items-center justify-center">
  <p className="text-white text-center">
    <span className="text-4xl font-bold">GET 30% Off</span>
    <span className="block text-lg mt-4">USE PROMO CODE</span>
    <button className="mt-8 py-2 px-4 bg-white text-black rounded-full">Dineweekendsale</button>
  </p>
</div>

</div>

{/* column div */}
     <div className='flex mt-10 gap-x-6'>
     <div className="lg:w-80 h-120 bg-pink-200 flex flex-col items-center justify-center">
  <p className="text-center font-bold mt-8">Flex Sweatshirt</p>
  <p className="text-center">$100.00$75.00</p>
  <Image src={event2} alt="event2" className="mt-8" />
      </div>

      <div className="w-80 h-120 bg-gray-200 flex flex-col items-center justify-center">
  <p className="text-center font-bold mt-8">Flex Sweatshirt</p>
  <p className="text-center">$100.00$75.00</p>
  <Image src={event3} alt="event3" className="mt-8" />
      </div>

     </div>

</div>
    </section>
  )
}

export default Promotions