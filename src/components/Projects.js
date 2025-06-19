import React, { useState } from 'react';

const ProductCard = ({ defaultImg, hoverImg }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-full sm:w-[45%] max-w-[500px] h-[80vh] transition-all duration-700 cursor-pointer overflow-hidden mx-auto group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={hovered ? hoverImg : defaultImg}
        alt="product"
        className={`w-full h-full object-cover transform duration-700 ease-in-out ${
          hovered ? 'scale-105 opacity-0' : 'scale-100 opacity-100'
        } absolute top-0 left-0 transition-all`}
      />
      <img
        src={hoverImg}
        alt="hovered"
        className={`w-full h-full object-cover transform duration-700 ease-in-out ${
          hovered ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        } absolute top-0 left-0 transition-all`}
      />

      <div className="absolute top-4 left-4 text-white text-xl font-bold z-10">
        NEW
      </div>

      <div
        className={`absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white text-black px-6 py-2 rounded-full font-medium text-base shadow-md transition-all duration-500 ${
          hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        ADD TO BAG +
      </div>
    </div>
  );
};


const ProductShowcase = () => {
  return (
    <section className="flex flex-col sm:flex-row justify-center items-center gap-6 h-[85vh] bg-black py-6">
      <ProductCard
        defaultImg="/assets/product1.jpeg"
        hoverImg="/assets/product2.jpeg"
      />
      <ProductCard
        defaultImg="/assets/product3.jpeg"
        hoverImg="/assets/product4.jpeg"
      />
    </section>
  );
};

export default ProductShowcase;

