
// //import Image from 'next/image';
// import { Products } from "@/utils/mock";
// import { StaticImageData } from "next/image";
// import product1 from 'public/product1.png'
// import Image from "next/image";
// import product9 from 'public/product9.png'
// import ProductCard from '@/components/ProductCard';
// import { Button } from "@/components/ui/button";

// const Productlist = () => {
//   const productChecks = Products.slice(0, 3);
//   console.log(productChecks)
   
//   return (
//     <section className='mt-10'>
//         <div className='flex flex-col justify-center items-center mt-10'>
//             <p className='text-1xl text-blue-600 font-bold'>Products</p>
//             <p className='text-3xl font-bold mt-4'>Check What We Have</p>
//         </div>
//     {/* for slider */}
        
//      <div className='flex flex-col gap-y-10 items-center justify-evenly mt-10 lg:flex-row py-10'>
//      {
//           productChecks.map((product)=>(
//             <ProductCard key={product.id}
//              title={product.name} 
//              price={product.price} 
//              img={product.image as StaticImageData}
//              Category={product.category} 
//              id={product.id} /> 
            
//           ))
//         }
     
     
//      </div>
//     </section>
//   )
// }

// export default Productlist

import ProductCard from "@/components/ProductCard";
import { Products } from "@/utils/mock";
import { StaticImageData } from "next/image";

const ProductList = () => {
  const productChecks = Products.slice(0, 3);
  return (
    <section>
    <div className='flex flex-col justify-center items-center mt-10'>
            <p className='text-1xl text-blue-600 font-bold'>Products</p>
            <p className='text-3xl font-bold mt-4'>Check What We Have</p>
        </div>
    <div className="flex flex-col gap-y-10 items-center justify-evenly mt-10 lg:flex-row py-10">
      {productChecks.map((product) => (
        <ProductCard
          key={product.id}
          title={product.name}
          price={product.price}
          img={product.image as StaticImageData}
          category={product.category}
          id={product.id}
        />
      ))}
    </div>
    </section>
  );
};

export default ProductList;

