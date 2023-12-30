import { star } from '@/assets/icons';
import { reviews } from '@/Data';
import Image from 'next/image';
import React from 'react';

const CustomerReviews = () => {
  return (
    <>
    <div className='flex flex-col
    justify-center w-full align-center'>
     <div className='px-[30%]
      max-lg:px-2
     lg:px-20'>
     <h1 className=' font-monserrat text-[2.5rem] 
     font-bold text-center flex 
     max-md:text-[1.5rem]
     justify-center align-center
      w-full'>What our <span className='text-red-500 mx-2'>Customers</span>  Say?</h1>
    <p className='font-monserrat text-center flex justify-center
     align-center text-gray-500'>Hear genuine stories from our satisfied customers about
      their exceptional experience with us.</p>
     </div>

<div className="tesimonials py-10 
lg:px-10
max-lg:px-2
max-lg:gap-4
justify-between w-full px-[15%] align-center flex
max-md:flex-col">
  {reviews.map(review => (
   <div className='
   lg:w-[300px]
   flex flex-col text-center justify-center
   max-md:mb-10'
   key={review.customerName}>
    
    <div className='w-full rounded-full  
     flex justify-center'>
      <Image src={review.imgURL} alt='review-img'
     className='w-[100px] rounded-full  
     flex justify-center'/> 
      </div> 
    <p className='text-gray-500 py-2'>{review.feedback}</p>
   <div className='flex justify-center gap-2 py-2'>
    <Image src={star} alt='star'/>
   <h2>({review.rating})</h2>
   </div>
    <h1
     className='font-bold text-lg'>
      {review.customerName}</h1>
   </div>
  ))}
</div>
    </div>
    </>
  );
}

export default CustomerReviews;
