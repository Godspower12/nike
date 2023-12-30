import React from 'react';
import { headerLogo } from '@/assets/images';
import Image from 'next/image';
import Button from '@/components/Button';

const page = () => {
  return (
    
    <div className='flex w-full 
    md:px-10
    max-lg:flex-col
    max-lg:px-10
    justify-between py-10 '>
        <div  className='w-full flex flex-col justify-top p-5
         max-lg:w-full
         h-screen
         md:p-10
         '>
            <h2 className='text-red-500 text-lg font-bold'>About Us</h2>
            <p className='max-md:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quia architecto facilis.
                 Quos iusto quae ipsam ducimus provident adipisci veritatis magnam maiores, velit obcaecati 
                 perferendis illo totam ab nobis optio similique cumque aliquid libero quidem sint alias nemo ut.
                  Blanditiis voluptatum laborum dolores saepe, modi hic, nisi non nostrum quo delectus ducimus maiores
                   quis, nam assumenda repudiandae corporis! Quos amet eius sunt enim fugit id laboriosam ducimus porro
                    deserunt vero, provident impedit praesentium libero dicta tempore similique dolor eligendi sed rem! Cum eveniet praesentium 
                nemo eos quo molestiae alias, corporis facere! Quidem corporis at recusandae voluptate nostrum, magni eveniet repudiandae?.</p>
        
            
          
        </div>  
    </div>


  );
}

export default page;
