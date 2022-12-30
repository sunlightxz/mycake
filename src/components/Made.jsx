import React from 'react'
import made from '../assets/made.png'

const Made = () => {
  return (
    <div className="w-full py-8 relative">
    <div className="md:flex md:justify-between md:items-center md:h-full gap-8  w-5/6 mx-auto font-Alegreya">

        <div className="basis-2/5 md:order-2">
         <img src={made} className= "w-full max-w-[500px] md:max-[600px] " alt="" />
       </div>

       <div className="basis-2/5 ">
         <h1 className='text-3xl md:text-5xl md:mt-0 mt-4 mb-5'>Made with  <br className='hidden md:visible' /> <span className='text-[#70A3AB] mt-4'>Love</span></h1>
         <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur. Vivamus 
        gravida scelerisque massa ut elit convallis et.
        Amet proin et suspendisse molestie.  
        Viverra proin phasellus  tincidunt felis mollis. 

         </p>
         <p className='mt-3 text-gray-700'> Tempor tristique pretium elementum mi mauris. 
        Pellentesque sollicitudin facilisis mauris sit ac libero a. 
        quis pellentesque pretium diam blandit aenean. Ultricies
        obortis in arcu pharetra. Sagittis sed ac nulla mauris. 
        sit ac libero a.
         </p>
       </div>
   </div>
 </div>
  )
}

export default Made