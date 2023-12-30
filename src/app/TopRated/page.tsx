import React from 'react';
import { star } from '@/assets/icons';
import { products } from '@/Data';
import Image from 'next/image';
import Link from 'next/link';

const TopRated = ({query, setQuery}:any) => {
  return (
    <div>
    <h1 className=' font-monserrat text-[3rem]
    
     max-lg:text-[2rem] 

     max-md:text-[1.5rem]
     max-sm:text-[1.2rem] 
     font-bold max-md:mb-2 
     '><span className='text-red-500'>Top-rated</span> Products</h1>
    <p className='text-gray-500
    max-md:mb-5'>Lorem ipsum dolor sit amet consectetur 
    adipisicing elit. Numquam nemo a corporis
     veritatis iure officiis placeat voluptatem dolorem quaerat quia.. </p>

    <div className="flex justify-around py-6  
     max-md:flex-col
     w-full
     ">
      {products.slice(5).filter(items => items.name.toLowerCase().includes(query)).map((item, id) => (
       <Link key={id} href={`/TopRated/${item.id}`}>
       <div  className='flex flex-col cursor-pointer
        max-md:mb-10 rounded-lg transition-all 
        max-lg:space-around
        w-[200px] h-[60%] 
        lg:w-[150px]  
        md:w-[120px]  
        max-md:w-[100%]
        ease-in-out duration-700 hover:shadow-gray-200 
        hover:scale-110  ' >
          
        <Image src = {item.imgURL} alt='prod'  className='
        w-auto h-auto
        max-md:w-full flex justify-center rounded-lg'/>
        
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
      ))}
    </div>
  </div>
  );
}

export default TopRated;
