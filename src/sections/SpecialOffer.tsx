import Image from 'next/image';
import React from 'react';
import { offer } from '@/assets/images';
import Button from '@/components/Button';
import { arrowRight } from '@/assets/icons';
import Link from 'next/link';

const SpecialOffer = () => {
  return (
    <div className='offer-container 
    max-md:flex-col
    flex w-full'>
      <div className="left-offer w-1/2 
      max-md:w-full
      flex justify-center 
      align-center p-5">
     <Image src= {offer} alt='offer'/>
      </div>
      <div className="right-offer w-1/2 
      flex flex-col 
      max-md:w-full
      justify-center align-center
      max-lg:p-1
      p-5">
  <h1 className='text-[2.5rem] lg:text-[2rem] font-bold'><span className='text-coral-red '>Special</span> Offer</h1>
      <p className='text-gray-500 py-4'>Embark on a shooping journey that redefines your experience with 
        unbeatable deals. From premier selections ro incredible savings, we 
        offer unparalled value that sets us apart.</p>
      
      <p className='text-gray-500 
      max-lg:py-2 py-4'>Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your 
        journey with us is nothing short of exceptional</p>
      
      <div className="btn flex 
      max-md:pt-3
      max-md:flex-col
      gap-4">
        <Link href= './products'>
        <Button label = "Shop now" iconUrl={arrowRight}
         color='flex justify-center items-center
         gap-2 px-3 py-4 lg:px-2 lg:py-2 
         max-md:py-3
         max-md:w-full
   max-lg:px-1 max-lg:py-2 
    lg:text-sm border font-montserrat 
    text-lg leading-none bg-coral-red 
    rounded-full text-white
    border-coral-red cursor-pointer 
    transition-all ease-in-out duration-700 hover:scale-110'/></Link>
        <Button label = "Learn more" iconUrl={arrowRight}
         color='flex justify-center items-center
    gap-2 px-3 py-4 
    lg:py-2 lg:text-sm lg:px-2 border font-montserrat 
    text-lg leading-none bg-white rounded-full
    border-gray-500 cursor-pointer transition-all
     ease-in-out duration-700 hover:scale-110'/>
      </div>
      </div>
     
    </div>
  );
}

export default SpecialOffer;
