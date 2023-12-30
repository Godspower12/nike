import { footerLogo, headerLogo } from '@/assets/images';
import { footerLinks, socialMedia } from '@/Data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className='flex flex-col justify-between item-center align-center pb-2 w-full'>
    <div className='text-white 
    lg:px-20 
    max-lg:px-10
    px-40 py-10 
    flex justify-between
    max-md:justify-center
    max-md:align-center
    max-md:px-4
    max-md:w-full
    max-md:flex-col
    
    '>
      
      <div className='flex flex-col
       w-1/4
       max-md:w-full
       max-md:mb-5
       max-md:text-center
       '>
      <div className='mb-4
       flex
       max-md:justify-center
       max-md:py-5
       '>
      <Link href="/">
  <Image 
  src={footerLogo} 
  alt="Logo" 
  width={130}
  height={29} className='text-white'/>
       </Link>
      </div>
      <p className='
       max-md: mb-4'>Get shoes ready for the new term at your nearest Nike store.Find your perfect size
        in store.
      </p>
      <div className='flex
       max-md:justify-center
      gap-4 mt-4'>
        {socialMedia.map((item, index) => (
        <div key={index} className=' bg-white w-[40px] cursor-pointer 
        h-[40px] flex justify-center  align-center  rounded-full '>
          <Image src={item.src} alt='sm'/>

        </div>
        ))}
      </div>
      </div>
      
      
      {
        footerLinks.map((footerr) => (
          <div key={footerr.title} className='flex flex-col 
          max-md:w-full
          max-md:justify-center
          max-md:text-center
          max-md:py-5
          max-md:px-0
          text-md gap-2 text-gray-400 '>
            <h1 className='text-lg
            max-md:text-xl
            text-white 
            max-md:px-0

            cursor-pointer'>{footerr.title}</h1>
            {footerr.links.map((foot, index) =>(
                <Link href= "/">
                <p key={index} className='font-light
                hover:text-white 
                max-md:text-lg
                cursor-pointer
                max-md:w-full'>{foot.name}</p>
                </Link>
            ))}
          </div>
        ))
      }
    </div>
     <div className="text-white w-full flex item-center justify-center">
    <span> Developed by <Link href="https://godspowerogbudhu.netlify.app/"><span className='text-orange-500'>Gp</span></Link>.</span> 
   </div>
   </div>
  );
}

export default Footer;
