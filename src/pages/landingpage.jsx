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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <section className="relative h-screen flex flex-col justify-center items-center text-center text-white">
        <motion.div
          className="absolute inset-0 h-full w-full bg-cover bg-center transition-all"
          style={{ backgroundImage: images[currentImageIndex] }}
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        />
        <div className="relative z-10 px-6 md:px-12 lg:px-24">
          <h1 className="text-4xl md:text-5xl font-bold">Welcome to E-Bike</h1>
          <p className="text-lg mt-4">Mobility with Smart Adaptive Technology</p>
          <button className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white rounded-lg">
            <a href="#contact">Contact Us</a>
          </button>
        </div>
      </section>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 md:px-12 lg:px-24 py-10">
        <div className="bg-green-500 text-white p-6 rounded-lg text-center flex flex-col items-center">
          <RiMentalHealthFill className="text-4xl mb-3" />
          <h1 className="text-xl font-bold">Reduced Physical Exertion</h1>
          <p className="mt-2">Electric bikes help riders maintain energy and cover longer distances without fatigue.</p>
        </div>
        <div className="bg-orange-500 text-white p-6 rounded-lg text-center flex flex-col items-center">
          <FaMoneyCheckAlt className="text-4xl mb-3" />
          <h1 className="text-xl font-bold">Cost-effectiveness</h1>
          <p className="mt-2">Electric bikes are cheaper to operate and maintain than cars and scooters.</p>
        </div>
        <div className="bg-blue-500 text-white p-6 rounded-lg text-center flex flex-col items-center">
          <SiEasyeda className="text-4xl mb-3" />
          <h1 className="text-xl font-bold">Convenience</h1>
          <p className="mt-2">Electric bikes help riders navigate traffic and congested streets.</p>
        </div>
      </div>
      
      <div className="px-6 md:px-12 lg:px-24">
        <Product />
        <Inno />
        <Gallery />
        <Contact />
      </div>
    </div>
  );
};

export default LandingPage;
