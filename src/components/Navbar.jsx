import React, { useEffect } from 'react'
import Vex from '../assets/VEX.png'
import {RxHamburgerMenu} from "react-icons/rx";
import { useTranslation } from 'react-i18next';
import i18next from "i18next";

const Navbar = () => {
	const { i18n, t } = useTranslation(["common"]);

  useEffect(() => {
		if (localStorage.getItem("i18nextLng")?.length > 2) {
			i18next.changeLanguage("en");
		}
	}, []);

	const handleLanguageChange = (e) => {
		i18n.changeLanguage(e.target.value);
	};
 

  return (
    <div className="w-full py-11 absolute">
     <div className="flex justify-between items-center w-5/6 mx-auto">
      <div className="flex ">
        <img src={Vex} alt="" />
        {/* <p className='ml-5 font-medium'>En/<span className='font-normal'>Ar</span></p> */}
        <select 
          value={localStorage.getItem("i18nextLng")}
          onChange={handleLanguageChange}
          className="form-select appearance-none block w-full px-3 ml-4 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 cursor-pointer focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example"
        >
            <option value="en" defaultValue="English">English</option>
            <option value="ar">Arabic</option>
            <option value="fr">French</option>
        </select>
      </div>

        {/* website view */}
        <div className="md:flex justify-between items-center gap-16 hidden font-Alegreya text-xl text-gray-700">
          <a href="#about">{t("about")}</a>
          <a href="#products">{t("products")}</a>
          <a href="#classes">{t("classes")}</a>
          <a href="#contact">{t("contact")}</a>
        </div>

        {/* mobile device */}
        <div className="md:hidden flex">
          <RxHamburgerMenu className='text-3xl'/>
        </div>

      </div>
    </div>
  )
}

export default Navbar