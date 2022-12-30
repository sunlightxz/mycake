import React from 'react'
import map from '../assets/map.png'
import { MapContainer, TileLayer, useMap ,Marker ,Popup  } from 'react-leaflet'



const Footer = () => {
  return (
    <div id='contact' className='w-full py-16 bg-[#FAE9E0] mt-6'>
      <div className="flex md:flex-row flex-col  justify-center items-center gap-6 mb-16">
        <div className="map">
          {/* <img  src={map} alt="" /> */}
          <MapContainer className='w-[500px] h-[300px]' center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
        <div className="font-Alegreya flex">
         <div className="border w-[100px] h-0 border-t-7 border-black hidden md:flex mt-4 mr-2"></div>
         <div className="">
           <h1 className='text-3xl font-medium mb-5'>Our address </h1>
           <div className="">
            <p className='leading-8 tracking-wide text-gray-700'>110 St-Cathedral Pkwy Station</p>
            <p className='leading-8 tracking-wide text-gray-700'>94-54 Corona Ave., Elmhurst</p>
            <p className='leading-8 tracking-wide text-gray-700'>5627 Van Doren St, Queens</p>
            <p className='leading-8 tracking-wide text-gray-700'>4310 94th St, Flushing</p>
           </div>
         </div>
        </div>
      </div>
      <p className='text-center'>Copyright ©2022 All rights reserved | This template was made and designed by <span className='font-bold text-[#70A3AB]'>Sunlight</span></p>
    </div>
  )
}

export default Footer