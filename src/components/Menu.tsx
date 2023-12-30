"use client"

import React from 'react';
import {useAppSelector} from "../app/GlobalRedux/hooks";

const Menu = () => {
    const user = useAppSelector(state => state.user.profile)
  return (
    <>
      {user && 
    <div className='absolute z-50 bg-white p-5 w-[150px] h-auto  right-10 top-[5rem] max-lg:top-[4rem] shadow-xl'>
       <ul className='font-bold cursor-pointer'>
       <li>Inbox <span className='text-red-500 text-[12px]'>(2)</span></li>
        <li>Social Feeds</li>
        <li className='text-red-500'>Logout</li>
       </ul>
    </div>
      }
    </>
  );
}

export default Menu;
