import React from 'react'
import home from '../assets/home2.png'
import { motion } from 'framer-motion'
import {FaFacebookF,FaInstagram,FaLinkedinIn} from "react-icons/fa";
import { useTranslation } from 'react-i18next';

const Home = () => {
	const { t } = useTranslation(["home"]);

  return (
    <div className='pt-40 w-full'>
      <div className="md:flex md:justify-between md:items-center md:h-full  w-5/6 mx-auto font-Alegreya">
         <div className="basis-3/5 md:flex flex-col md:items-start items-center ">
            <h1 className='text-7xl md:text-start text-center'>{t("cake") }<br />{t("yourDay") }</h1>
            <p className='tracking-wide text-gray-700	mt-8 mb-8 md:text-start text-center'>{t("forOur")}<br className='mb-2'/>
            {t("natural")} <br  className=''/>
              100% handsome
            </p>
            <div className="flex md:justify-start justify-center">
             <button className='bg-[#C0F3ED] py-3 px-5'>{t("button")}</button>
            </div>
         </div>
         <div className="basis-2/5 ">
          <img className='w-full max-w-[450px] md:max-[600px] hidden md:flex' src={home} alt="" />
          {/* <div className=" justify-end items-center gap-8 hidden md:flex mt-4">
            <FaFacebookF className='text-2xl'/>
            <FaInstagram className='text-2xl'/>
            <FaLinkedinIn  className='text-2xl'/>
          </div> */}
         </div>
      </div>
    </div>
  )
}

export default Home