import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Product from "./product";
import Contact from "./Contact";
import image1 from '../assets/car5.jpg';
import image2 from '../assets/car6.jpeg';
import image3 from '../assets/car7.jpg';
import Inno from "./Inno";
import { RiMentalHealthFill } from "react-icons/ri";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { SiEasyeda } from "react-icons/si";
import Gallery from "./Gallery";




const images = [
  `url(${image1})`,
  `url(${image2})`,
  `url(${image3})`,
];

const LandingPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Automatically change the background image every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
    <section className="hero">
      
              <div className="overlay"></div>

      <div className="relative h-screen overflow-hidden">
        {/* Hero Section */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 z-10 text-center">
          <section className=" text-white py-20">
            <h1 id="logo" className=" text-5xl font-bold">Welcome E-Bike</h1>
            <p className="text-l mt-4"> Mobility with Smart Adaptive Technology</p>
            <div><button className="px-5 py-3 rounded-xl mt-7 hover:bg-blue-700 bg-blue-500"> <a href="#contact">Contact Us</a></button></div>
          </section>
        </div>

        {/* Background Image Slider */}
        <motion.div
          className="absolute inset-0 h-full w-full bg-cover bg-center transition-all"
          style={{ backgroundImage: images[currentImageIndex] }}
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        />
        
      </div>
      </section>
      <div className=" adv  px-[4rem] gap-8 mt-[-2.5rem]">
          <div className="bg-[#5cb100]">
            <span ><RiMentalHealthFill className="icon" /></span>
            <h1>Reduced physical exertion</h1>
            <p>Electric bikes help riders maintain energy <br /> and cover longer distances without fatigue. </p>
          </div>
          {/* <div>
            <h1>Environmental impact</h1>
            <p>Electric bikes don't produce greenhouse gases, and they can help reduce air pollution and congestion. </p>
          </div> */}
          <div className="bg-[#ec661f]">
            <span ><FaMoneyCheckAlt className="icon" /></span>
            <h1>Cost-effectiveness</h1>
            <p> Electric bikes are cheaper to operate <br /> and maintain than cars and scooters. </p>
          </div>
          <div className="bg-[#4fb0dc]">
            <span ><SiEasyeda className="icon" /></span>
           <h1>Convenience</h1>
           <p>Electric bikes can help riders navigate traffic and congested streets. </p>
          </div>
        </div>
      
        <div className="min-h-screen  text-gray-900">
          <Product />
          <Inno/>
          <Gallery/>
          <Contact />
        </div>
      
      
      </div>
  );
};

export default LandingPage;
