/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",  // Configuration de Tailwind pour scanner les fichiers HTML et les fichiers JavaScript/JSX/TypeScript/TSX dans le dossier src afin de générer les classes CSS utilisées dans l'application
  ],
  darkMode: 'class', // Activation du mode sombre basé sur une classe CSS (permet de basculer entre les thèmes clair et sombre en ajoutant ou supprimant la classe "dark" sur l'élément racine)
  theme: {
    extend: {
      colors: {
        'pw-white': '#FFFFFF',
        'pw-dark': '#333333',
        'pw-purple': '#9A48D0',
        'pw-green': '#7BC950',
        'pw-lilac': '#B288C0',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
