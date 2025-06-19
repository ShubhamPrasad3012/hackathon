import React, { useEffect, useState } from 'react';
import Loader from './components/Loader';
import Page from './components/Page';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [showPage, setShowPage] = useState(false);

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  // Add/remove 'dark' class to <html>
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const timer1 = setTimeout(() => setFadeOut(true), 4500);
    const timer2 = setTimeout(() => {
      setLoading(false);
      setShowPage(true);
    }, 5000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <>
      {loading && <Loader fadeOut={fadeOut} />}

      <div
        className={`transition-opacity duration-1000 ${
          showPage ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {!loading && <Page darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}
      </div>
    </>
  );
};

export default App;
