"use client"
import { products } from '@/Data';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { star } from '@/assets/icons';
const Items = () => {
    return (
    <div className='flex gap-5 justify-center align-center py-5'>
     {products.slice(0,4).map((item, id) => (
      // <Link href={`/items/${id}`}>
      <div key={item.name} className='flex flex-col cursor-pointer
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
      // </Link>
          
        ))}
    </div>
  );
}

export default Items;
