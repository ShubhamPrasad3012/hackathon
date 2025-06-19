import React from 'react';
import Home from "./Home"
import Navbar from './Navbar';
import Sponsors from './Sponsors';
import Features from "./Features";
import Statistics from "./Statistics";
import Projects from "./Projects";

const Page = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="pt-16">
      
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <section id="home" className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
        <Home />
      </section>

      <section id="features" className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
        <Features />
      </section>

      <section id="sponsors" className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
        <Sponsors />
      </section>

      <section id="projects" className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
        <Projects />
      </section>

      <section id="statistics" className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
        <Statistics />
      </section>
    </div>
  );
};

export default Page;
