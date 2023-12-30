"use client"
import {headerLogo} from "../assets/images";
import {hamburger} from "../assets/icons"
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "../Data";
import { customer1 } from "../assets/images";
import {cartIcon} from '@/assets/icons';
import { useAppDispatch, useAppSelector } from "../app/GlobalRedux/hooks"
import { show, hide } from "../app/GlobalRedux/Features/toggle/toggleSlice";
import { popup, popout } from "../app/GlobalRedux/Features/user/userSlice";
import Hamburger from "./Hamburger/Hamburger";




const Nav = () => {
  const toggle = useAppSelector(state => state.toggle.value)
  const user = useAppSelector(state => state.user.profile)
  const productsmgt = useAppSelector(state => state.product)
  const dispatch = useAppDispatch()
  
  




  const handleToggle = () => {
    if(toggle) {
      dispatch(hide())
    }else {
      dispatch(show())
      
    }
  }

  const handleUser = () => {
    if(user) {
      dispatch(popout())
    }else {
      dispatch(popup())
      
    }
    
  }
  
  return (

  
  <header className="w-full
  max-md:w-[100%]
  lg:my-7 ml-5 mt-3">
    <div className=" flex 
    w-full
    max-md:w-full
    justify-between 
    items-center
    max-container">

    
    <nav className=" flex 
    max-md:1/2
    justify-between 
    items-center
    max-container
    w-5/6
    max-lg:w-1/2">
       
       <Link href="/">
  <Image 
  src={headerLogo} 
  alt="Logo" 
  width={120}
  height={29}/>
       </Link>

       <ul className="flex-1 
       flex justify-center z-40
       item-center font-bold
       gap-16 max-lg:hidden">
        {navLinks.map((item) => (
          <li key={item.label}>
            <Link href={item.href}
             className="font-monserrat 
             leading-normal 
             first-letter:text-lg
             text-slate-grey hover:text-red-500"
            >{item.label}
            </Link>
          </li>
        ))}
       </ul>
      
      
    </nav>
    <div className="flex justify-between 
    items-center
    align-center w-1/6
    max-lg:w-1/2
   relative ">
       <div className="flex justify-between 
       items-center
       px-5
       w-full max-lg:w-full  ">
        <div className="relative">
          <p className={productsmgt.product.length == 0 ? "hidden" : "absolute bg-red-500 px-1 rounded-[100%] right-0 -top-3 text-[8px] font-bold p-0.5"}>{productsmgt.product.length}</p>
       <Image onClick={handleToggle} src={cartIcon} alt="cart" className="w-[20px] h-[20px] cursor-pointer"/>
        </div>
        <Image 
        onClick={handleUser}
        src={customer1} alt='user-img'
     className={ `w-[40px] h-[40px] border-[1px] max-md:w-[30px] max-md:h-[30px] cursor-pointer rounded-full  
     flex justify-center ${user && `border-red-500`}`}
     
     /> 
       </div>

       <div className="hidden max-lg:block">
      <Hamburger/>
       </div>
       </div>
       </div>
  </header>
  );
}

export default Nav;
