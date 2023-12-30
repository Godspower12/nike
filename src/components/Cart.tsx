"use client"

import React from 'react';
import { useAppDispatch, useAppSelector } from "../app/GlobalRedux/hooks";
import Image from 'next/image';
import { deleteProduct } from '@/app/GlobalRedux/Features/products/productSlice';
import Button from './Button';

const Cart = () => {
    const productsmgt = useAppSelector(state => state.product)
    //toggle
  const toggle = useAppSelector(state => state.toggle.value)
    const dispatch = useAppDispatch()

    const handleDelete = () => {
        dispatch(deleteProduct(productsmgt))
    }
  return (
    <>
   {toggle && 
    <div className='absolute z-50 bg-white p-5 w-[300px] h-auto  right-10 top-20 shadow-xl'>
    {productsmgt.product.length == 0 ? <p className='flex justify-center text-center align-center'>Cart is Empty</p> :<ul className='flex flex-col  w-[100%] justify-center h-[100%] rounded-lg'>
      {productsmgt.product.map((x:any) => (
       <div key={x.id} className='flex justify-between mt-3 item-center align-center w-[100%] h-[100%] '>
        <div className='h-[15%] w-[15%]  rounded-[100%]'>
         <Image src={x.imgURL} alt='img' className='rounded-lg' />
        </div>
        <div className='h-[100%] w-[100%] flex justify-around mt-1 item-center'>
         <li>{x.name}</li>
         <li>{x.price}</li>
        </div>
         <div className = 'cursor-pointer mt-1 '>
             <p  onClick={() => dispatch(deleteProduct(x))} className='text-red-500'>X</p>
         </div>
       </div>
      ))}
     <button className='w-full bg-coral-red py-2 mt-3 rounded-lg'>Checkout</button>
     </ul>}
    </div>}
    </>
  );
}

export default Cart;
