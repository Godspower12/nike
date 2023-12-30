import React from 'react';
import Image from 'next/image';


type Iprop = {
label: string,
iconUrl?: string,
color: string
onClick?: React.MouseEventHandler<HTMLButtonElement>
}


const Button = ({label, iconUrl, color, onClick}:Iprop) => {
  return (
    <button className= {color} onClick={onClick}>
        {label}
        <Image src={iconUrl ? iconUrl : ""} alt="icon"  
        className='ml-2 rounded-full 
        w-5 h-5'/>
    </button>
  );
}

export default Button;
