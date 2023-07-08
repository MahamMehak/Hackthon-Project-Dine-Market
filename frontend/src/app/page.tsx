import Image from 'next/image'
import Hero from '@/views/Hero'
import Promotions from '@/views/Promotions'
import Products from '@/views/Productlist'
import Unique from '@/views/Unique'
import Newsletter from '@/views/Newsletter'
import Dine from '@/views/Dine'
//import Mobilenav from '@/compo/layout/mobilenav'
export default function Home() {
  return (
    <div>
     <Hero />
     <Promotions />
     <Products />
     <Unique />
     <Newsletter />
     <Dine />
     {/* <Mobilenav/> */}
    </div>
  )
}
