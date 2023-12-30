import React, { useState } from 'react';
import "./Hamburger.css";
import Link from 'next/link';
import { navLinks } from '@/Data';

function Hamburger() {

  const [show, setShow] = useState(false);

  const handleMenu = () => {
    setShow(!show)
  }
  return (
    <div className='menu-wrap'>
      <input onClick={handleMenu} type="checkbox" name="" id=""  className='toggler'/>
      <div className="hamburger">
        <div></div>
      </div>
     { show && <div className="menu-background">
        <div>
        <div className='menu-container'>
          
    <div className='menu'>
    <ul className="flex-1 
       flex justify-center z-40
       item-center font-bold
       gap-16 max-lg:hidden">
        {navLinks.map((item:any) => (
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
    </div> 
    </div>
        </div>
      </div>}
    </div>
  );
}

export default Hamburger;
