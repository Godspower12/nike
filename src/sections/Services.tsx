import Card from '@/components/Card';
import { services } from '@/Data';

const Services = () => {
  return (
    <div className='service-container'>

      <div className="services bg-gray-100 
      max-lg:px-0
      max-md:p-5
      p-4 flex
      max-md:justify-center
      max-md:text-center
      space-x-4  max-md:space-x-0
      max-md:flex-col">
      {services.map(service => (
       <div  className = " flex p-10 max-lg:p-2 lg:p-5 bg-white rounded-xl max-md:mb-5  w-full text-center " 
       key={service.label}>
      <Card icon = {service.imgURL} title= {service.label} desc = {service.subtext}/>
       </div>
      ))}
       
    </div>
      </div>
  );
}

export default Services;

// className='flex max-md:justify-center'