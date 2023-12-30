import Image from 'next/image';
import React from 'react';

type CardType = {
    icon: string,
    title: string,
    desc: string,
}


const Card = ({title, desc, icon} :CardType)  => {
  return (
    <div className='w-full flex flex-col'>
        <div className='w-100 p-2 flex justify-center
        '>
        <Image src={icon} alt='cardImg' width="40" height="40"
        className='bg-coral-red w-10 p-2 rounded-3xl
        flex max-md:align-center max-md:justify-center
        '
        />
        </div>
      <h1 className='py-5 text-xl font-bold '>{title}</h1>
      <p className='py-1 text-md text-gray-500 '>{desc}</p>
    </div>
  );
}

export default Card;
