import React from 'react';
import { motion } from 'framer-motion';


const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-blue-900 to-blue-800 text-white flex items-center justify-center overflow-hidden px-4 md:px-8">
      {/* Background cards */}
     

      {/* Foreground content */}
      <div className="relative z-10 text-center max-w-3xl">
        <p className="text-sm mb-2 flex justify-center gap-3 flex-wrap">
          ⭐ 4.8 rating on Capterra | ⭐ 4.8 rating on G2 | ⭐ 350+ reviews on Xero | ⭐ 550+ reviews on QuickBooks
        </p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Create reports, forecasts,<br /> dashboards & consolidations
        </h1>

        <p className="mt-6 text-lg font-medium text-yellow-300 flex items-center justify-center gap-2">
          ✨ Now with AI-insights
        </p>

        <div className="mt-6 flex flex-col justify-center items-center gap-4">
          <button className="bg-white text-black font-semibold w-40 text-center items-center px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition">
            Start 14-day free trial →
          </button>
          <a href="#projects" className="text-sm hover:text-blue-300">
            👀 See what we do
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
