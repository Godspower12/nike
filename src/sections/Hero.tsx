import { arrowRight } from '@/assets/icons';
import Button from '@/components/Button';
import React from 'react';
import Image from 'next/image';
import { statistics } from '../Data';
// import { bigShoe1 } from '@/assets/images';
import collection from "../assets/images/collection-background.svg"
import { valueType } from '@/app/page';
import Link from 'next/link';



const Hero = ({value, setValue, slideIndex, shoes, nextSlide, prevSlide}:valueType) => {
 
 

  const {bigShoe} =  shoes[value]
  // console.log(value);
  return (
    <div>
      <section
      id='home'
      className='w-full flex max-md:flex-col  max-md:w-full
      '
      >
        
        <div className='relative
        xl:w-1/2 flex max-lg:w-full max-lg:justify-center 
       flex-col justify-top items-start
        w-full pt-28 max-lg:pt-10
        lg:pt-10
         lg:w-1/2
         max-md:w-full
         max-md:pb-10
         md:pr-10
         max-md:flex-1
         '>
          <p className='text-red-700 pb-5 font-bold '>Our Summer Collection</p>

          <h1 className='text-[5rem] max-lg:text-[2rem] 
          lg:text-[3rem] font-bold'><span>The New Arrival</span>
          <br />
          <span className=' text-red-500 lg:pr-3
          max-lg:pr-2
          '>Nike</span>
          Shoes
          </h1>
          <p className='text-gray-500 
          w-full py-5
          max-lg:w-full max-lg:p-0
          max-md:w-full
          max-lg:py-5'>Discover stylish Nike arrivals,quality comfort, and innovation for your active life.</p>
        
         <Link href= './products'>
         <Button 
         label = "Shop Now"
         iconUrl = {arrowRight}
         color='flex justify-center items-center
         gap-2 py-4 lg:px-2 lg:py-3
         max-lg:text-sm
         max-lg:mx-0
         max-lg:py-3
         max-lg:px-3
         border font-montserrat 
         text-lg leading-none bg-coral-red rounded-full text-white
         border-coral-red cursor-pointer transition-all ease-in-out duration-700 hover:scale-110'/>
         </Link>

<ul className=" flex-1
       flex justify-start
       item-center
       gap-16
       align-center
       w-full
       py-6">
        {statistics.map((item) => (
         <ul key={item.label} >
           <li className="font-monserrat 
             leading-normal text-3xl max-lg:xl font-bold lg:text-md
             max-lg:text-sm"
            >{item.value}
          </li>
           <li className="font-monserrat 
             leading-normal text-md
             max-lg:text-sm
             text-gray-500"
            >{item.label}
          </li>
         </ul>
        ))}
       </ul>
         </div> 


<div className='Hero-image w-1/2 flex max-lg:w-full justify-center relative 
lg:w-1/2'>
  <div className='flex flex-col w-full justify-center'>
    <Image src={collection} alt='hero'/>
    <div className='absolute flex w-full  flex-col align-center justify-center'>
<div>
      <div>
        <Image width={400} height={400} src={bigShoe} alt='hero-image' className=' flex justify-center w-full z-10 '/>
      </div>
   

   </div>
    
<ul className='flex justify-center  
align-center  space-x-4 p-10  z-10 '>
      {shoes.map((item:any, index:number) => (
        <li key={index} className='border-2
         border-gray-400 active:border-red-500 
         active:opacity-50 rounded-xl z-10 
         cursor-pointer'
         onClick={() => setValue(index)}>
          <Image src={item.thumbnail} alt='hero-img'/>

        </li>

    
      ))}

    </ul>
    </div>

    </div>
  </div>


          </section>
    </div>
  );
}

export default Hero;
