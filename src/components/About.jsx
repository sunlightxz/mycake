import React from 'react'
import about from '../assets/about.png'
const About = () => {
  return (
    <div className="w-full py-8 relative " id='about'>
       <div className="md:flex md:justify-between md:items-center md:h-full gap-8  w-5/6 mx-auto font-Alegreya">
          <div className="basis-2/5">
            <img src={about} className= "w-full max-w-[500px] md:max-[600px] " alt="" />
          </div>
          <div className="basis-3/5">
            <h1 className='text-3xl md:text-5xl md:mt-0 mt-4 mb-5 ml-3 md:ml-0'>About <span className='text-[#D26E97]'>us</span></h1>
            <p className='text-gray-700 ml-4 md:ml-0'>Lorem ipsum dolor sit amet consectetur. Vivamus 
              gravida scelerisque massa ut elit convallis et.
              Amet proin et suspendisse molestie.  
              donec nisl lobortis risus nullam sagittis eget proin
              Viverra proin phasellus  tincidunt felis mollis. 
            </p>
            <p className='mt-3 text-gray-700 ml-4 md:ml-0'> Tempor tristique pretium elementum mi mauris. 
              Pellentesque sollicitudin facilisis mauris sit ac libero a. 
              Libero scelerisque pellentesque aliquam maecenas 
              convallis. Aliquam non massa tellus viverra. Volutpat ut ut 
              quis pellentesque pretium diam blandit aenean. Ultricies
              obortis in arcu pharetra. Sagittis sed ac nulla mauris. 
              sit ac libero a.
            </p>
          </div>
      </div>
    </div>
  )
}

export default About