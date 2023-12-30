"use client"

import TopRated from '@/app/TopRated/page';
import Input from '@/components/Input';
import Nav from '@/components/Nav';
import { Footer} from '@/sections';
import Link from 'next/link';
import React, { useState } from 'react';
import PopularProducts from "../allProducts/page"

interface pageProps {
 params: {id:string}
}


const Products:React.FC = () => {

  const [query, setQuery] = useState("");

  return (
    <>
    <div className="relative w-full overflow-hidden px-20 max-lg:px-10">
      <Input query= {query} setQuery = {setQuery}/>
      <section className="padding
     max-lg:px-2
     ">
      
      <PopularProducts query = {query} setQuery = {setQuery}/>

     </section>

      <section className="padding
     max-lg:px-2
     ">
      <TopRated query = {query} setQuery = {setQuery}/>
     </section>

    </div>
      <section className="bg-black 
     ">
    
     </section>
    
    </>
  );
}

export default Products;
