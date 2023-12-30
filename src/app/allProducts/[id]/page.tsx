"use client"
import React, { useEffect, useState } from 'react';
import { products } from '@/Data';
import Image from 'next/image';
import { star, cartIcon, whiteCart } from '@/assets/icons';
import Button from '@/components/Button';
import { useAppDispatch } from "../../GlobalRedux/hooks";
import { addProduct, deleteProduct } from '@/app/GlobalRedux/Features/products/productSlice';





  
const Prod = ({params}:any) => {
  const [cartBtn, setCartBtn]= useState("Add to Cart")
  const dispatch = useAppDispatch()

//redux state management

  const productDetails = products.filter(item => item.id == params.id);
  const product = productDetails[0];
  // console.log(product);
  
  
//Add to cart button text toggle
  const handleClick = () => {
    if(cartBtn === 'Add to Cart') {
      dispatch(addProduct(product))
      setCartBtn('Remove from Cart')
      
    }else if(cartBtn === 'Remove from Cart'){
      dispatch(deleteProduct(product))
      setCartBtn('Add to Cart')

    }
  }

  return (
    <div className='px-40 w-full py-10
    max-lg:px-10
    '>
       {productDetails.map(prod =>  (
    <div key={prod.id} className='flex w-full 
    md:px-10
    max-lg:flex-col
    max-lg:px-10
    justify-between py-10 '>
        <div className='w-1/2 p-20
        max-lg:w-full
        max-lg:p-0
        md:p-20
        lg:p-10
        
        '
        >
      <Image src={prod.imgURL} alt='img' className='w-full
        '/>
        </div>
        <div  className='w-1/2 flex flex-col justify-center p-5
         max-lg:w-full
         md:p-10
         '>
            <h1  className='font-bold text-[2rem]
            max-lg:text-[1.5rem]
            max-sm:text-[1rem]
            
            '>{prod.name}</h1>
            <p>{prod.price}</p>
           <div className='flex gap-2'>
           <Image src={star} alt='img'/>
            <p>{prod.rating}</p>
           </div>
           <div className="btn my-5">
            <Button 
            iconUrl={whiteCart}
            label={cartBtn}
            color='flex justify-center items-center
            gap-2 py-4 lg:px-2 lg:py-3
            max-lg:text-sm
            max-lg:mx-0
            max-lg:py-3
            max-lg:px-3
            max-md:text-[10px]
            border font-montserrat 
            text-lg leading-none bg-coral-red rounded-full text-white
            border-coral-red cursor-pointer transition-all ease-in-out 
            duration-700 hover:scale-110'
            onClick= {handleClick}  />
           </div>
        </div>
    </div>
       ))}
    <p className='max-md:text-sm'>Designed for comfortable wear for sports and street style, NIKE is always 
        fun to wear. Upgrade in style with a wide range from the world’s
         leading and much-loved sports brand, NIKE.



* Product number: DV4022-400

* Manufacturer: Nike

* Types of shoes: Neutral Gait, Supination

* Technology: Flywire, Nike Air, Cushlon

* Function: Breathable

* Shoe width: Standard

* Color: COLLEGE NAVY/METAL SILVER



Types of shoes: Neutral Gait, SupinationTechnology: Flywire, Nike Air, CushlonTerrain: RoadType of run: TrainingModel: Nike WinfloSport: RunFunction: BreathableComfort and cushioning: MediumShoe width: Standard</p>
    </div>
  );
};


export default Prod;