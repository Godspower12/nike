import { arrowRight } from '@/assets/icons';
import Button from '@/components/Button';
import React from 'react';

const Subscribe = () => {
  return (
    <div className='flex justify-between 
    align-center
    max-md:flex-col
    
    '>
     
     <div className='w-full lg:w-1/3
     max-md:w-full
     max-md:mb-5
     '>
      <h1 className='text-3xl font-bold
      
      max-lg:text-2xl
      lg:text-lg'>Sign Up for <span className='
      text-coral-red'>Updates</span> <br />& Newsletters</h1>
     </div>
     

      
      
      
      
      
      <div className='w-1/2 
      
      max-md:w-full
      
      lg:w-1/2 
      
      flex h-1/2 justify-center align-center'>
        <div className="form flex lg:w-[100%]
         w-[80%] justify-center align-center border-2  py-2
         max-lg:w-full
         max-md:flex-col
         max-md:border-none
         max-md:gap-3
         px-2 rounded-[50px]
         lg:px-1">
          <input className="flex-1
           py-2 px-2 outline-none lg:px-2
           rounded-[50px]" type="text" placeholder='subscribe@nike.com' />
        <Button 
        iconUrl={arrowRight}
        label="Sign Up"
        color='flex justify-center items-center
     gap-2 px-3 py-2 border font-montserrat 
     max-lg:px-5
     lg:text-sm leading-none bg-coral-red rounded-full
     text-white text-sm
     border-coral-red cursor-pointer transition-all
      ease-in-out duration-700 hover:scale-110'/>
        </div>
      </div>



    </div>
  );
}

export default Subscribe;
