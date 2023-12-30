"use client"
import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation'
import { products } from '@/Data';
import Image from 'next/image';


const ItemId = ({params}) => {
  // const productDetails = products.filter(item => item.id == params.id);
  // const product = productDetails[0];
  // console.log(product);
    // const pathname = useRouter()
    // const searchParams = useSearchParams()
    // const url = `${pathname}?${searchParams}`;
    // const path = pathname.push(`./items/${params.id}`)
  return (
    <div>
      {/* <Image src={product.imgURL} alt='img'/> */}
    </div>
  );
}

export default ItemId;
