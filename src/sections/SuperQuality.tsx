import Image from "next/image";
// import { collection } from "@/assets/images";
import collection from "@/assets/images/shoe8.svg"
import Button from "@/components/Button";
import { arrowRight } from '@/assets/icons';


const SuperQuality = () => {
  return (
    <div className="flex max-md:flex-col
    ">
    <div className="w-1/2 px-20
    max-lg:px-0
    max-md:w-full
    max-md:pb-10
    lg:p-0 flex flex-col align-center justify-center">
    <h1 className=' font-monserrat 
    max-lg:[0.5rem]
    text-[2rem] font-bold '>We Provide You With <span className='text-red-500'>Super Quality</span> Shoes</h1>
      <p className='text-gray-500 py-4'>Ensuring premium comfort and style, our meticulously crafted
      footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance. </p>
      
      
      <p className='text-gray-500 py-4'> Our dedication to detail and excellence ensures your satisfaction. </p>
       
      <div className="super-btn">
      <Button
      iconUrl={arrowRight}
       label="View details"
       color='flex justify-center items-center
    gap-2 px-3
    lg:px-1 lg:py-3 py-4 border font-montserrat 
    text-lg leading-none bg-coral-red rounded-full text-white
    border-coral-red cursor-pointer transition-all ease-in-out duration-700 hover:scale-110'
       />

      </div>
    </div>

      <div className='w- 1/2 flex justify-center align-center transition-all cursor-pointer ease-in-out duration-700 hover:shadow-gray-200 hover:scale-110'>
     <Image src={collection} alt="offer"/>
    </div>
    </div>
  );
}

export default SuperQuality;
