import React, { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ['Home', 'Features', 'Sponsors', 'Projects', 'Statistics'];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800 dark:text-white">
          Hackathon
        </div>

        <ul className="hidden md:flex gap-6 text-gray-700 dark:text-gray-300 font-medium">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-blue-500 dark:hover:text-blue-400 transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          {/* ✅ Toggle via props */}
          <button onClick={toggleDarkMode} className="text-gray-700 dark:text-gray-300">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-700 dark:text-gray-300">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 px-6 py-4 space-y-3 text-gray-700 dark:text-gray-300 font-medium">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block hover:text-blue-500 dark:hover:text-blue-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
