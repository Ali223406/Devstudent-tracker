import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const DarkModeToggleLayout = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedMode);
    if (savedMode) document.documentElement.classList.add('dark');
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);

  const switchDarkMode = () => setIsDarkMode(prev => !prev);

  return (
    <div>
      <button
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 transition shadow-lg hover:shadow-xl transform hover:scale-110"
        onClick={switchDarkMode}
        aria-label={isDarkMode ? "Passer au mode clair" : "Passer au mode sombre"}
        title={isDarkMode ? "Mode clair" : "Mode sombre"}
      >
        <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} size="lg" />
      </button>

      {/* Ici on rend tes enfants */}
      {children}
    </div>
  );
};

export default DarkModeToggleLayout;