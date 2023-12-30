"use client"

import React from 'react';
import { useAppDispatch, useAppSelector } from "../GlobalRedux/hooks";
import { addProduct, deleteProduct } from '@/app/GlobalRedux/Features/products/productSlice';


const content = () => {
    const productsmgt = useAppSelector(state => state.product)
    console.log(productsmgt.product)
  return (
    
      <div className='bg-red-500 wi'>
        <h1>Hello</h1>
   <ul>
     {productsmgt.product.map(x => (
      <div key={x.id}>
        <li>{x.name}</li>
        <li>{x.price}</li>
      </div>
     ))}
    </ul>
   </div>
  );
}

export default content;
