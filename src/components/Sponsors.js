import React, { useState } from 'react';

const ProductCard = ({ defaultImg, hoverImg, label }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-full sm:w-1/2 h-[90vh] transition-all duration-700 cursor-pointer overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={hovered ? hoverImg : defaultImg}
        alt="product"
        className="w-full h-full object-cover transition-all duration-500"
      />
      <div className="absolute top-5 left-5 text-white font-semibold text-xl">
        NEW
      </div>
      {hovered && (
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white px-6 py-3 rounded-full text-black font-medium text-lg shadow-md transition-all duration-500">
          ADD TO BAG +
        </div>
      )}
    </div>
  );
};

const ProductShowcase = () => {
  return (
    <section className="flex flex-col sm:flex-row h-screen overflow-hidden">
      <ProductCard
        defaultImg="/assets/product1.png"
        hoverImg="/assets/product2.png"
        label="NEW"
      />
      <ProductCard
        defaultImg="/assets/product3.png"
        hoverImg="/assets/product4.png"
        label="NEW"
      />
    </section>
  );
};

export default ProductShowcase;
