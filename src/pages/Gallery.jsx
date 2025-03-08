import React from 'react';
import Adop1 from '../assets/gal1.jpg';
import Adop2 from '../assets/gal3.jpg';
import Adop3 from '../assets/gal4.jpg';
import Adop4 from '../assets/gal5.jpg';

function Gallery() {
  return (
    <div className="mt-10 px-6 md:px-12 lg:px-24">
      <h1 className="text-center text-3xl font-bold text-[#1a1f71]">Gallery</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
        {/* Image 1 */}
        <div className="relative overflow-hidden group h-[18rem] sm:h-[21rem]">
          <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-0 transition duration-300"></div>
          <img
            src={Adop1}
            alt="Adoptive Motor 1"
            className="w-full h-full object-cover transform transition duration-300 group-hover:scale-110"
          />
        </div>

        {/* Image 2 */}
        <div className="relative overflow-hidden group h-[18rem] sm:h-[21rem]">
          <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-0 transition duration-300"></div>
          <img
            src={Adop2}
            alt="Adoptive Motor 2"
            className="w-full h-full object-cover transform transition duration-300 group-hover:scale-110"
          />
        </div>

        {/* Image 3 */}
        <div className="relative overflow-hidden group h-[18rem] sm:h-[21rem]">
          <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-0 transition duration-300"></div>
          <img
            src={Adop3}
            alt="Adoptive Motor 3"
            className="w-full h-full object-cover transform transition duration-300 group-hover:scale-110"
          />
        </div>

        {/* Image 4 */}
        <div className="relative overflow-hidden group h-[18rem] sm:h-[21rem]">
          <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-0 transition duration-300"></div>
          <img
            src={Adop4}
            alt="Adoptive Motor 4"
            className="w-full h-full object-cover transform transition duration-300 group-hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
