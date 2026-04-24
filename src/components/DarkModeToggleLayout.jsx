import React, { useState, useEffect } from 'react'; // Import des hooks useState et useEffect pour gérer l'état et les effets de bord dans le composant
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  // Import du composant FontAwesomeIcon pour afficher les icônes de la bibliothèque Font Awesome
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';   // Import des icônes de lune et de soleil pour représenter les modes sombre et clair

const DarkModeToggleLayout = ({ children }) => {   // Composant fonctionnel qui enveloppe les enfants et fournit une fonctionnalité de bascule entre le mode sombre et le mode clair
  const [isDarkMode, setIsDarkMode] = useState(false);   // État pour suivre si le mode sombre est activé ou non, initialisé à false (mode clair)

  useEffect(() => {    // Effet de bord pour charger le mode sombre enregistré dans le localStorage lors du montage du composant
    const savedMode = localStorage.getItem('darkMode') === 'true';   // Récupération du mode sombre enregistré dans le localStorage et conversion en booléen
    setIsDarkMode(savedMode);
    if (savedMode) document.documentElement.classList.add('dark');  // Si le mode sombre est activé, ajouter la classe "dark" à l'élément racine pour appliquer les styles du mode sombre
  }, []);

  useEffect(() => {   // Effet de bord pour mettre à jour le localStorage et les classes CSS lorsque l'état du mode sombre change
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);

  const switchDarkMode = () => setIsDarkMode(prev => !prev); // Fonction pour basculer entre le mode sombre et le mode clair en inversant l'état actuel

  return (   // Rendu du composant avec un bouton de bascule pour le mode sombre et les enfants passés en props
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