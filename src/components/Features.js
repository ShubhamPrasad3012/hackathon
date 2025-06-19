import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sections = [
  {
    label: 'Billing',
    color: 'bg-rose-200',
    title: 'Billing System',
    description:
      'Our advanced billing system ensures accurate and timely invoices for all services offered. It helps streamline operations, reduce manual effort, and improve cash flow. With flexible billing cycles, real-time invoice tracking, and integrated tax compliance features, businesses can scale confidently and avoid billing disputes. Whether you are managing subscriptions or one-time payments, this system ensures every detail is captured with precision.',
    image: '/assets/billing.webp',
  },
  {
    label: 'Charging',
    color: 'bg-yellow-200',
    title: 'Online Charging System',
    description:
      'AI-powered insights that predict customer needs and drive personalized experiences. Handle real-time credit checks, policy enforcement, and prepaid/postpaid charging—all in one system.',
    image: '/assets/charging.jpeg',
  },
  {
    label: 'Catalog',
    color: 'bg-green-200',
    title: 'Product Catalog',
    description:
      'Easily manage service bundles and offerings. Our dynamic catalog allows you to quickly configure, launch, and update plans—enhancing customer satisfaction and operational agility.',
    image: '/assets/catalog.jpeg',
  },
  {
    label: 'Events',
    color: 'bg-cyan-200',
    title: 'Event Management',
    description:
      'Monitor customer activities and trigger real-time events like notifications, discounts, or alerts. Our platform ensures high throughput and scalability to track millions of events effortlessly.',
    image: '/assets/events.jpeg',
  },
];

const Capabilities = () => {
  const [activeIndex, setActiveIndex] = useState(1); 

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % sections.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const active = sections[activeIndex];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-950 py-20 px-4 md:px-16 text-black dark:text-white">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-10">BSS/OSS Capabilities</h2>

      <div className="flex justify-center flex-wrap gap-4 mb-10">
        {sections.map((tab, i) => (
          <button
            key={tab.label}
            className={`rounded-full px-6 py-2 text-sm md:text-base font-medium transition-all duration-300 ${
              i === activeIndex ? `${tab.color} scale-105` : 'bg-gray-300/40 dark:bg-gray-700/50'
            }`}
            onClick={() => setActiveIndex(i)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white dark:bg-gray-800 shadow-xl rounded-xl p-6 md:p-10"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4">{active.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{active.description}</p>
            </div>
            <div className="flex justify-center">
              <img
                src={active.image}
                alt={active.label}
                className="w-full max-w-sm rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Capabilities;
