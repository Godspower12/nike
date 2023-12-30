"use client"

import React from 'react';
import Button from './Button';
import { arrowRight } from '@/assets/icons';

const Input = ({query, setQuery}) => {
  return (
    <div>
      <div className='w-full
      max-md:w-full
      
      lg:full 
      
      flex h-1/2 justify-center align-center'>
        <div className="form flex
        justify-center align-center border-2  py-2
         max-lg:w-full
         w-1/2
         px-2
         max-md:flex-col
         max-md:border-none
         max-md:gap-3
         rounded-[50px]
         lg:px-1">
          <input className="flex-1
           py-2 px-2 outline-none lg:px-2
           rounded-[50px]" type="text"
            placeholder='search products'
            onChange={e=> setQuery(e.target.value.toLowerCase())} 
            id='input'/>
        </div>
      </div>
    </div>
  );
}

export default Input;
