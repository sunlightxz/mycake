import React from 'react'
import eclipse1 from '../assets/eclipse1.png'
import eclipse2 from '../assets/eclipse2.png'
import p1 from '../assets/p1.png'
import p2 from '../assets/p2.png'
import p3 from '../assets/p3.png'
import p4 from '../assets/p4.png'
import p5 from '../assets/p5.png'
import p6 from '../assets/p6.png'
import { useTranslation } from 'react-i18next';


const Products = () => {
  const { t } = useTranslation(["products"]);

  return (
    <div id='products' className='md:mt-72 mt-52 py-12 w-full relative bg-[#F5F7F7]'>
      <img className='absolute -z-10 ' src={eclipse1} alt="" /> 
       <div className="flex flex-col md:justify-between items-center md:h-full  w-5/6 mx-auto font-Alegreya">
          <h1 className='text-5xl md:text-7xl '>{t("products") }</h1>
          <p className='tracking-wide text-gray-700	py-11 text-center '>{t("p1") }
            <br /> f{t("p2") }
          </p>

          <div className=" sm:grid md:grid-cols-3 grid-cols-2 gap-8 ">
              
              <div className="flex flex-col justify-center text-center items-center bg-[#B84C73]/50 max-w-[470px] max-h-[300px] text-2xl font-poppins font-semibold rounded-md shadow-lg">
                <img className='hover:scale-110 transition delay-300 ease-in mt-2' src={p1} alt="" />
                <div className="mb-4">
                 <p className='font-Cedarville'>For men</p>
                 <p className='font-Josefin text-sm'>Cake Cenfrocafe</p>
                 <p className='font-Josefin text-sm'>$20.00</p>
                </div>
              </div>

              <div className="flex flex-col justify-center text-center items-center sm:mt-0 mt-3 p-10 bg-[#F9DD6E]/50 max-w-[300px] max-h-[300px] text-2xl font-poppins font-semibold rounded-md shadow-lg">
              <img className='hover:scale-110 transition delay-300 ease-in mt-2' src={p2} alt="" />
              <div className="mb-4">
                 <p className='font-Cedarville'>For men</p>
                 <p className='font-Josefin text-sm'>Cake Cenfrocafe</p>
                 <p className='font-Josefin text-sm'>$20.00</p>
                </div>
              </div>

              <div className="flex flex-col justify-center text-center items-center sm:mt-0 mt-3 p-10 bg-[#8BEFE9]/50 max-w-[300px] max-h-[300px] text-2xl font-poppins font-semibold rounded-md shadow-lg">
              <img className='hover:scale-110 transition delay-300 ease-in mt-2' src={p3} alt="" />
              <div className="mb-4">
                 <p className='font-Cedarville'>For men</p>
                 <p className='font-Josefin text-sm'>Cake Cenfrocafe</p>
                 <p className='font-Josefin text-sm'>$20.00</p>
                </div>
              </div>

              <div className="flex flex-col justify-center text-center items-center sm:mt-0 mt-3 p-10 bg-[#8BEFE9]/50 max-w-[300px] max-h-[300px] text-2xl font-poppins font-semibold rounded-md shadow-lg">
              <img className='hover:scale-110 transition delay-300 ease-in mt-2' src={p4} alt="" />
              <div className="mb-4">
                 <p className='font-Cedarville'>For men</p>
                 <p className='font-Josefin text-sm'>Cake Cenfrocafe</p>
                 <p className='font-Josefin text-sm'>$20.00</p>
                </div>
              </div>

              <div className="flex flex-col justify-center text-center items-center sm:mt-0 mt-3 p-10 bg-[#B84C73]/50 max-w-[300px] max-h-[300px] text-2xl font-poppins font-semibold rounded-md shadow-lg">
              <img className='hover:scale-110 transition delay-300 ease-in mt-2' src={p5} alt="" />
              <div className="mb-4">
                 <p className='font-Cedarville'>For men</p>
                 <p className='font-Josefin text-sm'>Cake Cenfrocafe</p>
                 <p className='font-Josefin text-sm'>$20.00</p>
                </div>
              </div>

              <div className="flex flex-col justify-center text-center items-center sm:mt-0 mt-3 p-10 bg-[#F9DD6E]/50 max-w-[300px] max-h-[300px] text-2xl font-poppins font-semibold rounded-md shadow-lg">
              <img className='hover:scale-110 transition delay-300 ease-in mt-2' src={p6} alt="" />
                <div className="mb-4">
                 <p className='font-Cedarville'>For men</p>
                 <p className='font-Josefin text-sm'>Cake Cenfrocafe</p>
                 <p className='font-Josefin text-sm'>$20.00</p>
                </div>
              </div>

              
              
          </div>
       </div>
       <img className='absolute -z-10 right-0' src={eclipse2} alt="" /> 

    </div>
  )
}

export default Products