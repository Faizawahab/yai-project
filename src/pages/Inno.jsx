import React from 'react'
import iimage from '../assets/iimage.jpg'

function Inno() {
  return (
    <div id="about" className="max-w-5xl mx-auto p-10 bg-white mt-10 flex flex-col md:flex-row items-center text-center md:text-left">
    <section className="md:w-1/2">
      <h2 className="text-3xl font-bold mb-6 text-[#1a1f71]">About the Innovator</h2>
      <p className="text-lg text-gray-700">
        Kojo Saka Darkwah is a passionate innovator from Millennium City - Kasoa, Central Region, dedicated to advancing sustainable 
        transportation solutions in Ghana. With a strong vision for accessible and eco-friendly mobility, he has developed an 
        Adaptive Motor for Electric Bicycles, designed to optimize power efficiency based on terrain, speed, and user input. His work 
        focuses on making electric bicycles a viable alternative to traditional transportation, addressing affordability challenges 
        while promoting clean energy. Through innovation and local manufacturing, Kojo aims to revolutionize the e-bike industry 
        and contribute to a greener future for Ghana and beyond.
      </p>
    </section>

    <div className="md:w-1/2 md:pl-8 mt-6 md:mt-0">
      <img src={iimage} alt="Kojo Saka Darkwah" className="w-full h-auto rounded-lg" />
    </div>
  </div>
  )
}

export default Inno