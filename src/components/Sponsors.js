import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sponsors = [
  '/assets/cursor.png',
  '/assets/brex.png',
  '/assets/remote.jpeg',
  '/assets/arc.png',
  '/assets/runway.png',
  '/assets/descript.jpeg',
  '/assets/openai.jpeg',
  '/assets/deepl.png',
  '/assets/figma.png',
  '/assets/notion.png',
  '/assets/linear.jpeg',
  '/assets/loom.png',
];

const Sponsors = () => {
  const [showAll, setShowAll] = useState(false);
  const [index, setIndex] = useState(0);
  const [hovering, setHovering] = useState(false);

  const group1 = sponsors.slice(0, 6);
  const group2 = sponsors.slice(6, 12);

  useEffect(() => {
    if (!showAll) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev === 0 ? 1 : 0));
    }, 1500);
    return () => clearInterval(interval);
  }, [showAll]);

  return (
    <div
      className="relative py-24 bg-black text-white text-center overflow-hidden"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-8">Sponsors</h2>

     {hovering && !showAll && (
  <motion.button
    onClick={() => setShowAll(true)}
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4 }}
    className="absolute inset-0 flex items-center justify-center bg-black/50 text-white px-6 py-3 rounded-xl font-semibold z-20"
  >
    Meet our sponsors
  </motion.button>
)}


      <div className="relative max-w-5xl mx-auto mt-40 px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          >
            {(index === 0 ? group1 : group2).map((logo, i) => (
              <div
                key={i}
                className="flex justify-center items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={logo}
                  alt={`sponsor-${i}`}
                  className="h-16 sm:h-20 md:h-24 object-contain"
                />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Sponsors;