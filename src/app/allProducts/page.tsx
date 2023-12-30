import { star } from '@/assets/icons';
import { products } from '@/Data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const PopularProducts = ({query, setQuery}:any) => {
  return (
    <div className=''>
      <h1 className=' font-monserrat text-[3rem]
      
       max-lg:text-[2rem] 
  
       max-md:text-[1.5rem]
       max-sm:text-[1.2rem] 
       font-bold max-md:mb-2 
       '>Our <span className='text-red-500'>Popular</span> Products</h1>
      <p className='text-gray-500
      max-md:mb-5'>Experience a top-notch quality and style with our sought after collections. <br />
      Discover a world of comfort, design, and value. </p>

      <div className="flex flex-row justify-between py-6 lg:gap-[1rem] 
       max-lg:justify-center
       h-auto
       max-md:flex-col
       ">
        {products.slice(0,4).filter(items => items.name.toLowerCase().includes(query)).map((item, id) => (
          <Link key={item.id} href={`/allProducts/${item.id}`}>
          
         
          <div  className='flex flex-col cursor-pointer
          max-md:mb-10 rounded-lg transition-all 
          max-lg:space-around
          max-lg:px-5
          ease-in-out duration-700 hover:shadow-gray-200 
          hover:scale-110  ' >
          <Image src = {item.imgURL} alt='prod'/>
          
          <div className='flex mt-5 
          max-md:mt-2 
          max-lg:mx-1
          mx-5 gap-2'>
          <Image src={star} alt='star'/>
          <p>({item.rating})</p>
          </div>
              <p className='p-5 max-md:py-2 
               max-lg:px-1
               max-lg:p-1
              font-bold'>{item.name}</p>
              <p className='px-5 text-red-500
               max-lg:px-1
              font-bold'>{item.price}</p>
          </div>
          </Link>
        ))
        }
      </div>
    </div>
  );
}

export default PopularProducts;
