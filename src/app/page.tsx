"use client"
import  {shoes}  from "@/Data";

import Nav from "@/components/Nav"
import { Hero,
  SuperQuality,
  Services,
  SpecialOffer,
  CustomerReviews,
  Subscribe,
  Footer,
  PopularProducts1} from "../sections"
import { useState } from "react";
import Link from "next/link";



//Test
// import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "./GlobalRedux/hooks";
import { show, hide } from "./GlobalRedux/Features/toggle/toggleSlice";




export type valueType = {
  value:number
  setValue?: any
  slideIndex:any
  nextSlide?:any
  prevSlide?:any
  shoes?:any
  setSlideIndex?: any
}






export default function Home() {
  
  


  const [shoess] = useState(shoes)
  const [slideIndex, setSlideIndex] = useState(1);
 
  
  const nextSlide = () => {
    if(slideIndex !== shoess.length){
      setSlideIndex(slideIndex + 1)
    }else if(slideIndex === shoess.length) {
      setSlideIndex(1)
    }
  }
  const prevSlide = () => {
    if(slideIndex !== 1){
      setSlideIndex(slideIndex - 1)
    }else if(slideIndex ===1) {
      setSlideIndex(shoess.length)
    }
  }



  const [value, setValue] = useState(0);

  return (
    <>
    
    
    <main className="relative w-full overflow-hidden px-20 max-lg:px-10">
     <section className=" ">
      <Hero setValue= {setValue} value = {value}
      slideIndex ={slideIndex} setSlideIndex ={setSlideIndex} nextSlide = {nextSlide}
       prevSlide ={prevSlide} shoes = {shoes}/>
     </section>
     
     <section className="padding
     max-lg:px-2
     ">
      <PopularProducts1/>
     </section>
     <section className="padding
     max-lg:px-2">
      <SuperQuality/>
     </section> 
     <section className="padding-x py=10
     max-lg:px-2">
      <Services/>
     </section>
     <section className="padding
     max-lg:px-2
     ">
      <SpecialOffer/>
     </section>
     <section className=" padding
       max-lg:px-2
     ">
      <CustomerReviews/>
     </section>
     <section className="padding-x 
      max-lg:px-2
      sm:py-32 py-16 w-full">
      <Subscribe/>
     </section>
    </main>
    <div>
    </div>
    </>
  )
}
